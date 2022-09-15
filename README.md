<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

*   [ChannelType][1]
*   [Banks][2]
*   [RemapHint][3]
*   [kFocus][4]
*   [kGlobal][5]
*   [PadSectionRole][6]
*   [kMusicInput][7]
*   [kStepEdit][8]
*   [kRateTrigger][9]
*   [kIdle][10]
*   [PadModifier][11]
    *   [PadModifier][12]
    *   [PadModifier][13]
*   [addCommand][14]
    *   [Parameters][15]
*   [kCurrentBankChanged][16]
*   [kKeyboardModeChanged][17]
*   [MusicPadDisplayMode][18]
*   [ParamID][19]
*   [kBrowserFocusNode][20]
*   [kBrowserFocusNodeParent][21]
*   [kBrowserFocusNodeExpandable][22]
*   [kPagingPageNumber][23]
*   [kPagingPageCount][24]
*   [kPagingStatus][25]
*   [kPagingStatusFormat][26]
*   [kPagingMode][27]
*   [kPagingNextPage][28]
*   [kPagingPreviousPage][29]
*   [PropertyID][30]
*   [PagingMode][31]
*   [ComponentID][32]
*   [kPaging][33]
*   [kEditor][34]
*   [DeviceClassID][35]
*   [kNoteFXChorder][36]
*   [kNoteFXArpeggiator][37]
*   [kInstrumentImpact][38]
*   [kInstrumentSampleOne][39]
*   [FolderID][40]
*   [kSendsFolder][41]
*   [kCueMixFolder][42]
*   [calcBeatLength][43]
    *   [Parameters][44]
*   [HostUtils][45]
    *   [enableEditorNotifications][46]
        *   [Parameters][47]
    *   [enableEngineEditNotifications][48]
        *   [Parameters][49]
    *   [getEditorType][50]
        *   [Parameters][51]
    *   [focusWorkspaceFrame][52]
        *   [Parameters][53]
    *   [setParamMouseOverEnabled][54]
        *   [Parameters][55]
    *   [selectNextDevice][56]
        *   [Parameters][57]
    *   [openEditorAndFocus][58]
        *   [Parameters][59]
    *   [makeChannelVisible][60]
        *   [Parameters][61]
    *   [addNoteFXDevice][62]
        *   [Parameters][63]
    *   [kBrowserZone][64]
    *   [kArrangementZone][65]
    *   [kInstrumentEditor][66]
    *   [kNoteFXEditor][67]
*   [ControlSurfaceComponent][68]
    *   [onInit][69]
        *   [Parameters][70]
    *   [onExit][71]
    *   [log][72]
        *   [Parameters][73]
    *   [notify][74]
        *   [Parameters][75]
    *   [paramChanged][76]
        *   [Parameters][77]
*   [onActivate][78]
    *   [Parameters][79]
*   [onPadPressed][80]
    *   [Parameters][81]
*   [ControlValue][82]
    *   [ControlValue][83]
    *   [ControlValue][84]
*   [TimeFormat][85]
    *   [TimeFormat][86]
    *   [TimeFormat][87]
    *   [TimeFormat][88]
    *   [TimeFormat][89]
*   [ControlHandler][90]
    *   [sendMidi][91]
        *   [Parameters][92]
    *   [trimText][93]
        *   [Parameters][94]
    *   [sendValue][95]
        *   [Parameters][96]
    *   [updateValue][97]
        *   [Parameters][98]
    *   [invalidate][99]
    *   [receiveMidi][100]
        *   [Parameters][101]
    *   [receiveSysex][102]
        *   [Parameters][103]
    *   [getSendBuffer][104]
    *   [sendSysex][105]
        *   [Parameters][106]
    *   [log][107]
        *   [Parameters][108]
*   [ControlSurfaceDevice][109]
    *   [onInit][110]
        *   [Parameters][111]
    *   [onExit][112]
    *   [onMidiOutConnected][113]
        *   [Parameters][114]
    *   [onMidiEvent][115]
        *   [Parameters][116]
    *   [onSysexEvent][117]
        *   [Parameters][118]
    *   [addHandler][119]
        *   [Parameters][120]
    *   [addReceiveHandler][121]
        *   [Parameters][122]
    *   [sendMidi][123]
        *   [Parameters][124]
    *   [sendSysex][125]
        *   [Parameters][126]
    *   [sendPitchBendToHost][127]
        *   [Parameters][128]
    *   [sendModulationToHost][129]
        *   [Parameters][130]
    *   [sendExpressionToHost][131]
        *   [Parameters][132]
    *   [sendBreathControlToHost][133]
        *   [Parameters][134]
    *   [sendSustainToHost][135]
        *   [Parameters][136]
    *   [log][137]
        *   [Parameters][138]
