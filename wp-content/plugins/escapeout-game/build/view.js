import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "./src/components/ShallowEqual.js":
/*!****************************************!*\
  !*** ./src/components/ShallowEqual.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shallowEqual: () => (/* binding */ shallowEqual)
/* harmony export */ });
const shallowEqual = (object1, object2) => {
  /* guess(value) , answer(object) */
  console.log("guess: " + object1);
  console.log("answer: " + object2);
  const keys1 = Object.keys(object1);
  console.log("keys1: " + keys1.length);
  const keys2 = Object.keys(object2);
  console.log("keys2: " + keys2.length);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    console.log("object1[key]: " + object1[key]);
    console.log("object2[key]: " + object2[key]);
    console.log("typeof object1[key]: " + typeof object1[key]);
    console.log("typeof object2[key]: " + typeof object2[key]);
    if (object1[key].toLowerCase() !== object2[key].toLowerCase()) {
      console.log("false");
      return false;
    }
  }
  return true;
};

/***/ }),

/***/ "./src/components/caesarCipher.js":
/*!****************************************!*\
  !*** ./src/components/caesarCipher.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   caesarCipher: () => (/* binding */ caesarCipher)
/* harmony export */ });
function caesarCipher(str, shift) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    // Handle lowercase letters
    if (charCode >= 97 && charCode <= 122) {
      charCode = (charCode - 97 + shift) % 26 + 97;
    }
    // Handle uppercase letters
    else if (charCode >= 65 && charCode <= 90) {
      charCode = (charCode - 65 + shift) % 26 + 65;
    }
    result += String.fromCharCode(charCode);
  }
  return result;
}

/***/ }),

/***/ "./src/components/helper.js":
/*!**********************************!*\
  !*** ./src/components/helper.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeLocalStorage: () => (/* binding */ removeLocalStorage)
/* harmony export */ });
function removeLocalStorage() {
  console.log("remove local storage");
  localStorage.removeItem("gameScoreID");
  localStorage.removeItem("gameID");
  localStorage.removeItem("gameName");
  localStorage.removeItem("teamName");
  localStorage.removeItem("timeStart");
  localStorage.removeItem("formattedDate");
  localStorage.removeItem("clueTextArray");
  localStorage.removeItem("solvedArray");
  localStorage.removeItem("hintTextArray");
  localStorage.removeItem("quesArray");
  localStorage.removeItem("hintUsedArray");
}

/***/ }),

/***/ "./node_modules/obscenity/dist/censor/BuiltinStrategies.js":
/*!*****************************************************************!*\
  !*** ./node_modules/obscenity/dist/censor/BuiltinStrategies.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.randomCharFromSetCensorStrategy = exports.fixedCharCensorStrategy = exports.fixedPhraseCensorStrategy = exports.grawlixCensorStrategy = exports.asteriskCensorStrategy = exports.keepEndCensorStrategy = exports.keepStartCensorStrategy = void 0;
const Char_1 = __webpack_require__(/*! ../util/Char */ "./node_modules/obscenity/dist/util/Char.js");
/**
 * A text censoring strategy that extends another strategy, adding the first
 * character matched at the start of the generated string.
 *
 * @example
 * ```typescript
 * const strategy = keepStartCensorStrategy(grawlixCensorStrategy());
 * const censor = new TextCensor().setStrategy(strategy);
 * // Before: 'fuck you'
 * // After: 'f$@* you'
 * ```
 * @example
 * ```typescript
 * // Since keepEndCensorStrategy() returns another text censoring strategy, you can use it
 * // as the base strategy to pass to keepStartCensorStrategy().
 * const strategy = keepStartCensorStrategy(keepEndCensorStrategy(asteriskCensorStrategy()));
 * const censor = new TextCensor().setStrategy(strategy);
 * // Before: 'fuck you'
 * // After: 'f**k you'
 * ```
 * @param baseStrategy - Strategy to extend. It will be used to produce the end of
 * the generated string.
 * @returns A [[TextCensorStrategy]] for use with the [[TextCensor]].
 */
function keepStartCensorStrategy(baseStrategy) {
    return (ctx) => {
        if (ctx.overlapsAtStart)
            return baseStrategy(ctx);
        const firstChar = String.fromCodePoint(ctx.input.codePointAt(ctx.startIndex));
        return firstChar + baseStrategy({ ...ctx, matchLength: ctx.matchLength - 1 });
    };
}
exports.keepStartCensorStrategy = keepStartCensorStrategy;
/**
 * A text censoring strategy that extends another strategy, adding the last
 * character matched at the end of the generated string.
 *
 * @example
 * ```typescript
 * const strategy = keepEndCensorStrategy(asteriskCensorStrategy());
 * const censor = new TextCensor().setStrategy(strategy);
 * // Before: 'fuck you'
 * // After: '***k you'
 * ```
 * @param baseStrategy - Strategy to extend. It will be used to produce the start
 * of the generated string.
 * @returns A [[TextCensorStrategy]] for use with the [[TextCensor]].
 */
function keepEndCensorStrategy(baseStrategy) {
    return (ctx) => {
        if (ctx.overlapsAtEnd)
            return baseStrategy(ctx);
        const lastChar = String.fromCodePoint(ctx.input.codePointAt(ctx.endIndex));
        return baseStrategy({ ...ctx, matchLength: ctx.matchLength - 1 }) + lastChar;
    };
}
exports.keepEndCensorStrategy = keepEndCensorStrategy;
/**
 * A text censoring strategy that generates strings made up of asterisks (`*`).
 *
 * @example
 * ```typescript
 * const strategy = asteriskCensorStrategy();
 * const censor = new TextCensor().setStrategy(strategy);
 * // Before: 'fuck you'
 * // After: '**** you'
 * ```
 * @returns A [[TextCensorStrategy]] for use with the [[TextCensor]].
 */
function asteriskCensorStrategy() {
    return fixedCharCensorStrategy('*');
}
exports.asteriskCensorStrategy = asteriskCensorStrategy;
/**
 * A text censoring strategy that generates
 * [grawlix](https://www.merriam-webster.com/words-at-play/grawlix-symbols-swearing-comic-strips),
 * i.e. strings that contain the characters `%`, `@`, `$`, `&`, and `*`.
 *
 * @example
 * ```typescript
 * const strategy = grawlixCensorStrategy();
 * const censor = new TextCensor().setStrategy(strategy);
 * // Before: 'fuck you'
 * // After: '%@&* you'
 * ```
 * @returns A [[TextCensorStrategy]] for use with the [[TextCensor]].
 */
function grawlixCensorStrategy() {
    return randomCharFromSetCensorStrategy('%@$&*');
}
exports.grawlixCensorStrategy = grawlixCensorStrategy;
/**
 * A text censoring strategy that returns a fixed string.
 *
 * @example
 * ```typescript
 * // The replacement phrase '' effectively removes all matched regions
 * // from the string.
 * const strategy = fixedPhraseCensorStrategy('');
 * const censor = new TextCensor().setStrategy(strategy);
 * // Before: 'fuck you'
 * // After: ' you'
 * ```
 * @example
 * ```typescript
 * const strategy = fixedPhraseCensorStrategy('fudge');
 * const censor = new TextCensor().setStrategy(strategy);
 * // Before: 'fuck you'
 * // After: 'fudge you'
 * ```
 * @param phrase - Replacement phrase to use.
 * @returns A [[TextCensorStrategy]] for use with the [[TextCensor]].
 */
function fixedPhraseCensorStrategy(phrase) {
    return () => phrase;
}
exports.fixedPhraseCensorStrategy = fixedPhraseCensorStrategy;
/**
 * A text censoring strategy that generates replacement strings that are made up
 * of the character given, repeated as many times as needed.
 *
 * @example
 * ```typescript
 * const strategy = fixedCharCensorStrategy('*');
 * const censor = new TextCensor().setStrategy(strategy);
 * // Before: 'fuck you'
 * // After: '**** you'.
 * ```
 * @param char - String that represents the code point which should be used when
 * generating the replacement string. Must be exactly one code point in length.
 * @returns A [[TextCensorStrategy]] for use with the [[TextCensor]].
 */
function fixedCharCensorStrategy(char) {
    // Make sure the input character is one code point in length.
    (0, Char_1.getAndAssertSingleCodePoint)(char);
    return (ctx) => char.repeat(ctx.matchLength);
}
exports.fixedCharCensorStrategy = fixedCharCensorStrategy;
/**
 * A text censoring strategy that generates replacement strings made up of
 * random characters from the set of characters provided.
 *
 * @example
 * ```typescript
 * const strategy = randomCharFromSetCensorStrategy('$#!');
 * const censor = new TextCensor().setStrategy(strategy);
 * // Before: 'fuck you!'
 * // After: '!##$ you!'
 * ```
 * @param charset - Set of characters from which the replacement string should
 * be constructed. Must not be empty.
 * @returns A [[TextCensorStrategy]] for use with the [[TextCensor]].
 */
function randomCharFromSetCensorStrategy(charset) {
    const chars = [...charset];
    if (chars.length === 0)
        throw new Error('The character set passed must not be empty.');
    return (ctx) => {
        let censored = '';
        for (let i = 0; i < ctx.matchLength; i++)
            censored += chars[Math.floor(Math.random() * chars.length)];
        return censored;
    };
}
exports.randomCharFromSetCensorStrategy = randomCharFromSetCensorStrategy;


/***/ }),

/***/ "./node_modules/obscenity/dist/censor/TextCensor.js":
/*!**********************************************************!*\
  !*** ./node_modules/obscenity/dist/censor/TextCensor.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextCensor = void 0;
const MatchPayload_1 = __webpack_require__(/*! ../matcher/MatchPayload */ "./node_modules/obscenity/dist/matcher/MatchPayload.js");
const BuiltinStrategies_1 = __webpack_require__(/*! ./BuiltinStrategies */ "./node_modules/obscenity/dist/censor/BuiltinStrategies.js");
/**
 * Censors regions of text matched by a [[Matcher]], supporting flexible
 * [[TextCensorStrategy | censoring strategies]].
 */
class TextCensor {
    constructor() {
        this.strategy = (0, BuiltinStrategies_1.grawlixCensorStrategy)();
    }
    /**
     * Sets the censoring strategy, which is responsible for generating
     * replacement text for regions of the text that should be censored.
     *
     * The default censoring strategy is the [[grawlixCensorStrategy]],
     * generating text like `$%@*`. There are several other built-in strategies
     * available:
     * - [[keepStartCensorStrategy]] - extends another strategy and keeps the
     *   first character matched, e.g. `f***`.
     * - [[keepEndCensorStrategy]] - extends another strategy and keeps the last
     *   character matched, e.g. `***k`.
     * - [[asteriskCensorStrategy]] - replaces the text with asterisks, e.g.
     *   `****`.
     * - [[grawlixCensorStrategy]] - the default strategy, discussed earlier.
     *
     * Note that since censoring strategies are just functions (see the
     * documentation for [[TextCensorStrategy]]), it is relatively simple to
     * create your own.
     *
     * To ease creation of common censoring strategies, we provide a number of
     * utility functions:
     * - [[fixedPhraseCensorStrategy]] - generates a fixed phrase, e.g. `fudge`.
     * - [[fixedCharCensorStrategy]] - generates replacement strings constructed
     *   from the character given, repeated as many times as needed.
     * - [[randomCharFromSetCensorStrategy]] - generates replacement strings
     *   made up of random characters from the set of characters provided.
     *
     * @param strategy - Text censoring strategy to use.
     */
    setStrategy(strategy) {
        this.strategy = strategy;
        return this;
    }
    /**
     * Applies the censoring strategy to the text, returning the censored text.
     *
     * **Overlapping regions**
     *
     * Overlapping regions are an annoying edge case to deal with when censoring
     * text. There is no single best way to handle them, but the implementation
     * of this method guarantees that overlapping regions will always be
     * replaced, following the rules below:
     *
     * - Replacement text for matched regions will be generated in the order
     *   specified by [[compareMatchByPositionAndId]];
     * - When generating replacements for regions that overlap at the start with
     *   some other region, the start index of the censor context passed to the
     *   censoring strategy will be the end index of the first region, plus one.
     *
     * @param input - Input text.
     * @param matches - A list of matches.
     * @returns The censored text.
     */
    applyTo(input, matches) {
        if (matches.length === 0)
            return input;
        const sorted = [...matches].sort(MatchPayload_1.compareMatchByPositionAndId);
        let censored = '';
        let lastIndex = 0; // end index of last match, plus one
        for (let i = 0; i < sorted.length; i++) {
            const match = sorted[i];
            if (lastIndex > match.endIndex)
                continue; // completely contained in the previous span
            const overlapsAtStart = match.startIndex < lastIndex;
            // Add the chunk of text between the end of the last match and the
            // start of the current match.
            if (!overlapsAtStart)
                censored += input.slice(lastIndex, match.startIndex);
            const actualStartIndex = Math.max(lastIndex, match.startIndex);
            const overlapsAtEnd = i < sorted.length - 1 && // not the last match
                match.endIndex >= sorted[i + 1].startIndex && // end index of this match and start index of next one overlap
                match.endIndex < sorted[i + 1].endIndex; // doesn't completely contain next match
            censored += this.strategy({ ...match, startIndex: actualStartIndex, input, overlapsAtStart, overlapsAtEnd });
            lastIndex = match.endIndex + 1;
        }
        censored += input.slice(lastIndex);
        return censored;
    }
}
exports.TextCensor = TextCensor;


/***/ }),

/***/ "./node_modules/obscenity/dist/dataset/DataSet.js":
/*!********************************************************!*\
  !*** ./node_modules/obscenity/dist/dataset/DataSet.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PhraseBuilder = exports.DataSet = void 0;
const BlacklistedTerm_1 = __webpack_require__(/*! ../matcher/BlacklistedTerm */ "./node_modules/obscenity/dist/matcher/BlacklistedTerm.js");
/**
 * Holds phrases (groups of patterns and whitelisted terms), optionally
 * associating metadata with them.
 *
 * @typeParam MetadataType - Metadata type for phrases. Note that the metadata
 * type is implicitly nullable.
 */
class DataSet {
    constructor() {
        this.containers = [];
        this.patternCount = 0;
        this.patternIdToPhraseContainer = new Map(); // pattern ID => index of its container
    }
    /**
     * Adds all the phrases from the dataset provided to this one.
     *
     * @example
     * ```typescript
     * const customDataset = new DataSet().addAll(englishDataset);
     * ```
     * @param other - Other dataset.
     */
    addAll(other) {
        for (const container of other.containers)
            this.registerContainer(container);
        return this;
    }
    /**
     * Removes phrases that match the predicate given.
     *
     * @example
     * ```typescript
     * const customDataset = new DataSet<{ originalWord: string }>()
     * 	.addAll(englishDataset)
     * 	.removePhrasesIf((phrase) => phrase.metadata.originalWord === 'fuck');
     * ```
     * @param predicate - A predicate that determines whether or not a phrase should be removed.
     * Return `true` to remove, `false` to keep.
     */
    removePhrasesIf(predicate) {
        // Clear the internal state, then gradually rebuild it by adding the
        // containers that should be kept.
        this.patternCount = 0;
        this.patternIdToPhraseContainer.clear();
        const containers = this.containers.splice(0);
        for (const container of containers) {
            const remove = predicate(container);
            if (!remove)
                this.registerContainer(container);
        }
        return this;
    }
    /**
     * Adds a phrase to this dataset.
     *
     * @example
     * ```typescript
     * const data = new DataSet<{ originalWord: string }>()
     * 	.addPhrase((phrase) => phrase.setMetadata({ originalWord: 'fuck' })
     * 		.addPattern(pattern`fuck`)
     * 		.addPattern(pattern`f[?]ck`)
     * 		.addWhitelistedTerm('Afck'))
     * 	.build();
     * ```
     * @param fn - A function that takes a [[PhraseBuilder]], adds
     * patterns/whitelisted terms/metadata to it, and returns it.
     */
    addPhrase(fn) {
        const container = fn(new PhraseBuilder()).build();
        this.registerContainer(container);
        return this;
    }
    /**
     * Retrieves the phrase metadata associated with a pattern and returns a
     * copy of the match payload with said metadata attached to it.
     *
     * @example
     * ```typescript
     * const matches = matcher.getAllMatches(input);
     * const matchesWithPhraseMetadata = matches.map((match) => dataset.getPayloadWithPhraseMetadata(match));
     * // Now we can access the 'phraseMetadata' property:
     * const phraseMetadata = matchesWithPhraseMetadata[0].phraseMetadata;
     * ```
     * @param payload - Original match payload.
     */
    getPayloadWithPhraseMetadata(payload) {
        const offset = this.patternIdToPhraseContainer.get(payload.termId);
        if (offset === undefined) {
            throw new Error(`The pattern with ID ${payload.termId} does not exist in this dataset.`);
        }
        return {
            ...payload,
            phraseMetadata: this.containers[offset].metadata,
        };
    }
    /**
     * Returns the dataset in a format suitable for usage with the [[RegExpMatcher]].
     *
     * @example
     * ```typescript
     * // With the RegExpMatcher:
     * const matcher = new RegExpMatcher({
     * 	...dataset.build(),
     * 	// additional options here
     * });
     * ```
     */
    build() {
        return {
            blacklistedTerms: (0, BlacklistedTerm_1.assignIncrementingIds)(this.containers.flatMap((p) => p.patterns)),
            whitelistedTerms: this.containers.flatMap((p) => p.whitelistedTerms),
        };
    }
    registerContainer(container) {
        const offset = this.containers.push(container) - 1;
        for (let i = 0, phraseId = this.patternCount; i < container.patterns.length; i++, phraseId++) {
            this.patternIdToPhraseContainer.set(phraseId, offset);
            this.patternCount++;
        }
    }
}
exports.DataSet = DataSet;
/**
 * Builder for phrases.
 */
class PhraseBuilder {
    constructor() {
        this.patterns = [];
        this.whitelistedTerms = [];
    }
    /**
     * Associates a pattern with this phrase.
     *
     * @param pattern - Pattern to add.
     */
    addPattern(pattern) {
        this.patterns.push(pattern);
        return this;
    }
    /**
     * Associates a whitelisted pattern with this phrase.
     *
     * @param term - Whitelisted term to add.
     */
    addWhitelistedTerm(term) {
        this.whitelistedTerms.push(term);
        return this;
    }
    /**
     * Associates some metadata with this phrase.
     *
     * @param metadata - Metadata to use.
     */
    setMetadata(metadata) {
        this.metadata = metadata;
        return this;
    }
    /**
     * Builds the phrase, returning a [[PhraseContainer]] for use with the
     * [[DataSet]].
     */
    build() {
        return {
            patterns: this.patterns,
            whitelistedTerms: this.whitelistedTerms,
            metadata: this.metadata,
        };
    }
}
exports.PhraseBuilder = PhraseBuilder;


/***/ }),

/***/ "./node_modules/obscenity/dist/index.js":
/*!**********************************************!*\
  !*** ./node_modules/obscenity/dist/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./censor/BuiltinStrategies */ "./node_modules/obscenity/dist/censor/BuiltinStrategies.js"), exports);
