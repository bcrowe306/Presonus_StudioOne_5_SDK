//************************************************************************************************
//
// Control Surface SDK
// Copyright (c)2021 PreSonus Software Ltd.
//
// Filename    : services/devices/music/sdk/plugininterfaces.ts
// Created by  : Mark Schlueter
// Description : Plugin script interfaces
//
//************************************************************************************************
var PreSonus;
(function (PreSonus) {
    //************************************************************************************************
    // ISamplerUIEditor
    /** Interface to sampler editor. */
    //************************************************************************************************
    let ISamplerUIEditor;
    (function (ISamplerUIEditor) {
        ISamplerUIEditor.kIID = "{3D93F796-0235-4693-8238-B55A85CFB54F}";
        let ActionID;
        (function (ActionID) {
            ActionID["kZoom"] = "Zoom";
            ActionID["kScroll"] = "Scroll";
            ActionID["kScrollTo"] = "ScrollTo";
            ActionID["kStartSample"] = "StartSample";
            ActionID["kEndSample"] = "EndSample";
            ActionID["kLoopStart"] = "LoopStart";
            ActionID["kLoopEnd"] = "LoopEnd";
            ActionID["kCopy"] = "Copy";
            ActionID["kPaste"] = "Paste"; // paste to item in focus
        })(ActionID = ISamplerUIEditor.ActionID || (ISamplerUIEditor.ActionID = {}));
    })(ISamplerUIEditor = PreSonus.ISamplerUIEditor || (PreSonus.ISamplerUIEditor = {}));
})(PreSonus || (PreSonus = {}));