*   [Midi][139]
    *   [Midi][140]
    *   [Midi][141]
    *   [Midi][142]
    *   [Midi][143]
    *   [Midi][144]
    *   [Midi][145]
    *   [Midi][146]
*   [MidiController][147]
*   [SysexBuffer][148]
    *   [begin][149]
        *   [Parameters][150]
    *   [end][151]
    *   [push][152]
        *   [Parameters][153]
    *   [appendAscii][154]
        *   [Parameters][155]
*   [Music][156]
    *   [padIndexToSymbolicPitch][157]
        *   [Parameters][158]
    *   [symbolicPitchToPadIndex][159]
        *   [Parameters][160]
    *   [kNumPitches][161]
    *   [kKeySymbols][162]
*   [MusicalScale][163]
    *   [MusicalScale][164]
    *   [MusicalScale][165]
    *   [MusicalScale][166]
    *   [MusicalScale][167]
    *   [MusicalScale][168]
    *   [MusicalScale][169]
    *   [MusicalScale][170]
    *   [MusicalScale][171]
    *   [MusicalScale][172]
    *   [MusicalScale][173]
    *   [MusicalScale][174]
    *   [MusicalScale][175]
    *   [MusicalScale][176]
    *   [MusicalScale][177]
    *   [MusicalScale][178]
*   [ISamplerUIEditor][179]

## ChannelType

Host supported mixer channel types.

## Banks

Mixer channel bank names.

## RemapHint

Control Link remapping hints.

    if(pluginBankElement.remapHint == PreSonus.RemapHint.kFocus)
      log ("focus mapping")

## kFocus

Plugin focus

## kGlobal

Global host focus

## PadSectionRole

Handler roles supported by PadSectionComponent.

    padSectionComponent.addHandlerForRole (PreSonus.PadSectionRole.kMusicInput);

## kMusicInput

Musical input.

## kStepEdit

Step editing, sequencing.

## kRateTrigger

Trigger note repeat rates.

## kIdle

Bypass or disable pad input.

## PadModifier

Step editor supported pad modifiers.

    padSectionComponent.setModifierActive (true, PreSonus.PadModifier.kStepBinding);

### PadModifier

Set step to accented.

### PadModifier

Use step binding to concatenate multiple steps.

## addCommand

Add command to 'commands'.

### Parameters

*   `commands` &#x20;
*   `padIndex` &#x20;
*   `category` &#x20;
*   `name` &#x20;
*   `args` &#x20;
*   `flags` &#x20;
*   `zone` &#x20;
*   `color` &#x20;

## kCurrentBankChanged

Notification: current bank changed.

## kKeyboardModeChanged

Notification: keyboard mode changed.

## MusicPadDisplayMode

Pad section music input pad handler display mode.

    let musicInputHandler = <PreSonus.PadSectionMusicInputHandler> component.getHandler (mode);
    musicInputHandler.setDisplayMode (PreSonus.MusicPadDisplayMode.kBrightColors);

## ParamID

Common parameter IDs.

    let labelParam = component.findParameter (PreSonus.ParamID.kLabel);

## kBrowserFocusNode

Browser: focus node title, as alias

## kBrowserFocusNodeParent

Browser: focus node parent title, as alias

## kBrowserFocusNodeExpandable

Browser: focus node is expandable or not, as alias

## kPagingPageNumber

Paging: component page number (not an index).

## kPagingPageCount

Paging: max pages count

## kPagingStatus

Paging: combined paging status string

## kPagingStatusFormat

Paging: paging status format

## kPagingMode

Paging mode: single, multi, auto

## kPagingNextPage

Paging: trigger next page

## kPagingPreviousPage

Paging: trigger previous page

## PropertyID

Host object properties
\*

## PagingMode

Control Link paging modes.

## ComponentID

Host component IDs.

    let pagingComponent = hostComponent.find (PreSonus.ComponentID.kPaging);

## kPaging

PagingComponent ID