__exportStar(__webpack_require__(/*! ./censor/TextCensor */ "./node_modules/obscenity/dist/censor/TextCensor.js"), exports);
__exportStar(__webpack_require__(/*! ./dataset/DataSet */ "./node_modules/obscenity/dist/dataset/DataSet.js"), exports);
__exportStar(__webpack_require__(/*! ./matcher/regexp/RegExpMatcher */ "./node_modules/obscenity/dist/matcher/regexp/RegExpMatcher.js"), exports);
__exportStar(__webpack_require__(/*! ./matcher/BlacklistedTerm */ "./node_modules/obscenity/dist/matcher/BlacklistedTerm.js"), exports);
__exportStar(__webpack_require__(/*! ./matcher/MatchPayload */ "./node_modules/obscenity/dist/matcher/MatchPayload.js"), exports);
__exportStar(__webpack_require__(/*! ./matcher/Matcher */ "./node_modules/obscenity/dist/matcher/Matcher.js"), exports);
__exportStar(__webpack_require__(/*! ./pattern/Nodes */ "./node_modules/obscenity/dist/pattern/Nodes.js"), exports);
__exportStar(__webpack_require__(/*! ./pattern/ParserError */ "./node_modules/obscenity/dist/pattern/ParserError.js"), exports);
__exportStar(__webpack_require__(/*! ./pattern/Pattern */ "./node_modules/obscenity/dist/pattern/Pattern.js"), exports);
__exportStar(__webpack_require__(/*! ./preset/english */ "./node_modules/obscenity/dist/preset/english.js"), exports);
__exportStar(__webpack_require__(/*! ./transformer/collapse-duplicates */ "./node_modules/obscenity/dist/transformer/collapse-duplicates/index.js"), exports);
__exportStar(__webpack_require__(/*! ./transformer/remap-characters */ "./node_modules/obscenity/dist/transformer/remap-characters/index.js"), exports);
__exportStar(__webpack_require__(/*! ./transformer/resolve-confusables */ "./node_modules/obscenity/dist/transformer/resolve-confusables/index.js"), exports);
__exportStar(__webpack_require__(/*! ./transformer/resolve-leetspeak */ "./node_modules/obscenity/dist/transformer/resolve-leetspeak/index.js"), exports);
__exportStar(__webpack_require__(/*! ./transformer/skip-non-alphabetic */ "./node_modules/obscenity/dist/transformer/skip-non-alphabetic/index.js"), exports);
__exportStar(__webpack_require__(/*! ./transformer/to-ascii-lowercase */ "./node_modules/obscenity/dist/transformer/to-ascii-lowercase/index.js"), exports);


/***/ }),

/***/ "./node_modules/obscenity/dist/matcher/BlacklistedTerm.js":
/*!****************************************************************!*\
  !*** ./node_modules/obscenity/dist/matcher/BlacklistedTerm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.assignIncrementingIds = void 0;
/**
 * Assigns incrementing IDs to the patterns provided, starting with 0. It is
 * useful if you have a list of patterns to match against but don't care about
 * identifying which pattern matched.
 *
 * @example
 * ```typescript
 * const matcher = new RegExpMatcher({
 *  ...,
 *  blacklistedTerms: assignIncrementingIds([
 *      pattern`f?uck`,
 *      pattern`|shit|`,
 *  ]),
 * });
 * ```
 * @param patterns - List of parsed patterns.
 * @returns A list of blacklisted terms with valid IDs which can then be passed
 * to the [[RegExpMatcher]].
 */
function assignIncrementingIds(patterns) {
    let currentId = 0;
    return patterns.map((pattern) => ({ id: currentId++, pattern }));
}
exports.assignIncrementingIds = assignIncrementingIds;


/***/ }),

/***/ "./node_modules/obscenity/dist/matcher/IntervalCollection.js":
/*!*******************************************************************!*\
  !*** ./node_modules/obscenity/dist/matcher/IntervalCollection.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntervalCollection = void 0;
class IntervalCollection {
    constructor() {
        this.dirty = false;
        this.intervals = [];
    }
    insert(lowerBound, upperBound) {
        this.intervals.push([lowerBound, upperBound]);
        this.dirty = true;
    }
    query(lowerBound, upperBound) {
        if (this.intervals.length === 0)
            return false;
        if (this.dirty) {
            this.dirty = false;
            // Sort by lower bound.
            this.intervals.sort(
            /* istanbul ignore next: not possible to write a robust test for this */
            (a, b) => (a[0] < b[0] ? -1 : b[0] < a[0] ? 1 : 0));
        }
        for (const interval of this.intervals) {
            // Since the intervals are sorted by lower bound, if we see an
            // interval with a lower bound greater than the target, we can skip
            // checking all the ones after it as it's impossible that they fully
            // contain the target interval.
            if (interval[0] > lowerBound)
                break;
            if (interval[0] <= lowerBound && upperBound <= interval[1])
                return true;
        }
        return false;
    }
    values() {
        return this.intervals.values();
    }
    [Symbol.iterator]() {
        return this.values();
    }
}
exports.IntervalCollection = IntervalCollection;


/***/ }),

/***/ "./node_modules/obscenity/dist/matcher/MatchPayload.js":
/*!*************************************************************!*\
  !*** ./node_modules/obscenity/dist/matcher/MatchPayload.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.compareMatchByPositionAndId = void 0;
const Interval_1 = __webpack_require__(/*! ../util/Interval */ "./node_modules/obscenity/dist/util/Interval.js");
/**
 * Compares two match payloads.
 *
 * If the first match payload's start index is less than the second's, `-1` is
 *   returned;
 * If the second match payload's start index is less than the first's, `1` is
 *   returned;
 * If the first match payload's end index is less than the second's, `-1` is
 *   returned;
 * If the second match payload's end index is less than the first's, `1` is
 *   returned;
 * If the first match payload's term ID is less than the second's, `-1` is
 *   returned;
 * If the first match payload's term ID is equal to the second's, `0` is
 *   returned;
 * Otherwise, `1` is returned.
 *
 * @param a - First match payload.
 * @param b - Second match payload.
 * @returns The result of the comparison: -1 if the first should sort lower than
 * the second, 0 if they are the same, and 1 if the second should sort lower
 * than the first.
 */
function compareMatchByPositionAndId(a, b) {
    const result = (0, Interval_1.compareIntervals)(a.startIndex, a.endIndex, b.startIndex, b.endIndex);
    if (result !== 0)
        return result;
    return a.termId === b.termId ? 0 : a.termId < b.termId ? -1 : 1;
}
exports.compareMatchByPositionAndId = compareMatchByPositionAndId;


/***/ }),

/***/ "./node_modules/obscenity/dist/matcher/Matcher.js":
/*!********************************************************!*\
  !*** ./node_modules/obscenity/dist/matcher/Matcher.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./node_modules/obscenity/dist/matcher/regexp/RegExpMatcher.js":
/*!*********************************************************************!*\
  !*** ./node_modules/obscenity/dist/matcher/regexp/RegExpMatcher.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegExpMatcher = void 0;
const Char_1 = __webpack_require__(/*! ../../util/Char */ "./node_modules/obscenity/dist/util/Char.js");
const Util_1 = __webpack_require__(/*! ../../pattern/Util */ "./node_modules/obscenity/dist/pattern/Util.js");
const TransformerSet_1 = __webpack_require__(/*! ../../transformer/TransformerSet */ "./node_modules/obscenity/dist/transformer/TransformerSet.js");
const CharacterIterator_1 = __webpack_require__(/*! ../../util/CharacterIterator */ "./node_modules/obscenity/dist/util/CharacterIterator.js");
const IntervalCollection_1 = __webpack_require__(/*! ../IntervalCollection */ "./node_modules/obscenity/dist/matcher/IntervalCollection.js");
const MatchPayload_1 = __webpack_require__(/*! ../MatchPayload */ "./node_modules/obscenity/dist/matcher/MatchPayload.js");
/**
 * An implementation of the [[Matcher]] interface using regular expressions and
 * string searching methods.
 */
class RegExpMatcher {
    /**
     * Creates a new [[RegExpMatcher]] with the options given.
     *
     * @example
     * ```typescript
     * // Use the options provided by the English preset.
     * const matcher = new RegExpMatcher({
     * 	...englishDataset.build(),
     * 	...englishRecommendedTransformers,
     * });
     * ```
     * @example
     * ```typescript
     * // Simple matcher that only has blacklisted patterns.
     * const matcher = new RegExpMatcher({
     *  blacklistedTerms: assignIncrementingIds([
     *      pattern`fuck`,
     *      pattern`f?uck`, // wildcards (?)
     *      pattern`bitch`,
     *      pattern`b[i]tch` // optionals ([i] matches either "i" or "")
     *  ]),
     * });
     *
     * // Check whether some string matches any of the patterns.
     * const doesMatch = matcher.hasMatch('fuck you bitch');
     * ```
     * @example
     * ```typescript
     * // A more advanced example, with transformers and whitelisted terms.
     * const matcher = new RegExpMatcher({
     *  blacklistedTerms: [
     *      { id: 1, pattern: pattern`penis` },
     *      { id: 2, pattern: pattern`fuck` },
     *  ],
     *  whitelistedTerms: ['pen is'],
     *  blacklistMatcherTransformers: [
     *      resolveConfusablesTransformer(), // '🅰' => 'a'
     *      resolveLeetSpeakTransformer(), // '$' => 's'
     *      foldAsciiCharCaseTransformer(), // case insensitive matching
     *      skipNonAlphabeticTransformer(), // 'f.u...c.k' => 'fuck'
     *      collapseDuplicatesTransformer(), // 'aaaa' => 'a'
     *  ],
     * });
     *
     * // Output all matches.
     * console.log(matcher.getAllMatches('fu.....uuuuCK the pen is mightier than the sword!'));
     * ```
     * @param options - Options to use.
     */
    constructor({ blacklistedTerms, whitelistedTerms = [], blacklistMatcherTransformers = [], whitelistMatcherTransformers = [], }) {
        this.blacklistedTerms = this.compileTerms(blacklistedTerms);
        this.validateWhitelistedTerms(whitelistedTerms);
        this.whitelistedTerms = whitelistedTerms;
        this.blacklistMatcherTransformers = new TransformerSet_1.TransformerSet(blacklistMatcherTransformers);
        this.whitelistMatcherTransformers = new TransformerSet_1.TransformerSet(whitelistMatcherTransformers);
    }
    getAllMatches(input, sorted = false) {
        const whitelistedIntervals = this.getWhitelistedIntervals(input);
        const [transformedToOrigIndex, transformed] = this.applyTransformers(input, this.blacklistMatcherTransformers);
        const matches = [];
        for (const blacklistedTerm of this.blacklistedTerms) {
            for (const match of transformed.matchAll(blacklistedTerm.regExp)) {
                const origStartIndex = transformedToOrigIndex[match.index];
                let origEndIndex = transformedToOrigIndex[match.index + match[0].length - 1];
                // End index is (unfortunately) inclusive, so adjust as necessary.
                if (origEndIndex < input.length - 1 && // not the last character
                    (0, Char_1.isHighSurrogate)(input.charCodeAt(origEndIndex)) && // character is a high surrogate
                    (0, Char_1.isLowSurrogate)(input.charCodeAt(origEndIndex + 1)) // next character is a low surrogate
                ) {
                    origEndIndex++;
                }
                if (!whitelistedIntervals.query(origStartIndex, origEndIndex)) {
                    matches.push({
                        termId: blacklistedTerm.id,
                        startIndex: origStartIndex,
                        endIndex: origEndIndex,
                        matchLength: [...match[0]].length,
                    });
                }
            }
        }
        if (sorted)
            matches.sort(MatchPayload_1.compareMatchByPositionAndId);
        return matches;
    }
    hasMatch(input) {
        const whitelistedIntervals = this.getWhitelistedIntervals(input);
        const [transformedToOrigIndex, transformed] = this.applyTransformers(input, this.blacklistMatcherTransformers);
        for (const blacklistedTerm of this.blacklistedTerms) {
            for (const match of transformed.matchAll(blacklistedTerm.regExp)) {
                const origStartIndex = transformedToOrigIndex[match.index];
                let origEndIndex = transformedToOrigIndex[match.index + match[0].length - 1];
                // End index is (unfortunately) inclusive, so adjust as necessary.
                if (origEndIndex < input.length - 1 && // not the last character
                    (0, Char_1.isHighSurrogate)(input.charCodeAt(origEndIndex)) && // character is a high surrogate
                    (0, Char_1.isLowSurrogate)(input.charCodeAt(origEndIndex + 1)) // next character is a low surrogate
                ) {
                    origEndIndex++;
                }
                if (!whitelistedIntervals.query(origStartIndex, origEndIndex))
                    return true;
            }
        }
        return false;
    }
    getWhitelistedIntervals(input) {
        const matches = new IntervalCollection_1.IntervalCollection();
        const [transformedToOrigIndex, transformed] = this.applyTransformers(input, this.whitelistMatcherTransformers);
        for (const whitelistedTerm of this.whitelistedTerms) {
            let lastEnd = 0;
            for (let startIndex = transformed.indexOf(whitelistedTerm, lastEnd); startIndex !== -1; startIndex = transformed.indexOf(whitelistedTerm, lastEnd)) {
                let origEndIndex = transformedToOrigIndex[startIndex + whitelistedTerm.length - 1];
                // End index is (unfortunately) inclusive, so adjust as necessary.
                if (origEndIndex < input.length - 1 && // not the last character
                    (0, Char_1.isHighSurrogate)(input.charCodeAt(origEndIndex)) && // character is a high surrogate
                    (0, Char_1.isLowSurrogate)(input.charCodeAt(origEndIndex + 1)) // next character is a low surrogate
                ) {
                    origEndIndex++;
                }
                matches.insert(transformedToOrigIndex[startIndex], origEndIndex);
                lastEnd = startIndex + whitelistedTerm.length;
            }
        }
        return matches;
    }
    applyTransformers(input, transformers) {
        const transformedToOrigIndex = [];
        let transformed = '';
        const iter = new CharacterIterator_1.CharacterIterator(input);
        for (const char of iter) {
            const transformedChar = transformers.applyTo(char);
            if (transformedChar !== undefined) {
                transformed += String.fromCodePoint(transformedChar);
                while (transformedToOrigIndex.length < transformed.length)
                    transformedToOrigIndex.push(iter.position);
            }
        }
        transformers.resetAll();
        return [transformedToOrigIndex, transformed];
    }
    compileTerms(terms) {
        const compiled = [];
        const seenIds = new Set();
        for (const term of terms) {
            if (seenIds.has(term.id))
                throw new Error(`Duplicate blacklisted term ID ${term.id}.`);
            if ((0, Util_1.potentiallyMatchesEmptyString)(term.pattern)) {
                throw new Error(`Pattern with ID ${term.id} potentially matches empty string; this is unsupported.`);
            }
            compiled.push({
                id: term.id,
                regExp: (0, Util_1.compilePatternToRegExp)(term.pattern),
            });
            seenIds.add(term.id);
        }
        return compiled;
    }
    validateWhitelistedTerms(whitelist) {
        if (whitelist.some((term) => term.length === 0)) {
            throw new Error('Whitelisted term set contains empty string; this is unsupported.');
        }
    }
}
exports.RegExpMatcher = RegExpMatcher;


/***/ }),

/***/ "./node_modules/obscenity/dist/pattern/Nodes.js":
/*!******************************************************!*\
  !*** ./node_modules/obscenity/dist/pattern/Nodes.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SyntaxKind = void 0;
/**
 * An enumeration of the kinds of nodes there are.
 */
var SyntaxKind;
(function (SyntaxKind) {
    SyntaxKind[SyntaxKind["Optional"] = 0] = "Optional";
    SyntaxKind[SyntaxKind["Wildcard"] = 1] = "Wildcard";
    SyntaxKind[SyntaxKind["Literal"] = 2] = "Literal";
    SyntaxKind[SyntaxKind["BoundaryAssertion"] = 3] = "BoundaryAssertion";
})(SyntaxKind || (exports.SyntaxKind = SyntaxKind = {}));


/***/ }),

/***/ "./node_modules/obscenity/dist/pattern/Parser.js":
/*!*******************************************************!*\
  !*** ./node_modules/obscenity/dist/pattern/Parser.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Parser = void 0;
const Char_1 = __webpack_require__(/*! ../util/Char */ "./node_modules/obscenity/dist/util/Char.js");
const CharacterIterator_1 = __webpack_require__(/*! ../util/CharacterIterator */ "./node_modules/obscenity/dist/util/CharacterIterator.js");
const Nodes_1 = __webpack_require__(/*! ./Nodes */ "./node_modules/obscenity/dist/pattern/Nodes.js");
const ParserError_1 = __webpack_require__(/*! ./ParserError */ "./node_modules/obscenity/dist/pattern/ParserError.js");
const supportsEscaping = [
    92 /* CharacterCode.Backslash */,
    91 /* CharacterCode.LeftSquareBracket */,
    93 /* CharacterCode.RightSquareBracket */,
    63 /* CharacterCode.QuestionMark */,
    124 /* CharacterCode.VerticalBar */,
];
const supportsEscapingList = supportsEscaping.map((char) => `'${String.fromCodePoint(char)}'`).join(', ');
const eof = -1;
class Parser {
    constructor() {
        this.input = '';
        this.line = 1;
        this.column = 1;
        this.position = 0;
        this.lastColumn = 1;
        this.lastWidth = 0;
    }
    parse(input) {
        this.setInput(input);
        const nodes = [];
        const firstNode = this.nextNode();
        const requireWordBoundaryAtStart = firstNode?.kind === Nodes_1.SyntaxKind.BoundaryAssertion;
        if (firstNode && !requireWordBoundaryAtStart)
            nodes.push(firstNode);
        let requireWordBoundaryAtEnd = false;
        while (!this.done) {
            const pos = this.mark();
            const node = this.nextNode();
            if (node.kind !== Nodes_1.SyntaxKind.BoundaryAssertion) {
                nodes.push(node);
                continue;
            }
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            if (!this.done) {
                this.reportError('Boundary assertions are not supported in this position; they are only allowed at the start / end of the pattern.', pos);
            }
            requireWordBoundaryAtEnd = true;
        }
        return { requireWordBoundaryAtStart, requireWordBoundaryAtEnd, nodes };
    }
    setInput(input) {
        this.input = input;
        this.line = 1;
        this.column = 1;
        this.position = 0;
        this.lastColumn = 1;
        this.lastWidth = 0;
        return this;
    }
    nextNode() {
        switch (this.peek()) {
            case eof:
                return undefined;
            case 91 /* CharacterCode.LeftSquareBracket */:
                return this.parseOptional();
            case 93 /* CharacterCode.RightSquareBracket */:
                this.reportError(`Unexpected ']' with no corresponding '['.`);
            // eslint-disable-next-line no-fallthrough
            case 63 /* CharacterCode.QuestionMark */:
                return this.parseWildcard();
            case 124 /* CharacterCode.VerticalBar */:
                return this.parseBoundaryAssertion();
            default:
                return this.parseLiteral();
        }
    }
    get done() {
        return this.position >= this.input.length;
    }
    // Optional ::= '[' Wildcard | Text ']'
    parseOptional() {
        const preOpenBracketPos = this.mark();
        this.next(); // '['
        const postOpenBracketPos = this.mark();
        if (this.done)
            this.reportError("Unexpected unclosed '['.", preOpenBracketPos);
        if (this.accept('['))
            this.reportError('Unexpected nested optional node.', postOpenBracketPos);
        const childNode = this.nextNode();
        if (childNode.kind === Nodes_1.SyntaxKind.BoundaryAssertion) {
            this.reportError('Boundary assertions are not supported in this position; they are only allowed at the start / end of the pattern.', postOpenBracketPos);
        }
        if (!this.accept(']'))
            this.reportError("Unexpected unclosed '['.");
        return { kind: Nodes_1.SyntaxKind.Optional, childNode: childNode };
    }
    // Wildcard ::= '?'
    parseWildcard() {
        this.next(); // '?'
        return { kind: Nodes_1.SyntaxKind.Wildcard };
    }
    // BoundaryAssertion ::= '|'
    parseBoundaryAssertion() {
        this.next(); // '|'
        return { kind: Nodes_1.SyntaxKind.BoundaryAssertion };
    }
    // Literal              ::= (NON_SPECIAL | '\' SUPPORTS_ESCAPING)+
    // NON_SPECIAL         ::= _any character other than '\', '?', '[', ']', or '|'_
    // SUPPORTS_ESCAPING   ::= '\' | '[' | ']' | '?' | '|'
    parseLiteral() {
        const chars = [];
        while (!this.done) {
            if (this.accept('[]?|')) {
                this.backup();
                break;
            }
            const next = this.next();
            if (next === 92 /* CharacterCode.Backslash */) {
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                if (this.done) {
                    this.backup();
                    this.reportError('Unexpected trailing backslash.');
                }
                // Can we escape the next character?
                const escaped = this.next();
                if (!supportsEscaping.includes(escaped)) {
                    const repr = String.fromCodePoint(escaped);
                    this.backup();
                    this.reportError(`Cannot escape character '${repr}'; the only characters that can be escaped are the following: ${supportsEscapingList}.`);
                }
                chars.push(escaped);
            }
            else {
                chars.push(next);
            }
        }
        return { kind: Nodes_1.SyntaxKind.Literal, chars };
    }
    reportError(message, { line = this.line, column = this.column } = {}) {
        throw new ParserError_1.ParserError(message, line, column);
    }
    // Marks the current position.
    mark() {
        return { line: this.line, column: this.column };
    }
    // Accepts any code point in the charset provided. Iff accepted, the character is consumed.
    accept(charset) {
        const next = this.next();
        const iter = new CharacterIterator_1.CharacterIterator(charset);
        for (const char of iter) {
            if (char === next)
                return true;
        }
        this.backup();
        return false;
    }
    // Reads one code point from the input, without consuming it.
    peek() {
        const next = this.next();
        this.backup();
        return next;
    }
    // Consumes one code point from the input.
    next() {
        if (this.done)
            return eof;
        const char = this.input.charCodeAt(this.position++);
        this.lastWidth = 1;
        if (char === 10 /* CharacterCode.Newline */) {
            this.lastColumn = this.column;
            this.column = 1;
            this.line++;
            return char;
        }
        this.lastColumn = this.column++;
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!(0, Char_1.isHighSurrogate)(char) || this.done)
            return char;
        // Do we have a surrogate pair?
        const next = this.input.charCodeAt(this.position);
        if ((0, Char_1.isLowSurrogate)(next)) {
            this.position++;
            this.lastWidth++;
            return (0, Char_1.convertSurrogatePairToCodePoint)(char, next);
        }
        return char;
    }
    // Steps back one character; can only be called once per call to next().
    backup() {
        this.position -= this.lastWidth;
        this.column = this.lastColumn;
        // Adjust line count if needed.
        if (this.lastWidth === 1 && this.input.charCodeAt(this.position) === 10 /* CharacterCode.Newline */) {
            this.line--;
        }
    }
}
exports.Parser = Parser;


