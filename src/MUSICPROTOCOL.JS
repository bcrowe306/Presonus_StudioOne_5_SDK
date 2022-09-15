//************************************************************************************************
//
// Control Surface SDK
// Copyright (c)2020 PreSonus Software Ltd.
//
// Filename    : musicprotocol.ts
// Description : Music Protocol Definitions
//
//************************************************************************************************
var PreSonus;
(function (PreSonus) {
    /**
     * Namespace for music related definitions
     * and utility functions.
     */
    class Music {
        /**
         * Convert a pad index to symbolic pitch.
         * @param {number} padIndex  - Pad index to convert.
         */
        static padIndexToSymbolicPitch(padIndex) {
            return (Music.kPitchC1 + padIndex) % Music.kNumPitches;
        }
        /**
         * Convert a symbolic pitch to pad index.
         * @param {number} pitch - Pitch to convert.
         */
        static symbolicPitchToPadIndex(pitch) {
            let idx = pitch - Music.kPitchC1;
            return idx < 0 ? idx + Music.kNumPitches : idx;
        }
    }
    Music.kPitchC0 = 24;
    Music.kPitchC1 = 36;
    /** Total number of pitches */
    Music.kNumPitches = 128;
    /**
     * Key names for an octave, ranging from
     * 'C' (index 0) to 'B' (index 11).
     */
    Music.kKeySymbols = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    PreSonus.Music = Music;
    /**
     * Musical scales supported by PadSectionComponent.
     *
     * ```
     * padSection.component.setScale (PreSonus.MusicalScale.kMajor);
     * ```
     */
    let MusicalScale;
    (function (MusicalScale) {
        /** Chromatic */
        MusicalScale[MusicalScale["kChromatic"] = 0] = "kChromatic";
        /** Major */
        MusicalScale[MusicalScale["kMajor"] = 1] = "kMajor";
        /** Melodic Minor */
        MusicalScale[MusicalScale["kMelodicMinor"] = 2] = "kMelodicMinor";
        /** Harmonic Minor */
        MusicalScale[MusicalScale["kHarmonicMinor"] = 3] = "kHarmonicMinor";
        /** Natural Minor */
        MusicalScale[MusicalScale["kNaturalMinor"] = 4] = "kNaturalMinor";
        /** Major Pentatonic */
        MusicalScale[MusicalScale["kMajorPentatonic"] = 5] = "kMajorPentatonic";
        /** Minor Pentatonic */
        MusicalScale[MusicalScale["kMinorPentatonic"] = 6] = "kMinorPentatonic";
        /** Blues */
        MusicalScale[MusicalScale["kBlues"] = 7] = "kBlues";
        /** Dorian */
        MusicalScale[MusicalScale["kDorian"] = 8] = "kDorian";
        /** Mixolydian */
        MusicalScale[MusicalScale["kMixolydian"] = 9] = "kMixolydian";
        /** Phyrigian */
        MusicalScale[MusicalScale["kPhrygian"] = 10] = "kPhrygian";
        /** Major Triad */
        MusicalScale[MusicalScale["kMajorTriad"] = 11] = "kMajorTriad";
        /** Minor Triad */
        MusicalScale[MusicalScale["kMinorTriad"] = 12] = "kMinorTriad";
        /** Max scale index */
        MusicalScale[MusicalScale["kMaxScale"] = 12] = "kMaxScale";
        /** Default scale */
        MusicalScale[MusicalScale["kDefault"] = 0] = "kDefault";
    })(MusicalScale = PreSonus.MusicalScale || (PreSonus.MusicalScale = {}));
})(PreSonus || (PreSonus = {}));
