//************************************************************************************************
//
// Control Surface SDK
// Copyright (c)2020 PreSonus Software Ltd.
//
// Filename    : controlsurfacedevice.ts
// Description : Utilities for JavaScript Control Surface implementation
//
//************************************************************************************************
var PreSonus;
(function (PreSonus) {
    /**
     * Flags for control values.
     *
     * ```
     * // ControlHandler.sendValue ()
     * sendValue (value: any, flags: number): void
     * {
     *   let mode = FP.ValueBar.kFill;
     *   if(flags & PreSonus.ControlValue.kDisabled)
     *     mode = FP.ValueBar.kOff;
     *
     *   // mode specific encoding ...
     * }
     * ```
     */
    let ControlValue;
    (function (ControlValue) {
        /** Value is bipolar */
        ControlValue[ControlValue["kBipolar"] = 256] = "kBipolar";
        /** Value is disabled */
        ControlValue[ControlValue["kDisabled"] = 512] = "kDisabled";
    })(ControlValue = PreSonus.ControlValue || (PreSonus.ControlValue = {}));
    /**
     * Host supported time formats.
     */
    let TimeFormat;
    (function (TimeFormat) {
        /** Time format seconds */
        TimeFormat[TimeFormat["kSeconds"] = 0] = "kSeconds";
        /** Time format samples */
        TimeFormat[TimeFormat["kSamples"] = 1] = "kSamples";
        /** Time format musical */
        TimeFormat[TimeFormat["kMusical"] = 2] = "kMusical";
        /** Time format frames */
        TimeFormat[TimeFormat["kFrames"] = 3] = "kFrames";
    })(TimeFormat = PreSonus.TimeFormat || (PreSonus.TimeFormat = {}));
    //************************************************************************************************
    // ControlHandler
    //************************************************************************************************
    /**
     * A control handler does the low-level MIDI translation for controls on a device front panel like
     * buttons, encoders, faders, etc. The high-level control surface model usually deals with normalized
     * values or strings. The host provides a set of standard control handlers for common MIDI messages.
     * This class can be used to implement device-specific MIDI encodings.
     */
    class ControlHandler {
        constructor() {
            /**
             * Send MIDI event.
             *
             * @param status  MIDI message status byte.
             * @param data1  MIDI message data byte 1.
             * @param data2  MIDI message data byte 2.
             */
            this.sendMidi = function (status, data1, data2) {
                this.device.sendMidi(status, data1, data2);
            };
            /**
             * Internal function to trim text before sending to an LCD.
             *
             * @param text  Text to trim.
             * @param maxLength  Maximum length to trim to.
             * @param padding  Check in hostDevice.
             */
            this.trimText = function (text, maxLength, padding) {
                return this.device.hostDevice.trimText(text, maxLength, padding);
            };
            this.name = "";
            this.device = null;
            this.handlerIndex = ControlHandler.kInvalidHandlerIndex;
        }
        /**
         * Called by host to send value to hardware, implement in derived class.
         *
         * @param value  Value to update.
         * @param flags  Message flags.
         */
        sendValue(value, flags) { }
        /**
            * Call in script implementation to update value on host side.
            * @param value  Value to update.
            */
        updateValue(value) {
            this.device.hostDevice.updateValue(this.handlerIndex, value);
        }
        /** Force host to retransmit current value - will lead to sendValue (). */
        invalidate() {
            this.device.hostDevice.invalidate(this.handlerIndex);
        }
        /**
         * Internal function used inside onMidiEvent() to dispatch event to
         * handler if registered for receiving. Call updateValue() from within
         * after MIDI decoding.
         *
         * @param status  MIDI message status byte
         * @param data1  MIDI message data byte 1
         * @param data2  MIDI message data byte 2
         */
        receiveMidi(status, data1, data2) {
            return false;
        }
        /**
         * Internal function used inside onMidiEvent () to dispatch SysEx event to
         * handler if registered for receiving. Call updateValue () from within
         * after decoding the SysEx buffer.
         *
         * @param data  SysEx message buffer.
         * @param length  Message buffer length.
         */
        receiveSysex(data, length) {
            return false;
        }
        /** Get preallocated buffer for sending SysEx. */
        getSendBuffer() {
            return this.device.sysexSendBuffer;
        }
        /**
         * Send SysEx buffer.
         * @param sysexBuffer  Buffer to send, uint8 array.
         */
        sendSysex(sysexBuffer) {
            this.device.sendSysex(sysexBuffer);
        }
        /**
         * Log message via host device.
         * Requires host device to have debugLog enabled for effect.
         *
         * @param message  Text to log.
         */
        log(message) {
            if (this.device)
                this.device.log(message);
        }
    }
    ControlHandler.kInvalidHandlerIndex = -1;
    PreSonus.ControlHandler = ControlHandler;
    //************************************************************************************************
    // ControlSurfaceDevice
    //************************************************************************************************
    /**
     * Base class for control surface MIDI device. Use as I/O host for custom
     * control handler classes.
     */
    class ControlSurfaceDevice {
        constructor() {
            this.hostDevice = null;
            this.midiOutConnected = false;
            this.receiveHandlers = [];
            this.sysexSendBuffer = new PreSonus.SysexBuffer;
            this.debugLog = false;
        }
        /**
         * Initialization, called by host when device is created.
         *
         * @param hostDevice  Host script-capable device object.
         */
        onInit(hostDevice) {
            this.hostDevice = hostDevice;
        }
        /** Called by host when device is being destroyed. */
        onExit() {
            this.hostDevice = null;
        }
        /** Called by host when MIDI output is connected or disconnected. */
        onMidiOutConnected(state) {
            this.midiOutConnected = state;
        }
        /* Optional: Called by host periodically. */
        onIdle(time) {
            // do nothing
        }
        /**
         * Called by host when new simple MIDI event is received.
         * Return false for default processing in host.
         *
         * @param status  MIDI message status byte.
         * @param data1  MIDI message data byte 1.
         * @param data2  MIDI message data byte 2.
         */
        onMidiEvent(status, data1, data2) {
            for (let i in this.receiveHandlers) {
                let handler = this.receiveHandlers[i];
                if (handler.receiveMidi(status, data1, data2))
                    return true;
            }
            return false;
        }
        /**
         * Called by host when SysEx event is received.
         * @param data  SysEx message buffer.
         * @param length  Message buffer length.
         */
        onSysexEvent(data, length) {
            for (let i in this.receiveHandlers) {
                let handler = this.receiveHandlers[i];
                if (handler.receiveSysex(data, length))
                    return true;
            }
            return false;
        }
        /**
         * Register a send control handler.
         * @param handler  Control handler to add.
         */
        addHandler(handler) {
            handler.device = this;
            handler.handlerIndex = this.hostDevice.addHandler(handler.name, handler);
        }
        /**
         * Register a receive control handler.
         * @param handler  Control handler to add.
         */
        addReceiveHandler(handler) {
            this.addHandler(handler);
            this.receiveHandlers.push(handler);
        }
        /**
         * Send MIDI event.
         *
         * @param status  MIDI message status byte.
         * @param data1  MIDI message data byte 1.
         * @param data2  MIDI message data byte 2.
         */
        sendMidi(status, data1, data2) {
            this.hostDevice.sendMidiEvent(status, data1, data2);
        }
        /**
         * Send SysEx buffer.
         * @param sysexBuffer  Buffer to send.
         */
        sendSysex(sysexBuffer) {
            this.hostDevice.sendSysexEvent(sysexBuffer.data, sysexBuffer.length);
        }
        /**
         * Send pitch bend message to host.
         * @param value  Normalized parameter value.
         */
        sendPitchBendToHost(value) {
            this.hostDevice.sendPitchBendToHost(value);
        }
        /**
         * Send modulation message to host.
         * @param value  Normalized parameter value.
         */
        sendModulationToHost(value) {
            this.hostDevice.sendModulationToHost(value);
        }
        /**
         * Send expression message to host.
         * @param value  Normalized parameter value.
         */
        sendExpressionToHost(value) {
            this.hostDevice.sendExpressionToHost(value);
        }
        /**
         * Send breath control message to host.
         * @param value  Normalized parameter value.
         */
        sendBreathControlToHost(value) {
            this.hostDevice.sendBreathControlToHost(value);
        }
        /**
         * Send sustain message to host.
         * @param value  Normalized parameter value, interpreted as bool.
         */
        sendSustainToHost(value) {
            this.hostDevice.sendSustainToHost(value);
        }
        /**
         * Output debug message, requires debugLog to be enabled.
         * @param message  Message to log.
         */
        log(message) {
            if (this.debugLog)
                this.hostDevice.log(message);
        }
    }
    PreSonus.ControlSurfaceDevice = ControlSurfaceDevice;
})(PreSonus || (PreSonus = {}));