/***/ }),

/***/ "./node_modules/obscenity/dist/pattern/ParserError.js":
/*!************************************************************!*\
  !*** ./node_modules/obscenity/dist/pattern/ParserError.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParserError = void 0;
/**
 * Custom error thrown by the parser when syntactical errors are detected.
 */
class ParserError extends Error {
    constructor(message, line, column) {
        super(`${line}:${column}: ${message}`);
        this.name = 'ParserError';
        this.line = line;
        this.column = column;
    }
}
exports.ParserError = ParserError;


/***/ }),

/***/ "./node_modules/obscenity/dist/pattern/Pattern.js":
/*!********************************************************!*\
  !*** ./node_modules/obscenity/dist/pattern/Pattern.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseRawPattern = exports.pattern = void 0;
const Parser_1 = __webpack_require__(/*! ./Parser */ "./node_modules/obscenity/dist/pattern/Parser.js");
const parser = new Parser_1.Parser();
/**
 * Parses a pattern, which matches a set of strings; see the `Syntax` section
 * for details. This function is intended to be called as a [template
 * tag](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates).
 *
 * **Syntax**
 *
 * Generally speaking, in patterns, characters are interpreted literally. That
 * is, they match exactly what they are: `a` matches an `a`, `b` matches a `b`,
 * `;` matches a `;`, and so on.
 *
 * However, there are several constructs that have special meaning:
 *
 * - `[expr]` matches either the empty string or `expr` (an **optional
 *   expression**). `expr` may be a sequence of literal characters or a wildcard
 *   (see below).
 * - `?` matches any character (a **wildcard**).
 * - A `|` at the start or end of the pattern asserts position at a word
 *   boundary (a **word boundary assertion**). If `|` is at the start, it
 *   ensures that the match either starts at the start of the string or a non-
 *   word character preceding it; if it is at the end, it ensures that the match
 *   either ends at the end of the string or a non-word character follows it.
 *
 *   A word character is an lower-case or upper-case ASCII alphabet character or
 *   an ASCII digit.
 * - In a literal, a backslash may be used to **escape** one of the
 *   meta-characters mentioned above so that it does match literally: `\\[`
 *   matches `[`, and does not mark the start of an optional expression.
 *
 *   **Note about escapes**
 *
 *   As this function operates on raw strings, double-escaping backslashes is
 *   not necessary:
 *
 *   ```typescript
 *   // Use this:
 *   const parsed = pattern`hello \[`;
 *   // Don't use this:
 *   const parsed = pattern`hello \\[`;
 *   ```
 *
 * **Examples**
 *
 * - `baz` matches `baz` exactly.
 *
 * - `b\[ar` matches `b[ar` exactly.
 *
 * - `d?ude` matches `d`, then any character, then `ude`. All of the following
 *   strings are matched by this pattern:
 *   - `dyude`
 *   - `d;ude`
 *   - `d!ude`
 *
 * - `h[?]ello` matches either `h`, any character, then `ello` or the literal
 *   string `hello`. The set of strings it matches is equal to the union of the
 *   set of strings that the two patterns `hello` and `h?ello` match. All of the
 *   following strings are matched by this pattern:
 *   - `hello`
 *   - `h!ello`
 *   - `h;ello`
 *
 * - `|foobar|` asserts position at a word boundary, matches the literal string
 *   `foobar`, and asserts position at a word boundary:
 *   - `foobar` matches, as the start and end of string count as word
 *     boundaries;
 *   - `yofoobar` does _not_ match, as `f` is immediately preceded by a word
 *     character;
 *   - `hello foobar bye` matches, as `f` is immediately preceded by a non-word
 *     character, and `r` is immediately followed by a non-word character.
 *
 * **Grammar**
 *
 * ```
 * Pattern  ::= '['? Atom* ']'?
 * Atom     ::= Literal | Wildcard | Optional
 * Optional ::= '[' Literal | Wildcard ']'
 * Literal  ::= (NON_SPECIAL | '\' SUPPORTS_ESCAPING)+
 *
 * NON_SPECIAL       ::= _any character other than '\', '?', '[', ']', or '|'_
 * SUPPORTS_ESCAPING ::= '\' | '[' | ']' | '?' | '|'
 * ```
 *
 * @example
 * ```typescript
 * const parsed = pattern`hello?`; // match "hello", then any character
 * ```
 * @example
 * ```typescript
 * const parsed = pattern`w[o]rld`; // match "wrld" or "world"
 * ```
 * @example
 * ```typescript
 * const parsed = pattern`my initials are \[??\]`; // match "my initials are [", then any two characters, then a "]"
 * ```
 * @returns The parsed pattern, which can then be used with the
 * [[RegExpMatcher]].
 * @throws [[ParserError]] if a syntactical error was detected while parsing the
 * pattern.
 * @see [[parseRawPattern]] if you want to parse a string into a pattern without
 * using a template tag.
 */
function pattern(strings, ...expressions) {
    let result = strings.raw[0];
    for (const [i, expression] of expressions.entries()) {
        result += expression;
        result += strings.raw[i + 1];
    }
    return parser.parse(result);
}
exports.pattern = pattern;
/**
 * Parses a string as a pattern directly.
 *
 * **Note**
 *
 * It is recommended to use the [[pattern | pattern template tag]] instead of
 * this function for literal patterns (i.e. ones without dynamic content).
 *
 * @param pattern - The string to parse.
 * @throws [[ParserError]] if a syntactical error was detected while parsing the
 * pattern.
 * @returns The parsed pattern, which can then be used with the
 * [[RegExpMatcher]].
 */
function parseRawPattern(pattern) {
    return parser.parse(pattern);
}
exports.parseRawPattern = parseRawPattern;


/***/ }),

/***/ "./node_modules/obscenity/dist/pattern/Util.js":
/*!*****************************************************!*\
  !*** ./node_modules/obscenity/dist/pattern/Util.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRegExpStringForNode = exports.compilePatternToRegExp = exports.potentiallyMatchesEmptyString = void 0;
const Nodes_1 = __webpack_require__(/*! ./Nodes */ "./node_modules/obscenity/dist/pattern/Nodes.js");
function potentiallyMatchesEmptyString(pattern) {
    return pattern.nodes.every((node) => node.kind === Nodes_1.SyntaxKind.Optional);
}
exports.potentiallyMatchesEmptyString = potentiallyMatchesEmptyString;
function compilePatternToRegExp(pattern) {
    let regExpStr = '';
    if (pattern.requireWordBoundaryAtStart)
        regExpStr += '\\b';
    for (const node of pattern.nodes)
        regExpStr += getRegExpStringForNode(node);
    if (pattern.requireWordBoundaryAtEnd)
        regExpStr += `\\b`;
    return new RegExp(regExpStr, 'gs');
}
exports.compilePatternToRegExp = compilePatternToRegExp;
const regExpSpecialChars = ['[', '.', '*', '+', '?', '^', '$', '{', '}', '(', ')', '|', '[', '\\', ']'].map((str) => str.charCodeAt(0));
function getRegExpStringForNode(node) {
    switch (node.kind) {
        case Nodes_1.SyntaxKind.Literal: {
            let str = '';
            for (const char of node.chars) {
                if (regExpSpecialChars.includes(char))
                    str += '\\';
                str += String.fromCodePoint(char);
            }
            return str;
        }
        case Nodes_1.SyntaxKind.Optional:
            return `(?:${getRegExpStringForNode(node.childNode)})?`;
        case Nodes_1.SyntaxKind.Wildcard:
            return `.`;
    }
}
exports.getRegExpStringForNode = getRegExpStringForNode;


/***/ }),

/***/ "./node_modules/obscenity/dist/preset/english.js":
/*!*******************************************************!*\
  !*** ./node_modules/obscenity/dist/preset/english.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.englishDataset = exports.englishRecommendedTransformers = exports.englishRecommendedWhitelistMatcherTransformers = exports.englishRecommendedBlacklistMatcherTransformers = void 0;
const DataSet_1 = __webpack_require__(/*! ../dataset/DataSet */ "./node_modules/obscenity/dist/dataset/DataSet.js");
const Pattern_1 = __webpack_require__(/*! ../pattern/Pattern */ "./node_modules/obscenity/dist/pattern/Pattern.js");
const collapse_duplicates_1 = __webpack_require__(/*! ../transformer/collapse-duplicates */ "./node_modules/obscenity/dist/transformer/collapse-duplicates/index.js");
const resolve_confusables_1 = __webpack_require__(/*! ../transformer/resolve-confusables */ "./node_modules/obscenity/dist/transformer/resolve-confusables/index.js");
const resolve_leetspeak_1 = __webpack_require__(/*! ../transformer/resolve-leetspeak */ "./node_modules/obscenity/dist/transformer/resolve-leetspeak/index.js");
const to_ascii_lowercase_1 = __webpack_require__(/*! ../transformer/to-ascii-lowercase */ "./node_modules/obscenity/dist/transformer/to-ascii-lowercase/index.js");
/**
 * A set of transformers to be used when matching blacklisted patterns with the
 * [[englishDataset | english word dataset]].
 */
exports.englishRecommendedBlacklistMatcherTransformers = [
    (0, resolve_confusables_1.resolveConfusablesTransformer)(),
    (0, resolve_leetspeak_1.resolveLeetSpeakTransformer)(),
    (0, to_ascii_lowercase_1.toAsciiLowerCaseTransformer)(),
    // See #23 and #46.
    // skipNonAlphabeticTransformer(),
    (0, collapse_duplicates_1.collapseDuplicatesTransformer)({
        defaultThreshold: 1,
        customThresholds: new Map([
            ['b', 2],
            ['e', 2],
            ['o', 2],
            ['l', 2],
            ['s', 2],
            ['g', 2], // ni_gg_er
        ]),
    }),
];
/**
 * A set of transformers to be used when matching whitelisted terms with the
 * [[englishDataset | english word dataset]].
 */
exports.englishRecommendedWhitelistMatcherTransformers = [
    (0, to_ascii_lowercase_1.toAsciiLowerCaseTransformer)(),
    (0, collapse_duplicates_1.collapseDuplicatesTransformer)({
        defaultThreshold: Number.POSITIVE_INFINITY,
        customThresholds: new Map([[' ', 1]]), // collapse spaces
    }),
];
/**
 * Recommended transformers to be used with the [[englishDataset | english word
 * dataset]] and the [[RegExpMatcher]].
 */
exports.englishRecommendedTransformers = {
    blacklistMatcherTransformers: exports.englishRecommendedBlacklistMatcherTransformers,
    whitelistMatcherTransformers: exports.englishRecommendedWhitelistMatcherTransformers,
};
/**
 * A dataset of profane English words.
 *
 * @example
 * ```typescript
 * const matcher = new RegExpMatcher({
 * 	...englishDataset.build(),
 * 	...englishRecommendedTransformers,
 * });
 * ```
 * @example
 * ```typescript
 * // Extending the data-set by adding a new word and removing an existing one.
 * const myDataset = new DataSet()
 * 	.addAll(englishDataset)
 * 	.removePhrasesIf((phrase) => phrase.metadata.originalWord === 'vagina')
 * 	.addPhrase((phrase) => phrase.addPattern(pattern`|balls|`));
 * ```
 * @copyright
 * The words are taken from the [cuss](https://github.com/words/cuss) project,
 * with some modifications.
 *
 * ```text
 * (The MIT License)
 *
 * Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ```
 */
exports.englishDataset = new DataSet_1.DataSet()
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'abo' }).addPattern((0, Pattern_1.pattern) `|ab[b]o[s]|`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'abeed' }).addPattern((0, Pattern_1.pattern) `ab[b]eed`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'africoon' }).addPattern((0, Pattern_1.pattern) `africoon`))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'anal' })
    .addPattern((0, Pattern_1.pattern) `|anal`)
    .addWhitelistedTerm('analabos')
    .addWhitelistedTerm('analagous')
    .addWhitelistedTerm('analav')
    .addWhitelistedTerm('analy')
    .addWhitelistedTerm('analog')
    .addWhitelistedTerm('an al')
    .addPattern((0, Pattern_1.pattern) `danal`)
    .addPattern((0, Pattern_1.pattern) `eanal`)
    .addPattern((0, Pattern_1.pattern) `fanal`)
    .addWhitelistedTerm('fan al')
    .addPattern((0, Pattern_1.pattern) `ganal`)
    .addWhitelistedTerm('gan al')
    .addPattern((0, Pattern_1.pattern) `ianal`)
    .addWhitelistedTerm('ian al')
    .addPattern((0, Pattern_1.pattern) `janal`)
    .addWhitelistedTerm('trojan al')
    .addPattern((0, Pattern_1.pattern) `kanal`)
    .addPattern((0, Pattern_1.pattern) `lanal`)
    .addWhitelistedTerm('lan al')
    .addPattern((0, Pattern_1.pattern) `lanal`)
    .addWhitelistedTerm('lan al')
    .addPattern((0, Pattern_1.pattern) `oanal|`)
    .addPattern((0, Pattern_1.pattern) `panal`)
    .addWhitelistedTerm('pan al')
    .addPattern((0, Pattern_1.pattern) `qanal`)
    .addPattern((0, Pattern_1.pattern) `ranal`)
    .addPattern((0, Pattern_1.pattern) `sanal`)
    .addPattern((0, Pattern_1.pattern) `tanal`)
    .addWhitelistedTerm('tan al')
    .addPattern((0, Pattern_1.pattern) `uanal`)
    .addWhitelistedTerm('uan al')
    .addPattern((0, Pattern_1.pattern) `vanal`)
    .addWhitelistedTerm('van al')
    .addPattern((0, Pattern_1.pattern) `wanal`)
    .addPattern((0, Pattern_1.pattern) `xanal`)
    .addWhitelistedTerm('texan al')
    .addPattern((0, Pattern_1.pattern) `yanal`)
    .addPattern((0, Pattern_1.pattern) `zanal`))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'anus' })
    .addPattern((0, Pattern_1.pattern) `anus`)
    .addWhitelistedTerm('an us')
    .addWhitelistedTerm('tetanus')
    .addWhitelistedTerm('uranus')
    .addWhitelistedTerm('janus')
    .addWhitelistedTerm('manus'))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'arabush' }).addPattern((0, Pattern_1.pattern) `arab[b]ush`))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'arse' })
    .addPattern((0, Pattern_1.pattern) `|ars[s]e`)
    .addWhitelistedTerm('arsen'))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'ass' })
    .addPattern((0, Pattern_1.pattern) `|ass`)
    .addWhitelistedTerm('assa')
    .addWhitelistedTerm('assem')
    .addWhitelistedTerm('assen')
    .addWhitelistedTerm('asser')
    .addWhitelistedTerm('asset')
    .addWhitelistedTerm('assev')
    .addWhitelistedTerm('assi')
    .addWhitelistedTerm('assoc')
    .addWhitelistedTerm('assoi')
    .addWhitelistedTerm('assu'))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'bastard' }).addPattern((0, Pattern_1.pattern) `bas[s]tard`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'bestiality' }).addPattern((0, Pattern_1.pattern) `be[e][a]s[s]tial`))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'bitch' })
    .addPattern((0, Pattern_1.pattern) `bitch`)
    .addPattern((0, Pattern_1.pattern) `bich|`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'blowjob' }).addPattern((0, Pattern_1.pattern) `b[b]l[l][o]wj[o]b`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'bollocks' }).addPattern((0, Pattern_1.pattern) `bol[l]ock`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'boob' }).addPattern((0, Pattern_1.pattern) `boob`))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'boonga' })
    .addPattern((0, Pattern_1.pattern) `boonga`)
    .addWhitelistedTerm('baboon ga'))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'buttplug' }).addPattern((0, Pattern_1.pattern) `buttplug`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'chingchong' }).addPattern((0, Pattern_1.pattern) `chingchong`))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'chink' })
    .addPattern((0, Pattern_1.pattern) `chink`)
    .addWhitelistedTerm('chin k'))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'cock' })
    .addPattern((0, Pattern_1.pattern) `|cock|`)
    .addPattern((0, Pattern_1.pattern) `|cocks`)
    .addPattern((0, Pattern_1.pattern) `|cockp`)
    .addPattern((0, Pattern_1.pattern) `|cocke[e]|`)
    .addWhitelistedTerm('cockney'))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'cuck' })
    .addPattern((0, Pattern_1.pattern) `cuck`)
    .addWhitelistedTerm('cuckoo'))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'cum' })
    .addPattern((0, Pattern_1.pattern) `|cum`)
    .addWhitelistedTerm('cumu')
    .addWhitelistedTerm('cumb'))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'cunt' })
    .addPattern((0, Pattern_1.pattern) `|cunt`)
    .addPattern((0, Pattern_1.pattern) `cunt|`))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'deepthroat' })
    .addPattern((0, Pattern_1.pattern) `deepthro[o]at`)
    .addPattern((0, Pattern_1.pattern) `deepthro[o]t`))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'dick' })
    .addPattern((0, Pattern_1.pattern) `|dck|`)
    .addPattern((0, Pattern_1.pattern) `dick`)
    .addWhitelistedTerm('benedick')
    .addWhitelistedTerm('dickens'))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'dildo' }).addPattern((0, Pattern_1.pattern) `dildo`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'doggystyle' }).addPattern((0, Pattern_1.pattern) `d[o]g[g]ys[s]t[y]l[l]`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'double penetration' }).addPattern((0, Pattern_1.pattern) `double penetra`))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'dyke' })
    .addPattern((0, Pattern_1.pattern) `dyke`)
    .addWhitelistedTerm('van dyke'))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'ejaculate' })
    .addPattern((0, Pattern_1.pattern) `e[e]jacul`)
    .addPattern((0, Pattern_1.pattern) `e[e]jakul`)
    .addPattern((0, Pattern_1.pattern) `e[e]acul[l]ate`))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'fag' })
    .addPattern((0, Pattern_1.pattern) `|fag`)
    .addPattern((0, Pattern_1.pattern) `fggot`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'felch' }).addPattern((0, Pattern_1.pattern) `fe[e]l[l]ch`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'fellatio' }).addPattern((0, Pattern_1.pattern) `f[e][e]llat`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'finger bang' }).addPattern((0, Pattern_1.pattern) `fingerbang`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'fisting' }).addPattern((0, Pattern_1.pattern) `fistin`))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'fuck' })
    .addPattern((0, Pattern_1.pattern) `f[?]ck`)
    .addPattern((0, Pattern_1.pattern) `|fk`)
    .addPattern((0, Pattern_1.pattern) `|fu|`)
    .addPattern((0, Pattern_1.pattern) `|fuk`)
    .addWhitelistedTerm('fickle')
    .addWhitelistedTerm('kung-fu')
    .addWhitelistedTerm('kung fu'))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'gangbang' }).addPattern((0, Pattern_1.pattern) `g[?]ngbang`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'handjob' }).addPattern((0, Pattern_1.pattern) `h[?]ndjob`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'hentai' }).addPattern((0, Pattern_1.pattern) `h[e][e]ntai`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'hooker' }).addPattern((0, Pattern_1.pattern) `hooker`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'incest' }).addPattern((0, Pattern_1.pattern) `incest`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'jerk off' }).addPattern((0, Pattern_1.pattern) `jerkoff`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'jizz' }).addPattern((0, Pattern_1.pattern) `jizz`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'kike' }).addPattern((0, Pattern_1.pattern) `kike`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'lubejob' }).addPattern((0, Pattern_1.pattern) `lubejob`))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'masturbate' })
    .addPattern((0, Pattern_1.pattern) `m[?]sturbate`)
    .addPattern((0, Pattern_1.pattern) `masterbate`))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'negro' })
    .addPattern((0, Pattern_1.pattern) `negro`)
    .addWhitelistedTerm('montenegro')
    .addWhitelistedTerm('negron')
    .addWhitelistedTerm('stoneground')
    .addWhitelistedTerm('winegrow'))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'nigger' })
    .addPattern((0, Pattern_1.pattern) `n[i]gger`)
    .addPattern((0, Pattern_1.pattern) `n[i]gga`)
    .addPattern((0, Pattern_1.pattern) `|nig|`)
    .addPattern((0, Pattern_1.pattern) `|nigs|`)
    .addWhitelistedTerm('snigger'))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'orgasm' })
    .addPattern((0, Pattern_1.pattern) `[or]gasm`)
    .addWhitelistedTerm('gasma'))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'orgy' })
    .addPattern((0, Pattern_1.pattern) `orgy`)
    .addPattern((0, Pattern_1.pattern) `orgies`)
    .addWhitelistedTerm('porgy'))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'penis' })
    .addPattern((0, Pattern_1.pattern) `pe[e]nis`)
    .addPattern((0, Pattern_1.pattern) `|pnis`)
    .addWhitelistedTerm('pen is'))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'piss' }).addPattern((0, Pattern_1.pattern) `|piss`))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'porn' })
    .addPattern((0, Pattern_1.pattern) `|prn|`)
    .addPattern((0, Pattern_1.pattern) `porn`)
    .addWhitelistedTerm('p orna'))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'prick' }).addPattern((0, Pattern_1.pattern) `|prick[s]|`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'pussy' }).addPattern((0, Pattern_1.pattern) `p[u]ssy`))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'rape' })
    .addPattern((0, Pattern_1.pattern) `|rape`)
    .addPattern((0, Pattern_1.pattern) `|rapis[s]t`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'retard' }).addPattern((0, Pattern_1.pattern) `retard`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'scat' }).addPattern((0, Pattern_1.pattern) `|s[s]cat|`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'semen' }).addPattern((0, Pattern_1.pattern) `|s[s]e[e]me[e]n`))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'sex' })
    .addPattern((0, Pattern_1.pattern) `|s[s]e[e]x|`)
    .addPattern((0, Pattern_1.pattern) `|s[s]e[e]xy|`))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'shit' })
    .addPattern((0, Pattern_1.pattern) `shit`)
    .addWhitelistedTerm('s hit')
    .addWhitelistedTerm('sh it')
    .addWhitelistedTerm('shi t')
    .addWhitelistedTerm('shitake')
    .addWhitelistedTerm('mishit'))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'slut' }).addPattern((0, Pattern_1.pattern) `s[s]lut`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'spastic' }).addPattern((0, Pattern_1.pattern) `|spastic`))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'tit' })
    .addPattern((0, Pattern_1.pattern) `|tit|`)
    .addPattern((0, Pattern_1.pattern) `|tits|`)
    .addPattern((0, Pattern_1.pattern) `|titt`)
    .addPattern((0, Pattern_1.pattern) `|tiddies`)
    .addPattern((0, Pattern_1.pattern) `|tities`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'tranny' }).addPattern((0, Pattern_1.pattern) `tranny`))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'turd' })
    .addPattern((0, Pattern_1.pattern) `|turd`)
    .addWhitelistedTerm('turducken'))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'twat' })
    .addPattern((0, Pattern_1.pattern) `|twat`)
    .addWhitelistedTerm('twattle'))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'vagina' })
    .addPattern((0, Pattern_1.pattern) `vagina`)
    .addPattern((0, Pattern_1.pattern) `|v[?]gina`))
    .addPhrase((phrase) => phrase.setMetadata({ originalWord: 'wank' }).addPattern((0, Pattern_1.pattern) `|wank`))
    .addPhrase((phrase) => phrase
    .setMetadata({ originalWord: 'whore' })
    .addPattern((0, Pattern_1.pattern) `|wh[o]re|`)
    .addPattern((0, Pattern_1.pattern) `|who[o]res[s]|`)
    .addWhitelistedTerm("who're"));