## kEditor

EditComponent ID

## DeviceClassID

Host device class IDs.

    PreSonus.HostUtils.addNoteFXDevice (PreSonus.DeviceClassID.kNoteFXChorder, false);

## kNoteFXChorder

NoteFX device 'Chorder' CID.

## kNoteFXArpeggiator

NoteFX device 'Arpeggiator' CID.

## kInstrumentImpact

'Impact' instrument CID.

## kInstrumentSampleOne

'SampleOne' instrument CID.

## FolderID

Host device folder IDs.

    let maxSendCount = mixerConsole.audioMixer.getMaxSlotCount (PreSonus.FolderID.kSendsFolder);

## kSendsFolder

Channel Sends Folder.

## kCueMixFolder

Channel CueMix Folder.

## calcBeatLength

Calculate beat length.

### Parameters

*   `denominator` &#x20;
*   `triplet`  Calculate as triplet.

## HostUtils

Utility functions for interacting with the host application.

### enableEditorNotifications

Enable or disable notifications when active editor changes.

Example: enable notifications for control surface component

    class MyComponent extends PreSonus.ControlSurfaceComponent
    {
      onInit (hostComponent: Presonus.SurfaceHostComponent)
      {
        super.onInit (hostComponent);
        PreSonus.HostUtils.enableEditorNotifications (this, enable);
      }
    }

#### Parameters

*   `observer`  Object to be de-/notified about editor changes.
*   `state`  Enable or disable notifications.

### enableEngineEditNotifications

Enable or disable engine edit notifications.

Example: enable notifications for control surface component

    class MyComponent extends PreSonus.ControlSurfaceComponent
    {
      onInit (hostComponent: Presonus.SurfaceHostComponent)
      {
        super.onInit (hostComponent);
        PreSonus.HostUtils.enableEngineEditNotifications (this, enable);
      }
    }

#### Parameters

*   `observer`  Object to be de-/notified about engine edit changes.
*   `state`  Enable or disable notifications.

### getEditorType

Derive active editor type from editor object native class name.

Example: get editor type on host editor change notification

    class MyComponent extends PreSonus.ControlSurfaceComponent
    {
      onTrackEditorChangedNotify (editor: any)
      {
        let editorType = PreSonus.HostUtils.kEditorTypeNone;
        if(editor)
          editorType = PreSonus.HostUtils.getEditorType (editor);

        // Process editor type ...
      }
    }

#### Parameters

*   `editor`  Current editor object, providing native class name.

### focusWorkspaceFrame

Focus workspace frame in host application.

Example: set focus to browser zone immediately.

    class MyComponent extends PreSonus.ControlSurfaceComponent
    {
      focusBrowser ()
      {
        let deferred = false;
        PreSonus.HostUtils.focusWorkspaceFrame (PreSonus.HostUtils.kBrowserZone, deferred);
      }
    }

#### Parameters

*   `frameName`  Host application UI frame to shift focus to.
*   `deferred`  Shift focus immediately (and wait until done) or deferred.

### setParamMouseOverEnabled

Turn mouse-over mode for recent parameter on/off via host application
command "Automation/Mouse-Over".

Example:

    class MyComponent extends PreSonus.ControlSurfaceComponent
    {
      onButtonPressed (state: boolean)
      {
        PreSonus.HostUtils.setParamMouseOverEnabled (state);
      }
    }

#### Parameters

*   `state`  Enable or disable param mouse over.

### selectNextDevice

Select next or previous device in rack.

Example: select next or previous device on encoder value change

    class MyComponent extends PreSonus.ControlSurfaceComponent
    {
      focusInsertsBankElement: PreSonus.InteractiveElement;

      onEncoderChanged (value: number)
      {
        // focusInsertsBankElement previously determined via
        // focus bank -> focus channel -> inserts bank

        PreSonus.HostUtils.selectNextDevice (this, this.focusInsertsBankElement,
          value >= 0.5 ? +1 : -1);
      }
    }

#### Parameters

*   `component`  Component to set as device focus component.
*   `bankElement`  Controllable providing bank element.
*   `offset`  Slot index offset.

### openEditorAndFocus

Open device editor and set ControlLink focus.

