//************************************************************************************************
//
// Control Surface SDK
// Copyright (c)2020 PreSonus Software Ltd.
//
// Filename    : midiprotocol.ts
// Description : MIDI Protocol Definitions
//
//************************************************************************************************
var PreSonus;
(function (PreSonus) {
    /**
     * MIDI status.
     */
    let Midi;
    (function (Midi) {
        /** MIDI Status: Note Off */
        Midi[Midi["kNoteOff"] = 128] = "kNoteOff";
        /** MIDI Status: Note On */
        Midi[Midi["kNoteOn"] = 144] = "kNoteOn";
        /**  MIDI Status: Poly Pressure */
        Midi[Midi["kPolyPressure"] = 160] = "kPolyPressure";
        /** MIDI Status: Controller */
        Midi[Midi["kController"] = 176] = "kController";
        /** MIDI Status: Program Change */
        Midi[Midi["kProgramChange"] = 192] = "kProgramChange";
        /** MIDI Status: Aftertouch */
        Midi[Midi["kAfterTouch"] = 208] = "kAfterTouch";
        /** MIDI Status: Pitchbend */
        Midi[Midi["kPitchBend"] = 224] = "kPitchBend";
    })(Midi = PreSonus.Midi || (PreSonus.Midi = {}));
    /**
     * Standard MIDI Controllers.
     */
    let MidiController;
    (function (MidiController) {
        /* Bank Select (MSB) */
        MidiController[MidiController["kBankSelectMSB"] = 0] = "kBankSelectMSB";
        /* Modulation Wheel */
        MidiController[MidiController["kModWheel"] = 1] = "kModWheel";
        /* Breath Controller */
        MidiController[MidiController["kBreathControl"] = 2] = "kBreathControl";
        /* Foot Controller */
        MidiController[MidiController["kFootControl"] = 4] = "kFootControl";
        /*  Portamento Time */
        MidiController[MidiController["kPortamentoTime"] = 5] = "kPortamentoTime";
        /*  Data Entry (MSB) */
        MidiController[MidiController["kDataEntryMSB"] = 6] = "kDataEntryMSB";
        /* Volume */
        MidiController[MidiController["kVolume"] = 7] = "kVolume";
        /* Balance */
        MidiController[MidiController["kBalance"] = 8] = "kBalance";
        /* Pan */
        MidiController[MidiController["kPan"] = 10] = "kPan";
        /* Expression */
        MidiController[MidiController["kExpression"] = 11] = "kExpression";
        /* Effect Control #1 */
        MidiController[MidiController["kEffectControl1"] = 12] = "kEffectControl1";
        /* Effect Control #2 */
        MidiController[MidiController["kEffectControl2"] = 13] = "kEffectControl2";
        /* General Purpose #1 */
        MidiController[MidiController["kGeneralPurpose1"] = 16] = "kGeneralPurpose1";
        /* General Purpose #2 */
        MidiController[MidiController["kGeneralPurpose2"] = 17] = "kGeneralPurpose2";
        /* General Purpose #3 */
        MidiController[MidiController["kGeneralPurpose3"] = 18] = "kGeneralPurpose3";
        /* General Purpose #4 */
        MidiController[MidiController["kGeneralPurpose4"] = 19] = "kGeneralPurpose4";
        /* Bank Select (LSB) */
        MidiController[MidiController["kBankSelectLSB"] = 32] = "kBankSelectLSB";
        /* Data Entry (LSB) */
        MidiController[MidiController["kDataEntryLSB"] = 38] = "kDataEntryLSB";
        /* Sustain Pedal (On/Off) */
        MidiController[MidiController["kSustainSwitch"] = 64] = "kSustainSwitch";
        /* Portamento (On/Off) */
        MidiController[MidiController["kPortamentoSwitch"] = 65] = "kPortamentoSwitch";
        /* Sustenuto (On/Off) */
        MidiController[MidiController["kSustenutoSwitch"] = 66] = "kSustenutoSwitch";
        /* Soft Pedal (On/Off) */
        MidiController[MidiController["kSoftPedalSwitch"] = 67] = "kSoftPedalSwitch";
        /* Legato Footswitch (On/Off) */
        MidiController[MidiController["kLegatoFootSwitch"] = 68] = "kLegatoFootSwitch";
        /* Hold 2 (On/Off) */
        MidiController[MidiController["kHold2Switch"] = 69] = "kHold2Switch";
        /* Sound Variation */
        MidiController[MidiController["kSoundVariation"] = 70] = "kSoundVariation";
        /* Filter Resonance (Sound Timbre) */
        MidiController[MidiController["kFilterResonance"] = 71] = "kFilterResonance";
        /* Release Time */
        MidiController[MidiController["kReleaseTime"] = 72] = "kReleaseTime";
        /* Attack Time */
        MidiController[MidiController["kAttackTime"] = 73] = "kAttackTime";
        /* Filter Cutoff (Sound Brightness) */
        MidiController[MidiController["kFilterCutoff"] = 74] = "kFilterCutoff";
        /* Decay Time */
        MidiController[MidiController["kDecayTime"] = 75] = "kDecayTime";
        /*  Vibrato Rate */
        MidiController[MidiController["kVibratoRate"] = 76] = "kVibratoRate";
        /* Vibrato Depth */
        MidiController[MidiController["kVibratoDepth"] = 77] = "kVibratoDepth";
        /* Vibrato Delay */
        MidiController[MidiController["kVibratoDelay"] = 78] = "kVibratoDelay";
        /* Sound Controller #10 */
        MidiController[MidiController["kSoundControl10"] = 79] = "kSoundControl10";
        /* General Purpose #5 */
        MidiController[MidiController["kGeneralPurpose5"] = 80] = "kGeneralPurpose5";
        /* General Purpose #6 */
        MidiController[MidiController["kGeneralPurpose6"] = 81] = "kGeneralPurpose6";
        /* General Purpose #7 */
        MidiController[MidiController["kGeneralPurpose7"] = 82] = "kGeneralPurpose7";
        /* General Purpose #8 */
        MidiController[MidiController["kGeneralPurpose8"] = 83] = "kGeneralPurpose8";
        /* Portamento Control */
        MidiController[MidiController["kPortamentoControl"] = 84] = "kPortamentoControl";
        /* Effect Depth #1 */
        MidiController[MidiController["kEffectDepth1"] = 91] = "kEffectDepth1";
        /* Effect Depth #2 */
        MidiController[MidiController["kEffectDepth2"] = 92] = "kEffectDepth2";
        /* Effect Depth #3 */
        MidiController[MidiController["kEffectDepth3"] = 93] = "kEffectDepth3";
        /* Effect Depth #4 */
        MidiController[MidiController["kEffectDepth4"] = 94] = "kEffectDepth4";
        /* Effect Depth #5 */
        MidiController[MidiController["kEffectDepth5"] = 95] = "kEffectDepth5";
        /* Data Increment */
        MidiController[MidiController["kDataIncrement"] = 96] = "kDataIncrement";
        /* Data Decrement */
        MidiController[MidiController["kDataDecrement"] = 97] = "kDataDecrement";
        /* NRPN Select LSB */
        MidiController[MidiController["kNRPNSelectLSB"] = 98] = "kNRPNSelectLSB";
        /* NRPN Select MSB */
        MidiController[MidiController["kNRPNSelectMSB"] = 99] = "kNRPNSelectMSB";
        /* RPN Select LSB */
        MidiController[MidiController["kRPNSelectLSB"] = 100] = "kRPNSelectLSB";
        /* RPN Select MSB */
        MidiController[MidiController["kRPNSelectMSB"] = 101] = "kRPNSelectMSB";
        /* All Sounds Off */
        MidiController[MidiController["kAllSoundsOff"] = 120] = "kAllSoundsOff";
        /* Reset All Controllers */
        MidiController[MidiController["kResetAll"] = 121] = "kResetAll";
        /*  Local Control (On/Off) */
        MidiController[MidiController["kLocalControlSwitch"] = 122] = "kLocalControlSwitch";
        /*  All Notes Off */
        MidiController[MidiController["kAllNotesOff"] = 123] = "kAllNotesOff";
        /* Omni Mode Off */
        MidiController[MidiController["kOmniModeOff"] = 124] = "kOmniModeOff";
        /* Omni Mode On */
        MidiController[MidiController["kOmniModeOn"] = 125] = "kOmniModeOn";
        /* Poly Mode (On/Off) */
        MidiController[MidiController["kPolyModeSwitch"] = 126] = "kPolyModeSwitch";
        /*  Poly Mode On */
        MidiController[MidiController["kPolyModeOn"] = 127] = "kPolyModeOn";
    })(MidiController = PreSonus.MidiController || (PreSonus.MidiController = {}));
    /**
     * Provides a uint8 array for use in sysex messages.
     *
     * Example: create and setup a buffer.
     * ```
     * let fillBuffer = function ()
     * {
     *   let header = [
     *    // exclude start (0xFA), already added by begin()
     *    0x00,
     *    0x01,
     *    0x06
     *   ];
     *
     *   let byteValue=0x05;
     *   let textValue="sometext";
     *
     *   SysexBuffer buffer = new SysexBuffer ();
     *   buffer.begin (header); // header, start
     *   buffer.push (byteValue);
     *   buffer.appendAscii (textValue);
     *   buffer.end (0xF7); // end
     * }
     * ```
     */
    class SysexBuffer {
        constructor() {
            this.data = new Uint8Array(SysexBuffer.kMaxSysexLength);
            this.length = 0;
        }
        /**
         * Begin SysEx message with given header.
         * @param {number[]} header
         */
        begin(header) {
            this.data[0] = 0xF0;
            this.length = 1;
            for (let i in header)
                this.data[this.length++] = header[i];
        }
        /** Terminate buffer. */
        end() {
            this.push(0xF7);
        }
        /**
         * Append 7-bit value.
         * @param {number} byteValue - Value to append.
         * */
        push(byteValue) {
            this.data[this.length++] = byteValue;
        }
        /**
         * Append ASCII string.
         * @param {string[]} text  ASCII string to append.
         */
        appendAscii(text) {
            for (let i = 0; i < text.length; i++) {
                let c = text.charCodeAt(i);
                if (c <= 0x7F)
                    this.push(c);
            }
        }
    }
    SysexBuffer.kMaxSysexLength = 512;
    PreSonus.SysexBuffer = SysexBuffer;
})(PreSonus || (PreSonus = {}));