/***/ }),

/***/ "./node_modules/obscenity/dist/transformer/TransformerSet.js":
/*!*******************************************************************!*\
  !*** ./node_modules/obscenity/dist/transformer/TransformerSet.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransformerSet = void 0;
class TransformerSet {
    constructor(transformers) {
        this.transformers = transformers;
        this.statefulTransformers = Array.from({ length: this.transformers.length });
        for (let i = 0; i < this.transformers.length; i++) {
            const transformer = this.transformers[i];
            if (transformer.type === 1 /* TransformerType.Stateful */) {
                this.statefulTransformers[i] = transformer.factory();
            }
        }
    }
    applyTo(char) {
        let transformed = char;
        for (let i = 0; i < this.transformers.length && transformed !== undefined; i++) {
            const transformer = this.transformers[i];
            if (transformer.type === 0 /* TransformerType.Simple */)
                transformed = transformer.transform(transformed);
            else
                transformed = this.statefulTransformers[i].transform(transformed);
        }
        return transformed;
    }
    resetAll() {
        for (let i = 0; i < this.transformers.length; i++) {
            if (this.transformers[i].type === 1 /* TransformerType.Stateful */) {
                this.statefulTransformers[i].reset();
            }
        }
    }
}
exports.TransformerSet = TransformerSet;


/***/ }),

/***/ "./node_modules/obscenity/dist/transformer/Transformers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/obscenity/dist/transformer/Transformers.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createStatefulTransformer = exports.createSimpleTransformer = void 0;
/**
 * Creates a container holding the transformer function provided. Simple
 * transformers are suitable for stateless transformations, e.g., a
 * transformation that maps certain characters to others. For transformations
 * that need to keep around state, see `createStatefulTransformer`.
 *
 * @example
 * ```typescript
 * function lowercaseToUppercase(char) {
 *  return isLowercase(char) ? char - 32 : char;
 * }
 *
 * const transformer = createSimpleTransformer(lowercaseToUppercase);
 * const matcher = new RegExpMatcher({ ..., blacklistMatcherTransformers: [transformer] });
 * ```
 * @example
 * ```typescript
 * function ignoreAllNonDigitChars(char) {
 *  return isDigit(char) ? char : undefined;
 * }
 *
 * const transformer = createSimpleTransformer(ignoreAllNonDigitChars);
 * const matcher = new RegExpMatcher({ ..., blacklistMatcherTransformers: [transformer] });
 * ```
 * @param transformer - Function that applies the transformation. It should
 * accept one argument, the input character, and return the transformed
 * character. A return value of `undefined` indicates that the character should
 * be ignored.
 * @returns A container holding the transformer, which can then be passed to the
 * [[RegExpMatcher]].
 */
function createSimpleTransformer(transformer) {
    return { type: 0 /* TransformerType.Simple */, transform: transformer };
}
exports.createSimpleTransformer = createSimpleTransformer;
/**
 * Creates a container holding the stateful transformer. Stateful transformers
 * are objects which satisfy the `StatefulTransformer` interface. They are
 * suitable for transformations that require keeping around some state regarding
 * the characters previously transformed in the text.
 *
 * @example
 * ```typescript
 * class IgnoreDuplicateCharactersTransformer implements StatefulTransformer {
 *  private lastChar = -1;
 *
 *  public transform(char: number) {
 *      if (char === this.lastChar) return undefined;
 *      this.lastChar = char;
 *      return char;
 *  }
 *
 *  public reset() {
 *      this.lastChar = -1;
 *  }
 * }
 *
 * const transformer = createStatefulTransformer(() => new IgnoreDuplicateCharactersTransformer());
 * const matcher = new RegExpMatcher({ ..., blacklistMatcherTransformers: [transformer] });
 * ```
 * @param factory A function that returns an instance of the stateful
 * transformer.
 * @returns A container holding the stateful transformer, which can then be
 * passed to the [[RegExpMatcher]].
 */
function createStatefulTransformer(factory) {
    return { type: 1 /* TransformerType.Stateful */, factory };
}
exports.createStatefulTransformer = createStatefulTransformer;


/***/ }),

/***/ "./node_modules/obscenity/dist/transformer/collapse-duplicates/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/obscenity/dist/transformer/collapse-duplicates/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.collapseDuplicatesTransformer = void 0;
const Char_1 = __webpack_require__(/*! ../../util/Char */ "./node_modules/obscenity/dist/util/Char.js");
const Transformers_1 = __webpack_require__(/*! ../Transformers */ "./node_modules/obscenity/dist/transformer/Transformers.js");
const transformer_1 = __webpack_require__(/*! ./transformer */ "./node_modules/obscenity/dist/transformer/collapse-duplicates/transformer.js");
/**
 * Creates a transformer that collapses duplicate characters. This is useful for
 * detecting variants of patterns in which a character is repeated to bypass
 * detection.
 *
 * As an example, the pattern `hi` does not match `hhiii` by default, as the
 * frequency of the characters does not match. With this transformer, `hhiii`
 * would become `hi`, and would therefore match the pattern.
 *
 * **Application order**
 *
 * It is recommended that this transformer be applied after all other
 * transformers. Using it before other transformers may have the effect of not
 * catching duplicates of certain characters that were originally different but
 * became the same after a series of transformations.
 *
 * **Warning**
 *
 * This transformer should be used with caution, as while it can make certain
 * patterns match text that wouldn't have been matched before, it can also go
 * the other way. For example, the pattern `hello` clearly matches `hello`, but
 * with this transformer, by default, `hello` would become `helo` which does
 * _not_ match. In this cases, the `customThresholds` option can be used to
 * allow two `l`s in a row, making it leave `hello` unchanged.
 *
 * @example
 * ```typescript
 * // Collapse runs of the same character.
 * const transformer = collapseDuplicatesTransformer();
 * const matcher = new RegExpMatcher({ ..., blacklistMatcherTransformers: [transformer] });
 * ```
 * @example
 * ```typescript
 * // Collapse runs of characters other than 'a'.
 * const transformer = collapseDuplicatesTransformer({ customThresholds: new Map([['a', Infinity]]) });
 * const matcher = new RegExpMatcher({ ..., blacklistMatcherTransformers: [transformer] });
 * ```
 * @param options - Options for the transformer.
 * @returns A container holding the transformer, which can then be passed to the
 * [[RegExpMatcher]].
 */
function collapseDuplicatesTransformer({ defaultThreshold = 1, customThresholds = new Map(), } = {}) {
    const map = createCharacterToThresholdMap(customThresholds);
    return (0, Transformers_1.createStatefulTransformer)(() => new transformer_1.CollapseDuplicatesTransformer({ defaultThreshold, customThresholds: map }));
}
exports.collapseDuplicatesTransformer = collapseDuplicatesTransformer;
function createCharacterToThresholdMap(customThresholds) {
    const map = new Map();
    for (const [str, threshold] of customThresholds) {
        if (threshold < 0)
            throw new RangeError('Expected all thresholds to be non-negative.');
        const char = (0, Char_1.getAndAssertSingleCodePoint)(str);
        map.set(char, threshold);
    }
    return map;
}


/***/ }),

/***/ "./node_modules/obscenity/dist/transformer/collapse-duplicates/transformer.js":
/*!************************************************************************************!*\
  !*** ./node_modules/obscenity/dist/transformer/collapse-duplicates/transformer.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CollapseDuplicatesTransformer = void 0;
class CollapseDuplicatesTransformer {
    constructor({ defaultThreshold, customThresholds }) {
        this.remaining = -1;
        this.lastChar = -1;
        this.defaultThreshold = defaultThreshold;
        this.customThresholds = customThresholds;
    }
    transform(char) {
        if (char === this.lastChar) {
            return this.remaining-- > 0 ? char : undefined;
        }
        const threshold = this.customThresholds.get(char) ?? this.defaultThreshold;
        this.remaining = threshold - 1;
        this.lastChar = char;
        return threshold > 0 ? char : undefined;
    }
    reset() {
        this.remaining = -1;
        this.lastChar = -1;
    }
}
exports.CollapseDuplicatesTransformer = CollapseDuplicatesTransformer;


/***/ }),

/***/ "./node_modules/obscenity/dist/transformer/remap-characters/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/obscenity/dist/transformer/remap-characters/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.remapCharactersTransformer = void 0;
const Char_1 = __webpack_require__(/*! ../../util/Char */ "./node_modules/obscenity/dist/util/Char.js");
const CharacterIterator_1 = __webpack_require__(/*! ../../util/CharacterIterator */ "./node_modules/obscenity/dist/util/CharacterIterator.js");
const Transformers_1 = __webpack_require__(/*! ../Transformers */ "./node_modules/obscenity/dist/transformer/Transformers.js");
/**
 * Maps certain characters to other characters, leaving other characters
 * unchanged.
 *
 * **Application order**
 *
 * It is recommended that this transformer be applied near the start of the
 * transformer chain.
 *
 * @example
 * ```typescript
 * // Transform 'a' to 'b'.
 * const transformer = remapCharactersTransformer({ 'b': 'a' });
 * const matcher = new RegExpMatcher({ ..., blacklistMatcherTransformers: [transformer] });
 * ```
 * @example
 * ```typescript
 * // Transform '🅱️' to 'b', and use a map instead of an object as the argument.
 * const transformer = remapCharactersTransformer(new Map([['b', '🅱️']]));
 * const matcher = new RegExpMatcher({ ..., blacklistMatcherTransformers: [transformer] });
 * ```
 * @example
 * ```typescript
 * // Transform '🇴' and '0' to 'o'.
 * const transformer = remapCharactersTransformer({ o: '🇴0' });
 * const matcher = new RegExpMatcher({ ..., blacklistMatcherTransformers: [transformer] });
 * ```
 * @param mapping - A map/object mapping certain characters to others.
 * @returns A container holding the transformer, which can then be passed to the
 * [[RegExpMatcher]].
 * @see [[resolveConfusablesTransformer|  Transformer that handles confusable Unicode characters]]
 * @see [[resolveLeetSpeakTransformer | Transformer that handles leet-speak]]
 */
function remapCharactersTransformer(mapping) {
    const map = createOneToOneMap(mapping);
    return (0, Transformers_1.createSimpleTransformer)((c) => map.get(c) ?? c);
}
exports.remapCharactersTransformer = remapCharactersTransformer;
function createOneToOneMap(mapping) {
    const map = new Map();
    const iterable = mapping instanceof Map ? mapping.entries() : Object.entries(mapping);
    for (const [original, equivalents] of iterable) {
        const originalChar = (0, Char_1.getAndAssertSingleCodePoint)(original);
        const iter = new CharacterIterator_1.CharacterIterator(equivalents);
        for (const equivalent of iter)
            map.set(equivalent, originalChar);
    }
    return map;
}


/***/ }),

/***/ "./node_modules/obscenity/dist/transformer/resolve-confusables/confusables.js":
/*!************************************************************************************!*\
  !*** ./node_modules/obscenity/dist/transformer/resolve-confusables/confusables.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.confusables = void 0;
/**
 * Maps confusable Unicode characters to their normalized equivalents.
 *
 * @copyright
 * The data here is taken from the
 * [confusables](https://github.com/gc/confusables) library.
 *
 * ```text
 * # The MIT License (MIT)
 *
 * Copyright © 2019 https://github.com/gc/
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the “Software”), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * ```
 */
