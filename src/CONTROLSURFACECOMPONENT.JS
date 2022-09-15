//************************************************************************************************
//
// Control Surface SDK
// Copyright (c)2016-2020 PreSonus Software Ltd.
//
// Filename    : controlsurfacecomponent.ts
// Description : Utilities for JavaScript Control Surface implementation
//
//************************************************************************************************
var PreSonus;
(function (PreSonus) {
    /**
     * Host supported mixer channel types.
     */
    let ChannelType;
    (function (ChannelType) {
        ChannelType["kAudio"] = "Audio";
        ChannelType["kAudioInput"] = "AudioInput";
        ChannelType["kAudioOutput"] = "AudioOutput";
        ChannelType["kAudioTrack"] = "AudioTrack";
        ChannelType["kAudioSynth"] = "AudioSynth";
        ChannelType["kAudioGroup"] = "AudioGroup";
        ChannelType["kAudioEffect"] = "AudioEffect";
        ChannelType["kAudioSynthBus"] = "AudioSynthBus";
        ChannelType["kAudioListenBus"] = "AudioListenBus";
        ChannelType["kAudioAux"] = "AudioAux";
        ChannelType["kAudioVCA"] = "AudioVCA";
        ChannelType["kChannelTypeMusic"] = "Music";
        ChannelType["kChannelTypeMusicTrack"] = "MusicTrack";
    })(ChannelType = PreSonus.ChannelType || (PreSonus.ChannelType = {}));
    /**
     * Mixer channel bank names.
     */
    let Banks;
    (function (Banks) {
        Banks["kAll"] = "AllBank";
        Banks["kScreen"] = "ScreenBank";
        Banks["kRemoteAll"] = "RemoteAllBank";
        Banks["kUser"] = "RemoteBank";
        Banks["AudioInput"] = "Type:AudioInput";
        Banks["AudioOutput"] = "Type:AudioOutput";
        Banks["kAudioTrack"] = "Type:AudioTrack";
        Banks["kAudioSynth"] = "Type:AudioSynth";
        Banks["kAudioBus"] = "Type:AudioGroup";
        Banks["AudioFX"] = "Type:AudioEffect";
        Banks["kAudioVCA"] = "Type:AudioVCA";
        Banks["kAudioAux"] = "Type:AudioAux";
    })(Banks = PreSonus.Banks || (PreSonus.Banks = {}));
    /**
     * Control Link remapping hints.
     *
     * ```
     * if(pluginBankElement.remapHint == PreSonus.RemapHint.kFocus)
     *   log ("focus mapping")
     * ```
     */
    let RemapHint;
    (function (RemapHint) {
        /** Plugin focus */
        RemapHint["kFocus"] = "focus";
        /** Global host focus */
        RemapHint["kGlobal"] = "global";
    })(RemapHint = PreSonus.RemapHint || (PreSonus.RemapHint = {}));
    /**
     * Handler roles supported by PadSectionComponent.
     *
     * ```
     * padSectionComponent.addHandlerForRole (PreSonus.PadSectionRole.kMusicInput);
     * ```
     */
    let PadSectionRole;
    (function (PadSectionRole) {
        /** Musical input. */
        PadSectionRole["kMusicInput"] = "musicinput";
        /** Step editing, sequencing. */
        PadSectionRole["kStepEdit"] = "stepedit";
        /* Step editing, step parameters. */
        PadSectionRole["kStepFocus"] = "stepfocus";
        /** Trigger note repeat rates. */
        PadSectionRole["kRateTrigger"] = "ratetrigger";
        /** Bypass or disable pad input. */
        PadSectionRole["kIdle"] = "idle";
    })(PadSectionRole = PreSonus.PadSectionRole || (PreSonus.PadSectionRole = {}));
    /**
     * Step editor supported pad modifiers.
     *
     * ```
     * padSectionComponent.setModifierActive (true, PreSonus.PadModifier.kStepBinding);
     * ```
     */
    let PadModifier;
    (function (PadModifier) {
        /** Set step to accented. */
        PadModifier[PadModifier["kAccentedStep"] = 0] = "kAccentedStep";
        /** Use step binding to concatenate multiple steps. */
        PadModifier[PadModifier["kStepBinding"] = 1] = "kStepBinding";
    })(PadModifier = PreSonus.PadModifier || (PreSonus.PadModifier = {}));
    //************************************************************************************************
    // PadSection
    //************************************************************************************************
    class PadSection {
        /** Add command to 'commands'. */
        static addCommand(commands, padIndex, category, name, args, flags, zone, color) {
            commands.push({ "padIndex": padIndex, "category": category, "name": name, "args": args, "flags": flags, "zone": zone, "color": color });
        }
    }
    PadSection.kMenuUseListAccess = "listaccess";
    PadSection.kMenuUseMusicInput = "musicinput";
    PadSection.kCommandItemDirect = "direct";
    PadSection.kCommandItemUserAssignable = "userassignable";
    /** Notification: current bank changed. */
    PadSection.kCurrentBankChanged = "currentBankChanged";
    /** Notification: keyboard mode changed. */
    PadSection.kKeyboardModeChanged = "keyboardModeChanged";
    PreSonus.PadSection = PadSection;
    /**
     * Pad section music input pad handler display mode.
     *
     * ```
     * let musicInputHandler = <PreSonus.PadSectionMusicInputHandler> component.getHandler (mode);
     * musicInputHandler.setDisplayMode (PreSonus.MusicPadDisplayMode.kBrightColors);
     * ```
     */
    let MusicPadDisplayMode;
    (function (MusicPadDisplayMode) {
        MusicPadDisplayMode["kBrightColors"] = "brightcolors";
        MusicPadDisplayMode["kDimmedColors"] = "dimmedcolors";
        MusicPadDisplayMode["kNoColors"] = "nocolors";
    })(MusicPadDisplayMode = PreSonus.MusicPadDisplayMode || (PreSonus.MusicPadDisplayMode = {}));
    /**
     * Common parameter IDs.
     *
     * ```
     * let labelParam = component.findParameter (PreSonus.ParamID.kLabel);
     * ```
     */
    let ParamID;
    (function (ParamID) {
        // Channel
        ParamID["kLabel"] = "label";
        ParamID["kSelect"] = "selected";
        ParamID["kMultiSelectMode"] = "multiselect";
        ParamID["kColor"] = "color";
        ParamID["kNumber"] = "number";
        ParamID["kVolume"] = "volume";
        ParamID["kPan"] = "pan";
        ParamID["kRecord"] = "recordArmed";
        ParamID["kAutoMode"] = "automationMode";
        ParamID["kInsertBypass"] = "Inserts/bypassAll";
        ParamID["kSendBypass"] = "Sends/bypassAll";
        ParamID["kInputFxGain"] = "InputFX/gain";
        // AudioClick
        ParamID["kAudioClickOn"] = "AudioClick/on";
        ParamID["kAudioClickGain"] = "AudioClick/gain";
        // Inserts
        ParamID["kInsertName"] = "@owner/deviceName";
        ParamID["kInsertEdit"] = "@owner/edit";
        // Sends
        ParamID["kSendPort"] = "sendPort";
        ParamID["kSendLevel"] = "sendlevel";
        ParamID["kSendMute"] = "sendMute";
        // Cues
        ParamID["kCueMixDestination"] = "destination";
        ParamID["kCueMixLevel"] = "level";
        // ControlLink
        ParamID["kFocusBypass"] = "@global/Editor/focusBypass";
        ParamID["kFocusAutoMode"] = "@global/Editor/focusAutomationMode";
        ParamID["kTitle"] = "title";
        ParamID["kValue"] = "value";
        // Macro Controls
        ParamID["kMacroTitle"] = "title";
        ParamID["kMacroValue"] = "pilot";
        /** Browser: focus node title, as alias */
        ParamID["kBrowserFocusNode"] = "focusNode";
        /** Browser: focus node parent title, as alias */
        ParamID["kBrowserFocusNodeParent"] = "focusNodeParent";
        /** Browser: focus node is expandable or not, as alias */
        ParamID["kBrowserFocusNodeExpandable"] = "focusNodeExpandable";
        /** Paging: component page number (not an index). */
        ParamID["kPagingPageNumber"] = "pageNumber";
        /** Paging: max pages count */
        ParamID["kPagingPageCount"] = "pageCount";
        /** Paging: combined paging status string */
        ParamID["kPagingStatus"] = "pagingStatus";
        /** Paging: paging status format */
        ParamID["kPagingStatusFormat"] = "pagingStatusFormat";
        /** Paging mode: single, multi, auto */
        ParamID["kPagingMode"] = "pagingMode";
        /** Paging: trigger next page */
        ParamID["kPagingNextPage"] = "nextPage";
        /** Paging: trigger previous page */
        ParamID["kPagingPreviousPage"] = "prevPage";
        // Editor
        ParamID["kEditorFocusDeviceName"] = "focusDeviceName";
        ParamID["kFocusDeviceFullName"] = "focusDeviceFullName";
        ParamID["kFocusDeviceFolder"] = "focusDeviceFolder";
        ParamID["kEditorFocusBypass"] = "focusBypass";
        ParamID["kFocusAutomationMode"] = "focusAutomationMode";
        ParamID["kFocusPresetName"] = "focusPresetName";
    })(ParamID = PreSonus.ParamID || (PreSonus.ParamID = {}));
    /**
     * Host object properties
     **/
    let PropertyID;
    (function (PropertyID) {
        // Channel
        PropertyID["kChannelType"] = "channelType";
    })(PropertyID = PreSonus.PropertyID || (PreSonus.PropertyID = {}));
    /**
     * Control Link paging modes.
     */
    let PagingMode;
    (function (PagingMode) {
        PagingMode[PagingMode["kSingle"] = 0] = "kSingle";
        PagingMode[PagingMode["kMulti"] = 1] = "kMulti";
        PagingMode[PagingMode["kAuto"] = 2] = "kAuto";
    })(PagingMode = PreSonus.PagingMode || (PreSonus.PagingMode = {}));
    /**
     * Host component IDs.
     *
     * ```
     * let pagingComponent = hostComponent.find (PreSonus.ComponentID.kPaging);
     * ```
     */
    let ComponentID;
    (function (ComponentID) {
        /** PagingComponent ID */
        ComponentID["kPaging"] = "Editor/Paging";
        /** EditComponent ID */
        ComponentID["kEditor"] = "Editor";
    })(ComponentID = PreSonus.ComponentID || (PreSonus.ComponentID = {}));
    /**
     * Host device class IDs.
     *
     * ```
     * PreSonus.HostUtils.addNoteFXDevice (PreSonus.DeviceClassID.kNoteFXChorder, false);
     * ```
     */
    let DeviceClassID;
    (function (DeviceClassID) {
        /** NoteFX device 'Chorder' CID. */
        DeviceClassID["kNoteFXChorder"] = "{D2D9B002-12FC-4F1D-AFDA-70336D1DC108}";
        /** NoteFX device 'Arpeggiator' CID. */
        DeviceClassID["kNoteFXArpeggiator"] = "{BDD2D6E5-3819-41B4-BF91-7B832DAAFA0B}";
        /** 'Impact' instrument CID. */
        DeviceClassID["kInstrumentImpact"] = "{3713E26C-2FCA-4024-9F25-17E9D2BE2B9B}";
        /** 'SampleOne' instrument CID. */
        DeviceClassID["kInstrumentSampleOne"] = "{C37BC9D1-6BD1-46A7-A60C-B13438666448}";
    })(DeviceClassID = PreSonus.DeviceClassID || (PreSonus.DeviceClassID = {}));
    /**
     * Host device folder IDs.
     *
     * ```
     * let maxSendCount = mixerConsole.audioMixer.getMaxSlotCount (PreSonus.FolderID.kSendsFolder);
     * ```
     */
    let FolderID;
    (function (FolderID) {
        /** Channel Sends Folder. */
        FolderID["kSendsFolder"] = "Sends";
        /** Channel CueMix Folder. */
        FolderID["kCueMixFolder"] = "CueMix";
    })(FolderID = PreSonus.FolderID || (PreSonus.FolderID = {}));
    //************************************************************************************************
    // NoteRepeat
    //************************************************************************************************
    class NoteRepeat {
        /**
         * Calculate beat length.
         *
         * @param denominator
         * @param triplet  Calculate as triplet.
         */
        static calcBeatLength(denominator, triplet) {
            if (denominator == 0)
                return 0;
            let typeFactor = triplet ? (2.0 / 3.0) : 1.0;
            return (4.0 / denominator) * typeFactor;
        }
    }
    NoteRepeat.kActive = "active";
    NoteRepeat.kSpread = "spread";
    NoteRepeat.kSpreadNote = "spreadnote";
    NoteRepeat.kSpreadNoteSymbolic = "spreadnotesymbolic";
    NoteRepeat.kRate = "rate"; // rate parameter
    NoteRepeat.k2thPpq = NoteRepeat.calcBeatLength(2, false);
    NoteRepeat.k2thTPpq = NoteRepeat.calcBeatLength(2, true);
    NoteRepeat.k4thPpq = NoteRepeat.calcBeatLength(4, false);
    NoteRepeat.k4thTPpq = NoteRepeat.calcBeatLength(4, true);
    NoteRepeat.k8thPpq = NoteRepeat.calcBeatLength(8, false);
    NoteRepeat.k8thTPpq = NoteRepeat.calcBeatLength(8, true);
    NoteRepeat.k16thPpq = NoteRepeat.calcBeatLength(16, false);
    NoteRepeat.k16thTPpq = NoteRepeat.calcBeatLength(16, true);
    NoteRepeat.k32thPpq = NoteRepeat.calcBeatLength(32, false);
    NoteRepeat.k32thTPpq = NoteRepeat.calcBeatLength(32, true);
    NoteRepeat.k64thPpq = NoteRepeat.calcBeatLength(64, false);
    NoteRepeat.k64thTPpq = NoteRepeat.calcBeatLength(64, true);
    PreSonus.NoteRepeat = NoteRepeat;
    //************************************************************************************************
    // Host Utilities
    //************************************************************************************************
    /**
     * Utility functions for interacting with the host application.
     */
    class HostUtils {
        /**
         * Enable or disable notifications when active editor changes.
    
         * Example: enable notifications for control surface component
         * ```
         * class MyComponent extends PreSonus.ControlSurfaceComponent
         * {
         *   onInit (hostComponent: Presonus.SurfaceHostComponent)
         *   {
         *     super.onInit (hostComponent);
         *     PreSonus.HostUtils.enableEditorNotifications (this, enable);
         *   }
         * }
         * ```
         *
         * @param observer  Object to be de-/notified about editor changes.
         * @param state  Enable or disable notifications.
         */
        static enableEditorNotifications(observer, state) {
            if (state)
                Host.Signals.advise(HostUtils.kEditorSignals, observer);
            else
                Host.Signals.unadvise(HostUtils.kEditorSignals, observer);
        }
        /**
         * Enable or disable engine edit notifications.
         *
         * Example: enable notifications for control surface component
         * ```
         * class MyComponent extends PreSonus.ControlSurfaceComponent
         * {
         *   onInit (hostComponent: Presonus.SurfaceHostComponent)
         *   {
         *     super.onInit (hostComponent);
         *     PreSonus.HostUtils.enableEngineEditNotifications (this, enable);
         *   }
         * }
         * ```
         *
         * @param observer  Object to be de-/notified about engine edit changes.
         * @param state  Enable or disable notifications.
         */
        static enableEngineEditNotifications(observer, state) {
            if (state)
                Host.Signals.advise(HostUtils.kEngineEditingSignals, observer);
            else
                Host.Signals.unadvise(HostUtils.kEngineEditingSignals, observer);
        }
        /**
         * Derive active editor type from editor object native class name.
         *
         * Example: get editor type on host editor change notification
         * ```
         * class MyComponent extends PreSonus.ControlSurfaceComponent
         * {
         *   onTrackEditorChangedNotify (editor: any)
         *   {
         *     let editorType = PreSonus.HostUtils.kEditorTypeNone;
         *     if(editor)
         *       editorType = PreSonus.HostUtils.getEditorType (editor);
         *
         *     // Process editor type ...
         *   }
         * }
         * ```
         *
         * @param editor  Current editor object, providing native class name.
         */
        static getEditorType(editor) {
            return editor ? editor.nativeClassName : HostUtils.kEditorTypeNone;
        }
        /**
         * Focus workspace frame in host application.
         *
         * Example: set focus to browser zone immediately.
         * ```
         * class MyComponent extends PreSonus.ControlSurfaceComponent
         * {
         *   focusBrowser ()
         *   {
         *     let deferred = false;
         *     PreSonus.HostUtils.focusWorkspaceFrame (PreSonus.HostUtils.kBrowserZone, deferred);
         *   }
         * }
         * ```
         *
         * @param frameName  Host application UI frame to shift focus to.
         * @param deferred  Shift focus immediately (and wait until done) or deferred.
         */
        static focusWorkspaceFrame(frameName, deferred) {
            if (deferred)
                Host.GUI.Commands.deferCommand("View", "Focus Frame", false, Host.Attributes(["Frame", frameName]));
            else
                Host.GUI.Commands.interpretCommand("View", "Focus Frame", false, Host.Attributes(["Frame", frameName]));
        }
        /**
         * Turn mouse-over mode for recent parameter on/off via host application
         * command "Automation/Mouse-Over".
         *
         * Example:
         * ```
         * class MyComponent extends PreSonus.ControlSurfaceComponent
         * {
         *   onButtonPressed (state: boolean)
         *   {
         *     PreSonus.HostUtils.setParamMouseOverEnabled (state);
         *   }
         * }
         * ```
         *
         * @param state  Enable or disable param mouse over.
         */
        static setParamMouseOverEnabled(state) {
            let args = [];
            args.push("State");
            args.push(state);
            Host.GUI.Commands.interpretCommand("Automation", "Mouse-Over", false, Host.Attributes(args));
        }
        /**
         * Select next or previous device in rack.
         *
         * Example: select next or previous device on encoder value change
         * ```
         * class MyComponent extends PreSonus.ControlSurfaceComponent
         * {
         *   focusInsertsBankElement: PreSonus.InteractiveElement;
         *
         *   onEncoderChanged (value: number)
         *   {
         *     // focusInsertsBankElement previously determined via
         *     // focus bank -> focus channel -> inserts bank
         *
         *     PreSonus.HostUtils.selectNextDevice (this, this.focusInsertsBankElement,
         *       value >= 0.5 ? +1 : -1);
         *   }
         * }
         * ```
         *
         * @param component  Component to set as device focus component.
         * @param bankElement  Controllable providing bank element.
         * @param offset  Slot index offset.
         */
        static selectNextDevice(component, bankElement, offset) {
            // figure out which slot is open the hard way...
            let slotIndex = -1;
            let slotCount = bankElement.getElementCount();
            for (let i = 0; i < slotCount; i++) {
                let interactiveElement = bankElement.getElement(i);
                if (interactiveElement.getParamValue(ParamID.kInsertEdit)) {
                    slotIndex = i;
                    break;
                }
            }
            slotIndex += offset;
            if (slotIndex >= 0 && slotIndex < slotCount) {
                let slotElement = bankElement.getElement(slotIndex);
                HostUtils.openEditorAndFocus(component, slotElement);
            }
            /* LATER TODO:
            if(offset > 0)
                bankElement.invokeMethod ("interpretCommand", "Devices", "Next Device in Rack");
            else
                bankElement.invokeMethod ("interpretCommand", "Devices", "Previous Device in Rack");
            */
        }
        /**
         * Open device editor and set ControlLink focus.
         *
         * Example: open instrument editor for focus channel
         * ```
         * class MyComponent extends PreSonus.ControlSurfaceComponent
         * {
         *   onButtonPressed (state: boolean)
         *   {
         *     if(!state)
         *       return;
         *
         *     // Access follow bank via surface model -> root-> lookup XML element by name.
         *     let root = hostComponent.model.root;
         *     let mixerConsoleMappingElement = root.find ("MixerConsoleMapping");
         *     let mixerFollowBankMapping = mixerConsoleMappingElement.find ("MixerFollowBank");
         *     PreSonus.HostUtils.openEditorAndFocus (this, mixerFollowBankMapping.getElement (0),
         *       PreSonus.HostUtils.kInstrumentEditor, true);
         *   }
         * }
         * ```
         *
         * @param component  Component to set as device focus component.
         * @param element  Channel element to open the editor for, has to be connected.
         * @param context  Type of editor to open.
         * @param toggle  Toggle open/close editor if already open.
        */
        static openEditorAndFocus(component, element, context, toggle) {
            if (!element.isConnected())
                return;
            element.invokeMethod("openEditor", context, toggle);
            if (context == HostUtils.kInstrumentEditor) // special handling for synths
                element.invokeChildMethod("mainSynthSlot", "interpretCommand", "Select Client", component.hostComponent.classID);
            else
                element.invokeMethod("interpretCommand", "Select Client", component.hostComponent.classID);
        }
        /**
         * Make channel visible in host GUI by focussing it.
         *
         * Example: check channel select status, if selected focus it
         * ```
         * class MyComponent extends PreSonus.ControlSurfaceComponent
         * {
         *   onButtonPressed (state: boolean)
         *   {
         *     if(!state)
         *       return;
         *
         *     // ... channelElement from bank
         *     if(channelElement.isAliasConnected (channel.selectValue, PreSonus.ParamID.kSelect))
         *     {
         *       if(channelElement.getParamValue (PreSonus.ParamID.kSelect))
         *         PreSonus.HostUtils.makeChannelVisible (channelElement);
         *     }
         * }
         * ```
         *
         * @param channel  Channel element to focus.
         */
        static makeChannelVisible(channel) {
            channel.invokeMethod("focus");
        }
        //////////////////////////////////////////////////////////////////////////////////////////////////
        /**
         * Add Note FX device by device class ID.
         *
         * Example: add 'Chorder' Note FX device
         * ```
         * class MyComponent extends PreSonus.ControlSurfaceComponent
         * {
         *   onButtonPressed (state: boolean)
         *   {
         *     if(!state)
         *       return;
         *
         *     // do not defer, wait for device to be added before opening editor
         *     PreSonus.HostUtils.addNoteFXDevice (PreSonus.DeviceClassID.kNoteFXChorder, false);
         *     let element = <PreSonus.InteractiveElement> this.focusChannelMapping.getElement (0);
         *     if(element)
         *       PreSonus.HostUtils.openEditorAndFocus (this, element, PreSonus.HostUtils.kNoteFXEditor, false);
         *   }
         * }
         * ```
         *
         * @param cid  Note FX device class ID.
         * @param deferred  Perform add command deferred in synchronized.
         */
        static addNoteFXDevice(cid, deferred) {
            let args = [];
            args.push("cid");
            args.push(cid);
            if (deferred)
                Host.GUI.Commands.deferCommand("Track", "Add Note FX to Selected Tracks", false, Host.Attributes(args));
            else
                Host.GUI.Commands.interpretCommand("Track", "Add Note FX to Selected Tracks", false, Host.Attributes(args));
        }
    }
    HostUtils.kEditorSignals = "CCL.EditorRegistry";
    HostUtils.kEditorActivated = "EditorActivated";
    HostUtils.kEngineEditingSignals = "Engine.Editing";
    HostUtils.kTrackEditorChanged = "TrackEditorChanged";
    HostUtils.kEditorTypeNone = "";
    HostUtils.kEditorTypeArrangement = "TrackListComponent";
    HostUtils.kEditorTypeMusic = "MusicEditor";
    HostUtils.kEditorTypeAudio = "AudioEditor";
    HostUtils.kEditorTypePattern = "MusicPatternEventEditor";
    /** Browser workspace zone. */
    HostUtils.kBrowserZone = "BrowserZone";
    /** Arrangement workspace zone. */
    HostUtils.kArrangementZone = "ArrangementZone";
    /** Instrument channel editor context. */
    HostUtils.kInstrumentEditor = "Instrument";
    /** Note FX channel editor context. */
    HostUtils.kNoteFXEditor = "Note FX";
    PreSonus.HostUtils = HostUtils;
    //************************************************************************************************
    // ControlSurfaceComponent
    //************************************************************************************************
    /**
     * Control surface scriptable component class.
     */
    class ControlSurfaceComponent {
        constructor() {
            this.interfaces = [
                Host.Interfaces.IObserver,
                Host.Interfaces.IParamObserver
            ];
            this.debugLog = false;
            this.hostComponent = null;
        }
        /**
         * Component initialization, called by host on surface creation.
         *
         * Example:
         * ```
         * class MyComponent extends PreSonus.ControlSurfaceComponent
         * {
         *    onInit (hostComponent: Presonus.SurfaceHostComponent)
         *    {
         *      super.onInit (hostComponent);
         *      // additional init code
         *    }
         * }
         * ```
         *
         * @param hostComponent  device surface unit, parent host component
         */
        onInit(hostComponent) {
            this.hostComponent = hostComponent;
        }
        /**
         * Component exit, called on surface removal or reset.
         *
         * Example:
         * ```
         * class MyComponent extends PreSonus.ControlSurfaceComponent
         * {
         *   onExit ()
         *   {
         *     // additional exit code
         *     super.onExit ();
         *   }
         * }
         * ```
         */
        onExit() {
            this.hostComponent = null;
        }
        /**
         * Log message to host console for debugging, requires debugLog to be enabled.
         *
         * Example: enable debug logging
         * ```
         * class MyComponent extends PreSonus.ControlSurfaceComponent
         * {
         *   onInit (hostComponent: Presonus.SurfaceHostComponent)
         *   {
         *     super.onInit (hostComponent);
         *     this.debugLog = true;
         *     this.log ("Hello World");
         *   }
         * }
         * ```
         *
         * @param message  Text to log.
         */
        log(message) {
            if (this.debugLog)
                Host.Console.writeLine(message);
        }
        /**
         * Process a notification.
         *
         * Example: react to 'changed' message alias parameter
         * ```
         * class MyComponent extends PreSonus.ControlSurfaceComponent
         * {
         *   notify (subject: PreSonus.Object, msg: PreSonus.Message)
         *   {
         *     // sanity check sender subject and message are available
         *     if(!subject || !msg)
         *       return;
         *
         *     // typically check for what is signaled and by whom (subject)
         *     // here, an alias parameter signaled a change
         *     if(msg.id == "changed")
         *       if(subject == this.someAliasParam)
         *         // process ...
         *   }
         * }
         * ```
         *
         * @param subject  Message sending object.
         * @param msg  Received message (id and arguments).
         */
        notify(subject, msg) { }
        /**
         * Process a parameter change.
         *
         * Example:
         * ```
         * class MyComponent extends PreSonus.ControlSurfaceComponent
         * {
         *   demoParam: PreSonus.Parameter;
         *
         *   onInit (hostComponent: Presonus.SurfaceHostComponent)
         *   {
         *     super.onInit (hostComponent);
         *     this.demoParam = this.hostComponent.paramList.addParam ("demoParam");
         *   }
         *
         *   paramChanged (param: PreSonus.Parameter)
         *   {
         *     if(!param)
         *       return;
         *
         *     // check for a particular parameter
         *     if(param == this.demoParam)
         *       this.log ("demoParam value changed to " + param.value)
         *   }
         * }
         * ```
         *
         * @param param  Changed parameter.
         */
        paramChanged(param) { }
    }
    PreSonus.ControlSurfaceComponent = ControlSurfaceComponent;
    //************************************************************************************************
    // PadSectionScriptHandler
    // Register with PadSectionComponent::addHandler ()
    //************************************************************************************************
    class PadSectionScriptHandler {
        constructor() {
            this.interfaces = [];
        }
        /**
         * Activation event handling.
         * @param state  Activate state.
         */
        onActivate(state) { }
        /**
         * Pad pressed event handling.
         *
         * @param padIndex  Pressed pad index.
         * @param state  Pad pressed state.
         * @param modifiers  Additional pressed modifiers.
         */
        onPadPressed(padIndex, state, modifiers) { }
    }
    PreSonus.PadSectionScriptHandler = PadSectionScriptHandler;
})(PreSonus || (PreSonus = {}));