Example: open instrument editor for focus channel

    class MyComponent extends PreSonus.ControlSurfaceComponent
    {
      onButtonPressed (state: boolean)
      {
        if(!state)
          return;

        // Access follow bank via surface model -> root-> lookup XML element by name.
        let root = hostComponent.model.root;
        let mixerConsoleMappingElement = root.find ("MixerConsoleMapping");
        let mixerFollowBankMapping = mixerConsoleMappingElement.find ("MixerFollowBank");
        PreSonus.HostUtils.openEditorAndFocus (this, mixerFollowBankMapping.getElement (0),
          PreSonus.HostUtils.kInstrumentEditor, true);
      }
    }

#### Parameters

*   `component`  Component to set as device focus component.
*   `element`  Channel element to open the editor for, has to be connected.
*   `context`  Type of editor to open.
*   `toggle`  Toggle open/close editor if already open.

### makeChannelVisible

Make channel visible in host GUI by focussing it.

Example: check channel select status, if selected focus it

    class MyComponent extends PreSonus.ControlSurfaceComponent
    {
      onButtonPressed (state: boolean)
      {
        if(!state)
          return;

        // ... channelElement from bank
        if(channelElement.isAliasConnected (channel.selectValue, PreSonus.ParamID.kSelect))
        {
          if(channelElement.getParamValue (PreSonus.ParamID.kSelect))
            PreSonus.HostUtils.makeChannelVisible (channelElement);
        }
    }

#### Parameters

*   `channel`  Channel element to focus.

### addNoteFXDevice

Add Note FX device by device class ID.

Example: add 'Chorder' Note FX device

    class MyComponent extends PreSonus.ControlSurfaceComponent
    {
      onButtonPressed (state: boolean)
      {
        if(!state)
          return;

        // do not defer, wait for device to be added before opening editor
        PreSonus.HostUtils.addNoteFXDevice (PreSonus.DeviceClassID.kNoteFXChorder, false);
        let element = <PreSonus.InteractiveElement> this.focusChannelMapping.getElement (0);
        if(element)
          PreSonus.HostUtils.openEditorAndFocus (this, element, PreSonus.HostUtils.kNoteFXEditor, false);
      }
    }

#### Parameters

*   `cid`  Note FX device class ID.
*   `deferred`  Perform add command deferred in synchronized.

### kBrowserZone

Browser workspace zone.

### kArrangementZone

Arrangement workspace zone.

### kInstrumentEditor

Instrument channel editor context.

### kNoteFXEditor

Note FX channel editor context.

## ControlSurfaceComponent

Control surface scriptable component class.

### onInit

Component initialization, called by host on surface creation.

Example:

    class MyComponent extends PreSonus.ControlSurfaceComponent
    {
       onInit (hostComponent: Presonus.SurfaceHostComponent)
       {
         super.onInit (hostComponent);
         // additional init code
       }
    }

#### Parameters

*   `hostComponent`  device surface unit, parent host component

### onExit

Component exit, called on surface removal or reset.

Example:

    class MyComponent extends PreSonus.ControlSurfaceComponent
    {
      onExit ()
      {
        // additional exit code
        super.onExit ();
      }
    }

### log

Log message to host console for debugging, requires debugLog to be enabled.

Example: enable debug logging

    class MyComponent extends PreSonus.ControlSurfaceComponent
    {
      onInit (hostComponent: Presonus.SurfaceHostComponent)
      {
        super.onInit (hostComponent);
        this.debugLog = true;
        this.log ("Hello World");
      }
    }

#### Parameters

*   `message`  Text to log.

### notify

Process a notification.

Example: react to 'changed' message alias parameter

    class MyComponent extends PreSonus.ControlSurfaceComponent
    {
      notify (subject: PreSonus.Object, msg: PreSonus.Message)
      {
        // sanity check sender subject and message are available
        if(!subject || !msg)
          return;

        // typically check for what is signaled and by whom (subject)
        // here, an alias parameter signaled a change
        if(msg.id == "changed")
          if(subject == this.someAliasParam)
            // process ...
      }
    }

#### Parameters

*   `subject`  Message sending object.
*   `msg`  Received message (id and arguments).

### paramChanged

Process a parameter change.

Example:

    class MyComponent extends PreSonus.ControlSurfaceComponent
    {
      demoParam: PreSonus.Parameter;

      onInit (hostComponent: Presonus.SurfaceHostComponent)
      {
        super.onInit (hostComponent);
        this.demoParam = this.hostComponent.paramList.addParam ("demoParam");
      }

      paramChanged (param: PreSonus.Parameter)
      {
        if(!param)
          return;

        // check for a particular parameter
        if(param == this.demoParam)
          this.log ("demoParam value changed to " + param.value)
      }
    }

#### Parameters

*   `param`  Changed parameter.

## onActivate

Activation event handling.

### Parameters

*   `state`  Activate state.

## onPadPressed

Pad pressed event handling.

### Parameters

*   `padIndex`  Pressed pad index.
*   `state`  Pad pressed state.
*   `modifiers`  Additional pressed modifiers.

## ControlValue

Flags for control values.

    // ControlHandler.sendValue ()
    sendValue (value: any, flags: number): void
    {
      let mode = FP.ValueBar.kFill;
      if(flags & PreSonus.ControlValue.kDisabled)
        mode = FP.ValueBar.kOff;

      // mode specific encoding ...
    }

### ControlValue

Value is bipolar

### ControlValue

Value is disabled

## TimeFormat

Host supported time formats.

### TimeFormat

Time format seconds

### TimeFormat

Time format samples

### TimeFormat

Time format musical

### TimeFormat

Time format frames

## ControlHandler

A control handler does the low-level MIDI translation for controls on a device front panel like
buttons, encoders, faders, etc. The high-level control surface model usually deals with normalized
values or strings. The host provides a set of standard control handlers for common MIDI messages.
This class can be used to implement device-specific MIDI encodings.

### sendMidi

Send MIDI event.

#### Parameters

*   `status`  MIDI message status byte.
*   `data1`  MIDI message data byte 1.
*   `data2`  MIDI message data byte 2.

### trimText

Internal function to trim text before sending to an LCD.

#### Parameters

*   `text`  Text to trim.
*   `maxLength`  Maximum length to trim to.
*   `padding`  Check in hostDevice.

### sendValue

Called by host to send value to hardware, implement in derived class.

#### Parameters

*   `value`  Value to update.
*   `flags`  Message flags.

### updateValue

Call in script implementation to update value on host side.

#### Parameters

*   `value`  Value to update.

### invalidate

Force host to retransmit current value - will lead to sendValue ().

### receiveMidi

Internal function used inside onMidiEvent() to dispatch event to
handler if registered for receiving. Call updateValue() from within
after MIDI decoding.

#### Parameters

*   `status`  MIDI message status byte
*   `data1`  MIDI message data byte 1
*   `data2`  MIDI message data byte 2

### receiveSysex

Internal function used inside onMidiEvent () to dispatch SysEx event to
handler if registered for receiving. Call updateValue () from within
after decoding the SysEx buffer.

#### Parameters

*   `data`  SysEx message buffer.
*   `length`  Message buffer length.

### getSendBuffer

Get preallocated buffer for sending SysEx.

### sendSysex

Send SysEx buffer.

#### Parameters

*   `sysexBuffer`  Buffer to send, uint8 array.

### log

Log message via host device.
Requires host device to have debugLog enabled for effect.

#### Parameters

*   `message`  Text to log.

## ControlSurfaceDevice

Base class for control surface MIDI device. Use as I/O host for custom
control handler classes.

### onInit

Initialization, called by host when device is created.

#### Parameters

*   `hostDevice`  Host script-capable device object.

### onExit

Called by host when device is being destroyed.

### onMidiOutConnected

Called by host when MIDI output is connected or disconnected.

#### Parameters

*   `state` &#x20;

### onMidiEvent

Called by host when new simple MIDI event is received.
Return false for default processing in host.

#### Parameters

*   `status`  MIDI message status byte.
*   `data1`  MIDI message data byte 1.
*   `data2`  MIDI message data byte 2.

### onSysexEvent

Called by host when SysEx event is received.

#### Parameters

*   `data`  SysEx message buffer.
*   `length`  Message buffer length.

### addHandler

Register a send control handler.

#### Parameters

*   `handler`  Control handler to add.

### addReceiveHandler

Register a receive control handler.

#### Parameters

*   `handler`  Control handler to add.

### sendMidi

Send MIDI event.

#### Parameters

*   `status`  MIDI message status byte.
*   `data1`  MIDI message data byte 1.
*   `data2`  MIDI message data byte 2.

### sendSysex

Send SysEx buffer.

#### Parameters

*   `sysexBuffer`  Buffer to send.

### sendPitchBendToHost

Send pitch bend message to host.

#### Parameters

*   `value`  Normalized parameter value.

### sendModulationToHost

Send modulation message to host.

#### Parameters

*   `value`  Normalized parameter value.

### sendExpressionToHost

Send expression message to host.

#### Parameters

*   `value`  Normalized parameter value.

### sendBreathControlToHost

Send breath control message to host.

#### Parameters

*   `value`  Normalized parameter value.

### sendSustainToHost

Send sustain message to host.

#### Parameters

*   `value`  Normalized parameter value, interpreted as bool.

### log

Output debug message, requires debugLog to be enabled.

#### Parameters

*   `message`  Message to log.

## Midi

MIDI status.

### Midi

MIDI Status: Note Off

### Midi

MIDI Status: Note On

### Midi

MIDI Status: Poly Pressure

### Midi

MIDI Status: Controller

### Midi

MIDI Status: Program Change

### Midi

MIDI Status: Aftertouch

### Midi

MIDI Status: Pitchbend

## MidiController

Standard MIDI Controllers.

## SysexBuffer

Provides a uint8 array for use in sysex messages.

Example: create and setup a buffer.

    let fillBuffer = function ()
    {
      let header = [
       // exclude start (0xFA), already added by begin()
       0x00,
       0x01,
       0x06
      ];

      let byteValue=0x05;
      let textValue="sometext";

      SysexBuffer buffer = new SysexBuffer ();
      buffer.begin (header); // header, start
      buffer.push (byteValue);
      buffer.appendAscii (textValue);
      buffer.end (0xF7); // end
    }

### begin

Begin SysEx message with given header.

#### Parameters

*   `header` **[Array][180]<[number][181]>**&#x20;

### end

Terminate buffer.

### push

Append 7-bit value.

#### Parameters

*   `byteValue` **[number][181]** Value to append.

### appendAscii

Append ASCII string.

#### Parameters

*   `text` **[Array][180]<[string][182]>** ASCII string to append.

## Music

Namespace for music related definitions
and utility functions.

### padIndexToSymbolicPitch

Convert a pad index to symbolic pitch.

#### Parameters

*   `padIndex` **[number][181]** Pad index to convert.

### symbolicPitchToPadIndex

Convert a symbolic pitch to pad index.

#### Parameters

*   `pitch` **[number][181]** Pitch to convert.

### kNumPitches

Total number of pitches

### kKeySymbols

Key names for an octave, ranging from
'C' (index 0) to 'B' (index 11).

## MusicalScale

Musical scales supported by PadSectionComponent.

    padSection.component.setScale (PreSonus.MusicalScale.kMajor);

### MusicalScale

Chromatic

### MusicalScale

Major

### MusicalScale

Melodic Minor

### MusicalScale

Harmonic Minor

### MusicalScale

Natural Minor

### MusicalScale

Major Pentatonic

### MusicalScale

Minor Pentatonic

### MusicalScale

Blues

### MusicalScale

Dorian

### MusicalScale

Mixolydian

### MusicalScale

Phyrigian

### MusicalScale

Major Triad

### MusicalScale

Minor Triad

### MusicalScale

Max scale index

### MusicalScale

Default scale

## ISamplerUIEditor

Interface to sampler editor.

[1]: #channeltype

[2]: #banks

[3]: #remaphint

[4]: #kfocus

[5]: #kglobal

[6]: #padsectionrole

[7]: #kmusicinput

[8]: #kstepedit

[9]: #kratetrigger

[10]: #kidle

[11]: #padmodifier

[12]: #padmodifier-1

[13]: #padmodifier-2

[14]: #addcommand

[15]: #parameters

[16]: #kcurrentbankchanged

[17]: #kkeyboardmodechanged

[18]: #musicpaddisplaymode

[19]: #paramid

[20]: #kbrowserfocusnode

[21]: #kbrowserfocusnodeparent

[22]: #kbrowserfocusnodeexpandable

[23]: #kpagingpagenumber

[24]: #kpagingpagecount

[25]: #kpagingstatus

[26]: #kpagingstatusformat

[27]: #kpagingmode

[28]: #kpagingnextpage

[29]: #kpagingpreviouspage

[30]: #propertyid

[31]: #pagingmode

[32]: #componentid

[33]: #kpaging

[34]: #keditor

[35]: #deviceclassid

[36]: #knotefxchorder

[37]: #knotefxarpeggiator

[38]: #kinstrumentimpact

[39]: #kinstrumentsampleone

[40]: #folderid

[41]: #ksendsfolder

[42]: #kcuemixfolder

[43]: #calcbeatlength

[44]: #parameters-1

[45]: #hostutils

[46]: #enableeditornotifications

[47]: #parameters-2

[48]: #enableengineeditnotifications

[49]: #parameters-3

[50]: #geteditortype

[51]: #parameters-4

[52]: #focusworkspaceframe

[53]: #parameters-5

[54]: #setparammouseoverenabled

[55]: #parameters-6

[56]: #selectnextdevice

[57]: #parameters-7

[58]: #openeditorandfocus

[59]: #parameters-8

[60]: #makechannelvisible

[61]: #parameters-9

[62]: #addnotefxdevice

[63]: #parameters-10

[64]: #kbrowserzone

[65]: #karrangementzone

[66]: #kinstrumenteditor

[67]: #knotefxeditor

[68]: #controlsurfacecomponent

[69]: #oninit

[70]: #parameters-11

[71]: #onexit

[72]: #log

[73]: #parameters-12

[74]: #notify

[75]: #parameters-13

[76]: #paramchanged

[77]: #parameters-14

[78]: #onactivate

[79]: #parameters-15

[80]: #onpadpressed

[81]: #parameters-16

[82]: #controlvalue

[83]: #controlvalue-1

[84]: #controlvalue-2

[85]: #timeformat

[86]: #timeformat-1

[87]: #timeformat-2

[88]: #timeformat-3

[89]: #timeformat-4

[90]: #controlhandler

[91]: #sendmidi

[92]: #parameters-17

[93]: #trimtext

[94]: #parameters-18

[95]: #sendvalue

[96]: #parameters-19

[97]: #updatevalue

[98]: #parameters-20

[99]: #invalidate

[100]: #receivemidi

[101]: #parameters-21

[102]: #receivesysex

[103]: #parameters-22

[104]: #getsendbuffer

[105]: #sendsysex

[106]: #parameters-23

[107]: #log-1

[108]: #parameters-24

[109]: #controlsurfacedevice

[110]: #oninit-1

[111]: #parameters-25

[112]: #onexit-1

[113]: #onmidioutconnected

[114]: #parameters-26

[115]: #onmidievent

[116]: #parameters-27

[117]: #onsysexevent

[118]: #parameters-28

[119]: #addhandler

[120]: #parameters-29

[121]: #addreceivehandler

[122]: #parameters-30

[123]: #sendmidi-1

[124]: #parameters-31

[125]: #sendsysex-1

[126]: #parameters-32

[127]: #sendpitchbendtohost

[128]: #parameters-33

[129]: #sendmodulationtohost

[130]: #parameters-34

[131]: #sendexpressiontohost

[132]: #parameters-35

[133]: #sendbreathcontroltohost

[134]: #parameters-36

[135]: #sendsustaintohost

[136]: #parameters-37

[137]: #log-2

[138]: #parameters-38

[139]: #midi

[140]: #midi-1

[141]: #midi-2

[142]: #midi-3

[143]: #midi-4

[144]: #midi-5

[145]: #midi-6

[146]: #midi-7

[147]: #midicontroller

[148]: #sysexbuffer

[149]: #begin

[150]: #parameters-39

[151]: #end

[152]: #push

[153]: #parameters-40

[154]: #appendascii

[155]: #parameters-41

[156]: #music

[157]: #padindextosymbolicpitch

[158]: #parameters-42

[159]: #symbolicpitchtopadindex

[160]: #parameters-43

[161]: #knumpitches

[162]: #kkeysymbols

[163]: #musicalscale

[164]: #musicalscale-1

[165]: #musicalscale-2

[166]: #musicalscale-3

[167]: #musicalscale-4

[168]: #musicalscale-5

[169]: #musicalscale-6

[170]: #musicalscale-7

[171]: #musicalscale-8

[172]: #musicalscale-9

[173]: #musicalscale-10

[174]: #musicalscale-11

[175]: #musicalscale-12

[176]: #musicalscale-13

[177]: #musicalscale-14

[178]: #musicalscale-15

[179]: #isampleruieditor

[180]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[181]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[182]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