exports.confusables = new Map([
    [' ', ' '],
    ['0', '⓿'],
    ['1', '⓵➊⑴¹𝟏𝟙１𝟷𝟣⒈𝟭1➀₁①❶⥠'],
    ['2', '⓶⒉⑵➋ƻ²ᒿ𝟚２𝟮𝟤ᒾ𝟸Ƨ𝟐②ᴤ₂➁❷ᘝƨ'],
    ['3', '³ⳌꞫ𝟑ℨ𝟛𝟯𝟥Ꝫ➌ЗȜ⓷ӠƷ３𝟹⑶⒊ʒʓǯǮƺ𝕴ᶾзᦡ➂③₃ᶚᴣᴟ❸ҘҙӬӡӭӟӞ'],
    ['4', '➍ҶᏎ𝟜ҷ⓸ҸҹӴӵᶣ４чㄩ⁴➃₄④❹Ӌ⑷⒋'],
    ['5', '𝟱⓹➎Ƽ𝟓𝟻𝟝𝟧５➄₅⑤⁵❺ƽ⑸⒌'],
    ['6', 'ⳒᏮ𝟞𝟨𝟔➏⓺Ϭϭ⁶б６ᧈ⑥➅₆❻⑹⒍'],
    ['7', '⓻𐓒➐７⁷⑦₇❼➆⑺⒎'],
    ['8', '𐌚➑⓼８𝟠𝟪৪⁸₈𝟴➇⑧❽𝟾𝟖⑻⒏'],
    ['9', 'ꝮⳊ⓽➒੧৭୨９𝟫𝟿𝟗⁹₉Գ➈⑨❾⑼⒐'],
    ['A', '🄰Ꭿ𐊠𝕬𝜜𝐴ꓮᎪ𝚨ꭺ𝝖🅐Å∀🇦₳🅰𝒜𝘈𝐀𝔸дǺᗅⒶＡΑᾋᗩĂÃÅǍȀȂĀȺĄʌΛλƛᴀᴬДАልÄₐᕱªǞӒΆẠẢẦẨẬẮẰẲẴẶᾸᾹᾺΆᾼᾈᾉᾊᾌᾍᾎᾏἈἉἊἋἌἍἎἏḀȦǠӐÀÁÂẤẪ𝛢𝓐𝙰𝘼'],
    ['a', '∂⍺ⓐձǟᵃᶏ⒜аɒａαȃȁคǎმäɑāɐąᾄẚạảǡầẵḁȧӑӓãåάὰάăẩằẳặᾀᾁᾂᾃᾅᾆᾰᾱᾲᾳᾴᶐᾶᾷἀἁἂἃἄἅἆἇᾇậắàáâấẫǻⱥ𝐚𝑎𝒂𝒶𝓪𝔞𝕒𝖆𝖺𝗮𝘢𝙖𝚊𝛂𝛼𝜶𝝰𝞪⍶'],
    ['B', '𐌁𝑩𝕭🄱𐊡𝖡𝘽ꓐ𝗕𝘉𝜝𐊂𝚩𝐁𝛣𝝗𝐵𝙱𝔹Ᏼᏼ𝞑Ꞵ𝔅🅑฿𝓑ᗿᗾᗽ🅱ⒷＢвϐᗷƁ乃ßცჩ๖βɮБՅ๒ᙖʙᴮᵇጌḄℬΒВẞḂḆɃദᗹᗸᵝᙞᙟᙝᛒᙗᙘᴃ🇧'],
    ['b', 'Ꮟ𝐛𝘣𝒷𝔟𝓫𝖇𝖻𝑏𝙗𝕓𝒃𝗯𝚋♭ᑳᒈｂᖚᕹᕺⓑḃḅҍъḇƃɓƅᖯƄЬᑲþƂ⒝ЪᶀᑿᒀᒂᒁᑾьƀҌѢѣᔎ'],
    ['C', 'ᏟⲤ🄲ꓚ𐊢𐌂🅲𐐕🅒☾ČÇⒸＣↃƇᑕㄈ¢८↻ĈϾՇȻᙅᶜ⒞ĆҀĊ©टƆℂℭϹС匚ḈҪʗᑖᑡᑢᑣᑤᑥⅭ𝐂𝐶𝑪𝒞𝓒𝕮𝖢𝗖𝘊𝘾ᔍ'],
    ['c', 'ⲥ𐐽ꮯĉｃⓒćčċçҁƈḉȼↄсርᴄϲҫ꒝ςɽϛ𝙲ᑦ᧚𝐜𝑐𝒄𝒸𝓬𝔠𝕔𝖈𝖼𝗰𝘤𝙘𝚌₵🇨ᥴᒼⅽ'],
    ['D', 'Ꭰ🄳𝔡𝖉𝔻𝗗𝘋𝙳𝐷𝓓𝐃𝑫𝕯𝖣𝔇𝘿ꭰⅅ𝒟ꓓ🅳🅓ⒹＤƉᗪƊÐԺᴅᴰↁḊĐÞⅮᗞᑯĎḌḐḒḎᗫᗬᗟᗠᶛᴆ🇩'],
    ['d', 'Ꮷꓒ𝓭ᵭ₫ԃⓓｄḋďḍḑḓḏđƌɖɗᵈ⒟ԁⅾᶁԀᑺᑻᑼᑽᒄᑰᑱᶑ𝕕𝖽𝑑𝘥𝒅𝙙𝐝𝗱𝚍ⅆ𝒹ʠժ'],
    ['E', 'ꭼ🄴𝙀𝔼𐊆𝚬ꓰ𝝚𝞔𝓔𝑬𝗘🅴🅔ⒺΈＥƎἝᕮƐモЄᴇᴱᵉÉ乇ЁɆꂅ€ÈℰΕЕⴹᎬĒĔĖĘĚÊËԐỀẾỄỂẼḔḖẺȄȆẸỆȨḜḘḚἘἙἚἛἜῈΈӖὲέЀϵ🇪'],
    ['e', '𝑒𝓮𝕖𝖊𝘦𝗲𝚎𝙚𝒆𝔢𝖾𝐞Ҿҿⓔｅ⒠èᧉéᶒêɘἔềếễ૯ǝєεēҽɛểẽḕḗĕėëẻěȅȇẹệȩɇₑęḝḙḛ℮еԑѐӗᥱёἐἑἒἓἕℯ'],
    ['F', '🄵𐊇𝔉𝘍𐊥ꓝꞘ🅵🅕𝓕ⒻＦғҒᖴƑԲϝቻḞℱϜ₣🇫Ⅎ'],
    ['f', '𝐟𝖋ⓕｆƒḟʃբᶠ⒡ſꊰʄ∱ᶂ𝘧'],
    ['G', 'ꓖᏳ🄶Ꮐᏻ𝔾𝓖𝑮𝕲ꮐ𝒢𝙂𝖦𝙶𝔊𝐺𝐆🅶🅖ⒼＧɢƓʛĢᘜᴳǴĠԌĜḠĞǦǤԍ₲🇬⅁'],
    ['g', 'ⓖｇǵĝḡğġǧģց૭ǥɠﻭﻮᵍ⒢ℊɡᧁ𝐠𝑔𝒈𝓰𝔤𝕘𝖌𝗀𝗴𝘨𝙜𝚐'],
    ['H', '🄷𝜢ꓧ𝘏𝐻𝝜𝖧𐋏𝗛ꮋℍᎻℌⲎ𝑯𝞖🅷🅗ዞǶԋⒽＨĤᚺḢḦȞḤḨḪĦⱧҢңҤῊΉῌἨἩἪἫἭἮἯᾘᾙᾚᾛᾜᾝᾞᾟӉӈҥΉн卄♓𝓗ℋН𝐇𝙃𝙷ʜ𝛨Η𝚮ᕼӇᴴᵸ🇭'],
    ['h', 'Һ⒣ђⓗｈĥḣḧȟḥḩḫẖħⱨհһከኩኪካɦℎ𝐡𝒉𝒽𝓱𝔥𝕙𝖍𝗁𝗵𝘩𝙝𝚑իʰᑋᗁɧんɥ'],
    ['I', '🄸ЇꀤᏆ🅸🅘إﺇٳأﺃٲٵⒾＩ៸ÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗェエῘῙῚΊἸἹἺἻἼἽἾⅠΪΊɪᶦᑊᥣ𝛪𝐈𝙄𝙸𝓵𝙡𝐼ᴵ𝚰𝑰🇮'],
    ['i', 'ⓘｉìíîĩīĭïḯỉǐȉȋịḭῐῑῒΐῖῗἰἱἲⅰⅼ∣ⵏ￨׀ا١۱ߊᛁἳἴἵɨіὶίᶖ𝔦𝚒𝝸𝗂𝐢𝕚𝖎𝗶𝘪𝙞ίⁱᵢ𝓲⒤'],
    ['J', '🄹🅹🅙ⒿＪЈʝᒍנﾌĴʆวلյʖᴊᴶﻝጋɈⱼՂๅႱįᎫȷ丿ℐℑᒘᒙᒚᒛᒴᒵᒎᒏ🇯'],
    ['j', 'ⓙｊϳʲ⒥ɉĵǰјڶᶨ𝒿𝘫𝗷𝑗𝙟𝔧𝒋𝗃𝓳𝕛𝚓𝖏𝐣'],
    ['K', '𝗞🄺𝜥𝘒ꓗ𝙆𝕂Ⲕ𝔎𝛫Ꮶ𝞙𝒦🅺🅚₭ⓀＫĸḰќƘкҠκқҟӄʞҚКҡᴋᴷᵏ⒦ᛕЌጕḲΚKҜҝҞĶḴǨⱩϗӃ🇰'],
    ['k', 'ⓚｋḱǩḳķḵƙⱪᶄ𝐤𝘬𝗄𝕜𝜅𝜘𝜿𝝒𝝹𝞌𝞳𝙠𝚔𝑘𝒌ϰ𝛋𝛞𝟆𝗸𝓴𝓀'],
    ['L', '🄻𐐛Ⳑ𝑳𝙻𐑃𝓛ⳑꮮᏞꓡ🅻🅛ﺈ└ⓁւＬĿᒪ乚ՆʟꓶιԼᴸˡĹረḶₗΓլĻᄂⅬℒⱢᥧᥨᒻᒶᒷᶫﺎᒺᒹᒸᒫ⎳ㄥŁⱠﺄȽ🇱'],
    ['l', 'ⓛｌŀĺľḷḹļӀℓḽḻłﾚɭƚɫⱡ|Ɩ⒧ʅǀוןΙІ｜ᶩӏ𝓘𝕀𝖨𝗜𝘐𝐥𝑙𝒍𝓁𝔩𝕝𝖑𝗅𝗹𝘭𝚕𝜤𝝞ı𝚤ɩι𝛊𝜄𝜾𝞲'],
    ['M', '🄼𐌑𐊰ꓟⲘᎷ🅼🅜ⓂＭмṂ൱ᗰ州ᘻო๓♏ʍᙏᴍᴹᵐ⒨ḾМṀ௱ⅯℳΜϺᛖӍӎ𝐌𝑀𝑴𝓜𝔐𝕄𝕸𝖬𝗠𝘔𝙈𝙼𝚳𝛭𝜧𝝡𝞛🇲'],
    ['m', '₥ᵯ𝖒𝐦𝗆𝔪𝕞𝓂ⓜｍനᙢ൩ḿṁⅿϻṃጠɱ៳ᶆ𝙢𝓶𝚖𝑚𝗺᧕᧗'],
    ['N', '🄽ℕꓠ𝛮𝝢𝙽𝚴𝑵𝑁Ⲛ𝐍𝒩𝞜𝗡𝘕𝜨𝓝𝖭🅽₦🅝ЙЍⓃҋ៷ＮᴎɴƝᑎ几иՈռИהЛπᴺᶰŃ刀ክṄⁿÑПΝᴨոϖǸŇṆŅṊṈทŊӢӣӤӥћѝйᥢҊᴻ🇳'],
    ['n', 'ח𝒏𝓷𝙣𝑛𝖓𝔫𝗇𝚗𝗻ᥒⓝήｎǹᴒńñᾗηṅňṇɲņṋṉղຖՌƞŋ⒩ภกɳпŉлԉȠἠἡῃդᾐᾑᾒᾓᾔᾕᾖῄῆῇῂἢἣἤἥἦἧὴήበቡቢባቤብቦȵ𝛈𝜂𝜼𝝶𝞰𝕟𝘯𝐧𝓃ᶇᵰᥥ∩'],
    [
        'O',
        'ꄲ🄾𐊒𝟬ꓳⲞ𐐄𐊫𐓂𝞞🅞⍥◯ⵁ⊖０⊝𝝤Ѳϴ𝚶𝜪ѺӦӨӪΌʘ𝐎ǑÒŎÓÔÕȌȎㇿ❍ⓄＯὋロ❤૦⊕ØФԾΘƠᴼᵒ⒪ŐÖₒ¤◊Φ〇ΟОՕଠഠ௦סỒỐỖỔṌȬṎŌṐṒȮȰȪỎỜỚỠỞỢỌỘǪǬǾƟⵔ߀៰⍜⎔⎕⦰⦱⦲⦳⦴⦵⦶⦷⦸⦹⦺⦻⦼⦽⦾⦿⧀⧁⧂⧃ὈὉὊὌὍ',
    ],
    [
        'o',
        '𝚘𝛐𝗈𝞼ဝⲟ𝙤၀𐐬𝔬𐓪𝓸🇴⍤○ϙ🅾𝒪𝖮𝟢𝟶𝙾𝘰𝗼𝕠𝜊𝐨𝝾𝞸ᐤⓞѳ᧐ᥲðｏఠᦞՓòөӧóºōôǒȏŏồốȍỗổõσṍȭṏὄṑṓȯȫ๏ᴏőöѻоዐǭȱ০୦٥౦೦൦๐໐οօᴑ०੦ỏơờớỡởợọộǫøǿɵծὀὁόὸόὂὃὅ',
    ],
    ['P', '🄿ꓑ𝚸𝙿𝞠𝙋ꮲⲢ𝒫𝝦𝑃𝑷𝗣𝐏𐊕𝜬𝘗𝓟𝖯𝛲Ꮲ🅟Ҏ🅿ⓅＰƤᑭ尸Ṗրφքᴘᴾᵖ⒫ṔｱקРየᴩⱣℙΡῬᑸᑶᑷᑹᑬᑮ🇵₱'],
    ['p', 'ҏ℗ⓟｐṕṗƥᵽῥρрƿǷῤ⍴𝓹𝓅𝐩𝑝𝒑𝔭𝕡𝖕𝗉𝗽𝘱𝙥𝚙𝛒𝝆𝞺𝜌𝞀'],
    ['Q', '🅀🆀🅠ⓆＱℚⵕԚ𝐐𝑄𝑸𝒬𝓠𝚀𝘘𝙌𝖰𝕼𝔔𝗤🇶'],
    ['q', 'ⓠｑգ⒬۹զᑫɋɊԛ𝗊𝑞𝘲𝕢𝚚𝒒𝖖𝐪𝔮𝓺𝙦'],
    ['R', '℞℟ꭱᏒ𐒴ꮢᎡꓣ🆁🅡ⓇＲᴙȒʀᖇя尺ŔЯરƦᴿዪṚɌʁℛℜℝṘŘȐṜŖṞⱤ𝐑𝑅𝑹𝓡𝕽𝖱𝗥𝘙𝙍𝚁ᚱ🇷ᴚ'],
    ['r', 'ⓡｒŕṙřȑȓṛṝŗгՐɾᥬṟɍʳ⒭ɼѓᴦᶉ𝐫𝑟𝒓𝓇𝓻𝔯𝕣𝖗𝗋𝗿𝘳𝙧ᵲґᵣ'],
    ['S', '🅂ꇙ𝓢𝗦Ꮪ𝒮Ꮥ𝚂𝐒ꓢ𝖲𝔖𝙎𐊖𝕾𐐠𝘚𝕊𝑆𝑺🆂🅢ⓈＳṨŞֆՏȘˢ⒮ЅṠŠŚṤŜṦṢടᔕᔖᔢᔡᔣᔤ'],
    ['s', 'ⓢꜱ𐑈ꮪｓśṥŝṡšṧʂṣṩѕşșȿᶊక𝐬𝑠𝒔𝓈𝓼𝔰𝕤𝖘𝗌𝘀𝘴𝙨𝚜ގ🇸'],
    ['T', '🅃🆃𐌕𝚻𝛵𝕋𝕿𝑻𐊱𐊗𝖳𝙏🝨𝝩𝞣𝚃𝘛𝑇ꓔ⟙𝐓Ⲧ𝗧⊤𝔗Ꭲꭲ𝒯🅣⏇⏉ⓉＴтҬҭƬイŦԵτᴛᵀｲፕϮŤ⊥ƮΤТ下ṪṬȚŢṰṮ丅丁ᐪ𝛕𝜏𝝉𝞃𝞽𝓣ㄒ🇹ጥ'],
    ['t', 'ⓣｔṫẗťṭțȶ੮էʇ†ţṱṯƭŧᵗ⒯ʈեƫ𝐭𝑡𝒕𝓉𝓽𝔱𝕥𝖙𝗍𝘁𝘵𝙩𝚝ナ'],
    ['U', '🅄ꓴ𐓎꒤🆄🅤ŨŬŮᑗᑘǓǕǗǙⓊＵȖᑌ凵ƱմԱꓵЦŪՄƲᙀᵁᵘ⒰ŰપÜՍÙÚÛṸṺǛỦȔƯỪỨỮỬỰỤṲŲṶṴɄᥩᑧ∪ᘮ⋃𝐔𝑈𝑼𝒰𝓤𝔘𝕌𝖀𝖴𝗨𝘜𝙐𝚄🇺'],
    ['u', 'ὺύⓤｕùũūừṷṹŭǖữᥙǚǜὗυΰนսʊǘǔúůᴜűųยûṻцሁüᵾᵤµʋủȕȗưứửựụṳṵʉῠῡῢΰῦῧὐὑϋύὒὓὔὕὖᥔ𝐮𝑢𝒖𝓊𝓾𝔲𝕦𝖚𝗎ᶙ'],
    ['V', '🅅ꓦ𝑽𝖵𝘝Ꮩ𝚅𝙑𝐕🆅🅥ⓋＶᐯѴᵛ⒱۷ṾⅴⅤṼ٧ⴸѶᐺᐻ🇻𝓥'],
    ['v', 'ሀⓥｖ𝜐𝝊ṽṿ౮งѵעᴠνטᵥѷ៴ᘁ𝙫𝚟𝛎𝜈𝝂𝝼𝞶𝘷𝘃𝓿'],
    ['W', '🅆ᏔᎳ𝑾ꓪ𝒲𝘞🆆Ⓦ🅦ｗＷẂᾧᗯᥕ山ѠຟచաЩШώщฬшᙎᵂʷ⒲ฝሠẄԜẀŴẆẈധᘺѿᙡƜ₩🇼'],
    ['w', 'ẁꮃẃⓦ⍵ŵẇẅẘẉⱳὼὠὡὢὣωὤὥὦὧῲῳῴῶῷⱲѡԝᴡώᾠᾡᾢᾣᾤᾥᾦɯ𝝕𝟉𝞏'],
    ['X', '🞨🞩🞪🅇🞫🞬𐌗Ⲭꓫ𝖃𝞦𝘟𐊐𝚾𝝬𝜲Ꭓ𐌢𝖷𝑋𝕏𝔛𐊴𝗫🆇🅧❌Ⓧ𝓧ＸẊ᙭χㄨ𝒳ӾჯӼҳЖΧҲᵡˣ⒳אሸẌꊼⅩХ╳᙮ᕁᕽⅹᚷⵝ𝙓𝚇乂𝐗🇽'],
    ['x', 'ⓧｘхẋ×ₓ⤫⤬⨯ẍᶍ𝙭ӽ𝘹𝐱𝚡⨰ﾒ𝔁'],
    ['Y', 'Ⲩ𝚈𝑌𝗬𝐘ꓬ𝒀𝜰𐊲🆈🅨ⓎＹὛƳㄚʏ⅄ϔ￥¥ՎϓγץӲЧЎሃŸɎϤΥϒҮỲÝŶỸȲẎỶỴῨῩῪΎὙὝὟΫΎӮӰҰұ𝕐🇾'],
    ['y', '🅈ᎽᎩⓨｙỳýŷỹȳẏÿỷуყẙỵƴɏᵞɣʸᶌү⒴ӳӱӯўУʎ'],
    ['Z', '🅉ꓜ𝗭𝐙☡Ꮓ𝘡🆉🅩ⓏＺẔƵ乙ẐȤᶻ⒵ŹℤΖŻŽẒⱫ🇿'],
    ['z', 'ꮓⓩｚźẑżžẓẕƶȥɀᴢጊʐⱬᶎʑᙆ'],
]);


/***/ }),

/***/ "./node_modules/obscenity/dist/transformer/resolve-confusables/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/obscenity/dist/transformer/resolve-confusables/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveConfusablesTransformer = void 0;
const remap_characters_1 = __webpack_require__(/*! ../remap-characters */ "./node_modules/obscenity/dist/transformer/remap-characters/index.js");
const confusables_1 = __webpack_require__(/*! ./confusables */ "./node_modules/obscenity/dist/transformer/resolve-confusables/confusables.js");
/**
 * Creates a transformer that maps confusable Unicode characters to their
 * normalized equivalent. For example, `⓵`, `➊`, and `⑴` become `1` when using
 * this transformer.
 *
 * **Application order**
 *
 * It is recommended that this transformer be applied near the start of the
 * transformer chain.
 *
 * @example
 * ```typescript
 * const transformer = resolveConfusablesTransformer();
 * const matcher = new RegExpMatcher({ ..., blacklistMatcherTransformers: [transformer] });
 * ```
 * @returns A container holding the transformer, which can then be passed to the
 * [[RegExpMatcher]].
 */
function resolveConfusablesTransformer() {
    return (0, remap_characters_1.remapCharactersTransformer)(confusables_1.confusables);
}
exports.resolveConfusablesTransformer = resolveConfusablesTransformer;


/***/ }),

/***/ "./node_modules/obscenity/dist/transformer/resolve-leetspeak/dictionary.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/obscenity/dist/transformer/resolve-leetspeak/dictionary.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dictionary = void 0;
exports.dictionary = new Map([
    ['a', '@4'],
    ['c', '('],
    ['e', '3'],
    ['i', '1|'],
    ['o', '0'],
    ['s', '$'],
]);


/***/ }),

/***/ "./node_modules/obscenity/dist/transformer/resolve-leetspeak/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/obscenity/dist/transformer/resolve-leetspeak/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveLeetSpeakTransformer = void 0;
const remap_characters_1 = __webpack_require__(/*! ../remap-characters */ "./node_modules/obscenity/dist/transformer/remap-characters/index.js");
const dictionary_1 = __webpack_require__(/*! ./dictionary */ "./node_modules/obscenity/dist/transformer/resolve-leetspeak/dictionary.js");
/**
 * Creates a transformer that maps leet-speak characters to their normalized
 * equivalent. For example, `$` becomes `s` when using this transformer.
 *
 * **Application order**
 *
 * It is recommended that this transformer be applied near the start of the
 * transformer chain, but after similar transformers that map characters to
 * other characters, such as the [[resolveConfusablesTransformer | transformer
 * that resolves confusable Unicode characters]].
 *
 * @example
 * ```typescript
 * const transformer = resolveLeetSpeakTransformer();
 * const matcher = new RegExpMatcher({ ..., blacklistMatcherTransformers: [transformer] });
 * ```
 * @returns A container holding the transformer, which can then be passed to the
 * [[RegExpMatcher]].
 */
function resolveLeetSpeakTransformer() {
    return (0, remap_characters_1.remapCharactersTransformer)(dictionary_1.dictionary);
}
exports.resolveLeetSpeakTransformer = resolveLeetSpeakTransformer;


/***/ }),

/***/ "./node_modules/obscenity/dist/transformer/skip-non-alphabetic/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/obscenity/dist/transformer/skip-non-alphabetic/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.skipNonAlphabeticTransformer = void 0;
const Char_1 = __webpack_require__(/*! ../../util/Char */ "./node_modules/obscenity/dist/util/Char.js");
const Transformers_1 = __webpack_require__(/*! ../Transformers */ "./node_modules/obscenity/dist/transformer/Transformers.js");
/**
 * Creates a transformer that skips non-alphabetic characters (`a`-`z`,
 * `A`-`Z`). This is useful when matching text on patterns that are solely
 * comprised of alphabetic characters (the pattern `hello` does not match
 * `h.e.l.l.o` by default, but does with this transformer).
 *
 * **Warning**
 *
 * This transformation is not part of the default set of transformations, as
 * there are some known rough edges with false negatives; see
 * [#23](https://github.com/jo3-l/obscenity/issues/23) and
 * [#46](https://github.com/jo3-l/obscenity/issues/46) on the GitHub issue
 * tracker.
 *
 * **Application order**
 *
 * It is recommended that this transformer be applied near the end of the
 * transformer chain, if at all.
 *
 * @example
 * ```typescript
 * const transformer = skipNonAlphabeticTransformer();
 * const matcher = new RegExpMatcher({ ..., blacklistMatcherTransformers: [transformer] });
 * ```
 * @returns A container holding the transformer, which can then be passed to the
 * [[RegExpMatcher]].
 */
function skipNonAlphabeticTransformer() {
    return (0, Transformers_1.createSimpleTransformer)((c) => ((0, Char_1.isAlphabetic)(c) ? c : undefined));
}
exports.skipNonAlphabeticTransformer = skipNonAlphabeticTransformer;


/***/ }),

/***/ "./node_modules/obscenity/dist/transformer/to-ascii-lowercase/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/obscenity/dist/transformer/to-ascii-lowercase/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toAsciiLowerCaseTransformer = void 0;
const Char_1 = __webpack_require__(/*! ../../util/Char */ "./node_modules/obscenity/dist/util/Char.js");
const Transformers_1 = __webpack_require__(/*! ../Transformers */ "./node_modules/obscenity/dist/transformer/Transformers.js");
/**
 * Creates a transformer that changes all ASCII alphabet characters to
 * lower-case, leaving other characters unchanged.
 *
 * **Application order**
 *
 * It is recommended that this transformer be applied near the end of the
 * transformer chain. Using it before other transformers may have the effect of
 * making its changes useless as transformers applied after produce characters
 * of varying cases.
 *
 * @returns A container holding the transformer, which can then be passed to the
 * [[RegExpMatcher]].
 */
function toAsciiLowerCaseTransformer() {
    return (0, Transformers_1.createSimpleTransformer)((c) => ((0, Char_1.isUpperCase)(c) ? (0, Char_1.invertCaseOfAlphabeticChar)(c) : c));
}
exports.toAsciiLowerCaseTransformer = toAsciiLowerCaseTransformer;


/***/ }),

/***/ "./node_modules/obscenity/dist/util/Char.js":
/*!**************************************************!*\
  !*** ./node_modules/obscenity/dist/util/Char.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getAndAssertSingleCodePoint = exports.invertCaseOfAlphabeticChar = exports.isUpperCase = exports.isLowerCase = exports.isAlphabetic = exports.isDigit = exports.isWordChar = exports.convertSurrogatePairToCodePoint = exports.isLowSurrogate = exports.isHighSurrogate = void 0;
function isHighSurrogate(char) {
    return 55296 /* CharacterCode.HighSurrogateStart */ <= char && char <= 56319 /* CharacterCode.HighSurrogateEnd */;
}
exports.isHighSurrogate = isHighSurrogate;
function isLowSurrogate(char) {
    return 56320 /* CharacterCode.LowSurrogateStart */ <= char && char <= 57343 /* CharacterCode.LowSurrogateEnd */;
}
exports.isLowSurrogate = isLowSurrogate;
// See https://unicodebook.readthedocs.io/unicode_encodings.html#utf-16-surrogate-pairs.
function convertSurrogatePairToCodePoint(highSurrogate, lowSurrogate) {
    return ((highSurrogate - 55296 /* CharacterCode.HighSurrogateStart */) * 0x400 +
        lowSurrogate -
        56320 /* CharacterCode.LowSurrogateStart */ +
        0x10000);
}
exports.convertSurrogatePairToCodePoint = convertSurrogatePairToCodePoint;
function isWordChar(char) {
    return isDigit(char) || isAlphabetic(char);
}
exports.isWordChar = isWordChar;
function isDigit(char) {
    return 48 /* CharacterCode.Zero */ <= char && char <= 57 /* CharacterCode.Nine */;
}
exports.isDigit = isDigit;
function isAlphabetic(char) {
    return isLowerCase(char) || isUpperCase(char);
}
exports.isAlphabetic = isAlphabetic;
function isLowerCase(char) {
    return 97 /* CharacterCode.LowerA */ <= char && char <= 122 /* CharacterCode.LowerZ */;
}
exports.isLowerCase = isLowerCase;
function isUpperCase(char) {
    return 65 /* CharacterCode.UpperA */ <= char && char <= 90 /* CharacterCode.UpperZ */;
}
exports.isUpperCase = isUpperCase;
// Input must be a lower-case or upper-case ASCII alphabet character.
function invertCaseOfAlphabeticChar(char) {
    return char ^ 0x20;
}
exports.invertCaseOfAlphabeticChar = invertCaseOfAlphabeticChar;
// Asserts that the string is comprised of one and only one code point,
// then returns said code point.
function getAndAssertSingleCodePoint(str) {
    if ([...str].length !== 1)
        throw new RangeError(`Expected the input string to be one code point in length.`);
    return str.codePointAt(0);
}
exports.getAndAssertSingleCodePoint = getAndAssertSingleCodePoint;


/***/ }),

/***/ "./node_modules/obscenity/dist/util/CharacterIterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/obscenity/dist/util/CharacterIterator.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CharacterIterator = void 0;
const Char_1 = __webpack_require__(/*! ./Char */ "./node_modules/obscenity/dist/util/Char.js");
class CharacterIterator {
    constructor(input) {
        this.lastPosition = -1;
        this.currentPosition = 0;
        this._lastWidth = 0;
        this._input = input ?? '';
    }
    get input() {
        return this._input;
    }
    setInput(input) {
        this._input = input;
        this.reset();
        return this;
    }
    reset() {
        this.lastPosition = -1;
        this.currentPosition = 0;
        this._lastWidth = 0;
    }
    next() {
        if (this.done)
            return { done: true, value: undefined };
        this.lastPosition = this.currentPosition;
        const char = this._input.charCodeAt(this.currentPosition++);
        this._lastWidth = 1;
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (this.done || !(0, Char_1.isHighSurrogate)(char))
            return { done: false, value: char };
        // Do we have a surrogate pair?
        const next = this._input.charCodeAt(this.currentPosition);
        if ((0, Char_1.isLowSurrogate)(next)) {
            this._lastWidth++;
            this.currentPosition++;
            return { done: false, value: (0, Char_1.convertSurrogatePairToCodePoint)(char, next) };
        }
        return { done: false, value: char };
    }
    // Position of the iterator; equals the start index of the last character consumed.
    // -1 if no characters were consumed yet.
    get position() {
        return this.lastPosition;
    }
    // Width of the last character consumed; 2 if it was a surrogate pair and 1 otherwise.
    // 0 if no characters were consumed yet.
    get lastWidth() {
        return this._lastWidth;
    }
    get done() {
        return this.currentPosition >= this._input.length;
    }
    [Symbol.iterator]() {
        return this;
    }
}
exports.CharacterIterator = CharacterIterator;


/***/ }),

/***/ "./node_modules/obscenity/dist/util/Interval.js":
/*!******************************************************!*\
  !*** ./node_modules/obscenity/dist/util/Interval.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.compareIntervals = void 0;
function compareIntervals(lowerBound0, upperBound0, lowerBound1, upperBound1) {
    if (lowerBound0 < lowerBound1)
        return -1;
    if (lowerBound1 < lowerBound0)
        return 1;
    if (upperBound0 < upperBound1)
        return -1;
    if (upperBound1 < upperBound0)
        return 1;
    return 0;
}
exports.compareIntervals = compareIntervals;


/***/ }),

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ }),

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/formatters.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatters: () => (/* binding */ formatters)
/* harmony export */ });
/* harmony import */ var _getDayOfYear_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../getDayOfYear.js */ "./node_modules/date-fns/getDayOfYear.js");
/* harmony import */ var _getISOWeek_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../getISOWeek.js */ "./node_modules/date-fns/getISOWeek.js");
/* harmony import */ var _getISOWeekYear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getISOWeekYear.js */ "./node_modules/date-fns/getISOWeekYear.js");
/* harmony import */ var _getWeek_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../getWeek.js */ "./node_modules/date-fns/getWeek.js");
/* harmony import */ var _getWeekYear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getWeekYear.js */ "./node_modules/date-fns/getWeekYear.js");
/* harmony import */ var _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addLeadingZeros.js */ "./node_modules/date-fns/_lib/addLeadingZeros.js");
/* harmony import */ var _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightFormatters.js */ "./node_modules/date-fns/_lib/format/lightFormatters.js");









const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night",
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },

  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }

    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.y(date, token);
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = (0,_getWeekYear_js__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }

    // Padding
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(weekYear, token.length);
  },

  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = (0,_getISOWeekYear_js__WEBPACK_IMPORTED_MODULE_3__.getISOWeekYear)(date);

    // Padding
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeekYear, token.length);
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(year, token.length);
  },

  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting",
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },

  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone",
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    const week = (0,_getWeek_js__WEBPACK_IMPORTED_MODULE_4__.getWeek)(date, options);

    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }

    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(week, token.length);
  },

  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = (0,_getISOWeek_js__WEBPACK_IMPORTED_MODULE_5__.getISOWeek)(date);

    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }

    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeek, token.length);
  },

  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }

    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.d(date, token);
  },

  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = (0,_getDayOfYear_js__WEBPACK_IMPORTED_MODULE_6__.getDayOfYear)(date);

    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }

    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(dayOfYear, token.length);
  },

  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone",
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone",
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "aaa":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }

    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "bbb":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.h(date, token);
  },

  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }

    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.H(date, token);
  },

  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;

    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;

    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }

    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.m(date, token);
  },

  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }

    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.s(date, token);
  },

  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.S(date, token);
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return "Z";
    }

    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (GMT)
  O: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Seconds timestamp
  t: function (date, token, _localize) {
    const timestamp = Math.trunc(+date / 1000);
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },

  // Milliseconds timestamp
  T: function (date, token, _localize) {
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(+date, token.length);
  },
};

function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}

function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
  const minutes = (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/lightFormatters.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFormatters: () => (/* binding */ lightFormatters)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addLeadingZeros.js */ "./node_modules/date-fns/_lib/addLeadingZeros.js");


/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
  },

  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(month + 1, 2);
  },

  // Day of the month
  d(date, token) {
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getDate(), token.length);
  },

  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },

  // Hour [1-12]
  h(date, token) {
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
  },

  // Hour [0-23]
  H(date, token) {
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours(), token.length);
  },

  // Minute
  m(date, token) {
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getMinutes(), token.length);
  },

  // Second
  s(date, token) {
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getSeconds(), token.length);
  },

  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3),
    );
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(fractionalSeconds, token.length);
  },
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: () => (/* binding */ longFormatters)
/* harmony export */ });
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/normalizeDates.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/_lib/normalizeDates.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeDates: () => (/* binding */ normalizeDates)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constructFrom.js */ "./node_modules/date-fns/constructFrom.js");


function normalizeDates(context, ...dates) {
  const normalize = _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object"),
  );
  return dates.map(normalize);
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   warnOrThrowProtectedError: () => (/* binding */ warnOrThrowProtectedError)
/* harmony export */ });
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;

const throwTokens = ["D", "DD", "YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}

function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}

function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}

function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}


/***/ }),

/***/ "./node_modules/date-fns/constants.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/constants.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFromSymbol: () => (/* binding */ constructFromSymbol),
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;

/**
 * @constant
 * @name constructFromSymbol
 * @summary Symbol enabling Date extensions to inherit properties from the reference date.
 *
 * The symbol is used to enable the `constructFrom` function to construct a date
 * using a reference date and a value. It allows to transfer extra properties
 * from the reference date to the new date. It's useful for extensions like
 * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
 * a constructor argument.
 */
const constructFromSymbol = Symbol.for("constructDateFrom");


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");


/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);

  if (date && typeof date === "object" && _constants_js__WEBPACK_IMPORTED_MODULE_0__.constructFromSymbol in date)
    return date[_constants_js__WEBPACK_IMPORTED_MODULE_0__.constructFromSymbol](value);

  if (date instanceof Date) return new date.constructor(value);

  return new Date(value);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.js */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js");
/* harmony import */ var _lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/normalizeDates.js */ "./node_modules/date-fns/_lib/normalizeDates.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");
/* harmony import */ var _startOfDay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfDay.js */ "./node_modules/date-fns/startOfDay.js");





/**
 * The {@link differenceInCalendarDays} function options.
 */

/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options object
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0,_lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__.normalizeDates)(
    options?.in,
    laterDate,
    earlierDate,
  );

  const laterStartOfDay = (0,_startOfDay_js__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(laterDate_);
  const earlierStartOfDay = (0,_startOfDay_js__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(earlierDate_);

  const laterTimestamp =
    +laterStartOfDay - (0,_lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_2__.getTimezoneOffsetInMilliseconds)(laterStartOfDay);
  const earlierTimestamp =
    +earlierStartOfDay - (0,_lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_2__.getTimezoneOffsetInMilliseconds)(earlierStartOfDay);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((laterTimestamp - earlierTimestamp) / _constants_js__WEBPACK_IMPORTED_MODULE_3__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/format.js":
/*!*****************************************!*\
  !*** ./node_modules/date-fns/format.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formatDate: () => (/* binding */ format),
/* harmony export */   formatters: () => (/* reexport safe */ _lib_format_formatters_js__WEBPACK_IMPORTED_MODULE_0__.formatters),
/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_1__.longFormatters)
/* harmony export */ });
/* harmony import */ var _lib_defaultLocale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/defaultLocale.js */ "./node_modules/date-fns/locale/en-US.js");
/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");
/* harmony import */ var _lib_format_formatters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/formatters.js */ "./node_modules/date-fns/_lib/format/formatters.js");
/* harmony import */ var _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/format/longFormatters.js */ "./node_modules/date-fns/_lib/format/longFormatters.js");
/* harmony import */ var _lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_lib/protectedTokens.js */ "./node_modules/date-fns/_lib/protectedTokens.js");
/* harmony import */ var _isValid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isValid.js */ "./node_modules/date-fns/isValid.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");








// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;



/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_js__WEBPACK_IMPORTED_MODULE_3__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const originalDate = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_4__.toDate)(date, options?.in);

  if (!(0,_isValid_js__WEBPACK_IMPORTED_MODULE_5__.isValid)(originalDate)) {
    throw new RangeError("Invalid time value");
  }

  let parts = formatStr
    .match(longFormattingTokensRegExp)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        const longFormatter = _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_1__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp)
    .map((substring) => {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return { isToken: false, value: "'" };
      }

      const firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return { isToken: false, value: cleanEscapedString(substring) };
      }

      if (_lib_format_formatters_js__WEBPACK_IMPORTED_MODULE_0__.formatters[firstCharacter]) {
        return { isToken: true, value: substring };
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      return { isToken: false, value: substring };
    });

  // invoke localize preprocessor (only for french locales at the moment)
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }

  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  return parts
    .map((part) => {
      if (!part.isToken) return part.value;

      const token = part.value;

      if (
        (!options?.useAdditionalWeekYearTokens &&
          (0,_lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_6__.isProtectedWeekYearToken)(token)) ||
        (!options?.useAdditionalDayOfYearTokens &&
          (0,_lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_6__.isProtectedDayOfYearToken)(token))
      ) {
        (0,_lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_6__.warnOrThrowProtectedError)(token, formatStr, String(date));
      }

      const formatter = _lib_format_formatters_js__WEBPACK_IMPORTED_MODULE_0__.formatters[token[0]];
      return formatter(originalDate, token, locale.localize, formatterOptions);
    })
    .join("");
}

function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (format);


/***/ }),

/***/ "./node_modules/date-fns/getDayOfYear.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDayOfYear: () => (/* binding */ getDayOfYear)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.js */ "./node_modules/date-fns/differenceInCalendarDays.js");
/* harmony import */ var _startOfYear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfYear.js */ "./node_modules/date-fns/startOfYear.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");




/**
 * The {@link getDayOfYear} function options.
 */

/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  const diff = (0,_differenceInCalendarDays_js__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_date, (0,_startOfYear_js__WEBPACK_IMPORTED_MODULE_2__.startOfYear)(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDayOfYear);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeek.js":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");
/* harmony import */ var _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.js */ "./node_modules/date-fns/startOfISOWeek.js");
/* harmony import */ var _startOfISOWeekYear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.js */ "./node_modules/date-fns/startOfISOWeekYear.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");





/**
 * The {@link getISOWeek} function options.
 */

/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  const diff = +(0,_startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date) - +(0,_startOfISOWeekYear_js__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_js__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.js */ "./node_modules/date-fns/startOfISOWeek.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");




/**
 * The {@link getISOWeekYear} function options.
 */

/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(_date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfNextYear);

  const fourthOfJanuaryOfThisYear = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(_date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfThisYear);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/getWeek.js":
/*!******************************************!*\
  !*** ./node_modules/date-fns/getWeek.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeek: () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");
/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");
/* harmony import */ var _startOfWeekYear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.js */ "./node_modules/date-fns/startOfWeekYear.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");





/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */
function getWeek(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  const diff = +(0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options) - +(0,_startOfWeekYear_js__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_js__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);


/***/ }),

/***/ "./node_modules/date-fns/getWeekYear.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");





/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  const year = _date.getFullYear();

  const defaultOptions = (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(options?.in || date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfNextYear, options);

  const firstWeekOfThisYear = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(options?.in || date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfThisYear, options);

  if (+_date >= +startOfNextYear) {
    return year + 1;
  } else if (+_date >= +startOfThisYear) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/isDate.js":
/*!*****************************************!*\
  !*** ./node_modules/date-fns/isDate.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isDate: () => (/* binding */ isDate)
/* harmony export */ });
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return (
    value instanceof Date ||
    (typeof value === "object" &&
      Object.prototype.toString.call(value) === "[object Date]")
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDate);


/***/ }),

/***/ "./node_modules/date-fns/isValid.js":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isValid.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate.js */ "./node_modules/date-fns/isDate.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertible into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  return !((!(0,_isDate_js__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) && typeof date !== "number") || isNaN(+(0,_toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(date)));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // [TODO] -- I challenge you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // [TODO] -- I challenge you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // [TODO] I challenge you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.js */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.js");
/* harmony import */ var _en_US_lib_formatLong_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.js */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.js");
/* harmony import */ var _en_US_lib_formatRelative_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.js */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.js");
/* harmony import */ var _en_US_lib_localize_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.js */ "./node_modules/date-fns/locale/en-US/_lib/localize.js");
/* harmony import */ var _en_US_lib_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.js */ "./node_modules/date-fns/locale/en-US/_lib/match.js");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_js__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_js__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_js__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_js__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_js__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.js */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.js");


const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: (0,_lib_buildFormatLongFn_js__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0,_lib_buildFormatLongFn_js__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0,_lib_buildFormatLongFn_js__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.js */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.js");


const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.js */ "./node_modules/date-fns/locale/_lib/buildMatchFn.js");
/* harmony import */ var _lib_buildMatchPatternFn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.js */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.js");



const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_js__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.js":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * The {@link startOfDay} function options.
 */

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");


/**
 * The {@link startOfISOWeek} function options.
 */

/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date, options) {
  return (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, { ...options, weekStartsOn: 1 });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _getISOWeekYear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getISOWeekYear.js */ "./node_modules/date-fns/getISOWeekYear.js");
/* harmony import */ var _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.js */ "./node_modules/date-fns/startOfISOWeek.js");




/**
 * The {@link startOfISOWeekYear} function options.
 */

/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date, options) {
  const year = (0,_getISOWeekYear_js__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(date, options);
  const fourthOfJanuary = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(options?.in || date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0,_startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _getWeekYear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeekYear.js */ "./node_modules/date-fns/getWeekYear.js");
/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");





/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = (0,_getWeekYear_js__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
  const firstWeek = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(options?.in || date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfYear.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfYear.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfYear: () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * The {@link startOfYear} function options.
 */

/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date, options) {
  const date_ = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfYear);


/***/ }),

/***/ "./node_modules/date-fns/toDate.js":
/*!*****************************************!*\
  !*** ./node_modules/date-fns/toDate.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument, context) {
  // [TODO] Get rid of `toDate` or `constructFrom`?
  return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(context || argument, argument);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ }),

/***/ "./node_modules/obscenity/dist/index.mjs":
/*!***********************************************!*\
  !*** ./node_modules/obscenity/dist/index.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataSet: () => (/* binding */ DataSet),
/* harmony export */   ParserError: () => (/* binding */ ParserError),
/* harmony export */   PhraseBuilder: () => (/* binding */ PhraseBuilder),
/* harmony export */   RegExpMatcher: () => (/* binding */ RegExpMatcher),
/* harmony export */   SyntaxKind: () => (/* binding */ SyntaxKind),
/* harmony export */   TextCensor: () => (/* binding */ TextCensor),
/* harmony export */   assignIncrementingIds: () => (/* binding */ assignIncrementingIds),
/* harmony export */   asteriskCensorStrategy: () => (/* binding */ asteriskCensorStrategy),
/* harmony export */   collapseDuplicatesTransformer: () => (/* binding */ collapseDuplicatesTransformer),
/* harmony export */   compareMatchByPositionAndId: () => (/* binding */ compareMatchByPositionAndId),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   englishDataset: () => (/* binding */ englishDataset),
/* harmony export */   englishRecommendedBlacklistMatcherTransformers: () => (/* binding */ englishRecommendedBlacklistMatcherTransformers),
/* harmony export */   englishRecommendedTransformers: () => (/* binding */ englishRecommendedTransformers),
/* harmony export */   englishRecommendedWhitelistMatcherTransformers: () => (/* binding */ englishRecommendedWhitelistMatcherTransformers),
/* harmony export */   fixedCharCensorStrategy: () => (/* binding */ fixedCharCensorStrategy),
/* harmony export */   fixedPhraseCensorStrategy: () => (/* binding */ fixedPhraseCensorStrategy),
/* harmony export */   grawlixCensorStrategy: () => (/* binding */ grawlixCensorStrategy),
/* harmony export */   keepEndCensorStrategy: () => (/* binding */ keepEndCensorStrategy),
/* harmony export */   keepStartCensorStrategy: () => (/* binding */ keepStartCensorStrategy),
/* harmony export */   parseRawPattern: () => (/* binding */ parseRawPattern),
/* harmony export */   pattern: () => (/* binding */ pattern),
/* harmony export */   randomCharFromSetCensorStrategy: () => (/* binding */ randomCharFromSetCensorStrategy),
/* harmony export */   remapCharactersTransformer: () => (/* binding */ remapCharactersTransformer),
/* harmony export */   resolveConfusablesTransformer: () => (/* binding */ resolveConfusablesTransformer),
/* harmony export */   resolveLeetSpeakTransformer: () => (/* binding */ resolveLeetSpeakTransformer),
/* harmony export */   skipNonAlphabeticTransformer: () => (/* binding */ skipNonAlphabeticTransformer),
/* harmony export */   toAsciiLowerCaseTransformer: () => (/* binding */ toAsciiLowerCaseTransformer)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/obscenity/dist/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_js__WEBPACK_IMPORTED_MODULE_0__);
const DataSet = _index_js__WEBPACK_IMPORTED_MODULE_0__.DataSet;
const ParserError = _index_js__WEBPACK_IMPORTED_MODULE_0__.ParserError;
const PhraseBuilder = _index_js__WEBPACK_IMPORTED_MODULE_0__.PhraseBuilder;
const RegExpMatcher = _index_js__WEBPACK_IMPORTED_MODULE_0__.RegExpMatcher;
const SyntaxKind = _index_js__WEBPACK_IMPORTED_MODULE_0__.SyntaxKind;
const TextCensor = _index_js__WEBPACK_IMPORTED_MODULE_0__.TextCensor;
const assignIncrementingIds = _index_js__WEBPACK_IMPORTED_MODULE_0__.assignIncrementingIds;
const asteriskCensorStrategy = _index_js__WEBPACK_IMPORTED_MODULE_0__.asteriskCensorStrategy;
const collapseDuplicatesTransformer = _index_js__WEBPACK_IMPORTED_MODULE_0__.collapseDuplicatesTransformer;
const compareMatchByPositionAndId = _index_js__WEBPACK_IMPORTED_MODULE_0__.compareMatchByPositionAndId;
const englishDataset = _index_js__WEBPACK_IMPORTED_MODULE_0__.englishDataset;
const englishRecommendedBlacklistMatcherTransformers = _index_js__WEBPACK_IMPORTED_MODULE_0__.englishRecommendedBlacklistMatcherTransformers;
const englishRecommendedTransformers = _index_js__WEBPACK_IMPORTED_MODULE_0__.englishRecommendedTransformers;
const englishRecommendedWhitelistMatcherTransformers = _index_js__WEBPACK_IMPORTED_MODULE_0__.englishRecommendedWhitelistMatcherTransformers;
const fixedCharCensorStrategy = _index_js__WEBPACK_IMPORTED_MODULE_0__.fixedCharCensorStrategy;
const fixedPhraseCensorStrategy = _index_js__WEBPACK_IMPORTED_MODULE_0__.fixedPhraseCensorStrategy;
const grawlixCensorStrategy = _index_js__WEBPACK_IMPORTED_MODULE_0__.grawlixCensorStrategy;
const keepEndCensorStrategy = _index_js__WEBPACK_IMPORTED_MODULE_0__.keepEndCensorStrategy;
const keepStartCensorStrategy = _index_js__WEBPACK_IMPORTED_MODULE_0__.keepStartCensorStrategy;
const parseRawPattern = _index_js__WEBPACK_IMPORTED_MODULE_0__.parseRawPattern;
const pattern = _index_js__WEBPACK_IMPORTED_MODULE_0__.pattern;
const randomCharFromSetCensorStrategy = _index_js__WEBPACK_IMPORTED_MODULE_0__.randomCharFromSetCensorStrategy;
const remapCharactersTransformer = _index_js__WEBPACK_IMPORTED_MODULE_0__.remapCharactersTransformer;
const resolveConfusablesTransformer = _index_js__WEBPACK_IMPORTED_MODULE_0__.resolveConfusablesTransformer;
const resolveLeetSpeakTransformer = _index_js__WEBPACK_IMPORTED_MODULE_0__.resolveLeetSpeakTransformer;
const skipNonAlphabeticTransformer = _index_js__WEBPACK_IMPORTED_MODULE_0__.skipNonAlphabeticTransformer;
const toAsciiLowerCaseTransformer = _index_js__WEBPACK_IMPORTED_MODULE_0__.toAsciiLowerCaseTransformer;


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/* harmony import */ var obscenity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! obscenity */ "./node_modules/obscenity/dist/index.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.js");
/* harmony import */ var _components_ShallowEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ShallowEqual */ "./src/components/ShallowEqual.js");
/* harmony import */ var _components_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/helper */ "./src/components/helper.js");
/* harmony import */ var _components_caesarCipher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/caesarCipher */ "./src/components/caesarCipher.js");
/**
 * WordPress dependencies
 */
//import apiFetch from '@wordpress/api-fetch';






const matcher = new obscenity__WEBPACK_IMPORTED_MODULE_1__.RegExpMatcher({
  ...obscenity__WEBPACK_IMPORTED_MODULE_1__.englishDataset.build(),
  ...obscenity__WEBPACK_IMPORTED_MODULE_1__.englishRecommendedTransformers
});

/* only show console messages on localhost */
/*if (window.location.hostname !== 'escapeout-wp') {
	console.log = (function () {
		var console_log = console.log;
		var timeStart = new Date().getTime();

		return function () {
			var delta = new Date().getTime() - timeStart;
			var args = [];
			args.push((delta / 1000).toFixed(2) + ':');
			for (var i = 0; i < arguments.length; i++) {
				args.push(arguments[i]);
			}
			//console_log.apply(console, args);
		};
	})();
}*/
/* Basic + space + base64 encode application username:password for user who created? */
const getPublicDataNOTWORKING = async ({
  postID,
  nonce
}) => {
  /* note - can only update fields that you created, probably because of authorization... */
  //console.log("nonce: " + my_custom_vars.nonce);
  const url = state.siteURL + "/wp-json/escapeout/v1/eo-game/" + postID;
  apiFetch({
    path: url,
    method: "GET"
  }).then(data => {
    console.log(data);
  }).catch(error => {
    console.log('Error: ' + error);
  });
};
const loadPublicMap = async src => {
  let mapContainer = document.getElementById("publicMapContainer");
  const iframes = mapContainer.getElementsByTagName('iframe');
  if (iframes.length === 0) {
    let iframePublic = document.createElement("iframe");
    iframePublic.src = src;
    iframePublic.width = "100%";
    iframePublic.height = "480";
    iframePublic.style.border = "0";
    iframePublic.title = "Public Map";
    mapContainer.appendChild(iframePublic);
  }
};
const loadPrivateMap = async src => {
  console.log("src: " + src);
  let mapContainer2 = document.getElementById("privateMapContainer");
  console.log("mapContainer2: " + JSON.stringify(mapContainer2));
  let iframePrivate = document.createElement("iframe");
  iframePrivate.src = src;
  iframePrivate.width = "640";
  iframePrivate.height = "480";
  iframePrivate.style.border = "0";
  iframePrivate.title = "Zone Map";
  mapContainer2.appendChild(iframePrivate);
};
const getPublicData = async ({
  postID,
  nonce
}) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Headers", "Authorization, X-WP-Nonce, Content-Disposition, Content-MD5, Content-Type");
  myHeaders.append("Access-Control-Expose-Headers", "X-WP-Total, X-WP-TotalPages, Link");
  //myHeaders.append( "Authorization", "Bearer " + btoa( 'lara:4lRX C2u5 igwa ckGX j2Dv jWLr' ));
  myHeaders.append("Vary", "Origin");
  myHeaders.append('X-WP-Nonce', nonce);
  /* get game data */
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    credentials: "same-origin"
  };
  //const url = state.siteURL + "/wp-json/escapeout/v1/eo-game/" + postID + "/?_wpnonce=" + nonce;
  const url = state.siteURL + "/wp-json/escapeout/v1/eo-game/" + postID;
  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      console.error('url Request failed with status ' + response.status);
    }
    const data = await response.json();
    /* data is an array */
    //console.log("data: " + data.post_content);
    //console.log("data.length: " + data.length);
    if (data.hasOwnProperty("post_content")) {
      console.log("data: " + data.post_content);
      const firstIndex = data.post_content.indexOf("{");
      const lastIndex = data.post_content.indexOf("-->");
      let postAttributes = data.post_content.slice(firstIndex, lastIndex).trim();
      let postAttributesObj = JSON.parse(postAttributes);
      let quesArray = [];
      let clueTextArray = [];
      let hintTextArray = [];
      let paIndex = 0;
      let caIndex = 0;
      let haIndex = 0;
      console.log("firstIndex: " + firstIndex);
      console.log("lastIndex: " + lastIndex);
      console.log("postAttributes: " + postAttributes);
      console.log("postAttributes (question): " + postAttributesObj.playZones[0].puzzleArray[0].question);
      /* get attributes from post_content */
      for (let i = 0; i < postAttributesObj.playZones.length; i++) {
        if (postAttributesObj.playZones[i].disabled === "No") {
          if (postAttributesObj.playZones[i].hasOwnProperty("puzzleArray")) {
            for (let j = 0; j < postAttributesObj.playZones[i].puzzleArray.length; j++) {
              if (postAttributesObj.playZones[i].puzzleArray[j].disabled === "No") {
                let key = 'input' + paIndex;
                let value = postAttributesObj.playZones[i].puzzleArray[j].question;
                let newObject = {};
                newObject[key] = value;
                quesArray.push(newObject);
                paIndex++;
              }
            }
          }
          if (postAttributesObj.playZones[i].hasOwnProperty("clueArray")) {
            for (let j = 0; j < postAttributesObj.playZones[i].clueArray.length; j++) {
              if (postAttributesObj.playZones[i].clueArray[j].disabled === "No") {
                let key = 'clue' + caIndex;
                let value = postAttributesObj.playZones[i].clueArray[j].text;
                let newObject = {};
                newObject[key] = value;
                clueTextArray.push(newObject);
                caIndex++;
              }
            }
          }
          if (postAttributesObj.playZones[i].hasOwnProperty("hintArray")) {
            for (let j = 0; j < postAttributesObj.playZones[i].hintArray.length; j++) {
              if (postAttributesObj.playZones[i].hintArray[j].disabled === "No") {
                let key = 'hint' + haIndex;
                let value = postAttributesObj.playZones[i].hintArray[j].text;
                let newObject = {};
                newObject[key] = value;
                hintTextArray.push(newObject);
                haIndex++;
              }
            }
          }
        }
      }
      console.log("JSON.stringify(quesArray): " + JSON.stringify(quesArray));
      state.puzzleQuestionArray = quesArray;
      localStorage.setItem('quesArray', JSON.stringify(quesArray));
      console.log("JSON.stringify(clueTextArray): " + JSON.stringify(clueTextArray));
      state.clueTextArray = clueTextArray;
      localStorage.setItem('clueTextArray', JSON.stringify(clueTextArray));
      console.log("JSON.stringify(hintTextArray): " + JSON.stringify(hintTextArray));
      state.hintTextArray = hintTextArray;
      localStorage.setItem('hintTextArray', JSON.stringify(hintTextArray));
    }
  } catch (error) {
    console.error('Error (get post_content):', error.message);
  }
};
const saveScore = async (gameScoreID, nonce) => {
  console.log("saveScore: " + gameScoreID);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Headers", "Authorization, X-WP-Nonce, Content-Disposition, Content-MD5, Content-Type");
  myHeaders.append("Access-Control-Expose-Headers", "X-WP-Total, X-WP-TotalPages, Link");
  //myHeaders.append( "Authorization", "Bearer " + btoa( 'lara:4lRX C2u5 igwa ckGX j2Dv jWLr' ));
  myHeaders.append("Vary", "Origin");
  myHeaders.append('X-WP-Nonce', nonce);

  /* generate all variables - timeEnd, totalTime, firstTime, completed */
  // Do your operations to calculate time
  let endDate = new Date().getTime();
  let minutes = (endDate - state.timeStart) / 60000;
  let totalTime = Number(minutes + state.hintUsedArray.length * 5).toFixed(2);
  console.log("totalTime: " + totalTime);
  state.gameScore = totalTime;
  state.showGameScore = true;
  const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
  if (context.userMustBeLoggedIn) {
    /* hintTime is a state variable */
    const raw = JSON.stringify({
      "timeEnd": endDate,
      "totalTime": totalTime,
      "hintTime": state.hintUsedArray.length * 5,
      "completed": 'yes'
    });
    console.log("raw (put-saveScore)" + raw);
    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      credentials: "same-origin",
      body: raw,
      redirect: "follow"
    };
    const url = state.siteURL + "/wp-json/escapeout/v1/game-score/" + gameScoreID;
    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        console.error('Request failed with status ' + response.status);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  /* apiFetch doesn't seem to work
  const success = apiFetch( {
  	path: '/game-plugin-app-api/v1/game-user',
  	method: 'POST',
  	data: {
  		"name": "John Doe2",
  		"email": "jon@gmail.com2"
  	},
  } ).then( ( res ) => {
  	console.log( res );
  } );*/
};
const saveGameComments = async (gameScoreID, inputPublic, inputPrivate, rating, nonce) => {
  console.log("saveGameComments: " + gameScoreID);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Headers", "Authorization, X-WP-Nonce, Content-Disposition, Content-MD5, Content-Type");
  myHeaders.append("Access-Control-Expose-Headers", "X-WP-Total, X-WP-TotalPages, Link");
  //myHeaders.append( "Authorization", "Bearer " + btoa( 'lara:4lRX C2u5 igwa ckGX j2Dv jWLr' ));
  myHeaders.append("Vary", "Origin");
  myHeaders.append('X-WP-Nonce', nonce);
  const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
  if (context.userMustBeLoggedIn) {
    /* hintTime is a state variable */
    const raw = JSON.stringify({
      "gameCommentPublic": inputPublic,
      "gameCommentPrivate": inputPrivate,
      "gameRating": rating
    });
    console.log("raw (put-gameComments)" + raw);
    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      credentials: "same-origin",
      body: raw,
      redirect: "follow"
    };
    const url = state.siteURL + "/wp-json/escapeout/v1/game-score/" + gameScoreID;
    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        console.error('Request failed with status (gameComments)' + response.status);
      }
      state.showGameScore = false;
      /* reset all states */
      window.location.reload();
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Error (save game comments):', error.message);
    }
  }

  /* apiFetch doesn't seem to work
  const success = apiFetch( {
  	path: '/game-plugin-app-api/v1/game-user',
  	method: 'POST',
  	data: {
  		"name": "John Doe2",
  		"email": "jon@gmail.com2"
  	},
  } ).then( ( res ) => {
  	console.log( res );
  } );*/
};
const getScoreByID = async ({
  postID,
  userID,
  realTimeStart
}) => {};
const createScore = async ({
  postID,
  userID,
  gameID,
  gameName,
  userEmail,
  designerEmail,
  designerName,
  timeStart,
  formattedDate,
  teamName,
  firstTime,
  nonce
}) => {
  /* note - can only update fields that you created, probably because of authorization... */
  console.log("nonce: " + nonce);
  const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Headers", "Authorization, X-WP-Nonce, Content-Disposition, Content-MD5, Content-Type");
  myHeaders.append("Access-Control-Expose-Headers", "X-WP-Total, X-WP-TotalPages, Link");
  //myHeaders.append( "Authorization", "Bearer " + btoa( 'lara:4lRX C2u5 igwa ckGX j2Dv jWLr' ));
  myHeaders.append("Vary", "Origin");
  myHeaders.append('X-WP-Nonce', nonce);
  /* get game data */
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    credentials: "same-origin"
  };
  const url = state.siteURL + "/wp-json/escapeout/v1/eo-game/" + postID;
  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      console.error('url Request failed with status ' + response.status);
    }
    const data = await response.json();
    /* data is an array */
    //console.log("data: " + data.post_content);
    //console.log("data.length: " + data.length);
    if (data.hasOwnProperty("post_content")) {
      console.log("data: " + data.post_content);
      const firstIndex = data.post_content.indexOf("{");
      const lastIndex = data.post_content.indexOf("-->");
      let postAttributes = data.post_content.slice(firstIndex, lastIndex).trim();
      let postAttributesObj = JSON.parse(postAttributes);
      let quesArray = [];
      let clueTextArray = [];
      let hintTextArray = [];
      let paIndex = 0;
      let caIndex = 0;
      let haIndex = 0;
      console.log("firstIndex: " + firstIndex);
      console.log("lastIndex: " + lastIndex);
      console.log("postAttributes: " + postAttributes);
      console.log("postAttributes (question): " + postAttributesObj.playZones[0].puzzleArray[0].question);
      /* get attributes from post_content */
      for (let i = 0; i < postAttributesObj.playZones.length; i++) {
        if (postAttributesObj.playZones[i].disabled === "No") {
          if (postAttributesObj.playZones[i].hasOwnProperty("puzzleArray")) {
            for (let j = 0; j < postAttributesObj.playZones[i].puzzleArray.length; j++) {
              if (postAttributesObj.playZones[i].puzzleArray[j].disabled === "No") {
                let key = 'input' + paIndex;
                let value = postAttributesObj.playZones[i].puzzleArray[j].question;
                let newObject = {};
                newObject[key] = value;
                quesArray.push(newObject);
                paIndex++;
              }
            }
          }
          if (postAttributesObj.playZones[i].hasOwnProperty("clueArray")) {
            for (let j = 0; j < postAttributesObj.playZones[i].clueArray.length; j++) {
              if (postAttributesObj.playZones[i].clueArray[j].disabled === "No") {
                let key = 'clue' + caIndex;
                let value = postAttributesObj.playZones[i].clueArray[j].text;
                let newObject = {};
                newObject[key] = value;
                clueTextArray.push(newObject);
                caIndex++;
              }
            }
          }
          if (postAttributesObj.playZones[i].hasOwnProperty("hintArray")) {
            for (let j = 0; j < postAttributesObj.playZones[i].hintArray.length; j++) {
              if (postAttributesObj.playZones[i].hintArray[j].disabled === "No") {
                let key = 'hint' + haIndex;
                let value = postAttributesObj.playZones[i].hintArray[j].text;
                let newObject = {};
                newObject[key] = value;
                hintTextArray.push(newObject);
                haIndex++;
              }
            }
          }
        }
      }
      console.log("JSON.stringify(quesArray): " + JSON.stringify(quesArray));
      state.puzzleQuestionArray = quesArray;
      localStorage.setItem('quesArray', JSON.stringify(quesArray));
      console.log("JSON.stringify(clueTextArray): " + JSON.stringify(clueTextArray));
      state.clueTextArray = clueTextArray;
      localStorage.setItem('clueTextArray', JSON.stringify(clueTextArray));
      console.log("JSON.stringify(hintTextArray): " + JSON.stringify(hintTextArray));
      state.hintTextArray = hintTextArray;
      localStorage.setItem('hintTextArray', JSON.stringify(hintTextArray));
    }
  } catch (error) {
    console.error('Error (get post_content):', error.message);
  }
  /* check if first time */
  /* don't need to check first time because am doing in stats */
  /* get game data */
  /* create score */
  const raw = JSON.stringify({
    "postID": postID,
    "userID": userID,
    "gameID": gameID,
    "gameName": gameName,
    "userEmail": userEmail,
    "designerEmail": designerEmail,
    "designerName": designerName,
    "timeStart": timeStart,
    "formattedDate": formattedDate,
    "teamName": teamName,
    "firstTime": firstTime
  });
  const requestOptions2 = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    credentials: "include"
  };
  const url2 = state.siteURL + "/wp-json/escapeout/v1/game-score/";
  try {
    const response = await fetch(url2, requestOptions2);
    if (!response.ok) {
      console.error('url2 Request failed with status ' + response.status);
      /* stop here */
    }
    /* get ID */
    const requestOptions3 = {
      method: "GET",
      headers: myHeaders,
      credentials: "include"
    };
    const url3 = state.siteURL + "/wp-json/escapeout/v1/game-score/?userEmail=" + userEmail + "&gameID=" + gameID + "&timeStart=" + timeStart;
    try {
      const response = await fetch(url3, requestOptions3);
      if (!response.ok) {
        console.error('url3 Request failed with status ' + response.status);
      }
      const data2 = await response.json();
      /*data is an array */
      console.log("data2: " + JSON.stringify(data2));
      if (data2.length > 0) {
        state.gameScoreID = data2[0].id;
        localStorage.setItem("gameScoreID", data2[0].id);
        localStorage.setItem("gameName", gameName);
        localStorage.setItem("timeStart", timeStart);
        localStorage.setItem("formattedDate", formattedDate);
        localStorage.setItem("gameID", gameID);
        context.gameStart = true;
      }
    } catch (error) {
      console.error('Error3 (get gameScoreID):', error.message);
    }
  } catch (error) {
    console.error('Error2 (post create score):', error.message);
  }

  /* apiFetch doesn't seem to work
  const success = apiFetch( {
  	path: '/game-plugin-app-api/v1/game-user',
  	method: 'POST',
  	data: {
  		"name": "John Doe2",
  		"email": "jon@gmail.com2"
  	},
  } ).then( ( res ) => {
  	console.log( res );
  } );*/
};
const {
  state
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)('escapeout-game', {
  state: {
    get themeText() {
      return state.isDark ? state.darkText : state.lightText;
    }
  },
  actions: {
    hintWarningOpen() {
      state.hintWarningVisible = true;
    },
    hintWarningClose() {
      state.hintWarningVisible = false;
    },
    saveTextArea: () => {
      const input = document.getElementById("textArea").value;
      console.log("textAreaInput" + input);
    },
    setHintDisplayOn: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      if (state.hintUsedArray.includes(context.hintID)) {
        state.hintDisplayOn = context.hintID;
        state.hintText = state.hintTextArray[context.hintIndex][context.hintID];
      } else {
        state.hintWarningVisible = true;
      }
    },
    openHint: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.hintUsed = true;
      state.hintWarningVisible = false;
      state.hintDisplayOn = context.hintID;
      state.hintText = state.hintTextArray[context.hintIndex][context.hintID];
      console.log("open hint: " + state.hintText);
      /* add to used hint array */
      state.hintUsedArray.push(context.hintID);
      localStorage.setItem("hintUsedArray", JSON.stringify(state.hintUsedArray));
    },
    quitWarningClose: () => {
      state.hintID = '';
      state.hintWarningVisible = false;
    },
    setHintDisplayOff: () => {
      state.hintDisplayOn = "";
    },
    setClueDisplayOff: () => {
      state.clueDisplayOn = "";
    },
    setClueDisplayToggle: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      console.log("state.clueTextArray: " + JSON.stringify(state.clueTextArray));
      console.log("state.clueTextArray[0]['clue0']: " + state.clueTextArray[context.clueIndex][context.clueID]);
      state.clueText = state.clueTextArray[context.clueIndex][context.clueID];
      //context.clueDisplayOn = ! context.clueDisplayOn;
      /* just show one at a time to hide clue text */
      state.clueDisplayOn = context.clueID;
    },
    checkClueDisplayOn: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      if (state.clueDisplayOn = context.clueID) {
        return true;
      } else {
        return false;
      }
    },
    setZoneVisible: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      state.zoneID = context.id;
      console.log("context.description:" + context.description);
      if (context.description == "") {
        state.zoneDescription = " ";
      } else {
        state.zoneDescription = context.description;
      }
      if (context.name == "") {
        state.zoneName = " ";
      } else {
        state.zoneName = context.name;
      }
    },
    setPuzzleModalVisible: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.modalOpen = true;
      state.puzzleQuestion = state.puzzleQuestionArray[context.puzzleIndex][context.puzzleID];
      console.log("context.modalOpen: " + context.modalOpen);
    },
    setPuzzleModalHidden: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      console.log("close puzzle modal");
      context.modalOpen = false;
      console.log("context.modalOpen: " + context.modalOpen);
    },
    closeHelp: () => {
      state.zoneHelpVisible = false;
      state.puzzleHelpVisible = false;
      state.clueHelpVisible = false;
      state.hintHelpVisible = false;
      state.teamHelpVisible = false;
      state.helpVisible = false;
    },
    setZoneHelpVisible: () => {
      state.zoneHelpVisible = true;
      state.helpVisible = true;
    },
    setPuzzleHelpVisible: () => {
      state.puzzleHelpVisible = true;
      state.helpVisible = true;
    },
    setClueHelpVisible: () => {
      state.clueHelpVisible = true;
      state.helpVisible = true;
    },
    setHintHelpVisible: () => {
      state.hintHelpVisible = true;
      state.helpVisible = true;
    },
    setTeamHelpVisible: () => {
      state.teamHelpVisible = true;
      state.helpVisible = true;
    },
    togglePublicMap() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      loadPublicMap(context.map1);
      /*if (iframePublic.src === "") {
      	iframePublic.src = context.map1;
      }*/
      state.modalPublicMapOpen = !state.modalPublicMapOpen;
    },
    togglePrivateMap() {
      console.log("togglePrivateMap");
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      loadPrivateMap(context.map2);
      /*if (iframePublic.src === "") {
      	iframePublic.src = context.map1;
      }*/
      state.modalPrivateMapOpen = !state.modalPrivateMapOpen;
    },
    togglePublicImage() {
      state.modalPublicImageOpen = !state.modalPublicImageOpen;
    },
    toggleStats() {
      console.log("stats");
      state.modalStatsOpen = !state.modalStatsOpen;
    },
    toggleLeaderBoard() {
      state.modalLeaderBoardOpen = !state.modalLeaderBoardOpen;
    },
    saveGameComments: () => {
      const inputPublic = document.getElementById("gameCommentPublic").value;
      const inputPrivate = document.getElementById("gameCommentPrivate").value;
      saveGameComments(state.gameScoreID, inputPublic, inputPrivate, state.rating, state.nonce);
    },
    guessAttempt: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const input = document.getElementById(context.puzzleID).value;
      context.guess = input.trimEnd();
      /* now encrypt */
      console.log("guess: " + context.guess);
      console.log("shift: " + context.shift);
      let guessENC = (0,_components_caesarCipher__WEBPACK_IMPORTED_MODULE_4__.caesarCipher)(context.guess, Number(context.shift));
      /* loop thru answers */
      let val = false;
      for (let i = 0; i < context.sols.length; i++) {
        /* encrypt guess */
        val = (0,_components_ShallowEqual__WEBPACK_IMPORTED_MODULE_2__.shallowEqual)(guessENC, context.sols[i]);
        if (val === true) {
          break;
        }
      }
      console.log("val: " + val);
      if (val) {
        state.solvedArray.push(context.puzzleID);
        localStorage.setItem("solvedArray", JSON.stringify(state.solvedArray));
        console.log("state: " + JSON.stringify(state));
        context.solved = true;
        context.timeEnd = Date();
        setTimeout(() => {
          context.modalOpen = false;
        }, 1600);
        /* check if finished */
        if (state.solvedArray.length === state.puzzleQuestionArray.length) {
          state.alertVisible = true;
          state.alertText = "Winner!";
          /* send to database */

          saveScore(state.gameScoreID, state.nonce);
          setTimeout(() => {
            (0,_components_helper__WEBPACK_IMPORTED_MODULE_3__.removeLocalStorage)();
            context.gameStart = false;
            console.log("finished game");
          }, 1600);
        }
      } else {
        context.showSorry = true;
        setTimeout(() => {
          context.showSorry = false;
        }, 1600);
      }
    },
    toggleOpen() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.isOpen = !context.isOpen;
    },
    quitAlertOpen() {
      state.quitVisible = true;
    },
    quitAlertClose() {
      state.quitVisible = false;
    },
    quitAlertStartClose() {
      state.alertStartVisible = false;
    },
    quit() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      (0,_components_helper__WEBPACK_IMPORTED_MODULE_3__.removeLocalStorage)();
      window.location.reload();
      window.scrollTo(0, 0);
    },
    showWaiverToggle() {
      state.showWaiver = !state.showWaiver;
    },
    signWaiver() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.waiverSigned = true;
    },
    gameStart() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      if (context.userMustBeLoggedIn) {
        context.teamName = document.getElementById("team-name").value;
      } else {
        context.teamName = document.getElementById("team-name2").value;
      }
      console.log("context.teamName: " + context.teamName);
      console.log("context.gameName: " + context.gameName);
      console.log("context.gameID: " + context.gameID);
      const gameIDLocal = localStorage.getItem("gameID");
      const gameNameLocal = localStorage.getItem("gameName");
      console.log("localStorage.getItem-gameID: " + gameIDLocal);
      // check if playing another game
      if (localStorage.getItem("timeStart") && gameIDLocal !== context.gameID) {
        /* let them know they are currently playing a different game */
        console.log("setting alert start?");
        state.alertStartVisible = true;
        state.anotherGame = gameNameLocal;
        if (context.gameStart === true) {
          console.log("gameStart: true");
          state.alertText = "You are playing: " + gameNameLocal + ". gameStart is true";
        } else {
          console.log("gameStart: false");
          state.alertText = "You are playing: " + gameNameLocal + ". gameStart is true";
        }
      } else {
        // check waiver
        if (context.waiverSigned === true) {
          //check teamName
          if (context.teamName !== '') {
            console.log("context.teamName (again): " + context.teamName);
            /* check for obscenities */
            if (matcher.hasMatch(context.teamName)) {
              state.errorMessage = "The Team Name contains profanities. Please choose another.";
              context.teamName = "";
            } else {
              state.errorMessage = "";
              /* need teamName in localstorage? */
              //localStorage.setItem("teamName", context.teamName);
              /* this is timeStart */
              const date = new Date().getTime();
              /* ... */
              /* check for other games? */
              state.timeStart = date;
              state.formattedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(date, "MM/dd/yy h:mma");
              /* do this after score is created */
              /*localStorage.setItem("timeStart", date);*/
              /* context.gameStart = true;*/
              state.gameScore = '';
              state.showGameScore = false;
              state.showWaiver = false;
              if (context.userMustBeLoggedIn) {
                createScore({
                  postID: context.postID,
                  userID: context.userID,
                  gameID: context.gameID,
                  gameName: context.gameName,
                  userEmail: context.userEmail,
                  designerEmail: context.designerEmail,
                  designerName: context.designerName,
                  timeStart: date,
                  formattedDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(date, "MM/dd/yy h:mma"),
                  teamName: context.teamName,
                  firstTime: context.firstTime,
                  nonce: state.nonce
                });
              } else {
                getPublicData({
                  postID: context.postID,
                  nonce: state.nonce
                });
                localStorage.setItem("gameName", context.gameName);
                localStorage.setItem("timeStart", date);
                localStorage.setItem("gameID", context.gameID);
                context.gameStart = true;
              }
              /* get gameScoreID */
            }
          } else {
            //set errorMessage
            state.errorMessage = "Please choose a Team Name";
          }
        } else {
          state.errorMessage = "You Need to Sign Waiver";
        }
      }
    },
    toggleTheme() {
      state.isDark = !state.isDark;
    },
    closeGameScore() {
      state.showGameScore = false;
      /* reset all states */
      window.location.reload();
      window.scrollTo(0, 0);
    },
    setRating1() {
      state.rating = 1;
    },
    setRating2() {
      state.rating = 2;
    },
    setRating3() {
      state.rating = 3;
    },
    setRating4() {
      state.rating = 4;
    },
    setRating5() {
      state.rating = 5;
    }
  },
  callbacks: {
    hintTime: () => {
      const hintTime = state.hintUsedArray.length * 5;
      return hintTime;
    },
    checkSolved: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      if (state.solvedArray.includes(context.puzzleID)) {
        return true;
      }
    },
    clueDisplayOn: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      if (context.clueID === state.clueDisplayOn) {
        return true;
      } else {
        return false;
      }
    },
    hintDisplayOn: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      if (context.hintID === state.hintDisplayOn) {
        return true;
      } else {
        return false;
      }
    },
    checkPublicMap: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      if (context.map1 !== '') {
        console.log("don't hide map button");
        return false;
      } else {
        console.log("hide map button");
        return true;
      }
    },
    checkPrivateMap: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      if (context.map2 !== '') {
        console.log("don't hide map button");
        return false;
      } else {
        console.log("hide map button");
        return true;
      }
    },
    hideItemByZone: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      console.log("context.zoneID: " + context.zoneID);
      console.log("context.firstZoneID: " + context.firstZoneID);
      console.log("state.zoneID: " + state.zoneID);
      if (context.zoneID == state.zoneID || state.zoneID === '' && context.zoneID === context.firstZoneID) {
        console.log("don't hide zone");
        return false;
      } else {
        console.log("hide zone");
        return true;
      }
    },
    hideItemByZoneID: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      //console.log("context.zoneID: " + context.zoneID);
      console.log("context.id: " + context.id);
      console.log("context.firstZoneID: " + context.firstZoneID);
      console.log("state.zoneID: " + state.zoneID);
      if (context.id == state.zoneID || state.zoneID === '' && context.id === context.firstZoneID) {
        console.log("don't hide zone");
        return false;
      } else {
        console.log("hide zone");
        return true;
      }
    },
    setAlertText: () => {
      state.alertVisible = true;
      setTimeout(() => {
        state.alertVisible = false;
      }, 3000);
    },
    zoneBorder: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      if (state.zoneID == context.id || state.zoneID === '' && context.firstZoneID == context.id) return true;
    },
    zoneDescription: () => {
      if (state.zoneDescription !== '') {
        return true;
      }
    },
    saveNotes: () => {
      const textareaElement = document.getElementById("textArea");
      console.log("textArea value: " + textareaElement.value);
    },
    checkGameStart: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const gameIDLocal = localStorage.getItem('gameID');
      console.log("gameNameLocal: " + gameIDLocal);
      console.log("context.gameID: " + context.gameID);
      if (localStorage.getItem("timeStart")) {
        /* check game-name */
        if (gameIDLocal === context.gameID) {
          /* reset states */
          state.gameScoreID = localStorage.getItem('gameScoreID');
          state.timeStart = localStorage.getItem('timeStart');
          state.formattedDate = localStorage.getItem('formattedDate');
          if (localStorage.getItem("quesArray") != null) {
            state.puzzleQuestionArray = JSON.parse(localStorage.getItem("quesArray"));
          }
          if (localStorage.getItem("clueTextArray") != null) {
            state.clueTextArray = JSON.parse(localStorage.getItem("clueTextArray"));
          }
          if (localStorage.getItem("hintTextArray") != null) {
            state.hintTextArray = JSON.parse(localStorage.getItem("hintTextArray"));
          }
          if (localStorage.getItem("solvedArray") != null) {
            state.solvedArray = JSON.parse(localStorage.getItem("solvedArray"));
          }
          if (localStorage.getItem("hintUsedArray") != null) {
            state.hintUsedArray = JSON.parse(localStorage.getItem("hintUsedArray"));
          }
          //alert('resuming game');
          state.alertStartVisible = false;
          state.alertVisible = true;
          state.alertText = "resuming game";
          setTimeout(() => {
            state.alertVisible = false;
          }, 3000);
          if (context.gameStart === true) {
            console.log("gameStart: true");
          } else {
            console.log("gameStart: false");
          }
          context.gameStart = true;
        }
      }
    },
    logIsOpen: () => {
      const {
        isOpen
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      console.log(`Is open: ${isOpen}`);
    }
  }
});
})();


//# sourceMappingURL=view.js.map