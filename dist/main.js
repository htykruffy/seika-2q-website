/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/animejs/lib/anime.esm.js":
/*!***********************************************!*\
  !*** ./node_modules/animejs/lib/anime.esm.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animatable: () => (/* binding */ Animatable),
/* harmony export */   Draggable: () => (/* binding */ Draggable),
/* harmony export */   JSAnimation: () => (/* binding */ JSAnimation),
/* harmony export */   Scope: () => (/* binding */ Scope),
/* harmony export */   ScrollObserver: () => (/* binding */ ScrollObserver),
/* harmony export */   Spring: () => (/* binding */ Spring),
/* harmony export */   Timeline: () => (/* binding */ Timeline),
/* harmony export */   Timer: () => (/* binding */ Timer),
/* harmony export */   WAAPIAnimation: () => (/* binding */ WAAPIAnimation),
/* harmony export */   animate: () => (/* binding */ animate),
/* harmony export */   createAnimatable: () => (/* binding */ createAnimatable),
/* harmony export */   createDraggable: () => (/* binding */ createDraggable),
/* harmony export */   createScope: () => (/* binding */ createScope),
/* harmony export */   createSpring: () => (/* binding */ createSpring),
/* harmony export */   createTimeline: () => (/* binding */ createTimeline),
/* harmony export */   createTimer: () => (/* binding */ createTimer),
/* harmony export */   eases: () => (/* binding */ eases),
/* harmony export */   engine: () => (/* binding */ engine),
/* harmony export */   onScroll: () => (/* binding */ onScroll),
/* harmony export */   scrollContainers: () => (/* binding */ scrollContainers),
/* harmony export */   stagger: () => (/* binding */ stagger),
/* harmony export */   svg: () => (/* binding */ svg),
/* harmony export */   utils: () => (/* binding */ utils),
/* harmony export */   waapi: () => (/* binding */ waapi)
/* harmony export */ });
/**
 * anime.js - ESM
 * @version v4.0.2
 * @author Julian Garnier
 * @license MIT
 * @copyright (c) 2025 Julian Garnier
 * @see https://animejs.com
 */

/**
 * @typedef {Object} DefaultsParams
 * @property {Number|String} [id]
 * @property {PercentageKeyframes|DurationKeyframes} [keyframes]
 * @property {EasingParam} [playbackEase]
 * @property {Number} [playbackRate]
 * @property {Number} [frameRate]
 * @property {Number|Boolean} [loop]
 * @property {Boolean} [reversed]
 * @property {Boolean} [alternate]
 * @property {Boolean|ScrollObserver} [autoplay]
 * @property {Number|FunctionValue} [duration]
 * @property {Number|FunctionValue} [delay]
 * @property {Number} [loopDelay]
 * @property {EasingParam} [ease]
 * @property {'none'|'replace'|'blend'|compositionTypes} [composition]
 * @property {(v: any) => any} [modifier]
 * @property {(tickable: Tickable) => void} [onBegin]
 * @property {(tickable: Tickable) => void} [onBeforeUpdate]
 * @property {(tickable: Tickable) => void} [onUpdate]
 * @property {(tickable: Tickable) => void} [onLoop]
 * @property {(tickable: Tickable) => void} [onPause]
 * @property {(tickable: Tickable) => void} [onComplete]
 * @property {(renderable: Renderable) => void} [onRender]
 */

/** @typedef {JSAnimation|Timeline} Renderable */
/** @typedef {Timer|Renderable} Tickable */
/** @typedef {Timer&JSAnimation&Timeline} CallbackArgument */
/** @typedef {Animatable|Tickable|Draggable|ScrollObserver|Scope} Revertible */

/**
 * @typedef {Object} DraggableAxisParam
 * @property {String} [mapTo]
 * @property {TweenModifier} [modifier]
 * @property {TweenComposition} [composition]
 * @property {Number|Array<Number>|((draggable: Draggable) => Number|Array<Number>)} [snap]
 */

/**
 * @typedef {Object} DraggableCursorParams
 * @property {String} [onHover]
 * @property {String} [onGrab]
 */

/**
 * @typedef {Object} DraggableParams
 * @property {DOMTargetSelector} [trigger]
 * @property {DOMTargetSelector|Array<Number>|((draggable: Draggable) => DOMTargetSelector|Array<Number>)} [container]
 * @property {Boolean|DraggableAxisParam} [x]
 * @property {Boolean|DraggableAxisParam} [y]
 * @property {TweenModifier} [modifier]
 * @property {Number|Array<Number>|((draggable: Draggable) => Number|Array<Number>)} [snap]
 * @property {Number|Array<Number>|((draggable: Draggable) => Number|Array<Number>)} [containerPadding]
 * @property {Number|((draggable: Draggable) => Number)} [containerFriction]
 * @property {Number|((draggable: Draggable) => Number)} [releaseContainerFriction]
 * @property {Number|((draggable: Draggable) => Number)} [dragSpeed]
 * @property {Number|((draggable: Draggable) => Number)} [scrollSpeed]
 * @property {Number|((draggable: Draggable) => Number)} [scrollThreshold]
 * @property {Number|((draggable: Draggable) => Number)} [minVelocity]
 * @property {Number|((draggable: Draggable) => Number)} [maxVelocity]
 * @property {Number|((draggable: Draggable) => Number)} [velocityMultiplier]
 * @property {Number} [releaseMass]
 * @property {Number} [releaseStiffness]
 * @property {Number} [releaseDamping]
 * @property {Boolean} [releaseDamping]
 * @property {EasingParam} [releaseEase]
 * @property {Boolean|DraggableCursorParams|((draggable: Draggable) => Boolean|DraggableCursorParams)} [cursor]
 * @property {Callback<Draggable>} [onGrab]
 * @property {Callback<Draggable>} [onDrag]
 * @property {Callback<Draggable>} [onRelease]
 * @property {Callback<Draggable>} [onUpdate]
 * @property {Callback<Draggable>} [onSettle]
 * @property {Callback<Draggable>} [onSnap]
 * @property {Callback<Draggable>} [onResize]
 * @property {Callback<Draggable>} [onAfterResize]
 */

/**
 * @typedef {SVGGeometryElement & {
 *   setAttribute(name: 'draw', value: `${number} ${number}`): void;
 *   draw: `${number} ${number}`;
 * }} DrawableSVGGeometry
 */

/**
 * @callback EasingFunction
 * @param {Number} time
 * @return {Number}
 */

/**
 * @typedef {('linear'|'linear(x1, x2 25%, x3)'|'in'|'out'|'inOut'|'inQuad'|'outQuad'|'inOutQuad'|'inCubic'|'outCubic'|'inOutCubic'|'inQuart'|'outQuart'|'inOutQuart'|'inQuint'|'outQuint'|'inOutQuint'|'inSine'|'outSine'|'inOutSine'|'inCirc'|'outCirc'|'inOutCirc'|'inExpo'|'outExpo'|'inOutExpo'|'inBounce'|'outBounce'|'inOutBounce'|'inBack'|'outBack'|'inOutBack'|'inElastic'|'outElastic'|'inOutElastic'|'irregular'|'cubicBezier'|'steps'|'in(p = 1.675)'|'out(p = 1.675)'|'inOut(p = 1.675)'|'inBack(overshoot = 1.70158)'|'outBack(overshoot = 1.70158)'|'inOutBack(overshoot = 1.70158)'|'inElastic(amplitude = 1, period = .3)'|'outElastic(amplitude = 1, period = .3)'|'inOutElastic(amplitude = 1, period = .3)'|'irregular(length = 10, randomness = 1)'|'cubicBezier(x1, y1, x2, y2)'|'steps(steps = 10)')} EaseStringParamNames
 */

// A hack to get both ease names suggestions AND allow any strings
// https://github.com/microsoft/TypeScript/issues/29729#issuecomment-460346421
/** @typedef {(String & {})|EaseStringParamNames|EasingFunction|Spring} EasingParam */

/** @typedef {HTMLElement|SVGElement} DOMTarget */
/** @typedef {Record<String, any>} JSTarget */
/** @typedef {DOMTarget|JSTarget} Target */
/** @typedef {Target|NodeList|String} TargetSelector */
/** @typedef {DOMTarget|NodeList|String} DOMTargetSelector */
/** @typedef {Array.<DOMTargetSelector>|DOMTargetSelector} DOMTargetsParam */
/** @typedef {Array.<DOMTarget>} DOMTargetsArray */
/** @typedef {Array.<JSTarget>|JSTarget} JSTargetsParam */
/** @typedef {Array.<JSTarget>} JSTargetsArray */
/** @typedef {Array.<TargetSelector>|TargetSelector} TargetsParam */
/** @typedef {Array.<Target>} TargetsArray */

/**
 * @callback FunctionValue
 * @param {Target} target - The animated target
 * @param {Number} index - The target index
 * @param {Number} length - The total number of animated targets
 * @return {Number|String|TweenObjectValue|Array.<Number|String|TweenObjectValue>}
 */

/**
 * @callback TweenModifier
 * @param {Number} value - The animated value
 * @return {Number|String}
 */

/** @typedef {[Number, Number, Number, Number]} ColorArray */

/**
 * @template T
 * @callback Callback
 * @param {T} self - Returns itself
 * @param {PointerEvent} [e]
 * @return {*}
 */

/**
 * @template {object} T
 * @typedef {Object} TickableCallbacks
 * @property {Callback<T>} [onBegin]
 * @property {Callback<T>} [onBeforeUpdate]
 * @property {Callback<T>} [onUpdate]
 * @property {Callback<T>} [onLoop]
 * @property {Callback<T>} [onPause]
 * @property {Callback<T>} [onComplete]
 */

/**
 * @template {object} T
 * @typedef {Object} RenderableCallbacks
 * @property {Callback<T>} [onRender]
 */

/**
 * @typedef {Object} Tween
 * @property {Number} id
 * @property {JSAnimation} parent
 * @property {String} property
 * @property {Target} target
 * @property {String|Number} _value
 * @property {Function|null} _func
 * @property {EasingFunction} _ease
 * @property {Array.<Number>} _fromNumbers
 * @property {Array.<Number>} _toNumbers
 * @property {Array.<String>} _strings
 * @property {Number} _fromNumber
 * @property {Number} _toNumber
 * @property {Array.<Number>} _numbers
 * @property {Number} _number
 * @property {String} _unit
 * @property {TweenModifier} _modifier
 * @property {Number} _currentTime
 * @property {Number} _delay
 * @property {Number} _updateDuration
 * @property {Number} _startTime
 * @property {Number} _changeDuration
 * @property {Number} _absoluteStartTime
 * @property {tweenTypes} _tweenType
 * @property {valueTypes} _valueType
 * @property {Number} _composition
 * @property {Number} _isOverlapped
 * @property {Number} _isOverridden
 * @property {Number} _renderTransforms
 * @property {Tween} _prevRep
 * @property {Tween} _nextRep
 * @property {Tween} _prevAdd
 * @property {Tween} _nextAdd
 * @property {Tween} _prev
 * @property {Tween} _next
 */

/**
 * @typedef TweenDecomposedValue
 * @property {Number} t - Type
 * @property {Number} n - Single number value
 * @property {String} u - Value unit
 * @property {String} o - Value operator
 * @property {Array.<Number>} d - Array of Numbers (in case of complex value type)
 * @property {Array.<String>} s - Strings (in case of complex value type)
 */

/** @typedef {{_head: null|Tween, _tail: null|Tween}} TweenPropertySiblings */
/** @typedef {Record<String, TweenPropertySiblings>} TweenLookups */
/** @typedef {WeakMap.<Target, TweenLookups>} TweenReplaceLookups */
/** @typedef {Map.<Target, TweenLookups>} TweenAdditiveLookups */

/**
 * @typedef {Object} TimerOptions
 * @property {Number|String} [id]
 * @property {TweenParamValue} [duration]
 * @property {TweenParamValue} [delay]
 * @property {Number} [loopDelay]
 * @property {Boolean} [reversed]
 * @property {Boolean} [alternate]
 * @property {Boolean|Number} [loop]
 * @property {Boolean|ScrollObserver} [autoplay]
 * @property {Number} [frameRate]
 * @property {Number} [playbackRate]
 */

/**

/**
 * @typedef {TimerOptions & TickableCallbacks<Timer>} TimerParams
 */

/**
 * @typedef {Number|String|FunctionValue} TweenParamValue
 */

/**
 * @typedef {TweenParamValue|[TweenParamValue, TweenParamValue]} TweenPropValue
 */

/**
 * @typedef {(String & {})|'none'|'replace'|'blend'|compositionTypes} TweenComposition
 */

/**
 * @typedef {Object} TweenParamsOptions
 * @property {TweenParamValue} [duration]
 * @property {TweenParamValue} [delay]
 * @property {EasingParam} [ease]
 * @property {TweenModifier} [modifier]
 * @property {TweenComposition} [composition]
 */

/**
 * @typedef {Object} TweenValues
 * @property {TweenParamValue} [from]
 * @property {TweenPropValue} [to]
 * @property {TweenPropValue} [fromTo]
 */

/**
 * @typedef {TweenParamsOptions & TweenValues} TweenKeyValue
 */

/**
 * @typedef {Array.<TweenKeyValue|TweenPropValue>} ArraySyntaxValue
 */

/**
 * @typedef {TweenParamValue|ArraySyntaxValue|TweenKeyValue} TweenOptions
 */

/**
 * @typedef {Partial<{to: TweenParamValue|Array.<TweenParamValue>; from: TweenParamValue|Array.<TweenParamValue>; fromTo: TweenParamValue|Array.<TweenParamValue>;}>} TweenObjectValue
 */

/**
 * @typedef {Object} PercentageKeyframeOptions
 * @property {EasingParam} [ease]
 */

/**
 * @typedef {Record<String, TweenParamValue>} PercentageKeyframeParams
 */

/**
 * @typedef {Record<String, PercentageKeyframeParams & PercentageKeyframeOptions>} PercentageKeyframes
 */

/**
 * @typedef {Array<Record<String, TweenOptions | TweenModifier | boolean> & TweenParamsOptions>} DurationKeyframes
 */

/**
 * @typedef {Object} AnimationOptions
 * @property {PercentageKeyframes|DurationKeyframes} [keyframes]
 * @property {EasingParam} [playbackEase]
 */

// TODO: Currently setting TweenModifier to the intersected Record<> makes the FunctionValue type target param any if only one parameter is set
/**
 * @typedef {Record<String, TweenOptions | Callback<JSAnimation> | TweenModifier | boolean | PercentageKeyframes | DurationKeyframes | ScrollObserver> & TimerOptions & AnimationOptions & TweenParamsOptions & TickableCallbacks<JSAnimation> & RenderableCallbacks<JSAnimation>} AnimationParams
 */

/**
 * @typedef {Object} TimelineOptions
 * @property {DefaultsParams} [defaults]
 * @property {EasingParam} [playbackEase]
 */

/**
 * @typedef {TimerOptions & TimelineOptions & TickableCallbacks<Timeline> & RenderableCallbacks<Timeline>} TimelineParams
 */

/**
 * @callback AnimatablePropertySetter
 * @param  {Number|Array.<Number>} to
 * @param  {Number} [duration]
 * @param  {EasingParam} [ease]
 * @return {AnimatableObject}
 */

/**
 * @callback AnimatablePropertyGetter
 * @return {Number|Array.<Number>}
 */

/**
 * @typedef {AnimatablePropertySetter & AnimatablePropertyGetter} AnimatableProperty
 */

/**
 * @typedef {Animatable & Record<String, AnimatableProperty>} AnimatableObject
 */

/**
 * @typedef {Object} AnimatablePropertyParamsOptions
 * @property {String} [unit]
 * @property {TweenParamValue} [duration]
 * @property {EasingParam} [ease]
 * @property {TweenModifier} [modifier]
 * @property {TweenComposition} [composition]
 */

/**
 * @typedef {Record<String, TweenParamValue | EasingParam | TweenModifier | TweenComposition | AnimatablePropertyParamsOptions> & AnimatablePropertyParamsOptions} AnimatableParams
 */


// Environments

// TODO: Do we need to check if we're running inside a worker ?
const isBrowser = typeof window !== 'undefined';

/** @type {Object|Null} */
const win = isBrowser ? window : null;

/** @type {Document} */
const doc = isBrowser ? document : null;

// Enums

/** @enum {Number} */
const tweenTypes = {
  OBJECT: 0,
  ATTRIBUTE: 1,
  CSS: 2,
  TRANSFORM: 3,
  CSS_VAR: 4,
};

/** @enum {Number} */
const valueTypes = {
  NUMBER: 0,
  UNIT: 1,
  COLOR: 2,
  COMPLEX: 3,
};

/** @enum {Number} */
const tickModes = {
  NONE: 0,
  AUTO: 1,
  FORCE: 2,
};

/** @enum {Number} */
const compositionTypes = {
  replace: 0,
  none: 1,
  blend: 2,
};

// Cache symbols

const isRegisteredTargetSymbol = Symbol();
const isDomSymbol = Symbol();
const isSvgSymbol = Symbol();
const transformsSymbol = Symbol();
const morphPointsSymbol = Symbol();
const proxyTargetSymbol = Symbol();

// Numbers

const minValue = 1e-11;
const maxValue = 1e12;
const K = 1e3;
const maxFps = 120;

// Strings

const emptyString = '';
const shortTransforms = new Map();

shortTransforms.set('x', 'translateX');
shortTransforms.set('y', 'translateY');
shortTransforms.set('z', 'translateZ');

const validTransforms = [
  'translateX',
  'translateY',
  'translateZ',
  'rotate',
  'rotateX',
  'rotateY',
  'rotateZ',
  'scale',
  'scaleX',
  'scaleY',
  'scaleZ',
  'skew',
  'skewX',
  'skewY',
  'perspective',
  'matrix',
  'matrix3d',
];

const transformsFragmentStrings = validTransforms.reduce((a, v) => ({...a, [v]: v + '('}), {});

// Functions

/** @return {void} */
const noop = () => {};

// Regex

const hexTestRgx = /(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i;
const rgbExecRgx = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i;
const rgbaExecRgx = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i;
const hslExecRgx = /hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i;
const hslaExecRgx = /hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i;
// export const digitWithExponentRgx = /[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g;
const digitWithExponentRgx = /[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi;
// export const unitsExecRgx = /^([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)+([a-z]+|%)$/i;
const unitsExecRgx = /^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i;
const lowerCaseRgx = /([a-z])([A-Z])/g;
const transformsExecRgx = /(\w+)(\([^)]+\)+)/g; // Match inline transforms with cacl() values, returns the value wrapped in ()
const relativeValuesExecRgx = /(\*=|\+=|-=)/;




/** @type {DefaultsParams} */
const defaults = {
  id: null,
  keyframes: null,
  playbackEase: null,
  playbackRate: 1,
  frameRate: maxFps,
  loop: 0,
  reversed: false,
  alternate: false,
  autoplay: true,
  duration: K,
  delay: 0,
  loopDelay: 0,
  ease: 'out(2)',
  composition: compositionTypes.replace,
  modifier: v => v,
  onBegin: noop,
  onBeforeUpdate: noop,
  onUpdate: noop,
  onLoop: noop,
  onPause: noop,
  onComplete: noop,
  onRender: noop,
};

const globals = {
  /** @type {DefaultsParams} */
  defaults,
  /** @type {Document|DOMTarget} */
  root: doc,
  /** @type {Scope} */
  scope: null,
  /** @type {Number} */
  precision: 4,
  /** @type {Number} */
  timeScale: 1,
  /** @type {Number} */
  tickThreshold: 200,
};

const globalVersions = { version: '4.0.2', engine: null };

if (isBrowser) {
  if (!win.AnimeJS) win.AnimeJS = [];
  win.AnimeJS.push(globalVersions);
}

// Strings

/**
 * @param  {String} str
 * @return {String}
 */
const toLowerCase = str => str.replace(lowerCaseRgx, '$1-$2').toLowerCase();

/**
 * Prioritize this method instead of regex when possible
 * @param  {String} str
 * @param  {String} sub
 * @return {Boolean}
 */
const stringStartsWith = (str, sub) => str.indexOf(sub) === 0;

// Time
// Note: Date.now is used instead of performance.now since it is precise enough for timings calculations, performs slightly faster and works in Node.js environement.
const now = Date.now;

// Types checkers

const isArr = Array.isArray;
/**@param {any} a @return {a is Record<String, any>} */
const isObj = a => a && a.constructor === Object;
/**@param {any} a @return {a is Number} */
const isNum = a => typeof a === 'number' && !isNaN(a);
/**@param {any} a @return {a is String} */
const isStr = a => typeof a === 'string';
/**@param {any} a @return {a is Function} */
const isFnc = a => typeof a === 'function';
/**@param {any} a @return {a is undefined} */
const isUnd = a => typeof a === 'undefined';
/**@param {any} a @return {a is null | undefined} */
const isNil = a => isUnd(a) || a === null;
/**@param {any} a @return {a is SVGElement} */
const isSvg = a => isBrowser && a instanceof SVGElement;
/**@param {any} a @return {Boolean} */
const isHex = a => hexTestRgx.test(a);
/**@param {any} a @return {Boolean} */
const isRgb = a => stringStartsWith(a, 'rgb');
/**@param {any} a @return {Boolean} */
const isHsl = a => stringStartsWith(a, 'hsl');
/**@param {any} a @return {Boolean} */
const isCol = a => isHex(a) || isRgb(a) || isHsl(a);
/**@param {any} a @return {Boolean} */
const isKey = a => !globals.defaults.hasOwnProperty(a);

// Number

/**
 * @param  {Number|String} str
 * @return {Number}
 */
const parseNumber = str => isStr(str) ?
  parseFloat(/** @type {String} */(str)) :
  /** @type {Number} */(str);

// Math

const pow = Math.pow;
const sqrt = Math.sqrt;
const sin = Math.sin;
const cos = Math.cos;
const abs = Math.abs;
const exp = Math.exp;
const ceil = Math.ceil;
const floor = Math.floor;
const asin = Math.asin;
const max = Math.max;
const atan2 = Math.atan2;
const PI = Math.PI;
const _round = Math.round;

/**
 * @param  {Number} v
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
const clamp = (v, min, max) => v < min ? min : v > max ? max : v;

const powCache = {};

/**
 * @param  {Number} v
 * @param  {Number} decimalLength
 * @return {Number}
 */
const round = (v, decimalLength) => {
  if (decimalLength < 0) return v;
  if (!decimalLength) return _round(v);
  let p = powCache[decimalLength];
  if (!p) p = powCache[decimalLength] = 10 ** decimalLength;
  return _round(v * p) / p;
};

/**
 * @param  {Number} v
 * @param  {Number|Array<Number>} increment
 * @return {Number}
 */
const snap = (v, increment) => isArr(increment) ? increment.reduce((closest, cv) => (abs(cv - v) < abs(closest - v) ? cv : closest)) : increment ? _round(v / increment) * increment : v;

/**
 * @param  {Number} start
 * @param  {Number} end
 * @param  {Number} progress
 * @return {Number}
 */
const interpolate = (start, end, progress) => start + (end - start) * progress;

/**
 * @param  {Number} v
 * @return {Number}
 */
const clampInfinity = v => v === Infinity ? maxValue : v === -Infinity ? -1e12 : v;

/**
 * @param  {Number} v
 * @return {Number}
 */
const normalizeTime = v => v <= minValue ? minValue : clampInfinity(round(v, 11));

// Arrays

/**
 * @template T
 * @param {T[]} a
 * @return {T[]}
 */
const cloneArray = a => isArr(a) ? [ ...a ] : a;

// Objects

/**
 * @template T
 * @template U
 * @param {T} o1
 * @param {U} o2
 * @return {T & U}
 */
const mergeObjects = (o1, o2) => {
  const merged = /** @type {T & U} */({ ...o1 });
  for (let p in o2) {
    const o1p = /** @type {T & U} */(o1)[p];
    merged[p] = isUnd(o1p) ? /** @type {T & U} */(o2)[p] : o1p;
  }  return merged;
};

// Linked lists

/**
 * @param {Object} parent
 * @param {Function} callback
 * @param {Boolean} [reverse]
 * @param {String} [prevProp]
 * @param {String} [nextProp]
 * @return {void}
 */
const forEachChildren = (parent, callback, reverse, prevProp = '_prev', nextProp = '_next') => {
  let next = parent._head;
  let adjustedNextProp = nextProp;
  if (reverse) {
    next = parent._tail;
    adjustedNextProp = prevProp;
  }
  while (next) {
    const currentNext = next[adjustedNextProp];
    callback(next);
    next = currentNext;
  }
};

/**
 * @param  {Object} parent
 * @param  {Object} child
 * @param  {String} [prevProp]
 * @param  {String} [nextProp]
 * @return {void}
 */
const removeChild = (parent, child, prevProp = '_prev', nextProp = '_next') => {
  const prev = child[prevProp];
  const next = child[nextProp];
  prev ? prev[nextProp] = next : parent._head = next;
  next ? next[prevProp] = prev : parent._tail = prev;
  child[prevProp] = null;
  child[nextProp] = null;
};

/**
 * @param  {Object} parent
 * @param  {Object} child
 * @param  {Function} [sortMethod]
 * @param  {String} prevProp
 * @param  {String} nextProp
 * @return {void}
 */
const addChild = (parent, child, sortMethod, prevProp = '_prev', nextProp = '_next') => {
  let prev = parent._tail;
  while (prev && sortMethod && sortMethod(prev, child)) prev = prev[prevProp];
  const next = prev ? prev[nextProp] : parent._head;
  prev ? prev[nextProp] = child : parent._head = child;
  next ? next[prevProp] = child : parent._tail = child;
  child[prevProp] = prev;
  child[nextProp] = next;
};

/*
 * Base class to control framerate and playback rate.
 * Inherited by Engine, Timer, Animation and Timeline.
 */
class Clock {

  /** @param {Number} [initTime] */
  constructor(initTime = 0) {
    /** @type {Number} */
    this.deltaTime = 0;
    /** @type {Number} */
    this._currentTime = initTime;
    /** @type {Number} */
    this._elapsedTime = initTime;
    /** @type {Number} */
    this._startTime = initTime;
    /** @type {Number} */
    this._lastTime = initTime;
    /** @type {Number} */
    this._scheduledTime = 0;
    /** @type {Number} */
    this._frameDuration = round(K / maxFps, 0);
    /** @type {Number} */
    this._fps = maxFps;
    /** @type {Number} */
    this._speed = 1;
    /** @type {Boolean} */
    this._hasChildren = false;
    /** @type {Tickable|Tween} */
    this._head = null;
    /** @type {Tickable|Tween} */
    this._tail = null;
  }

  get fps() {
    return this._fps;
  }

  set fps(frameRate) {
    const previousFrameDuration = this._frameDuration;
    const fr = +frameRate;
    const fps = fr < minValue ? minValue : fr;
    const frameDuration = round(K / fps, 0);
    this._fps = fps;
    this._frameDuration = frameDuration;
    this._scheduledTime += frameDuration - previousFrameDuration;
  }

  get speed() {
    return this._speed;
  }

  set speed(playbackRate) {
    const pbr = +playbackRate;
    this._speed = pbr < minValue ? minValue : pbr;
  }

  /**
   * @param  {Number} time
   * @return {tickModes}
   */
  requestTick(time) {
    const scheduledTime = this._scheduledTime;
    const elapsedTime = this._elapsedTime;
    this._elapsedTime += (time - elapsedTime);
    // If the elapsed time is lower than the scheduled time
    // this means not enough time has passed to hit one frameDuration
    // so skip that frame
    if (elapsedTime < scheduledTime) return tickModes.NONE;
    const frameDuration = this._frameDuration;
    const frameDelta = elapsedTime - scheduledTime;
    // Ensures that _scheduledTime progresses in steps of at least 1 frameDuration.
    // Skips ahead if the actual elapsed time is higher.
    this._scheduledTime += frameDelta < frameDuration ? frameDuration : frameDelta;
    return tickModes.AUTO;
  }

  /**
   * @param  {Number} time
   * @return {Number}
   */
  computeDeltaTime(time) {
    const delta = time - this._lastTime;
    this.deltaTime = delta;
    this._lastTime = time;
    return delta;
  }

}




/**
 * @param  {Tickable} tickable
 * @param  {Number} time
 * @param  {Number} muteCallbacks
 * @param  {Number} internalRender
 * @param  {tickModes} tickMode
 * @return {Number}
 */
const render = (tickable, time, muteCallbacks, internalRender, tickMode) => {

  const parent = tickable.parent;
  const duration = tickable.duration;
  const completed = tickable.completed;
  const iterationDuration = tickable.iterationDuration;
  const iterationCount = tickable.iterationCount;
  const _currentIteration = tickable._currentIteration;
  const _loopDelay = tickable._loopDelay;
  const _reversed = tickable._reversed;
  const _alternate = tickable._alternate;
  const _hasChildren = tickable._hasChildren;
  const tickableDelay = tickable._delay;
  const tickablePrevAbsoluteTime = tickable._currentTime; // TODO: rename ._currentTime to ._absoluteCurrentTime

  const tickableEndTime = tickableDelay + iterationDuration;
  const tickableAbsoluteTime = time - tickableDelay;
  const tickablePrevTime = clamp(tickablePrevAbsoluteTime, -tickableDelay, duration);
  const tickableCurrentTime = clamp(tickableAbsoluteTime, -tickableDelay, duration);
  const deltaTime = tickableAbsoluteTime - tickablePrevAbsoluteTime;
  const isCurrentTimeAboveZero = tickableCurrentTime > 0;
  const isCurrentTimeEqualOrAboveDuration = tickableCurrentTime >= duration;
  const isSetter = duration <= minValue;
  const forcedTick = tickMode === tickModes.FORCE;

  let isOdd = 0;
  let iterationElapsedTime = tickableAbsoluteTime;
  // Render checks
  // Used to also check if the children have rendered in order to trigger the onRender callback on the parent timer
  let hasRendered = 0;

  // Execute the "expensive" iterations calculations only when necessary
  if (iterationCount > 1) {
    // bitwise NOT operator seems to be generally faster than Math.floor() across browsers
    const currentIteration = ~~(tickableCurrentTime / (iterationDuration + (isCurrentTimeEqualOrAboveDuration ? 0 : _loopDelay)));
    tickable._currentIteration = clamp(currentIteration, 0, iterationCount);
    // Prevent the iteration count to go above the max iterations when reaching the end of the animation
    if (isCurrentTimeEqualOrAboveDuration) tickable._currentIteration--;
    isOdd = tickable._currentIteration % 2;
    iterationElapsedTime = tickableCurrentTime % (iterationDuration + _loopDelay) || 0;
  }

  // Checks if exactly one of _reversed and (_alternate && isOdd) is true
  const isReversed = _reversed ^ (_alternate && isOdd);
  const _ease = /** @type {Renderable} */(tickable)._ease;
  let iterationTime = isCurrentTimeEqualOrAboveDuration ? isReversed ? 0 : duration : isReversed ? iterationDuration - iterationElapsedTime : iterationElapsedTime;
  if (_ease) iterationTime = iterationDuration * _ease(iterationTime / iterationDuration) || 0;
  const isRunningBackwards = (parent ? parent.backwards : tickableAbsoluteTime < tickablePrevAbsoluteTime) ? !isReversed : !!isReversed;

  tickable._currentTime = tickableAbsoluteTime;
  tickable._iterationTime = iterationTime;
  tickable.backwards = isRunningBackwards;

  if (isCurrentTimeAboveZero && !tickable.began) {
    tickable.began = true;
    if (!muteCallbacks && !(parent && (isRunningBackwards || !parent.began))) {
      tickable.onBegin(/** @type {CallbackArgument} */(tickable));
    }
  } else if (tickableAbsoluteTime <= 0) {
    tickable.began = false;
  }

  // Only triggers onLoop for tickable without children, otherwise call the the onLoop callback in the tick function
  // Make sure to trigger the onLoop before rendering to allow .refresh() to pickup the current values
  if (!muteCallbacks && !_hasChildren && isCurrentTimeAboveZero && tickable._currentIteration !== _currentIteration) {
    tickable.onLoop(/** @type {CallbackArgument} */(tickable));
  }

  if (
    forcedTick ||
    tickMode === tickModes.AUTO && (
      time >= tickableDelay && time <= tickableEndTime || // Normal render
      time <= tickableDelay && tickablePrevTime > tickableDelay || // Playhead is before the animation start time so make sure the animation is at its initial state
      time >= tickableEndTime && tickablePrevTime !== duration // Playhead is after the animation end time so make sure the animation is at its end state
    ) ||
    iterationTime >= tickableEndTime && tickablePrevTime !== duration ||
    iterationTime <= tickableDelay && tickablePrevTime > 0 ||
    time <= tickablePrevTime && tickablePrevTime === duration && completed || // Force a render if a seek occurs on an completed animation
    isCurrentTimeEqualOrAboveDuration && !completed && isSetter // This prevents 0 duration tickables to be skipped
  ) {

    if (isCurrentTimeAboveZero) {
      // Trigger onUpdate callback before rendering
      tickable.computeDeltaTime(tickablePrevTime);
      if (!muteCallbacks) tickable.onBeforeUpdate(/** @type {CallbackArgument} */(tickable));
    }

    // Start tweens rendering
    if (!_hasChildren) {

      // Time has jumped more than globals.tickThreshold so consider this tick manual
      const forcedRender = forcedTick || (isRunningBackwards ? deltaTime * -1 : deltaTime) >= globals.tickThreshold;
      const absoluteTime = tickable._offset + (parent ? parent._offset : 0) + tickableDelay + iterationTime;

      // Only Animation can have tweens, Timer returns undefined
      let tween = /** @type {Tween} */(/** @type {JSAnimation} */(tickable)._head);
      let tweenTarget;
      let tweenStyle;
      let tweenTargetTransforms;
      let tweenTargetTransformsProperties;
      let tweenTransformsNeedUpdate = 0;

      while (tween) {

        const tweenComposition = tween._composition;
        const tweenCurrentTime = tween._currentTime;
        const tweenChangeDuration = tween._changeDuration;
        const tweenAbsEndTime = tween._absoluteStartTime + tween._changeDuration;
        const tweenNextRep = tween._nextRep;
        const tweenPrevRep = tween._prevRep;
        const tweenHasComposition = tweenComposition !== compositionTypes.none;

        if ((forcedRender || (
            (tweenCurrentTime !== tweenChangeDuration || absoluteTime <= tweenAbsEndTime + (tweenNextRep ? tweenNextRep._delay : 0)) &&
            (tweenCurrentTime !== 0 || absoluteTime >= tween._absoluteStartTime)
          )) && (!tweenHasComposition || (
            !tween._isOverridden &&
            (!tween._isOverlapped || absoluteTime <= tweenAbsEndTime) &&
            (!tweenNextRep || (tweenNextRep._isOverridden || absoluteTime <= tweenNextRep._absoluteStartTime)) &&
            (!tweenPrevRep || (tweenPrevRep._isOverridden || (absoluteTime >= (tweenPrevRep._absoluteStartTime + tweenPrevRep._changeDuration) + tween._delay)))
          ))
        ) {

          const tweenNewTime = tween._currentTime = clamp(iterationTime - tween._startTime, 0, tweenChangeDuration);
          const tweenProgress = tween._ease(tweenNewTime / tween._updateDuration);
          const tweenModifier = tween._modifier;
          const tweenValueType = tween._valueType;
          const tweenType = tween._tweenType;
          const tweenIsObject = tweenType === tweenTypes.OBJECT;
          const tweenIsNumber = tweenValueType === valueTypes.NUMBER;
          // Only round the in-between frames values if the final value is a string
          const tweenPrecision = (tweenIsNumber && tweenIsObject) || tweenProgress === 0 || tweenProgress === 1 ? -1 : globals.precision;

          // Recompose tween value
          /** @type {String|Number} */
          let value;
          /** @type {Number} */
          let number;

          if (tweenIsNumber) {
            value = number = /** @type {Number} */(tweenModifier(round(interpolate(tween._fromNumber, tween._toNumber,  tweenProgress), tweenPrecision )));
          } else if (tweenValueType === valueTypes.UNIT) {
            // Rounding the values speed up string composition
            number = /** @type {Number} */(tweenModifier(round(interpolate(tween._fromNumber, tween._toNumber,  tweenProgress), tweenPrecision)));
            value = `${number}${tween._unit}`;
          } else if (tweenValueType === valueTypes.COLOR) {
            const fn = tween._fromNumbers;
            const tn = tween._toNumbers;
            const r = round(clamp(/** @type {Number} */(tweenModifier(interpolate(fn[0], tn[0], tweenProgress))), 0, 255), 0);
            const g = round(clamp(/** @type {Number} */(tweenModifier(interpolate(fn[1], tn[1], tweenProgress))), 0, 255), 0);
            const b = round(clamp(/** @type {Number} */(tweenModifier(interpolate(fn[2], tn[2], tweenProgress))), 0, 255), 0);
            const a = clamp(/** @type {Number} */(tweenModifier(round(interpolate(fn[3], tn[3], tweenProgress), tweenPrecision))), 0, 1);
            value = `rgba(${r},${g},${b},${a})`;
            if (tweenHasComposition) {
              const ns = tween._numbers;
              ns[0] = r;
              ns[1] = g;
              ns[2] = b;
              ns[3] = a;
            }
          } else if (tweenValueType === valueTypes.COMPLEX) {
            value = tween._strings[0];
            for (let j = 0, l = tween._toNumbers.length; j < l; j++) {
              const n = /** @type {Number} */(tweenModifier(round(interpolate(tween._fromNumbers[j], tween._toNumbers[j], tweenProgress), tweenPrecision)));
              const s = tween._strings[j + 1];
              value += `${s ? n + s : n}`;
              if (tweenHasComposition) {
                tween._numbers[j] = n;
              }
            }
          }

          // For additive tweens and Animatables
          if (tweenHasComposition) {
            tween._number = number;
          }

          if (!internalRender && tweenComposition !== compositionTypes.blend) {

            const tweenProperty = tween.property;
            tweenTarget = tween.target;

            if (tweenIsObject) {
              tweenTarget[tweenProperty] = value;
            } else if (tweenType === tweenTypes.ATTRIBUTE) {
              /** @type {DOMTarget} */(tweenTarget).setAttribute(tweenProperty, /** @type {String} */(value));
            } else {
              tweenStyle = /** @type {DOMTarget} */(tweenTarget).style;
              if (tweenType === tweenTypes.TRANSFORM) {
                if (tweenTarget !== tweenTargetTransforms) {
                  tweenTargetTransforms = tweenTarget;
                  // NOTE: Referencing the cachedTransforms in the tween property directly can be a little bit faster but appears to increase memory usage.
                  tweenTargetTransformsProperties = tweenTarget[transformsSymbol];
                }
                tweenTargetTransformsProperties[tweenProperty] = value;
                tweenTransformsNeedUpdate = 1;
              } else if (tweenType === tweenTypes.CSS) {
                tweenStyle[tweenProperty] = value;
              } else if (tweenType === tweenTypes.CSS_VAR) {
                tweenStyle.setProperty(tweenProperty,/** @type {String} */(value));
              }
            }

            if (isCurrentTimeAboveZero) hasRendered = 1;

          } else {
            // Used for composing timeline tweens without having to do a real render
            tween._value = value;
          }

        }

        // NOTE: Possible improvement: Use translate(x,y) / translate3d(x,y,z) syntax
        // to reduce memory usage on string composition
        if (tweenTransformsNeedUpdate && tween._renderTransforms) {
          let str = emptyString;
          for (let key in tweenTargetTransformsProperties) {
            str += `${transformsFragmentStrings[key]}${tweenTargetTransformsProperties[key]}) `;
          }
          tweenStyle.transform = str;
          tweenTransformsNeedUpdate = 0;
        }

        tween = tween._next;
      }

      if (!muteCallbacks && hasRendered) {
        /** @type {JSAnimation} */(tickable).onRender(/** @type {JSAnimation} */(tickable));
      }
    }

    if (!muteCallbacks && isCurrentTimeAboveZero) {
      tickable.onUpdate(/** @type {CallbackArgument} */(tickable));
    }

  }

  // End tweens rendering

  // Handle setters on timeline differently and allow re-trigering the onComplete callback when seeking backwards
  if (parent && isSetter) {
    if (!muteCallbacks && (
      (parent.began && !isRunningBackwards && tickableAbsoluteTime >= duration && !completed) ||
      (isRunningBackwards && tickableAbsoluteTime <= minValue && completed)
    )) {
      tickable.onComplete(/** @type {CallbackArgument} */(tickable));
      tickable.completed = !isRunningBackwards;
    }
  // If currentTime is both above 0 and at least equals to duration, handles normal onComplete or infinite loops
  } else if (isCurrentTimeAboveZero && isCurrentTimeEqualOrAboveDuration) {
    if (iterationCount === Infinity) {
      // Offset the tickable _startTime with its duration to reset _currentTime to 0 and continue the infinite timer
      tickable._startTime += tickable.duration;
    } else if (tickable._currentIteration >= iterationCount - 1) {
      // By setting paused to true, we tell the engine loop to not render this tickable and removes it from the list on the next tick
      tickable.paused = true;
      if (!completed && !_hasChildren) {
        // If the tickable has children, triggers onComplete() only when all children have completed in the tick function
        tickable.completed = true;
        if (!muteCallbacks && !(parent && (isRunningBackwards || !parent.began))) {
          tickable.onComplete(/** @type {CallbackArgument} */(tickable));
          tickable._resolve(/** @type {CallbackArgument} */(tickable));
        }
      }
    }
  // Otherwise set the completed flag to false
  } else {
    tickable.completed = false;
  }

  // NOTE: hasRendered * direction (negative for backwards) this way we can remove the tickable.backwards property completly ?
  return hasRendered;
};

/**
 * @param  {Tickable} tickable
 * @param  {Number} time
 * @param  {Number} muteCallbacks
 * @param  {Number} internalRender
 * @param  {Number} tickMode
 * @return {void}
 */
const tick = (tickable, time, muteCallbacks, internalRender, tickMode) => {
  const _currentIteration = tickable._currentIteration;
  render(tickable, time, muteCallbacks, internalRender, tickMode);
  if (tickable._hasChildren) {
    const tl = /** @type {Timeline} */(tickable);
    const tlIsRunningBackwards = tl.backwards;
    const tlChildrenTime = internalRender ? time : tl._iterationTime;
    const tlCildrenTickTime = now();

    let tlChildrenHasRendered = 0;
    let tlChildrenHaveCompleted = true;

    // If the timeline has looped forward, we need to manually triggers children skipped callbacks
    if (!internalRender && tl._currentIteration !== _currentIteration) {
      const tlIterationDuration = tl.iterationDuration;
      forEachChildren(tl, (/** @type {JSAnimation} */child) => {
        if (!tlIsRunningBackwards) {
          // Force an internal render to trigger the callbacks if the child has not completed on loop
          if (!child.completed && !child.backwards && child._currentTime < child.iterationDuration) {
            render(child, tlIterationDuration, muteCallbacks, 1, tickModes.FORCE);
          }
          // Reset their began and completed flags to allow retrigering callbacks on the next iteration
          child.began = false;
          child.completed = false;
        } else {
          const childDuration = child.duration;
          const childStartTime = child._offset + child._delay;
          const childEndTime = childStartTime + childDuration;
          // Triggers the onComplete callback on reverse for children on the edges of the timeline
          if (!muteCallbacks && childDuration <= minValue && (!childStartTime || childEndTime === tlIterationDuration)) {
            child.onComplete(child);
          }
        }
      });
      if (!muteCallbacks) tl.onLoop(/** @type {CallbackArgument} */(tl));
    }

    forEachChildren(tl, (/** @type {JSAnimation} */child) => {
      const childTime = round((tlChildrenTime - child._offset) * child._speed, 12); // Rounding is needed when using seconds
      const childTickMode = child._fps < tl._fps ? child.requestTick(tlCildrenTickTime) : tickMode;
      tlChildrenHasRendered += render(child, childTime, muteCallbacks, internalRender, childTickMode);
      if (!child.completed && tlChildrenHaveCompleted) tlChildrenHaveCompleted = false;
    }, tlIsRunningBackwards);

    // Renders on timeline are triggered by its children so it needs to be set after rendering the children
    if (!muteCallbacks && tlChildrenHasRendered) tl.onRender(/** @type {CallbackArgument} */(tl));

    // Triggers the timeline onComplete() once all chindren all completed and the current time has reached the end
    if (tlChildrenHaveCompleted && tl._currentTime >= tl.duration) {
      // Make sure the paused flag is false in case it has been skipped in the render function
      tl.paused = true;
      if (!tl.completed) {
        tl.completed = true;
        if (!muteCallbacks) {
          tl.onComplete(/** @type {CallbackArgument} */(tl));
          tl._resolve(/** @type {CallbackArgument} */(tl));
        }
      }
    }
  }
};




const additive = {
  animation: null,
  update: noop,
};

/**
 * @typedef AdditiveAnimation
 * @property {Number} duration
 * @property {Number} _offset
 * @property {Number} _delay
 * @property {Tween} _head
 * @property {Tween} _tail
 */

/**
 * @param  {TweenAdditiveLookups} lookups
 * @return {AdditiveAnimation}
 */
const addAdditiveAnimation = lookups => {
  let animation = additive.animation;
  if (!animation) {
    animation = {
      duration: minValue,
      computeDeltaTime: noop,
      _offset: 0,
      _delay: 0,
      _head: null,
      _tail: null,
    };
    additive.animation = animation;
    additive.update = () => {
      lookups.forEach(propertyAnimation => {
        for (let propertyName in propertyAnimation) {
          const tweens = propertyAnimation[propertyName];
          const lookupTween = tweens._head;
          if (lookupTween) {
            const valueType = lookupTween._valueType;
            const additiveValues = valueType === valueTypes.COMPLEX || valueType === valueTypes.COLOR ? cloneArray(lookupTween._fromNumbers) : null;
            let additiveValue = lookupTween._fromNumber;
            let tween = tweens._tail;
            while (tween && tween !== lookupTween) {
              if (additiveValues) {
                for (let i = 0, l = tween._numbers.length; i < l; i++) additiveValues[i] += tween._numbers[i];
              } else {
                additiveValue += tween._number;
              }
              tween = tween._prevAdd;
            }
            lookupTween._toNumber = additiveValue;
            lookupTween._toNumbers = additiveValues;
          }
        }
      });
      // TODO: Avoid polymorphism here, idealy the additive animation should be a regular animation with a higher priority in the render loop
      render(animation, 1, 1, 0, tickModes.FORCE);
    };
  }
  return animation;
};

const engineTickMethod = isBrowser ? requestAnimationFrame : setImmediate;
const engineCancelMethod = isBrowser ? cancelAnimationFrame : clearImmediate;

class Engine extends Clock {

  /** @param {Number} [initTime] */
  constructor(initTime) {
    super(initTime);
    this.useDefaultMainLoop = true;
    this.pauseOnDocumentHidden = true;
    /** @type {DefaultsParams} */
    this.defaults = defaults;
    this.paused = isBrowser && doc.hidden ? true  : false;
    /** @type {Number|NodeJS.Immediate} */
    this.reqId = null;
  }

  update() {
    const time = this._currentTime = now();
    if (this.requestTick(time)) {
      this.computeDeltaTime(time);
      const engineSpeed = this._speed;
      const engineFps = this._fps;
      let activeTickable = /** @type {Tickable} */(this._head);
      while (activeTickable) {
        const nextTickable = activeTickable._next;
        if (!activeTickable.paused) {
          tick(
            activeTickable,
            (time - activeTickable._startTime) * activeTickable._speed * engineSpeed,
            0, // !muteCallbacks
            0, // !internalRender
            activeTickable._fps < engineFps ? activeTickable.requestTick(time) : tickModes.AUTO
          );
        } else {
          removeChild(this, activeTickable);
          this._hasChildren = !!this._tail;
          activeTickable._running = false;
          if (activeTickable.completed && !activeTickable._cancelled) {
            activeTickable.cancel();
          }
        }
        activeTickable = nextTickable;
      }
      additive.update();
    }
  }

  wake() {
    if (this.useDefaultMainLoop && !this.reqId && !this.paused) {
      this.reqId = engineTickMethod(tickEngine);
    }
    return this;
  }

  pause() {
    this.paused = true;
    return killEngine();
  }

  resume() {
    if (!this.paused) return;
    this.paused = false;
    forEachChildren(this, (/** @type {Tickable} */child) => child.resetTime());
    return this.wake();
  }

  // Getter and setter for speed
  get speed() {
    return this._speed * (globals.timeScale === 1 ? 1 : K);
  }

  set speed(playbackRate) {
    this._speed = playbackRate * globals.timeScale;
    forEachChildren(this, (/** @type {Tickable} */child) => child.speed = child._speed);
  }

  // Getter and setter for timeUnit
  get timeUnit() {
    return globals.timeScale === 1 ? 'ms' : 's';
  };

  set timeUnit(unit) {
    const secondsScale = 0.001;
    const isSecond = unit === 's';
    const newScale = isSecond ? secondsScale : 1;
    if (globals.timeScale !== newScale) {
      globals.timeScale = newScale;
      globals.tickThreshold = 200 * newScale;
      const scaleFactor = isSecond ? secondsScale : K;
      /** @type {Number} */
      (this.defaults.duration) *= scaleFactor;
      this._speed *= scaleFactor;
    }
  }

  // Getter and setter for precision
  get precision() {
    return globals.precision;
  }

  set precision(precision) {
    globals.precision = precision;
  }

}
const engine = /*#__PURE__*/(() => {
  const engine = new Engine(now());
  if (isBrowser) {
    globalVersions.engine = engine;
    doc.addEventListener('visibilitychange', () => {
      if (!engine.pauseOnDocumentHidden) return;
      doc.hidden ? engine.pause() : engine.resume();
    });
  }
  return engine;
})();


const tickEngine = () => {
  if (engine._head) {
    engine.reqId = engineTickMethod(tickEngine);
    engine.update();
  } else {
    engine.reqId = 0;
  }
};

const killEngine = () => {
  engineCancelMethod(/** @type {NodeJS.Immediate & Number} */(engine.reqId));
  engine.reqId = 0;
  return engine;
};




/**
 * @param  {DOMTarget} target
 * @param  {String} propName
 * @param  {Object} animationInlineStyles
 * @return {String}
 */
const parseInlineTransforms = (target, propName, animationInlineStyles) => {
  const inlineTransforms = target.style.transform;
  let inlinedStylesPropertyValue;
  if (inlineTransforms) {
    const cachedTransforms = target[transformsSymbol];
    let t; while (t = transformsExecRgx.exec(inlineTransforms)) {
      const inlinePropertyName = t[1];
      // const inlinePropertyValue = t[2];
      const inlinePropertyValue = t[2].slice(1, -1);
      cachedTransforms[inlinePropertyName] = inlinePropertyValue;
      if (inlinePropertyName === propName) {
        inlinedStylesPropertyValue = inlinePropertyValue;
        // Store the new parsed inline styles if animationInlineStyles is provided
        if (animationInlineStyles) {
          animationInlineStyles[propName] = inlinePropertyValue;
        }
      }
    }
  }
  return inlineTransforms && !isUnd(inlinedStylesPropertyValue) ? inlinedStylesPropertyValue :
    stringStartsWith(propName, 'scale') ? '1' :
    stringStartsWith(propName, 'rotate') || stringStartsWith(propName, 'skew') ? '0deg' : '0px';
};




/**
 * @param  {DOMTargetsParam|TargetsParam} v
 * @return {NodeList|HTMLCollection}
 */
function getNodeList(v) {
  const n = isStr(v) ? globals.root.querySelectorAll(v) : v;
  if (n instanceof NodeList || n instanceof HTMLCollection) return n;
}

/**
 * @overload
 * @param  {DOMTargetsParam} targets
 * @return {DOMTargetsArray}
 *
 * @overload
 * @param  {JSTargetsParam} targets
 * @return {JSTargetsArray}
 *
 * @overload
 * @param  {TargetsParam} targets
 * @return {TargetsArray}
 *
 * @param  {DOMTargetsParam|JSTargetsParam|TargetsParam} targets
 */
function parseTargets(targets) {
  if (isNil(targets)) return /** @type {TargetsArray} */([]);
  if (isArr(targets)) {
    const flattened = targets.flat(Infinity);
    /** @type {TargetsArray} */
    const parsed = [];
    for (let i = 0, l = flattened.length; i < l; i++) {
      const item = flattened[i];
      if (!isNil(item)) {
        const nodeList = getNodeList(item);
        if (nodeList) {
          for (let j = 0, jl = nodeList.length; j < jl; j++) {
            const subItem = nodeList[j];
            if (!isNil(subItem)) {
              let isDuplicate = false;
              for (let k = 0, kl = parsed.length; k < kl; k++) {
                if (parsed[k] === subItem) {
                  isDuplicate = true;
                  break;
                }
              }
              if (!isDuplicate) {
                parsed.push(subItem);
              }
            }
          }
        } else {
          let isDuplicate = false;
          for (let j = 0, jl = parsed.length; j < jl; j++) {
            if (parsed[j] === item) {
              isDuplicate = true;
              break;
            }
          }
          if (!isDuplicate) {
            parsed.push(item);
          }
        }
      }
    }
    return parsed;
  }
  if (!isBrowser) return /** @type {JSTargetsArray} */([targets]);
  const nodeList = getNodeList(targets);
  if (nodeList) return /** @type {DOMTargetsArray} */(Array.from(nodeList));
  return /** @type {TargetsArray} */([targets]);
}

/**
 * @overload
 * @param  {DOMTargetsParam} targets
 * @return {DOMTargetsArray}
 *
 * @overload
 * @param  {JSTargetsParam} targets
 * @return {JSTargetsArray}
 *
 * @overload
 * @param  {TargetsParam} targets
 * @return {TargetsArray}
 *
 * @param  {DOMTargetsParam|JSTargetsParam|TargetsParam} targets
 */
function registerTargets(targets) {
  const parsedTargetsArray = parseTargets(targets);
  const parsedTargetsLength = parsedTargetsArray.length;
  if (parsedTargetsLength) {
    for (let i = 0; i < parsedTargetsLength; i++) {
      const target = parsedTargetsArray[i];
      if (!target[isRegisteredTargetSymbol]) {
        target[isRegisteredTargetSymbol] = true;
        const isSvgType = isSvg(target);
        const isDom = /** @type {DOMTarget} */(target).nodeType || isSvgType;
        if (isDom) {
          target[isDomSymbol] = true;
          target[isSvgSymbol] = isSvgType;
          target[transformsSymbol] = {};
        }
      }
    }
  }
  return parsedTargetsArray;
}




/**
 * @param  {TargetsParam} path
 * @return {SVGGeometryElement|undefined}
 */
const getPath = path => {
  const parsedTargets = parseTargets(path);
  const $parsedSvg = /** @type {SVGGeometryElement} */(parsedTargets[0]);
  if (!$parsedSvg || !isSvg($parsedSvg)) return;
  return $parsedSvg;
};

/**
 * @param  {TargetsParam} path2
 * @param  {Number} [precision]
 * @return {FunctionValue}
 */
const morphTo = (path2, precision = .33) => ($path1) => {
  const $path2 = /** @type {SVGGeometryElement} */(getPath(path2));
  if (!$path2) return;
  const isPath = $path1.tagName === 'path';
  const separator = isPath ? ' ' : ',';
  const previousPoints = $path1[morphPointsSymbol];
  if (previousPoints) $path1.setAttribute(isPath ? 'd' : 'points', previousPoints);

  let v1 = '', v2 = '';

  if (!precision) {
    v1 = $path1.getAttribute(isPath ? 'd' : 'points');
    v2 = $path2.getAttribute(isPath ? 'd' : 'points');
  } else {
    const length1 = /** @type {SVGGeometryElement} */($path1).getTotalLength();
    const length2 = $path2.getTotalLength();
    const maxPoints = Math.max(Math.ceil(length1 * precision), Math.ceil(length2 * precision));
    for (let i = 0; i < maxPoints; i++) {
      const t = i / (maxPoints - 1);
      const pointOnPath1 = /** @type {SVGGeometryElement} */($path1).getPointAtLength(length1 * t);
      const pointOnPath2 = $path2.getPointAtLength(length2 * t);
      const prefix = isPath ? (i === 0 ? 'M' : 'L') : '';
      v1 += prefix + round(pointOnPath1.x, 3) + separator + pointOnPath1.y + ' ';
      v2 += prefix + round(pointOnPath2.x, 3) + separator + pointOnPath2.y + ' ';
    }
  }

  $path1[morphPointsSymbol] = v2;

  return [v1, v2];
};

/**
 * @param {SVGGeometryElement} [$el]
 * @return {Number}
 */
const getScaleFactor = $el => {
  let scaleFactor = 1;
  if ($el && $el.getCTM) {
    const ctm = $el.getCTM();
    if (ctm) {
      const scaleX = sqrt(ctm.a * ctm.a + ctm.b * ctm.b);
      const scaleY = sqrt(ctm.c * ctm.c + ctm.d * ctm.d);
      scaleFactor = (scaleX + scaleY) / 2;
    }
  }
  return scaleFactor;
};

/**
 * Creates a proxy that wraps an SVGGeometryElement and adds drawing functionality.
 * @param {SVGGeometryElement} $el - The SVG element to transform into a drawable
 * @param {number} start - Starting position (0-1)
 * @param {number} end - Ending position (0-1)
 * @return {DrawableSVGGeometry} - Returns a proxy that preserves the original element's type with additional 'draw' attribute functionality
 */
const createDrawableProxy = ($el, start, end) => {
  const pathLength = K;
  const computedStyles = getComputedStyle($el);
  const strokeLineCap = computedStyles.strokeLinecap;
  // @ts-ignore
  const $scalled = computedStyles.vectorEffect === 'non-scaling-stroke' ? $el : null;
  let currentCap = strokeLineCap;

  const proxy = new Proxy($el, {
    get(target, property) {
      const value = target[property];
      if (property === proxyTargetSymbol) return target;
      if (property === 'setAttribute') {
        return (...args) => {
          if (args[0] === 'draw') {
            const value = args[1];
            const values = value.split(' ');
            const v1 = +values[0];
            const v2 = +values[1];
            // TOTO: Benchmark if performing two slices is more performant than one split
            // const spaceIndex = value.indexOf(' ');
            // const v1 = round(+value.slice(0, spaceIndex), precision);
            // const v2 = round(+value.slice(spaceIndex + 1), precision);
            const scaleFactor = getScaleFactor($scalled);
            const os = v1 * -1e3 * scaleFactor;
            const d1 = (v2 * pathLength * scaleFactor) + os;
            const d2 = (pathLength * scaleFactor +
                      ((v1 === 0 && v2 === 1) || (v1 === 1 && v2 === 0) ? 0 : 10 * scaleFactor) - d1);
            if (strokeLineCap !== 'butt') {
              const newCap = v1 === v2 ? 'butt' : strokeLineCap;
              if (currentCap !== newCap) {
                target.style.strokeLinecap = `${newCap}`;
                currentCap = newCap;
              }
            }
            target.setAttribute('stroke-dashoffset', `${os}`);
            target.setAttribute('stroke-dasharray', `${d1} ${d2}`);
          }
          return Reflect.apply(value, target, args);
        };
      }

      if (isFnc(value)) {
        return (...args) => Reflect.apply(value, target, args);
      } else {
        return value;
      }
    }
  });

  if ($el.getAttribute('pathLength') !== `${pathLength}`) {
    $el.setAttribute('pathLength', `${pathLength}`);
    proxy.setAttribute('draw', `${start} ${end}`);
  }

  return /** @type {DrawableSVGGeometry} */(proxy);
};

/**
 * Creates drawable proxies for multiple SVG elements.
 * @param {TargetsParam} selector - CSS selector, SVG element, or array of elements and selectors
 * @param {number} [start=0] - Starting position (0-1)
 * @param {number} [end=0] - Ending position (0-1)
 * @return {Array<DrawableSVGGeometry>} - Array of proxied elements with drawing functionality
 */
const createDrawable = (selector, start = 0, end = 0) => {
  const els = parseTargets(selector);
  return els.map($el => createDrawableProxy(
    /** @type {SVGGeometryElement} */($el),
    start,
    end
  ));
};

// Motion path animation

/**
 * @param {SVGGeometryElement} $path
 * @param {Number} progress
 * @param {Number}lookup
 * @return {DOMPoint}
 */
const getPathPoint = ($path, progress, lookup = 0) => {
  return $path.getPointAtLength(progress + lookup >= 1 ? progress + lookup : 0);
};

/**
 * @param {SVGGeometryElement} $path
 * @param {String} pathProperty
 * @return {FunctionValue}
 */
const getPathProgess = ($path, pathProperty) => {
  return $el => {
    const totalLength = +($path.getTotalLength());
    const inSvg = $el[isSvgSymbol];
    const ctm = $path.getCTM();
    /** @type {TweenObjectValue} */
    return {
      from: 0,
      to: totalLength,
      /** @type {TweenModifier} */
      modifier: progress => {
        if (pathProperty === 'a') {
          const p0 = getPathPoint($path, progress, -1);
          const p1 = getPathPoint($path, progress, 1);
          return atan2(p1.y - p0.y, p1.x - p0.x) * 180 / PI;
        } else {
          const p = getPathPoint($path, progress, 0);
          return pathProperty === 'x' ?
            inSvg || !ctm ? p.x : p.x * ctm.a + p.y * ctm.c + ctm.e :
            inSvg || !ctm ? p.y : p.x * ctm.b + p.y * ctm.d + ctm.f
        }
      }
    }
  }
};

/**
 * @param {TargetsParam} path
 */
const createMotionPath = path => {
  const $path = getPath(path);
  if (!$path) return;
  return {
    translateX: getPathProgess($path, 'x'),
    translateY: getPathProgess($path, 'y'),
    rotate: getPathProgess($path, 'a'),
  }
};

// Check for valid SVG attribute

const cssReservedProperties = ['opacity', 'rotate', 'overflow', 'color'];

/**
 * @param  {Target} el
 * @param  {String} propertyName
 * @return {Boolean}
 */
const isValidSVGAttribute = (el, propertyName) => {
  // Return early and use CSS opacity animation instead (already better default values (opacity: 1 instead of 0)) and rotate should be considered a transform
  if (cssReservedProperties.includes(propertyName)) return false;
  if (el.getAttribute(propertyName) || propertyName in el) {
    if (propertyName === 'scale') { // Scale
      const elParentNode = /** @type {SVGGeometryElement} */(/** @type {DOMTarget} */(el).parentNode);
      // Only consider scale as a valid SVG attribute on filter element
      return elParentNode && elParentNode.tagName === 'filter';
    }
    return true;
  }
};

const svg = {
  morphTo,
  createMotionPath,
  createDrawable,
};




/**
 * RGB / RGBA Color value string -> RGBA values array
 * @param  {String} rgbValue
 * @return {ColorArray}
 */
const rgbToRgba = rgbValue => {
  const rgba = rgbExecRgx.exec(rgbValue) || rgbaExecRgx.exec(rgbValue);
  const a = !isUnd(rgba[4]) ? +rgba[4] : 1;
  return [
    +rgba[1],
    +rgba[2],
    +rgba[3],
    a
  ]
};

/**
 * HEX3 / HEX3A / HEX6 / HEX6A Color value string -> RGBA values array
 * @param  {String} hexValue
 * @return {ColorArray}
 */
const hexToRgba = hexValue => {
  const hexLength = hexValue.length;
  const isShort = hexLength === 4 || hexLength === 5;
  return [
    +('0x' + hexValue[1] + hexValue[isShort ? 1 : 2]),
    +('0x' + hexValue[isShort ? 2 : 3] + hexValue[isShort ? 2 : 4]),
    +('0x' + hexValue[isShort ? 3 : 5] + hexValue[isShort ? 3 : 6]),
    ((hexLength === 5 || hexLength === 9) ? +(+('0x' + hexValue[isShort ? 4 : 7] + hexValue[isShort ? 4 : 8]) / 255).toFixed(3) : 1)
  ]
};

/**
 * @param  {Number} p
 * @param  {Number} q
 * @param  {Number} t
 * @return {Number}
 */
const hue2rgb = (p, q, t) => {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  return t < 1 / 6 ? p + (q - p) * 6 * t :
         t < 1 / 2 ? q :
         t < 2 / 3 ? p + (q - p) * (2 / 3 - t) * 6 :
         p;
};

/**
 * HSL / HSLA Color value string -> RGBA values array
 * @param  {String} hslValue
 * @return {ColorArray}
 */
const hslToRgba = hslValue => {
  const hsla = hslExecRgx.exec(hslValue) || hslaExecRgx.exec(hslValue);
  const h = +hsla[1] / 360;
  const s = +hsla[2] / 100;
  const l = +hsla[3] / 100;
  const a = !isUnd(hsla[4]) ? +hsla[4] : 1;
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < .5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = round(hue2rgb(p, q, h + 1 / 3) * 255, 0);
    g = round(hue2rgb(p, q, h) * 255, 0);
    b = round(hue2rgb(p, q, h - 1 / 3) * 255, 0);
  }
  return [r, g, b, a];
};

/**
 * All in one color converter that converts a color string value into an array of RGBA values
 * @param  {String} colorString
 * @return {ColorArray}
 */
const convertColorStringValuesToRgbaArray = colorString => {
  return isRgb(colorString) ? rgbToRgba(colorString) :
         isHex(colorString) ? hexToRgba(colorString) :
         isHsl(colorString) ? hslToRgba(colorString) :
         [0, 0, 0, 1];
};




/**
 * @template T, D
 * @param {T|undefined} targetValue
 * @param {D} defaultValue
 * @return {T|D}
 */
const setValue = (targetValue, defaultValue) => {
  return isUnd(targetValue) ? defaultValue : targetValue;
};

/**
 * @param  {TweenPropValue} value
 * @param  {Target} target
 * @param  {Number} index
 * @param  {Number} total
 * @param  {Object} [store]
 * @return {any}
 */
const getFunctionValue = (value, target, index, total, store) => {
  if (isFnc(value)) {
    const func = () => {
      const computed = /** @type {Function} */(value)(target, index, total);
      // Fallback to 0 if the function returns undefined / NaN / null / false / 0
      return !isNaN(+computed) ? +computed : computed || 0;
    };
    if (store) {
      store.func = func;
    }
    return func();
  } else {
    return value;
  }
};

/**
 * @param  {Target} target
 * @param  {String} prop
 * @return {tweenTypes}
 */
const getTweenType = (target, prop) => {
  return !target[isDomSymbol] ? tweenTypes.OBJECT :
    // Handle SVG attributes
    target[isSvgSymbol] && isValidSVGAttribute(target, prop) ? tweenTypes.ATTRIBUTE :
    // Handle CSS Transform properties differently than CSS to allow individual animations
    validTransforms.includes(prop) || shortTransforms.get(prop) ? tweenTypes.TRANSFORM :
    // CSS variables
    stringStartsWith(prop, '--') ? tweenTypes.CSS_VAR :
    // All other CSS properties
    prop in /** @type {DOMTarget} */(target).style ? tweenTypes.CSS :
    // Handle other DOM Attributes
    prop in target ? tweenTypes.OBJECT :
    tweenTypes.ATTRIBUTE;
};

/**
 * @param  {DOMTarget} target
 * @param  {String} propName
 * @param  {Object} animationInlineStyles
 * @return {String}
 */
const getCSSValue = (target, propName, animationInlineStyles) => {
  const inlineStyles = target.style[propName];
  if (inlineStyles && animationInlineStyles) {
    animationInlineStyles[propName] = inlineStyles;
  }
  const value = inlineStyles || getComputedStyle(target[proxyTargetSymbol] || target).getPropertyValue(propName);
  return value === 'auto' ? '0' : value;
};

/**
 * @param {Target} target
 * @param {String} propName
 * @param {tweenTypes} [tweenType]
 * @param {Object|void} [animationInlineStyles]
 * @return {String|Number}
 */
const getOriginalAnimatableValue = (target, propName, tweenType, animationInlineStyles) => {
  const type = !isUnd(tweenType) ? tweenType : getTweenType(target, propName);
  return type === tweenTypes.OBJECT ? target[propName] || 0 :
         type === tweenTypes.ATTRIBUTE ? /** @type {DOMTarget} */(target).getAttribute(propName) :
         type === tweenTypes.TRANSFORM ? parseInlineTransforms(/** @type {DOMTarget} */(target), propName, animationInlineStyles) :
         type === tweenTypes.CSS_VAR ? getCSSValue(/** @type {DOMTarget} */(target), propName, animationInlineStyles).trimStart() :
         getCSSValue(/** @type {DOMTarget} */(target), propName, animationInlineStyles);
};

/**
 * @param  {Number} x
 * @param  {Number} y
 * @param  {String} operator
 * @return {Number}
 */
const getRelativeValue = (x, y, operator) => {
  return operator === '-' ? x - y :
         operator === '+' ? x + y :
         x * y;
};

/** @return {TweenDecomposedValue} */
const createDecomposedValueTargetObject = () => {
  return {
    /** @type {valueTypes} */
    t: valueTypes.NUMBER,
    n: 0,
    u: null,
    o: null,
    d: null,
    s: null,
  }
};

/**
 * @param  {String|Number} rawValue
 * @param  {TweenDecomposedValue} targetObject
 * @return {TweenDecomposedValue}
 */
const decomposeRawValue = (rawValue, targetObject) => {
  /** @type {valueTypes} */
  targetObject.t = valueTypes.NUMBER;
  targetObject.n = 0;
  targetObject.u = null;
  targetObject.o = null;
  targetObject.d = null;
  targetObject.s = null;
  if (!rawValue) return targetObject;
  const num = +rawValue;
  if (!isNaN(num)) {
    // It's a number
    targetObject.n = num;
    return targetObject;
  } else {
    // let str = /** @type {String} */(rawValue).trim();
    let str = /** @type {String} */(rawValue);
    // Parsing operators (+=, -=, *=) manually is much faster than using regex here
    if (str[1] === '=') {
      targetObject.o = str[0];
      str = str.slice(2);
    }
    // Skip exec regex if the value type is complex or color to avoid long regex backtracking
    const unitMatch = str.includes(' ') ? false : unitsExecRgx.exec(str);
    if (unitMatch) {
      // Has a number and a unit
      targetObject.t = valueTypes.UNIT;
      targetObject.n = +unitMatch[1];
      targetObject.u = unitMatch[2];
      return targetObject;
    } else if (targetObject.o) {
      // Has an operator (+=, -=, *=)
      targetObject.n = +str;
      return targetObject;
    } else if (isCol(str)) {
      // Is a color
      targetObject.t = valueTypes.COLOR;
      targetObject.d = convertColorStringValuesToRgbaArray(str);
      return targetObject;
    } else {
      // Is a more complex string (generally svg coords, calc() or filters CSS values)
      const matchedNumbers = str.match(digitWithExponentRgx);
      targetObject.t = valueTypes.COMPLEX;
      targetObject.d = matchedNumbers ? matchedNumbers.map(Number) : [];
      targetObject.s = str.split(digitWithExponentRgx) || [];
      return targetObject;
    }
  }
};

/**
 * @param  {Tween} tween
 * @param  {TweenDecomposedValue} targetObject
 * @return {TweenDecomposedValue}
 */
const decomposeTweenValue = (tween, targetObject) => {
  targetObject.t = tween._valueType;
  targetObject.n = tween._toNumber;
  targetObject.u = tween._unit;
  targetObject.o = null;
  targetObject.d = cloneArray(tween._toNumbers);
  targetObject.s = cloneArray(tween._strings);
  return targetObject;
};

const decomposedOriginalValue = createDecomposedValueTargetObject();




const lookups = {
  /** @type {TweenReplaceLookups} */
  _rep: new WeakMap(),
  /** @type {TweenAdditiveLookups} */
  _add: new Map(),
};

/**
 * @param  {Target} target
 * @param  {String} property
 * @param  {String} lookup
 * @return {TweenPropertySiblings}
 */
const getTweenSiblings = (target, property, lookup = '_rep') => {
  const lookupMap = lookups[lookup];
  let targetLookup = lookupMap.get(target);
  if (!targetLookup) {
    targetLookup = {};
    lookupMap.set(target, targetLookup);
  }
  return targetLookup[property] ? targetLookup[property] : targetLookup[property] = {
    _head: null,
    _tail: null,
  }
};

/**
 * @param  {Tween} p
 * @param  {Tween} c
 * @return {Number|Boolean}
 */
const addTweenSortMethod = (p, c) => {
  return p._isOverridden || p._absoluteStartTime > c._absoluteStartTime;
};

/**
 * @param {Tween} tween
 */
const overrideTween = tween => {
  tween._isOverlapped = 1;
  tween._isOverridden = 1;
  tween._changeDuration = minValue;
  tween._currentTime = minValue;
};

/**
 * @param  {Tween} tween
 * @param  {TweenPropertySiblings} siblings
 * @return {Tween}
 */
const composeTween = (tween, siblings) => {

  const tweenCompositionType = tween._composition;

  // Handle replaced tweens

  if (tweenCompositionType === compositionTypes.replace) {

    const tweenAbsStartTime = tween._absoluteStartTime;

    addChild(siblings, tween, addTweenSortMethod, '_prevRep', '_nextRep');

    const prevSibling = tween._prevRep;

    // Update the previous siblings for composition replace tweens

    if (prevSibling) {

      const prevParent = prevSibling.parent;
      const prevAbsEndTime = prevSibling._absoluteStartTime + prevSibling._changeDuration;

      // Handle looped animations tween

      if (
        // Check if the previous tween is from a different animation
        tween.parent.id !== prevParent.id &&
        // Check if the animation has loops
        prevParent.iterationCount> 1 &&
        // Check if _absoluteChangeEndTime of last loop overlaps the current tween
        prevAbsEndTime + (prevParent.duration - prevParent.iterationDuration) > tweenAbsStartTime
      ) {

        // TODO: Find a way to only override the iterations overlapping with the tween
        overrideTween(prevSibling);

        let prevPrevSibling = prevSibling._prevRep;

        // If the tween was part of a set of keyframes, override its siblings
        while (prevPrevSibling && prevPrevSibling.parent.id === prevParent.id) {
          overrideTween(prevPrevSibling);
          prevPrevSibling = prevPrevSibling._prevRep;
        }

      }

      const absoluteUpdateStartTime = tweenAbsStartTime - tween._delay;

      if (prevAbsEndTime > absoluteUpdateStartTime) {

        const prevChangeStartTime = prevSibling._startTime;
        const prevTLOffset = prevAbsEndTime - (prevChangeStartTime + prevSibling._updateDuration);

        prevSibling._changeDuration = absoluteUpdateStartTime - prevTLOffset - prevChangeStartTime;
        prevSibling._currentTime = prevSibling._changeDuration;
        prevSibling._isOverlapped = 1;

        if (prevSibling._changeDuration < minValue) {
          overrideTween(prevSibling);
        }
      }

      // Pause (and cancel) the parent if it only contains overlapped tweens

      let pausePrevParentAnimation = true;

      forEachChildren(prevParent, (/** @type Tween */t) => {
        if (!t._isOverlapped) pausePrevParentAnimation = false;
      });

      if (pausePrevParentAnimation) {
        const prevParentTL = prevParent.parent;
        if (prevParentTL) {
          let pausePrevParentTL = true;
          forEachChildren(prevParentTL, (/** @type JSAnimation */a) => {
            if (a !== prevParent) {
              forEachChildren(a, (/** @type Tween */t) => {
                if (!t._isOverlapped) pausePrevParentTL = false;
              });
            }
          });
          if (pausePrevParentTL) {
            prevParentTL.cancel();
          }
        } else {
          prevParent.cancel();
          // Previously, calling .cancel() on a timeline child would affect the render order of other children
          // Worked around this by marking it as .completed and using .pause() for safe removal in the engine loop
          // This is no longer needed since timeline tween composition is now handled separatly
          // Keeping this here for reference
          // prevParent.completed = true;
          // prevParent.pause();
        }
      }

    }

    // let nextSibling = tween._nextRep;

    // // All the next siblings are automatically overridden

    // if (nextSibling && nextSibling._absoluteStartTime >= tweenAbsStartTime) {
    //   while (nextSibling) {
    //     overrideTween(nextSibling);
    //     nextSibling = nextSibling._nextRep;
    //   }
    // }

    // if (nextSibling && nextSibling._absoluteStartTime < tweenAbsStartTime) {
    //   while (nextSibling) {
    //     overrideTween(nextSibling);
    //     console.log(tween.id, nextSibling.id);
    //     nextSibling = nextSibling._nextRep;
    //   }
    // }

  // Handle additive tweens composition

  } else if (tweenCompositionType === compositionTypes.blend) {

    const additiveTweenSiblings = getTweenSiblings(tween.target, tween.property, '_add');
    const additiveAnimation = addAdditiveAnimation(lookups._add);

    let lookupTween = additiveTweenSiblings._head;

    if (!lookupTween) {
      lookupTween = { ...tween };
      lookupTween._composition = compositionTypes.replace;
      lookupTween._updateDuration = minValue;
      lookupTween._startTime = 0;
      lookupTween._numbers = cloneArray(tween._fromNumbers);
      lookupTween._number = 0;
      lookupTween._next = null;
      lookupTween._prev = null;
      addChild(additiveTweenSiblings, lookupTween);
      addChild(additiveAnimation, lookupTween);
    }

    // Convert the values of TO to FROM and set TO to 0

    const toNumber = tween._toNumber;
    tween._fromNumber = lookupTween._fromNumber - toNumber;
    tween._toNumber = 0;
    tween._numbers = cloneArray(tween._fromNumbers);
    tween._number = 0;
    lookupTween._fromNumber = toNumber;

    if (tween._toNumbers) {
      const toNumbers = cloneArray(tween._toNumbers);
      if (toNumbers) {
        toNumbers.forEach((value, i) => {
          tween._fromNumbers[i] = lookupTween._fromNumbers[i] - value;
          tween._toNumbers[i] = 0;
        });
      }
      lookupTween._fromNumbers = toNumbers;
    }

    addChild(additiveTweenSiblings, tween, null, '_prevAdd', '_nextAdd');

  }

  return tween;

};

/**
 * @param  {Tween} tween
 * @return {Tween}
 */
const removeTweenSliblings = tween => {
  const tweenComposition = tween._composition;
  if (tweenComposition !== compositionTypes.none) {
    const tweenTarget = tween.target;
    const tweenProperty = tween.property;
    const replaceTweensLookup = lookups._rep;
    const replaceTargetProps = replaceTweensLookup.get(tweenTarget);
    const tweenReplaceSiblings = replaceTargetProps[tweenProperty];
    removeChild(tweenReplaceSiblings, tween, '_prevRep', '_nextRep');
    if (tweenComposition === compositionTypes.blend) {
      const addTweensLookup = lookups._add;
      const addTargetProps = addTweensLookup.get(tweenTarget);
      if (!addTargetProps) return;
      const additiveTweenSiblings = addTargetProps[tweenProperty];
      const additiveAnimation = additive.animation;
      removeChild(additiveTweenSiblings, tween, '_prevAdd', '_nextAdd');
      // If only one tween is left in the additive lookup, it's the tween lookup
      const lookupTween = additiveTweenSiblings._head;
      if (lookupTween && lookupTween === additiveTweenSiblings._tail) {
        removeChild(additiveTweenSiblings, lookupTween, '_prevAdd', '_nextAdd');
        removeChild(additiveAnimation, lookupTween);
        let shouldClean = true;
        for (let prop in addTargetProps) {
          if (addTargetProps[prop]._head) {
            shouldClean = false;
            break;
          }
        }
        if (shouldClean) {
          addTweensLookup.delete(tweenTarget);
        }
      }
    }
  }
  return tween;
};




/**
 * @param  {Timer} timer
 * @return {Timer}
 */
const resetTimerProperties = timer => {
  timer.paused = true;
  timer.began = false;
  timer.completed = false;
  return timer;
};

/**
 * @param  {Timer} timer
 * @return {Timer}
 */
const reviveTimer = timer => {
  if (!timer._cancelled) return timer;
  if (timer._hasChildren) {
    forEachChildren(timer, reviveTimer);
  } else {
    forEachChildren(timer, (/** @type {Tween} tween*/tween) => {
      if (tween._composition !== compositionTypes.none) {
        composeTween(tween, getTweenSiblings(tween.target, tween.property));
      }
    });
  }
  timer._cancelled = 0;
  return timer;
};

let timerId = 0;

/**
 * Base class used to create Timers, Animations and Timelines
 */
class Timer extends Clock {
  /**
   * @param {TimerParams} [parameters]
   * @param {Timeline} [parent]
   * @param {Number} [parentPosition]
   */
  constructor(parameters = {}, parent = null, parentPosition = 0) {

    super(0);

    const {
      id,
      delay,
      duration,
      reversed,
      alternate,
      loop,
      loopDelay,
      autoplay,
      frameRate,
      playbackRate,
      onComplete,
      onLoop,
      onPause,
      onBegin,
      onBeforeUpdate,
      onUpdate,
    } = parameters;

    if (globals.scope) globals.scope.revertibles.push(this);

    const timerInitTime = parent ? 0 : engine._elapsedTime;
    const timerDefaults = parent ? parent.defaults : globals.defaults;
    const timerDelay = /** @type {Number} */(isFnc(delay) || isUnd(delay) ? timerDefaults.delay : +delay);
    const timerDuration = isFnc(duration) || isUnd(duration) ? Infinity : +duration;
    const timerLoop = setValue(loop, timerDefaults.loop);
    const timerLoopDelay = setValue(loopDelay, timerDefaults.loopDelay);
    const timerIterationCount = timerLoop === true ||
                                timerLoop === Infinity ||
                                /** @type {Number} */(timerLoop) < 0 ? Infinity :
                                /** @type {Number} */(timerLoop) + 1;

    let offsetPosition = 0;

    if (parent) {
      offsetPosition = parentPosition;
    } else {
      let startTime = now();
      // Make sure to tick the engine once if suspended to avoid big gaps with the following offsetPosition calculation
      if (engine.paused) {
        engine.requestTick(startTime);
        startTime = engine._elapsedTime;
      }
      offsetPosition = startTime - engine._startTime;
    }

    // Timer's parameters
    this.id = !isUnd(id) ? id : ++timerId;
    /** @type {Timeline} */
    this.parent = parent;
    // Total duration of the timer
    this.duration = clampInfinity(((timerDuration + timerLoopDelay) * timerIterationCount) - timerLoopDelay) || minValue;
    /** @type {Boolean} */
    this.backwards = false;
    /** @type {Boolean} */
    this.paused = true;
    /** @type {Boolean} */
    this.began = false;
    /** @type {Boolean} */
    this.completed = false;
    /** @type {Callback<this>} */
    this.onBegin = onBegin || timerDefaults.onBegin;
    /** @type {Callback<this>} */
    this.onBeforeUpdate = onBeforeUpdate || timerDefaults.onBeforeUpdate;
    /** @type {Callback<this>} */
    this.onUpdate = onUpdate || timerDefaults.onUpdate;
    /** @type {Callback<this>} */
    this.onLoop = onLoop || timerDefaults.onLoop;
    /** @type {Callback<this>} */
    this.onPause = onPause || timerDefaults.onPause;
    /** @type {Callback<this>} */
    this.onComplete = onComplete || timerDefaults.onComplete;
    /** @type {Number} */
    this.iterationDuration = timerDuration; // Duration of one loop
    /** @type {Number} */
    this.iterationCount = timerIterationCount; // Number of loops
    /** @type {Boolean|ScrollObserver} */
    this._autoplay = parent ? false : setValue(autoplay, timerDefaults.autoplay);
    /** @type {Number} */
    this._offset = offsetPosition;
    /** @type {Number} */
    this._delay = timerDelay;
    /** @type {Number} */
    this._loopDelay = timerLoopDelay;
    /** @type {Number} */
    this._iterationTime = 0;
    /** @type {Number} */
    this._currentIteration = 0; // Current loop index
    /** @type {Function} */
    this._resolve = noop; // Used by .then()
    /** @type {Boolean} */
    this._running = false;
    /** @type {Number} */
    this._reversed = +setValue(reversed, timerDefaults.reversed);
    /** @type {Number} */
    this._reverse = this._reversed;
    /** @type {Number} */
    this._cancelled = 0;
    /** @type {Boolean} */
    this._alternate = setValue(alternate, timerDefaults.alternate);
    /** @type {Renderable} */
    this._prev = null;
    /** @type {Renderable} */
    this._next = null;

    // Clock's parameters
    /** @type {Number} */
    this._elapsedTime = timerInitTime;
    /** @type {Number} */
    this._startTime = timerInitTime;
    /** @type {Number} */
    this._lastTime = timerInitTime;
    /** @type {Number} */
    this._fps = setValue(frameRate, timerDefaults.frameRate);
    /** @type {Number} */
    this._speed = setValue(playbackRate, timerDefaults.playbackRate);
  }

  get cancelled() {
    return !!this._cancelled;
  }

  /** @param {Boolean} cancelled  */
  set cancelled(cancelled) {
    cancelled ? this.cancel() : this.reset(1).play();
  }

  get currentTime() {
    return clamp(round(this._currentTime, globals.precision), -this._delay, this.duration);
  }

  /** @param {Number} time  */
  set currentTime(time) {
    const paused = this.paused;
    // Pausing the timer is necessary to avoid time jumps on a running instance
    this.pause().seek(+time);
    if (!paused) this.resume();
  }

  get iterationCurrentTime() {
    return round(this._iterationTime, globals.precision);
  }

  /** @param {Number} time  */
  set iterationCurrentTime(time) {
    this.currentTime = (this.iterationDuration * this._currentIteration) + time;
  }

  get progress() {
    return clamp(round(this._currentTime / this.duration, 5), 0, 1);
  }

  /** @param {Number} progress  */
  set progress(progress) {
    this.currentTime = this.duration * progress;
  }

  get iterationProgress() {
    return clamp(round(this._iterationTime / this.iterationDuration, 5), 0, 1);
  }

  /** @param {Number} progress  */
  set iterationProgress(progress) {
    const iterationDuration = this.iterationDuration;
    this.currentTime = (iterationDuration * this._currentIteration) + (iterationDuration * progress);
  }

  get currentIteration() {
    return this._currentIteration;
  }

  /** @param {Number} iterationCount  */
  set currentIteration(iterationCount) {
    this.currentTime = (this.iterationDuration * clamp(+iterationCount, 0, this.iterationCount - 1));
  }

  get reversed() {
    return !!this._reversed;
  }

  /** @param {Boolean} reverse  */
  set reversed(reverse) {
    reverse ? this.reverse() : this.play();
  }

  get speed() {
    return super.speed;
  }

  /** @param {Number} playbackRate  */
  set speed(playbackRate) {
    super.speed = playbackRate;
    this.resetTime();
  }

  /**
   * @param  {Number} internalRender
   * @return {this}
   */
  reset(internalRender = 0) {
    // If cancelled, revive the timer before rendering in order to have propertly composed tweens siblings
    reviveTimer(this);
    if (this._reversed && !this._reverse) this.reversed = false;
    // Rendering before updating the completed flag to prevent skips and to make sure the properties are not overridden
    // Setting the iterationTime at the end to force the rendering to happend backwards, otherwise calling .reset() on Timelines might not render children in the right order
    // NOTE: This is only required for Timelines and might be better to move to the Timeline class?
    this._iterationTime = this.iterationDuration;
    // Set tickMode to tickModes.FORCE to force rendering
    tick(this, 0, 1, internalRender, tickModes.FORCE);
    // Reset timer properties after revive / render to make sure the props are not updated again
    resetTimerProperties(this);
    // Also reset children properties
    if (this._hasChildren) {
      forEachChildren(this, resetTimerProperties);
    }
    return this;
  }

  /**
   * @param  {Number} internalRender
   * @return {this}
   */
  init(internalRender = 0) {
    this.fps = this._fps;
    this.speed = this._speed;
    // Manually calling .init() on timelines should render all children intial state
    // Forces all children to render once then render to 0 when reseted
    if (!internalRender && this._hasChildren) {
      tick(this, this.duration, 1, internalRender, tickModes.FORCE);
    }
    this.reset(internalRender);
    // Make sure to set autoplay to false to child timers so it doesn't attempt to autoplay / link
    const autoplay = this._autoplay;
    if (autoplay === true) {
      this.resume();
    } else if (autoplay && !isUnd(/** @type {ScrollObserver} */(autoplay).linked)) {
      /** @type {ScrollObserver} */(autoplay).link(this);
    }
    return this;
  }

  /** @return {this} */
  resetTime() {
    const timeScale = 1 / (this._speed * engine._speed);
    this._startTime = now() - (this._currentTime + this._delay) * timeScale;
    return this;
  }

  /** @return {this} */
  pause() {
    if (this.paused) return this;
    this.paused = true;
    this.onPause(this);
    return this;
  }

  /** @return {this} */
  resume() {
    if (!this.paused) return this;
    this.paused = false;
    // We can safely imediatly render a timer that has no duration and no children
    if (this.duration <= minValue && !this._hasChildren) {
      tick(this, minValue, 0, 0, tickModes.FORCE);
    } else {
      if (!this._running) {
        addChild(engine, this);
        engine._hasChildren = true;
        this._running = true;
      }
      this.resetTime();
      // Forces the timer to advance by at least one frame when the next tick occurs
      this._startTime -= 12;
      engine.wake();
    }
    return this;
  }

  /** @return {this} */
  restart() {
    return this.reset(0).resume();
  }

  /**
   * @param  {Number} time
   * @param  {Boolean|Number} [muteCallbacks]
   * @param  {Boolean|Number} [internalRender]
   * @return {this}
   */
  seek(time, muteCallbacks = 0, internalRender = 0) {
    // Recompose the tween siblings in case the timer has been cancelled
    reviveTimer(this);
    // If you seek a completed animation, otherwise the next play will starts at 0
    this.completed = false;
    const isPaused = this.paused;
    this.paused = true;
    // timer, time, muteCallbacks, internalRender, tickMode
    tick(this, time + this._delay, ~~muteCallbacks, ~~internalRender, tickModes.AUTO);
    return isPaused ? this : this.resume();
  }

  /** @return {this} */
  alternate() {
    const reversed = this._reversed;
    const count = this.iterationCount;
    const duration = this.iterationDuration;
    // Calculate the maximum iterations possible given the iteration duration
    const iterations = count === Infinity ? floor(maxValue / duration) : count;
    this._reversed = +(this._alternate && !(iterations % 2) ? reversed : !reversed);
    if (count === Infinity) {
      // Handle infinite loops to loop on themself
      this.iterationProgress = this._reversed ? 1 - this.iterationProgress : this.iterationProgress;
    } else {
      this.seek((duration * iterations) - this._currentTime);
    }
    this.resetTime();
    return this;
  }

  /** @return {this} */
  play() {
    if (this._reversed) this.alternate();
    return this.resume();
  }

  /** @return {this} */
  reverse() {
    if (!this._reversed) this.alternate();
    return this.resume();
  }

  // TODO: Move all the animation / tweens / children related code to Animation / Timeline

  /** @return {this} */
  cancel() {
    if (this._hasChildren) {
      forEachChildren(this, (/** @type {Renderable} */child) => child.cancel(), true);
    } else {
      forEachChildren(this, removeTweenSliblings);
    }
    this._cancelled = 1;
    // Pausing the timer removes it from the engine
    return this.pause();
  }

  /**
   * @param  {Number} newDuration
   * @return {this}
   */
  stretch(newDuration) {
    const currentDuration = this.duration;
    const normlizedDuration = normalizeTime(newDuration);
    if (currentDuration === normlizedDuration) return this;
    const timeScale = newDuration / currentDuration;
    const isSetter = newDuration <= minValue;
    this.duration = isSetter ? minValue : normlizedDuration;
    this.iterationDuration = isSetter ? minValue : normalizeTime(this.iterationDuration * timeScale);
    this._offset *= timeScale;
    this._delay *= timeScale;
    this._loopDelay *= timeScale;
    return this;
  }

 /**
   * Cancels the timer by seeking it back to 0 and reverting the attached scroller if necessary
   * @return {this}
   */
  revert() {
    tick(this, 0, 1, 0, tickModes.AUTO);
    const ap = /** @type {ScrollObserver} */(this._autoplay);
    if (ap && ap.linked && ap.linked === this) ap.revert();
    return this.cancel();
  }

 /**
   * Imediatly completes the timer, cancels it and triggers the onComplete callback
   * @return {this}
   */
  complete() {
    return this.seek(this.duration).cancel();
  }

  /**
   * @param  {Callback<this>} [callback]
   * @return {Promise}
   */
  then(callback = noop) {
    const then = this.then;
    const onResolve = () => {
      // this.then = null prevents infinite recursion if returned by an async function
      // https://github.com/juliangarnierorg/anime-beta/issues/26
      this.then = null;
      callback(this);
      this.then = then;
      this._resolve = noop;
    };
    return new Promise(r => {
      this._resolve = () => r(onResolve());
      // Make sure to resolve imediatly if the timer has already completed
      if (this.completed) this._resolve();
      return this;
    });
  }

}


/**
 * @param {TimerParams} [parameters]
 * @return {Timer}
 */
const createTimer = parameters => new Timer(parameters, null, 0).init();




/** @type {EasingFunction} */
const none = t => t;

// Cubic Bezier solver adapted from https://github.com/gre/bezier-ease © Gaëtan Renaudeau

/**
 * @param  {Number} aT
 * @param  {Number} aA1
 * @param  {Number} aA2
 * @return {Number}
 */
const calcBezier = (aT, aA1, aA2) => (((1 - 3 * aA2 + 3 * aA1) * aT + (3 * aA2 - 6 * aA1)) * aT + (3 * aA1)) * aT;

/**
 * @param  {Number} aX
 * @param  {Number} mX1
 * @param  {Number} mX2
 * @return {Number}
 */
const binarySubdivide = (aX, mX1, mX2) => {
  let aA = 0, aB = 1, currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (abs(currentX) > .0000001 && ++i < 100);
  return currentT;
};

/**
 * @param  {Number} [mX1]
 * @param  {Number} [mY1]
 * @param  {Number} [mX2]
 * @param  {Number} [mY2]
 * @return {EasingFunction}
 */

const cubicBezier = (mX1 = 0.5, mY1 = 0.0, mX2 = 0.5, mY2 = 1.0) => (mX1 === mY1 && mX2 === mY2) ? none :
  t => t === 0 || t === 1 ? t :
  calcBezier(binarySubdivide(t, mX1, mX2), mY1, mY2);

/**
 * Steps ease implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function
 * Only covers 'end' and 'start' jumpterms
 * @param  {Number} steps
 * @param  {Boolean} [fromStart]
 * @return {EasingFunction}
 */
const steps = (steps = 10, fromStart) => {
  const roundMethod = fromStart ? ceil : floor;
  return t => roundMethod(clamp(t, 0, 1) * steps) * (1 / steps);
};

/**
 * Without parameters, the linear function creates a non-eased transition.
 * Parameters, if used, creates a piecewise linear easing by interpolating linearly between the specified points.
 * @param  {...String|Number} [args] - Points
 * @return {EasingFunction}
 */
const linear = (...args) => {
  const argsLength = args.length;
  if (!argsLength) return none;
  const totalPoints = argsLength - 1;
  const firstArg = args[0];
  const lastArg = args[totalPoints];
  const xPoints = [0];
  const yPoints = [parseNumber(firstArg)];
  for (let i = 1; i < totalPoints; i++) {
    const arg = args[i];
    const splitValue = isStr(arg) ?
    /** @type {String} */(arg).trim().split(' ') :
    [arg];
    const value = splitValue[0];
    const percent = splitValue[1];
    xPoints.push(!isUnd(percent) ? parseNumber(percent) / 100 : i / totalPoints);
    yPoints.push(parseNumber(value));
  }
  yPoints.push(parseNumber(lastArg));
  xPoints.push(1);
  return function easeLinear(t) {
    for (let i = 1, l = xPoints.length; i < l; i++) {
      const currentX = xPoints[i];
      if (t <= currentX) {
        const prevX = xPoints[i - 1];
        const prevY = yPoints[i - 1];
        return prevY + (yPoints[i] - prevY) * (t - prevX) / (currentX - prevX);
      }
    }
    return yPoints[yPoints.length - 1];
  }
};

/**
 * Generate random steps
 * @param  {Number} [length] - The number of steps
 * @param  {Number} [randomness] - How strong the randomness is
 * @return {EasingFunction}
 */
const irregular = (length = 10, randomness = 1) => {
  const values = [0];
  const total = length - 1;
  for (let i = 1; i < total; i++) {
    const previousValue = values[i - 1];
    const spacing = i / total;
    const segmentEnd = (i + 1) / total;
    const randomVariation = spacing + (segmentEnd - spacing) * Math.random();
    // Mix the even spacing and random variation based on the randomness parameter
    const randomValue = spacing * (1 - randomness) + randomVariation * randomness;
    values.push(clamp(randomValue, previousValue, 1));
  }
  values.push(1);
  return linear(...values);
};

// Easing functions adapted from http://www.robertpenner.com/ease © Robert Penner

/**
 * @callback PowerEasing
 * @param {Number|String} [power=1.675]
 * @return {EasingFunction}
 */

/**
 * @callback BackEasing
 * @param {Number|String} [overshoot=1.70158]
 * @return {EasingFunction}
 */

/**
 * @callback ElasticEasing
 * @param {Number|String} [amplitude=1]
 * @param {Number|String} [period=.3]
 * @return {EasingFunction}
 */

/**
 * @callback EaseFactory
 * @param {Number|String} [paramA]
 * @param {Number|String} [paramB]
 * @return {EasingFunction|Number}
 */

/** @typedef {PowerEasing|BackEasing|ElasticEasing} EasesFactory */

const halfPI = PI / 2;
const doublePI = PI * 2;
/** @type {PowerEasing} */
const easeInPower = (p = 1.68) => t => pow(t, +p);

/** @type {Record<String, EasesFactory|EasingFunction>} */
const easeInFunctions = {
  [emptyString]: easeInPower,
  Quad: easeInPower(2),
  Cubic: easeInPower(3),
  Quart: easeInPower(4),
  Quint: easeInPower(5),
  /** @type {EasingFunction} */
  Sine: t => 1 - cos(t * halfPI),
  /** @type {EasingFunction} */
  Circ: t => 1 - sqrt(1 - t * t),
  /** @type {EasingFunction} */
  Expo: t => t ? pow(2, 10 * t - 10) : 0,
  /** @type {EasingFunction} */
  Bounce: t => {
    let pow2, b = 4;
    while (t < ((pow2 = pow(2, --b)) - 1) / 11);
    return 1 / pow(4, 3 - b) - 7.5625 * pow((pow2 * 3 - 2) / 22 - t, 2);
  },
  /** @type {BackEasing} */
  Back: (overshoot = 1.70158) => t => (+overshoot + 1) * t * t * t - +overshoot * t * t,
  /** @type {ElasticEasing} */
  Elastic: (amplitude = 1, period = .3) => {
    const a = clamp(+amplitude, 1, 10);
    const p = clamp(+period, minValue, 2);
    const s = (p / doublePI) * asin(1 / a);
    const e = doublePI / p;
    return t => t === 0 || t === 1 ? t : -a * pow(2, -10 * (1 - t)) * sin(((1 - t) - s) * e);
  }
};

/**
 * @callback EaseType
 * @param {EasingFunction} Ease
 * @return {EasingFunction}
 */

/** @type {Record<String, EaseType>} */
const easeTypes = {
  in: easeIn => t => easeIn(t),
  out: easeIn => t => 1 - easeIn(1 - t),
  inOut: easeIn => t => t < .5 ? easeIn(t * 2) / 2 : 1 - easeIn(t * -2 + 2) / 2,
  outIn: easeIn => t => t < .5 ? (1 - easeIn(1 - t * 2)) / 2 : (easeIn(t * 2 - 1) + 1) / 2,
};

/**
 * @param  {String} string
 * @param  {Record<String, EasesFactory|EasingFunction>} easesFunctions
 * @param  {Object} easesLookups
 * @return {EasingFunction}
 */
const parseEaseString = (string, easesFunctions, easesLookups) => {
  if (easesLookups[string]) return easesLookups[string];
  if (string.indexOf('(') <= -1) {
    const hasParams = easeTypes[string] || string.includes('Back') || string.includes('Elastic');
    const parsedFn = /** @type {EasingFunction} */(hasParams ? /** @type {EasesFactory} */(easesFunctions[string])() : easesFunctions[string]);
    return parsedFn ? easesLookups[string] = parsedFn : none;
  } else {
    const split = string.slice(0, -1).split('(');
    const parsedFn = /** @type {EasesFactory} */(easesFunctions[split[0]]);
    return parsedFn ? easesLookups[string] = parsedFn(...split[1].split(',')) : none;
  }
};

/**
 * @typedef  {Object} EasesFunctions
 * @property {typeof linear} linear
 * @property {typeof irregular} irregular
 * @property {typeof steps} steps
 * @property {typeof cubicBezier} cubicBezier
 * @property {PowerEasing} in
 * @property {PowerEasing} out
 * @property {PowerEasing} inOut
 * @property {PowerEasing} outIn
 * @property {EasingFunction} inQuad
 * @property {EasingFunction} outQuad
 * @property {EasingFunction} inOutQuad
 * @property {EasingFunction} outInQuad
 * @property {EasingFunction} inCubic
 * @property {EasingFunction} outCubic
 * @property {EasingFunction} inOutCubic
 * @property {EasingFunction} outInCubic
 * @property {EasingFunction} inQuart
 * @property {EasingFunction} outQuart
 * @property {EasingFunction} inOutQuart
 * @property {EasingFunction} outInQuart
 * @property {EasingFunction} inQuint
 * @property {EasingFunction} outQuint
 * @property {EasingFunction} inOutQuint
 * @property {EasingFunction} outInQuint
 * @property {EasingFunction} inSine
 * @property {EasingFunction} outSine
 * @property {EasingFunction} inOutSine
 * @property {EasingFunction} outInSine
 * @property {EasingFunction} inCirc
 * @property {EasingFunction} outCirc
 * @property {EasingFunction} inOutCirc
 * @property {EasingFunction} outInCirc
 * @property {EasingFunction} inExpo
 * @property {EasingFunction} outExpo
 * @property {EasingFunction} inOutExpo
 * @property {EasingFunction} outInExpo
 * @property {EasingFunction} inBounce
 * @property {EasingFunction} outBounce
 * @property {EasingFunction} inOutBounce
 * @property {EasingFunction} outInBounce
 * @property {BackEasing} inBack
 * @property {BackEasing} outBack
 * @property {BackEasing} inOutBack
 * @property {BackEasing} outInBack
 * @property {ElasticEasing} inElastic
 * @property {ElasticEasing} outElastic
 * @property {ElasticEasing} inOutElastic
 * @property {ElasticEasing} outInElastic
 */

const eases = (/*#__PURE__*/ (() => {
  const list = { linear, irregular, steps, cubicBezier };
  for (let type in easeTypes) {
    for (let name in easeInFunctions) {
      const easeIn = easeInFunctions[name];
      const easeType = easeTypes[type];
      list[type + name] = /** @type {EasesFactory|EasingFunction} */(
        name === emptyString || name === 'Back' || name === 'Elastic' ?
        (a, b) => easeType(/** @type {EasesFactory} */(easeIn)(a, b)) :
        easeType(/** @type {EasingFunction} */(easeIn))
      );
    }
  }
  return /** @type {EasesFunctions} */(list);
})());

/** @type {Record<String, EasingFunction>} */
const JSEasesLookups = { linear: none };

/**
 * @param  {EasingParam} ease
 * @return {EasingFunction}
 */
const parseEasings = ease => isFnc(ease) ? ease :
  isStr(ease) ? parseEaseString(/** @type {String} */(ease), eases, JSEasesLookups) :
  none;




const propertyNamesCache = {};

/**
 * @param  {String} propertyName
 * @param  {Target} target
 * @param  {tweenTypes} tweenType
 * @return {String}
 */
const sanitizePropertyName = (propertyName, target, tweenType) => {
  if (tweenType === tweenTypes.TRANSFORM) {
    const t = shortTransforms.get(propertyName);
    return t ? t : propertyName;
  } else if (
    tweenType === tweenTypes.CSS ||
    // Handle special cases where properties like "strokeDashoffset" needs to be set as "stroke-dashoffset"
    // but properties like "baseFrequency" should stay in lowerCamelCase
    (tweenType === tweenTypes.ATTRIBUTE && (isSvg(target) && propertyName in /** @type {DOMTarget} */(target).style))
  ) {
    const cachedPropertyName = propertyNamesCache[propertyName];
    if (cachedPropertyName) {
      return cachedPropertyName;
    } else {
      const lowerCaseName = propertyName ? toLowerCase(propertyName) : propertyName;
      propertyNamesCache[propertyName] = lowerCaseName;
      return lowerCaseName;
    }
  } else {
    return propertyName;
  }
};




const angleUnitsMap = { 'deg': 1, 'rad': 180 / PI, 'turn': 360 };
const convertedValuesCache = {};

/**
 * @param  {DOMTarget} el
 * @param  {TweenDecomposedValue} decomposedValue
 * @param  {String} unit
 * @param  {Boolean} [force]
 * @return {TweenDecomposedValue}
 */
const convertValueUnit = (el, decomposedValue, unit, force = false) => {
  const currentUnit = decomposedValue.u;
  const currentNumber = decomposedValue.n;
  if (decomposedValue.t === valueTypes.UNIT && currentUnit === unit) { // TODO: Check if checking against the same unit string is necessary
    return decomposedValue;
  }
  const cachedKey = currentNumber + currentUnit + unit;
  const cached = convertedValuesCache[cachedKey];
  if (!isUnd(cached) && !force) {
    decomposedValue.n = cached;
  } else {
    let convertedValue;
    if (currentUnit in angleUnitsMap) {
      convertedValue = currentNumber * angleUnitsMap[currentUnit] / angleUnitsMap[unit];
    } else {
      const baseline = 100;
      const tempEl = /** @type {DOMTarget} */(el.cloneNode());
      const parentNode = el.parentNode;
      const parentEl = (parentNode && (parentNode !== doc)) ? parentNode : doc.body;
      parentEl.appendChild(tempEl);
      const elStyle = tempEl.style;
      elStyle.width = baseline + currentUnit;
      const currentUnitWidth = /** @type {HTMLElement} */(tempEl).offsetWidth || baseline;
      elStyle.width = baseline + unit;
      const newUnitWidth = /** @type {HTMLElement} */(tempEl).offsetWidth || baseline;
      const factor = currentUnitWidth / newUnitWidth;
      parentEl.removeChild(tempEl);
      convertedValue = factor * currentNumber;
    }
    decomposedValue.n = convertedValue;
    convertedValuesCache[cachedKey] = convertedValue;
  }
  decomposedValue.t === valueTypes.UNIT;
  decomposedValue.u = unit;
  return decomposedValue;
};




/**
 * @template {Renderable} T
 * @param {T} renderable
 * @return {T}
 */
const cleanInlineStyles = renderable => {
  // Allow cleanInlineStyles() to be called on timelines
  if (renderable._hasChildren) {
    forEachChildren(renderable, cleanInlineStyles, true);
  } else {
    const animation = /** @type {JSAnimation} */(renderable);
    animation.pause();
    forEachChildren(animation, (/** @type {Tween} */tween) => {
      const tweenProperty = tween.property;
      const tweenTarget = tween.target;
      if (tweenTarget[isDomSymbol]) {
        const targetStyle = /** @type {DOMTarget} */(tweenTarget).style;
        const originalInlinedValue = animation._inlineStyles[tweenProperty];
        if (tween._tweenType === tweenTypes.TRANSFORM) {
          const cachedTransforms = tweenTarget[transformsSymbol];
          if (isUnd(originalInlinedValue) || originalInlinedValue === emptyString) {
            delete cachedTransforms[tweenProperty];
          } else {
            cachedTransforms[tweenProperty] = originalInlinedValue;
          }
          if (tween._renderTransforms) {
            if (!Object.keys(cachedTransforms).length) {
              targetStyle.removeProperty('transform');
            } else {
              let str = emptyString;
              for (let key in cachedTransforms) {
                str += transformsFragmentStrings[key] + cachedTransforms[key] + ') ';
              }
              targetStyle.transform = str;
            }
          }
        } else {
          if (isUnd(originalInlinedValue) || originalInlinedValue === emptyString) {
            targetStyle.removeProperty(tweenProperty);
          } else {
            targetStyle[tweenProperty] = originalInlinedValue;
          }
        }
        if (animation._tail === tween) {
          animation.targets.forEach(t => {
            if (t.getAttribute && t.getAttribute('style') === emptyString) {
              t.removeAttribute('style');
            }          });
        }
      }
    });
  }
  return renderable;
};

// Defines decomposed values target objects only once and mutate their properties later to avoid GC
// TODO: Maybe move the objects creation to values.js and use the decompose function to create the base object
const fromTargetObject = createDecomposedValueTargetObject();
const toTargetObject = createDecomposedValueTargetObject();
const toFunctionStore = { func: null };
const keyframesTargetArray = [null];
const fastSetValuesArray = [null, null];
/** @type {TweenKeyValue} */
const keyObjectTarget = { to: null };

let tweenId = 0;
let keyframes;
/** @type {TweenParamsOptions & TweenValues} */
let key;

/**
 * @param {DurationKeyframes | PercentageKeyframes} keyframes
 * @param {AnimationParams} parameters
 * @return {AnimationParams}
 */
const generateKeyframes = (keyframes, parameters) => {
  /** @type {AnimationParams} */
  const properties = {};
  if (isArr(keyframes)) {
    const propertyNames = [].concat(.../** @type {DurationKeyframes} */(keyframes).map(key => Object.keys(key))).filter(isKey);
    for (let i = 0, l = propertyNames.length; i < l; i++) {
      const propName = propertyNames[i];
      const propArray = /** @type {DurationKeyframes} */(keyframes).map(key => {
        /** @type {TweenKeyValue} */
        const newKey = {};
        for (let p in key) {
          const keyValue = /** @type {TweenPropValue} */(key[p]);
          if (isKey(p)) {
            if (p === propName) {
              newKey.to = keyValue;
            }
          } else {
            newKey[p] = keyValue;
          }
        }
        return newKey;
      });
      properties[propName] = /** @type {ArraySyntaxValue} */(propArray);
    }

  } else {
    const totalDuration = /** @type {Number} */(setValue(parameters.duration, globals.defaults.duration));
    const keys = Object.keys(keyframes)
    .map(key => { return {o: parseFloat(key) / 100, p: keyframes[key]} })
    .sort((a, b) => a.o - b.o);
    keys.forEach(key => {
      const offset = key.o;
      const prop = key.p;
      for (let name in prop) {
        if (isKey(name)) {
          let propArray = /** @type {Array} */(properties[name]);
          if (!propArray) propArray = properties[name] = [];
          const duration = offset * totalDuration;
          let length = propArray.length;
          let prevKey = propArray[length - 1];
          const keyObj = { to: prop[name] };
          let durProgress = 0;
          for (let i = 0; i < length; i++) {
            durProgress += propArray[i].duration;
          }
          if (length === 1) {
            keyObj.from = prevKey.to;
          }
          if (prop.ease) {
            keyObj.ease = prop.ease;
          }
          keyObj.duration = duration - (length ? durProgress : 0);
          propArray.push(keyObj);
        }
      }
      return key;
    });

    for (let name in properties) {
      const propArray = /** @type {Array} */(properties[name]);
      let prevEase;
      // let durProgress = 0
      for (let i = 0, l = propArray.length; i < l; i++) {
        const prop = propArray[i];
        // Emulate WAPPI easing parameter position
        const currentEase = prop.ease;
        prop.ease = prevEase ? prevEase : undefined;
        prevEase = currentEase;
        // durProgress += prop.duration;
        // if (i === l - 1 && durProgress !== totalDuration) {
        //   propArray.push({ from: prop.to, ease: prop.ease, duration: totalDuration - durProgress })
        // }
      }
      if (!propArray[0].duration) {
        propArray.shift();
      }
    }

  }

  return properties;
};

class JSAnimation extends Timer {
  /**
   * @param {TargetsParam} targets
   * @param {AnimationParams} parameters
   * @param {Timeline} [parent]
   * @param {Number} [parentPosition]
   * @param {Boolean} [fastSet=false]
   * @param {Number} [index=0]
   * @param {Number} [length=0]
   */
  constructor(
    targets,
    parameters,
    parent,
    parentPosition,
    fastSet = false,
    index = 0,
    length = 0
  ) {

    super(/** @type {TimerParams&AnimationParams} */(parameters), parent, parentPosition);

    const parsedTargets = registerTargets(targets);
    const targetsLength = parsedTargets.length;

    // If the parameters object contains a "keyframes" property, convert all the keyframes values to regular properties

    const kfParams = /** @type {AnimationParams} */(parameters).keyframes;
    const params = /** @type {AnimationParams} */(kfParams ? mergeObjects(generateKeyframes(/** @type {DurationKeyframes} */(kfParams), parameters), parameters) : parameters);

    const {
      delay,
      duration,
      ease,
      playbackEase,
      modifier,
      composition,
      onRender,
    } = params;

    const animDefaults = parent ? parent.defaults : globals.defaults;
    const animaPlaybackEase = setValue(playbackEase, animDefaults.playbackEase);
    const animEase = animaPlaybackEase ? parseEasings(animaPlaybackEase) : null;
    const hasSpring = !isUnd(ease) && !isUnd(/** @type {Spring} */(ease).ease);
    const tEasing = hasSpring ? /** @type {Spring} */(ease).ease : setValue(ease, animEase ? 'linear' : animDefaults.ease);
    const tDuration = hasSpring ? /** @type {Spring} */(ease).duration : setValue(duration, animDefaults.duration);
    const tDelay = setValue(delay, animDefaults.delay);
    const tModifier = modifier || animDefaults.modifier;
    // If no composition is defined and the targets length is high (>= 1000) set the composition to 'none' (0) for faster tween creation
    const tComposition = isUnd(composition) && targetsLength >= K ? compositionTypes.none : !isUnd(composition) ? composition : animDefaults.composition;
    // TODO: Do not create an empty object until we know the animation will generate inline styles
    const animInlineStyles = {};
    // const absoluteOffsetTime = this._offset;
    const absoluteOffsetTime = this._offset + (parent ? parent._offset : 0);

    let iterationDuration = NaN;
    let iterationDelay = NaN;
    let animationAnimationLength = 0;
    let shouldTriggerRender = 0;

    for (let targetIndex = 0; targetIndex < targetsLength; targetIndex++) {

      const target = parsedTargets[targetIndex];
      const ti = index || targetIndex;
      const tl = length || targetsLength;

      let lastTransformGroupIndex = NaN;
      let lastTransformGroupLength = NaN;

      for (let p in params) {

        if (isKey(p)) {

          const tweenType = getTweenType(target, p);

          const propName = sanitizePropertyName(p, target, tweenType);

          let propValue = params[p];

          const isPropValueArray = isArr(propValue);

          if (fastSet && !isPropValueArray) {
            fastSetValuesArray[0] = propValue;
            fastSetValuesArray[1] = propValue;
            propValue = fastSetValuesArray;
          }

          // TODO: Allow nested keyframes inside ObjectValue value (prop: { to: [.5, 1, .75, 2, 3] })
          // Normalize property values to valid keyframe syntax:
          // [x, y] to [{to: [x, y]}] or {to: x} to [{to: x}] or keep keys syntax [{}, {}, {}...]
          // const keyframes = isArr(propValue) ? propValue.length === 2 && !isObj(propValue[0]) ? [{ to: propValue }] : propValue : [propValue];
          if (isPropValueArray) {
            const arrayLength = /** @type {Array} */(propValue).length;
            const isNotObjectValue = !isObj(propValue[0]);
            // Convert [x, y] to [{to: [x, y]}]
            if (arrayLength === 2 && isNotObjectValue) {
              keyObjectTarget.to = /** @type {TweenParamValue} */(/** @type {unknown} */(propValue));
              keyframesTargetArray[0] = keyObjectTarget;
              keyframes = keyframesTargetArray;
            // Convert [x, y, z] to [[x, y], z]
            } else if (arrayLength > 2 && isNotObjectValue) {
              keyframes = [];
              /** @type {Array.<Number>} */(propValue).forEach((v, i) => {
                if (!i) {
                  fastSetValuesArray[0] = v;
                } else if (i === 1) {
                  fastSetValuesArray[1] = v;
                  keyframes.push(fastSetValuesArray);
                } else {
                  keyframes.push(v);
                }
              });
            } else {
              keyframes = /** @type {Array.<TweenKeyValue>} */(propValue);
            }
          } else {
            keyframesTargetArray[0] = propValue;
            keyframes = keyframesTargetArray;
          }

          let siblings = null;
          let prevTween = null;
          let firstTweenChangeStartTime = NaN;
          let lastTweenChangeEndTime = 0;
          let tweenIndex = 0;

          for (let l = keyframes.length; tweenIndex < l; tweenIndex++) {

            const keyframe = keyframes[tweenIndex];

            if (isObj(keyframe)) {
              key = keyframe;
            } else {
              keyObjectTarget.to = /** @type {TweenParamValue} */(keyframe);
              key = keyObjectTarget;
            }

            toFunctionStore.func = null;

            const computedToValue = getFunctionValue(key.to, target, ti, tl, toFunctionStore);

            let tweenToValue;
            // Allows function based values to return an object syntax value ({to: v})
            if (isObj(computedToValue) && !isUnd(computedToValue.to)) {
              key = computedToValue;
              tweenToValue = computedToValue.to;
            } else {
              tweenToValue = computedToValue;
            }
            const tweenFromValue = getFunctionValue(key.from, target, ti, tl);
            const keyEasing = key.ease;
            const hasSpring = !isUnd(keyEasing) && !isUnd(/** @type {Spring} */(keyEasing).ease);
            // Easing are treated differently and don't accept function based value to prevent having to pass a function wrapper that returns an other function all the time
            const tweenEasing = hasSpring ? /** @type {Spring} */(keyEasing).ease : keyEasing || tEasing;
            // Calculate default individual keyframe duration by dividing the tl of keyframes
            const tweenDuration = hasSpring ? /** @type {Spring} */(keyEasing).duration : getFunctionValue(setValue(key.duration, (l > 1 ? getFunctionValue(tDuration, target, ti, tl) / l : tDuration)), target, ti, tl);
            // Default delay value should only be applied to the first tween
            const tweenDelay = getFunctionValue(setValue(key.delay, (!tweenIndex ? tDelay : 0)), target, ti, tl);
            const computedComposition = getFunctionValue(setValue(key.composition, tComposition), target, ti, tl);
            const tweenComposition = isNum(computedComposition) ? computedComposition : compositionTypes[computedComposition];
            // Modifiers are treated differently and don't accept function based value to prevent having to pass a function wrapper
            const tweenModifier = key.modifier || tModifier;
            const hasFromvalue = !isUnd(tweenFromValue);
            const hasToValue = !isUnd(tweenToValue);
            const isFromToArray = isArr(tweenToValue);
            const isFromToValue = isFromToArray || (hasFromvalue && hasToValue);
            const tweenStartTime = prevTween ? lastTweenChangeEndTime + tweenDelay : tweenDelay;
            const absoluteStartTime = absoluteOffsetTime + tweenStartTime;

            // Force a onRender callback if the animation contains at least one from value and autoplay is set to false
            if (!shouldTriggerRender && (hasFromvalue || isFromToArray)) shouldTriggerRender = 1;

            let prevSibling = prevTween;

            if (tweenComposition !== compositionTypes.none) {
              if (!siblings) siblings = getTweenSiblings(target, propName);
              let nextSibling = siblings._head;
              // Iterate trough all the next siblings until we find a sibling with an equal or inferior start time
              while (nextSibling && !nextSibling._isOverridden && nextSibling._absoluteStartTime <= absoluteStartTime) {
                prevSibling = nextSibling;
                nextSibling = nextSibling._nextRep;
                // Overrides all the next siblings if the next sibling starts at the same time of after as the new tween start time
                if (nextSibling && nextSibling._absoluteStartTime >= absoluteStartTime) {
                  while (nextSibling) {
                    overrideTween(nextSibling);
                    // This will ends both the current while loop and the upper one once all the next sibllings have been overriden
                    nextSibling = nextSibling._nextRep;
                  }
                }
              }
            }

            // Decompose values
            if (isFromToValue) {
              decomposeRawValue(isFromToArray ? getFunctionValue(tweenToValue[0], target, ti, tl) : tweenFromValue, fromTargetObject);
              decomposeRawValue(isFromToArray ? getFunctionValue(tweenToValue[1], target, ti, tl, toFunctionStore) : tweenToValue, toTargetObject);
              if (fromTargetObject.t === valueTypes.NUMBER) {
                if (prevSibling) {
                  if (prevSibling._valueType === valueTypes.UNIT) {
                    fromTargetObject.t = valueTypes.UNIT;
                    fromTargetObject.u = prevSibling._unit;
                  }
                } else {
                  decomposeRawValue(
                    getOriginalAnimatableValue(target, propName, tweenType, animInlineStyles),
                    decomposedOriginalValue
                  );
                  if (decomposedOriginalValue.t === valueTypes.UNIT) {
                    fromTargetObject.t = valueTypes.UNIT;
                    fromTargetObject.u = decomposedOriginalValue.u;
                  }
                }
              }
            } else {
              if (hasToValue) {
                decomposeRawValue(tweenToValue, toTargetObject);
              } else {
                if (prevTween) {
                  decomposeTweenValue(prevTween, toTargetObject);
                } else {
                  // No need to get and parse the original value if the tween is part of a timeline and has a previous sibling part of the same timeline
                  decomposeRawValue(parent && prevSibling && prevSibling.parent.parent === parent ? prevSibling._value :
                  getOriginalAnimatableValue(target, propName, tweenType, animInlineStyles), toTargetObject);
                }
              }
              if (hasFromvalue) {
                decomposeRawValue(tweenFromValue, fromTargetObject);
              } else {
                if (prevTween) {
                  decomposeTweenValue(prevTween, fromTargetObject);
                } else {
                  decomposeRawValue(parent && prevSibling && prevSibling.parent.parent === parent ? prevSibling._value :
                  // No need to get and parse the original value if the tween is part of a timeline and has a previous sibling part of the same timeline
                  getOriginalAnimatableValue(target, propName, tweenType, animInlineStyles), fromTargetObject);
                }
              }
            }

            // Apply operators
            if (fromTargetObject.o) {
              fromTargetObject.n = getRelativeValue(
                !prevSibling ? decomposeRawValue(
                  getOriginalAnimatableValue(target, propName, tweenType, animInlineStyles),
                  decomposedOriginalValue
                ).n : prevSibling._toNumber,
                fromTargetObject.n,
                fromTargetObject.o
              );
            }

            if (toTargetObject.o) {
              toTargetObject.n = getRelativeValue(fromTargetObject.n, toTargetObject.n, toTargetObject.o);
            }

            // Values omogenisation in cases of type difference between "from" and "to"
            if (fromTargetObject.t !== toTargetObject.t) {
              if (fromTargetObject.t === valueTypes.COMPLEX || toTargetObject.t === valueTypes.COMPLEX) {
                const complexValue = fromTargetObject.t === valueTypes.COMPLEX ? fromTargetObject : toTargetObject;
                const notComplexValue = fromTargetObject.t === valueTypes.COMPLEX ? toTargetObject : fromTargetObject;
                notComplexValue.t = valueTypes.COMPLEX;
                notComplexValue.s = cloneArray(complexValue.s);
                notComplexValue.d = complexValue.d.map(() => notComplexValue.n);
              } else if (fromTargetObject.t === valueTypes.UNIT || toTargetObject.t === valueTypes.UNIT) {
                const unitValue = fromTargetObject.t === valueTypes.UNIT ? fromTargetObject : toTargetObject;
                const notUnitValue = fromTargetObject.t === valueTypes.UNIT ? toTargetObject : fromTargetObject;
                notUnitValue.t = valueTypes.UNIT;
                notUnitValue.u = unitValue.u;
              } else if (fromTargetObject.t === valueTypes.COLOR || toTargetObject.t === valueTypes.COLOR) {
                const colorValue = fromTargetObject.t === valueTypes.COLOR ? fromTargetObject : toTargetObject;
                const notColorValue = fromTargetObject.t === valueTypes.COLOR ? toTargetObject : fromTargetObject;
                notColorValue.t = valueTypes.COLOR;
                notColorValue.s = colorValue.s;
                notColorValue.d = [0, 0, 0, 1];
              }
            }

            // Unit conversion
            if (fromTargetObject.u !== toTargetObject.u) {
              let valueToConvert = toTargetObject.u ? fromTargetObject : toTargetObject;
              valueToConvert = convertValueUnit(/** @type {DOMTarget} */(target), valueToConvert, toTargetObject.u ? toTargetObject.u : fromTargetObject.u, false);
              // TODO:
              // convertValueUnit(target, to.u ? from : to, to.u ? to.u : from.u);
            }

            // Fill in non existing complex values
            if (toTargetObject.d && fromTargetObject.d && (toTargetObject.d.length !== fromTargetObject.d.length)) {
              const longestValue = fromTargetObject.d.length > toTargetObject.d.length ? fromTargetObject : toTargetObject;
              const shortestValue = longestValue === fromTargetObject ? toTargetObject : fromTargetObject;
              // TODO: Check if n should be used instead of 0 for default complex values
              shortestValue.d = longestValue.d.map((_, i) => isUnd(shortestValue.d[i]) ? 0 : shortestValue.d[i]);
              shortestValue.s = cloneArray(longestValue.s);
            }

            // Tween factory

            // Rounding is necessary here to minimize floating point errors
            const tweenUpdateDuration = round(+tweenDuration || minValue, 12);

            /** @type {Tween} */
            const tween = {
              parent: this,
              id: tweenId++,
              property: propName,
              target: target,
              _value: null,
              _func: toFunctionStore.func,
              _ease: parseEasings(tweenEasing),
              _fromNumbers: cloneArray(fromTargetObject.d),
              _toNumbers: cloneArray(toTargetObject.d),
              _strings: cloneArray(toTargetObject.s),
              _fromNumber: fromTargetObject.n,
              _toNumber: toTargetObject.n,
              _numbers: cloneArray(fromTargetObject.d), // For additive tween and animatables
              _number: fromTargetObject.n, // For additive tween and animatables
              _unit: toTargetObject.u,
              _modifier: tweenModifier,
              _currentTime: 0,
              _startTime: tweenStartTime,
              _delay: +tweenDelay,
              _updateDuration: tweenUpdateDuration,
              _changeDuration: tweenUpdateDuration,
              _absoluteStartTime: absoluteStartTime,
              // NOTE: Investigate bit packing to stores ENUM / BOOL
              _tweenType: tweenType,
              _valueType: toTargetObject.t,
              _composition: tweenComposition,
              _isOverlapped: 0,
              _isOverridden: 0,
              _renderTransforms: 0,
              _prevRep: null, // For replaced tween
              _nextRep: null, // For replaced tween
              _prevAdd: null, // For additive tween
              _nextAdd: null, // For additive tween
              _prev: null,
              _next: null,
            };

            if (tweenComposition !== compositionTypes.none) {
              composeTween(tween, siblings);
            }

            if (isNaN(firstTweenChangeStartTime)) {
              firstTweenChangeStartTime = tween._startTime;
            }
            // Rounding is necessary here to minimize floating point errors
            lastTweenChangeEndTime = round(tweenStartTime + tweenUpdateDuration, 12);
            prevTween = tween;
            animationAnimationLength++;

            addChild(this, tween);

          }

          // Update animation timings with the added tweens properties

          if (isNaN(iterationDelay) || firstTweenChangeStartTime < iterationDelay) {
            iterationDelay = firstTweenChangeStartTime;
          }

          if (isNaN(iterationDuration) || lastTweenChangeEndTime > iterationDuration) {
            iterationDuration = lastTweenChangeEndTime;
          }

          // TODO: Find a way to inline tween._renderTransforms = 1 here
          if (tweenType === tweenTypes.TRANSFORM) {
            lastTransformGroupIndex = animationAnimationLength - tweenIndex;
            lastTransformGroupLength = animationAnimationLength;
          }

        }

      }

      // Set _renderTransforms to last transform property to correctly render the transforms list
      if (!isNaN(lastTransformGroupIndex)) {
        let i = 0;
        forEachChildren(this, (/** @type {Tween} */tween) => {
          if (i >= lastTransformGroupIndex && i < lastTransformGroupLength) {
            tween._renderTransforms = 1;
            if (tween._composition === compositionTypes.blend) {
              forEachChildren(additive.animation, (/** @type {Tween} */additiveTween) => {
                if (additiveTween.id === tween.id) {
                  additiveTween._renderTransforms = 1;
                }
              });
            }
          }
          i++;
        });
      }

    }

    if (!targetsLength) {
      console.warn(`No target found. Make sure the element you're trying to animate is accessible before creating your animation.`);
    }

    if (iterationDelay) {
      forEachChildren(this, (/** @type {Tween} */tween) => {
        // If (startTime - delay) equals 0, this means the tween is at the begining of the animation so we need to trim the delay too
        if (!(tween._startTime - tween._delay)) {
          tween._delay -= iterationDelay;
        }
        tween._startTime -= iterationDelay;
      });
      iterationDuration -= iterationDelay;
    } else {
      iterationDelay = 0;
    }

    // Prevents iterationDuration to be NaN if no valid animatable props have been provided
    // Prevents _iterationCount to be NaN if no valid animatable props have been provided
    if (!iterationDuration) {
      iterationDuration = minValue;
      this.iterationCount = 0;
    }
    /** @type {TargetsArray} */
    this.targets = parsedTargets;
    /** @type {Number} */
    this.duration = iterationDuration === minValue ? minValue : clampInfinity(((iterationDuration + this._loopDelay) * this.iterationCount) - this._loopDelay) || minValue;
    /** @type {Callback<this>} */
    this.onRender = onRender || animDefaults.onRender;
    /** @type {EasingFunction} */
    this._ease = animEase;
    /** @type {Number} */
    this._delay = iterationDelay;
    // NOTE: I'm keeping delay values separated from offsets in timelines because delays can override previous tweens and it could be confusing to debug a timeline with overridden tweens and no associated visible delays.
    // this._delay = parent ? 0 : iterationDelay;
    // this._offset += parent ? iterationDelay : 0;
    /** @type {Number} */
    this.iterationDuration = iterationDuration;
    /** @type {{}} */
    this._inlineStyles = animInlineStyles;

    if (!this._autoplay && shouldTriggerRender) this.onRender(this);
  }

  /**
   * @param  {Number} newDuration
   * @return {this}
   */
  stretch(newDuration) {
    const currentDuration = this.duration;
    if (currentDuration === normalizeTime(newDuration)) return this;
    const timeScale = newDuration / currentDuration;
    // NOTE: Find a better way to handle the stretch of an animation after stretch = 0
    forEachChildren(this, (/** @type {Tween} */tween) => {
      // Rounding is necessary here to minimize floating point errors
      tween._updateDuration = normalizeTime(tween._updateDuration * timeScale);
      tween._changeDuration = normalizeTime(tween._changeDuration * timeScale);
      tween._currentTime *= timeScale;
      tween._startTime *= timeScale;
      tween._absoluteStartTime *= timeScale;
    });
    return super.stretch(newDuration);
  }

  /**
   * @return {this}
   */
  refresh() {
    forEachChildren(this, (/** @type {Tween} */tween) => {
      const ogValue = getOriginalAnimatableValue(tween.target, tween.property, tween._tweenType);
      decomposeRawValue(ogValue, decomposedOriginalValue);
      tween._fromNumbers = cloneArray(decomposedOriginalValue.d);
      tween._fromNumber = decomposedOriginalValue.n;
      if (tween._func) {
        decomposeRawValue(tween._func(), toTargetObject);
        tween._toNumbers = cloneArray(toTargetObject.d);
        tween._strings = cloneArray(toTargetObject.s);
        tween._toNumber = toTargetObject.n;
      }
    });
    return this;
  }

  /**
   * Cancel the animation and revert all the values affected by this animation to their original state
   * @return {this}
   */
  revert() {
    super.revert();
    return cleanInlineStyles(this);
  }

  /**
   * @param  {Callback<this>} [callback]
   * @return {Promise}
   */
  then(callback) {
    return super.then(callback);
  }

}

/**
 * @param {TargetsParam} targets
 * @param {AnimationParams} parameters
 * @return {JSAnimation}
 */
const animate = (targets, parameters) => new JSAnimation(targets, parameters, null, 0, false).init();




/**
 * Converts an easing function into a valid CSS linear() timing function string
 * @param {EasingFunction} fn
 * @param {number} [samples=100]
 * @returns {string} CSS linear() timing function
 */
const easingToLinear = (fn, samples = 100) => {
  const points = [];
  for (let i = 0; i <= samples; i++) points.push(fn(i / samples));
  return `linear(${points.join(', ')})`;
};

const WAAPIEasesLookups = {
  in: 'ease-in',
  out: 'ease-out',
  inOut: 'ease-in-out',
};

const WAAPIeases = /*#__PURE__*/(() => {
  const list = {};
  for (let type in easeTypes) list[type] = a => easeTypes[type](easeInPower(a));
  return /** @type {Record<String, EasingFunction>} */(list);
})();

/**
 * @param  {EasingParam} ease
 * @return {String}
 */
const parseWAAPIEasing = (ease) => {
  let parsedEase = WAAPIEasesLookups[ease];
  if (parsedEase) return parsedEase;
  parsedEase = 'linear';
  if (isStr(ease)) {
    if (
      stringStartsWith(ease, 'linear') ||
      stringStartsWith(ease, 'cubic-') ||
      stringStartsWith(ease, 'steps') ||
      stringStartsWith(ease, 'ease')
    ) {
      parsedEase = ease;
    } else if (stringStartsWith(ease, 'cubicB')) {
      parsedEase = toLowerCase(ease);
    } else {
      const parsed = parseEaseString(ease, WAAPIeases, WAAPIEasesLookups);
      if (isFnc(parsed)) parsedEase = parsed === none ? 'linear' : easingToLinear(parsed);
    }
    WAAPIEasesLookups[ease] = parsedEase;
  } else if (isFnc(ease)) {
    const easing = easingToLinear(ease);
    if (easing) parsedEase = easing;
  } else if (/** @type {Spring} */(ease).ease) {
    parsedEase = easingToLinear(/** @type {Spring} */(ease).ease);
  }
  return parsedEase;
};

/**
 * @typedef {String|Number|Array<String>|Array<Number>} WAAPITweenValue
 */

/**
 * @callback WAAPIFunctionvalue
 * @param {DOMTarget} target - The animated target
 * @param {Number} index - The target index
 * @param {Number} length - The total number of animated targets
 * @return {WAAPITweenValue}
 */

/**
 * @typedef {WAAPITweenValue|WAAPIFunctionvalue|Array<String|Number|WAAPIFunctionvalue>} WAAPIKeyframeValue
 */

/**
 * @typedef {(animation: WAAPIAnimation) => void} WAAPICallback
 */

/**
 * @typedef {Object} WAAPITweenOptions
 * @property {WAAPIKeyframeValue} [to]
 * @property {WAAPIKeyframeValue} [from]
 * @property {Number|WAAPIFunctionvalue} [duration]
 * @property {Number|WAAPIFunctionvalue} [delay]
 * @property {EasingParam} [ease]
 * @property {CompositeOperation} [composition]
 */

/**
 * @typedef {Object} WAAPIAnimationOptions
 * @property {Number|Boolean} [loop]
 * @property {Boolean} [Reversed]
 * @property {Boolean} [Alternate]
 * @property {Boolean|ScrollObserver} [autoplay]
 * @property {Number} [playbackRate]
 * @property {Number|WAAPIFunctionvalue} [duration]
 * @property {Number|WAAPIFunctionvalue} [delay]
 * @property {EasingParam} [ease]
 * @property {CompositeOperation} [composition]
 * @property {WAAPICallback} [onComplete]
 */

/**
 * @typedef {Record<String, WAAPIKeyframeValue | WAAPIAnimationOptions | Boolean | ScrollObserver | WAAPICallback | EasingParam | WAAPITweenOptions> & WAAPIAnimationOptions} WAAPIAnimationParams
 */

const transformsShorthands = ['x', 'y', 'z'];
const commonDefaultPXProperties = [
  'perspective',
  'width',
  'height',
  'margin',
  'padding',
  'top',
  'right',
  'bottom',
  'left',
  'borderWidth',
  'fontSize',
  'borderRadius',
  ...transformsShorthands
];

const validIndividualTransforms = [...transformsShorthands, ...validTransforms.filter(t => ['X', 'Y', 'Z'].some(axis => t.endsWith(axis)))];

// Setting it to true in case CSS.registerProperty is not supported will automatically skip the registration and fallback to no animation
let transformsPropertiesRegistered = isBrowser && (isUnd(CSS) || !Object.hasOwnProperty.call(CSS, 'registerProperty'));

const registerTransformsProperties = () => {
  if (transformsPropertiesRegistered) return;
  validTransforms.forEach(t => {
    const isSkew = stringStartsWith(t, 'skew');
    const isScale = stringStartsWith(t, 'scale');
    const isRotate = stringStartsWith(t, 'rotate');
    const isTranslate = stringStartsWith(t, 'translate');
    const isAngle = isRotate || isSkew;
    const syntax = isAngle ? '<angle>' : isScale ? "<number>" : isTranslate ? "<length-percentage>" : "*";
    try {
      CSS.registerProperty({
        name: '--' + t,
        syntax,
        inherits: false,
        initialValue: isTranslate ? '0px' : isAngle ? '0deg' : isScale ? '1' : '0',
      });
    } catch {}  });
  transformsPropertiesRegistered = true;
};

const WAAPIAnimationsLookups = {
  _head: null,
  _tail: null,
};

/**
 * @param {DOMTarget} $el
 * @param {String} [property]
 * @param {WAAPIAnimation} [parent]
 */
const removeWAAPIAnimation = ($el, property, parent) => {
  let nextLookup = WAAPIAnimationsLookups._head;
  while (nextLookup) {
    const next = nextLookup._next;
    const matchTarget = nextLookup.$el === $el;
    const matchProperty = !property || nextLookup.property === property;
    const matchParent = !parent || nextLookup.parent === parent;
    if (matchTarget && matchProperty && matchParent) {
      const anim = nextLookup.animation;
      try { anim.commitStyles(); } catch {}      anim.cancel();
      removeChild(WAAPIAnimationsLookups, nextLookup);
      const lookupParent = nextLookup.parent;
      if (lookupParent) {
        lookupParent._completed++;
        if (lookupParent.animations.length === lookupParent._completed) {
          lookupParent.completed = true;
          if (!lookupParent.muteCallbacks) {
            lookupParent.paused = true;
            lookupParent.onComplete(lookupParent);
            lookupParent._resolve(lookupParent);
          }
        }
      }
    }
    nextLookup = next;
  }
};

/**
 * @param {WAAPIAnimation} parent
 * @param {DOMTarget} $el
 * @param {String} property
 * @param {PropertyIndexedKeyframes} keyframes
 * @param {KeyframeAnimationOptions} params
 * @retun {Animation}
 */
const addWAAPIAnimation = (parent, $el, property, keyframes, params) => {
  const animation = $el.animate(keyframes, params);
  const animTotalDuration = params.delay + (+params.duration * params.iterations);
  animation.playbackRate = parent._speed;
  if (parent.paused) animation.pause();
  if (parent.duration < animTotalDuration) {
    parent.duration = animTotalDuration;
    parent.controlAnimation = animation;
  }
  parent.animations.push(animation);
  removeWAAPIAnimation($el, property);
  addChild(WAAPIAnimationsLookups, { parent, animation, $el, property, _next: null, _prev: null });
  const handleRemove = () => { removeWAAPIAnimation($el, property, parent); };
  animation.onremove = handleRemove;
  animation.onfinish = handleRemove;
  return animation;
};

/**
 * @param  {String} propName
 * @param  {WAAPIKeyframeValue} value
 * @param  {DOMTarget} $el
 * @param  {Number} i
 * @param  {Number} targetsLength
 * @return {String}
 */
const normalizeTweenValue = (propName, value, $el, i, targetsLength) => {
  let v = getFunctionValue(/** @type {any} */(value), $el, i, targetsLength);
  if (!isNum(v)) return v;
  if (commonDefaultPXProperties.includes(propName) || stringStartsWith(propName, 'translate')) return `${v}px`;
  if (stringStartsWith(propName, 'rotate') || stringStartsWith(propName, 'skew')) return `${v}deg`;
  return `${v}`;
};

/**
 * @param  {DOMTarget} $el
 * @param  {String} propName
 * @param  {WAAPIKeyframeValue} from
 * @param  {WAAPIKeyframeValue} to
 * @param  {Number} i
 * @param  {Number} targetsLength
 * @return {WAAPITweenValue}
 */
const parseIndividualTweenValue = ($el, propName, from, to, i, targetsLength) => {
  /** @type {WAAPITweenValue} */
  let tweenValue = '0';
  const computedTo = !isUnd(to) ? normalizeTweenValue(propName, to, $el, i, targetsLength) : getComputedStyle($el)[propName];
  if (!isUnd(from)) {
    const computedFrom = normalizeTweenValue(propName, from, $el, i, targetsLength);
    tweenValue = [computedFrom, computedTo];
  } else {
    tweenValue = isArr(to) ? to.map((/** @type {any} */v) => normalizeTweenValue(propName, v, $el, i, targetsLength)) : computedTo;
  }
  return tweenValue;
};

class WAAPIAnimation {
/**
 * @param {DOMTargetsParam} targets
 * @param {WAAPIAnimationParams} params
 */
  constructor(targets, params) {

    if (globals.scope) globals.scope.revertibles.push(this);

    registerTransformsProperties();

    const parsedTargets = registerTargets(targets);
    const targetsLength = parsedTargets.length;

    if (!targetsLength) {
      console.warn(`No target found. Make sure the element you're trying to animate is accessible before creating your animation.`);
    }

    const ease = setValue(params.ease, parseWAAPIEasing(globals.defaults.ease));
    const spring = /** @type {Spring} */(ease).ease && ease;
    const autoplay = setValue(params.autoplay, globals.defaults.autoplay);
    const scroll = autoplay && /** @type {ScrollObserver} */(autoplay).link ? autoplay : false;
    const alternate = params.alternate && /** @type {Boolean} */(params.alternate) === true;
    const reversed = params.reversed && /** @type {Boolean} */(params.reversed) === true;
    const loop = setValue(params.loop, globals.defaults.loop);
    const iterations = /** @type {Number} */((loop === true || loop === Infinity) ? Infinity : isNum(loop) ? loop + 1 : 1);
    /** @type {PlaybackDirection} */
    const direction = alternate ? reversed ? 'alternate-reverse' : 'alternate' : reversed ? 'reverse' : 'normal';
    /** @type {FillMode} */
    const fill = 'forwards';
    /** @type {String} */
    const easing = parseWAAPIEasing(ease);
    const timeScale = (globals.timeScale === 1 ? 1 : K);

    /** @type {DOMTargetsArray}] */
    this.targets = parsedTargets;
    /** @type {Array<globalThis.Animation>}] */
    this.animations = [];
    /** @type {globalThis.Animation}] */
    this.controlAnimation = null;
    /** @type {Callback<this>} */
    this.onComplete = params.onComplete || noop;
    /** @type {Number} */
    this.duration = 0;
    /** @type {Boolean} */
    this.muteCallbacks = false;
    /** @type {Boolean} */
    this.completed = false;
    /** @type {Boolean} */
    this.paused = !autoplay || scroll !== false;
    /** @type {Boolean} */
    this.reversed = reversed;
    /** @type {Boolean|ScrollObserver} */
    this.autoplay = autoplay;
    /** @type {Number} */
    this._speed = setValue(params.playbackRate, globals.defaults.playbackRate);
    /** @type {Function} */
    this._resolve = noop; // Used by .then()
    /** @type {Number} */
    this._completed = 0;
    /** @type {Array<Object>}] */
    this._inlineStyles = parsedTargets.map($el => $el.getAttribute('style'));

    parsedTargets.forEach(($el, i) => {

      const cachedTransforms = $el[transformsSymbol];

      const hasIndividualTransforms = validIndividualTransforms.some(t => params.hasOwnProperty(t));

      /** @type {Number} */
      const duration = (spring ? /** @type {Spring} */(spring).duration : getFunctionValue(setValue(params.duration, globals.defaults.duration), $el, i, targetsLength)) * timeScale;
      /** @type {Number} */
      const delay = getFunctionValue(setValue(params.delay, globals.defaults.delay), $el, i, targetsLength) * timeScale;
      /** @type {CompositeOperation} */
      const composite = /** @type {CompositeOperation} */(setValue(params.composition, 'replace'));

      for (let name in params) {
        if (!isKey(name)) continue;
        /** @type {PropertyIndexedKeyframes} */
        const keyframes = {};
        /** @type {KeyframeAnimationOptions} */
        const tweenParams = { iterations, direction, fill, easing, duration, delay, composite };
        const propertyValue = params[name];
        const individualTransformProperty = hasIndividualTransforms ? validTransforms.includes(name) ? name : shortTransforms.get(name) : false;
        let parsedPropertyValue;
        if (isObj(propertyValue)) {
          const tweenOptions = /** @type {WAAPITweenOptions} */(propertyValue);
          const tweenOptionsEase = setValue(tweenOptions.ease, ease);
          const tweenOptionsSpring = /** @type {Spring} */(tweenOptionsEase).ease && tweenOptionsEase;
          const to = /** @type {WAAPITweenOptions} */(tweenOptions).to;
          const from = /** @type {WAAPITweenOptions} */(tweenOptions).from;
          /** @type {Number} */
          tweenParams.duration = (tweenOptionsSpring ? /** @type {Spring} */(tweenOptionsSpring).duration : getFunctionValue(setValue(tweenOptions.duration, duration), $el, i, targetsLength)) * timeScale;
          /** @type {Number} */
          tweenParams.delay = getFunctionValue(setValue(tweenOptions.delay, delay), $el, i, targetsLength) * timeScale;
          /** @type {CompositeOperation} */
          tweenParams.composite = /** @type {CompositeOperation} */(setValue(tweenOptions.composition, composite));
          /** @type {String} */
          tweenParams.easing = parseWAAPIEasing(tweenOptionsEase);
          parsedPropertyValue = parseIndividualTweenValue($el, name, from, to, i, targetsLength);
          if (individualTransformProperty) {
            keyframes[`--${individualTransformProperty}`] = parsedPropertyValue;
            cachedTransforms[individualTransformProperty] = parsedPropertyValue;
          } else {
            keyframes[name] = parseIndividualTweenValue($el, name, from, to, i, targetsLength);
          }
          addWAAPIAnimation(this, $el, name, keyframes, tweenParams);
          if (!isUnd(from)) {
            if (!individualTransformProperty) {
              $el.style[name] = keyframes[name][0];
            } else {
              const key = `--${individualTransformProperty}`;
              $el.style.setProperty(key, keyframes[key][0]);
            }
          }
        } else {
          parsedPropertyValue = isArr(propertyValue) ?
                                propertyValue.map((/** @type {any} */v) => normalizeTweenValue(name, v, $el, i, targetsLength)) :
                                normalizeTweenValue(name, /** @type {any} */(propertyValue), $el, i, targetsLength);
          if (individualTransformProperty) {
            keyframes[`--${individualTransformProperty}`] = parsedPropertyValue;
            cachedTransforms[individualTransformProperty] = parsedPropertyValue;
          } else {
            keyframes[name] = parsedPropertyValue;
          }
          addWAAPIAnimation(this, $el, name, keyframes, tweenParams);
        }
      }
      if (hasIndividualTransforms) {
        let transforms = emptyString;
        for (let t in cachedTransforms) {
          transforms += `${transformsFragmentStrings[t]}var(--${t})) `;
        }
        $el.style.transform = transforms;
      }
    });

    if (scroll) {
      /** @type {ScrollObserver} */(this.autoplay).link(this);
    }
  }

  /**
   * @callback forEachCallback
   * @param {globalThis.Animation} animation
   */

  /**
   * @param  {forEachCallback|String} callback
   * @return {this}
   */
  forEach(callback) {
    const cb = isStr(callback) ? a => a[callback]() : callback;
    this.animations.forEach(cb);
    return this;
  }

  get speed() {
    return this._speed;
  }

  /** @param {Number} speed */
  set speed(speed) {
    this._speed = +speed;
    this.forEach(anim => anim.playbackRate = speed);
  }

  get currentTime() {
    const controlAnimation = this.controlAnimation;
    const timeScale = globals.timeScale;
    return this.completed ? this.duration : controlAnimation ? +controlAnimation.currentTime * (timeScale === 1 ? 1 : timeScale) : 0;
  }

  /** @param {Number} time */
  set currentTime(time) {
    const t = time * (globals.timeScale === 1 ? 1 : K);
    this.forEach(anim => {
      // Make sure the animation playState is not 'paused' in order to properly trigger an onfinish callback.
      // The "paused" play state supersedes the "finished" play state; if the animation is both paused and finished, the "paused" state is the one that will be reported.
      // https://developer.mozilla.org/en-US/docs/Web/API/Animation/finish_event
      if (t >= this.duration) anim.play();
      anim.currentTime = t;
    });
  }

  get progress() {
    return this.currentTime / this.duration;
  }

  /** @param {Number} progress */
  set progress(progress) {
    this.forEach(anim => anim.currentTime = progress * this.duration || 0);
  }

  resume() {
    if (!this.paused) return this;
    this.paused = false;
    // TODO: Store the current time, and seek back to the last position
    return this.forEach('play');
  }

  pause() {
    if (this.paused) return this;
    this.paused = true;
    return this.forEach('pause');
  }

  alternate() {
    this.reversed = !this.reversed;
    this.forEach('reverse');
    if (this.paused) this.forEach('pause');
    return this;
  }

  play() {
    if (this.reversed) this.alternate();
    return this.resume();
  }

  reverse() {
    if (!this.reversed) this.alternate();
    return this.resume();
  }

 /**
  * @param {Number} time
  * @param {Boolean} muteCallbacks
  */
  seek(time, muteCallbacks = false) {
    if (muteCallbacks) this.muteCallbacks = true;
    if (time < this.duration) this.completed = false;
    this.currentTime = time;
    this.muteCallbacks = false;
    if (this.paused) this.pause();
    return this;
  }

  restart() {
    this.completed = false;
    return this.seek(0, true).resume();
  }

  commitStyles() {
    return this.forEach('commitStyles');
  }

  complete() {
    return this.seek(this.duration);
  }

  cancel() {
    this.forEach('cancel');
    return this.pause();
  }

  revert() {
    this.cancel();
    this.targets.forEach(($el, i) => $el.setAttribute('style', this._inlineStyles[i]) );
    return this;
  }

  /**
   * @param  {WAAPICallback} [callback]
   * @return {Promise}
   */
  then(callback = noop) {
    const then = this.then;
    const onResolve = () => {
      this.then = null;
      callback(this);
      this.then = then;
      this._resolve = noop;
    };
    return new Promise(r => {
      this._resolve = () => r(onResolve());
      if (this.completed) this._resolve();
      return this;
    });
  }
}

const waapi = {
/**
 * @param {DOMTargetsParam} targets
 * @param {WAAPIAnimationParams} params
 * @return {WAAPIAnimation}
 */
  animate: (targets, params) => new WAAPIAnimation(targets, params),
  convertEase: easingToLinear
};




/**
 * @param  {Callback<Timer>} [callback]
 * @return {Timer}
 */
const sync = (callback = noop) => {
  return new Timer({ duration: 1 * globals.timeScale, onComplete: callback }, null, 0).resume();
};

/**
 * @overload
 * @param  {DOMTargetSelector} targetSelector
 * @param  {String}            propName
 * @return {String}
 *
 * @overload
 * @param  {JSTargetsParam} targetSelector
 * @param  {String}         propName
 * @return {Number|String}
 *
 * @overload
 * @param  {DOMTargetsParam} targetSelector
 * @param  {String}          propName
 * @param  {String}          unit
 * @return {String}
 *
 * @overload
 * @param  {TargetsParam} targetSelector
 * @param  {String}       propName
 * @param  {Boolean}      unit
 * @return {Number}
 *
 * @param  {TargetsParam}   targetSelector
 * @param  {String}         propName
 * @param  {String|Boolean} [unit]
 */
function getTargetValue(targetSelector, propName, unit) {
  const targets = registerTargets(targetSelector);
  if (!targets.length) return;
  const [ target ] = targets;
  const tweenType = getTweenType(target, propName);
  const normalizePropName = sanitizePropertyName(propName, target, tweenType);
  let originalValue = getOriginalAnimatableValue(target, normalizePropName);
  if (isUnd(unit)) {
    return originalValue;
  } else {
    decomposeRawValue(originalValue, decomposedOriginalValue);
    if (decomposedOriginalValue.t === valueTypes.NUMBER || decomposedOriginalValue.t === valueTypes.UNIT) {
      if (unit === false) {
        return decomposedOriginalValue.n;
      } else {
        const convertedValue = convertValueUnit(/** @type {DOMTarget} */(target), decomposedOriginalValue, /** @type {String} */(unit), false);
        return `${round(convertedValue.n, globals.precision)}${convertedValue.u}`;
      }
    }
  }
}

/**
 * @param  {TargetsParam}    targets
 * @param  {AnimationParams} parameters
 * @return {JSAnimation}
 */
const setTargetValues = (targets, parameters) => {
  if (isUnd(parameters)) return;
  parameters.duration = minValue;
  // Do not overrides currently active tweens by default
  parameters.composition = setValue(parameters.composition, compositionTypes.none);
  // Skip init() and force rendering by playing the animation
  return new JSAnimation(targets, parameters, null, 0, true).resume();
};

/**
 * @param  {TargetsArray} targetsArray
 * @param  {JSAnimation}    animation
 * @param  {String}       [propertyName]
 * @return {Boolean}
 */
const removeTargetsFromAnimation = (targetsArray, animation, propertyName) => {
  let tweensMatchesTargets = false;
  forEachChildren(animation, (/**@type {Tween} */tween) => {
    const tweenTarget = tween.target;
    if (targetsArray.includes(tweenTarget)) {
      const tweenName = tween.property;
      const tweenType = tween._tweenType;
      const normalizePropName = sanitizePropertyName(propertyName, tweenTarget, tweenType);
      if (!normalizePropName || normalizePropName && normalizePropName === tweenName) {
        // Make sure to flag the previous CSS transform tween to renderTransform
        if (tween.parent._tail === tween &&
            tween._tweenType === tweenTypes.TRANSFORM &&
            tween._prev &&
            tween._prev._tweenType === tweenTypes.TRANSFORM
        ) {
          tween._prev._renderTransforms = 1;
        }
        // Removes the tween from the selected animation
        removeChild(animation, tween);
        // Detach the tween from its siblings to make sure blended tweens are correctlly removed
        removeTweenSliblings(tween);
        tweensMatchesTargets = true;
      }
    }
  }, true);
  return tweensMatchesTargets;
};

/**
 * @param  {TargetsParam} targets
 * @param  {Renderable|WAAPIAnimation} [renderable]
 * @param  {String}                    [propertyName]
 * @return {TargetsArray}
 */
const remove = (targets, renderable, propertyName) => {
  const targetsArray = parseTargets(targets);
  const parent = /** @type {Renderable|typeof engine} **/(renderable ? renderable : engine);
  const waapiAnimation = renderable && /** @type {WAAPIAnimation} */(renderable).controlAnimation && /** @type {WAAPIAnimation} */(renderable);
  for (let i = 0, l = targetsArray.length; i < l; i++) {
    const $el = /** @type {DOMTarget}  */(targetsArray[i]);
    removeWAAPIAnimation($el, propertyName, waapiAnimation);
  }
  let removeMatches;
  if (parent._hasChildren) {
    let iterationDuration = 0;
    forEachChildren(parent, (/** @type {Renderable} */child) => {
      if (!child._hasChildren) {
        removeMatches = removeTargetsFromAnimation(targetsArray, /** @type {JSAnimation} */(child), propertyName);
        // Remove the child from its parent if no tweens and no children left after the removal
        if (removeMatches && !child._head) {
          child.cancel();
          removeChild(parent, child);
        } else {
          // Calculate the new iterationDuration value to handle onComplete with last child in render()
          const childTLOffset = child._offset + child._delay;
          const childDur = childTLOffset + child.duration;
          if (childDur > iterationDuration) {
            iterationDuration = childDur;
          }
        }
      }
      // Make sure to also remove engine's children targets
      // NOTE: Avoid recursion?
      if (child._head) {
        remove(targets, child, propertyName);
      } else {
        child._hasChildren = false;
      }
    }, true);
    // Update iterationDuration value to handle onComplete with last child in render()
    if (!isUnd(/** @type {Renderable} */(parent).iterationDuration)) {
      /** @type {Renderable} */(parent).iterationDuration = iterationDuration;
    }
  } else {
    removeMatches = removeTargetsFromAnimation(
      targetsArray,
      /** @type {JSAnimation} */(parent),
      propertyName
    );
  }

  if (removeMatches && !parent._head) {
    parent._hasChildren = false;
    // Cancel the parent if there are no tweens and no children left after the removal
    // We have to check if the .cancel() method exist to handle cases where the parent is the engine itself
    if (/** @type {Renderable} */(parent).cancel) /** @type {Renderable} */(parent).cancel();
  }

  return targetsArray;
};

/**
 * @param  {Number} min
 * @param  {Number} max
 * @param  {Number} [decimalLength]
 * @return {Number}
 */
const random = (min, max, decimalLength) => { const m = 10 ** (decimalLength || 0); return floor((Math.random() * (max - min + (1 / m)) + min) * m) / m };

/**
 * @param  {String|Array} items
 * @return {any}
 */
const randomPick = items => items[random(0, items.length - 1)];

/**
 * Adapted from https://bost.ocks.org/mike/shuffle/
 * @param  {Array} items
 * @return {Array}
 */
const shuffle = items => {
  let m = items.length, t, i;
  while (m) { i = random(0, --m); t = items[m]; items[m] = items[i]; items[i] = t; }
  return items;
};

/**
 * @param  {Number|String} v
 * @param  {Number} decimalLength
 * @return {String}
 */
const roundPad = (v, decimalLength) => (+v).toFixed(decimalLength);

/**
 * @param  {Number} v
 * @param  {Number} totalLength
 * @param  {String} padString
 * @return {String}
 */
const padStart = (v, totalLength, padString) => `${v}`.padStart(totalLength, padString);

/**
 * @param  {Number} v
 * @param  {Number} totalLength
 * @param  {String} padString
 * @return {String}
 */
const padEnd = (v, totalLength, padString) => `${v}`.padEnd(totalLength, padString);

/**
 * @param  {Number} v
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
const wrap = (v, min, max) => (((v - min) % (max - min) + (max - min)) % (max - min)) + min;

/**
 * @param  {Number} value
 * @param  {Number} inLow
 * @param  {Number} inHigh
 * @param  {Number} outLow
 * @param  {Number} outHigh
 * @return {Number}
 */
const mapRange = (value, inLow, inHigh, outLow, outHigh) => outLow + ((value - inLow) / (inHigh - inLow)) * (outHigh - outLow);

/**
 * @param  {Number} degrees
 * @return {Number}
 */
const degToRad = degrees => degrees * PI / 180;

/**
 * @param  {Number} radians
 * @return {Number}
 */
const radToDeg = radians => radians * 180 / PI;

/**
 * https://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/
 * @param  {Number} start
 * @param  {Number} end
 * @param  {Number} amount
 * @param  {Renderable|Boolean} [renderable]
 * @return {Number}
 */
const lerp = (start, end, amount, renderable) => {
  let dt = K / globals.defaults.frameRate;
  if (renderable !== false) {
    const ticker = /** @type Renderable */
                   (renderable) ||
                   (engine._hasChildren && engine);
    if (ticker && ticker.deltaTime) {
      dt = ticker.deltaTime;
    }
  }
  const t = 1 - Math.exp(-amount * dt * .1);
  return !amount ? start : amount === 1 ? end : (1 - t) * start + t * end;
};

// Chain-able utilities

/**
 * @callback UtilityFunction
 * @param {...*} args
 * @return {Number|String}
 *
 * @param {UtilityFunction} fn
 * @param {Number} [last=0]
 * @return {function(...(Number|String)): function(Number|String): (Number|String)}
 */
const curry = (fn, last = 0) => (...args) => last ? v => fn(...args, v) : v => fn(v, ...args);

/**
 * @param {Function} fn
 * @return {function(...(Number|String))}
 */
const chain = fn => {
   return (...args) => {
    const result = fn(...args);
    return new Proxy(noop, {
      apply: (_, __, [v]) => result(v),
      get: (_, prop) => chain(/**@param {...Number|String} nextArgs */(...nextArgs) => {
        const nextResult = utils[prop](...nextArgs);
        return (/**@type {Number|String} */v) => nextResult(result(v));
      })
    });
  }
};

/**
 * @param {UtilityFunction} fn
 * @param {Number} [right]
 * @return {function(...(Number|String)): UtilityFunction}
 */
const makeChainable = (fn, right = 0) => (...args) => (args.length < fn.length ? chain(curry(fn, right)) : fn)(...args);

/**
 * @callback ChainedUtilsResult
 * @param {Number} value
 * @return {Number}
 *
 * @typedef {Object} ChainableUtils
 * @property {ChainedClamp} clamp
 * @property {ChainedRound} round
 * @property {ChainedSnap} snap
 * @property {ChainedWrap} wrap
 * @property {ChainedInterpolate} interpolate
 * @property {ChainedMapRange} mapRange
 * @property {ChainedRoundPad} roundPad
 * @property {ChainedPadStart} padStart
 * @property {ChainedPadEnd} padEnd
 * @property {ChainedDegToRad} degToRad
 * @property {ChainedRadToDeg} radToDeg
 *
 * @typedef {ChainableUtils & ChainedUtilsResult} ChainableUtil
 *
 * @callback ChainedClamp
 * @param {Number} min
 * @param {Number} max
 * @return {ChainableUtil}
 *
 * @callback ChainedRound
 * @param {Number} decimalLength
 * @return {ChainableUtil}
 *
 * @callback ChainedSnap
 * @param {Number} increment
 * @return {ChainableUtil}
 *
 * @callback ChainedWrap
 * @param {Number} min
 * @param {Number} max
 * @return {ChainableUtil}
 *
 * @callback ChainedInterpolate
 * @param {Number} start
 * @param {Number} end
 * @return {ChainableUtil}
 *
 * @callback ChainedMapRange
 * @param {Number} inLow
 * @param {Number} inHigh
 * @param {Number} outLow
 * @param {Number} outHigh
 * @return {ChainableUtil}
 *
 * @callback ChainedRoundPad
 * @param {Number} decimalLength
 * @return {ChainableUtil}
 *
 * @callback ChainedPadStart
 * @param {Number} totalLength
 * @param {String} padString
 * @return {ChainableUtil}
 *
 * @callback ChainedPadEnd
 * @param {Number} totalLength
 * @param {String} padString
 * @return {ChainableUtil}
 *
 * @callback ChainedDegToRad
 * @return {ChainableUtil}
 *
 * @callback ChainedRadToDeg
 * @return {ChainableUtil}
 */

const utils = {
  $: registerTargets,
  get: getTargetValue,
  set: setTargetValues,
  remove,
  cleanInlineStyles,
  random,
  randomPick,
  shuffle,
  lerp,
  sync,
  clamp: /** @type {typeof clamp & ChainedClamp} */(makeChainable(clamp)),
  round: /** @type {typeof round & ChainedRound} */(makeChainable(round)),
  snap: /** @type {typeof snap & ChainedSnap} */(makeChainable(snap)),
  wrap: /** @type {typeof wrap & ChainedWrap} */(makeChainable(wrap)),
  interpolate: /** @type {typeof interpolate & ChainedInterpolate} */(makeChainable(interpolate, 1)),
  mapRange: /** @type {typeof mapRange & ChainedMapRange} */(makeChainable(mapRange)),
  roundPad: /** @type {typeof roundPad & ChainedRoundPad} */(makeChainable(roundPad)),
  padStart: /** @type {typeof padStart & ChainedPadStart} */(makeChainable(padStart)),
  padEnd: /** @type {typeof padEnd & ChainedPadEnd} */(makeChainable(padEnd)),
  degToRad: /** @type {typeof degToRad & ChainedDegToRad} */(makeChainable(degToRad)),
  radToDeg: /** @type {typeof radToDeg & ChainedRadToDeg} */(makeChainable(radToDeg)),
};




/**
 * @typedef {Number|String|Function} TimePosition
 */

/**
 * Timeline's children offsets positions parser
 * @param  {Timeline} timeline
 * @param  {String} timePosition
 * @return {Number}
 */
const getPrevChildOffset = (timeline, timePosition) => {
  if (stringStartsWith(timePosition, '<')) {
    const goToPrevAnimationOffset = timePosition[1] === '<';
    const prevAnimation = /** @type {Tickable} */(timeline._tail);
    const prevOffset = prevAnimation ? prevAnimation._offset + prevAnimation._delay : 0;
    return goToPrevAnimationOffset ? prevOffset : prevOffset + prevAnimation.duration;
  }
};

/**
 * @param  {Timeline} timeline
 * @param  {TimePosition} [timePosition]
 * @return {Number}
 */
const parseTimelinePosition = (timeline, timePosition) => {
  let tlDuration = timeline.iterationDuration;
  if (tlDuration === minValue) tlDuration = 0;
  if (isUnd(timePosition)) return tlDuration;
  if (isNum(+timePosition)) return +timePosition;
  const timePosStr = /** @type {String} */(timePosition);
  const tlLabels = timeline ? timeline.labels : null;
  const hasLabels = !isNil(tlLabels);
  const prevOffset = getPrevChildOffset(timeline, timePosStr);
  const hasSibling = !isUnd(prevOffset);
  const matchedRelativeOperator = relativeValuesExecRgx.exec(timePosStr);
  if (matchedRelativeOperator) {
    const fullOperator = matchedRelativeOperator[0];
    const split = timePosStr.split(fullOperator);
    const labelOffset = hasLabels && split[0] ? tlLabels[split[0]] : tlDuration;
    const parsedOffset = hasSibling ? prevOffset : hasLabels ? labelOffset : tlDuration;
    const parsedNumericalOffset = +split[1];
    return getRelativeValue(parsedOffset, parsedNumericalOffset, fullOperator[0]);
  } else {
    return hasSibling ? prevOffset :
           hasLabels ? !isUnd(tlLabels[timePosStr]) ? tlLabels[timePosStr] :
           tlDuration : tlDuration;
  }
};

/**
 * @param {Timeline} tl
 * @return {Number}
 */
function getTimelineTotalDuration(tl) {
  return clampInfinity(((tl.iterationDuration + tl._loopDelay) * tl.iterationCount) - tl._loopDelay) || minValue;
}

/**
 * @overload
 * @param  {TimerParams} childParams
 * @param  {Timeline} tl
 * @param  {Number} timePosition
 * @return {Timeline}
 *
 * @overload
 * @param  {AnimationParams} childParams
 * @param  {Timeline} tl
 * @param  {Number} timePosition
 * @param  {TargetsParam} targets
 * @param  {Number} [index]
 * @param  {Number} [length]
 * @return {Timeline}
 *
 * @param  {TimerParams|AnimationParams} childParams
 * @param  {Timeline} tl
 * @param  {Number} timePosition
 * @param  {TargetsParam} [targets]
 * @param  {Number} [index]
 * @param  {Number} [length]
 */
function addTlChild(childParams, tl, timePosition, targets, index, length) {
  const isSetter = isNum(childParams.duration) && /** @type {Number} */(childParams.duration) <= minValue;
  // Offset the tl position with -minValue for 0 duration animations or .set() calls in order to align their end value with the defined position
  const adjustedPosition = isSetter ? timePosition - minValue : timePosition;
  tick(tl, adjustedPosition, 1, 1, tickModes.AUTO);
  const tlChild = targets ?
    new JSAnimation(targets,/** @type {AnimationParams} */(childParams), tl, adjustedPosition, false, index, length) :
    new Timer(/** @type {TimerParams} */(childParams), tl, adjustedPosition);
  tlChild.init(1);
  // TODO: Might be better to insert at a position relative to startTime?
  addChild(tl, tlChild);
  forEachChildren(tl, (/** @type {Renderable} */child) => {
    const childTLOffset = child._offset + child._delay;
    const childDur = childTLOffset + child.duration;
    if (childDur > tl.iterationDuration) tl.iterationDuration = childDur;
  });
  tl.duration = getTimelineTotalDuration(tl);
  return tl;
}

class Timeline extends Timer {

  /**
   * @param {TimelineParams} [parameters]
   */
  constructor(parameters = {}) {
    super(/** @type {TimerParams&TimelineParams} */(parameters), null, 0);
    /** @type {Number} */
    this.duration = 0; // TL duration starts at 0 and grows when adding children
    /** @type {Record<String, Number>} */
    this.labels = {};
    const defaultsParams = parameters.defaults;
    const globalDefaults = globals.defaults;
    /** @type {DefaultsParams} */
    this.defaults = defaultsParams ? mergeObjects(defaultsParams, globalDefaults) : globalDefaults;
    /** @type {Callback<this>} */
    this.onRender = parameters.onRender || globalDefaults.onRender;
    const tlPlaybackEase = setValue(parameters.playbackEase, globalDefaults.playbackEase);
    this._ease = tlPlaybackEase ? parseEasings(tlPlaybackEase) : null;
    /** @type {Number} */
    this.iterationDuration = 0;
  }

  /**
   * @overload
   * @param {TargetsParam} a1
   * @param {AnimationParams} a2
   * @param {TimePosition} [a3]
   * @return {this}
   *
   * @overload
   * @param {TimerParams} a1
   * @param {TimePosition} [a2]
   * @return {this}
   *
   * @param {TargetsParam|TimerParams} a1
   * @param {AnimationParams|TimePosition} a2
   * @param {TimePosition} [a3]
   */
  add(a1, a2, a3) {
    const isAnim = isObj(a2);
    const isTimer = isObj(a1);
    if (isAnim || isTimer) {
      this._hasChildren = true;
      if (isAnim) {
        const childParams = /** @type {AnimationParams} */(a2);
        // Check for function for children stagger positions
        if (isFnc(a3)) {
          const staggeredPosition = /** @type {Function} */(a3);
          const parsedTargetsArray = parseTargets(/** @type {TargetsParam} */(a1));
          // Store initial duration before adding new children that will change the duration
          const tlDuration = this.duration;
          // Store initial _iterationDuration before adding new children that will change the duration
          const tlIterationDuration = this.iterationDuration;
          // Store the original id in order to add specific indexes to the new animations ids
          const id = childParams.id;
          let i = 0;
          const parsedLength = parsedTargetsArray.length;
          parsedTargetsArray.forEach((/** @type {Target} */target) => {
            // Create a new parameter object for each staggered children
            const staggeredChildParams = { ...childParams };
            // Reset the duration of the timeline iteration before each stagger to prevent wrong start value calculation
            this.duration = tlDuration;
            this.iterationDuration = tlIterationDuration;
            if (!isUnd(id)) staggeredChildParams.id = id + '-' + i;
            addTlChild(
              staggeredChildParams,
              this,
              staggeredPosition(target, i, parsedLength, this),
              target,
              i,
              parsedLength
            );
            i++;
          });
        } else {
          addTlChild(
            childParams,
            this,
            parseTimelinePosition(this, a3),
            /** @type {TargetsParam} */(a1),
          );
        }
      } else {
        // It's a Timer
        addTlChild(
          /** @type TimerParams */(a1),
          this,
          parseTimelinePosition(this,/** @type TimePosition */(a2)),
        );
      }
      return this.init(1); // 1 = internalRender
    }
  }

  /**
   * @overload
   * @param {Tickable} [synced]
   * @param {TimePosition} [position]
   * @return {this}
   *
   * @overload
   * @param {globalThis.Animation} [synced]
   * @param {TimePosition} [position]
   * @return {this}
   *
   * @overload
   * @param {WAAPIAnimation} [synced]
   * @param {TimePosition} [position]
   * @return {this}
   *
   * @param {Tickable|WAAPIAnimation|globalThis.Animation} [synced]
   * @param {TimePosition} [position]
   */
  sync(synced, position) {
    if (isUnd(synced) || synced && isUnd(synced.pause)) return this;
    synced.pause();
    const duration = +(/** @type {globalThis.Animation} */(synced).effect ? /** @type {globalThis.Animation} */(synced).effect.getTiming().duration : /** @type {Tickable} */(synced).duration);
    return this.add(synced, { currentTime: [0, duration], duration, ease: 'linear' }, position);
  }

  /**
   * @param  {TargetsParam} targets
   * @param  {AnimationParams} parameters
   * @param  {TimePosition} [position]
   * @return {this}
   */
  set(targets, parameters, position) {
    if (isUnd(parameters)) return this;
    parameters.duration = minValue;
    parameters.composition = compositionTypes.replace;
    return this.add(targets, parameters, position);
  }

  /**
   * @param {Callback<Timer>} callback
   * @param {TimePosition} [position]
   * @return {this}
   */
  call(callback, position) {
    if (isUnd(callback) || callback && !isFnc(callback)) return this;
    return this.add({ duration: 0, onComplete: () => callback(this) }, position);
  }

  /**
   * @param {String} labelName
   * @param {TimePosition} [position]
   * @return {this}
   *
   */
  label(labelName, position) {
    if (isUnd(labelName) || labelName && !isStr(labelName)) return this;
    this.labels[labelName] = parseTimelinePosition(this,/** @type TimePosition */(position));
    return this;
  }

  /**
   * @param  {TargetsParam} targets
   * @param  {String} [propertyName]
   * @return {this}
   */
  remove(targets, propertyName) {
    remove(targets, this, propertyName);
    return this;
  }

  /**
   * @param  {Number} newDuration
   * @return {this}
   */
  stretch(newDuration) {
    const currentDuration = this.duration;
    if (currentDuration === normalizeTime(newDuration)) return this;
    const timeScale = newDuration / currentDuration;
    const labels = this.labels;
    forEachChildren(this, (/** @type {JSAnimation} */child) => child.stretch(child.duration * timeScale));
    for (let labelName in labels) labels[labelName] *= timeScale;
    return super.stretch(newDuration);
  }

  /**
   * @return {this}
   */
  refresh() {
    forEachChildren(this, (/** @type {JSAnimation} */child) => {
      if (child.refresh) child.refresh();
    });
    return this;
  }

  /**
   * @return {this}
   */
  revert() {
    super.revert();
    forEachChildren(this, (/** @type {JSAnimation} */child) => child.revert, true);
    return cleanInlineStyles(this);
  }

  /**
   * @param  {Callback<this>} [callback]
   * @return {Promise}
   */
  then(callback) {
    return super.then(callback);
  }
}

/**
 * @param {TimelineParams} [parameters]
 * @return {Timeline}
 */
const createTimeline = parameters => new Timeline(parameters).init();




class Animatable {
  /**
   * @param {TargetsParam} targets
   * @param {AnimatableParams} parameters
   */
  constructor(targets, parameters) {
    if (globals.scope) globals.scope.revertibles.push(this);
    /** @type {AnimationParams} */
    const globalParams = {};
    const properties = {};
    this.targets = [];
    this.animations = {};
    if (isUnd(targets) || isUnd(parameters)) return;
    for (let propName in parameters) {
      const paramValue = parameters[propName];
      if (isKey(propName)) {
        properties[propName] = paramValue;
      } else {
        globalParams[propName] = paramValue;
      }
    }
    for (let propName in properties) {
      const propValue = properties[propName];
      const isObjValue = isObj(propValue);
      /** @type {TweenParamsOptions} */
      let propParams = {};
      let to = '+=0';
      if (isObjValue) {
        const unit = propValue.unit;
        if (isStr(unit)) to += unit;
      } else {
        propParams.duration = propValue;
      }
      propParams[propName] = isObjValue ? mergeObjects({ to }, propValue) : to;
      const animParams = mergeObjects(globalParams, propParams);
      animParams.composition = compositionTypes.replace;
      animParams.autoplay = false;
      const animation = this.animations[propName] = new JSAnimation(targets, animParams, null, 0, false).init();
      if (!this.targets.length) this.targets.push(...animation.targets);
      /** @type {AnimatableProperty} */
      this[propName] = (to, duration, ease) => {
        const tween = /** @type {Tween} */(animation._head);
        if (isUnd(to) && tween) {
          const numbers = tween._numbers;
          if (numbers && numbers.length) {
            return numbers;
          } else {
            return tween._modifier(tween._number);
          }
        } else {
          forEachChildren(animation, (/** @type {Tween} */tween) => {
            if (isArr(to)) {
              for (let i = 0, l = /** @type {Array} */(to).length; i < l; i++) {
                if (!isUnd(tween._numbers[i])) {
                  tween._fromNumbers[i] = /** @type {Number} */(tween._modifier(tween._numbers[i]));
                  tween._toNumbers[i] = to[i];
                }
              }
            } else {
              tween._fromNumber = /** @type {Number} */(tween._modifier(tween._number));
              tween._toNumber = /** @type {Number} */(to);
            }
            if (!isUnd(ease)) tween._ease = parseEasings(ease);
            tween._currentTime = 0;
          });
          if (!isUnd(duration)) animation.stretch(duration);
          animation.reset(1).resume();
          return this;
        }
      };
    }
  }

  revert() {
    for (let propName in this.animations) {
      this[propName] = noop;
      this.animations[propName].revert();
    }
    this.animations = {};
    this.targets.length = 0;
    return this;
  }
}

/**
 * @param {TargetsParam} targets
 * @param {AnimatableParams} parameters
 * @return {AnimatableObject}
 */
const createAnimatable = (targets, parameters) => /** @type {AnimatableObject} */(new Animatable(targets, parameters));




/*
 * Spring ease solver adapted from https://webkit.org/demos/spring/spring.js
 * Webkit Copyright © 2016 Apple Inc
 */

/**
 * @typedef {Object} SpringParams
 * @property {Number} [mass=1] - Mass, default 1
 * @property {Number} [stiffness=100] - Stiffness, default 100
 * @property {Number} [damping=10] - Damping, default 10
 * @property {Number} [velocity=0] - Initial velocity, default 0
 */

class Spring {
  /**
   * @param {SpringParams} [parameters]
   */
  constructor(parameters = {}) {
    this.timeStep = .02; // Interval fed to the solver to calculate duration
    this.restThreshold = .0005; // Values below this threshold are considered resting position
    this.restDuration = 200; // Duration in ms used to check if the spring is resting after reaching restThreshold
    this.maxDuration = 60000; // The maximum allowed spring duration in ms (default 1 min)
    this.maxRestSteps = this.restDuration / this.timeStep / K; // How many steps allowed after reaching restThreshold before stopping the duration calculation
    this.maxIterations = this.maxDuration / this.timeStep / K; // Calculate the maximum iterations allowed based on maxDuration
    this.m = clamp(setValue(parameters.mass, 1), 0, K);
    this.s = clamp(setValue(parameters.stiffness, 100), 1, K);
    this.d = clamp(setValue(parameters.damping, 10), .1, K);
    this.v = clamp(setValue(parameters.velocity, 0), -1e3, K);
    this.w0 = 0;
    this.zeta = 0;
    this.wd = 0;
    this.b = 0;
    this.solverDuration = 0;
    this.duration = 0;
    this.compute();
    /** @type {EasingFunction} */
    this.ease = t => t === 0 || t === 1 ? t : this.solve(t * this.solverDuration);
  }

  /** @type {EasingFunction} */
  solve(time) {
    const { zeta, w0, wd, b } = this;
    let t = time;
    if (zeta < 1) {
      t = exp(-t * zeta * w0) * (1 * cos(wd * t) + b * sin(wd * t));
    } else {
      t = (1 + b * t) * exp(-t * w0);
    }
    return 1 - t;
  }

  compute() {
    const { maxRestSteps, maxIterations, restThreshold, timeStep, m, d, s, v } = this;
    const w0 = this.w0 = clamp(sqrt(s / m), minValue, K);
    const zeta = this.zeta = d / (2 * sqrt(s * m));
    const wd = this.wd = zeta < 1 ? w0 * sqrt(1 - zeta * zeta) : 0;
    this.b = zeta < 1 ? (zeta * w0 + -v) / wd : -v + w0;
    let solverTime = 0;
    let restSteps = 0;
    let iterations = 0;
    while (restSteps < maxRestSteps && iterations < maxIterations) {
      if (abs(1 - this.solve(solverTime)) < restThreshold) {
        restSteps++;
      } else {
        restSteps = 0;
      }
      this.solverDuration = solverTime;
      solverTime += timeStep;
      iterations++;
    }
    this.duration = round(this.solverDuration * K, 0) * globals.timeScale;
  }

  get mass() {
    return this.m;
  }

  set mass(v) {
    this.m = clamp(setValue(v, 1), 0, K);
    this.compute();
  }

  get stiffness() {
    return this.s;
  }

  set stiffness(v) {
    this.s = clamp(setValue(v, 100), 1, K);
    this.compute();
  }

  get damping() {
    return this.d;
  }

  set damping(v) {
    this.d = clamp(setValue(v, 10), .1, K);
    this.compute();
  }

  get velocity() {
    return this.v;
  }

  set velocity(v) {
    this.v = clamp(setValue(v, 0), -1e3, K);
    this.compute();
  }
}

/**
 * @param {SpringParams} [parameters]
 * @returns {Spring}
 */
const createSpring = (parameters) => new Spring(parameters);




/**
 * @param {Event} e
 */
const preventDefault = e => {
  if (e.cancelable) e.preventDefault();
};

class DOMProxy {
  /** @param {Object} el */
  constructor(el) {
    this.el = el;
    this.zIndex = 0;
    this.parentElement = null;
    this.classList = {
      add: noop,
      remove: noop,
    };
  }

  get x() { return this.el.x || 0 };
  set x(v) { this.el.x = v; };

  get y() { return this.el.y || 0 };
  set y(v) { this.el.y = v; };

  get width() { return this.el.width || 0 };
  set width(v) { this.el.width = v; };

  get height() { return this.el.height || 0 };
  set height(v) { this.el.height = v; };

  getBoundingClientRect() {
    return {
      top: this.y,
      right: this.x,
      bottom: this.y + this.height,
      left: this.x + this.width,
    }
  }
}

class Transforms {
  /**
   * @param {DOMTarget|DOMProxy} $el
   */
  constructor($el) {
    this.$el = $el;
    this.inlineTransforms = [];
    this.point = new DOMPoint();
    this.inversedMatrix = this.getMatrix().inverse();
  }

  /**
   * @param {Number} x
   * @param {Number} y
   * @return {DOMPoint}
   */
  normalizePoint(x, y) {
    this.point.x = x;
    this.point.y = y;
    return this.point.matrixTransform(this.inversedMatrix);
  }

  /**
   * @callback TraverseParentsCallback
   * @param {DOMTarget} $el
   * @param {Number} i
   */

  /**
   * @param {TraverseParentsCallback} cb
   */
  traverseUp(cb) {
    let $el = /** @type {DOMTarget|Document} */(this.$el.parentElement), i = 0;
    while ($el && $el !== doc) {
      cb(/** @type {DOMTarget} */($el), i);
      $el = /** @type {DOMTarget} */($el.parentElement);
      i++;
    }
  }

  getMatrix() {
    const matrix = new DOMMatrix();
    this.traverseUp($el => {
      const transformValue = getComputedStyle($el).transform;
      if (transformValue) {
        const elMatrix = new DOMMatrix(transformValue);
        matrix.preMultiplySelf(elMatrix);
      }
    });
    return matrix;
  }

  remove() {
    this.traverseUp(($el, i) => {
      this.inlineTransforms[i] = $el.style.transform;
      $el.style.transform = 'none';
    });
  }

  revert() {
    this.traverseUp(($el, i) => {
      const ct = this.inlineTransforms[i];
      if (ct === '') {
        $el.style.removeProperty('transform');
      } else {
        $el.style.transform = ct;
      }
    });
  }
}

/**
 * @template {Array<Number>|DOMTargetSelector|String|Number|Boolean|Function|DraggableCursorParams} T
 * @param {T | ((draggable: Draggable) => T)} value
 * @param {Draggable} draggable
 * @return {T}
 */
const parseDraggableFunctionParameter = (value, draggable) => value && isFnc(value) ? /** @type {Function} */(value)(draggable) : value;

let zIndex = 0;

class Draggable {
  /**
   * @param {TargetsParam} target
   * @param {DraggableParams} [parameters]
   */
  constructor(target, parameters = {}) {
    if (!target) return;
    if (globals.scope) globals.scope.revertibles.push(this);
    const paramX = parameters.x;
    const paramY = parameters.y;
    const trigger = parameters.trigger;
    const modifier = parameters.modifier;
    const ease = parameters.releaseEase;
    const customEase = ease && parseEasings(ease);
    const hasSpring = !isUnd(ease) && !isUnd(/** @type {Spring} */(ease).ease);
    const xProp = /** @type {String} */(isObj(paramX) && !isUnd(/** @type {Object} */(paramX).mapTo) ? /** @type {Object} */(paramX).mapTo : 'translateX');
    const yProp = /** @type {String} */(isObj(paramY) && !isUnd(/** @type {Object} */(paramY).mapTo) ? /** @type {Object} */(paramY).mapTo : 'translateY');
    const container = parseDraggableFunctionParameter(parameters.container, this);
    this.containerArray = isArr(container) ? container : null;
    this.$container = /** @type {HTMLElement} */(container && !this.containerArray ? parseTargets(/** @type {DOMTarget} */(container))[0] : doc.body);
    this.useWin = this.$container === doc.body;
    /** @type {Window | HTMLElement} */
    this.$scrollContainer = this.useWin ? win : this.$container;
    this.$target = /** @type {HTMLElement} */(isObj(target) ? new DOMProxy(target) : parseTargets(target)[0]);
    this.$trigger = /** @type {HTMLElement} */(parseTargets(trigger ? trigger : target)[0]);
    this.fixed = getTargetValue(this.$target, 'position') === 'fixed';
    // Refreshable parameters
    this.isFinePointer = true;
    /** @type {[Number, Number, Number, Number]} */
    this.containerPadding = [0, 0, 0, 0];
    /** @type {Number} */
    this.containerFriction = 0;
    /** @type {Number} */
    this.releaseContainerFriction = 0;
    /** @type {Number|Array<Number>} */
    this.snapX = 0;
    /** @type {Number|Array<Number>} */
    this.snapY = 0;
    /** @type {Number} */
    this.scrollSpeed = 0;
    /** @type {Number} */
    this.scrollThreshold = 0;
    /** @type {Number} */
    this.dragSpeed = 0;
    /** @type {Number} */
    this.maxVelocity = 0;
    /** @type {Number} */
    this.minVelocity = 0;
    /** @type {Number} */
    this.velocityMultiplier = 0;
    /** @type {Boolean|DraggableCursorParams} */
    this.cursor = false;
    /** @type {Spring} */
    this.releaseXSpring = hasSpring ? /** @type {Spring} */(ease) : createSpring({
      mass: setValue(parameters.releaseMass, 1),
      stiffness: setValue(parameters.releaseStiffness, 80),
      damping: setValue(parameters.releaseDamping, 20),
    });
    /** @type {Spring} */
    this.releaseYSpring = hasSpring ? /** @type {Spring} */(ease) : createSpring({
      mass: setValue(parameters.releaseMass, 1),
      stiffness: setValue(parameters.releaseStiffness, 80),
      damping: setValue(parameters.releaseDamping, 20),
    });
    /** @type {EasingFunction} */
    this.releaseEase = customEase || eases.outQuint;
    /** @type {Boolean} */
    this.hasReleaseSpring = hasSpring;
    /** @type {Callback<this>} */
    this.onGrab = parameters.onGrab || noop;
    /** @type {Callback<this>} */
    this.onDrag = parameters.onDrag || noop;
    /** @type {Callback<this>} */
    this.onRelease = parameters.onRelease || noop;
    /** @type {Callback<this>} */
    this.onUpdate = parameters.onUpdate || noop;
    /** @type {Callback<this>} */
    this.onSettle = parameters.onSettle || noop;
    /** @type {Callback<this>} */
    this.onSnap = parameters.onSnap || noop;
    /** @type {Callback<this>} */
    this.onResize = parameters.onResize || noop;
    /** @type {Callback<this>} */
    this.onAfterResize = parameters.onAfterResize || noop;
    /** @type {[Number, Number]} */
    this.disabled = [0, 0];
    /** @type {AnimatableParams} */
    const animatableParams = {};
    if (modifier) animatableParams.modifier = modifier;
    if (isUnd(paramX) || paramX === true) {
      animatableParams[xProp] = 0;
    } else if (isObj(paramX)) {
      const paramXObject = /** @type {DraggableAxisParam} */(paramX);
      const animatableXParams = {};
      if (paramXObject.modifier) animatableXParams.modifier = paramXObject.modifier;
      if (paramXObject.composition) animatableXParams.composition = paramXObject.composition;
      animatableParams[xProp] = animatableXParams;
    } else if (paramX === false) {
      animatableParams[xProp] = 0;
      this.disabled[0] = 1;
    }
    if (isUnd(paramY) || paramY === true) {
      animatableParams[yProp] = 0;
    } else if (isObj(paramY)) {
      const paramYObject = /** @type {DraggableAxisParam} */(paramY);
      const animatableYParams = {};
      if (paramYObject.modifier) animatableYParams.modifier = paramYObject.modifier;
      if (paramYObject.composition) animatableYParams.composition = paramYObject.composition;
      animatableParams[yProp] = animatableYParams;
    } else if (paramY === false) {
      animatableParams[yProp] = 0;
      this.disabled[1] = 1;
    }
    /** @type {AnimatableObject} */
    this.animate = /** @type {AnimatableObject} */(new Animatable(this.$target, animatableParams));
    // Internal props
    this.xProp = xProp;
    this.yProp = yProp;
    this.destX = 0;
    this.destY = 0;
    this.deltaX = 0;
    this.deltaY = 0;
    this.scroll = {x: 0, y: 0};
    /** @type {[Number, Number, Number, Number]} */
    this.coords = [this.x, this.y, 0, 0]; // x, y, temp x, temp y
    /** @type {[Number, Number]} */
    this.snapped = [0, 0]; // x, y
    /** @type {[Number, Number, Number, Number, Number, Number, Number, Number]} */
    this.pointer = [0, 0, 0, 0, 0, 0, 0, 0]; // x1, y1, x2, y2, temp x1, temp y1, temp x2, temp y2
    /** @type {[Number, Number]} */
    this.scrollView = [0, 0]; // w, h
    /** @type {[Number, Number, Number, Number]} */
    this.dragArea = [0, 0, 0, 0]; // x, y, w, h
    /** @type {[Number, Number, Number, Number]} */
    this.containerBounds = [-1e12, maxValue, maxValue, -1e12]; // t, r, b, l
    /** @type {[Number, Number, Number, Number]} */
    this.scrollBounds = [0, 0, 0, 0]; // t, r, b, l
    /** @type {[Number, Number, Number, Number]} */
    this.targetBounds = [0, 0, 0, 0]; // t, r, b, l
    /** @type {[Number, Number]} */
    this.window = [0, 0]; // w, h
    /** @type {[Number, Number, Number]} */
    this.velocityStack = [0, 0, 0];
    /** @type {Number} */
    this.velocityStackIndex = 0;
    /** @type {Number} */
    this.velocityTime = now();
    /** @type {Number} */
    this.velocity = 0;
    /** @type {Number} */
    this.angle = 0;
    /** @type {JSAnimation} */
    this.cursorStyles = null;
    /** @type {JSAnimation} */
    this.triggerStyles = null;
    /** @type {JSAnimation} */
    this.bodyStyles = null;
    /** @type {JSAnimation} */
    this.targetStyles = null;
    /** @type {JSAnimation} */
    this.touchActionStyles = null;
    this.transforms = new Transforms(this.$target);
    this.overshootCoords = { x: 0, y: 0 };
    this.overshootXTicker = new Timer({ autoplay: false }, null, 0).init();
    this.overshootYTicker = new Timer({ autoplay: false }, null, 0).init();
    this.updateTicker = new Timer({ autoplay: false }, null, 0).init();
    this.overshootXTicker.onUpdate = () => {
      if (this.disabled[0]) return;
      this.updated = true;
      this.manual = true;
      this.animate[this.xProp](this.overshootCoords.x, 0);
    };
    this.overshootXTicker.onComplete = () => {
      if (this.disabled[0]) return;
      this.manual = false;
      this.animate[this.xProp](this.overshootCoords.x, 0);
    };
    this.overshootYTicker.onUpdate = () => {
      if (this.disabled[1]) return;
      this.updated = true;
      this.manual = true;
      this.animate[this.yProp](this.overshootCoords.y, 0);
    };
    this.overshootYTicker.onComplete = () => {
      if (this.disabled[1]) return;
      this.manual = false;
      this.animate[this.yProp](this.overshootCoords.y, 0);
    };
    this.updateTicker.onUpdate = () => this.update();
    this.contained = !isUnd(container);
    this.manual = false;
    this.grabbed = false;
    this.dragged = false;
    this.updated = false;
    this.released = false;
    this.canScroll = false;
    this.enabled = false;
    this.initialized = false;
    this.activeProp = this.disabled[1] ? xProp : yProp;
    this.animate.animations[this.activeProp].onRender = () => {
      const hasUpdated = this.updated;
      const hasMoved = this.grabbed && hasUpdated;
      const hasReleased = !hasMoved && this.released;
      const x = this.x;
      const y = this.y;
      const dx = x - this.coords[2];
      const dy = y - this.coords[3];
      this.deltaX = dx;
      this.deltaY = dy;
      this.coords[2] = x;
      this.coords[3] = y;
      if (hasUpdated) {
        this.onUpdate(this);
      }
      if (!hasReleased) {
        this.updated = false;
      } else {
        this.computeVelocity(dx, dy);
        this.angle = atan2(dy, dx);
      }
    };
    this.animate.animations[this.activeProp].onComplete = () => {
      if ((!this.grabbed && this.released)) {
        // Set eleased to false before calling onSettle to avoid recursion
        this.released = false;
      }
      if (!this.manual) {
        this.deltaX = 0;
        this.deltaY = 0;
        this.velocity = 0;
        this.velocityStack[0] = 0;
        this.velocityStack[1] = 0;
        this.velocityStack[2] = 0;
        this.velocityStackIndex = 0;
        this.onSettle(this);
      }
    };
    this.resizeTicker = new Timer({
      autoplay: false,
      duration: 150 * globals.timeScale,
      onComplete: () => {
        this.onResize(this);
        this.refresh();
        this.onAfterResize(this);
      },
    }).init();
    this.parameters = parameters;
    this.resizeObserver = new ResizeObserver(() => {
      if (this.initialized) {
        this.resizeTicker.restart();
      } else {
        this.initialized = true;
      }
    });
    this.enable();
    this.refresh();
    this.resizeObserver.observe(this.$container);
    if (!isObj(target)) this.resizeObserver.observe(this.$target);
  }

  /**
   * @param  {Number} dx
   * @param  {Number} dy
   * @return {Number}
   */
  computeVelocity(dx, dy) {
    const prevTime = this.velocityTime;
    const curTime = now();
    const elapsed = curTime - prevTime;
    if (elapsed < 17) return this.velocity;
    this.velocityTime = curTime;
    const velocityStack = this.velocityStack;
    const vMul = this.velocityMultiplier;
    const minV = this.minVelocity;
    const maxV = this.maxVelocity;
    const vi = this.velocityStackIndex;
    velocityStack[vi] = round(clamp((sqrt(dx * dx + dy * dy) / elapsed) * vMul, minV, maxV), 5);
    const velocity = max(velocityStack[0], velocityStack[1], velocityStack[2]);
    this.velocity = velocity;
    this.velocityStackIndex = (vi + 1) % 3;
    return velocity;
  }

  /**
   * @param {Number}  x
   * @param {Boolean} [muteUpdateCallback]
   * @return {this}
   */
  setX(x, muteUpdateCallback = false) {
    if (this.disabled[0]) return;
    const v = round(x, 5);
    this.overshootXTicker.pause();
    this.manual = true;
    this.updated = !muteUpdateCallback;
    this.destX = v;
    this.snapped[0] = snap(v, this.snapX);
    this.animate[this.xProp](v, 0);
    this.manual = false;
    return this;
  }

  /**
   * @param {Number}  y
   * @param {Boolean} [muteUpdateCallback]
   * @return {this}
   */
  setY(y, muteUpdateCallback = false) {
    if (this.disabled[1]) return;
    const v = round(y, 5);
    this.overshootYTicker.pause();
    this.manual = true;
    this.updated = !muteUpdateCallback;
    this.destY = v;
    this.snapped[1] = snap(v, this.snapY);
    this.animate[this.yProp](v, 0);
    this.manual = false;
    return this;
  }

  get x() {
    return round(/** @type {Number} */(this.animate[this.xProp]()), globals.precision);
  }

  set x(x) {
    this.setX(x, false);
  }

  get y() {
    return round(/** @type {Number} */(this.animate[this.yProp]()), globals.precision);
  }

  set y(y) {
    this.setY(y, false);
  }

  get progressX() {
    return mapRange(this.x, this.containerBounds[3], this.containerBounds[1], 0, 1);
  }

  set progressX(x) {
    this.setX(mapRange(x, 0, 1, this.containerBounds[3], this.containerBounds[1]), false);
  }

  get progressY() {
    return mapRange(this.y, this.containerBounds[0], this.containerBounds[2], 0, 1);
  }

  set progressY(y) {
    this.setY(mapRange(y, 0, 1, this.containerBounds[0], this.containerBounds[2]), false);
  }

  updateScrollCoords() {
    const sx = round(this.useWin ? win.scrollX : this.$container.scrollLeft, 0);
    const sy = round(this.useWin ? win.scrollY : this.$container.scrollTop, 0);
    const [ cpt, cpr, cpb, cpl ] = this.containerPadding;
    const threshold = this.scrollThreshold;
    this.scroll.x = sx;
    this.scroll.y = sy;
    this.scrollBounds[0] = sy - this.targetBounds[0] + cpt - threshold;
    this.scrollBounds[1] = sx - this.targetBounds[1] - cpr + threshold;
    this.scrollBounds[2] = sy - this.targetBounds[2] - cpb + threshold;
    this.scrollBounds[3] = sx - this.targetBounds[3] + cpl - threshold;
  }

  updateBoundingValues() {
    const $container = this.$container;
    const cx = this.x;
    const cy = this.y;
    const cx2 = this.coords[2];
    const cy2 =  this.coords[3];
    // Prevents interfering with the scroll area in cases the target is outside of the container
    // Make sure the temp coords are also adjuset to prevents wrong delta calculation on updates
    this.coords[2] = 0;
    this.coords[3] = 0;
    this.setX(0, true);
    this.setY(0, true);
    this.transforms.remove();
    const iw = this.window[0] = win.innerWidth;
    const ih = this.window[1] = win.innerHeight;
    const uw = this.useWin;
    const sw = $container.scrollWidth;
    const sh = $container.scrollHeight;
    const fx = this.fixed;
    const transformContainerRect = $container.getBoundingClientRect();
    const [ cpt, cpr, cpb, cpl ] = this.containerPadding;
    this.dragArea[0] = uw ? 0 : transformContainerRect.left;
    this.dragArea[1] = uw ? 0 : transformContainerRect.top;
    this.scrollView[0] = uw ? clamp(sw, iw, sw) : sw;
    this.scrollView[1] = uw ? clamp(sh, ih, sh) : sh;
    this.updateScrollCoords();
    const { width, height, left, top, right, bottom } = $container.getBoundingClientRect();
    this.dragArea[2] = round(uw ? clamp(width, iw, iw) : width, 0);
    this.dragArea[3] = round(uw ? clamp(height, ih, ih) : height, 0);
    const containerOverflow = getTargetValue($container, 'overflow');
    const visibleOverflow = containerOverflow === 'visible';
    const hiddenOverflow = containerOverflow === 'hidden';
    this.canScroll = fx ? false :
      this.contained &&
      (($container === doc.body && visibleOverflow) || (!hiddenOverflow && !visibleOverflow)) &&
      (sw > this.dragArea[2] + cpl - cpr || sh > this.dragArea[3] + cpt - cpb) &&
      (!this.containerArray || (this.containerArray && !isArr(this.containerArray)));
    if (this.contained) {
      const sx = this.scroll.x;
      const sy = this.scroll.y;
      const canScroll = this.canScroll;
      const targetRect = this.$target.getBoundingClientRect();
      const hiddenLeft = canScroll ? uw ? 0 : $container.scrollLeft : 0;
      const hiddenTop = canScroll ? uw ? 0 : $container.scrollTop : 0;
      const hiddenRight = canScroll ? this.scrollView[0] - hiddenLeft - width : 0;
      const hiddenBottom = canScroll ? this.scrollView[1] - hiddenTop - height : 0;
      this.targetBounds[0] = round((targetRect.top + sy) - (uw ? 0 : top), 0);
      this.targetBounds[1] = round((targetRect.right + sx) - (uw ? iw : right), 0);
      this.targetBounds[2] = round((targetRect.bottom + sy) - (uw ? ih : bottom), 0);
      this.targetBounds[3] = round((targetRect.left + sx) - (uw ? 0 : left), 0);
      if (this.containerArray) {
        this.containerBounds[0] = this.containerArray[0] + cpt;
        this.containerBounds[1] = this.containerArray[1] - cpr;
        this.containerBounds[2] = this.containerArray[2] - cpb;
        this.containerBounds[3] = this.containerArray[3] + cpl;
      } else {
        this.containerBounds[0] = -round(targetRect.top - (fx ? clamp(top, 0, ih) : top) + hiddenTop - cpt, 0);
        this.containerBounds[1] = -round(targetRect.right - (fx ? clamp(right, 0, iw) : right) - hiddenRight + cpr, 0);
        this.containerBounds[2] = -round(targetRect.bottom - (fx ? clamp(bottom, 0, ih) : bottom) - hiddenBottom + cpb, 0);
        this.containerBounds[3] = -round(targetRect.left - (fx ? clamp(left, 0, iw) : left) + hiddenLeft - cpl, 0);
      }
    }
    this.transforms.revert();
    // Restore coordinates
    this.coords[2] = cx2;
    this.coords[3] = cy2;
    this.setX(cx, true);
    this.setY(cy, true);
  }

  /**
   * Returns 0 if not OB, 1 if x is OB, 2 if y is OB, 3 if both x and y are OB
   *
   * @param  {Array} bounds
   * @param  {Number} x
   * @param  {Number} y
   * @return {Number}
   */
  isOutOfBounds(bounds, x, y) {
    if (!this.contained) return 0;
    const [ bt, br, bb, bl ] = bounds;
    const [ dx, dy ] = this.disabled;
    const obx = !dx && x < bl || !dx && x > br;
    const oby = !dy && y < bt || !dy && y > bb;
    return obx && !oby ? 1 : !obx && oby ? 2 : obx && oby ? 3 : 0;
  }

  refresh() {
    const params = this.parameters;
    const paramX = params.x;
    const paramY = params.y;
    const container = parseDraggableFunctionParameter(params.container, this);
    const cp = parseDraggableFunctionParameter(params.containerPadding, this) || 0;
    const containerPadding = /** @type {[Number, Number, Number, Number]} */(isArr(cp) ? cp : [cp, cp, cp, cp]);
    const cx = this.x;
    const cy = this.y;
    const parsedCursorStyles = parseDraggableFunctionParameter(params.cursor, this);
    const cursorStyles = { onHover: 'grab', onGrab: 'grabbing' };
    if (parsedCursorStyles) {
      const { onHover, onGrab } = /** @type {DraggableCursorParams} */(parsedCursorStyles);
      if (onHover) cursorStyles.onHover = onHover;
      if (onGrab) cursorStyles.onGrab = onGrab;
    }
    this.containerArray = isArr(container) ? container : null;
    this.$container = /** @type {HTMLElement} */(container && !this.containerArray ? parseTargets(/** @type {DOMTarget} */(container))[0] : doc.body);
    this.useWin = this.$container === doc.body;
    /** @type {Window | HTMLElement} */
    this.$scrollContainer = this.useWin ? win : this.$container;
    this.isFinePointer = matchMedia('(pointer:fine)').matches;
    this.containerPadding = setValue(containerPadding, [0, 0, 0, 0]);
    this.containerFriction = clamp(setValue(parseDraggableFunctionParameter(params.containerFriction, this), .8), 0, 1);
    this.releaseContainerFriction = clamp(setValue(parseDraggableFunctionParameter(params.releaseContainerFriction, this), this.containerFriction), 0, 1);
    this.snapX = parseDraggableFunctionParameter(isObj(paramX) && !isUnd(paramX.snap) ? paramX.snap : params.snap, this);
    this.snapY = parseDraggableFunctionParameter(isObj(paramY) && !isUnd(paramY.snap) ? paramY.snap : params.snap, this);
    this.scrollSpeed = setValue(parseDraggableFunctionParameter(params.scrollSpeed, this), 1.5);
    this.scrollThreshold = setValue(parseDraggableFunctionParameter(params.scrollThreshold, this), 20);
    this.dragSpeed = setValue(parseDraggableFunctionParameter(params.dragSpeed, this), 1);
    this.minVelocity = setValue(parseDraggableFunctionParameter(params.minVelocity, this), 0);
    this.maxVelocity = setValue(parseDraggableFunctionParameter(params.maxVelocity, this), 50);
    this.velocityMultiplier = setValue(parseDraggableFunctionParameter(params.velocityMultiplier, this), 1);
    this.cursor = parsedCursorStyles === false ? false : cursorStyles;
    this.updateBoundingValues();

    // const ob = this.isOutOfBounds(this.containerBounds, this.x, this.y);
    // if (ob === 1 || ob === 3) this.progressX = px;
    // if (ob === 2 || ob === 3) this.progressY = py;

    // if (this.initialized && this.contained) {
    //   if (this.progressX !== px) this.progressX = px;
    //   if (this.progressY !== py) this.progressY = py;
    // }

    const [ bt, br, bb, bl ] = this.containerBounds;
    this.setX(clamp(cx, bl, br), true);
    this.setY(clamp(cy, bt, bb), true);
  }

  update() {
    this.updateScrollCoords();
    if (this.canScroll) {
      const [ cpt, cpr, cpb, cpl ] = this.containerPadding;
      const [ sw, sh ] = this.scrollView;
      const daw = this.dragArea[2];
      const dah = this.dragArea[3];
      const csx = this.scroll.x;
      const csy = this.scroll.y;
      const nsw = this.$container.scrollWidth;
      const nsh = this.$container.scrollHeight;
      const csw = this.useWin ? clamp(nsw, this.window[0], nsw) : nsw;
      const csh = this.useWin ? clamp(nsh, this.window[1], nsh) : nsh;
      const swd = sw - csw;
      const shd = sh - csh;
      // Handle cases where the scrollarea dimensions changes during drag
      if (this.dragged && swd > 0) {
        this.coords[0] -= swd;
        this.scrollView[0] = csw;
      }
      if (this.dragged && shd > 0) {
        this.coords[1] -= shd;
        this.scrollView[1] = csh;
      }
      // Handle autoscroll when target is at the edges of the scroll bounds
      const s = this.scrollSpeed * 10;
      const threshold = this.scrollThreshold;
      const [ x, y ] = this.coords;
      const [ st, sr, sb, sl ] = this.scrollBounds;
      const t = round(clamp((y - st + cpt) / threshold, -1, 0) * s, 0);
      const r = round(clamp((x - sr - cpr) / threshold, 0, 1) * s, 0);
      const b = round(clamp((y - sb - cpb) / threshold, 0, 1) * s, 0);
      const l = round(clamp((x - sl + cpl) / threshold, -1, 0) * s, 0);
      if (t || b || l || r) {
        const [nx, ny] = this.disabled;
        let scrollX = csx;
        let scrollY = csy;
        if (!nx) {
          scrollX = round(clamp(csx + (l || r), 0, sw - daw), 0);
          this.coords[0] -= csx - scrollX;
        }
        if (!ny) {
          scrollY = round(clamp(csy + (t || b), 0, sh - dah), 0);
          this.coords[1] -= csy - scrollY;
        }
        // Note: Safari mobile requires to use different scroll methods depending if using the window or not
        if (this.useWin) {
          this.$scrollContainer.scrollBy(-(csx - scrollX), -(csy - scrollY));
        } else {
          this.$scrollContainer.scrollTo(scrollX, scrollY);
        }
      }
    }
    const [ ct, cr, cb, cl ] = this.containerBounds;
    const [ px1, py1, px2, py2, px3, py3 ] = this.pointer;
    this.coords[0] += (px1 - px3) * this.dragSpeed;
    this.coords[1] += (py1 - py3) * this.dragSpeed;
    this.pointer[4] = px1;
    this.pointer[5] = py1;
    const [ cx, cy ] = this.coords;
    const [ sx, sy ] = this.snapped;
    const cf = (1 - this.containerFriction) * this.dragSpeed;
    this.setX(cx > cr ? cr + (cx - cr) * cf : cx < cl ? cl + (cx - cl) * cf : cx, false);
    this.setY(cy > cb ? cb + (cy - cb) * cf : cy < ct ? ct + (cy - ct) * cf : cy, false);
    this.computeVelocity(px1 - px3, py1 - py3);
    this.angle = atan2(py1 - py2, px1 - px2);
    const [ nsx, nsy ] = this.snapped;
    if (nsx !== sx && this.snapX || nsy !== sy && this.snapY) {
      this.onSnap(this);
    }
  }

  stop() {
    this.updateTicker.pause();
    this.overshootXTicker.pause();
    this.overshootYTicker.pause();
    // Pauses the in bounds onRelease animations
    for (let prop in this.animate.animations) this.animate.animations[prop].pause();
    remove(this, null, 'x');
    remove(this, null, 'y');
    remove(this, null, 'progressX');
    remove(this, null, 'progressY');
    remove(this.scroll); // Removes any active animations on the container scroll
    remove(this.overshootCoords); // Removes active overshoot animations
    return this;
  }

  /**
   * @param {Number} [duration]
   * @param {Number} [gap]
   * @param {EasingParam} [ease]
   * @return {this}
   */
  scrollInView(duration, gap = 0, ease = eases.inOutQuad) {
    this.updateScrollCoords();
    const x = this.destX;
    const y = this.destY;
    const scroll = this.scroll;
    const scrollBounds = this.scrollBounds;
    const canScroll = this.canScroll;
    if (!this.containerArray && this.isOutOfBounds(scrollBounds, x, y)) {
      const [ st, sr, sb, sl ] = scrollBounds;
      const t = round(clamp(y - st, -1e12, 0), 0);
      const r = round(clamp(x - sr, 0, maxValue), 0);
      const b = round(clamp(y - sb, 0, maxValue), 0);
      const l = round(clamp(x - sl, -1e12, 0), 0);
      new JSAnimation(scroll, {
        x: round(scroll.x + (l ? l - gap : r ? r + gap : 0), 0),
        y: round(scroll.y + (t ? t - gap : b ? b + gap : 0), 0),
        duration: isUnd(duration) ? 350 * globals.timeScale : duration,
        ease,
        onUpdate: () => {
          this.canScroll = false;
          this.$scrollContainer.scrollTo(scroll.x, scroll.y);
        }
      }).init().then(() => {
        this.canScroll = canScroll;
      });
    }
    return this;
  }

  handleHover() {
    if (this.isFinePointer && this.cursor && !this.cursorStyles) {
      this.cursorStyles = setTargetValues(this.$trigger, {
        cursor: /** @type {DraggableCursorParams} */(this.cursor).onHover
      });
    }
  }

  /**
   * @param  {Number} [duration]
   * @param  {Number} [gap]
   * @param  {EasingParam} [ease]
   * @return {this}
   */
  animateInView(duration, gap = 0, ease = eases.inOutQuad) {
    this.stop();
    this.updateBoundingValues();
    const x = this.x;
    const y = this.y;
    const [ cpt, cpr, cpb, cpl ] = this.containerPadding;
    const bt = this.scroll.y - this.targetBounds[0] + cpt + gap;
    const br = this.scroll.x - this.targetBounds[1] - cpr - gap;
    const bb = this.scroll.y - this.targetBounds[2] - cpb - gap;
    const bl = this.scroll.x - this.targetBounds[3] + cpl + gap;
    const ob = this.isOutOfBounds([bt, br, bb, bl], x, y);
    if (ob) {
      const [ disabledX, disabledY ] = this.disabled;
      const destX = clamp(snap(x, this.snapX), bl, br);
      const destY = clamp(snap(y, this.snapY), bt, bb);
      const dur = isUnd(duration) ? 350 * globals.timeScale : duration;
      if (!disabledX && (ob === 1 || ob === 3)) this.animate[this.xProp](destX, dur, ease);
      if (!disabledY && (ob === 2 || ob === 3)) this.animate[this.yProp](destY, dur, ease);
    }
    return this;
  }

  /**
   * @param {MouseEvent|TouchEvent} e
   */
  handleDown(e) {
    const $eTarget = /** @type {HTMLElement} */(e.target);
    if (this.grabbed || /** @type {HTMLInputElement}  */($eTarget).type === 'range') return;

    e.stopPropagation();

    this.grabbed = true;
    this.released = false;
    this.stop();
    this.updateBoundingValues();
    const touches = /** @type {TouchEvent} */(e).changedTouches;
    const eventX = touches ? touches[0].clientX : /** @type {MouseEvent} */(e).clientX;
    const eventY = touches ? touches[0].clientY : /** @type {MouseEvent} */(e).clientY;
    const { x, y } = this.transforms.normalizePoint(eventX, eventY);
    const [ ct, cr, cb, cl ] = this.containerBounds;
    const cf = (1 - this.containerFriction) * this.dragSpeed;
    const cx = this.x;
    const cy = this.y;
    this.coords[0] = this.coords[2] = !cf ? cx : cx > cr ? cr + (cx - cr) / cf : cx < cl ? cl + (cx - cl) / cf : cx;
    this.coords[1] = this.coords[3] = !cf ? cy : cy > cb ? cb + (cy - cb) / cf : cy < ct ? ct + (cy - ct) / cf : cy;
    this.pointer[0] = x;
    this.pointer[1] = y;
    this.pointer[2] = x;
    this.pointer[3] = y;
    this.pointer[4] = x;
    this.pointer[5] = y;
    this.pointer[6] = x;
    this.pointer[7] = y;
    this.deltaX = 0;
    this.deltaY = 0;
    this.velocity = 0;
    this.velocityStack[0] = 0;
    this.velocityStack[1] = 0;
    this.velocityStack[2] = 0;
    this.velocityStackIndex = 0;
    this.angle = 0;
    if (this.targetStyles) {
      this.targetStyles.revert();
      this.targetStyles = null;
    }
    const z = /** @type {Number} */(getTargetValue(this.$target, 'zIndex', false));
    zIndex = (z > zIndex ? z : zIndex) + 1;
    this.targetStyles = setTargetValues(this.$target, { zIndex });
    if (this.triggerStyles) {
      this.triggerStyles.revert();
      this.triggerStyles = null;
    }
    if (this.cursorStyles) {
      this.cursorStyles.revert();
      this.cursorStyles = null;
    }
    if (this.isFinePointer && this.cursor) {
      this.bodyStyles = setTargetValues(doc.body, {
        cursor: /** @type {DraggableCursorParams} */(this.cursor).onGrab
      });
    }
    this.scrollInView(100, 0, eases.out(3));
    this.onGrab(this);

    doc.addEventListener('touchmove', this);
    doc.addEventListener('touchend', this);
    doc.addEventListener('touchcancel', this);
    doc.addEventListener('mousemove', this);
    doc.addEventListener('mouseup', this);
    doc.addEventListener('selectstart', this);
  }

  /**
   * @param {MouseEvent|TouchEvent} e
   */
  handleMove(e) {
    if (!this.grabbed) return;
    const touches = /** @type {TouchEvent} */(e).changedTouches;
    const eventX = touches ? touches[0].clientX : /** @type {MouseEvent} */(e).clientX;
    const eventY = touches ? touches[0].clientY : /** @type {MouseEvent} */(e).clientY;
    const { x, y } = this.transforms.normalizePoint(eventX, eventY);
    const movedX = x - this.pointer[6];
    const movedY = y - this.pointer[7];

    let $parent = /** @type {HTMLElement} */(e.target);
    let isAtTop = false;
    let isAtBottom = false;
    let canTouchScroll = false;

    while (touches && $parent && $parent !== this.$trigger) {
      const overflowY = getTargetValue($parent, 'overflow-y');
      if (overflowY !== 'hidden' && overflowY !== 'visible') {
        const { scrollTop, scrollHeight, clientHeight } = $parent;
        if (scrollHeight > clientHeight) {
          canTouchScroll = true;
          isAtTop = scrollTop <= 3;
          isAtBottom = scrollTop >= (scrollHeight - clientHeight) - 3;
          break;
        }
      }
      $parent = /** @type {HTMLElement} */($parent.parentNode);
    }

    if (canTouchScroll && ((!isAtTop && !isAtBottom) || (isAtTop && movedY < 0) || (isAtBottom && movedY > 0))) {

      this.pointer[0] = x;
      this.pointer[1] = y;
      this.pointer[2] = x;
      this.pointer[3] = y;
      this.pointer[4] = x;
      this.pointer[5] = y;
      this.pointer[6] = x;
      this.pointer[7] = y;

    } else {

      preventDefault(e);

      // Needed to prevents click on handleUp
      if (!this.triggerStyles) this.triggerStyles = setTargetValues(this.$trigger, { pointerEvents: 'none' });
      // Needed to prevent page scroll while dragging on touch devvice
      this.$trigger.addEventListener('touchstart', preventDefault, { passive: false });
      this.$trigger.addEventListener('touchmove', preventDefault, { passive: false });
      this.$trigger.addEventListener('touchend', preventDefault);


      if ((!this.disabled[0] && abs(movedX) > 3) || (!this.disabled[1] && abs(movedY) > 3)) {

        this.updateTicker.resume();
        this.pointer[2] = this.pointer[0];
        this.pointer[3] = this.pointer[1];
        this.pointer[0] = x;
        this.pointer[1] = y;
        this.dragged = true;
        this.released = false;
        this.onDrag(this);
      }
    }
  }

  handleUp() {

    if (!this.grabbed) return;

    this.updateTicker.pause();

    if (this.triggerStyles) {
      this.triggerStyles.revert();
      this.triggerStyles = null;
    }

    if (this.bodyStyles) {
      this.bodyStyles.revert();
      this.bodyStyles = null;
    }

    const [ disabledX, disabledY ] = this.disabled;
    const [ px1, py1, px2, py2, px3, py3 ] = this.pointer;
    const [ ct, cr, cb, cl ] = this.containerBounds;
    const [ sx, sy ] = this.snapped;
    const springX = this.releaseXSpring;
    const springY = this.releaseYSpring;
    const releaseEase = this.releaseEase;
    const hasReleaseSpring = this.hasReleaseSpring;
    const overshootCoords = this.overshootCoords;
    const cx = this.x;
    const cy = this.y;
    const pv = this.computeVelocity(px1 - px3, py1 - py3);
    const pa = this.angle = atan2(py1 - py2, px1 - px2);
    const ds = pv * 150;
    const cf = (1 - this.releaseContainerFriction) * this.dragSpeed;
    const nx = cx + (cos(pa) * ds);
    const ny = cy + (sin(pa) * ds);
    const bx = nx > cr ? cr + (nx - cr) * cf : nx < cl ? cl + (nx - cl) * cf : nx;
    const by = ny > cb ? cb + (ny - cb) * cf : ny < ct ? ct + (ny - ct) * cf : ny;
    const dx = this.destX = clamp(round(snap(bx, this.snapX), 5), cl, cr);
    const dy = this.destY = clamp(round(snap(by, this.snapY), 5), ct, cb);
    const ob = this.isOutOfBounds(this.containerBounds, nx, ny);

    let durationX = 0;
    let durationY = 0;
    let easeX = releaseEase;
    let easeY = releaseEase;
    let longestReleaseDuration = 0;

    overshootCoords.x = cx;
    overshootCoords.y = cy;

    if (!disabledX) {
      const directionX = dx === cr ? cx > cr ? -1 : 1 : cx < cl ? -1 : 1;
      const distanceX = round(cx - dx, 0);
      springX.velocity = disabledY && hasReleaseSpring ? distanceX ? (ds * directionX) / abs(distanceX) : 0 : pv;
      const { ease, duration, restDuration } = springX;
      durationX = cx === dx ? 0 : hasReleaseSpring ? duration : duration - (restDuration * globals.timeScale);
      if (hasReleaseSpring) easeX = ease;
      if (durationX > longestReleaseDuration) longestReleaseDuration = durationX;
    }

    if (!disabledY) {
      const directionY = dy === cb ? cy > cb ? -1 : 1 : cy < ct ? -1 : 1;
      const distanceY = round(cy - dy, 0);
      springY.velocity = disabledX && hasReleaseSpring ? distanceY ? (ds * directionY) / abs(distanceY) : 0 : pv;
      const { ease, duration, restDuration } = springY;
      durationY = cy === dy ? 0 : hasReleaseSpring ? duration : duration - (restDuration * globals.timeScale);
      if (hasReleaseSpring) easeY = ease;
      if (durationY > longestReleaseDuration) longestReleaseDuration = durationY;
    }

    if (!hasReleaseSpring && ob && cf && (durationX || durationY)) {

        const composition = compositionTypes.blend;

        new JSAnimation(overshootCoords, {
          x: { to: bx, duration: durationX * .65 },
          y: { to: by, duration: durationY * .65 },
          ease: releaseEase,
          composition,
        }).init();

        new JSAnimation(overshootCoords, {
          x: { to: dx, duration: durationX },
          y: { to: dy, duration: durationY },
          ease: releaseEase,
          composition,
        }).init();

        this.overshootXTicker.stretch(durationX).restart();
        this.overshootYTicker.stretch(durationY).restart();

    } else {

      if (!disabledX) this.animate[this.xProp](dx, durationX, easeX);
      if (!disabledY) this.animate[this.yProp](dy, durationY, easeY);

    }

    this.scrollInView(longestReleaseDuration, this.scrollThreshold, releaseEase);

    let hasSnapped = false;

    if (dx !== sx) {
      this.snapped[0] = dx;
      if (this.snapX) hasSnapped = true;
    }

    if (dy !== sy && this.snapY) {
      this.snapped[1] = dy;
      if (this.snapY) hasSnapped = true;
    }

    if (hasSnapped) this.onSnap(this);

    this.grabbed = false;
    this.dragged = false;
    this.updated = true;
    this.released = true;

    // It's important to trigger the callback after the release animations to be able to cancel them
    this.onRelease(this);

    this.$trigger.removeEventListener('touchstart', preventDefault);
    this.$trigger.removeEventListener('touchmove', preventDefault);
    this.$trigger.removeEventListener('touchend', preventDefault);

    doc.removeEventListener('touchmove', this);
    doc.removeEventListener('touchend', this);
    doc.removeEventListener('touchcancel', this);
    doc.removeEventListener('mousemove', this);
    doc.removeEventListener('mouseup', this);
    doc.removeEventListener('selectstart', this);
  }

  reset() {
    this.stop();
    this.resizeTicker.pause();
    this.grabbed = false;
    this.dragged = false;
    this.updated = false;
    this.released = false;
    this.canScroll = false;
    this.setX(0, true);
    this.setY(0, true);
    this.coords[0] = 0;
    this.coords[1] = 0;
    this.pointer[0] = 0;
    this.pointer[1] = 0;
    this.pointer[2] = 0;
    this.pointer[3] = 0;
    this.pointer[4] = 0;
    this.pointer[5] = 0;
    this.pointer[6] = 0;
    this.pointer[7] = 0;
    this.velocity = 0;
    this.velocityStack[0] = 0;
    this.velocityStack[1] = 0;
    this.velocityStack[2] = 0;
    this.velocityStackIndex = 0;
    this.angle = 0;
    return this;
  }

  enable() {
    if (!this.enabled) {
      this.enabled = true;
      this.$target.classList.remove('is-disabled');
      this.touchActionStyles = setTargetValues(this.$trigger, {
        touchAction: this.disabled[0] ? 'pan-x' : this.disabled[1] ? 'pan-y' : 'none'
      });
      this.$trigger.addEventListener('touchstart', this, { passive: true });
      this.$trigger.addEventListener('mousedown', this, { passive: true });
      this.$trigger.addEventListener('mouseenter', this);
    }
    return this;
  }

  disable() {
    this.enabled = false;
    this.grabbed = false;
    this.dragged = false;
    this.updated = false;
    this.released = false;
    this.canScroll = false;
    this.touchActionStyles.revert();
    if (this.cursorStyles) {
      this.cursorStyles.revert();
      this.cursorStyles = null;
    }
    if (this.triggerStyles) {
      this.triggerStyles.revert();
      this.triggerStyles = null;
    }
    if (this.bodyStyles) {
      this.bodyStyles.revert();
      this.bodyStyles = null;
    }
    if (this.targetStyles) {
      this.targetStyles.revert();
      this.targetStyles = null;
    }
    this.stop();
    this.$target.classList.add('is-disabled');
    this.$trigger.removeEventListener('touchstart', this);
    this.$trigger.removeEventListener('mousedown', this);
    this.$trigger.removeEventListener('mouseenter', this);
    doc.removeEventListener('touchmove', this);
    doc.removeEventListener('touchend', this);
    doc.removeEventListener('touchcancel', this);
    doc.removeEventListener('mousemove', this);
    doc.removeEventListener('mouseup', this);
    doc.removeEventListener('selectstart', this);
    return this;
  }

  revert() {
    this.reset();
    this.disable();
    this.$target.classList.remove('is-disabled');
    this.updateTicker.revert();
    this.overshootXTicker.revert();
    this.overshootYTicker.revert();
    this.resizeTicker.revert();
    this.animate.revert();
    return this;
  }

  /**
   * @param {Event} e
   */
  handleEvent(e) {
    switch (e.type) {
      case 'mousedown':
        this.handleDown(/** @type {MouseEvent} */(e));
        break;
      case 'touchstart':
        this.handleDown(/** @type {TouchEvent} */(e));
        break;
      case 'mousemove':
        this.handleMove(/** @type {MouseEvent} */(e));
        break;
      case 'touchmove':
        this.handleMove(/** @type {TouchEvent} */(e));
        break;
      case 'mouseup':
        this.handleUp();
        break;
      case 'touchend':
        this.handleUp();
        break;
      case 'touchcancel':
        this.handleUp();
        break;
      case 'mouseenter':
        this.handleHover();
        break;
      case 'selectstart':
        preventDefault(e);
        break;
    }
  }
}

/**
 * @param {TargetsParam} target
 * @param {DraggableParams} [parameters]
 * @return {Draggable}
 */
const createDraggable = (target, parameters) => new Draggable(target, parameters);




/**
 * @typedef {Object} ReactRef
 * @property {HTMLElement|SVGElement|null} [current]
 */

/**
 * @typedef {Object} AngularRef
 * @property {HTMLElement|SVGElement} [nativeElement]
 */

/**
 * @typedef {Object} ScopeParams
 * @property {DOMTargetSelector|ReactRef|AngularRef} [root]
 * @property {DefaultsParams} [defaults]
 * @property {Record<String, String>} [mediaQueries]
 */

/**
 * @callback ScopeCleanup
 * @param {Scope} [scope]
 */

/**
 * @callback ScopeConstructor
 * @param {Scope} [scope]
 * @return {ScopeCleanup|void}
 */

/**
 * @callback ScopeMethod
 * @param {...*} args
 * @return {ScopeCleanup|void}
 */

class Scope {
  /** @param {ScopeParams} [parameters] */
  constructor(parameters = {}) {
    if (globals.scope) globals.scope.revertibles.push(this);
    const rootParam = parameters.root;
    /** @type {Document|DOMTarget} */
    let root = doc;
    if (rootParam) {
      root = /** @type {ReactRef} */(rootParam).current ||
             /** @type {AngularRef} */(rootParam).nativeElement ||
             parseTargets(/** @type {DOMTargetSelector} */(rootParam))[0] ||
             doc;
    }
    const scopeDefaults = parameters.defaults;
    const globalDefault = globals.defaults;
    const mediaQueries = parameters.mediaQueries;
    /** @type {DefaultsParams} */
    this.defaults = scopeDefaults ? mergeObjects(scopeDefaults, globalDefault) : globalDefault;
    /** @type {Document|DOMTarget} */
    this.root = root;
    /** @type {Array<ScopeConstructor>} */
    this.constructors = [];
    /** @type {Array<Function>} */
    this.revertConstructors = [];
    /** @type {Array<Revertible>} */
    this.revertibles = [];
    /** @type {Record<String, Function>} */
    this.methods = {};
    /** @type {Record<String, Boolean>} */
    this.matches = {};
    /** @type {Record<String, MediaQueryList>} */
    this.mediaQueryLists = {};
    /** @type {Record<String, any>} */
    this.data = {};
    if (mediaQueries) {
      for (let mq in mediaQueries) {
        const _mq = win.matchMedia(mediaQueries[mq]);
        this.mediaQueryLists[mq] = _mq;
        _mq.addEventListener('change', this);
      }
    }
  }

  /**
   * @callback ScoppedCallback
   * @param {this} scope
   * @return {any}
   *
   * @param {ScoppedCallback} cb
   * @return {this}
   */
  execute(cb) {
    let activeScope = globals.scope;
    let activeRoot = globals.root;
    let activeDefaults = globals.defaults;
    globals.scope = this;
    globals.root = this.root;
    globals.defaults = this.defaults;
    const mqs = this.mediaQueryLists;
    for (let mq in mqs) this.matches[mq] = mqs[mq].matches;
    const returned = cb(this);
    globals.scope = activeScope;
    globals.root = activeRoot;
    globals.defaults = activeDefaults;
    return returned;
  }

  /**
   * @return {this}
   */
  refresh() {
    this.execute(() => {
      let i = this.revertibles.length;
      let y = this.revertConstructors.length;
      while (i--) this.revertibles[i].revert();
      while (y--) this.revertConstructors[y](this);
      this.revertibles.length = 0;
      this.revertConstructors.length = 0;
      this.constructors.forEach( constructor => {
        const revertConstructor = constructor(this);
        if (revertConstructor) {
          this.revertConstructors.push(revertConstructor);
        }
      });
    });
    return this;
  }

  /**
   * @callback contructorCallback
   * @param {this} self
   *
   * @overload
   * @param {String} a1
   * @param {ScopeMethod} a2
   * @return {this}
   *
   * @overload
   * @param {contructorCallback} a1
   * @return {this}
   *
   * @param {String|contructorCallback} a1
   * @param {ScopeMethod} [a2]
   */
  add(a1, a2) {
    if (isFnc(a1)) {
      const constructor = /** @type {contructorCallback} */(a1);
      this.constructors.push(constructor);
      this.execute(() => {
        const revertConstructor = constructor(this);
        if (revertConstructor) {
          this.revertConstructors.push(revertConstructor);
        }
      });
    } else {
      this.methods[/** @type {String} */(a1)] = (/** @type {any} */...args) => this.execute(() => a2(...args));
    }
    return this;
  }

  /**
   * @param {Event} e
   */
  handleEvent(e) {
    switch (e.type) {
      case 'change':
        this.refresh();
        break;
    }
  }

  revert() {
    const revertibles = this.revertibles;
    const revertConstructors = this.revertConstructors;
    const mqs = this.mediaQueryLists;
    let i = revertibles.length;
    let y = revertConstructors.length;
    while (i--) revertibles[i].revert();
    while (y--) revertConstructors[y](this);
    for (let mq in mqs) mqs[mq].removeEventListener('change', this);
    revertibles.length = 0;
    revertConstructors.length = 0;
    this.constructors.length = 0;
    this.matches = {};
    this.methods = {};
    this.mediaQueryLists = {};
    this.data = {};
  }
}

/**
 * @param {ScopeParams} [params]
 * @return {Scope}
 */
const createScope = params => new Scope(params);

/**
 * @typedef {String|Number} ScrollThresholdValue
 */

/**
 * @return {Number}
 */
const getMaxViewHeight = () => {
  const $el = document.createElement('div');
  doc.body.appendChild($el);
  $el.style.height = '100lvh';
  const height = $el.offsetHeight;
  doc.body.removeChild($el);
  return height;
};

/**
 * @template {ScrollThresholdValue|String|Number|Boolean|Function|Object} T
 * @param {T | ((observer: ScrollObserver) => T)} value
 * @param {ScrollObserver} scroller
 * @return {T}
 */
const parseScrollObserverFunctionParameter = (value, scroller) => value && isFnc(value) ? /** @type {Function} */(value)(scroller) : value;

const scrollContainers = new Map();

class ScrollContainer {
  /**
   * @param {HTMLElement} $el
   */
  constructor($el) {
    /** @type {HTMLElement} */
    this.element = $el;
    /** @type {Boolean} */
    this.useWin = this.element === doc.body;
    /** @type {Number} */
    this.winWidth = 0;
    /** @type {Number} */
    this.winHeight = 0;
    /** @type {Number} */
    this.width = 0;
    /** @type {Number} */
    this.height = 0;
    /** @type {Number} */
    this.left = 0;
    /** @type {Number} */
    this.top = 0;
    /** @type {Number} */
    this.zIndex = 0;
    /** @type {Number} */
    this.scrollX = 0;
    /** @type {Number} */
    this.scrollY = 0;
    /** @type {Number} */
    this.prevScrollX = 0;
    /** @type {Number} */
    this.prevScrollY = 0;
    /** @type {Number} */
    this.scrollWidth = 0;
    /** @type {Number} */
    this.scrollHeight = 0;
    /** @type {Number} */
    this.velocity = 0;
    /** @type {Boolean} */
    this.backwardX = false;
    /** @type {Boolean} */
    this.backwardY = false;
    /** @type {Timer} */
    this.scrollTicker = new Timer({
      autoplay: false,
      onBegin: () => this.dataTimer.resume(),
      onUpdate: () => {
        const backwards = this.backwardX || this.backwardY;
        forEachChildren(this, (/** @type {ScrollObserver} */child) => child.handleScroll(), backwards);
      },
      onComplete: () => this.dataTimer.pause()
    }).init();
    /** @type {Timer} */
    this.dataTimer = new Timer({
      autoplay: false,
      frameRate: 30,
      onUpdate: self => {
        const dt = self.deltaTime;
        const px = this.prevScrollX;
        const py = this.prevScrollY;
        const nx = this.scrollX;
        const ny = this.scrollY;
        const dx = px - nx;
        const dy = py - ny;
        this.prevScrollX = nx;
        this.prevScrollY = ny;
        if (dx) this.backwardX = px > nx;
        if (dy) this.backwardY = py > ny;
        this.velocity = round(dt > 0 ? Math.sqrt(dx * dx + dy * dy) / dt : 0, 5);
      }
    }).init();
    /** @type {Timer} */
    this.resizeTicker = new Timer({
      autoplay: false,
      duration: 250 * globals.timeScale,
      onComplete: () => {
        this.updateWindowBounds();
        this.refreshScrollObservers();
        this.handleScroll();
      }
    }).init();
    /** @type {Timer} */
    this.wakeTicker = new Timer({
      autoplay: false,
      duration: 500 * globals.timeScale,
      onBegin: () => {
        this.scrollTicker.resume();
      },
      onComplete: () => {
        this.scrollTicker.pause();
      }
    }).init();
    /** @type {ScrollObserver} */
    this._head = null;
    /** @type {ScrollObserver} */
    this._tail = null;
    this.updateScrollCoords();
    this.updateWindowBounds();
    this.updateBounds();
    this.refreshScrollObservers();
    this.handleScroll();
    this.resizeObserver = new ResizeObserver(() => this.resizeTicker.restart());
    this.resizeObserver.observe(this.element);
    (this.useWin ? win : this.element).addEventListener('scroll', this, false);
  }

  updateScrollCoords() {
    const useWin = this.useWin;
    const $el = this.element;
    this.scrollX = round(useWin ? win.scrollX : $el.scrollLeft, 0);
    this.scrollY = round(useWin ? win.scrollY : $el.scrollTop, 0);
  }

  updateWindowBounds() {
    this.winWidth = win.innerWidth;
    this.winHeight = getMaxViewHeight();
  }

  updateBounds() {
    const style = getComputedStyle(this.element);
    const $el = this.element;
    this.scrollWidth = $el.scrollWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    this.scrollHeight = $el.scrollHeight + parseFloat(style.marginTop) + parseFloat(style.marginBottom);
    this.updateWindowBounds();
    let width, height;
    if (this.useWin) {
      width = this.winWidth;
      height = this.winHeight;
    } else {
      const elRect = $el.getBoundingClientRect();
      width = elRect.width;
      height = elRect.height;
      this.top = elRect.top;
      this.left = elRect.left;
    }
    this.width = width;
    this.height = height;
  }

  refreshScrollObservers() {
    forEachChildren(this, (/** @type {ScrollObserver} */child) => {
      if (child._debug) {
        child.removeDebug();
      }
    });
    this.updateBounds();
    forEachChildren(this, (/** @type {ScrollObserver} */child) => {
      child.refresh();
      if (child._debug) {
        child.debug();
      }
    });
  }

  refresh() {
    this.updateWindowBounds();
    this.updateBounds();
    this.refreshScrollObservers();
    this.handleScroll();
  }

  handleScroll() {
    this.updateScrollCoords();
    this.wakeTicker.restart();
  }

  /**
   * @param {Event} e
   */
  handleEvent(e) {
    switch (e.type) {
      case 'scroll':
        this.handleScroll();
        break;
    }
  }

  revert() {
    this.scrollTicker.cancel();
    this.dataTimer.cancel();
    this.resizeTicker.cancel();
    this.wakeTicker.cancel();
    this.resizeObserver.unobserve(this.element);
    (this.useWin ? win : this.element).removeEventListener('scroll', this);
    scrollContainers.delete(this.element);
  }
}

/**
 * @param {TargetsParam} target
 * @return {ScrollContainer}
 */
const registerAndGetScrollContainer = target => {
  const $el = /** @type {HTMLElement} */(target ? parseTargets(target)[0] || doc.body : doc.body);
  let scrollContainer = scrollContainers.get($el);
  if (!scrollContainer) {
    scrollContainer = new ScrollContainer($el);
    scrollContainers.set($el, scrollContainer);
  }
  return scrollContainer;
};

/**
 * @param {HTMLElement} $el
 * @param {Number|string} v
 * @param {Number} size
 * @param {Number} [under]
 * @param {Number} [over]
 * @return {Number}
 */
const convertValueToPx = ($el, v, size, under, over) => {
  const clampMin = v === 'min';
  const clampMax = v === 'max';
  const value = v === 'top' || v === 'left' || v === 'start' || clampMin ? 0 :
                v === 'bottom' || v === 'right' || v === 'end' || clampMax ? '100%' :
                v === 'center' ? '50%' :
                v;
  const { n, u } = decomposeRawValue(value, decomposedOriginalValue);
  let px = n;
  if (u === '%') {
    px = (n / 100) * size;
  } else if (u) {
    px = convertValueUnit($el, decomposedOriginalValue, 'px', true).n;
  }
  if (clampMax && under < 0) px += under;
  if (clampMin && over > 0) px += over;
  return px;
};

/**
 * @param {HTMLElement} $el
 * @param {ScrollThresholdValue} v
 * @param {Number} size
 * @param {Number} [under]
 * @param {Number} [over]
 * @return {Number}
 */
const parseBoundValue = ($el, v, size, under, over) => {
  /** @type {Number} */
  let value;
  if (isStr(v)) {
    const matchedOperator = relativeValuesExecRgx.exec(/** @type {String} */(v));
    if (matchedOperator) {
      const splitter = matchedOperator[0];
      const operator = splitter[0];
      const splitted = /** @type {String} */(v).split(splitter);
      const clampMin = splitted[0] === 'min';
      const clampMax = splitted[0] === 'max';
      const valueAPx = convertValueToPx($el, splitted[0], size, under, over);
      const valueBPx = convertValueToPx($el, splitted[1], size, under, over);
      if (clampMin) {
        const min = getRelativeValue(convertValueToPx($el, 'min', size), valueBPx, operator);
        value = min < valueAPx ? valueAPx : min;
      } else if (clampMax) {
        const max = getRelativeValue(convertValueToPx($el, 'max', size), valueBPx, operator);
        value = max > valueAPx ? valueAPx : max;
      } else {
        value = getRelativeValue(valueAPx, valueBPx, operator);
      }
    } else {
      value = convertValueToPx($el, v, size, under, over);
    }
  } else {
    value = /** @type {Number} */(v);
  }
  return round(value, 0);
};

/**
 * @param {JSAnimation} linked
 * @return {HTMLElement}
 */
const getAnimationDomTarget = linked => {
  let $linkedTarget;
  const linkedTargets = linked.targets;
  for (let i = 0, l = linkedTargets.length; i < l; i++) {
    const target = linkedTargets[i];
    if (target[isDomSymbol]) {
      $linkedTarget = /** @type {HTMLElement} */(target);
      break;
    }
  }
  return $linkedTarget;
};

let scrollerIndex = 0;

const debugColors = ['#FF4B4B','#FF971B','#FFC730','#F9F640','#7AFF5A','#18FF74','#17E09B','#3CFFEC','#05DBE9','#33B3F1','#638CF9','#C563FE','#FF4FCF','#F93F8A'];

/**
 * @typedef {Object} ScrollThresholdParam
 * @property {ScrollThresholdValue} [target]
 * @property {ScrollThresholdValue} [container]
 */

/**
 * @callback ScrollObserverAxisCallback
 * @param {ScrollObserver} self
 * @return {'x'|'y'}
 */

/**
 * @callback ScrollThresholdCallback
 * @param {ScrollObserver} self
 * @return {ScrollThresholdValue|ScrollThresholdParam}
 */

/**
 * @typedef {Object} ScrollObserverParams
 * @property {Number|String} [id]
 * @property {Boolean|Number|String|EasingParam} [sync]
 * @property {TargetsParam} [container]
 * @property {TargetsParam} [target]
 * @property {'x'|'y'|ScrollObserverAxisCallback|((observer: ScrollObserver) => 'x'|'y'|ScrollObserverAxisCallback)} [axis]
 * @property {ScrollThresholdValue|ScrollThresholdParam|ScrollThresholdCallback|((observer: ScrollObserver) => ScrollThresholdValue|ScrollThresholdParam|ScrollThresholdCallback)} [enter]
 * @property {ScrollThresholdValue|ScrollThresholdParam|ScrollThresholdCallback|((observer: ScrollObserver) => ScrollThresholdValue|ScrollThresholdParam|ScrollThresholdCallback)} [leave]
 * @property {Boolean|((observer: ScrollObserver) => Boolean)} [repeat]
 * @property {Boolean} [debug]
 * @property {Callback<ScrollObserver>} [onEnter]
 * @property {Callback<ScrollObserver>} [onLeave]
 * @property {Callback<ScrollObserver>} [onEnterForward]
 * @property {Callback<ScrollObserver>} [onLeaveForward]
 * @property {Callback<ScrollObserver>} [onEnterBackward]
 * @property {Callback<ScrollObserver>} [onLeaveBackward]
 * @property {Callback<ScrollObserver>} [onUpdate]
 * @property {Callback<ScrollObserver>} [onSyncComplete]
 */

class ScrollObserver {
  /**
   * @param {ScrollObserverParams} parameters
   */
  constructor(parameters = {}) {
    if (globals.scope) globals.scope.revertibles.push(this);
    const syncMode = setValue(parameters.sync, 'play pause');
    const ease = syncMode ? parseEasings(/** @type {EasingParam} */(syncMode)) : null;
    const isLinear = syncMode && (syncMode === 'linear' || syncMode === none);
    const isEase = syncMode && !(ease === none && !isLinear);
    const isSmooth = syncMode && (isNum(syncMode) || syncMode === true || isLinear);
    const isMethods = syncMode && (isStr(syncMode) && !isEase && !isSmooth);
    const syncMethods = isMethods ? /** @type {String} */(syncMode).split(' ').map(
      (/** @type {String} */m) => () => {
        const linked = this.linked;
        return linked && linked[m] ? linked[m]() : null;
      }
    ) : null;
    const biDirSync = isMethods && syncMethods.length > 2;
    /** @type {Number} */
    this.index = scrollerIndex++;
    /** @type {String|Number} */
    this.id = !isUnd(parameters.id) ? parameters.id : this.index;
    /** @type {ScrollContainer} */
    this.container = registerAndGetScrollContainer(parameters.container);
    /** @type {HTMLElement} */
    this.target = null;
    /** @type {Tickable|WAAPIAnimation} */
    this.linked = null;
    /** @type {Boolean} */
    this.repeat = null;
    /** @type {Boolean} */
    this.horizontal = null;
    /** @type {ScrollThresholdParam|ScrollThresholdValue|ScrollThresholdCallback} */
    this.enter = null;
    /** @type {ScrollThresholdParam|ScrollThresholdValue|ScrollThresholdCallback} */
    this.leave = null;
    /** @type {Boolean} */
    this.sync = isEase || isSmooth || !!syncMethods;
    /** @type {EasingFunction} */
    this.syncEase = isEase ? ease : null;
    /** @type {Number} */
    this.syncSmooth = isSmooth ? syncMode === true || isLinear ? 1 : /** @type {Number} */(syncMode) : null;
    /** @type {Callback<ScrollObserver>} */
    this.onSyncEnter = syncMethods && !biDirSync && syncMethods[0] ? syncMethods[0] : noop;
    /** @type {Callback<ScrollObserver>} */
    this.onSyncLeave = syncMethods && !biDirSync && syncMethods[1] ? syncMethods[1] : noop;
    /** @type {Callback<ScrollObserver>} */
    this.onSyncEnterForward = syncMethods && biDirSync && syncMethods[0] ? syncMethods[0] : noop;
    /** @type {Callback<ScrollObserver>} */
    this.onSyncLeaveForward = syncMethods && biDirSync && syncMethods[1] ? syncMethods[1] : noop;
    /** @type {Callback<ScrollObserver>} */
    this.onSyncEnterBackward = syncMethods && biDirSync && syncMethods[2] ? syncMethods[2] : noop;
    /** @type {Callback<ScrollObserver>} */
    this.onSyncLeaveBackward = syncMethods && biDirSync && syncMethods[3] ? syncMethods[3] : noop;
    /** @type {Callback<ScrollObserver>} */
    this.onEnter = parameters.onEnter || noop;
    /** @type {Callback<ScrollObserver>} */
    this.onLeave = parameters.onLeave || noop;
    /** @type {Callback<ScrollObserver>} */
    this.onEnterForward = parameters.onEnterForward || noop;
    /** @type {Callback<ScrollObserver>} */
    this.onLeaveForward = parameters.onLeaveForward || noop;
    /** @type {Callback<ScrollObserver>} */
    this.onEnterBackward = parameters.onEnterBackward || noop;
    /** @type {Callback<ScrollObserver>} */
    this.onLeaveBackward = parameters.onLeaveBackward || noop;
    /** @type {Callback<ScrollObserver>} */
    this.onUpdate = parameters.onUpdate || noop;
    /** @type {Callback<ScrollObserver>} */
    this.onSyncComplete = parameters.onSyncComplete || noop;
    /** @type {Boolean} */
    this.reverted = false;
    /** @type {Boolean} */
    this.completed = false;
    /** @type {Boolean} */
    this.began = false;
    /** @type {Boolean} */
    this.isInView = false;
    /** @type {Boolean} */
    this.forceEnter = false;
    /** @type {Boolean} */
    this.hasEntered = false;
    /** @type {Array.<Number>} */
    this.offsets = [];
    /** @type {Number} */
    this.offset = 0;
    /** @type {Number} */
    this.offsetStart = 0;
    /** @type {Number} */
    this.offsetEnd = 0;
    /** @type {Number} */
    this.distance = 0;
    /** @type {Number} */
    this.prevProgress = 0;
    /** @type {Array} */
    this.thresholds = ['start', 'end', 'end', 'start'];
    /** @type {[Number, Number, Number, Number]} */
    this.coords = [0, 0, 0, 0];
    /** @type {JSAnimation} */
    this.debugStyles = null;
    /** @type {HTMLElement} */
    this.$debug = null;
    /** @type {ScrollObserverParams} */
    this._params = parameters;
    /** @type {Boolean} */
    this._debug = setValue(parameters.debug, false);
    /** @type {ScrollObserver} */
    this._next = null;
    /** @type {ScrollObserver} */
    this._prev = null;
    addChild(this.container, this);
    // Wait for the next frame to add to the container in order to handle calls to link()
    sync(() => {
      if (this.reverted) return;
      if (!this.target) {
        const target = /** @type {HTMLElement} */(parseTargets(parameters.target)[0]);
        this.target = target || doc.body;
        this.refresh();
      }
      if (this._debug) this.debug();
    });
  }

  /**
   * @param {Tickable|WAAPIAnimation} linked
   */
  link(linked) {
    if (linked) {
      // Make sure to pause the linked object in case it's added later
      linked.pause();
      this.linked = linked;
      // Try to use a target of the linked object if no target parameters specified
      if (!this._params.target) {
        /** @type {HTMLElement} */
        let $linkedTarget;
        if (!isUnd(/** @type {JSAnimation} */(linked).targets)) {
          $linkedTarget = getAnimationDomTarget(/** @type {JSAnimation} */(linked));
        } else {
          forEachChildren(/** @type {Timeline} */(linked), (/** @type {JSAnimation} */child) => {
            if (child.targets && !$linkedTarget) {
              $linkedTarget = getAnimationDomTarget(/** @type {JSAnimation} */(child));
            }
          });
        }
        // Fallback to body if no target found
        this.target = $linkedTarget || doc.body;
        this.refresh();
      }
    }
    return this;
  }

  get velocity() {
    return this.container.velocity;
  }

  get backward() {
    return this.horizontal ? this.container.backwardX : this.container.backwardY;
  }

  get scroll() {
    return this.horizontal ? this.container.scrollX : this.container.scrollY;
  }

  get progress() {
    const p = (this.scroll - this.offsetStart) / this.distance;
    return p === Infinity || isNaN(p) ? 0 : round(clamp(p, 0, 1), 6);
  }

  refresh() {
    this.reverted = false;
    const params = this._params;
    this.repeat = setValue(parseScrollObserverFunctionParameter(params.repeat, this), true);
    this.horizontal = setValue(parseScrollObserverFunctionParameter(params.axis, this), 'y') === 'x';
    this.enter = setValue(parseScrollObserverFunctionParameter(params.enter, this), 'end start');
    this.leave = setValue(parseScrollObserverFunctionParameter(params.leave, this), 'start end');
    this.updateBounds();
    this.handleScroll();
    return this;
  }

  removeDebug() {
    if (this.$debug) {
      this.$debug.parentNode.removeChild(this.$debug);
      this.$debug = null;
    }
    if (this.debugStyles) {
      this.debugStyles.revert();
      this.$debug = null;
    }
    return this;
  }

  debug() {
    this.removeDebug();
    const container = this.container;
    const isHori = this.horizontal;
    const $existingDebug = container.element.querySelector(':scope > .animejs-onscroll-debug');
    const $debug = doc.createElement('div');
    const $thresholds = doc.createElement('div');
    const $triggers = doc.createElement('div');
    const color = debugColors[this.index % debugColors.length];
    const useWin = container.useWin;
    const containerWidth = useWin ? container.winWidth : container.width;
    const containerHeight = useWin ? container.winHeight : container.height;
    const scrollWidth = container.scrollWidth;
    const scrollHeight = container.scrollHeight;
    const size = this.container.width > 360 ? 320 : 260;
    const offLeft = isHori ? 0 : 10;
    const offTop = isHori ? 10 : 0;
    const half = isHori ? 24 : size / 2;
    const labelHeight = isHori ? half : 15;
    const labelWidth = isHori ? 60 : half;
    const labelSize = isHori ? labelWidth : labelHeight;
    const repeat = isHori ? 'repeat-x' : 'repeat-y';
    /**
     * @param {Number} v
     * @return {String}
     */
    const gradientOffset = v => isHori ? '0px '+(v)+'px' : (v)+'px'+' 2px';
    /**
     * @param {String} c
     * @return {String}
     */
    const lineCSS = (c) => `linear-gradient(${isHori ? 90 : 0}deg, ${c} 2px, transparent 1px)`;
    /**
     * @param {String} p
     * @param {Number} l
     * @param {Number} t
     * @param {Number} w
     * @param {Number} h
     * @return {String}
     */
    const baseCSS = (p, l, t, w, h) => `position:${p};left:${l}px;top:${t}px;width:${w}px;height:${h}px;`;
    $debug.style.cssText = `${baseCSS('absolute', offLeft, offTop, isHori ? scrollWidth : size, isHori ? size : scrollHeight)}
      pointer-events: none;
      z-index: ${this.container.zIndex++};
      display: flex;
      flex-direction: ${isHori ? 'column' : 'row'};
      filter: drop-shadow(0px 1px 0px rgba(0,0,0,.75));
    `;
    $thresholds.style.cssText = `${baseCSS('sticky', 0, 0, isHori ? containerWidth : half, isHori ? half : containerHeight)}`;
    if (!$existingDebug) {
      $thresholds.style.cssText += `background:
        ${lineCSS('#FFFF')}${gradientOffset(half-10)} / ${isHori ? '100px 100px' : '100px 100px'} ${repeat},
        ${lineCSS('#FFF8')}${gradientOffset(half-10)} / ${isHori ? '10px 10px' : '10px 10px'} ${repeat};
      `;
    }
    $triggers.style.cssText = `${baseCSS('relative', 0, 0, isHori ? scrollWidth : half, isHori ? half : scrollHeight)}`;
    if (!$existingDebug) {
      $triggers.style.cssText += `background:
        ${lineCSS('#FFFF')}${gradientOffset(0)} / ${isHori ? '100px 10px' : '10px 100px'} ${repeat},
        ${lineCSS('#FFF8')}${gradientOffset(0)} / ${isHori ? '10px 0px' : '0px 10px'} ${repeat};
      `;
    }
    const labels = [' enter: ', ' leave: '];
    this.coords.forEach((v, i) => {
      const isView = i > 1;
      const value = (isView ? 0 : this.offset) + v;
      const isTail = i % 2;
      const isFirst = value < labelSize;
      const isOver = value > (isView ? isHori ? containerWidth : containerHeight : isHori ? scrollWidth : scrollHeight) - labelSize;
      const isFlip = (isView ? isTail && !isFirst : !isTail && !isFirst) || isOver;
      const $label = doc.createElement('div');
      const $text = doc.createElement('div');
      const dirProp = isHori ? isFlip ? 'right' : 'left' : isFlip ? 'bottom' : 'top';
      const flipOffset = isFlip ? (isHori ? labelWidth : labelHeight) + (!isView ? isHori ? -1 : -2 : isHori ? -1 : isOver ? 0 : -2) : !isView ? isHori ? 1 : 0 : isHori ? 1 : 0;
      // $text.innerHTML = `${!isView ? '' : labels[isTail] + ' '}${this.id}: ${this.thresholds[i]} ${isView ? '' : labels[isTail]}`;
      $text.innerHTML = `${this.id}${labels[isTail]}${this.thresholds[i]}`;
      $label.style.cssText = `${baseCSS('absolute', 0, 0, labelWidth, labelHeight)}
        display: flex;
        flex-direction: ${isHori ? 'column' : 'row'};
        justify-content: flex-${isView ? 'start' : 'end'};
        align-items: flex-${isFlip ? 'end' : 'start'};
        border-${dirProp}: 2px ${isTail ? 'solid' : 'solid'} ${color};
      `;
      $text.style.cssText = `
        overflow: hidden;
        max-width: ${(size / 2) - 10}px;
        height: ${labelHeight};
        margin-${isHori ? isFlip ? 'right' : 'left' : isFlip ? 'bottom' : 'top'}: -2px;
        padding: 1px;
        font-family: ui-monospace, monospace;
        font-size: 10px;
        letter-spacing: -.025em;
        line-height: 9px;
        font-weight: 600;
        text-align: ${isHori && isFlip || !isHori && !isView ? 'right' : 'left'};
        white-space: pre;
        text-overflow: ellipsis;
        color: ${isTail ? color : 'rgba(0,0,0,.75)'};
        background-color: ${isTail ? 'rgba(0,0,0,.65)' : color};
        border: 2px solid ${isTail ? color : 'transparent'};
        border-${isHori ? isFlip ? 'top-left' : 'top-right' : isFlip ? 'top-left' : 'bottom-left'}-radius: 5px;
        border-${isHori ? isFlip ? 'bottom-left' : 'bottom-right' : isFlip ? 'top-right' : 'bottom-right'}-radius: 5px;
      `;
      $label.appendChild($text);
      let position = value - flipOffset + (isHori ? 1 : 0);
      $label.style[isHori ? 'left' : 'top'] = `${position}px`;
      // $label.style[isHori ? 'left' : 'top'] = value - flipOffset + (!isFlip && isFirst && !isView ? 1 : isFlip ? 0 : -2) + 'px';
      (isView ? $thresholds : $triggers).appendChild($label);
    });

    $debug.appendChild($thresholds);
    $debug.appendChild($triggers);
    container.element.appendChild($debug);

    if (!$existingDebug) $debug.classList.add('animejs-onscroll-debug');
    this.$debug = $debug;
    const containerPosition = getTargetValue(container.element, 'position');
    if (containerPosition === 'static') {
      this.debugStyles = setTargetValues(container.element, { position: 'relative '});
    }

  }

  updateBounds() {
    if (this._debug) {
      this.removeDebug();
    }
    let stickys;
    const $target = this.target;
    const container = this.container;
    const isHori = this.horizontal;
    const linked = this.linked;
    let linkedTime;
    let $el = $target;
    let offsetX = 0;
    let offsetY = 0;
    /** @type {Element} */
    let $offsetParent = $el;
    if (linked) {
      linkedTime = linked.currentTime;
      linked.seek(0, true);
    }
    const isContainerStatic = getTargetValue(container.element, 'position') === 'static' ? setTargetValues(container.element, { position: 'relative '}) : false;
    while ($el && $el !== container.element && $el !== doc.body) {
      const isSticky = getTargetValue($el, 'position') === 'sticky' ?
                       setTargetValues($el, { position: 'static' }) :
                       false;
      if ($el === $offsetParent) {
        offsetX += $el.offsetLeft || 0;
        offsetY += $el.offsetTop || 0;
        $offsetParent = $el.offsetParent;
      }
      $el = /** @type {HTMLElement} */($el.parentElement);
      if (isSticky) {
        if (!stickys) stickys = [];
        stickys.push(isSticky);
      }
    }
    if (isContainerStatic) isContainerStatic.revert();
    const offset = isHori ? offsetX : offsetY;
    const targetSize = isHori ? $target.offsetWidth : $target.offsetHeight;
    const containerSize = isHori ? container.width : container.height;
    const scrollSize = isHori ? container.scrollWidth : container.scrollHeight;
    const maxScroll = scrollSize - containerSize;
    const enter = this.enter;
    const leave = this.leave;

    /** @type {ScrollThresholdValue} */
    let enterTarget = 'start';
    /** @type {ScrollThresholdValue} */
    let leaveTarget = 'end';
    /** @type {ScrollThresholdValue} */
    let enterContainer = 'end';
    /** @type {ScrollThresholdValue} */
    let leaveContainer = 'start';

    if (isStr(enter)) {
      const splitted = /** @type {String} */(enter).split(' ');
      enterContainer = splitted[0];
      enterTarget = splitted.length > 1 ? splitted[1] : enterTarget;
    } else if (isObj(enter)) {
      const e = /** @type {ScrollThresholdParam} */(enter);
      if (!isUnd(e.container)) enterContainer = e.container;
      if (!isUnd(e.target)) enterTarget = e.target;
    } else if (isNum(enter)) {
      enterContainer = /** @type {Number} */(enter);
    }

    if (isStr(leave)) {
      const splitted = /** @type {String} */(leave).split(' ');
      leaveContainer = splitted[0];
      leaveTarget = splitted.length > 1 ? splitted[1] : leaveTarget;
    } else if (isObj(leave)) {
      const t = /** @type {ScrollThresholdParam} */(leave);
      if (!isUnd(t.container)) leaveContainer = t.container;
      if (!isUnd(t.target)) leaveTarget = t.target;
    } else if (isNum(leave)) {
      leaveContainer = /** @type {Number} */(leave);
    }

    const parsedEnterTarget = parseBoundValue($target, enterTarget, targetSize);
    const parsedLeaveTarget = parseBoundValue($target, leaveTarget, targetSize);
    const under = (parsedEnterTarget + offset) - containerSize;
    const over = (parsedLeaveTarget + offset) - maxScroll;
    const parsedEnterContainer = parseBoundValue($target, enterContainer, containerSize, under, over);
    const parsedLeaveContainer = parseBoundValue($target, leaveContainer, containerSize, under, over);
    const offsetStart = parsedEnterTarget + offset - parsedEnterContainer;
    const offsetEnd = parsedLeaveTarget + offset - parsedLeaveContainer;
    const scrollDelta = offsetEnd - offsetStart;
    this.offsets[0] = offsetX;
    this.offsets[1] = offsetY;
    this.offset = offset;
    this.offsetStart = offsetStart;
    this.offsetEnd = offsetEnd;
    this.distance = scrollDelta <= 0 ? 0 : scrollDelta;
    this.thresholds = [enterTarget, leaveTarget, enterContainer, leaveContainer];
    this.coords = [parsedEnterTarget, parsedLeaveTarget, parsedEnterContainer, parsedLeaveContainer];
    if (stickys) {
      stickys.forEach(sticky => sticky.revert());
    }
    if (linked) {
      linked.seek(linkedTime, true);
    }
    if (this._debug) {
      this.debug();
    }
  }

  handleScroll() {
    const linked = this.linked;
    const sync = this.sync;
    const syncEase = this.syncEase;
    const syncSmooth = this.syncSmooth;
    const shouldSeek = linked && (syncEase || syncSmooth);
    const isHori = this.horizontal;
    const container = this.container;
    const scroll = this.scroll;
    const isBefore = scroll <= this.offsetStart;
    const isAfter = scroll >= this.offsetEnd;
    const isInView = !isBefore && !isAfter;
    const isOnTheEdge = scroll === this.offsetStart || scroll === this.offsetEnd;
    const forceEnter = !this.hasEntered && isOnTheEdge;
    const $debug = this._debug && this.$debug;
    let hasUpdated = false;
    let syncCompleted = false;
    let p = this.progress;

    if (isBefore && this.began) {
      this.began = false;
    }

    if (p > 0 && !this.began) {
      this.began = true;
    }

    if (shouldSeek) {
      const lp = linked.progress;
      if (syncSmooth && isNum(syncSmooth)) {
        if (/** @type {Number} */(syncSmooth) < 1) {
          const step = 0.0001;
          const snap = lp < p && p === 1 ? step : lp > p && !p ? -1e-4 : 0;
          p = round(lerp(lp, p, interpolate(.01, .2, /** @type {Number} */(syncSmooth)), false) + snap, 6);
        }
      } else if (syncEase) {
        p = syncEase(p);
      }
      hasUpdated = p !== this.prevProgress;
      syncCompleted = lp === 1;
      if (hasUpdated && !syncCompleted && (syncSmooth && lp)) {
        container.wakeTicker.restart();
      }
    }

    if ($debug) {
      const sticky = isHori ? container.scrollY : container.scrollX;
      $debug.style[isHori ? 'top' : 'left'] = sticky + 10 + 'px';
    }

    // Trigger enter callbacks if already in view or when entering the view
    if ((isInView && !this.isInView) || (forceEnter && !this.forceEnter && !this.hasEntered)) {
      if (isInView) this.isInView = true;
      if (!this.forceEnter || !this.hasEntered) {
        if ($debug && isInView) $debug.style.zIndex = `${this.container.zIndex++}`;
        this.onSyncEnter(this);
        this.onEnter(this);
        if (this.backward) {
          this.onSyncEnterBackward(this);
          this.onEnterBackward(this);
        } else {
          this.onSyncEnterForward(this);
          this.onEnterForward(this);
        }
        this.hasEntered = true;
        if (forceEnter) this.forceEnter = true;
      } else if (isInView) {
        this.forceEnter = false;
      }
    }

    if (isInView || !isInView && this.isInView) {
      hasUpdated = true;
    }

    if (hasUpdated) {
      if (shouldSeek) linked.seek(linked.duration * p);
      this.onUpdate(this);
    }

    if (!isInView && this.isInView) {
      this.isInView = false;
      this.onSyncLeave(this);
      this.onLeave(this);
      if (this.backward) {
        this.onSyncLeaveBackward(this);
        this.onLeaveBackward(this);
      } else {
        this.onSyncLeaveForward(this);
        this.onLeaveForward(this);
      }
      if (sync && !syncSmooth) {
        syncCompleted = true;
      }
    }

    if (p >= 1 && this.began && !this.completed && (sync && syncCompleted || !sync)) {
      if (sync) {
        this.onSyncComplete(this);
      }
      this.completed = true;
      if ((!this.repeat && !linked) || (!this.repeat && linked && linked.completed)) {
        this.revert();
      }
    }

    if (p < 1 && this.completed) {
      this.completed = false;
    }

    this.prevProgress = p;
  }

  revert() {
    if (this.reverted) return;
    const container = this.container;
    removeChild(container, this);
    if (!container._head) {
      container.revert();
    }
    if (this._debug) {
      this.removeDebug();
    }
    this.reverted = true;
    return this;
  }

}

/**
 * @param {ScrollObserverParams} [parameters={}]
 * @return {ScrollObserver}
 */
const onScroll = (parameters = {}) => new ScrollObserver(parameters);




/**
 * @typedef  {Object} StaggerParameters
 * @property {Number|String} [start]
 * @property {Number|'first'|'center'|'last'} [from]
 * @property {Boolean} [reversed]
 * @property {Array.<Number>} [grid]
 * @property {('x'|'y')} [axis]
 * @property {EasingParam} [ease]
 * @property {TweenModifier} [modifier]
 */

/**
 * @callback StaggerFunction
 * @param {Target} [target]
 * @param {Number} [index]
 * @param {Number} [length]
 * @param {Timeline} [tl]
 * @return {Number|String}
 */

/**
 * @param  {Number|String|[Number|String,Number|String]} val
 * @param  {StaggerParameters} params
 * @return {StaggerFunction}
 */
const stagger = (val, params = {}) => {
  let values = [];
  let maxValue = 0;
  const from = params.from;
  const reversed = params.reversed;
  const ease = params.ease;
  const hasEasing = !isUnd(ease);
  const hasSpring = hasEasing && !isUnd(/** @type {Spring} */(ease).ease);
  const staggerEase = hasSpring ? /** @type {Spring} */(ease).ease : hasEasing ? parseEasings(ease) : null;
  const grid = params.grid;
  const axis = params.axis;
  const fromFirst = isUnd(from) || from === 0 || from === 'first';
  const fromCenter = from === 'center';
  const fromLast = from === 'last';
  const isRange = isArr(val);
  const val1 = isRange ? parseNumber(val[0]) : parseNumber(val);
  const val2 = isRange ? parseNumber(val[1]) : 0;
  const unitMatch = unitsExecRgx.exec((isRange ? val[1] : val) + emptyString);
  const start = params.start || 0 + (isRange ? val1 : 0);
  let fromIndex = fromFirst ? 0 : isNum(from) ? from : 0;
  return (_, i, t, tl) => {
    if (fromCenter) fromIndex = (t - 1) / 2;
    if (fromLast) fromIndex = t - 1;
    if (!values.length) {
      for (let index = 0; index < t; index++) {
        if (!grid) {
          values.push(abs(fromIndex - index));
        } else {
          const fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
          const fromY = !fromCenter ? floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
          const toX = index % grid[0];
          const toY = floor(index / grid[0]);
          const distanceX = fromX - toX;
          const distanceY = fromY - toY;
          let value = sqrt(distanceX * distanceX + distanceY * distanceY);
          if (axis === 'x') value = -distanceX;
          if (axis === 'y') value = -distanceY;
          values.push(value);
        }
        maxValue = max(...values);
      }
      if (staggerEase) values = values.map(val => staggerEase(val / maxValue) * maxValue);
      if (reversed) values = values.map(val => axis ? (val < 0) ? val * -1 : -val : abs(maxValue - val));
    }
    const spacing = isRange ? (val2 - val1) / maxValue : val1;
    const offset = tl ? parseTimelinePosition(tl, isUnd(params.start) ? tl.iterationDuration : start) : /** @type {Number} */(start);
    /** @type {String|Number} */
    let output = offset + ((spacing * round(values[i], 2)) || 0);
    if (params.modifier) output = params.modifier(output);
    if (unitMatch) output = `${output}${unitMatch[2]}`;
    return output;
  }
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.esm.js");


const animation = (0,animejs__WEBPACK_IMPORTED_MODULE_0__.animate)(targets, parameters);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCtCQUErQixPQUFPLEVBQUUsYUFBYTtBQUNyRDtBQUNBO0FBQ0E7O0FBRXlSOzs7Ozs7O1VDMThPelI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOa0M7O0FBRWxDLGtCQUFrQixnREFBTyxzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2FuaW1lanMvbGliL2FuaW1lLmVzbS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogYW5pbWUuanMgLSBFU01cbiAqIEB2ZXJzaW9uIHY0LjAuMlxuICogQGF1dGhvciBKdWxpYW4gR2FybmllclxuICogQGxpY2Vuc2UgTUlUXG4gKiBAY29weXJpZ2h0IChjKSAyMDI1IEp1bGlhbiBHYXJuaWVyXG4gKiBAc2VlIGh0dHBzOi8vYW5pbWVqcy5jb21cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IERlZmF1bHRzUGFyYW1zXG4gKiBAcHJvcGVydHkge051bWJlcnxTdHJpbmd9IFtpZF1cbiAqIEBwcm9wZXJ0eSB7UGVyY2VudGFnZUtleWZyYW1lc3xEdXJhdGlvbktleWZyYW1lc30gW2tleWZyYW1lc11cbiAqIEBwcm9wZXJ0eSB7RWFzaW5nUGFyYW19IFtwbGF5YmFja0Vhc2VdXG4gKiBAcHJvcGVydHkge051bWJlcn0gW3BsYXliYWNrUmF0ZV1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBbZnJhbWVSYXRlXVxuICogQHByb3BlcnR5IHtOdW1iZXJ8Qm9vbGVhbn0gW2xvb3BdXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IFtyZXZlcnNlZF1cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gW2FsdGVybmF0ZV1cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbnxTY3JvbGxPYnNlcnZlcn0gW2F1dG9wbGF5XVxuICogQHByb3BlcnR5IHtOdW1iZXJ8RnVuY3Rpb25WYWx1ZX0gW2R1cmF0aW9uXVxuICogQHByb3BlcnR5IHtOdW1iZXJ8RnVuY3Rpb25WYWx1ZX0gW2RlbGF5XVxuICogQHByb3BlcnR5IHtOdW1iZXJ9IFtsb29wRGVsYXldXG4gKiBAcHJvcGVydHkge0Vhc2luZ1BhcmFtfSBbZWFzZV1cbiAqIEBwcm9wZXJ0eSB7J25vbmUnfCdyZXBsYWNlJ3wnYmxlbmQnfGNvbXBvc2l0aW9uVHlwZXN9IFtjb21wb3NpdGlvbl1cbiAqIEBwcm9wZXJ0eSB7KHY6IGFueSkgPT4gYW55fSBbbW9kaWZpZXJdXG4gKiBAcHJvcGVydHkgeyh0aWNrYWJsZTogVGlja2FibGUpID0+IHZvaWR9IFtvbkJlZ2luXVxuICogQHByb3BlcnR5IHsodGlja2FibGU6IFRpY2thYmxlKSA9PiB2b2lkfSBbb25CZWZvcmVVcGRhdGVdXG4gKiBAcHJvcGVydHkgeyh0aWNrYWJsZTogVGlja2FibGUpID0+IHZvaWR9IFtvblVwZGF0ZV1cbiAqIEBwcm9wZXJ0eSB7KHRpY2thYmxlOiBUaWNrYWJsZSkgPT4gdm9pZH0gW29uTG9vcF1cbiAqIEBwcm9wZXJ0eSB7KHRpY2thYmxlOiBUaWNrYWJsZSkgPT4gdm9pZH0gW29uUGF1c2VdXG4gKiBAcHJvcGVydHkgeyh0aWNrYWJsZTogVGlja2FibGUpID0+IHZvaWR9IFtvbkNvbXBsZXRlXVxuICogQHByb3BlcnR5IHsocmVuZGVyYWJsZTogUmVuZGVyYWJsZSkgPT4gdm9pZH0gW29uUmVuZGVyXVxuICovXG5cbi8qKiBAdHlwZWRlZiB7SlNBbmltYXRpb258VGltZWxpbmV9IFJlbmRlcmFibGUgKi9cbi8qKiBAdHlwZWRlZiB7VGltZXJ8UmVuZGVyYWJsZX0gVGlja2FibGUgKi9cbi8qKiBAdHlwZWRlZiB7VGltZXImSlNBbmltYXRpb24mVGltZWxpbmV9IENhbGxiYWNrQXJndW1lbnQgKi9cbi8qKiBAdHlwZWRlZiB7QW5pbWF0YWJsZXxUaWNrYWJsZXxEcmFnZ2FibGV8U2Nyb2xsT2JzZXJ2ZXJ8U2NvcGV9IFJldmVydGlibGUgKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBEcmFnZ2FibGVBeGlzUGFyYW1cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBbbWFwVG9dXG4gKiBAcHJvcGVydHkge1R3ZWVuTW9kaWZpZXJ9IFttb2RpZmllcl1cbiAqIEBwcm9wZXJ0eSB7VHdlZW5Db21wb3NpdGlvbn0gW2NvbXBvc2l0aW9uXVxuICogQHByb3BlcnR5IHtOdW1iZXJ8QXJyYXk8TnVtYmVyPnwoKGRyYWdnYWJsZTogRHJhZ2dhYmxlKSA9PiBOdW1iZXJ8QXJyYXk8TnVtYmVyPil9IFtzbmFwXVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gRHJhZ2dhYmxlQ3Vyc29yUGFyYW1zXG4gKiBAcHJvcGVydHkge1N0cmluZ30gW29uSG92ZXJdXG4gKiBAcHJvcGVydHkge1N0cmluZ30gW29uR3JhYl1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IERyYWdnYWJsZVBhcmFtc1xuICogQHByb3BlcnR5IHtET01UYXJnZXRTZWxlY3Rvcn0gW3RyaWdnZXJdXG4gKiBAcHJvcGVydHkge0RPTVRhcmdldFNlbGVjdG9yfEFycmF5PE51bWJlcj58KChkcmFnZ2FibGU6IERyYWdnYWJsZSkgPT4gRE9NVGFyZ2V0U2VsZWN0b3J8QXJyYXk8TnVtYmVyPil9IFtjb250YWluZXJdXG4gKiBAcHJvcGVydHkge0Jvb2xlYW58RHJhZ2dhYmxlQXhpc1BhcmFtfSBbeF1cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbnxEcmFnZ2FibGVBeGlzUGFyYW19IFt5XVxuICogQHByb3BlcnR5IHtUd2Vlbk1vZGlmaWVyfSBbbW9kaWZpZXJdXG4gKiBAcHJvcGVydHkge051bWJlcnxBcnJheTxOdW1iZXI+fCgoZHJhZ2dhYmxlOiBEcmFnZ2FibGUpID0+IE51bWJlcnxBcnJheTxOdW1iZXI+KX0gW3NuYXBdXG4gKiBAcHJvcGVydHkge051bWJlcnxBcnJheTxOdW1iZXI+fCgoZHJhZ2dhYmxlOiBEcmFnZ2FibGUpID0+IE51bWJlcnxBcnJheTxOdW1iZXI+KX0gW2NvbnRhaW5lclBhZGRpbmddXG4gKiBAcHJvcGVydHkge051bWJlcnwoKGRyYWdnYWJsZTogRHJhZ2dhYmxlKSA9PiBOdW1iZXIpfSBbY29udGFpbmVyRnJpY3Rpb25dXG4gKiBAcHJvcGVydHkge051bWJlcnwoKGRyYWdnYWJsZTogRHJhZ2dhYmxlKSA9PiBOdW1iZXIpfSBbcmVsZWFzZUNvbnRhaW5lckZyaWN0aW9uXVxuICogQHByb3BlcnR5IHtOdW1iZXJ8KChkcmFnZ2FibGU6IERyYWdnYWJsZSkgPT4gTnVtYmVyKX0gW2RyYWdTcGVlZF1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfCgoZHJhZ2dhYmxlOiBEcmFnZ2FibGUpID0+IE51bWJlcil9IFtzY3JvbGxTcGVlZF1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfCgoZHJhZ2dhYmxlOiBEcmFnZ2FibGUpID0+IE51bWJlcil9IFtzY3JvbGxUaHJlc2hvbGRdXG4gKiBAcHJvcGVydHkge051bWJlcnwoKGRyYWdnYWJsZTogRHJhZ2dhYmxlKSA9PiBOdW1iZXIpfSBbbWluVmVsb2NpdHldXG4gKiBAcHJvcGVydHkge051bWJlcnwoKGRyYWdnYWJsZTogRHJhZ2dhYmxlKSA9PiBOdW1iZXIpfSBbbWF4VmVsb2NpdHldXG4gKiBAcHJvcGVydHkge051bWJlcnwoKGRyYWdnYWJsZTogRHJhZ2dhYmxlKSA9PiBOdW1iZXIpfSBbdmVsb2NpdHlNdWx0aXBsaWVyXVxuICogQHByb3BlcnR5IHtOdW1iZXJ9IFtyZWxlYXNlTWFzc11cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBbcmVsZWFzZVN0aWZmbmVzc11cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBbcmVsZWFzZURhbXBpbmddXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IFtyZWxlYXNlRGFtcGluZ11cbiAqIEBwcm9wZXJ0eSB7RWFzaW5nUGFyYW19IFtyZWxlYXNlRWFzZV1cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbnxEcmFnZ2FibGVDdXJzb3JQYXJhbXN8KChkcmFnZ2FibGU6IERyYWdnYWJsZSkgPT4gQm9vbGVhbnxEcmFnZ2FibGVDdXJzb3JQYXJhbXMpfSBbY3Vyc29yXVxuICogQHByb3BlcnR5IHtDYWxsYmFjazxEcmFnZ2FibGU+fSBbb25HcmFiXVxuICogQHByb3BlcnR5IHtDYWxsYmFjazxEcmFnZ2FibGU+fSBbb25EcmFnXVxuICogQHByb3BlcnR5IHtDYWxsYmFjazxEcmFnZ2FibGU+fSBbb25SZWxlYXNlXVxuICogQHByb3BlcnR5IHtDYWxsYmFjazxEcmFnZ2FibGU+fSBbb25VcGRhdGVdXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrPERyYWdnYWJsZT59IFtvblNldHRsZV1cbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2s8RHJhZ2dhYmxlPn0gW29uU25hcF1cbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2s8RHJhZ2dhYmxlPn0gW29uUmVzaXplXVxuICogQHByb3BlcnR5IHtDYWxsYmFjazxEcmFnZ2FibGU+fSBbb25BZnRlclJlc2l6ZV1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtTVkdHZW9tZXRyeUVsZW1lbnQgJiB7XG4gKiAgIHNldEF0dHJpYnV0ZShuYW1lOiAnZHJhdycsIHZhbHVlOiBgJHtudW1iZXJ9ICR7bnVtYmVyfWApOiB2b2lkO1xuICogICBkcmF3OiBgJHtudW1iZXJ9ICR7bnVtYmVyfWA7XG4gKiB9fSBEcmF3YWJsZVNWR0dlb21ldHJ5XG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgRWFzaW5nRnVuY3Rpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7KCdsaW5lYXInfCdsaW5lYXIoeDEsIHgyIDI1JSwgeDMpJ3wnaW4nfCdvdXQnfCdpbk91dCd8J2luUXVhZCd8J291dFF1YWQnfCdpbk91dFF1YWQnfCdpbkN1YmljJ3wnb3V0Q3ViaWMnfCdpbk91dEN1YmljJ3wnaW5RdWFydCd8J291dFF1YXJ0J3wnaW5PdXRRdWFydCd8J2luUXVpbnQnfCdvdXRRdWludCd8J2luT3V0UXVpbnQnfCdpblNpbmUnfCdvdXRTaW5lJ3wnaW5PdXRTaW5lJ3wnaW5DaXJjJ3wnb3V0Q2lyYyd8J2luT3V0Q2lyYyd8J2luRXhwbyd8J291dEV4cG8nfCdpbk91dEV4cG8nfCdpbkJvdW5jZSd8J291dEJvdW5jZSd8J2luT3V0Qm91bmNlJ3wnaW5CYWNrJ3wnb3V0QmFjayd8J2luT3V0QmFjayd8J2luRWxhc3RpYyd8J291dEVsYXN0aWMnfCdpbk91dEVsYXN0aWMnfCdpcnJlZ3VsYXInfCdjdWJpY0Jlemllcid8J3N0ZXBzJ3wnaW4ocCA9IDEuNjc1KSd8J291dChwID0gMS42NzUpJ3wnaW5PdXQocCA9IDEuNjc1KSd8J2luQmFjayhvdmVyc2hvb3QgPSAxLjcwMTU4KSd8J291dEJhY2sob3ZlcnNob290ID0gMS43MDE1OCknfCdpbk91dEJhY2sob3ZlcnNob290ID0gMS43MDE1OCknfCdpbkVsYXN0aWMoYW1wbGl0dWRlID0gMSwgcGVyaW9kID0gLjMpJ3wnb3V0RWxhc3RpYyhhbXBsaXR1ZGUgPSAxLCBwZXJpb2QgPSAuMyknfCdpbk91dEVsYXN0aWMoYW1wbGl0dWRlID0gMSwgcGVyaW9kID0gLjMpJ3wnaXJyZWd1bGFyKGxlbmd0aCA9IDEwLCByYW5kb21uZXNzID0gMSknfCdjdWJpY0Jlemllcih4MSwgeTEsIHgyLCB5MiknfCdzdGVwcyhzdGVwcyA9IDEwKScpfSBFYXNlU3RyaW5nUGFyYW1OYW1lc1xuICovXG5cbi8vIEEgaGFjayB0byBnZXQgYm90aCBlYXNlIG5hbWVzIHN1Z2dlc3Rpb25zIEFORCBhbGxvdyBhbnkgc3RyaW5nc1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yOTcyOSNpc3N1ZWNvbW1lbnQtNDYwMzQ2NDIxXG4vKiogQHR5cGVkZWYgeyhTdHJpbmcgJiB7fSl8RWFzZVN0cmluZ1BhcmFtTmFtZXN8RWFzaW5nRnVuY3Rpb258U3ByaW5nfSBFYXNpbmdQYXJhbSAqL1xuXG4vKiogQHR5cGVkZWYge0hUTUxFbGVtZW50fFNWR0VsZW1lbnR9IERPTVRhcmdldCAqL1xuLyoqIEB0eXBlZGVmIHtSZWNvcmQ8U3RyaW5nLCBhbnk+fSBKU1RhcmdldCAqL1xuLyoqIEB0eXBlZGVmIHtET01UYXJnZXR8SlNUYXJnZXR9IFRhcmdldCAqL1xuLyoqIEB0eXBlZGVmIHtUYXJnZXR8Tm9kZUxpc3R8U3RyaW5nfSBUYXJnZXRTZWxlY3RvciAqL1xuLyoqIEB0eXBlZGVmIHtET01UYXJnZXR8Tm9kZUxpc3R8U3RyaW5nfSBET01UYXJnZXRTZWxlY3RvciAqL1xuLyoqIEB0eXBlZGVmIHtBcnJheS48RE9NVGFyZ2V0U2VsZWN0b3I+fERPTVRhcmdldFNlbGVjdG9yfSBET01UYXJnZXRzUGFyYW0gKi9cbi8qKiBAdHlwZWRlZiB7QXJyYXkuPERPTVRhcmdldD59IERPTVRhcmdldHNBcnJheSAqL1xuLyoqIEB0eXBlZGVmIHtBcnJheS48SlNUYXJnZXQ+fEpTVGFyZ2V0fSBKU1RhcmdldHNQYXJhbSAqL1xuLyoqIEB0eXBlZGVmIHtBcnJheS48SlNUYXJnZXQ+fSBKU1RhcmdldHNBcnJheSAqL1xuLyoqIEB0eXBlZGVmIHtBcnJheS48VGFyZ2V0U2VsZWN0b3I+fFRhcmdldFNlbGVjdG9yfSBUYXJnZXRzUGFyYW0gKi9cbi8qKiBAdHlwZWRlZiB7QXJyYXkuPFRhcmdldD59IFRhcmdldHNBcnJheSAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBGdW5jdGlvblZhbHVlXG4gKiBAcGFyYW0ge1RhcmdldH0gdGFyZ2V0IC0gVGhlIGFuaW1hdGVkIHRhcmdldFxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IC0gVGhlIHRhcmdldCBpbmRleFxuICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCAtIFRoZSB0b3RhbCBudW1iZXIgb2YgYW5pbWF0ZWQgdGFyZ2V0c1xuICogQHJldHVybiB7TnVtYmVyfFN0cmluZ3xUd2Vlbk9iamVjdFZhbHVlfEFycmF5LjxOdW1iZXJ8U3RyaW5nfFR3ZWVuT2JqZWN0VmFsdWU+fVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIFR3ZWVuTW9kaWZpZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSAtIFRoZSBhbmltYXRlZCB2YWx1ZVxuICogQHJldHVybiB7TnVtYmVyfFN0cmluZ31cbiAqL1xuXG4vKiogQHR5cGVkZWYge1tOdW1iZXIsIE51bWJlciwgTnVtYmVyLCBOdW1iZXJdfSBDb2xvckFycmF5ICovXG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEBjYWxsYmFjayBDYWxsYmFja1xuICogQHBhcmFtIHtUfSBzZWxmIC0gUmV0dXJucyBpdHNlbGZcbiAqIEBwYXJhbSB7UG9pbnRlckV2ZW50fSBbZV1cbiAqIEByZXR1cm4geyp9XG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUge29iamVjdH0gVFxuICogQHR5cGVkZWYge09iamVjdH0gVGlja2FibGVDYWxsYmFja3NcbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2s8VD59IFtvbkJlZ2luXVxuICogQHByb3BlcnR5IHtDYWxsYmFjazxUPn0gW29uQmVmb3JlVXBkYXRlXVxuICogQHByb3BlcnR5IHtDYWxsYmFjazxUPn0gW29uVXBkYXRlXVxuICogQHByb3BlcnR5IHtDYWxsYmFjazxUPn0gW29uTG9vcF1cbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2s8VD59IFtvblBhdXNlXVxuICogQHByb3BlcnR5IHtDYWxsYmFjazxUPn0gW29uQ29tcGxldGVdXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUge29iamVjdH0gVFxuICogQHR5cGVkZWYge09iamVjdH0gUmVuZGVyYWJsZUNhbGxiYWNrc1xuICogQHByb3BlcnR5IHtDYWxsYmFjazxUPn0gW29uUmVuZGVyXVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gVHdlZW5cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBpZFxuICogQHByb3BlcnR5IHtKU0FuaW1hdGlvbn0gcGFyZW50XG4gKiBAcHJvcGVydHkge1N0cmluZ30gcHJvcGVydHlcbiAqIEBwcm9wZXJ0eSB7VGFyZ2V0fSB0YXJnZXRcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfE51bWJlcn0gX3ZhbHVlXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufG51bGx9IF9mdW5jXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBfZWFzZVxuICogQHByb3BlcnR5IHtBcnJheS48TnVtYmVyPn0gX2Zyb21OdW1iZXJzXG4gKiBAcHJvcGVydHkge0FycmF5LjxOdW1iZXI+fSBfdG9OdW1iZXJzXG4gKiBAcHJvcGVydHkge0FycmF5LjxTdHJpbmc+fSBfc3RyaW5nc1xuICogQHByb3BlcnR5IHtOdW1iZXJ9IF9mcm9tTnVtYmVyXG4gKiBAcHJvcGVydHkge051bWJlcn0gX3RvTnVtYmVyXG4gKiBAcHJvcGVydHkge0FycmF5LjxOdW1iZXI+fSBfbnVtYmVyc1xuICogQHByb3BlcnR5IHtOdW1iZXJ9IF9udW1iZXJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBfdW5pdFxuICogQHByb3BlcnR5IHtUd2Vlbk1vZGlmaWVyfSBfbW9kaWZpZXJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBfY3VycmVudFRpbWVcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBfZGVsYXlcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBfdXBkYXRlRHVyYXRpb25cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBfc3RhcnRUaW1lXG4gKiBAcHJvcGVydHkge051bWJlcn0gX2NoYW5nZUR1cmF0aW9uXG4gKiBAcHJvcGVydHkge051bWJlcn0gX2Fic29sdXRlU3RhcnRUaW1lXG4gKiBAcHJvcGVydHkge3R3ZWVuVHlwZXN9IF90d2VlblR5cGVcbiAqIEBwcm9wZXJ0eSB7dmFsdWVUeXBlc30gX3ZhbHVlVHlwZVxuICogQHByb3BlcnR5IHtOdW1iZXJ9IF9jb21wb3NpdGlvblxuICogQHByb3BlcnR5IHtOdW1iZXJ9IF9pc092ZXJsYXBwZWRcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBfaXNPdmVycmlkZGVuXG4gKiBAcHJvcGVydHkge051bWJlcn0gX3JlbmRlclRyYW5zZm9ybXNcbiAqIEBwcm9wZXJ0eSB7VHdlZW59IF9wcmV2UmVwXG4gKiBAcHJvcGVydHkge1R3ZWVufSBfbmV4dFJlcFxuICogQHByb3BlcnR5IHtUd2Vlbn0gX3ByZXZBZGRcbiAqIEBwcm9wZXJ0eSB7VHdlZW59IF9uZXh0QWRkXG4gKiBAcHJvcGVydHkge1R3ZWVufSBfcHJldlxuICogQHByb3BlcnR5IHtUd2Vlbn0gX25leHRcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIFR3ZWVuRGVjb21wb3NlZFZhbHVlXG4gKiBAcHJvcGVydHkge051bWJlcn0gdCAtIFR5cGVcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBuIC0gU2luZ2xlIG51bWJlciB2YWx1ZVxuICogQHByb3BlcnR5IHtTdHJpbmd9IHUgLSBWYWx1ZSB1bml0XG4gKiBAcHJvcGVydHkge1N0cmluZ30gbyAtIFZhbHVlIG9wZXJhdG9yXG4gKiBAcHJvcGVydHkge0FycmF5LjxOdW1iZXI+fSBkIC0gQXJyYXkgb2YgTnVtYmVycyAoaW4gY2FzZSBvZiBjb21wbGV4IHZhbHVlIHR5cGUpXG4gKiBAcHJvcGVydHkge0FycmF5LjxTdHJpbmc+fSBzIC0gU3RyaW5ncyAoaW4gY2FzZSBvZiBjb21wbGV4IHZhbHVlIHR5cGUpXG4gKi9cblxuLyoqIEB0eXBlZGVmIHt7X2hlYWQ6IG51bGx8VHdlZW4sIF90YWlsOiBudWxsfFR3ZWVufX0gVHdlZW5Qcm9wZXJ0eVNpYmxpbmdzICovXG4vKiogQHR5cGVkZWYge1JlY29yZDxTdHJpbmcsIFR3ZWVuUHJvcGVydHlTaWJsaW5ncz59IFR3ZWVuTG9va3VwcyAqL1xuLyoqIEB0eXBlZGVmIHtXZWFrTWFwLjxUYXJnZXQsIFR3ZWVuTG9va3Vwcz59IFR3ZWVuUmVwbGFjZUxvb2t1cHMgKi9cbi8qKiBAdHlwZWRlZiB7TWFwLjxUYXJnZXQsIFR3ZWVuTG9va3Vwcz59IFR3ZWVuQWRkaXRpdmVMb29rdXBzICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gVGltZXJPcHRpb25zXG4gKiBAcHJvcGVydHkge051bWJlcnxTdHJpbmd9IFtpZF1cbiAqIEBwcm9wZXJ0eSB7VHdlZW5QYXJhbVZhbHVlfSBbZHVyYXRpb25dXG4gKiBAcHJvcGVydHkge1R3ZWVuUGFyYW1WYWx1ZX0gW2RlbGF5XVxuICogQHByb3BlcnR5IHtOdW1iZXJ9IFtsb29wRGVsYXldXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IFtyZXZlcnNlZF1cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gW2FsdGVybmF0ZV1cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbnxOdW1iZXJ9IFtsb29wXVxuICogQHByb3BlcnR5IHtCb29sZWFufFNjcm9sbE9ic2VydmVyfSBbYXV0b3BsYXldXG4gKiBAcHJvcGVydHkge051bWJlcn0gW2ZyYW1lUmF0ZV1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBbcGxheWJhY2tSYXRlXVxuICovXG5cbi8qKlxuXG4vKipcbiAqIEB0eXBlZGVmIHtUaW1lck9wdGlvbnMgJiBUaWNrYWJsZUNhbGxiYWNrczxUaW1lcj59IFRpbWVyUGFyYW1zXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7TnVtYmVyfFN0cmluZ3xGdW5jdGlvblZhbHVlfSBUd2VlblBhcmFtVmFsdWVcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtUd2VlblBhcmFtVmFsdWV8W1R3ZWVuUGFyYW1WYWx1ZSwgVHdlZW5QYXJhbVZhbHVlXX0gVHdlZW5Qcm9wVmFsdWVcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsoU3RyaW5nICYge30pfCdub25lJ3wncmVwbGFjZSd8J2JsZW5kJ3xjb21wb3NpdGlvblR5cGVzfSBUd2VlbkNvbXBvc2l0aW9uXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUd2VlblBhcmFtc09wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7VHdlZW5QYXJhbVZhbHVlfSBbZHVyYXRpb25dXG4gKiBAcHJvcGVydHkge1R3ZWVuUGFyYW1WYWx1ZX0gW2RlbGF5XVxuICogQHByb3BlcnR5IHtFYXNpbmdQYXJhbX0gW2Vhc2VdXG4gKiBAcHJvcGVydHkge1R3ZWVuTW9kaWZpZXJ9IFttb2RpZmllcl1cbiAqIEBwcm9wZXJ0eSB7VHdlZW5Db21wb3NpdGlvbn0gW2NvbXBvc2l0aW9uXVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gVHdlZW5WYWx1ZXNcbiAqIEBwcm9wZXJ0eSB7VHdlZW5QYXJhbVZhbHVlfSBbZnJvbV1cbiAqIEBwcm9wZXJ0eSB7VHdlZW5Qcm9wVmFsdWV9IFt0b11cbiAqIEBwcm9wZXJ0eSB7VHdlZW5Qcm9wVmFsdWV9IFtmcm9tVG9dXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7VHdlZW5QYXJhbXNPcHRpb25zICYgVHdlZW5WYWx1ZXN9IFR3ZWVuS2V5VmFsdWVcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtBcnJheS48VHdlZW5LZXlWYWx1ZXxUd2VlblByb3BWYWx1ZT59IEFycmF5U3ludGF4VmFsdWVcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtUd2VlblBhcmFtVmFsdWV8QXJyYXlTeW50YXhWYWx1ZXxUd2VlbktleVZhbHVlfSBUd2Vlbk9wdGlvbnNcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtQYXJ0aWFsPHt0bzogVHdlZW5QYXJhbVZhbHVlfEFycmF5LjxUd2VlblBhcmFtVmFsdWU+OyBmcm9tOiBUd2VlblBhcmFtVmFsdWV8QXJyYXkuPFR3ZWVuUGFyYW1WYWx1ZT47IGZyb21UbzogVHdlZW5QYXJhbVZhbHVlfEFycmF5LjxUd2VlblBhcmFtVmFsdWU+O30+fSBUd2Vlbk9iamVjdFZhbHVlXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBQZXJjZW50YWdlS2V5ZnJhbWVPcHRpb25zXG4gKiBAcHJvcGVydHkge0Vhc2luZ1BhcmFtfSBbZWFzZV1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtSZWNvcmQ8U3RyaW5nLCBUd2VlblBhcmFtVmFsdWU+fSBQZXJjZW50YWdlS2V5ZnJhbWVQYXJhbXNcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtSZWNvcmQ8U3RyaW5nLCBQZXJjZW50YWdlS2V5ZnJhbWVQYXJhbXMgJiBQZXJjZW50YWdlS2V5ZnJhbWVPcHRpb25zPn0gUGVyY2VudGFnZUtleWZyYW1lc1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge0FycmF5PFJlY29yZDxTdHJpbmcsIFR3ZWVuT3B0aW9ucyB8IFR3ZWVuTW9kaWZpZXIgfCBib29sZWFuPiAmIFR3ZWVuUGFyYW1zT3B0aW9ucz59IER1cmF0aW9uS2V5ZnJhbWVzXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBBbmltYXRpb25PcHRpb25zXG4gKiBAcHJvcGVydHkge1BlcmNlbnRhZ2VLZXlmcmFtZXN8RHVyYXRpb25LZXlmcmFtZXN9IFtrZXlmcmFtZXNdXG4gKiBAcHJvcGVydHkge0Vhc2luZ1BhcmFtfSBbcGxheWJhY2tFYXNlXVxuICovXG5cbi8vIFRPRE86IEN1cnJlbnRseSBzZXR0aW5nIFR3ZWVuTW9kaWZpZXIgdG8gdGhlIGludGVyc2VjdGVkIFJlY29yZDw+IG1ha2VzIHRoZSBGdW5jdGlvblZhbHVlIHR5cGUgdGFyZ2V0IHBhcmFtIGFueSBpZiBvbmx5IG9uZSBwYXJhbWV0ZXIgaXMgc2V0XG4vKipcbiAqIEB0eXBlZGVmIHtSZWNvcmQ8U3RyaW5nLCBUd2Vlbk9wdGlvbnMgfCBDYWxsYmFjazxKU0FuaW1hdGlvbj4gfCBUd2Vlbk1vZGlmaWVyIHwgYm9vbGVhbiB8IFBlcmNlbnRhZ2VLZXlmcmFtZXMgfCBEdXJhdGlvbktleWZyYW1lcyB8IFNjcm9sbE9ic2VydmVyPiAmIFRpbWVyT3B0aW9ucyAmIEFuaW1hdGlvbk9wdGlvbnMgJiBUd2VlblBhcmFtc09wdGlvbnMgJiBUaWNrYWJsZUNhbGxiYWNrczxKU0FuaW1hdGlvbj4gJiBSZW5kZXJhYmxlQ2FsbGJhY2tzPEpTQW5pbWF0aW9uPn0gQW5pbWF0aW9uUGFyYW1zXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUaW1lbGluZU9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7RGVmYXVsdHNQYXJhbXN9IFtkZWZhdWx0c11cbiAqIEBwcm9wZXJ0eSB7RWFzaW5nUGFyYW19IFtwbGF5YmFja0Vhc2VdXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7VGltZXJPcHRpb25zICYgVGltZWxpbmVPcHRpb25zICYgVGlja2FibGVDYWxsYmFja3M8VGltZWxpbmU+ICYgUmVuZGVyYWJsZUNhbGxiYWNrczxUaW1lbGluZT59IFRpbWVsaW5lUGFyYW1zXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgQW5pbWF0YWJsZVByb3BlcnR5U2V0dGVyXG4gKiBAcGFyYW0gIHtOdW1iZXJ8QXJyYXkuPE51bWJlcj59IHRvXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IFtkdXJhdGlvbl1cbiAqIEBwYXJhbSAge0Vhc2luZ1BhcmFtfSBbZWFzZV1cbiAqIEByZXR1cm4ge0FuaW1hdGFibGVPYmplY3R9XG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgQW5pbWF0YWJsZVByb3BlcnR5R2V0dGVyXG4gKiBAcmV0dXJuIHtOdW1iZXJ8QXJyYXkuPE51bWJlcj59XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7QW5pbWF0YWJsZVByb3BlcnR5U2V0dGVyICYgQW5pbWF0YWJsZVByb3BlcnR5R2V0dGVyfSBBbmltYXRhYmxlUHJvcGVydHlcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtBbmltYXRhYmxlICYgUmVjb3JkPFN0cmluZywgQW5pbWF0YWJsZVByb3BlcnR5Pn0gQW5pbWF0YWJsZU9iamVjdFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gQW5pbWF0YWJsZVByb3BlcnR5UGFyYW1zT3B0aW9uc1xuICogQHByb3BlcnR5IHtTdHJpbmd9IFt1bml0XVxuICogQHByb3BlcnR5IHtUd2VlblBhcmFtVmFsdWV9IFtkdXJhdGlvbl1cbiAqIEBwcm9wZXJ0eSB7RWFzaW5nUGFyYW19IFtlYXNlXVxuICogQHByb3BlcnR5IHtUd2Vlbk1vZGlmaWVyfSBbbW9kaWZpZXJdXG4gKiBAcHJvcGVydHkge1R3ZWVuQ29tcG9zaXRpb259IFtjb21wb3NpdGlvbl1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtSZWNvcmQ8U3RyaW5nLCBUd2VlblBhcmFtVmFsdWUgfCBFYXNpbmdQYXJhbSB8IFR3ZWVuTW9kaWZpZXIgfCBUd2VlbkNvbXBvc2l0aW9uIHwgQW5pbWF0YWJsZVByb3BlcnR5UGFyYW1zT3B0aW9ucz4gJiBBbmltYXRhYmxlUHJvcGVydHlQYXJhbXNPcHRpb25zfSBBbmltYXRhYmxlUGFyYW1zXG4gKi9cblxuXG4vLyBFbnZpcm9ubWVudHNcblxuLy8gVE9ETzogRG8gd2UgbmVlZCB0byBjaGVjayBpZiB3ZSdyZSBydW5uaW5nIGluc2lkZSBhIHdvcmtlciA/XG5jb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcblxuLyoqIEB0eXBlIHtPYmplY3R8TnVsbH0gKi9cbmNvbnN0IHdpbiA9IGlzQnJvd3NlciA/IHdpbmRvdyA6IG51bGw7XG5cbi8qKiBAdHlwZSB7RG9jdW1lbnR9ICovXG5jb25zdCBkb2MgPSBpc0Jyb3dzZXIgPyBkb2N1bWVudCA6IG51bGw7XG5cbi8vIEVudW1zXG5cbi8qKiBAZW51bSB7TnVtYmVyfSAqL1xuY29uc3QgdHdlZW5UeXBlcyA9IHtcbiAgT0JKRUNUOiAwLFxuICBBVFRSSUJVVEU6IDEsXG4gIENTUzogMixcbiAgVFJBTlNGT1JNOiAzLFxuICBDU1NfVkFSOiA0LFxufTtcblxuLyoqIEBlbnVtIHtOdW1iZXJ9ICovXG5jb25zdCB2YWx1ZVR5cGVzID0ge1xuICBOVU1CRVI6IDAsXG4gIFVOSVQ6IDEsXG4gIENPTE9SOiAyLFxuICBDT01QTEVYOiAzLFxufTtcblxuLyoqIEBlbnVtIHtOdW1iZXJ9ICovXG5jb25zdCB0aWNrTW9kZXMgPSB7XG4gIE5PTkU6IDAsXG4gIEFVVE86IDEsXG4gIEZPUkNFOiAyLFxufTtcblxuLyoqIEBlbnVtIHtOdW1iZXJ9ICovXG5jb25zdCBjb21wb3NpdGlvblR5cGVzID0ge1xuICByZXBsYWNlOiAwLFxuICBub25lOiAxLFxuICBibGVuZDogMixcbn07XG5cbi8vIENhY2hlIHN5bWJvbHNcblxuY29uc3QgaXNSZWdpc3RlcmVkVGFyZ2V0U3ltYm9sID0gU3ltYm9sKCk7XG5jb25zdCBpc0RvbVN5bWJvbCA9IFN5bWJvbCgpO1xuY29uc3QgaXNTdmdTeW1ib2wgPSBTeW1ib2woKTtcbmNvbnN0IHRyYW5zZm9ybXNTeW1ib2wgPSBTeW1ib2woKTtcbmNvbnN0IG1vcnBoUG9pbnRzU3ltYm9sID0gU3ltYm9sKCk7XG5jb25zdCBwcm94eVRhcmdldFN5bWJvbCA9IFN5bWJvbCgpO1xuXG4vLyBOdW1iZXJzXG5cbmNvbnN0IG1pblZhbHVlID0gMWUtMTE7XG5jb25zdCBtYXhWYWx1ZSA9IDFlMTI7XG5jb25zdCBLID0gMWUzO1xuY29uc3QgbWF4RnBzID0gMTIwO1xuXG4vLyBTdHJpbmdzXG5cbmNvbnN0IGVtcHR5U3RyaW5nID0gJyc7XG5jb25zdCBzaG9ydFRyYW5zZm9ybXMgPSBuZXcgTWFwKCk7XG5cbnNob3J0VHJhbnNmb3Jtcy5zZXQoJ3gnLCAndHJhbnNsYXRlWCcpO1xuc2hvcnRUcmFuc2Zvcm1zLnNldCgneScsICd0cmFuc2xhdGVZJyk7XG5zaG9ydFRyYW5zZm9ybXMuc2V0KCd6JywgJ3RyYW5zbGF0ZVonKTtcblxuY29uc3QgdmFsaWRUcmFuc2Zvcm1zID0gW1xuICAndHJhbnNsYXRlWCcsXG4gICd0cmFuc2xhdGVZJyxcbiAgJ3RyYW5zbGF0ZVonLFxuICAncm90YXRlJyxcbiAgJ3JvdGF0ZVgnLFxuICAncm90YXRlWScsXG4gICdyb3RhdGVaJyxcbiAgJ3NjYWxlJyxcbiAgJ3NjYWxlWCcsXG4gICdzY2FsZVknLFxuICAnc2NhbGVaJyxcbiAgJ3NrZXcnLFxuICAnc2tld1gnLFxuICAnc2tld1knLFxuICAncGVyc3BlY3RpdmUnLFxuICAnbWF0cml4JyxcbiAgJ21hdHJpeDNkJyxcbl07XG5cbmNvbnN0IHRyYW5zZm9ybXNGcmFnbWVudFN0cmluZ3MgPSB2YWxpZFRyYW5zZm9ybXMucmVkdWNlKChhLCB2KSA9PiAoey4uLmEsIFt2XTogdiArICcoJ30pLCB7fSk7XG5cbi8vIEZ1bmN0aW9uc1xuXG4vKiogQHJldHVybiB7dm9pZH0gKi9cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuLy8gUmVnZXhcblxuY29uc3QgaGV4VGVzdFJneCA9IC8oXiMoW1xcZGEtZl17M30pezEsMn0kKXwoXiMoW1xcZGEtZl17NH0pezEsMn0kKS9pO1xuY29uc3QgcmdiRXhlY1JneCA9IC9yZ2JcXChcXHMqKFxcZCspXFxzKixcXHMqKFxcZCspXFxzKixcXHMqKFxcZCspXFxzKlxcKS9pO1xuY29uc3QgcmdiYUV4ZWNSZ3ggPSAvcmdiYVxcKFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqLFxccyooLT9cXGQrfC0/XFxkKi5cXGQrKVxccypcXCkvaTtcbmNvbnN0IGhzbEV4ZWNSZ3ggPSAvaHNsXFwoXFxzKigtP1xcZCt8LT9cXGQqLlxcZCspXFxzKixcXHMqKC0/XFxkK3wtP1xcZCouXFxkKyklXFxzKixcXHMqKC0/XFxkK3wtP1xcZCouXFxkKyklXFxzKlxcKS9pO1xuY29uc3QgaHNsYUV4ZWNSZ3ggPSAvaHNsYVxcKFxccyooLT9cXGQrfC0/XFxkKi5cXGQrKVxccyosXFxzKigtP1xcZCt8LT9cXGQqLlxcZCspJVxccyosXFxzKigtP1xcZCt8LT9cXGQqLlxcZCspJVxccyosXFxzKigtP1xcZCt8LT9cXGQqLlxcZCspXFxzKlxcKS9pO1xuLy8gZXhwb3J0IGNvbnN0IGRpZ2l0V2l0aEV4cG9uZW50Umd4ID0gL1stK10/XFxkKlxcLj9cXGQrKD86W2VFXVstK10/XFxkKyk/L2c7XG5jb25zdCBkaWdpdFdpdGhFeHBvbmVudFJneCA9IC9bLStdP1xcZCpcXC4/XFxkKyg/OmVbLStdP1xcZCk/L2dpO1xuLy8gZXhwb3J0IGNvbnN0IHVuaXRzRXhlY1JneCA9IC9eKFstK10/XFxkKlxcLj9cXGQrKD86W2VFXVstK10/XFxkKyk/KSsoW2Etel0rfCUpJC9pO1xuY29uc3QgdW5pdHNFeGVjUmd4ID0gL14oWy0rXT9cXGQqXFwuP1xcZCsoPzplWy0rXT9cXGQrKT8pKFthLXpdK3wlKSQvaTtcbmNvbnN0IGxvd2VyQ2FzZVJneCA9IC8oW2Etel0pKFtBLVpdKS9nO1xuY29uc3QgdHJhbnNmb3Jtc0V4ZWNSZ3ggPSAvKFxcdyspKFxcKFteKV0rXFwpKykvZzsgLy8gTWF0Y2ggaW5saW5lIHRyYW5zZm9ybXMgd2l0aCBjYWNsKCkgdmFsdWVzLCByZXR1cm5zIHRoZSB2YWx1ZSB3cmFwcGVkIGluICgpXG5jb25zdCByZWxhdGl2ZVZhbHVlc0V4ZWNSZ3ggPSAvKFxcKj18XFwrPXwtPSkvO1xuXG5cblxuXG4vKiogQHR5cGUge0RlZmF1bHRzUGFyYW1zfSAqL1xuY29uc3QgZGVmYXVsdHMgPSB7XG4gIGlkOiBudWxsLFxuICBrZXlmcmFtZXM6IG51bGwsXG4gIHBsYXliYWNrRWFzZTogbnVsbCxcbiAgcGxheWJhY2tSYXRlOiAxLFxuICBmcmFtZVJhdGU6IG1heEZwcyxcbiAgbG9vcDogMCxcbiAgcmV2ZXJzZWQ6IGZhbHNlLFxuICBhbHRlcm5hdGU6IGZhbHNlLFxuICBhdXRvcGxheTogdHJ1ZSxcbiAgZHVyYXRpb246IEssXG4gIGRlbGF5OiAwLFxuICBsb29wRGVsYXk6IDAsXG4gIGVhc2U6ICdvdXQoMiknLFxuICBjb21wb3NpdGlvbjogY29tcG9zaXRpb25UeXBlcy5yZXBsYWNlLFxuICBtb2RpZmllcjogdiA9PiB2LFxuICBvbkJlZ2luOiBub29wLFxuICBvbkJlZm9yZVVwZGF0ZTogbm9vcCxcbiAgb25VcGRhdGU6IG5vb3AsXG4gIG9uTG9vcDogbm9vcCxcbiAgb25QYXVzZTogbm9vcCxcbiAgb25Db21wbGV0ZTogbm9vcCxcbiAgb25SZW5kZXI6IG5vb3AsXG59O1xuXG5jb25zdCBnbG9iYWxzID0ge1xuICAvKiogQHR5cGUge0RlZmF1bHRzUGFyYW1zfSAqL1xuICBkZWZhdWx0cyxcbiAgLyoqIEB0eXBlIHtEb2N1bWVudHxET01UYXJnZXR9ICovXG4gIHJvb3Q6IGRvYyxcbiAgLyoqIEB0eXBlIHtTY29wZX0gKi9cbiAgc2NvcGU6IG51bGwsXG4gIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICBwcmVjaXNpb246IDQsXG4gIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICB0aW1lU2NhbGU6IDEsXG4gIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICB0aWNrVGhyZXNob2xkOiAyMDAsXG59O1xuXG5jb25zdCBnbG9iYWxWZXJzaW9ucyA9IHsgdmVyc2lvbjogJzQuMC4yJywgZW5naW5lOiBudWxsIH07XG5cbmlmIChpc0Jyb3dzZXIpIHtcbiAgaWYgKCF3aW4uQW5pbWVKUykgd2luLkFuaW1lSlMgPSBbXTtcbiAgd2luLkFuaW1lSlMucHVzaChnbG9iYWxWZXJzaW9ucyk7XG59XG5cbi8vIFN0cmluZ3NcblxuLyoqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5jb25zdCB0b0xvd2VyQ2FzZSA9IHN0ciA9PiBzdHIucmVwbGFjZShsb3dlckNhc2VSZ3gsICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG5cbi8qKlxuICogUHJpb3JpdGl6ZSB0aGlzIG1ldGhvZCBpbnN0ZWFkIG9mIHJlZ2V4IHdoZW4gcG9zc2libGVcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN1YlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3Qgc3RyaW5nU3RhcnRzV2l0aCA9IChzdHIsIHN1YikgPT4gc3RyLmluZGV4T2Yoc3ViKSA9PT0gMDtcblxuLy8gVGltZVxuLy8gTm90ZTogRGF0ZS5ub3cgaXMgdXNlZCBpbnN0ZWFkIG9mIHBlcmZvcm1hbmNlLm5vdyBzaW5jZSBpdCBpcyBwcmVjaXNlIGVub3VnaCBmb3IgdGltaW5ncyBjYWxjdWxhdGlvbnMsIHBlcmZvcm1zIHNsaWdodGx5IGZhc3RlciBhbmQgd29ya3MgaW4gTm9kZS5qcyBlbnZpcm9uZW1lbnQuXG5jb25zdCBub3cgPSBEYXRlLm5vdztcblxuLy8gVHlwZXMgY2hlY2tlcnNcblxuY29uc3QgaXNBcnIgPSBBcnJheS5pc0FycmF5O1xuLyoqQHBhcmFtIHthbnl9IGEgQHJldHVybiB7YSBpcyBSZWNvcmQ8U3RyaW5nLCBhbnk+fSAqL1xuY29uc3QgaXNPYmogPSBhID0+IGEgJiYgYS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0O1xuLyoqQHBhcmFtIHthbnl9IGEgQHJldHVybiB7YSBpcyBOdW1iZXJ9ICovXG5jb25zdCBpc051bSA9IGEgPT4gdHlwZW9mIGEgPT09ICdudW1iZXInICYmICFpc05hTihhKTtcbi8qKkBwYXJhbSB7YW55fSBhIEByZXR1cm4ge2EgaXMgU3RyaW5nfSAqL1xuY29uc3QgaXNTdHIgPSBhID0+IHR5cGVvZiBhID09PSAnc3RyaW5nJztcbi8qKkBwYXJhbSB7YW55fSBhIEByZXR1cm4ge2EgaXMgRnVuY3Rpb259ICovXG5jb25zdCBpc0ZuYyA9IGEgPT4gdHlwZW9mIGEgPT09ICdmdW5jdGlvbic7XG4vKipAcGFyYW0ge2FueX0gYSBAcmV0dXJuIHthIGlzIHVuZGVmaW5lZH0gKi9cbmNvbnN0IGlzVW5kID0gYSA9PiB0eXBlb2YgYSA9PT0gJ3VuZGVmaW5lZCc7XG4vKipAcGFyYW0ge2FueX0gYSBAcmV0dXJuIHthIGlzIG51bGwgfCB1bmRlZmluZWR9ICovXG5jb25zdCBpc05pbCA9IGEgPT4gaXNVbmQoYSkgfHwgYSA9PT0gbnVsbDtcbi8qKkBwYXJhbSB7YW55fSBhIEByZXR1cm4ge2EgaXMgU1ZHRWxlbWVudH0gKi9cbmNvbnN0IGlzU3ZnID0gYSA9PiBpc0Jyb3dzZXIgJiYgYSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQ7XG4vKipAcGFyYW0ge2FueX0gYSBAcmV0dXJuIHtCb29sZWFufSAqL1xuY29uc3QgaXNIZXggPSBhID0+IGhleFRlc3RSZ3gudGVzdChhKTtcbi8qKkBwYXJhbSB7YW55fSBhIEByZXR1cm4ge0Jvb2xlYW59ICovXG5jb25zdCBpc1JnYiA9IGEgPT4gc3RyaW5nU3RhcnRzV2l0aChhLCAncmdiJyk7XG4vKipAcGFyYW0ge2FueX0gYSBAcmV0dXJuIHtCb29sZWFufSAqL1xuY29uc3QgaXNIc2wgPSBhID0+IHN0cmluZ1N0YXJ0c1dpdGgoYSwgJ2hzbCcpO1xuLyoqQHBhcmFtIHthbnl9IGEgQHJldHVybiB7Qm9vbGVhbn0gKi9cbmNvbnN0IGlzQ29sID0gYSA9PiBpc0hleChhKSB8fCBpc1JnYihhKSB8fCBpc0hzbChhKTtcbi8qKkBwYXJhbSB7YW55fSBhIEByZXR1cm4ge0Jvb2xlYW59ICovXG5jb25zdCBpc0tleSA9IGEgPT4gIWdsb2JhbHMuZGVmYXVsdHMuaGFzT3duUHJvcGVydHkoYSk7XG5cbi8vIE51bWJlclxuXG4vKipcbiAqIEBwYXJhbSAge051bWJlcnxTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5jb25zdCBwYXJzZU51bWJlciA9IHN0ciA9PiBpc1N0cihzdHIpID9cbiAgcGFyc2VGbG9hdCgvKiogQHR5cGUge1N0cmluZ30gKi8oc3RyKSkgOlxuICAvKiogQHR5cGUge051bWJlcn0gKi8oc3RyKTtcblxuLy8gTWF0aFxuXG5jb25zdCBwb3cgPSBNYXRoLnBvdztcbmNvbnN0IHNxcnQgPSBNYXRoLnNxcnQ7XG5jb25zdCBzaW4gPSBNYXRoLnNpbjtcbmNvbnN0IGNvcyA9IE1hdGguY29zO1xuY29uc3QgYWJzID0gTWF0aC5hYnM7XG5jb25zdCBleHAgPSBNYXRoLmV4cDtcbmNvbnN0IGNlaWwgPSBNYXRoLmNlaWw7XG5jb25zdCBmbG9vciA9IE1hdGguZmxvb3I7XG5jb25zdCBhc2luID0gTWF0aC5hc2luO1xuY29uc3QgbWF4ID0gTWF0aC5tYXg7XG5jb25zdCBhdGFuMiA9IE1hdGguYXRhbjI7XG5jb25zdCBQSSA9IE1hdGguUEk7XG5jb25zdCBfcm91bmQgPSBNYXRoLnJvdW5kO1xuXG4vKipcbiAqIEBwYXJhbSAge051bWJlcn0gdlxuICogQHBhcmFtICB7TnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge051bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmNvbnN0IGNsYW1wID0gKHYsIG1pbiwgbWF4KSA9PiB2IDwgbWluID8gbWluIDogdiA+IG1heCA/IG1heCA6IHY7XG5cbmNvbnN0IHBvd0NhY2hlID0ge307XG5cbi8qKlxuICogQHBhcmFtICB7TnVtYmVyfSB2XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGRlY2ltYWxMZW5ndGhcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuY29uc3Qgcm91bmQgPSAodiwgZGVjaW1hbExlbmd0aCkgPT4ge1xuICBpZiAoZGVjaW1hbExlbmd0aCA8IDApIHJldHVybiB2O1xuICBpZiAoIWRlY2ltYWxMZW5ndGgpIHJldHVybiBfcm91bmQodik7XG4gIGxldCBwID0gcG93Q2FjaGVbZGVjaW1hbExlbmd0aF07XG4gIGlmICghcCkgcCA9IHBvd0NhY2hlW2RlY2ltYWxMZW5ndGhdID0gMTAgKiogZGVjaW1hbExlbmd0aDtcbiAgcmV0dXJuIF9yb3VuZCh2ICogcCkgLyBwO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZcbiAqIEBwYXJhbSAge051bWJlcnxBcnJheTxOdW1iZXI+fSBpbmNyZW1lbnRcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuY29uc3Qgc25hcCA9ICh2LCBpbmNyZW1lbnQpID0+IGlzQXJyKGluY3JlbWVudCkgPyBpbmNyZW1lbnQucmVkdWNlKChjbG9zZXN0LCBjdikgPT4gKGFicyhjdiAtIHYpIDwgYWJzKGNsb3Nlc3QgLSB2KSA/IGN2IDogY2xvc2VzdCkpIDogaW5jcmVtZW50ID8gX3JvdW5kKHYgLyBpbmNyZW1lbnQpICogaW5jcmVtZW50IDogdjtcblxuLyoqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHN0YXJ0XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGVuZFxuICogQHBhcmFtICB7TnVtYmVyfSBwcm9ncmVzc1xuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5jb25zdCBpbnRlcnBvbGF0ZSA9IChzdGFydCwgZW5kLCBwcm9ncmVzcykgPT4gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogcHJvZ3Jlc3M7XG5cbi8qKlxuICogQHBhcmFtICB7TnVtYmVyfSB2XG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmNvbnN0IGNsYW1wSW5maW5pdHkgPSB2ID0+IHYgPT09IEluZmluaXR5ID8gbWF4VmFsdWUgOiB2ID09PSAtSW5maW5pdHkgPyAtMWUxMiA6IHY7XG5cbi8qKlxuICogQHBhcmFtICB7TnVtYmVyfSB2XG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmNvbnN0IG5vcm1hbGl6ZVRpbWUgPSB2ID0+IHYgPD0gbWluVmFsdWUgPyBtaW5WYWx1ZSA6IGNsYW1wSW5maW5pdHkocm91bmQodiwgMTEpKTtcblxuLy8gQXJyYXlzXG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7VFtdfSBhXG4gKiBAcmV0dXJuIHtUW119XG4gKi9cbmNvbnN0IGNsb25lQXJyYXkgPSBhID0+IGlzQXJyKGEpID8gWyAuLi5hIF0gOiBhO1xuXG4vLyBPYmplY3RzXG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEB0ZW1wbGF0ZSBVXG4gKiBAcGFyYW0ge1R9IG8xXG4gKiBAcGFyYW0ge1V9IG8yXG4gKiBAcmV0dXJuIHtUICYgVX1cbiAqL1xuY29uc3QgbWVyZ2VPYmplY3RzID0gKG8xLCBvMikgPT4ge1xuICBjb25zdCBtZXJnZWQgPSAvKiogQHR5cGUge1QgJiBVfSAqLyh7IC4uLm8xIH0pO1xuICBmb3IgKGxldCBwIGluIG8yKSB7XG4gICAgY29uc3QgbzFwID0gLyoqIEB0eXBlIHtUICYgVX0gKi8obzEpW3BdO1xuICAgIG1lcmdlZFtwXSA9IGlzVW5kKG8xcCkgPyAvKiogQHR5cGUge1QgJiBVfSAqLyhvMilbcF0gOiBvMXA7XG4gIH0gIHJldHVybiBtZXJnZWQ7XG59O1xuXG4vLyBMaW5rZWQgbGlzdHNcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSBbcmV2ZXJzZV1cbiAqIEBwYXJhbSB7U3RyaW5nfSBbcHJldlByb3BdXG4gKiBAcGFyYW0ge1N0cmluZ30gW25leHRQcm9wXVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuY29uc3QgZm9yRWFjaENoaWxkcmVuID0gKHBhcmVudCwgY2FsbGJhY2ssIHJldmVyc2UsIHByZXZQcm9wID0gJ19wcmV2JywgbmV4dFByb3AgPSAnX25leHQnKSA9PiB7XG4gIGxldCBuZXh0ID0gcGFyZW50Ll9oZWFkO1xuICBsZXQgYWRqdXN0ZWROZXh0UHJvcCA9IG5leHRQcm9wO1xuICBpZiAocmV2ZXJzZSkge1xuICAgIG5leHQgPSBwYXJlbnQuX3RhaWw7XG4gICAgYWRqdXN0ZWROZXh0UHJvcCA9IHByZXZQcm9wO1xuICB9XG4gIHdoaWxlIChuZXh0KSB7XG4gICAgY29uc3QgY3VycmVudE5leHQgPSBuZXh0W2FkanVzdGVkTmV4dFByb3BdO1xuICAgIGNhbGxiYWNrKG5leHQpO1xuICAgIG5leHQgPSBjdXJyZW50TmV4dDtcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHBhcmVudFxuICogQHBhcmFtICB7T2JqZWN0fSBjaGlsZFxuICogQHBhcmFtICB7U3RyaW5nfSBbcHJldlByb3BdXG4gKiBAcGFyYW0gIHtTdHJpbmd9IFtuZXh0UHJvcF1cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmNvbnN0IHJlbW92ZUNoaWxkID0gKHBhcmVudCwgY2hpbGQsIHByZXZQcm9wID0gJ19wcmV2JywgbmV4dFByb3AgPSAnX25leHQnKSA9PiB7XG4gIGNvbnN0IHByZXYgPSBjaGlsZFtwcmV2UHJvcF07XG4gIGNvbnN0IG5leHQgPSBjaGlsZFtuZXh0UHJvcF07XG4gIHByZXYgPyBwcmV2W25leHRQcm9wXSA9IG5leHQgOiBwYXJlbnQuX2hlYWQgPSBuZXh0O1xuICBuZXh0ID8gbmV4dFtwcmV2UHJvcF0gPSBwcmV2IDogcGFyZW50Ll90YWlsID0gcHJldjtcbiAgY2hpbGRbcHJldlByb3BdID0gbnVsbDtcbiAgY2hpbGRbbmV4dFByb3BdID0gbnVsbDtcbn07XG5cbi8qKlxuICogQHBhcmFtICB7T2JqZWN0fSBwYXJlbnRcbiAqIEBwYXJhbSAge09iamVjdH0gY2hpbGRcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBbc29ydE1ldGhvZF1cbiAqIEBwYXJhbSAge1N0cmluZ30gcHJldlByb3BcbiAqIEBwYXJhbSAge1N0cmluZ30gbmV4dFByb3BcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmNvbnN0IGFkZENoaWxkID0gKHBhcmVudCwgY2hpbGQsIHNvcnRNZXRob2QsIHByZXZQcm9wID0gJ19wcmV2JywgbmV4dFByb3AgPSAnX25leHQnKSA9PiB7XG4gIGxldCBwcmV2ID0gcGFyZW50Ll90YWlsO1xuICB3aGlsZSAocHJldiAmJiBzb3J0TWV0aG9kICYmIHNvcnRNZXRob2QocHJldiwgY2hpbGQpKSBwcmV2ID0gcHJldltwcmV2UHJvcF07XG4gIGNvbnN0IG5leHQgPSBwcmV2ID8gcHJldltuZXh0UHJvcF0gOiBwYXJlbnQuX2hlYWQ7XG4gIHByZXYgPyBwcmV2W25leHRQcm9wXSA9IGNoaWxkIDogcGFyZW50Ll9oZWFkID0gY2hpbGQ7XG4gIG5leHQgPyBuZXh0W3ByZXZQcm9wXSA9IGNoaWxkIDogcGFyZW50Ll90YWlsID0gY2hpbGQ7XG4gIGNoaWxkW3ByZXZQcm9wXSA9IHByZXY7XG4gIGNoaWxkW25leHRQcm9wXSA9IG5leHQ7XG59O1xuXG4vKlxuICogQmFzZSBjbGFzcyB0byBjb250cm9sIGZyYW1lcmF0ZSBhbmQgcGxheWJhY2sgcmF0ZS5cbiAqIEluaGVyaXRlZCBieSBFbmdpbmUsIFRpbWVyLCBBbmltYXRpb24gYW5kIFRpbWVsaW5lLlxuICovXG5jbGFzcyBDbG9jayB7XG5cbiAgLyoqIEBwYXJhbSB7TnVtYmVyfSBbaW5pdFRpbWVdICovXG4gIGNvbnN0cnVjdG9yKGluaXRUaW1lID0gMCkge1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuZGVsdGFUaW1lID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLl9jdXJyZW50VGltZSA9IGluaXRUaW1lO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuX2VsYXBzZWRUaW1lID0gaW5pdFRpbWU7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5fc3RhcnRUaW1lID0gaW5pdFRpbWU7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5fbGFzdFRpbWUgPSBpbml0VGltZTtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLl9zY2hlZHVsZWRUaW1lID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLl9mcmFtZUR1cmF0aW9uID0gcm91bmQoSyAvIG1heEZwcywgMCk7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5fZnBzID0gbWF4RnBzO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuX3NwZWVkID0gMTtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy5faGFzQ2hpbGRyZW4gPSBmYWxzZTtcbiAgICAvKiogQHR5cGUge1RpY2thYmxlfFR3ZWVufSAqL1xuICAgIHRoaXMuX2hlYWQgPSBudWxsO1xuICAgIC8qKiBAdHlwZSB7VGlja2FibGV8VHdlZW59ICovXG4gICAgdGhpcy5fdGFpbCA9IG51bGw7XG4gIH1cblxuICBnZXQgZnBzKCkge1xuICAgIHJldHVybiB0aGlzLl9mcHM7XG4gIH1cblxuICBzZXQgZnBzKGZyYW1lUmF0ZSkge1xuICAgIGNvbnN0IHByZXZpb3VzRnJhbWVEdXJhdGlvbiA9IHRoaXMuX2ZyYW1lRHVyYXRpb247XG4gICAgY29uc3QgZnIgPSArZnJhbWVSYXRlO1xuICAgIGNvbnN0IGZwcyA9IGZyIDwgbWluVmFsdWUgPyBtaW5WYWx1ZSA6IGZyO1xuICAgIGNvbnN0IGZyYW1lRHVyYXRpb24gPSByb3VuZChLIC8gZnBzLCAwKTtcbiAgICB0aGlzLl9mcHMgPSBmcHM7XG4gICAgdGhpcy5fZnJhbWVEdXJhdGlvbiA9IGZyYW1lRHVyYXRpb247XG4gICAgdGhpcy5fc2NoZWR1bGVkVGltZSArPSBmcmFtZUR1cmF0aW9uIC0gcHJldmlvdXNGcmFtZUR1cmF0aW9uO1xuICB9XG5cbiAgZ2V0IHNwZWVkKCkge1xuICAgIHJldHVybiB0aGlzLl9zcGVlZDtcbiAgfVxuXG4gIHNldCBzcGVlZChwbGF5YmFja1JhdGUpIHtcbiAgICBjb25zdCBwYnIgPSArcGxheWJhY2tSYXRlO1xuICAgIHRoaXMuX3NwZWVkID0gcGJyIDwgbWluVmFsdWUgPyBtaW5WYWx1ZSA6IHBicjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRpbWVcbiAgICogQHJldHVybiB7dGlja01vZGVzfVxuICAgKi9cbiAgcmVxdWVzdFRpY2sodGltZSkge1xuICAgIGNvbnN0IHNjaGVkdWxlZFRpbWUgPSB0aGlzLl9zY2hlZHVsZWRUaW1lO1xuICAgIGNvbnN0IGVsYXBzZWRUaW1lID0gdGhpcy5fZWxhcHNlZFRpbWU7XG4gICAgdGhpcy5fZWxhcHNlZFRpbWUgKz0gKHRpbWUgLSBlbGFwc2VkVGltZSk7XG4gICAgLy8gSWYgdGhlIGVsYXBzZWQgdGltZSBpcyBsb3dlciB0aGFuIHRoZSBzY2hlZHVsZWQgdGltZVxuICAgIC8vIHRoaXMgbWVhbnMgbm90IGVub3VnaCB0aW1lIGhhcyBwYXNzZWQgdG8gaGl0IG9uZSBmcmFtZUR1cmF0aW9uXG4gICAgLy8gc28gc2tpcCB0aGF0IGZyYW1lXG4gICAgaWYgKGVsYXBzZWRUaW1lIDwgc2NoZWR1bGVkVGltZSkgcmV0dXJuIHRpY2tNb2Rlcy5OT05FO1xuICAgIGNvbnN0IGZyYW1lRHVyYXRpb24gPSB0aGlzLl9mcmFtZUR1cmF0aW9uO1xuICAgIGNvbnN0IGZyYW1lRGVsdGEgPSBlbGFwc2VkVGltZSAtIHNjaGVkdWxlZFRpbWU7XG4gICAgLy8gRW5zdXJlcyB0aGF0IF9zY2hlZHVsZWRUaW1lIHByb2dyZXNzZXMgaW4gc3RlcHMgb2YgYXQgbGVhc3QgMSBmcmFtZUR1cmF0aW9uLlxuICAgIC8vIFNraXBzIGFoZWFkIGlmIHRoZSBhY3R1YWwgZWxhcHNlZCB0aW1lIGlzIGhpZ2hlci5cbiAgICB0aGlzLl9zY2hlZHVsZWRUaW1lICs9IGZyYW1lRGVsdGEgPCBmcmFtZUR1cmF0aW9uID8gZnJhbWVEdXJhdGlvbiA6IGZyYW1lRGVsdGE7XG4gICAgcmV0dXJuIHRpY2tNb2Rlcy5BVVRPO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge051bWJlcn0gdGltZVxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAqL1xuICBjb21wdXRlRGVsdGFUaW1lKHRpbWUpIHtcbiAgICBjb25zdCBkZWx0YSA9IHRpbWUgLSB0aGlzLl9sYXN0VGltZTtcbiAgICB0aGlzLmRlbHRhVGltZSA9IGRlbHRhO1xuICAgIHRoaXMuX2xhc3RUaW1lID0gdGltZTtcbiAgICByZXR1cm4gZGVsdGE7XG4gIH1cblxufVxuXG5cblxuXG4vKipcbiAqIEBwYXJhbSAge1RpY2thYmxlfSB0aWNrYWJsZVxuICogQHBhcmFtICB7TnVtYmVyfSB0aW1lXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG11dGVDYWxsYmFja3NcbiAqIEBwYXJhbSAge051bWJlcn0gaW50ZXJuYWxSZW5kZXJcbiAqIEBwYXJhbSAge3RpY2tNb2Rlc30gdGlja01vZGVcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuY29uc3QgcmVuZGVyID0gKHRpY2thYmxlLCB0aW1lLCBtdXRlQ2FsbGJhY2tzLCBpbnRlcm5hbFJlbmRlciwgdGlja01vZGUpID0+IHtcblxuICBjb25zdCBwYXJlbnQgPSB0aWNrYWJsZS5wYXJlbnQ7XG4gIGNvbnN0IGR1cmF0aW9uID0gdGlja2FibGUuZHVyYXRpb247XG4gIGNvbnN0IGNvbXBsZXRlZCA9IHRpY2thYmxlLmNvbXBsZXRlZDtcbiAgY29uc3QgaXRlcmF0aW9uRHVyYXRpb24gPSB0aWNrYWJsZS5pdGVyYXRpb25EdXJhdGlvbjtcbiAgY29uc3QgaXRlcmF0aW9uQ291bnQgPSB0aWNrYWJsZS5pdGVyYXRpb25Db3VudDtcbiAgY29uc3QgX2N1cnJlbnRJdGVyYXRpb24gPSB0aWNrYWJsZS5fY3VycmVudEl0ZXJhdGlvbjtcbiAgY29uc3QgX2xvb3BEZWxheSA9IHRpY2thYmxlLl9sb29wRGVsYXk7XG4gIGNvbnN0IF9yZXZlcnNlZCA9IHRpY2thYmxlLl9yZXZlcnNlZDtcbiAgY29uc3QgX2FsdGVybmF0ZSA9IHRpY2thYmxlLl9hbHRlcm5hdGU7XG4gIGNvbnN0IF9oYXNDaGlsZHJlbiA9IHRpY2thYmxlLl9oYXNDaGlsZHJlbjtcbiAgY29uc3QgdGlja2FibGVEZWxheSA9IHRpY2thYmxlLl9kZWxheTtcbiAgY29uc3QgdGlja2FibGVQcmV2QWJzb2x1dGVUaW1lID0gdGlja2FibGUuX2N1cnJlbnRUaW1lOyAvLyBUT0RPOiByZW5hbWUgLl9jdXJyZW50VGltZSB0byAuX2Fic29sdXRlQ3VycmVudFRpbWVcblxuICBjb25zdCB0aWNrYWJsZUVuZFRpbWUgPSB0aWNrYWJsZURlbGF5ICsgaXRlcmF0aW9uRHVyYXRpb247XG4gIGNvbnN0IHRpY2thYmxlQWJzb2x1dGVUaW1lID0gdGltZSAtIHRpY2thYmxlRGVsYXk7XG4gIGNvbnN0IHRpY2thYmxlUHJldlRpbWUgPSBjbGFtcCh0aWNrYWJsZVByZXZBYnNvbHV0ZVRpbWUsIC10aWNrYWJsZURlbGF5LCBkdXJhdGlvbik7XG4gIGNvbnN0IHRpY2thYmxlQ3VycmVudFRpbWUgPSBjbGFtcCh0aWNrYWJsZUFic29sdXRlVGltZSwgLXRpY2thYmxlRGVsYXksIGR1cmF0aW9uKTtcbiAgY29uc3QgZGVsdGFUaW1lID0gdGlja2FibGVBYnNvbHV0ZVRpbWUgLSB0aWNrYWJsZVByZXZBYnNvbHV0ZVRpbWU7XG4gIGNvbnN0IGlzQ3VycmVudFRpbWVBYm92ZVplcm8gPSB0aWNrYWJsZUN1cnJlbnRUaW1lID4gMDtcbiAgY29uc3QgaXNDdXJyZW50VGltZUVxdWFsT3JBYm92ZUR1cmF0aW9uID0gdGlja2FibGVDdXJyZW50VGltZSA+PSBkdXJhdGlvbjtcbiAgY29uc3QgaXNTZXR0ZXIgPSBkdXJhdGlvbiA8PSBtaW5WYWx1ZTtcbiAgY29uc3QgZm9yY2VkVGljayA9IHRpY2tNb2RlID09PSB0aWNrTW9kZXMuRk9SQ0U7XG5cbiAgbGV0IGlzT2RkID0gMDtcbiAgbGV0IGl0ZXJhdGlvbkVsYXBzZWRUaW1lID0gdGlja2FibGVBYnNvbHV0ZVRpbWU7XG4gIC8vIFJlbmRlciBjaGVja3NcbiAgLy8gVXNlZCB0byBhbHNvIGNoZWNrIGlmIHRoZSBjaGlsZHJlbiBoYXZlIHJlbmRlcmVkIGluIG9yZGVyIHRvIHRyaWdnZXIgdGhlIG9uUmVuZGVyIGNhbGxiYWNrIG9uIHRoZSBwYXJlbnQgdGltZXJcbiAgbGV0IGhhc1JlbmRlcmVkID0gMDtcblxuICAvLyBFeGVjdXRlIHRoZSBcImV4cGVuc2l2ZVwiIGl0ZXJhdGlvbnMgY2FsY3VsYXRpb25zIG9ubHkgd2hlbiBuZWNlc3NhcnlcbiAgaWYgKGl0ZXJhdGlvbkNvdW50ID4gMSkge1xuICAgIC8vIGJpdHdpc2UgTk9UIG9wZXJhdG9yIHNlZW1zIHRvIGJlIGdlbmVyYWxseSBmYXN0ZXIgdGhhbiBNYXRoLmZsb29yKCkgYWNyb3NzIGJyb3dzZXJzXG4gICAgY29uc3QgY3VycmVudEl0ZXJhdGlvbiA9IH5+KHRpY2thYmxlQ3VycmVudFRpbWUgLyAoaXRlcmF0aW9uRHVyYXRpb24gKyAoaXNDdXJyZW50VGltZUVxdWFsT3JBYm92ZUR1cmF0aW9uID8gMCA6IF9sb29wRGVsYXkpKSk7XG4gICAgdGlja2FibGUuX2N1cnJlbnRJdGVyYXRpb24gPSBjbGFtcChjdXJyZW50SXRlcmF0aW9uLCAwLCBpdGVyYXRpb25Db3VudCk7XG4gICAgLy8gUHJldmVudCB0aGUgaXRlcmF0aW9uIGNvdW50IHRvIGdvIGFib3ZlIHRoZSBtYXggaXRlcmF0aW9ucyB3aGVuIHJlYWNoaW5nIHRoZSBlbmQgb2YgdGhlIGFuaW1hdGlvblxuICAgIGlmIChpc0N1cnJlbnRUaW1lRXF1YWxPckFib3ZlRHVyYXRpb24pIHRpY2thYmxlLl9jdXJyZW50SXRlcmF0aW9uLS07XG4gICAgaXNPZGQgPSB0aWNrYWJsZS5fY3VycmVudEl0ZXJhdGlvbiAlIDI7XG4gICAgaXRlcmF0aW9uRWxhcHNlZFRpbWUgPSB0aWNrYWJsZUN1cnJlbnRUaW1lICUgKGl0ZXJhdGlvbkR1cmF0aW9uICsgX2xvb3BEZWxheSkgfHwgMDtcbiAgfVxuXG4gIC8vIENoZWNrcyBpZiBleGFjdGx5IG9uZSBvZiBfcmV2ZXJzZWQgYW5kIChfYWx0ZXJuYXRlICYmIGlzT2RkKSBpcyB0cnVlXG4gIGNvbnN0IGlzUmV2ZXJzZWQgPSBfcmV2ZXJzZWQgXiAoX2FsdGVybmF0ZSAmJiBpc09kZCk7XG4gIGNvbnN0IF9lYXNlID0gLyoqIEB0eXBlIHtSZW5kZXJhYmxlfSAqLyh0aWNrYWJsZSkuX2Vhc2U7XG4gIGxldCBpdGVyYXRpb25UaW1lID0gaXNDdXJyZW50VGltZUVxdWFsT3JBYm92ZUR1cmF0aW9uID8gaXNSZXZlcnNlZCA/IDAgOiBkdXJhdGlvbiA6IGlzUmV2ZXJzZWQgPyBpdGVyYXRpb25EdXJhdGlvbiAtIGl0ZXJhdGlvbkVsYXBzZWRUaW1lIDogaXRlcmF0aW9uRWxhcHNlZFRpbWU7XG4gIGlmIChfZWFzZSkgaXRlcmF0aW9uVGltZSA9IGl0ZXJhdGlvbkR1cmF0aW9uICogX2Vhc2UoaXRlcmF0aW9uVGltZSAvIGl0ZXJhdGlvbkR1cmF0aW9uKSB8fCAwO1xuICBjb25zdCBpc1J1bm5pbmdCYWNrd2FyZHMgPSAocGFyZW50ID8gcGFyZW50LmJhY2t3YXJkcyA6IHRpY2thYmxlQWJzb2x1dGVUaW1lIDwgdGlja2FibGVQcmV2QWJzb2x1dGVUaW1lKSA/ICFpc1JldmVyc2VkIDogISFpc1JldmVyc2VkO1xuXG4gIHRpY2thYmxlLl9jdXJyZW50VGltZSA9IHRpY2thYmxlQWJzb2x1dGVUaW1lO1xuICB0aWNrYWJsZS5faXRlcmF0aW9uVGltZSA9IGl0ZXJhdGlvblRpbWU7XG4gIHRpY2thYmxlLmJhY2t3YXJkcyA9IGlzUnVubmluZ0JhY2t3YXJkcztcblxuICBpZiAoaXNDdXJyZW50VGltZUFib3ZlWmVybyAmJiAhdGlja2FibGUuYmVnYW4pIHtcbiAgICB0aWNrYWJsZS5iZWdhbiA9IHRydWU7XG4gICAgaWYgKCFtdXRlQ2FsbGJhY2tzICYmICEocGFyZW50ICYmIChpc1J1bm5pbmdCYWNrd2FyZHMgfHwgIXBhcmVudC5iZWdhbikpKSB7XG4gICAgICB0aWNrYWJsZS5vbkJlZ2luKC8qKiBAdHlwZSB7Q2FsbGJhY2tBcmd1bWVudH0gKi8odGlja2FibGUpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodGlja2FibGVBYnNvbHV0ZVRpbWUgPD0gMCkge1xuICAgIHRpY2thYmxlLmJlZ2FuID0gZmFsc2U7XG4gIH1cblxuICAvLyBPbmx5IHRyaWdnZXJzIG9uTG9vcCBmb3IgdGlja2FibGUgd2l0aG91dCBjaGlsZHJlbiwgb3RoZXJ3aXNlIGNhbGwgdGhlIHRoZSBvbkxvb3AgY2FsbGJhY2sgaW4gdGhlIHRpY2sgZnVuY3Rpb25cbiAgLy8gTWFrZSBzdXJlIHRvIHRyaWdnZXIgdGhlIG9uTG9vcCBiZWZvcmUgcmVuZGVyaW5nIHRvIGFsbG93IC5yZWZyZXNoKCkgdG8gcGlja3VwIHRoZSBjdXJyZW50IHZhbHVlc1xuICBpZiAoIW11dGVDYWxsYmFja3MgJiYgIV9oYXNDaGlsZHJlbiAmJiBpc0N1cnJlbnRUaW1lQWJvdmVaZXJvICYmIHRpY2thYmxlLl9jdXJyZW50SXRlcmF0aW9uICE9PSBfY3VycmVudEl0ZXJhdGlvbikge1xuICAgIHRpY2thYmxlLm9uTG9vcCgvKiogQHR5cGUge0NhbGxiYWNrQXJndW1lbnR9ICovKHRpY2thYmxlKSk7XG4gIH1cblxuICBpZiAoXG4gICAgZm9yY2VkVGljayB8fFxuICAgIHRpY2tNb2RlID09PSB0aWNrTW9kZXMuQVVUTyAmJiAoXG4gICAgICB0aW1lID49IHRpY2thYmxlRGVsYXkgJiYgdGltZSA8PSB0aWNrYWJsZUVuZFRpbWUgfHwgLy8gTm9ybWFsIHJlbmRlclxuICAgICAgdGltZSA8PSB0aWNrYWJsZURlbGF5ICYmIHRpY2thYmxlUHJldlRpbWUgPiB0aWNrYWJsZURlbGF5IHx8IC8vIFBsYXloZWFkIGlzIGJlZm9yZSB0aGUgYW5pbWF0aW9uIHN0YXJ0IHRpbWUgc28gbWFrZSBzdXJlIHRoZSBhbmltYXRpb24gaXMgYXQgaXRzIGluaXRpYWwgc3RhdGVcbiAgICAgIHRpbWUgPj0gdGlja2FibGVFbmRUaW1lICYmIHRpY2thYmxlUHJldlRpbWUgIT09IGR1cmF0aW9uIC8vIFBsYXloZWFkIGlzIGFmdGVyIHRoZSBhbmltYXRpb24gZW5kIHRpbWUgc28gbWFrZSBzdXJlIHRoZSBhbmltYXRpb24gaXMgYXQgaXRzIGVuZCBzdGF0ZVxuICAgICkgfHxcbiAgICBpdGVyYXRpb25UaW1lID49IHRpY2thYmxlRW5kVGltZSAmJiB0aWNrYWJsZVByZXZUaW1lICE9PSBkdXJhdGlvbiB8fFxuICAgIGl0ZXJhdGlvblRpbWUgPD0gdGlja2FibGVEZWxheSAmJiB0aWNrYWJsZVByZXZUaW1lID4gMCB8fFxuICAgIHRpbWUgPD0gdGlja2FibGVQcmV2VGltZSAmJiB0aWNrYWJsZVByZXZUaW1lID09PSBkdXJhdGlvbiAmJiBjb21wbGV0ZWQgfHwgLy8gRm9yY2UgYSByZW5kZXIgaWYgYSBzZWVrIG9jY3VycyBvbiBhbiBjb21wbGV0ZWQgYW5pbWF0aW9uXG4gICAgaXNDdXJyZW50VGltZUVxdWFsT3JBYm92ZUR1cmF0aW9uICYmICFjb21wbGV0ZWQgJiYgaXNTZXR0ZXIgLy8gVGhpcyBwcmV2ZW50cyAwIGR1cmF0aW9uIHRpY2thYmxlcyB0byBiZSBza2lwcGVkXG4gICkge1xuXG4gICAgaWYgKGlzQ3VycmVudFRpbWVBYm92ZVplcm8pIHtcbiAgICAgIC8vIFRyaWdnZXIgb25VcGRhdGUgY2FsbGJhY2sgYmVmb3JlIHJlbmRlcmluZ1xuICAgICAgdGlja2FibGUuY29tcHV0ZURlbHRhVGltZSh0aWNrYWJsZVByZXZUaW1lKTtcbiAgICAgIGlmICghbXV0ZUNhbGxiYWNrcykgdGlja2FibGUub25CZWZvcmVVcGRhdGUoLyoqIEB0eXBlIHtDYWxsYmFja0FyZ3VtZW50fSAqLyh0aWNrYWJsZSkpO1xuICAgIH1cblxuICAgIC8vIFN0YXJ0IHR3ZWVucyByZW5kZXJpbmdcbiAgICBpZiAoIV9oYXNDaGlsZHJlbikge1xuXG4gICAgICAvLyBUaW1lIGhhcyBqdW1wZWQgbW9yZSB0aGFuIGdsb2JhbHMudGlja1RocmVzaG9sZCBzbyBjb25zaWRlciB0aGlzIHRpY2sgbWFudWFsXG4gICAgICBjb25zdCBmb3JjZWRSZW5kZXIgPSBmb3JjZWRUaWNrIHx8IChpc1J1bm5pbmdCYWNrd2FyZHMgPyBkZWx0YVRpbWUgKiAtMSA6IGRlbHRhVGltZSkgPj0gZ2xvYmFscy50aWNrVGhyZXNob2xkO1xuICAgICAgY29uc3QgYWJzb2x1dGVUaW1lID0gdGlja2FibGUuX29mZnNldCArIChwYXJlbnQgPyBwYXJlbnQuX29mZnNldCA6IDApICsgdGlja2FibGVEZWxheSArIGl0ZXJhdGlvblRpbWU7XG5cbiAgICAgIC8vIE9ubHkgQW5pbWF0aW9uIGNhbiBoYXZlIHR3ZWVucywgVGltZXIgcmV0dXJucyB1bmRlZmluZWRcbiAgICAgIGxldCB0d2VlbiA9IC8qKiBAdHlwZSB7VHdlZW59ICovKC8qKiBAdHlwZSB7SlNBbmltYXRpb259ICovKHRpY2thYmxlKS5faGVhZCk7XG4gICAgICBsZXQgdHdlZW5UYXJnZXQ7XG4gICAgICBsZXQgdHdlZW5TdHlsZTtcbiAgICAgIGxldCB0d2VlblRhcmdldFRyYW5zZm9ybXM7XG4gICAgICBsZXQgdHdlZW5UYXJnZXRUcmFuc2Zvcm1zUHJvcGVydGllcztcbiAgICAgIGxldCB0d2VlblRyYW5zZm9ybXNOZWVkVXBkYXRlID0gMDtcblxuICAgICAgd2hpbGUgKHR3ZWVuKSB7XG5cbiAgICAgICAgY29uc3QgdHdlZW5Db21wb3NpdGlvbiA9IHR3ZWVuLl9jb21wb3NpdGlvbjtcbiAgICAgICAgY29uc3QgdHdlZW5DdXJyZW50VGltZSA9IHR3ZWVuLl9jdXJyZW50VGltZTtcbiAgICAgICAgY29uc3QgdHdlZW5DaGFuZ2VEdXJhdGlvbiA9IHR3ZWVuLl9jaGFuZ2VEdXJhdGlvbjtcbiAgICAgICAgY29uc3QgdHdlZW5BYnNFbmRUaW1lID0gdHdlZW4uX2Fic29sdXRlU3RhcnRUaW1lICsgdHdlZW4uX2NoYW5nZUR1cmF0aW9uO1xuICAgICAgICBjb25zdCB0d2Vlbk5leHRSZXAgPSB0d2Vlbi5fbmV4dFJlcDtcbiAgICAgICAgY29uc3QgdHdlZW5QcmV2UmVwID0gdHdlZW4uX3ByZXZSZXA7XG4gICAgICAgIGNvbnN0IHR3ZWVuSGFzQ29tcG9zaXRpb24gPSB0d2VlbkNvbXBvc2l0aW9uICE9PSBjb21wb3NpdGlvblR5cGVzLm5vbmU7XG5cbiAgICAgICAgaWYgKChmb3JjZWRSZW5kZXIgfHwgKFxuICAgICAgICAgICAgKHR3ZWVuQ3VycmVudFRpbWUgIT09IHR3ZWVuQ2hhbmdlRHVyYXRpb24gfHwgYWJzb2x1dGVUaW1lIDw9IHR3ZWVuQWJzRW5kVGltZSArICh0d2Vlbk5leHRSZXAgPyB0d2Vlbk5leHRSZXAuX2RlbGF5IDogMCkpICYmXG4gICAgICAgICAgICAodHdlZW5DdXJyZW50VGltZSAhPT0gMCB8fCBhYnNvbHV0ZVRpbWUgPj0gdHdlZW4uX2Fic29sdXRlU3RhcnRUaW1lKVxuICAgICAgICAgICkpICYmICghdHdlZW5IYXNDb21wb3NpdGlvbiB8fCAoXG4gICAgICAgICAgICAhdHdlZW4uX2lzT3ZlcnJpZGRlbiAmJlxuICAgICAgICAgICAgKCF0d2Vlbi5faXNPdmVybGFwcGVkIHx8IGFic29sdXRlVGltZSA8PSB0d2VlbkFic0VuZFRpbWUpICYmXG4gICAgICAgICAgICAoIXR3ZWVuTmV4dFJlcCB8fCAodHdlZW5OZXh0UmVwLl9pc092ZXJyaWRkZW4gfHwgYWJzb2x1dGVUaW1lIDw9IHR3ZWVuTmV4dFJlcC5fYWJzb2x1dGVTdGFydFRpbWUpKSAmJlxuICAgICAgICAgICAgKCF0d2VlblByZXZSZXAgfHwgKHR3ZWVuUHJldlJlcC5faXNPdmVycmlkZGVuIHx8IChhYnNvbHV0ZVRpbWUgPj0gKHR3ZWVuUHJldlJlcC5fYWJzb2x1dGVTdGFydFRpbWUgKyB0d2VlblByZXZSZXAuX2NoYW5nZUR1cmF0aW9uKSArIHR3ZWVuLl9kZWxheSkpKVxuICAgICAgICAgICkpXG4gICAgICAgICkge1xuXG4gICAgICAgICAgY29uc3QgdHdlZW5OZXdUaW1lID0gdHdlZW4uX2N1cnJlbnRUaW1lID0gY2xhbXAoaXRlcmF0aW9uVGltZSAtIHR3ZWVuLl9zdGFydFRpbWUsIDAsIHR3ZWVuQ2hhbmdlRHVyYXRpb24pO1xuICAgICAgICAgIGNvbnN0IHR3ZWVuUHJvZ3Jlc3MgPSB0d2Vlbi5fZWFzZSh0d2Vlbk5ld1RpbWUgLyB0d2Vlbi5fdXBkYXRlRHVyYXRpb24pO1xuICAgICAgICAgIGNvbnN0IHR3ZWVuTW9kaWZpZXIgPSB0d2Vlbi5fbW9kaWZpZXI7XG4gICAgICAgICAgY29uc3QgdHdlZW5WYWx1ZVR5cGUgPSB0d2Vlbi5fdmFsdWVUeXBlO1xuICAgICAgICAgIGNvbnN0IHR3ZWVuVHlwZSA9IHR3ZWVuLl90d2VlblR5cGU7XG4gICAgICAgICAgY29uc3QgdHdlZW5Jc09iamVjdCA9IHR3ZWVuVHlwZSA9PT0gdHdlZW5UeXBlcy5PQkpFQ1Q7XG4gICAgICAgICAgY29uc3QgdHdlZW5Jc051bWJlciA9IHR3ZWVuVmFsdWVUeXBlID09PSB2YWx1ZVR5cGVzLk5VTUJFUjtcbiAgICAgICAgICAvLyBPbmx5IHJvdW5kIHRoZSBpbi1iZXR3ZWVuIGZyYW1lcyB2YWx1ZXMgaWYgdGhlIGZpbmFsIHZhbHVlIGlzIGEgc3RyaW5nXG4gICAgICAgICAgY29uc3QgdHdlZW5QcmVjaXNpb24gPSAodHdlZW5Jc051bWJlciAmJiB0d2VlbklzT2JqZWN0KSB8fCB0d2VlblByb2dyZXNzID09PSAwIHx8IHR3ZWVuUHJvZ3Jlc3MgPT09IDEgPyAtMSA6IGdsb2JhbHMucHJlY2lzaW9uO1xuXG4gICAgICAgICAgLy8gUmVjb21wb3NlIHR3ZWVuIHZhbHVlXG4gICAgICAgICAgLyoqIEB0eXBlIHtTdHJpbmd8TnVtYmVyfSAqL1xuICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICAgICAgICBsZXQgbnVtYmVyO1xuXG4gICAgICAgICAgaWYgKHR3ZWVuSXNOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbnVtYmVyID0gLyoqIEB0eXBlIHtOdW1iZXJ9ICovKHR3ZWVuTW9kaWZpZXIocm91bmQoaW50ZXJwb2xhdGUodHdlZW4uX2Zyb21OdW1iZXIsIHR3ZWVuLl90b051bWJlciwgIHR3ZWVuUHJvZ3Jlc3MpLCB0d2VlblByZWNpc2lvbiApKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0d2VlblZhbHVlVHlwZSA9PT0gdmFsdWVUeXBlcy5VTklUKSB7XG4gICAgICAgICAgICAvLyBSb3VuZGluZyB0aGUgdmFsdWVzIHNwZWVkIHVwIHN0cmluZyBjb21wb3NpdGlvblxuICAgICAgICAgICAgbnVtYmVyID0gLyoqIEB0eXBlIHtOdW1iZXJ9ICovKHR3ZWVuTW9kaWZpZXIocm91bmQoaW50ZXJwb2xhdGUodHdlZW4uX2Zyb21OdW1iZXIsIHR3ZWVuLl90b051bWJlciwgIHR3ZWVuUHJvZ3Jlc3MpLCB0d2VlblByZWNpc2lvbikpKTtcbiAgICAgICAgICAgIHZhbHVlID0gYCR7bnVtYmVyfSR7dHdlZW4uX3VuaXR9YDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR3ZWVuVmFsdWVUeXBlID09PSB2YWx1ZVR5cGVzLkNPTE9SKSB7XG4gICAgICAgICAgICBjb25zdCBmbiA9IHR3ZWVuLl9mcm9tTnVtYmVycztcbiAgICAgICAgICAgIGNvbnN0IHRuID0gdHdlZW4uX3RvTnVtYmVycztcbiAgICAgICAgICAgIGNvbnN0IHIgPSByb3VuZChjbGFtcCgvKiogQHR5cGUge051bWJlcn0gKi8odHdlZW5Nb2RpZmllcihpbnRlcnBvbGF0ZShmblswXSwgdG5bMF0sIHR3ZWVuUHJvZ3Jlc3MpKSksIDAsIDI1NSksIDApO1xuICAgICAgICAgICAgY29uc3QgZyA9IHJvdW5kKGNsYW1wKC8qKiBAdHlwZSB7TnVtYmVyfSAqLyh0d2Vlbk1vZGlmaWVyKGludGVycG9sYXRlKGZuWzFdLCB0blsxXSwgdHdlZW5Qcm9ncmVzcykpKSwgMCwgMjU1KSwgMCk7XG4gICAgICAgICAgICBjb25zdCBiID0gcm91bmQoY2xhbXAoLyoqIEB0eXBlIHtOdW1iZXJ9ICovKHR3ZWVuTW9kaWZpZXIoaW50ZXJwb2xhdGUoZm5bMl0sIHRuWzJdLCB0d2VlblByb2dyZXNzKSkpLCAwLCAyNTUpLCAwKTtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBjbGFtcCgvKiogQHR5cGUge051bWJlcn0gKi8odHdlZW5Nb2RpZmllcihyb3VuZChpbnRlcnBvbGF0ZShmblszXSwgdG5bM10sIHR3ZWVuUHJvZ3Jlc3MpLCB0d2VlblByZWNpc2lvbikpKSwgMCwgMSk7XG4gICAgICAgICAgICB2YWx1ZSA9IGByZ2JhKCR7cn0sJHtnfSwke2J9LCR7YX0pYDtcbiAgICAgICAgICAgIGlmICh0d2Vlbkhhc0NvbXBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5zID0gdHdlZW4uX251bWJlcnM7XG4gICAgICAgICAgICAgIG5zWzBdID0gcjtcbiAgICAgICAgICAgICAgbnNbMV0gPSBnO1xuICAgICAgICAgICAgICBuc1syXSA9IGI7XG4gICAgICAgICAgICAgIG5zWzNdID0gYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHR3ZWVuVmFsdWVUeXBlID09PSB2YWx1ZVR5cGVzLkNPTVBMRVgpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdHdlZW4uX3N0cmluZ3NbMF07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCwgbCA9IHR3ZWVuLl90b051bWJlcnMubGVuZ3RoOyBqIDwgbDsgaisrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG4gPSAvKiogQHR5cGUge051bWJlcn0gKi8odHdlZW5Nb2RpZmllcihyb3VuZChpbnRlcnBvbGF0ZSh0d2Vlbi5fZnJvbU51bWJlcnNbal0sIHR3ZWVuLl90b051bWJlcnNbal0sIHR3ZWVuUHJvZ3Jlc3MpLCB0d2VlblByZWNpc2lvbikpKTtcbiAgICAgICAgICAgICAgY29uc3QgcyA9IHR3ZWVuLl9zdHJpbmdzW2ogKyAxXTtcbiAgICAgICAgICAgICAgdmFsdWUgKz0gYCR7cyA/IG4gKyBzIDogbn1gO1xuICAgICAgICAgICAgICBpZiAodHdlZW5IYXNDb21wb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIHR3ZWVuLl9udW1iZXJzW2pdID0gbjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEZvciBhZGRpdGl2ZSB0d2VlbnMgYW5kIEFuaW1hdGFibGVzXG4gICAgICAgICAgaWYgKHR3ZWVuSGFzQ29tcG9zaXRpb24pIHtcbiAgICAgICAgICAgIHR3ZWVuLl9udW1iZXIgPSBudW1iZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFpbnRlcm5hbFJlbmRlciAmJiB0d2VlbkNvbXBvc2l0aW9uICE9PSBjb21wb3NpdGlvblR5cGVzLmJsZW5kKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHR3ZWVuUHJvcGVydHkgPSB0d2Vlbi5wcm9wZXJ0eTtcbiAgICAgICAgICAgIHR3ZWVuVGFyZ2V0ID0gdHdlZW4udGFyZ2V0O1xuXG4gICAgICAgICAgICBpZiAodHdlZW5Jc09iamVjdCkge1xuICAgICAgICAgICAgICB0d2VlblRhcmdldFt0d2VlblByb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0d2VlblR5cGUgPT09IHR3ZWVuVHlwZXMuQVRUUklCVVRFKSB7XG4gICAgICAgICAgICAgIC8qKiBAdHlwZSB7RE9NVGFyZ2V0fSAqLyh0d2VlblRhcmdldCkuc2V0QXR0cmlidXRlKHR3ZWVuUHJvcGVydHksIC8qKiBAdHlwZSB7U3RyaW5nfSAqLyh2YWx1ZSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdHdlZW5TdHlsZSA9IC8qKiBAdHlwZSB7RE9NVGFyZ2V0fSAqLyh0d2VlblRhcmdldCkuc3R5bGU7XG4gICAgICAgICAgICAgIGlmICh0d2VlblR5cGUgPT09IHR3ZWVuVHlwZXMuVFJBTlNGT1JNKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR3ZWVuVGFyZ2V0ICE9PSB0d2VlblRhcmdldFRyYW5zZm9ybXMpIHtcbiAgICAgICAgICAgICAgICAgIHR3ZWVuVGFyZ2V0VHJhbnNmb3JtcyA9IHR3ZWVuVGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgLy8gTk9URTogUmVmZXJlbmNpbmcgdGhlIGNhY2hlZFRyYW5zZm9ybXMgaW4gdGhlIHR3ZWVuIHByb3BlcnR5IGRpcmVjdGx5IGNhbiBiZSBhIGxpdHRsZSBiaXQgZmFzdGVyIGJ1dCBhcHBlYXJzIHRvIGluY3JlYXNlIG1lbW9yeSB1c2FnZS5cbiAgICAgICAgICAgICAgICAgIHR3ZWVuVGFyZ2V0VHJhbnNmb3Jtc1Byb3BlcnRpZXMgPSB0d2VlblRhcmdldFt0cmFuc2Zvcm1zU3ltYm9sXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHdlZW5UYXJnZXRUcmFuc2Zvcm1zUHJvcGVydGllc1t0d2VlblByb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHR3ZWVuVHJhbnNmb3Jtc05lZWRVcGRhdGUgPSAxO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR3ZWVuVHlwZSA9PT0gdHdlZW5UeXBlcy5DU1MpIHtcbiAgICAgICAgICAgICAgICB0d2VlblN0eWxlW3R3ZWVuUHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodHdlZW5UeXBlID09PSB0d2VlblR5cGVzLkNTU19WQVIpIHtcbiAgICAgICAgICAgICAgICB0d2VlblN0eWxlLnNldFByb3BlcnR5KHR3ZWVuUHJvcGVydHksLyoqIEB0eXBlIHtTdHJpbmd9ICovKHZhbHVlKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzQ3VycmVudFRpbWVBYm92ZVplcm8pIGhhc1JlbmRlcmVkID0gMTtcblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBVc2VkIGZvciBjb21wb3NpbmcgdGltZWxpbmUgdHdlZW5zIHdpdGhvdXQgaGF2aW5nIHRvIGRvIGEgcmVhbCByZW5kZXJcbiAgICAgICAgICAgIHR3ZWVuLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTk9URTogUG9zc2libGUgaW1wcm92ZW1lbnQ6IFVzZSB0cmFuc2xhdGUoeCx5KSAvIHRyYW5zbGF0ZTNkKHgseSx6KSBzeW50YXhcbiAgICAgICAgLy8gdG8gcmVkdWNlIG1lbW9yeSB1c2FnZSBvbiBzdHJpbmcgY29tcG9zaXRpb25cbiAgICAgICAgaWYgKHR3ZWVuVHJhbnNmb3Jtc05lZWRVcGRhdGUgJiYgdHdlZW4uX3JlbmRlclRyYW5zZm9ybXMpIHtcbiAgICAgICAgICBsZXQgc3RyID0gZW1wdHlTdHJpbmc7XG4gICAgICAgICAgZm9yIChsZXQga2V5IGluIHR3ZWVuVGFyZ2V0VHJhbnNmb3Jtc1Byb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHN0ciArPSBgJHt0cmFuc2Zvcm1zRnJhZ21lbnRTdHJpbmdzW2tleV19JHt0d2VlblRhcmdldFRyYW5zZm9ybXNQcm9wZXJ0aWVzW2tleV19KSBgO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0d2VlblN0eWxlLnRyYW5zZm9ybSA9IHN0cjtcbiAgICAgICAgICB0d2VlblRyYW5zZm9ybXNOZWVkVXBkYXRlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHR3ZWVuID0gdHdlZW4uX25leHQ7XG4gICAgICB9XG5cbiAgICAgIGlmICghbXV0ZUNhbGxiYWNrcyAmJiBoYXNSZW5kZXJlZCkge1xuICAgICAgICAvKiogQHR5cGUge0pTQW5pbWF0aW9ufSAqLyh0aWNrYWJsZSkub25SZW5kZXIoLyoqIEB0eXBlIHtKU0FuaW1hdGlvbn0gKi8odGlja2FibGUpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIW11dGVDYWxsYmFja3MgJiYgaXNDdXJyZW50VGltZUFib3ZlWmVybykge1xuICAgICAgdGlja2FibGUub25VcGRhdGUoLyoqIEB0eXBlIHtDYWxsYmFja0FyZ3VtZW50fSAqLyh0aWNrYWJsZSkpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gRW5kIHR3ZWVucyByZW5kZXJpbmdcblxuICAvLyBIYW5kbGUgc2V0dGVycyBvbiB0aW1lbGluZSBkaWZmZXJlbnRseSBhbmQgYWxsb3cgcmUtdHJpZ2VyaW5nIHRoZSBvbkNvbXBsZXRlIGNhbGxiYWNrIHdoZW4gc2Vla2luZyBiYWNrd2FyZHNcbiAgaWYgKHBhcmVudCAmJiBpc1NldHRlcikge1xuICAgIGlmICghbXV0ZUNhbGxiYWNrcyAmJiAoXG4gICAgICAocGFyZW50LmJlZ2FuICYmICFpc1J1bm5pbmdCYWNrd2FyZHMgJiYgdGlja2FibGVBYnNvbHV0ZVRpbWUgPj0gZHVyYXRpb24gJiYgIWNvbXBsZXRlZCkgfHxcbiAgICAgIChpc1J1bm5pbmdCYWNrd2FyZHMgJiYgdGlja2FibGVBYnNvbHV0ZVRpbWUgPD0gbWluVmFsdWUgJiYgY29tcGxldGVkKVxuICAgICkpIHtcbiAgICAgIHRpY2thYmxlLm9uQ29tcGxldGUoLyoqIEB0eXBlIHtDYWxsYmFja0FyZ3VtZW50fSAqLyh0aWNrYWJsZSkpO1xuICAgICAgdGlja2FibGUuY29tcGxldGVkID0gIWlzUnVubmluZ0JhY2t3YXJkcztcbiAgICB9XG4gIC8vIElmIGN1cnJlbnRUaW1lIGlzIGJvdGggYWJvdmUgMCBhbmQgYXQgbGVhc3QgZXF1YWxzIHRvIGR1cmF0aW9uLCBoYW5kbGVzIG5vcm1hbCBvbkNvbXBsZXRlIG9yIGluZmluaXRlIGxvb3BzXG4gIH0gZWxzZSBpZiAoaXNDdXJyZW50VGltZUFib3ZlWmVybyAmJiBpc0N1cnJlbnRUaW1lRXF1YWxPckFib3ZlRHVyYXRpb24pIHtcbiAgICBpZiAoaXRlcmF0aW9uQ291bnQgPT09IEluZmluaXR5KSB7XG4gICAgICAvLyBPZmZzZXQgdGhlIHRpY2thYmxlIF9zdGFydFRpbWUgd2l0aCBpdHMgZHVyYXRpb24gdG8gcmVzZXQgX2N1cnJlbnRUaW1lIHRvIDAgYW5kIGNvbnRpbnVlIHRoZSBpbmZpbml0ZSB0aW1lclxuICAgICAgdGlja2FibGUuX3N0YXJ0VGltZSArPSB0aWNrYWJsZS5kdXJhdGlvbjtcbiAgICB9IGVsc2UgaWYgKHRpY2thYmxlLl9jdXJyZW50SXRlcmF0aW9uID49IGl0ZXJhdGlvbkNvdW50IC0gMSkge1xuICAgICAgLy8gQnkgc2V0dGluZyBwYXVzZWQgdG8gdHJ1ZSwgd2UgdGVsbCB0aGUgZW5naW5lIGxvb3AgdG8gbm90IHJlbmRlciB0aGlzIHRpY2thYmxlIGFuZCByZW1vdmVzIGl0IGZyb20gdGhlIGxpc3Qgb24gdGhlIG5leHQgdGlja1xuICAgICAgdGlja2FibGUucGF1c2VkID0gdHJ1ZTtcbiAgICAgIGlmICghY29tcGxldGVkICYmICFfaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgLy8gSWYgdGhlIHRpY2thYmxlIGhhcyBjaGlsZHJlbiwgdHJpZ2dlcnMgb25Db21wbGV0ZSgpIG9ubHkgd2hlbiBhbGwgY2hpbGRyZW4gaGF2ZSBjb21wbGV0ZWQgaW4gdGhlIHRpY2sgZnVuY3Rpb25cbiAgICAgICAgdGlja2FibGUuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFtdXRlQ2FsbGJhY2tzICYmICEocGFyZW50ICYmIChpc1J1bm5pbmdCYWNrd2FyZHMgfHwgIXBhcmVudC5iZWdhbikpKSB7XG4gICAgICAgICAgdGlja2FibGUub25Db21wbGV0ZSgvKiogQHR5cGUge0NhbGxiYWNrQXJndW1lbnR9ICovKHRpY2thYmxlKSk7XG4gICAgICAgICAgdGlja2FibGUuX3Jlc29sdmUoLyoqIEB0eXBlIHtDYWxsYmFja0FyZ3VtZW50fSAqLyh0aWNrYWJsZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAvLyBPdGhlcndpc2Ugc2V0IHRoZSBjb21wbGV0ZWQgZmxhZyB0byBmYWxzZVxuICB9IGVsc2Uge1xuICAgIHRpY2thYmxlLmNvbXBsZXRlZCA9IGZhbHNlO1xuICB9XG5cbiAgLy8gTk9URTogaGFzUmVuZGVyZWQgKiBkaXJlY3Rpb24gKG5lZ2F0aXZlIGZvciBiYWNrd2FyZHMpIHRoaXMgd2F5IHdlIGNhbiByZW1vdmUgdGhlIHRpY2thYmxlLmJhY2t3YXJkcyBwcm9wZXJ0eSBjb21wbGV0bHkgP1xuICByZXR1cm4gaGFzUmVuZGVyZWQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSAge1RpY2thYmxlfSB0aWNrYWJsZVxuICogQHBhcmFtICB7TnVtYmVyfSB0aW1lXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG11dGVDYWxsYmFja3NcbiAqIEBwYXJhbSAge051bWJlcn0gaW50ZXJuYWxSZW5kZXJcbiAqIEBwYXJhbSAge051bWJlcn0gdGlja01vZGVcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmNvbnN0IHRpY2sgPSAodGlja2FibGUsIHRpbWUsIG11dGVDYWxsYmFja3MsIGludGVybmFsUmVuZGVyLCB0aWNrTW9kZSkgPT4ge1xuICBjb25zdCBfY3VycmVudEl0ZXJhdGlvbiA9IHRpY2thYmxlLl9jdXJyZW50SXRlcmF0aW9uO1xuICByZW5kZXIodGlja2FibGUsIHRpbWUsIG11dGVDYWxsYmFja3MsIGludGVybmFsUmVuZGVyLCB0aWNrTW9kZSk7XG4gIGlmICh0aWNrYWJsZS5faGFzQ2hpbGRyZW4pIHtcbiAgICBjb25zdCB0bCA9IC8qKiBAdHlwZSB7VGltZWxpbmV9ICovKHRpY2thYmxlKTtcbiAgICBjb25zdCB0bElzUnVubmluZ0JhY2t3YXJkcyA9IHRsLmJhY2t3YXJkcztcbiAgICBjb25zdCB0bENoaWxkcmVuVGltZSA9IGludGVybmFsUmVuZGVyID8gdGltZSA6IHRsLl9pdGVyYXRpb25UaW1lO1xuICAgIGNvbnN0IHRsQ2lsZHJlblRpY2tUaW1lID0gbm93KCk7XG5cbiAgICBsZXQgdGxDaGlsZHJlbkhhc1JlbmRlcmVkID0gMDtcbiAgICBsZXQgdGxDaGlsZHJlbkhhdmVDb21wbGV0ZWQgPSB0cnVlO1xuXG4gICAgLy8gSWYgdGhlIHRpbWVsaW5lIGhhcyBsb29wZWQgZm9yd2FyZCwgd2UgbmVlZCB0byBtYW51YWxseSB0cmlnZ2VycyBjaGlsZHJlbiBza2lwcGVkIGNhbGxiYWNrc1xuICAgIGlmICghaW50ZXJuYWxSZW5kZXIgJiYgdGwuX2N1cnJlbnRJdGVyYXRpb24gIT09IF9jdXJyZW50SXRlcmF0aW9uKSB7XG4gICAgICBjb25zdCB0bEl0ZXJhdGlvbkR1cmF0aW9uID0gdGwuaXRlcmF0aW9uRHVyYXRpb247XG4gICAgICBmb3JFYWNoQ2hpbGRyZW4odGwsICgvKiogQHR5cGUge0pTQW5pbWF0aW9ufSAqL2NoaWxkKSA9PiB7XG4gICAgICAgIGlmICghdGxJc1J1bm5pbmdCYWNrd2FyZHMpIHtcbiAgICAgICAgICAvLyBGb3JjZSBhbiBpbnRlcm5hbCByZW5kZXIgdG8gdHJpZ2dlciB0aGUgY2FsbGJhY2tzIGlmIHRoZSBjaGlsZCBoYXMgbm90IGNvbXBsZXRlZCBvbiBsb29wXG4gICAgICAgICAgaWYgKCFjaGlsZC5jb21wbGV0ZWQgJiYgIWNoaWxkLmJhY2t3YXJkcyAmJiBjaGlsZC5fY3VycmVudFRpbWUgPCBjaGlsZC5pdGVyYXRpb25EdXJhdGlvbikge1xuICAgICAgICAgICAgcmVuZGVyKGNoaWxkLCB0bEl0ZXJhdGlvbkR1cmF0aW9uLCBtdXRlQ2FsbGJhY2tzLCAxLCB0aWNrTW9kZXMuRk9SQ0UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBSZXNldCB0aGVpciBiZWdhbiBhbmQgY29tcGxldGVkIGZsYWdzIHRvIGFsbG93IHJldHJpZ2VyaW5nIGNhbGxiYWNrcyBvbiB0aGUgbmV4dCBpdGVyYXRpb25cbiAgICAgICAgICBjaGlsZC5iZWdhbiA9IGZhbHNlO1xuICAgICAgICAgIGNoaWxkLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGNoaWxkRHVyYXRpb24gPSBjaGlsZC5kdXJhdGlvbjtcbiAgICAgICAgICBjb25zdCBjaGlsZFN0YXJ0VGltZSA9IGNoaWxkLl9vZmZzZXQgKyBjaGlsZC5fZGVsYXk7XG4gICAgICAgICAgY29uc3QgY2hpbGRFbmRUaW1lID0gY2hpbGRTdGFydFRpbWUgKyBjaGlsZER1cmF0aW9uO1xuICAgICAgICAgIC8vIFRyaWdnZXJzIHRoZSBvbkNvbXBsZXRlIGNhbGxiYWNrIG9uIHJldmVyc2UgZm9yIGNoaWxkcmVuIG9uIHRoZSBlZGdlcyBvZiB0aGUgdGltZWxpbmVcbiAgICAgICAgICBpZiAoIW11dGVDYWxsYmFja3MgJiYgY2hpbGREdXJhdGlvbiA8PSBtaW5WYWx1ZSAmJiAoIWNoaWxkU3RhcnRUaW1lIHx8IGNoaWxkRW5kVGltZSA9PT0gdGxJdGVyYXRpb25EdXJhdGlvbikpIHtcbiAgICAgICAgICAgIGNoaWxkLm9uQ29tcGxldGUoY2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoIW11dGVDYWxsYmFja3MpIHRsLm9uTG9vcCgvKiogQHR5cGUge0NhbGxiYWNrQXJndW1lbnR9ICovKHRsKSk7XG4gICAgfVxuXG4gICAgZm9yRWFjaENoaWxkcmVuKHRsLCAoLyoqIEB0eXBlIHtKU0FuaW1hdGlvbn0gKi9jaGlsZCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRUaW1lID0gcm91bmQoKHRsQ2hpbGRyZW5UaW1lIC0gY2hpbGQuX29mZnNldCkgKiBjaGlsZC5fc3BlZWQsIDEyKTsgLy8gUm91bmRpbmcgaXMgbmVlZGVkIHdoZW4gdXNpbmcgc2Vjb25kc1xuICAgICAgY29uc3QgY2hpbGRUaWNrTW9kZSA9IGNoaWxkLl9mcHMgPCB0bC5fZnBzID8gY2hpbGQucmVxdWVzdFRpY2sodGxDaWxkcmVuVGlja1RpbWUpIDogdGlja01vZGU7XG4gICAgICB0bENoaWxkcmVuSGFzUmVuZGVyZWQgKz0gcmVuZGVyKGNoaWxkLCBjaGlsZFRpbWUsIG11dGVDYWxsYmFja3MsIGludGVybmFsUmVuZGVyLCBjaGlsZFRpY2tNb2RlKTtcbiAgICAgIGlmICghY2hpbGQuY29tcGxldGVkICYmIHRsQ2hpbGRyZW5IYXZlQ29tcGxldGVkKSB0bENoaWxkcmVuSGF2ZUNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIH0sIHRsSXNSdW5uaW5nQmFja3dhcmRzKTtcblxuICAgIC8vIFJlbmRlcnMgb24gdGltZWxpbmUgYXJlIHRyaWdnZXJlZCBieSBpdHMgY2hpbGRyZW4gc28gaXQgbmVlZHMgdG8gYmUgc2V0IGFmdGVyIHJlbmRlcmluZyB0aGUgY2hpbGRyZW5cbiAgICBpZiAoIW11dGVDYWxsYmFja3MgJiYgdGxDaGlsZHJlbkhhc1JlbmRlcmVkKSB0bC5vblJlbmRlcigvKiogQHR5cGUge0NhbGxiYWNrQXJndW1lbnR9ICovKHRsKSk7XG5cbiAgICAvLyBUcmlnZ2VycyB0aGUgdGltZWxpbmUgb25Db21wbGV0ZSgpIG9uY2UgYWxsIGNoaW5kcmVuIGFsbCBjb21wbGV0ZWQgYW5kIHRoZSBjdXJyZW50IHRpbWUgaGFzIHJlYWNoZWQgdGhlIGVuZFxuICAgIGlmICh0bENoaWxkcmVuSGF2ZUNvbXBsZXRlZCAmJiB0bC5fY3VycmVudFRpbWUgPj0gdGwuZHVyYXRpb24pIHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgcGF1c2VkIGZsYWcgaXMgZmFsc2UgaW4gY2FzZSBpdCBoYXMgYmVlbiBza2lwcGVkIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAgIHRsLnBhdXNlZCA9IHRydWU7XG4gICAgICBpZiAoIXRsLmNvbXBsZXRlZCkge1xuICAgICAgICB0bC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICBpZiAoIW11dGVDYWxsYmFja3MpIHtcbiAgICAgICAgICB0bC5vbkNvbXBsZXRlKC8qKiBAdHlwZSB7Q2FsbGJhY2tBcmd1bWVudH0gKi8odGwpKTtcbiAgICAgICAgICB0bC5fcmVzb2x2ZSgvKiogQHR5cGUge0NhbGxiYWNrQXJndW1lbnR9ICovKHRsKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cblxuXG5cbmNvbnN0IGFkZGl0aXZlID0ge1xuICBhbmltYXRpb246IG51bGwsXG4gIHVwZGF0ZTogbm9vcCxcbn07XG5cbi8qKlxuICogQHR5cGVkZWYgQWRkaXRpdmVBbmltYXRpb25cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBkdXJhdGlvblxuICogQHByb3BlcnR5IHtOdW1iZXJ9IF9vZmZzZXRcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBfZGVsYXlcbiAqIEBwcm9wZXJ0eSB7VHdlZW59IF9oZWFkXG4gKiBAcHJvcGVydHkge1R3ZWVufSBfdGFpbFxuICovXG5cbi8qKlxuICogQHBhcmFtICB7VHdlZW5BZGRpdGl2ZUxvb2t1cHN9IGxvb2t1cHNcbiAqIEByZXR1cm4ge0FkZGl0aXZlQW5pbWF0aW9ufVxuICovXG5jb25zdCBhZGRBZGRpdGl2ZUFuaW1hdGlvbiA9IGxvb2t1cHMgPT4ge1xuICBsZXQgYW5pbWF0aW9uID0gYWRkaXRpdmUuYW5pbWF0aW9uO1xuICBpZiAoIWFuaW1hdGlvbikge1xuICAgIGFuaW1hdGlvbiA9IHtcbiAgICAgIGR1cmF0aW9uOiBtaW5WYWx1ZSxcbiAgICAgIGNvbXB1dGVEZWx0YVRpbWU6IG5vb3AsXG4gICAgICBfb2Zmc2V0OiAwLFxuICAgICAgX2RlbGF5OiAwLFxuICAgICAgX2hlYWQ6IG51bGwsXG4gICAgICBfdGFpbDogbnVsbCxcbiAgICB9O1xuICAgIGFkZGl0aXZlLmFuaW1hdGlvbiA9IGFuaW1hdGlvbjtcbiAgICBhZGRpdGl2ZS51cGRhdGUgPSAoKSA9PiB7XG4gICAgICBsb29rdXBzLmZvckVhY2gocHJvcGVydHlBbmltYXRpb24gPT4ge1xuICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydHlBbmltYXRpb24pIHtcbiAgICAgICAgICBjb25zdCB0d2VlbnMgPSBwcm9wZXJ0eUFuaW1hdGlvbltwcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgIGNvbnN0IGxvb2t1cFR3ZWVuID0gdHdlZW5zLl9oZWFkO1xuICAgICAgICAgIGlmIChsb29rdXBUd2Vlbikge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gbG9va3VwVHdlZW4uX3ZhbHVlVHlwZTtcbiAgICAgICAgICAgIGNvbnN0IGFkZGl0aXZlVmFsdWVzID0gdmFsdWVUeXBlID09PSB2YWx1ZVR5cGVzLkNPTVBMRVggfHwgdmFsdWVUeXBlID09PSB2YWx1ZVR5cGVzLkNPTE9SID8gY2xvbmVBcnJheShsb29rdXBUd2Vlbi5fZnJvbU51bWJlcnMpIDogbnVsbDtcbiAgICAgICAgICAgIGxldCBhZGRpdGl2ZVZhbHVlID0gbG9va3VwVHdlZW4uX2Zyb21OdW1iZXI7XG4gICAgICAgICAgICBsZXQgdHdlZW4gPSB0d2VlbnMuX3RhaWw7XG4gICAgICAgICAgICB3aGlsZSAodHdlZW4gJiYgdHdlZW4gIT09IGxvb2t1cFR3ZWVuKSB7XG4gICAgICAgICAgICAgIGlmIChhZGRpdGl2ZVZhbHVlcykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdHdlZW4uX251bWJlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSBhZGRpdGl2ZVZhbHVlc1tpXSArPSB0d2Vlbi5fbnVtYmVyc1tpXTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRpdGl2ZVZhbHVlICs9IHR3ZWVuLl9udW1iZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdHdlZW4gPSB0d2Vlbi5fcHJldkFkZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvb2t1cFR3ZWVuLl90b051bWJlciA9IGFkZGl0aXZlVmFsdWU7XG4gICAgICAgICAgICBsb29rdXBUd2Vlbi5fdG9OdW1iZXJzID0gYWRkaXRpdmVWYWx1ZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIFRPRE86IEF2b2lkIHBvbHltb3JwaGlzbSBoZXJlLCBpZGVhbHkgdGhlIGFkZGl0aXZlIGFuaW1hdGlvbiBzaG91bGQgYmUgYSByZWd1bGFyIGFuaW1hdGlvbiB3aXRoIGEgaGlnaGVyIHByaW9yaXR5IGluIHRoZSByZW5kZXIgbG9vcFxuICAgICAgcmVuZGVyKGFuaW1hdGlvbiwgMSwgMSwgMCwgdGlja01vZGVzLkZPUkNFKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBhbmltYXRpb247XG59O1xuXG5jb25zdCBlbmdpbmVUaWNrTWV0aG9kID0gaXNCcm93c2VyID8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIDogc2V0SW1tZWRpYXRlO1xuY29uc3QgZW5naW5lQ2FuY2VsTWV0aG9kID0gaXNCcm93c2VyID8gY2FuY2VsQW5pbWF0aW9uRnJhbWUgOiBjbGVhckltbWVkaWF0ZTtcblxuY2xhc3MgRW5naW5lIGV4dGVuZHMgQ2xvY2sge1xuXG4gIC8qKiBAcGFyYW0ge051bWJlcn0gW2luaXRUaW1lXSAqL1xuICBjb25zdHJ1Y3Rvcihpbml0VGltZSkge1xuICAgIHN1cGVyKGluaXRUaW1lKTtcbiAgICB0aGlzLnVzZURlZmF1bHRNYWluTG9vcCA9IHRydWU7XG4gICAgdGhpcy5wYXVzZU9uRG9jdW1lbnRIaWRkZW4gPSB0cnVlO1xuICAgIC8qKiBAdHlwZSB7RGVmYXVsdHNQYXJhbXN9ICovXG4gICAgdGhpcy5kZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgIHRoaXMucGF1c2VkID0gaXNCcm93c2VyICYmIGRvYy5oaWRkZW4gPyB0cnVlICA6IGZhbHNlO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfE5vZGVKUy5JbW1lZGlhdGV9ICovXG4gICAgdGhpcy5yZXFJZCA9IG51bGw7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgdGltZSA9IHRoaXMuX2N1cnJlbnRUaW1lID0gbm93KCk7XG4gICAgaWYgKHRoaXMucmVxdWVzdFRpY2sodGltZSkpIHtcbiAgICAgIHRoaXMuY29tcHV0ZURlbHRhVGltZSh0aW1lKTtcbiAgICAgIGNvbnN0IGVuZ2luZVNwZWVkID0gdGhpcy5fc3BlZWQ7XG4gICAgICBjb25zdCBlbmdpbmVGcHMgPSB0aGlzLl9mcHM7XG4gICAgICBsZXQgYWN0aXZlVGlja2FibGUgPSAvKiogQHR5cGUge1RpY2thYmxlfSAqLyh0aGlzLl9oZWFkKTtcbiAgICAgIHdoaWxlIChhY3RpdmVUaWNrYWJsZSkge1xuICAgICAgICBjb25zdCBuZXh0VGlja2FibGUgPSBhY3RpdmVUaWNrYWJsZS5fbmV4dDtcbiAgICAgICAgaWYgKCFhY3RpdmVUaWNrYWJsZS5wYXVzZWQpIHtcbiAgICAgICAgICB0aWNrKFxuICAgICAgICAgICAgYWN0aXZlVGlja2FibGUsXG4gICAgICAgICAgICAodGltZSAtIGFjdGl2ZVRpY2thYmxlLl9zdGFydFRpbWUpICogYWN0aXZlVGlja2FibGUuX3NwZWVkICogZW5naW5lU3BlZWQsXG4gICAgICAgICAgICAwLCAvLyAhbXV0ZUNhbGxiYWNrc1xuICAgICAgICAgICAgMCwgLy8gIWludGVybmFsUmVuZGVyXG4gICAgICAgICAgICBhY3RpdmVUaWNrYWJsZS5fZnBzIDwgZW5naW5lRnBzID8gYWN0aXZlVGlja2FibGUucmVxdWVzdFRpY2sodGltZSkgOiB0aWNrTW9kZXMuQVVUT1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVtb3ZlQ2hpbGQodGhpcywgYWN0aXZlVGlja2FibGUpO1xuICAgICAgICAgIHRoaXMuX2hhc0NoaWxkcmVuID0gISF0aGlzLl90YWlsO1xuICAgICAgICAgIGFjdGl2ZVRpY2thYmxlLl9ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGFjdGl2ZVRpY2thYmxlLmNvbXBsZXRlZCAmJiAhYWN0aXZlVGlja2FibGUuX2NhbmNlbGxlZCkge1xuICAgICAgICAgICAgYWN0aXZlVGlja2FibGUuY2FuY2VsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFjdGl2ZVRpY2thYmxlID0gbmV4dFRpY2thYmxlO1xuICAgICAgfVxuICAgICAgYWRkaXRpdmUudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgd2FrZSgpIHtcbiAgICBpZiAodGhpcy51c2VEZWZhdWx0TWFpbkxvb3AgJiYgIXRoaXMucmVxSWQgJiYgIXRoaXMucGF1c2VkKSB7XG4gICAgICB0aGlzLnJlcUlkID0gZW5naW5lVGlja01ldGhvZCh0aWNrRW5naW5lKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwYXVzZSgpIHtcbiAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgcmV0dXJuIGtpbGxFbmdpbmUoKTtcbiAgfVxuXG4gIHJlc3VtZSgpIHtcbiAgICBpZiAoIXRoaXMucGF1c2VkKSByZXR1cm47XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICBmb3JFYWNoQ2hpbGRyZW4odGhpcywgKC8qKiBAdHlwZSB7VGlja2FibGV9ICovY2hpbGQpID0+IGNoaWxkLnJlc2V0VGltZSgpKTtcbiAgICByZXR1cm4gdGhpcy53YWtlKCk7XG4gIH1cblxuICAvLyBHZXR0ZXIgYW5kIHNldHRlciBmb3Igc3BlZWRcbiAgZ2V0IHNwZWVkKCkge1xuICAgIHJldHVybiB0aGlzLl9zcGVlZCAqIChnbG9iYWxzLnRpbWVTY2FsZSA9PT0gMSA/IDEgOiBLKTtcbiAgfVxuXG4gIHNldCBzcGVlZChwbGF5YmFja1JhdGUpIHtcbiAgICB0aGlzLl9zcGVlZCA9IHBsYXliYWNrUmF0ZSAqIGdsb2JhbHMudGltZVNjYWxlO1xuICAgIGZvckVhY2hDaGlsZHJlbih0aGlzLCAoLyoqIEB0eXBlIHtUaWNrYWJsZX0gKi9jaGlsZCkgPT4gY2hpbGQuc3BlZWQgPSBjaGlsZC5fc3BlZWQpO1xuICB9XG5cbiAgLy8gR2V0dGVyIGFuZCBzZXR0ZXIgZm9yIHRpbWVVbml0XG4gIGdldCB0aW1lVW5pdCgpIHtcbiAgICByZXR1cm4gZ2xvYmFscy50aW1lU2NhbGUgPT09IDEgPyAnbXMnIDogJ3MnO1xuICB9O1xuXG4gIHNldCB0aW1lVW5pdCh1bml0KSB7XG4gICAgY29uc3Qgc2Vjb25kc1NjYWxlID0gMC4wMDE7XG4gICAgY29uc3QgaXNTZWNvbmQgPSB1bml0ID09PSAncyc7XG4gICAgY29uc3QgbmV3U2NhbGUgPSBpc1NlY29uZCA/IHNlY29uZHNTY2FsZSA6IDE7XG4gICAgaWYgKGdsb2JhbHMudGltZVNjYWxlICE9PSBuZXdTY2FsZSkge1xuICAgICAgZ2xvYmFscy50aW1lU2NhbGUgPSBuZXdTY2FsZTtcbiAgICAgIGdsb2JhbHMudGlja1RocmVzaG9sZCA9IDIwMCAqIG5ld1NjYWxlO1xuICAgICAgY29uc3Qgc2NhbGVGYWN0b3IgPSBpc1NlY29uZCA/IHNlY29uZHNTY2FsZSA6IEs7XG4gICAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICAgICh0aGlzLmRlZmF1bHRzLmR1cmF0aW9uKSAqPSBzY2FsZUZhY3RvcjtcbiAgICAgIHRoaXMuX3NwZWVkICo9IHNjYWxlRmFjdG9yO1xuICAgIH1cbiAgfVxuXG4gIC8vIEdldHRlciBhbmQgc2V0dGVyIGZvciBwcmVjaXNpb25cbiAgZ2V0IHByZWNpc2lvbigpIHtcbiAgICByZXR1cm4gZ2xvYmFscy5wcmVjaXNpb247XG4gIH1cblxuICBzZXQgcHJlY2lzaW9uKHByZWNpc2lvbikge1xuICAgIGdsb2JhbHMucHJlY2lzaW9uID0gcHJlY2lzaW9uO1xuICB9XG5cbn1cbmNvbnN0IGVuZ2luZSA9IC8qI19fUFVSRV9fKi8oKCkgPT4ge1xuICBjb25zdCBlbmdpbmUgPSBuZXcgRW5naW5lKG5vdygpKTtcbiAgaWYgKGlzQnJvd3Nlcikge1xuICAgIGdsb2JhbFZlcnNpb25zLmVuZ2luZSA9IGVuZ2luZTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsICgpID0+IHtcbiAgICAgIGlmICghZW5naW5lLnBhdXNlT25Eb2N1bWVudEhpZGRlbikgcmV0dXJuO1xuICAgICAgZG9jLmhpZGRlbiA/IGVuZ2luZS5wYXVzZSgpIDogZW5naW5lLnJlc3VtZSgpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBlbmdpbmU7XG59KSgpO1xuXG5cbmNvbnN0IHRpY2tFbmdpbmUgPSAoKSA9PiB7XG4gIGlmIChlbmdpbmUuX2hlYWQpIHtcbiAgICBlbmdpbmUucmVxSWQgPSBlbmdpbmVUaWNrTWV0aG9kKHRpY2tFbmdpbmUpO1xuICAgIGVuZ2luZS51cGRhdGUoKTtcbiAgfSBlbHNlIHtcbiAgICBlbmdpbmUucmVxSWQgPSAwO1xuICB9XG59O1xuXG5jb25zdCBraWxsRW5naW5lID0gKCkgPT4ge1xuICBlbmdpbmVDYW5jZWxNZXRob2QoLyoqIEB0eXBlIHtOb2RlSlMuSW1tZWRpYXRlICYgTnVtYmVyfSAqLyhlbmdpbmUucmVxSWQpKTtcbiAgZW5naW5lLnJlcUlkID0gMDtcbiAgcmV0dXJuIGVuZ2luZTtcbn07XG5cblxuXG5cbi8qKlxuICogQHBhcmFtICB7RE9NVGFyZ2V0fSB0YXJnZXRcbiAqIEBwYXJhbSAge1N0cmluZ30gcHJvcE5hbWVcbiAqIEBwYXJhbSAge09iamVjdH0gYW5pbWF0aW9uSW5saW5lU3R5bGVzXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmNvbnN0IHBhcnNlSW5saW5lVHJhbnNmb3JtcyA9ICh0YXJnZXQsIHByb3BOYW1lLCBhbmltYXRpb25JbmxpbmVTdHlsZXMpID0+IHtcbiAgY29uc3QgaW5saW5lVHJhbnNmb3JtcyA9IHRhcmdldC5zdHlsZS50cmFuc2Zvcm07XG4gIGxldCBpbmxpbmVkU3R5bGVzUHJvcGVydHlWYWx1ZTtcbiAgaWYgKGlubGluZVRyYW5zZm9ybXMpIHtcbiAgICBjb25zdCBjYWNoZWRUcmFuc2Zvcm1zID0gdGFyZ2V0W3RyYW5zZm9ybXNTeW1ib2xdO1xuICAgIGxldCB0OyB3aGlsZSAodCA9IHRyYW5zZm9ybXNFeGVjUmd4LmV4ZWMoaW5saW5lVHJhbnNmb3JtcykpIHtcbiAgICAgIGNvbnN0IGlubGluZVByb3BlcnR5TmFtZSA9IHRbMV07XG4gICAgICAvLyBjb25zdCBpbmxpbmVQcm9wZXJ0eVZhbHVlID0gdFsyXTtcbiAgICAgIGNvbnN0IGlubGluZVByb3BlcnR5VmFsdWUgPSB0WzJdLnNsaWNlKDEsIC0xKTtcbiAgICAgIGNhY2hlZFRyYW5zZm9ybXNbaW5saW5lUHJvcGVydHlOYW1lXSA9IGlubGluZVByb3BlcnR5VmFsdWU7XG4gICAgICBpZiAoaW5saW5lUHJvcGVydHlOYW1lID09PSBwcm9wTmFtZSkge1xuICAgICAgICBpbmxpbmVkU3R5bGVzUHJvcGVydHlWYWx1ZSA9IGlubGluZVByb3BlcnR5VmFsdWU7XG4gICAgICAgIC8vIFN0b3JlIHRoZSBuZXcgcGFyc2VkIGlubGluZSBzdHlsZXMgaWYgYW5pbWF0aW9uSW5saW5lU3R5bGVzIGlzIHByb3ZpZGVkXG4gICAgICAgIGlmIChhbmltYXRpb25JbmxpbmVTdHlsZXMpIHtcbiAgICAgICAgICBhbmltYXRpb25JbmxpbmVTdHlsZXNbcHJvcE5hbWVdID0gaW5saW5lUHJvcGVydHlWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gaW5saW5lVHJhbnNmb3JtcyAmJiAhaXNVbmQoaW5saW5lZFN0eWxlc1Byb3BlcnR5VmFsdWUpID8gaW5saW5lZFN0eWxlc1Byb3BlcnR5VmFsdWUgOlxuICAgIHN0cmluZ1N0YXJ0c1dpdGgocHJvcE5hbWUsICdzY2FsZScpID8gJzEnIDpcbiAgICBzdHJpbmdTdGFydHNXaXRoKHByb3BOYW1lLCAncm90YXRlJykgfHwgc3RyaW5nU3RhcnRzV2l0aChwcm9wTmFtZSwgJ3NrZXcnKSA/ICcwZGVnJyA6ICcwcHgnO1xufTtcblxuXG5cblxuLyoqXG4gKiBAcGFyYW0gIHtET01UYXJnZXRzUGFyYW18VGFyZ2V0c1BhcmFtfSB2XG4gKiBAcmV0dXJuIHtOb2RlTGlzdHxIVE1MQ29sbGVjdGlvbn1cbiAqL1xuZnVuY3Rpb24gZ2V0Tm9kZUxpc3Qodikge1xuICBjb25zdCBuID0gaXNTdHIodikgPyBnbG9iYWxzLnJvb3QucXVlcnlTZWxlY3RvckFsbCh2KSA6IHY7XG4gIGlmIChuIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgbiBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKSByZXR1cm4gbjtcbn1cblxuLyoqXG4gKiBAb3ZlcmxvYWRcbiAqIEBwYXJhbSAge0RPTVRhcmdldHNQYXJhbX0gdGFyZ2V0c1xuICogQHJldHVybiB7RE9NVGFyZ2V0c0FycmF5fVxuICpcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtICB7SlNUYXJnZXRzUGFyYW19IHRhcmdldHNcbiAqIEByZXR1cm4ge0pTVGFyZ2V0c0FycmF5fVxuICpcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtICB7VGFyZ2V0c1BhcmFtfSB0YXJnZXRzXG4gKiBAcmV0dXJuIHtUYXJnZXRzQXJyYXl9XG4gKlxuICogQHBhcmFtICB7RE9NVGFyZ2V0c1BhcmFtfEpTVGFyZ2V0c1BhcmFtfFRhcmdldHNQYXJhbX0gdGFyZ2V0c1xuICovXG5mdW5jdGlvbiBwYXJzZVRhcmdldHModGFyZ2V0cykge1xuICBpZiAoaXNOaWwodGFyZ2V0cykpIHJldHVybiAvKiogQHR5cGUge1RhcmdldHNBcnJheX0gKi8oW10pO1xuICBpZiAoaXNBcnIodGFyZ2V0cykpIHtcbiAgICBjb25zdCBmbGF0dGVuZWQgPSB0YXJnZXRzLmZsYXQoSW5maW5pdHkpO1xuICAgIC8qKiBAdHlwZSB7VGFyZ2V0c0FycmF5fSAqL1xuICAgIGNvbnN0IHBhcnNlZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gZmxhdHRlbmVkLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IGZsYXR0ZW5lZFtpXTtcbiAgICAgIGlmICghaXNOaWwoaXRlbSkpIHtcbiAgICAgICAgY29uc3Qgbm9kZUxpc3QgPSBnZXROb2RlTGlzdChpdGVtKTtcbiAgICAgICAgaWYgKG5vZGVMaXN0KSB7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDAsIGpsID0gbm9kZUxpc3QubGVuZ3RoOyBqIDwgamw7IGorKykge1xuICAgICAgICAgICAgY29uc3Qgc3ViSXRlbSA9IG5vZGVMaXN0W2pdO1xuICAgICAgICAgICAgaWYgKCFpc05pbChzdWJJdGVtKSkge1xuICAgICAgICAgICAgICBsZXQgaXNEdXBsaWNhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDAsIGtsID0gcGFyc2VkLmxlbmd0aDsgayA8IGtsOyBrKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkW2tdID09PSBzdWJJdGVtKSB7XG4gICAgICAgICAgICAgICAgICBpc0R1cGxpY2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKCFpc0R1cGxpY2F0ZSkge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wdXNoKHN1Ykl0ZW0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBpc0R1cGxpY2F0ZSA9IGZhbHNlO1xuICAgICAgICAgIGZvciAobGV0IGogPSAwLCBqbCA9IHBhcnNlZC5sZW5ndGg7IGogPCBqbDsgaisrKSB7XG4gICAgICAgICAgICBpZiAocGFyc2VkW2pdID09PSBpdGVtKSB7XG4gICAgICAgICAgICAgIGlzRHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNEdXBsaWNhdGUpIHtcbiAgICAgICAgICAgIHBhcnNlZC5wdXNoKGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG4gIGlmICghaXNCcm93c2VyKSByZXR1cm4gLyoqIEB0eXBlIHtKU1RhcmdldHNBcnJheX0gKi8oW3RhcmdldHNdKTtcbiAgY29uc3Qgbm9kZUxpc3QgPSBnZXROb2RlTGlzdCh0YXJnZXRzKTtcbiAgaWYgKG5vZGVMaXN0KSByZXR1cm4gLyoqIEB0eXBlIHtET01UYXJnZXRzQXJyYXl9ICovKEFycmF5LmZyb20obm9kZUxpc3QpKTtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7VGFyZ2V0c0FycmF5fSAqLyhbdGFyZ2V0c10pO1xufVxuXG4vKipcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtICB7RE9NVGFyZ2V0c1BhcmFtfSB0YXJnZXRzXG4gKiBAcmV0dXJuIHtET01UYXJnZXRzQXJyYXl9XG4gKlxuICogQG92ZXJsb2FkXG4gKiBAcGFyYW0gIHtKU1RhcmdldHNQYXJhbX0gdGFyZ2V0c1xuICogQHJldHVybiB7SlNUYXJnZXRzQXJyYXl9XG4gKlxuICogQG92ZXJsb2FkXG4gKiBAcGFyYW0gIHtUYXJnZXRzUGFyYW19IHRhcmdldHNcbiAqIEByZXR1cm4ge1RhcmdldHNBcnJheX1cbiAqXG4gKiBAcGFyYW0gIHtET01UYXJnZXRzUGFyYW18SlNUYXJnZXRzUGFyYW18VGFyZ2V0c1BhcmFtfSB0YXJnZXRzXG4gKi9cbmZ1bmN0aW9uIHJlZ2lzdGVyVGFyZ2V0cyh0YXJnZXRzKSB7XG4gIGNvbnN0IHBhcnNlZFRhcmdldHNBcnJheSA9IHBhcnNlVGFyZ2V0cyh0YXJnZXRzKTtcbiAgY29uc3QgcGFyc2VkVGFyZ2V0c0xlbmd0aCA9IHBhcnNlZFRhcmdldHNBcnJheS5sZW5ndGg7XG4gIGlmIChwYXJzZWRUYXJnZXRzTGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJzZWRUYXJnZXRzTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHBhcnNlZFRhcmdldHNBcnJheVtpXTtcbiAgICAgIGlmICghdGFyZ2V0W2lzUmVnaXN0ZXJlZFRhcmdldFN5bWJvbF0pIHtcbiAgICAgICAgdGFyZ2V0W2lzUmVnaXN0ZXJlZFRhcmdldFN5bWJvbF0gPSB0cnVlO1xuICAgICAgICBjb25zdCBpc1N2Z1R5cGUgPSBpc1N2Zyh0YXJnZXQpO1xuICAgICAgICBjb25zdCBpc0RvbSA9IC8qKiBAdHlwZSB7RE9NVGFyZ2V0fSAqLyh0YXJnZXQpLm5vZGVUeXBlIHx8IGlzU3ZnVHlwZTtcbiAgICAgICAgaWYgKGlzRG9tKSB7XG4gICAgICAgICAgdGFyZ2V0W2lzRG9tU3ltYm9sXSA9IHRydWU7XG4gICAgICAgICAgdGFyZ2V0W2lzU3ZnU3ltYm9sXSA9IGlzU3ZnVHlwZTtcbiAgICAgICAgICB0YXJnZXRbdHJhbnNmb3Jtc1N5bWJvbF0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcGFyc2VkVGFyZ2V0c0FycmF5O1xufVxuXG5cblxuXG4vKipcbiAqIEBwYXJhbSAge1RhcmdldHNQYXJhbX0gcGF0aFxuICogQHJldHVybiB7U1ZHR2VvbWV0cnlFbGVtZW50fHVuZGVmaW5lZH1cbiAqL1xuY29uc3QgZ2V0UGF0aCA9IHBhdGggPT4ge1xuICBjb25zdCBwYXJzZWRUYXJnZXRzID0gcGFyc2VUYXJnZXRzKHBhdGgpO1xuICBjb25zdCAkcGFyc2VkU3ZnID0gLyoqIEB0eXBlIHtTVkdHZW9tZXRyeUVsZW1lbnR9ICovKHBhcnNlZFRhcmdldHNbMF0pO1xuICBpZiAoISRwYXJzZWRTdmcgfHwgIWlzU3ZnKCRwYXJzZWRTdmcpKSByZXR1cm47XG4gIHJldHVybiAkcGFyc2VkU3ZnO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtUYXJnZXRzUGFyYW19IHBhdGgyXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IFtwcmVjaXNpb25dXG4gKiBAcmV0dXJuIHtGdW5jdGlvblZhbHVlfVxuICovXG5jb25zdCBtb3JwaFRvID0gKHBhdGgyLCBwcmVjaXNpb24gPSAuMzMpID0+ICgkcGF0aDEpID0+IHtcbiAgY29uc3QgJHBhdGgyID0gLyoqIEB0eXBlIHtTVkdHZW9tZXRyeUVsZW1lbnR9ICovKGdldFBhdGgocGF0aDIpKTtcbiAgaWYgKCEkcGF0aDIpIHJldHVybjtcbiAgY29uc3QgaXNQYXRoID0gJHBhdGgxLnRhZ05hbWUgPT09ICdwYXRoJztcbiAgY29uc3Qgc2VwYXJhdG9yID0gaXNQYXRoID8gJyAnIDogJywnO1xuICBjb25zdCBwcmV2aW91c1BvaW50cyA9ICRwYXRoMVttb3JwaFBvaW50c1N5bWJvbF07XG4gIGlmIChwcmV2aW91c1BvaW50cykgJHBhdGgxLnNldEF0dHJpYnV0ZShpc1BhdGggPyAnZCcgOiAncG9pbnRzJywgcHJldmlvdXNQb2ludHMpO1xuXG4gIGxldCB2MSA9ICcnLCB2MiA9ICcnO1xuXG4gIGlmICghcHJlY2lzaW9uKSB7XG4gICAgdjEgPSAkcGF0aDEuZ2V0QXR0cmlidXRlKGlzUGF0aCA/ICdkJyA6ICdwb2ludHMnKTtcbiAgICB2MiA9ICRwYXRoMi5nZXRBdHRyaWJ1dGUoaXNQYXRoID8gJ2QnIDogJ3BvaW50cycpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGxlbmd0aDEgPSAvKiogQHR5cGUge1NWR0dlb21ldHJ5RWxlbWVudH0gKi8oJHBhdGgxKS5nZXRUb3RhbExlbmd0aCgpO1xuICAgIGNvbnN0IGxlbmd0aDIgPSAkcGF0aDIuZ2V0VG90YWxMZW5ndGgoKTtcbiAgICBjb25zdCBtYXhQb2ludHMgPSBNYXRoLm1heChNYXRoLmNlaWwobGVuZ3RoMSAqIHByZWNpc2lvbiksIE1hdGguY2VpbChsZW5ndGgyICogcHJlY2lzaW9uKSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhQb2ludHM7IGkrKykge1xuICAgICAgY29uc3QgdCA9IGkgLyAobWF4UG9pbnRzIC0gMSk7XG4gICAgICBjb25zdCBwb2ludE9uUGF0aDEgPSAvKiogQHR5cGUge1NWR0dlb21ldHJ5RWxlbWVudH0gKi8oJHBhdGgxKS5nZXRQb2ludEF0TGVuZ3RoKGxlbmd0aDEgKiB0KTtcbiAgICAgIGNvbnN0IHBvaW50T25QYXRoMiA9ICRwYXRoMi5nZXRQb2ludEF0TGVuZ3RoKGxlbmd0aDIgKiB0KTtcbiAgICAgIGNvbnN0IHByZWZpeCA9IGlzUGF0aCA/IChpID09PSAwID8gJ00nIDogJ0wnKSA6ICcnO1xuICAgICAgdjEgKz0gcHJlZml4ICsgcm91bmQocG9pbnRPblBhdGgxLngsIDMpICsgc2VwYXJhdG9yICsgcG9pbnRPblBhdGgxLnkgKyAnICc7XG4gICAgICB2MiArPSBwcmVmaXggKyByb3VuZChwb2ludE9uUGF0aDIueCwgMykgKyBzZXBhcmF0b3IgKyBwb2ludE9uUGF0aDIueSArICcgJztcbiAgICB9XG4gIH1cblxuICAkcGF0aDFbbW9ycGhQb2ludHNTeW1ib2xdID0gdjI7XG5cbiAgcmV0dXJuIFt2MSwgdjJdO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge1NWR0dlb21ldHJ5RWxlbWVudH0gWyRlbF1cbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuY29uc3QgZ2V0U2NhbGVGYWN0b3IgPSAkZWwgPT4ge1xuICBsZXQgc2NhbGVGYWN0b3IgPSAxO1xuICBpZiAoJGVsICYmICRlbC5nZXRDVE0pIHtcbiAgICBjb25zdCBjdG0gPSAkZWwuZ2V0Q1RNKCk7XG4gICAgaWYgKGN0bSkge1xuICAgICAgY29uc3Qgc2NhbGVYID0gc3FydChjdG0uYSAqIGN0bS5hICsgY3RtLmIgKiBjdG0uYik7XG4gICAgICBjb25zdCBzY2FsZVkgPSBzcXJ0KGN0bS5jICogY3RtLmMgKyBjdG0uZCAqIGN0bS5kKTtcbiAgICAgIHNjYWxlRmFjdG9yID0gKHNjYWxlWCArIHNjYWxlWSkgLyAyO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2NhbGVGYWN0b3I7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBwcm94eSB0aGF0IHdyYXBzIGFuIFNWR0dlb21ldHJ5RWxlbWVudCBhbmQgYWRkcyBkcmF3aW5nIGZ1bmN0aW9uYWxpdHkuXG4gKiBAcGFyYW0ge1NWR0dlb21ldHJ5RWxlbWVudH0gJGVsIC0gVGhlIFNWRyBlbGVtZW50IHRvIHRyYW5zZm9ybSBpbnRvIGEgZHJhd2FibGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCAtIFN0YXJ0aW5nIHBvc2l0aW9uICgwLTEpXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIC0gRW5kaW5nIHBvc2l0aW9uICgwLTEpXG4gKiBAcmV0dXJuIHtEcmF3YWJsZVNWR0dlb21ldHJ5fSAtIFJldHVybnMgYSBwcm94eSB0aGF0IHByZXNlcnZlcyB0aGUgb3JpZ2luYWwgZWxlbWVudCdzIHR5cGUgd2l0aCBhZGRpdGlvbmFsICdkcmF3JyBhdHRyaWJ1dGUgZnVuY3Rpb25hbGl0eVxuICovXG5jb25zdCBjcmVhdGVEcmF3YWJsZVByb3h5ID0gKCRlbCwgc3RhcnQsIGVuZCkgPT4ge1xuICBjb25zdCBwYXRoTGVuZ3RoID0gSztcbiAgY29uc3QgY29tcHV0ZWRTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKCRlbCk7XG4gIGNvbnN0IHN0cm9rZUxpbmVDYXAgPSBjb21wdXRlZFN0eWxlcy5zdHJva2VMaW5lY2FwO1xuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0ICRzY2FsbGVkID0gY29tcHV0ZWRTdHlsZXMudmVjdG9yRWZmZWN0ID09PSAnbm9uLXNjYWxpbmctc3Ryb2tlJyA/ICRlbCA6IG51bGw7XG4gIGxldCBjdXJyZW50Q2FwID0gc3Ryb2tlTGluZUNhcDtcblxuICBjb25zdCBwcm94eSA9IG5ldyBQcm94eSgkZWwsIHtcbiAgICBnZXQodGFyZ2V0LCBwcm9wZXJ0eSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXRbcHJvcGVydHldO1xuICAgICAgaWYgKHByb3BlcnR5ID09PSBwcm94eVRhcmdldFN5bWJvbCkgcmV0dXJuIHRhcmdldDtcbiAgICAgIGlmIChwcm9wZXJ0eSA9PT0gJ3NldEF0dHJpYnV0ZScpIHtcbiAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKGFyZ3NbMF0gPT09ICdkcmF3Jykge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhcmdzWzFdO1xuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWUuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIGNvbnN0IHYxID0gK3ZhbHVlc1swXTtcbiAgICAgICAgICAgIGNvbnN0IHYyID0gK3ZhbHVlc1sxXTtcbiAgICAgICAgICAgIC8vIFRPVE86IEJlbmNobWFyayBpZiBwZXJmb3JtaW5nIHR3byBzbGljZXMgaXMgbW9yZSBwZXJmb3JtYW50IHRoYW4gb25lIHNwbGl0XG4gICAgICAgICAgICAvLyBjb25zdCBzcGFjZUluZGV4ID0gdmFsdWUuaW5kZXhPZignICcpO1xuICAgICAgICAgICAgLy8gY29uc3QgdjEgPSByb3VuZCgrdmFsdWUuc2xpY2UoMCwgc3BhY2VJbmRleCksIHByZWNpc2lvbik7XG4gICAgICAgICAgICAvLyBjb25zdCB2MiA9IHJvdW5kKCt2YWx1ZS5zbGljZShzcGFjZUluZGV4ICsgMSksIHByZWNpc2lvbik7XG4gICAgICAgICAgICBjb25zdCBzY2FsZUZhY3RvciA9IGdldFNjYWxlRmFjdG9yKCRzY2FsbGVkKTtcbiAgICAgICAgICAgIGNvbnN0IG9zID0gdjEgKiAtMWUzICogc2NhbGVGYWN0b3I7XG4gICAgICAgICAgICBjb25zdCBkMSA9ICh2MiAqIHBhdGhMZW5ndGggKiBzY2FsZUZhY3RvcikgKyBvcztcbiAgICAgICAgICAgIGNvbnN0IGQyID0gKHBhdGhMZW5ndGggKiBzY2FsZUZhY3RvciArXG4gICAgICAgICAgICAgICAgICAgICAgKCh2MSA9PT0gMCAmJiB2MiA9PT0gMSkgfHwgKHYxID09PSAxICYmIHYyID09PSAwKSA/IDAgOiAxMCAqIHNjYWxlRmFjdG9yKSAtIGQxKTtcbiAgICAgICAgICAgIGlmIChzdHJva2VMaW5lQ2FwICE9PSAnYnV0dCcpIHtcbiAgICAgICAgICAgICAgY29uc3QgbmV3Q2FwID0gdjEgPT09IHYyID8gJ2J1dHQnIDogc3Ryb2tlTGluZUNhcDtcbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnRDYXAgIT09IG5ld0NhcCkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS5zdHJva2VMaW5lY2FwID0gYCR7bmV3Q2FwfWA7XG4gICAgICAgICAgICAgICAgY3VycmVudENhcCA9IG5ld0NhcDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hvZmZzZXQnLCBgJHtvc31gKTtcbiAgICAgICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBgJHtkMX0gJHtkMn1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFJlZmxlY3QuYXBwbHkodmFsdWUsIHRhcmdldCwgYXJncyk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0ZuYyh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiBSZWZsZWN0LmFwcGx5KHZhbHVlLCB0YXJnZXQsIGFyZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKCRlbC5nZXRBdHRyaWJ1dGUoJ3BhdGhMZW5ndGgnKSAhPT0gYCR7cGF0aExlbmd0aH1gKSB7XG4gICAgJGVsLnNldEF0dHJpYnV0ZSgncGF0aExlbmd0aCcsIGAke3BhdGhMZW5ndGh9YCk7XG4gICAgcHJveHkuc2V0QXR0cmlidXRlKCdkcmF3JywgYCR7c3RhcnR9ICR7ZW5kfWApO1xuICB9XG5cbiAgcmV0dXJuIC8qKiBAdHlwZSB7RHJhd2FibGVTVkdHZW9tZXRyeX0gKi8ocHJveHkpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGRyYXdhYmxlIHByb3hpZXMgZm9yIG11bHRpcGxlIFNWRyBlbGVtZW50cy5cbiAqIEBwYXJhbSB7VGFyZ2V0c1BhcmFtfSBzZWxlY3RvciAtIENTUyBzZWxlY3RvciwgU1ZHIGVsZW1lbnQsIG9yIGFycmF5IG9mIGVsZW1lbnRzIGFuZCBzZWxlY3RvcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gLSBTdGFydGluZyBwb3NpdGlvbiAoMC0xKVxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmQ9MF0gLSBFbmRpbmcgcG9zaXRpb24gKDAtMSlcbiAqIEByZXR1cm4ge0FycmF5PERyYXdhYmxlU1ZHR2VvbWV0cnk+fSAtIEFycmF5IG9mIHByb3hpZWQgZWxlbWVudHMgd2l0aCBkcmF3aW5nIGZ1bmN0aW9uYWxpdHlcbiAqL1xuY29uc3QgY3JlYXRlRHJhd2FibGUgPSAoc2VsZWN0b3IsIHN0YXJ0ID0gMCwgZW5kID0gMCkgPT4ge1xuICBjb25zdCBlbHMgPSBwYXJzZVRhcmdldHMoc2VsZWN0b3IpO1xuICByZXR1cm4gZWxzLm1hcCgkZWwgPT4gY3JlYXRlRHJhd2FibGVQcm94eShcbiAgICAvKiogQHR5cGUge1NWR0dlb21ldHJ5RWxlbWVudH0gKi8oJGVsKSxcbiAgICBzdGFydCxcbiAgICBlbmRcbiAgKSk7XG59O1xuXG4vLyBNb3Rpb24gcGF0aCBhbmltYXRpb25cblxuLyoqXG4gKiBAcGFyYW0ge1NWR0dlb21ldHJ5RWxlbWVudH0gJHBhdGhcbiAqIEBwYXJhbSB7TnVtYmVyfSBwcm9ncmVzc1xuICogQHBhcmFtIHtOdW1iZXJ9bG9va3VwXG4gKiBAcmV0dXJuIHtET01Qb2ludH1cbiAqL1xuY29uc3QgZ2V0UGF0aFBvaW50ID0gKCRwYXRoLCBwcm9ncmVzcywgbG9va3VwID0gMCkgPT4ge1xuICByZXR1cm4gJHBhdGguZ2V0UG9pbnRBdExlbmd0aChwcm9ncmVzcyArIGxvb2t1cCA+PSAxID8gcHJvZ3Jlc3MgKyBsb29rdXAgOiAwKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtTVkdHZW9tZXRyeUVsZW1lbnR9ICRwYXRoXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aFByb3BlcnR5XG4gKiBAcmV0dXJuIHtGdW5jdGlvblZhbHVlfVxuICovXG5jb25zdCBnZXRQYXRoUHJvZ2VzcyA9ICgkcGF0aCwgcGF0aFByb3BlcnR5KSA9PiB7XG4gIHJldHVybiAkZWwgPT4ge1xuICAgIGNvbnN0IHRvdGFsTGVuZ3RoID0gKygkcGF0aC5nZXRUb3RhbExlbmd0aCgpKTtcbiAgICBjb25zdCBpblN2ZyA9ICRlbFtpc1N2Z1N5bWJvbF07XG4gICAgY29uc3QgY3RtID0gJHBhdGguZ2V0Q1RNKCk7XG4gICAgLyoqIEB0eXBlIHtUd2Vlbk9iamVjdFZhbHVlfSAqL1xuICAgIHJldHVybiB7XG4gICAgICBmcm9tOiAwLFxuICAgICAgdG86IHRvdGFsTGVuZ3RoLFxuICAgICAgLyoqIEB0eXBlIHtUd2Vlbk1vZGlmaWVyfSAqL1xuICAgICAgbW9kaWZpZXI6IHByb2dyZXNzID0+IHtcbiAgICAgICAgaWYgKHBhdGhQcm9wZXJ0eSA9PT0gJ2EnKSB7XG4gICAgICAgICAgY29uc3QgcDAgPSBnZXRQYXRoUG9pbnQoJHBhdGgsIHByb2dyZXNzLCAtMSk7XG4gICAgICAgICAgY29uc3QgcDEgPSBnZXRQYXRoUG9pbnQoJHBhdGgsIHByb2dyZXNzLCAxKTtcbiAgICAgICAgICByZXR1cm4gYXRhbjIocDEueSAtIHAwLnksIHAxLnggLSBwMC54KSAqIDE4MCAvIFBJO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHAgPSBnZXRQYXRoUG9pbnQoJHBhdGgsIHByb2dyZXNzLCAwKTtcbiAgICAgICAgICByZXR1cm4gcGF0aFByb3BlcnR5ID09PSAneCcgP1xuICAgICAgICAgICAgaW5TdmcgfHwgIWN0bSA/IHAueCA6IHAueCAqIGN0bS5hICsgcC55ICogY3RtLmMgKyBjdG0uZSA6XG4gICAgICAgICAgICBpblN2ZyB8fCAhY3RtID8gcC55IDogcC54ICogY3RtLmIgKyBwLnkgKiBjdG0uZCArIGN0bS5mXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHtUYXJnZXRzUGFyYW19IHBhdGhcbiAqL1xuY29uc3QgY3JlYXRlTW90aW9uUGF0aCA9IHBhdGggPT4ge1xuICBjb25zdCAkcGF0aCA9IGdldFBhdGgocGF0aCk7XG4gIGlmICghJHBhdGgpIHJldHVybjtcbiAgcmV0dXJuIHtcbiAgICB0cmFuc2xhdGVYOiBnZXRQYXRoUHJvZ2VzcygkcGF0aCwgJ3gnKSxcbiAgICB0cmFuc2xhdGVZOiBnZXRQYXRoUHJvZ2VzcygkcGF0aCwgJ3knKSxcbiAgICByb3RhdGU6IGdldFBhdGhQcm9nZXNzKCRwYXRoLCAnYScpLFxuICB9XG59O1xuXG4vLyBDaGVjayBmb3IgdmFsaWQgU1ZHIGF0dHJpYnV0ZVxuXG5jb25zdCBjc3NSZXNlcnZlZFByb3BlcnRpZXMgPSBbJ29wYWNpdHknLCAncm90YXRlJywgJ292ZXJmbG93JywgJ2NvbG9yJ107XG5cbi8qKlxuICogQHBhcmFtICB7VGFyZ2V0fSBlbFxuICogQHBhcmFtICB7U3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmNvbnN0IGlzVmFsaWRTVkdBdHRyaWJ1dGUgPSAoZWwsIHByb3BlcnR5TmFtZSkgPT4ge1xuICAvLyBSZXR1cm4gZWFybHkgYW5kIHVzZSBDU1Mgb3BhY2l0eSBhbmltYXRpb24gaW5zdGVhZCAoYWxyZWFkeSBiZXR0ZXIgZGVmYXVsdCB2YWx1ZXMgKG9wYWNpdHk6IDEgaW5zdGVhZCBvZiAwKSkgYW5kIHJvdGF0ZSBzaG91bGQgYmUgY29uc2lkZXJlZCBhIHRyYW5zZm9ybVxuICBpZiAoY3NzUmVzZXJ2ZWRQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5TmFtZSkpIHJldHVybiBmYWxzZTtcbiAgaWYgKGVsLmdldEF0dHJpYnV0ZShwcm9wZXJ0eU5hbWUpIHx8IHByb3BlcnR5TmFtZSBpbiBlbCkge1xuICAgIGlmIChwcm9wZXJ0eU5hbWUgPT09ICdzY2FsZScpIHsgLy8gU2NhbGVcbiAgICAgIGNvbnN0IGVsUGFyZW50Tm9kZSA9IC8qKiBAdHlwZSB7U1ZHR2VvbWV0cnlFbGVtZW50fSAqLygvKiogQHR5cGUge0RPTVRhcmdldH0gKi8oZWwpLnBhcmVudE5vZGUpO1xuICAgICAgLy8gT25seSBjb25zaWRlciBzY2FsZSBhcyBhIHZhbGlkIFNWRyBhdHRyaWJ1dGUgb24gZmlsdGVyIGVsZW1lbnRcbiAgICAgIHJldHVybiBlbFBhcmVudE5vZGUgJiYgZWxQYXJlbnROb2RlLnRhZ05hbWUgPT09ICdmaWx0ZXInO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuY29uc3Qgc3ZnID0ge1xuICBtb3JwaFRvLFxuICBjcmVhdGVNb3Rpb25QYXRoLFxuICBjcmVhdGVEcmF3YWJsZSxcbn07XG5cblxuXG5cbi8qKlxuICogUkdCIC8gUkdCQSBDb2xvciB2YWx1ZSBzdHJpbmcgLT4gUkdCQSB2YWx1ZXMgYXJyYXlcbiAqIEBwYXJhbSAge1N0cmluZ30gcmdiVmFsdWVcbiAqIEByZXR1cm4ge0NvbG9yQXJyYXl9XG4gKi9cbmNvbnN0IHJnYlRvUmdiYSA9IHJnYlZhbHVlID0+IHtcbiAgY29uc3QgcmdiYSA9IHJnYkV4ZWNSZ3guZXhlYyhyZ2JWYWx1ZSkgfHwgcmdiYUV4ZWNSZ3guZXhlYyhyZ2JWYWx1ZSk7XG4gIGNvbnN0IGEgPSAhaXNVbmQocmdiYVs0XSkgPyArcmdiYVs0XSA6IDE7XG4gIHJldHVybiBbXG4gICAgK3JnYmFbMV0sXG4gICAgK3JnYmFbMl0sXG4gICAgK3JnYmFbM10sXG4gICAgYVxuICBdXG59O1xuXG4vKipcbiAqIEhFWDMgLyBIRVgzQSAvIEhFWDYgLyBIRVg2QSBDb2xvciB2YWx1ZSBzdHJpbmcgLT4gUkdCQSB2YWx1ZXMgYXJyYXlcbiAqIEBwYXJhbSAge1N0cmluZ30gaGV4VmFsdWVcbiAqIEByZXR1cm4ge0NvbG9yQXJyYXl9XG4gKi9cbmNvbnN0IGhleFRvUmdiYSA9IGhleFZhbHVlID0+IHtcbiAgY29uc3QgaGV4TGVuZ3RoID0gaGV4VmFsdWUubGVuZ3RoO1xuICBjb25zdCBpc1Nob3J0ID0gaGV4TGVuZ3RoID09PSA0IHx8IGhleExlbmd0aCA9PT0gNTtcbiAgcmV0dXJuIFtcbiAgICArKCcweCcgKyBoZXhWYWx1ZVsxXSArIGhleFZhbHVlW2lzU2hvcnQgPyAxIDogMl0pLFxuICAgICsoJzB4JyArIGhleFZhbHVlW2lzU2hvcnQgPyAyIDogM10gKyBoZXhWYWx1ZVtpc1Nob3J0ID8gMiA6IDRdKSxcbiAgICArKCcweCcgKyBoZXhWYWx1ZVtpc1Nob3J0ID8gMyA6IDVdICsgaGV4VmFsdWVbaXNTaG9ydCA/IDMgOiA2XSksXG4gICAgKChoZXhMZW5ndGggPT09IDUgfHwgaGV4TGVuZ3RoID09PSA5KSA/ICsoKygnMHgnICsgaGV4VmFsdWVbaXNTaG9ydCA/IDQgOiA3XSArIGhleFZhbHVlW2lzU2hvcnQgPyA0IDogOF0pIC8gMjU1KS50b0ZpeGVkKDMpIDogMSlcbiAgXVxufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHBcbiAqIEBwYXJhbSAge051bWJlcn0gcVxuICogQHBhcmFtICB7TnVtYmVyfSB0XG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmNvbnN0IGh1ZTJyZ2IgPSAocCwgcSwgdCkgPT4ge1xuICBpZiAodCA8IDApIHQgKz0gMTtcbiAgaWYgKHQgPiAxKSB0IC09IDE7XG4gIHJldHVybiB0IDwgMSAvIDYgPyBwICsgKHEgLSBwKSAqIDYgKiB0IDpcbiAgICAgICAgIHQgPCAxIC8gMiA/IHEgOlxuICAgICAgICAgdCA8IDIgLyAzID8gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDYgOlxuICAgICAgICAgcDtcbn07XG5cbi8qKlxuICogSFNMIC8gSFNMQSBDb2xvciB2YWx1ZSBzdHJpbmcgLT4gUkdCQSB2YWx1ZXMgYXJyYXlcbiAqIEBwYXJhbSAge1N0cmluZ30gaHNsVmFsdWVcbiAqIEByZXR1cm4ge0NvbG9yQXJyYXl9XG4gKi9cbmNvbnN0IGhzbFRvUmdiYSA9IGhzbFZhbHVlID0+IHtcbiAgY29uc3QgaHNsYSA9IGhzbEV4ZWNSZ3guZXhlYyhoc2xWYWx1ZSkgfHwgaHNsYUV4ZWNSZ3guZXhlYyhoc2xWYWx1ZSk7XG4gIGNvbnN0IGggPSAraHNsYVsxXSAvIDM2MDtcbiAgY29uc3QgcyA9ICtoc2xhWzJdIC8gMTAwO1xuICBjb25zdCBsID0gK2hzbGFbM10gLyAxMDA7XG4gIGNvbnN0IGEgPSAhaXNVbmQoaHNsYVs0XSkgPyAraHNsYVs0XSA6IDE7XG4gIGxldCByLCBnLCBiO1xuICBpZiAocyA9PT0gMCkge1xuICAgIHIgPSBnID0gYiA9IGw7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcSA9IGwgPCAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgICBjb25zdCBwID0gMiAqIGwgLSBxO1xuICAgIHIgPSByb3VuZChodWUycmdiKHAsIHEsIGggKyAxIC8gMykgKiAyNTUsIDApO1xuICAgIGcgPSByb3VuZChodWUycmdiKHAsIHEsIGgpICogMjU1LCAwKTtcbiAgICBiID0gcm91bmQoaHVlMnJnYihwLCBxLCBoIC0gMSAvIDMpICogMjU1LCAwKTtcbiAgfVxuICByZXR1cm4gW3IsIGcsIGIsIGFdO1xufTtcblxuLyoqXG4gKiBBbGwgaW4gb25lIGNvbG9yIGNvbnZlcnRlciB0aGF0IGNvbnZlcnRzIGEgY29sb3Igc3RyaW5nIHZhbHVlIGludG8gYW4gYXJyYXkgb2YgUkdCQSB2YWx1ZXNcbiAqIEBwYXJhbSAge1N0cmluZ30gY29sb3JTdHJpbmdcbiAqIEByZXR1cm4ge0NvbG9yQXJyYXl9XG4gKi9cbmNvbnN0IGNvbnZlcnRDb2xvclN0cmluZ1ZhbHVlc1RvUmdiYUFycmF5ID0gY29sb3JTdHJpbmcgPT4ge1xuICByZXR1cm4gaXNSZ2IoY29sb3JTdHJpbmcpID8gcmdiVG9SZ2JhKGNvbG9yU3RyaW5nKSA6XG4gICAgICAgICBpc0hleChjb2xvclN0cmluZykgPyBoZXhUb1JnYmEoY29sb3JTdHJpbmcpIDpcbiAgICAgICAgIGlzSHNsKGNvbG9yU3RyaW5nKSA/IGhzbFRvUmdiYShjb2xvclN0cmluZykgOlxuICAgICAgICAgWzAsIDAsIDAsIDFdO1xufTtcblxuXG5cblxuLyoqXG4gKiBAdGVtcGxhdGUgVCwgRFxuICogQHBhcmFtIHtUfHVuZGVmaW5lZH0gdGFyZ2V0VmFsdWVcbiAqIEBwYXJhbSB7RH0gZGVmYXVsdFZhbHVlXG4gKiBAcmV0dXJuIHtUfER9XG4gKi9cbmNvbnN0IHNldFZhbHVlID0gKHRhcmdldFZhbHVlLCBkZWZhdWx0VmFsdWUpID0+IHtcbiAgcmV0dXJuIGlzVW5kKHRhcmdldFZhbHVlKSA/IGRlZmF1bHRWYWx1ZSA6IHRhcmdldFZhbHVlO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtUd2VlblByb3BWYWx1ZX0gdmFsdWVcbiAqIEBwYXJhbSAge1RhcmdldH0gdGFyZ2V0XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHRvdGFsXG4gKiBAcGFyYW0gIHtPYmplY3R9IFtzdG9yZV1cbiAqIEByZXR1cm4ge2FueX1cbiAqL1xuY29uc3QgZ2V0RnVuY3Rpb25WYWx1ZSA9ICh2YWx1ZSwgdGFyZ2V0LCBpbmRleCwgdG90YWwsIHN0b3JlKSA9PiB7XG4gIGlmIChpc0ZuYyh2YWx1ZSkpIHtcbiAgICBjb25zdCBmdW5jID0gKCkgPT4ge1xuICAgICAgY29uc3QgY29tcHV0ZWQgPSAvKiogQHR5cGUge0Z1bmN0aW9ufSAqLyh2YWx1ZSkodGFyZ2V0LCBpbmRleCwgdG90YWwpO1xuICAgICAgLy8gRmFsbGJhY2sgdG8gMCBpZiB0aGUgZnVuY3Rpb24gcmV0dXJucyB1bmRlZmluZWQgLyBOYU4gLyBudWxsIC8gZmFsc2UgLyAwXG4gICAgICByZXR1cm4gIWlzTmFOKCtjb21wdXRlZCkgPyArY29tcHV0ZWQgOiBjb21wdXRlZCB8fCAwO1xuICAgIH07XG4gICAgaWYgKHN0b3JlKSB7XG4gICAgICBzdG9yZS5mdW5jID0gZnVuYztcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmMoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtICB7VGFyZ2V0fSB0YXJnZXRcbiAqIEBwYXJhbSAge1N0cmluZ30gcHJvcFxuICogQHJldHVybiB7dHdlZW5UeXBlc31cbiAqL1xuY29uc3QgZ2V0VHdlZW5UeXBlID0gKHRhcmdldCwgcHJvcCkgPT4ge1xuICByZXR1cm4gIXRhcmdldFtpc0RvbVN5bWJvbF0gPyB0d2VlblR5cGVzLk9CSkVDVCA6XG4gICAgLy8gSGFuZGxlIFNWRyBhdHRyaWJ1dGVzXG4gICAgdGFyZ2V0W2lzU3ZnU3ltYm9sXSAmJiBpc1ZhbGlkU1ZHQXR0cmlidXRlKHRhcmdldCwgcHJvcCkgPyB0d2VlblR5cGVzLkFUVFJJQlVURSA6XG4gICAgLy8gSGFuZGxlIENTUyBUcmFuc2Zvcm0gcHJvcGVydGllcyBkaWZmZXJlbnRseSB0aGFuIENTUyB0byBhbGxvdyBpbmRpdmlkdWFsIGFuaW1hdGlvbnNcbiAgICB2YWxpZFRyYW5zZm9ybXMuaW5jbHVkZXMocHJvcCkgfHwgc2hvcnRUcmFuc2Zvcm1zLmdldChwcm9wKSA/IHR3ZWVuVHlwZXMuVFJBTlNGT1JNIDpcbiAgICAvLyBDU1MgdmFyaWFibGVzXG4gICAgc3RyaW5nU3RhcnRzV2l0aChwcm9wLCAnLS0nKSA/IHR3ZWVuVHlwZXMuQ1NTX1ZBUiA6XG4gICAgLy8gQWxsIG90aGVyIENTUyBwcm9wZXJ0aWVzXG4gICAgcHJvcCBpbiAvKiogQHR5cGUge0RPTVRhcmdldH0gKi8odGFyZ2V0KS5zdHlsZSA/IHR3ZWVuVHlwZXMuQ1NTIDpcbiAgICAvLyBIYW5kbGUgb3RoZXIgRE9NIEF0dHJpYnV0ZXNcbiAgICBwcm9wIGluIHRhcmdldCA/IHR3ZWVuVHlwZXMuT0JKRUNUIDpcbiAgICB0d2VlblR5cGVzLkFUVFJJQlVURTtcbn07XG5cbi8qKlxuICogQHBhcmFtICB7RE9NVGFyZ2V0fSB0YXJnZXRcbiAqIEBwYXJhbSAge1N0cmluZ30gcHJvcE5hbWVcbiAqIEBwYXJhbSAge09iamVjdH0gYW5pbWF0aW9uSW5saW5lU3R5bGVzXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmNvbnN0IGdldENTU1ZhbHVlID0gKHRhcmdldCwgcHJvcE5hbWUsIGFuaW1hdGlvbklubGluZVN0eWxlcykgPT4ge1xuICBjb25zdCBpbmxpbmVTdHlsZXMgPSB0YXJnZXQuc3R5bGVbcHJvcE5hbWVdO1xuICBpZiAoaW5saW5lU3R5bGVzICYmIGFuaW1hdGlvbklubGluZVN0eWxlcykge1xuICAgIGFuaW1hdGlvbklubGluZVN0eWxlc1twcm9wTmFtZV0gPSBpbmxpbmVTdHlsZXM7XG4gIH1cbiAgY29uc3QgdmFsdWUgPSBpbmxpbmVTdHlsZXMgfHwgZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXRbcHJveHlUYXJnZXRTeW1ib2xdIHx8IHRhcmdldCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wTmFtZSk7XG4gIHJldHVybiB2YWx1ZSA9PT0gJ2F1dG8nID8gJzAnIDogdmFsdWU7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7VGFyZ2V0fSB0YXJnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wTmFtZVxuICogQHBhcmFtIHt0d2VlblR5cGVzfSBbdHdlZW5UeXBlXVxuICogQHBhcmFtIHtPYmplY3R8dm9pZH0gW2FuaW1hdGlvbklubGluZVN0eWxlc11cbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKi9cbmNvbnN0IGdldE9yaWdpbmFsQW5pbWF0YWJsZVZhbHVlID0gKHRhcmdldCwgcHJvcE5hbWUsIHR3ZWVuVHlwZSwgYW5pbWF0aW9uSW5saW5lU3R5bGVzKSA9PiB7XG4gIGNvbnN0IHR5cGUgPSAhaXNVbmQodHdlZW5UeXBlKSA/IHR3ZWVuVHlwZSA6IGdldFR3ZWVuVHlwZSh0YXJnZXQsIHByb3BOYW1lKTtcbiAgcmV0dXJuIHR5cGUgPT09IHR3ZWVuVHlwZXMuT0JKRUNUID8gdGFyZ2V0W3Byb3BOYW1lXSB8fCAwIDpcbiAgICAgICAgIHR5cGUgPT09IHR3ZWVuVHlwZXMuQVRUUklCVVRFID8gLyoqIEB0eXBlIHtET01UYXJnZXR9ICovKHRhcmdldCkuZ2V0QXR0cmlidXRlKHByb3BOYW1lKSA6XG4gICAgICAgICB0eXBlID09PSB0d2VlblR5cGVzLlRSQU5TRk9STSA/IHBhcnNlSW5saW5lVHJhbnNmb3JtcygvKiogQHR5cGUge0RPTVRhcmdldH0gKi8odGFyZ2V0KSwgcHJvcE5hbWUsIGFuaW1hdGlvbklubGluZVN0eWxlcykgOlxuICAgICAgICAgdHlwZSA9PT0gdHdlZW5UeXBlcy5DU1NfVkFSID8gZ2V0Q1NTVmFsdWUoLyoqIEB0eXBlIHtET01UYXJnZXR9ICovKHRhcmdldCksIHByb3BOYW1lLCBhbmltYXRpb25JbmxpbmVTdHlsZXMpLnRyaW1TdGFydCgpIDpcbiAgICAgICAgIGdldENTU1ZhbHVlKC8qKiBAdHlwZSB7RE9NVGFyZ2V0fSAqLyh0YXJnZXQpLCBwcm9wTmFtZSwgYW5pbWF0aW9uSW5saW5lU3R5bGVzKTtcbn07XG5cbi8qKlxuICogQHBhcmFtICB7TnVtYmVyfSB4XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHlcbiAqIEBwYXJhbSAge1N0cmluZ30gb3BlcmF0b3JcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuY29uc3QgZ2V0UmVsYXRpdmVWYWx1ZSA9ICh4LCB5LCBvcGVyYXRvcikgPT4ge1xuICByZXR1cm4gb3BlcmF0b3IgPT09ICctJyA/IHggLSB5IDpcbiAgICAgICAgIG9wZXJhdG9yID09PSAnKycgPyB4ICsgeSA6XG4gICAgICAgICB4ICogeTtcbn07XG5cbi8qKiBAcmV0dXJuIHtUd2VlbkRlY29tcG9zZWRWYWx1ZX0gKi9cbmNvbnN0IGNyZWF0ZURlY29tcG9zZWRWYWx1ZVRhcmdldE9iamVjdCA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAvKiogQHR5cGUge3ZhbHVlVHlwZXN9ICovXG4gICAgdDogdmFsdWVUeXBlcy5OVU1CRVIsXG4gICAgbjogMCxcbiAgICB1OiBudWxsLFxuICAgIG86IG51bGwsXG4gICAgZDogbnVsbCxcbiAgICBzOiBudWxsLFxuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSAge1N0cmluZ3xOdW1iZXJ9IHJhd1ZhbHVlXG4gKiBAcGFyYW0gIHtUd2VlbkRlY29tcG9zZWRWYWx1ZX0gdGFyZ2V0T2JqZWN0XG4gKiBAcmV0dXJuIHtUd2VlbkRlY29tcG9zZWRWYWx1ZX1cbiAqL1xuY29uc3QgZGVjb21wb3NlUmF3VmFsdWUgPSAocmF3VmFsdWUsIHRhcmdldE9iamVjdCkgPT4ge1xuICAvKiogQHR5cGUge3ZhbHVlVHlwZXN9ICovXG4gIHRhcmdldE9iamVjdC50ID0gdmFsdWVUeXBlcy5OVU1CRVI7XG4gIHRhcmdldE9iamVjdC5uID0gMDtcbiAgdGFyZ2V0T2JqZWN0LnUgPSBudWxsO1xuICB0YXJnZXRPYmplY3QubyA9IG51bGw7XG4gIHRhcmdldE9iamVjdC5kID0gbnVsbDtcbiAgdGFyZ2V0T2JqZWN0LnMgPSBudWxsO1xuICBpZiAoIXJhd1ZhbHVlKSByZXR1cm4gdGFyZ2V0T2JqZWN0O1xuICBjb25zdCBudW0gPSArcmF3VmFsdWU7XG4gIGlmICghaXNOYU4obnVtKSkge1xuICAgIC8vIEl0J3MgYSBudW1iZXJcbiAgICB0YXJnZXRPYmplY3QubiA9IG51bTtcbiAgICByZXR1cm4gdGFyZ2V0T2JqZWN0O1xuICB9IGVsc2Uge1xuICAgIC8vIGxldCBzdHIgPSAvKiogQHR5cGUge1N0cmluZ30gKi8ocmF3VmFsdWUpLnRyaW0oKTtcbiAgICBsZXQgc3RyID0gLyoqIEB0eXBlIHtTdHJpbmd9ICovKHJhd1ZhbHVlKTtcbiAgICAvLyBQYXJzaW5nIG9wZXJhdG9ycyAoKz0sIC09LCAqPSkgbWFudWFsbHkgaXMgbXVjaCBmYXN0ZXIgdGhhbiB1c2luZyByZWdleCBoZXJlXG4gICAgaWYgKHN0clsxXSA9PT0gJz0nKSB7XG4gICAgICB0YXJnZXRPYmplY3QubyA9IHN0clswXTtcbiAgICAgIHN0ciA9IHN0ci5zbGljZSgyKTtcbiAgICB9XG4gICAgLy8gU2tpcCBleGVjIHJlZ2V4IGlmIHRoZSB2YWx1ZSB0eXBlIGlzIGNvbXBsZXggb3IgY29sb3IgdG8gYXZvaWQgbG9uZyByZWdleCBiYWNrdHJhY2tpbmdcbiAgICBjb25zdCB1bml0TWF0Y2ggPSBzdHIuaW5jbHVkZXMoJyAnKSA/IGZhbHNlIDogdW5pdHNFeGVjUmd4LmV4ZWMoc3RyKTtcbiAgICBpZiAodW5pdE1hdGNoKSB7XG4gICAgICAvLyBIYXMgYSBudW1iZXIgYW5kIGEgdW5pdFxuICAgICAgdGFyZ2V0T2JqZWN0LnQgPSB2YWx1ZVR5cGVzLlVOSVQ7XG4gICAgICB0YXJnZXRPYmplY3QubiA9ICt1bml0TWF0Y2hbMV07XG4gICAgICB0YXJnZXRPYmplY3QudSA9IHVuaXRNYXRjaFsyXTtcbiAgICAgIHJldHVybiB0YXJnZXRPYmplY3Q7XG4gICAgfSBlbHNlIGlmICh0YXJnZXRPYmplY3Qubykge1xuICAgICAgLy8gSGFzIGFuIG9wZXJhdG9yICgrPSwgLT0sICo9KVxuICAgICAgdGFyZ2V0T2JqZWN0Lm4gPSArc3RyO1xuICAgICAgcmV0dXJuIHRhcmdldE9iamVjdDtcbiAgICB9IGVsc2UgaWYgKGlzQ29sKHN0cikpIHtcbiAgICAgIC8vIElzIGEgY29sb3JcbiAgICAgIHRhcmdldE9iamVjdC50ID0gdmFsdWVUeXBlcy5DT0xPUjtcbiAgICAgIHRhcmdldE9iamVjdC5kID0gY29udmVydENvbG9yU3RyaW5nVmFsdWVzVG9SZ2JhQXJyYXkoc3RyKTtcbiAgICAgIHJldHVybiB0YXJnZXRPYmplY3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElzIGEgbW9yZSBjb21wbGV4IHN0cmluZyAoZ2VuZXJhbGx5IHN2ZyBjb29yZHMsIGNhbGMoKSBvciBmaWx0ZXJzIENTUyB2YWx1ZXMpXG4gICAgICBjb25zdCBtYXRjaGVkTnVtYmVycyA9IHN0ci5tYXRjaChkaWdpdFdpdGhFeHBvbmVudFJneCk7XG4gICAgICB0YXJnZXRPYmplY3QudCA9IHZhbHVlVHlwZXMuQ09NUExFWDtcbiAgICAgIHRhcmdldE9iamVjdC5kID0gbWF0Y2hlZE51bWJlcnMgPyBtYXRjaGVkTnVtYmVycy5tYXAoTnVtYmVyKSA6IFtdO1xuICAgICAgdGFyZ2V0T2JqZWN0LnMgPSBzdHIuc3BsaXQoZGlnaXRXaXRoRXhwb25lbnRSZ3gpIHx8IFtdO1xuICAgICAgcmV0dXJuIHRhcmdldE9iamVjdDtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtICB7VHdlZW59IHR3ZWVuXG4gKiBAcGFyYW0gIHtUd2VlbkRlY29tcG9zZWRWYWx1ZX0gdGFyZ2V0T2JqZWN0XG4gKiBAcmV0dXJuIHtUd2VlbkRlY29tcG9zZWRWYWx1ZX1cbiAqL1xuY29uc3QgZGVjb21wb3NlVHdlZW5WYWx1ZSA9ICh0d2VlbiwgdGFyZ2V0T2JqZWN0KSA9PiB7XG4gIHRhcmdldE9iamVjdC50ID0gdHdlZW4uX3ZhbHVlVHlwZTtcbiAgdGFyZ2V0T2JqZWN0Lm4gPSB0d2Vlbi5fdG9OdW1iZXI7XG4gIHRhcmdldE9iamVjdC51ID0gdHdlZW4uX3VuaXQ7XG4gIHRhcmdldE9iamVjdC5vID0gbnVsbDtcbiAgdGFyZ2V0T2JqZWN0LmQgPSBjbG9uZUFycmF5KHR3ZWVuLl90b051bWJlcnMpO1xuICB0YXJnZXRPYmplY3QucyA9IGNsb25lQXJyYXkodHdlZW4uX3N0cmluZ3MpO1xuICByZXR1cm4gdGFyZ2V0T2JqZWN0O1xufTtcblxuY29uc3QgZGVjb21wb3NlZE9yaWdpbmFsVmFsdWUgPSBjcmVhdGVEZWNvbXBvc2VkVmFsdWVUYXJnZXRPYmplY3QoKTtcblxuXG5cblxuY29uc3QgbG9va3VwcyA9IHtcbiAgLyoqIEB0eXBlIHtUd2VlblJlcGxhY2VMb29rdXBzfSAqL1xuICBfcmVwOiBuZXcgV2Vha01hcCgpLFxuICAvKiogQHR5cGUge1R3ZWVuQWRkaXRpdmVMb29rdXBzfSAqL1xuICBfYWRkOiBuZXcgTWFwKCksXG59O1xuXG4vKipcbiAqIEBwYXJhbSAge1RhcmdldH0gdGFyZ2V0XG4gKiBAcGFyYW0gIHtTdHJpbmd9IHByb3BlcnR5XG4gKiBAcGFyYW0gIHtTdHJpbmd9IGxvb2t1cFxuICogQHJldHVybiB7VHdlZW5Qcm9wZXJ0eVNpYmxpbmdzfVxuICovXG5jb25zdCBnZXRUd2VlblNpYmxpbmdzID0gKHRhcmdldCwgcHJvcGVydHksIGxvb2t1cCA9ICdfcmVwJykgPT4ge1xuICBjb25zdCBsb29rdXBNYXAgPSBsb29rdXBzW2xvb2t1cF07XG4gIGxldCB0YXJnZXRMb29rdXAgPSBsb29rdXBNYXAuZ2V0KHRhcmdldCk7XG4gIGlmICghdGFyZ2V0TG9va3VwKSB7XG4gICAgdGFyZ2V0TG9va3VwID0ge307XG4gICAgbG9va3VwTWFwLnNldCh0YXJnZXQsIHRhcmdldExvb2t1cCk7XG4gIH1cbiAgcmV0dXJuIHRhcmdldExvb2t1cFtwcm9wZXJ0eV0gPyB0YXJnZXRMb29rdXBbcHJvcGVydHldIDogdGFyZ2V0TG9va3VwW3Byb3BlcnR5XSA9IHtcbiAgICBfaGVhZDogbnVsbCxcbiAgICBfdGFpbDogbnVsbCxcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtUd2Vlbn0gcFxuICogQHBhcmFtICB7VHdlZW59IGNcbiAqIEByZXR1cm4ge051bWJlcnxCb29sZWFufVxuICovXG5jb25zdCBhZGRUd2VlblNvcnRNZXRob2QgPSAocCwgYykgPT4ge1xuICByZXR1cm4gcC5faXNPdmVycmlkZGVuIHx8IHAuX2Fic29sdXRlU3RhcnRUaW1lID4gYy5fYWJzb2x1dGVTdGFydFRpbWU7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7VHdlZW59IHR3ZWVuXG4gKi9cbmNvbnN0IG92ZXJyaWRlVHdlZW4gPSB0d2VlbiA9PiB7XG4gIHR3ZWVuLl9pc092ZXJsYXBwZWQgPSAxO1xuICB0d2Vlbi5faXNPdmVycmlkZGVuID0gMTtcbiAgdHdlZW4uX2NoYW5nZUR1cmF0aW9uID0gbWluVmFsdWU7XG4gIHR3ZWVuLl9jdXJyZW50VGltZSA9IG1pblZhbHVlO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtUd2Vlbn0gdHdlZW5cbiAqIEBwYXJhbSAge1R3ZWVuUHJvcGVydHlTaWJsaW5nc30gc2libGluZ3NcbiAqIEByZXR1cm4ge1R3ZWVufVxuICovXG5jb25zdCBjb21wb3NlVHdlZW4gPSAodHdlZW4sIHNpYmxpbmdzKSA9PiB7XG5cbiAgY29uc3QgdHdlZW5Db21wb3NpdGlvblR5cGUgPSB0d2Vlbi5fY29tcG9zaXRpb247XG5cbiAgLy8gSGFuZGxlIHJlcGxhY2VkIHR3ZWVuc1xuXG4gIGlmICh0d2VlbkNvbXBvc2l0aW9uVHlwZSA9PT0gY29tcG9zaXRpb25UeXBlcy5yZXBsYWNlKSB7XG5cbiAgICBjb25zdCB0d2VlbkFic1N0YXJ0VGltZSA9IHR3ZWVuLl9hYnNvbHV0ZVN0YXJ0VGltZTtcblxuICAgIGFkZENoaWxkKHNpYmxpbmdzLCB0d2VlbiwgYWRkVHdlZW5Tb3J0TWV0aG9kLCAnX3ByZXZSZXAnLCAnX25leHRSZXAnKTtcblxuICAgIGNvbnN0IHByZXZTaWJsaW5nID0gdHdlZW4uX3ByZXZSZXA7XG5cbiAgICAvLyBVcGRhdGUgdGhlIHByZXZpb3VzIHNpYmxpbmdzIGZvciBjb21wb3NpdGlvbiByZXBsYWNlIHR3ZWVuc1xuXG4gICAgaWYgKHByZXZTaWJsaW5nKSB7XG5cbiAgICAgIGNvbnN0IHByZXZQYXJlbnQgPSBwcmV2U2libGluZy5wYXJlbnQ7XG4gICAgICBjb25zdCBwcmV2QWJzRW5kVGltZSA9IHByZXZTaWJsaW5nLl9hYnNvbHV0ZVN0YXJ0VGltZSArIHByZXZTaWJsaW5nLl9jaGFuZ2VEdXJhdGlvbjtcblxuICAgICAgLy8gSGFuZGxlIGxvb3BlZCBhbmltYXRpb25zIHR3ZWVuXG5cbiAgICAgIGlmIChcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHByZXZpb3VzIHR3ZWVuIGlzIGZyb20gYSBkaWZmZXJlbnQgYW5pbWF0aW9uXG4gICAgICAgIHR3ZWVuLnBhcmVudC5pZCAhPT0gcHJldlBhcmVudC5pZCAmJlxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgYW5pbWF0aW9uIGhhcyBsb29wc1xuICAgICAgICBwcmV2UGFyZW50Lml0ZXJhdGlvbkNvdW50PiAxICYmXG4gICAgICAgIC8vIENoZWNrIGlmIF9hYnNvbHV0ZUNoYW5nZUVuZFRpbWUgb2YgbGFzdCBsb29wIG92ZXJsYXBzIHRoZSBjdXJyZW50IHR3ZWVuXG4gICAgICAgIHByZXZBYnNFbmRUaW1lICsgKHByZXZQYXJlbnQuZHVyYXRpb24gLSBwcmV2UGFyZW50Lml0ZXJhdGlvbkR1cmF0aW9uKSA+IHR3ZWVuQWJzU3RhcnRUaW1lXG4gICAgICApIHtcblxuICAgICAgICAvLyBUT0RPOiBGaW5kIGEgd2F5IHRvIG9ubHkgb3ZlcnJpZGUgdGhlIGl0ZXJhdGlvbnMgb3ZlcmxhcHBpbmcgd2l0aCB0aGUgdHdlZW5cbiAgICAgICAgb3ZlcnJpZGVUd2VlbihwcmV2U2libGluZyk7XG5cbiAgICAgICAgbGV0IHByZXZQcmV2U2libGluZyA9IHByZXZTaWJsaW5nLl9wcmV2UmVwO1xuXG4gICAgICAgIC8vIElmIHRoZSB0d2VlbiB3YXMgcGFydCBvZiBhIHNldCBvZiBrZXlmcmFtZXMsIG92ZXJyaWRlIGl0cyBzaWJsaW5nc1xuICAgICAgICB3aGlsZSAocHJldlByZXZTaWJsaW5nICYmIHByZXZQcmV2U2libGluZy5wYXJlbnQuaWQgPT09IHByZXZQYXJlbnQuaWQpIHtcbiAgICAgICAgICBvdmVycmlkZVR3ZWVuKHByZXZQcmV2U2libGluZyk7XG4gICAgICAgICAgcHJldlByZXZTaWJsaW5nID0gcHJldlByZXZTaWJsaW5nLl9wcmV2UmVwO1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgY29uc3QgYWJzb2x1dGVVcGRhdGVTdGFydFRpbWUgPSB0d2VlbkFic1N0YXJ0VGltZSAtIHR3ZWVuLl9kZWxheTtcblxuICAgICAgaWYgKHByZXZBYnNFbmRUaW1lID4gYWJzb2x1dGVVcGRhdGVTdGFydFRpbWUpIHtcblxuICAgICAgICBjb25zdCBwcmV2Q2hhbmdlU3RhcnRUaW1lID0gcHJldlNpYmxpbmcuX3N0YXJ0VGltZTtcbiAgICAgICAgY29uc3QgcHJldlRMT2Zmc2V0ID0gcHJldkFic0VuZFRpbWUgLSAocHJldkNoYW5nZVN0YXJ0VGltZSArIHByZXZTaWJsaW5nLl91cGRhdGVEdXJhdGlvbik7XG5cbiAgICAgICAgcHJldlNpYmxpbmcuX2NoYW5nZUR1cmF0aW9uID0gYWJzb2x1dGVVcGRhdGVTdGFydFRpbWUgLSBwcmV2VExPZmZzZXQgLSBwcmV2Q2hhbmdlU3RhcnRUaW1lO1xuICAgICAgICBwcmV2U2libGluZy5fY3VycmVudFRpbWUgPSBwcmV2U2libGluZy5fY2hhbmdlRHVyYXRpb247XG4gICAgICAgIHByZXZTaWJsaW5nLl9pc092ZXJsYXBwZWQgPSAxO1xuXG4gICAgICAgIGlmIChwcmV2U2libGluZy5fY2hhbmdlRHVyYXRpb24gPCBtaW5WYWx1ZSkge1xuICAgICAgICAgIG92ZXJyaWRlVHdlZW4ocHJldlNpYmxpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFBhdXNlIChhbmQgY2FuY2VsKSB0aGUgcGFyZW50IGlmIGl0IG9ubHkgY29udGFpbnMgb3ZlcmxhcHBlZCB0d2VlbnNcblxuICAgICAgbGV0IHBhdXNlUHJldlBhcmVudEFuaW1hdGlvbiA9IHRydWU7XG5cbiAgICAgIGZvckVhY2hDaGlsZHJlbihwcmV2UGFyZW50LCAoLyoqIEB0eXBlIFR3ZWVuICovdCkgPT4ge1xuICAgICAgICBpZiAoIXQuX2lzT3ZlcmxhcHBlZCkgcGF1c2VQcmV2UGFyZW50QW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHBhdXNlUHJldlBhcmVudEFuaW1hdGlvbikge1xuICAgICAgICBjb25zdCBwcmV2UGFyZW50VEwgPSBwcmV2UGFyZW50LnBhcmVudDtcbiAgICAgICAgaWYgKHByZXZQYXJlbnRUTCkge1xuICAgICAgICAgIGxldCBwYXVzZVByZXZQYXJlbnRUTCA9IHRydWU7XG4gICAgICAgICAgZm9yRWFjaENoaWxkcmVuKHByZXZQYXJlbnRUTCwgKC8qKiBAdHlwZSBKU0FuaW1hdGlvbiAqL2EpID0+IHtcbiAgICAgICAgICAgIGlmIChhICE9PSBwcmV2UGFyZW50KSB7XG4gICAgICAgICAgICAgIGZvckVhY2hDaGlsZHJlbihhLCAoLyoqIEB0eXBlIFR3ZWVuICovdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdC5faXNPdmVybGFwcGVkKSBwYXVzZVByZXZQYXJlbnRUTCA9IGZhbHNlO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAocGF1c2VQcmV2UGFyZW50VEwpIHtcbiAgICAgICAgICAgIHByZXZQYXJlbnRUTC5jYW5jZWwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJldlBhcmVudC5jYW5jZWwoKTtcbiAgICAgICAgICAvLyBQcmV2aW91c2x5LCBjYWxsaW5nIC5jYW5jZWwoKSBvbiBhIHRpbWVsaW5lIGNoaWxkIHdvdWxkIGFmZmVjdCB0aGUgcmVuZGVyIG9yZGVyIG9mIG90aGVyIGNoaWxkcmVuXG4gICAgICAgICAgLy8gV29ya2VkIGFyb3VuZCB0aGlzIGJ5IG1hcmtpbmcgaXQgYXMgLmNvbXBsZXRlZCBhbmQgdXNpbmcgLnBhdXNlKCkgZm9yIHNhZmUgcmVtb3ZhbCBpbiB0aGUgZW5naW5lIGxvb3BcbiAgICAgICAgICAvLyBUaGlzIGlzIG5vIGxvbmdlciBuZWVkZWQgc2luY2UgdGltZWxpbmUgdHdlZW4gY29tcG9zaXRpb24gaXMgbm93IGhhbmRsZWQgc2VwYXJhdGx5XG4gICAgICAgICAgLy8gS2VlcGluZyB0aGlzIGhlcmUgZm9yIHJlZmVyZW5jZVxuICAgICAgICAgIC8vIHByZXZQYXJlbnQuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAvLyBwcmV2UGFyZW50LnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIGxldCBuZXh0U2libGluZyA9IHR3ZWVuLl9uZXh0UmVwO1xuXG4gICAgLy8gLy8gQWxsIHRoZSBuZXh0IHNpYmxpbmdzIGFyZSBhdXRvbWF0aWNhbGx5IG92ZXJyaWRkZW5cblxuICAgIC8vIGlmIChuZXh0U2libGluZyAmJiBuZXh0U2libGluZy5fYWJzb2x1dGVTdGFydFRpbWUgPj0gdHdlZW5BYnNTdGFydFRpbWUpIHtcbiAgICAvLyAgIHdoaWxlIChuZXh0U2libGluZykge1xuICAgIC8vICAgICBvdmVycmlkZVR3ZWVuKG5leHRTaWJsaW5nKTtcbiAgICAvLyAgICAgbmV4dFNpYmxpbmcgPSBuZXh0U2libGluZy5fbmV4dFJlcDtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cbiAgICAvLyBpZiAobmV4dFNpYmxpbmcgJiYgbmV4dFNpYmxpbmcuX2Fic29sdXRlU3RhcnRUaW1lIDwgdHdlZW5BYnNTdGFydFRpbWUpIHtcbiAgICAvLyAgIHdoaWxlIChuZXh0U2libGluZykge1xuICAgIC8vICAgICBvdmVycmlkZVR3ZWVuKG5leHRTaWJsaW5nKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2codHdlZW4uaWQsIG5leHRTaWJsaW5nLmlkKTtcbiAgICAvLyAgICAgbmV4dFNpYmxpbmcgPSBuZXh0U2libGluZy5fbmV4dFJlcDtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cbiAgLy8gSGFuZGxlIGFkZGl0aXZlIHR3ZWVucyBjb21wb3NpdGlvblxuXG4gIH0gZWxzZSBpZiAodHdlZW5Db21wb3NpdGlvblR5cGUgPT09IGNvbXBvc2l0aW9uVHlwZXMuYmxlbmQpIHtcblxuICAgIGNvbnN0IGFkZGl0aXZlVHdlZW5TaWJsaW5ncyA9IGdldFR3ZWVuU2libGluZ3ModHdlZW4udGFyZ2V0LCB0d2Vlbi5wcm9wZXJ0eSwgJ19hZGQnKTtcbiAgICBjb25zdCBhZGRpdGl2ZUFuaW1hdGlvbiA9IGFkZEFkZGl0aXZlQW5pbWF0aW9uKGxvb2t1cHMuX2FkZCk7XG5cbiAgICBsZXQgbG9va3VwVHdlZW4gPSBhZGRpdGl2ZVR3ZWVuU2libGluZ3MuX2hlYWQ7XG5cbiAgICBpZiAoIWxvb2t1cFR3ZWVuKSB7XG4gICAgICBsb29rdXBUd2VlbiA9IHsgLi4udHdlZW4gfTtcbiAgICAgIGxvb2t1cFR3ZWVuLl9jb21wb3NpdGlvbiA9IGNvbXBvc2l0aW9uVHlwZXMucmVwbGFjZTtcbiAgICAgIGxvb2t1cFR3ZWVuLl91cGRhdGVEdXJhdGlvbiA9IG1pblZhbHVlO1xuICAgICAgbG9va3VwVHdlZW4uX3N0YXJ0VGltZSA9IDA7XG4gICAgICBsb29rdXBUd2Vlbi5fbnVtYmVycyA9IGNsb25lQXJyYXkodHdlZW4uX2Zyb21OdW1iZXJzKTtcbiAgICAgIGxvb2t1cFR3ZWVuLl9udW1iZXIgPSAwO1xuICAgICAgbG9va3VwVHdlZW4uX25leHQgPSBudWxsO1xuICAgICAgbG9va3VwVHdlZW4uX3ByZXYgPSBudWxsO1xuICAgICAgYWRkQ2hpbGQoYWRkaXRpdmVUd2VlblNpYmxpbmdzLCBsb29rdXBUd2Vlbik7XG4gICAgICBhZGRDaGlsZChhZGRpdGl2ZUFuaW1hdGlvbiwgbG9va3VwVHdlZW4pO1xuICAgIH1cblxuICAgIC8vIENvbnZlcnQgdGhlIHZhbHVlcyBvZiBUTyB0byBGUk9NIGFuZCBzZXQgVE8gdG8gMFxuXG4gICAgY29uc3QgdG9OdW1iZXIgPSB0d2Vlbi5fdG9OdW1iZXI7XG4gICAgdHdlZW4uX2Zyb21OdW1iZXIgPSBsb29rdXBUd2Vlbi5fZnJvbU51bWJlciAtIHRvTnVtYmVyO1xuICAgIHR3ZWVuLl90b051bWJlciA9IDA7XG4gICAgdHdlZW4uX251bWJlcnMgPSBjbG9uZUFycmF5KHR3ZWVuLl9mcm9tTnVtYmVycyk7XG4gICAgdHdlZW4uX251bWJlciA9IDA7XG4gICAgbG9va3VwVHdlZW4uX2Zyb21OdW1iZXIgPSB0b051bWJlcjtcblxuICAgIGlmICh0d2Vlbi5fdG9OdW1iZXJzKSB7XG4gICAgICBjb25zdCB0b051bWJlcnMgPSBjbG9uZUFycmF5KHR3ZWVuLl90b051bWJlcnMpO1xuICAgICAgaWYgKHRvTnVtYmVycykge1xuICAgICAgICB0b051bWJlcnMuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcbiAgICAgICAgICB0d2Vlbi5fZnJvbU51bWJlcnNbaV0gPSBsb29rdXBUd2Vlbi5fZnJvbU51bWJlcnNbaV0gLSB2YWx1ZTtcbiAgICAgICAgICB0d2Vlbi5fdG9OdW1iZXJzW2ldID0gMDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBsb29rdXBUd2Vlbi5fZnJvbU51bWJlcnMgPSB0b051bWJlcnM7XG4gICAgfVxuXG4gICAgYWRkQ2hpbGQoYWRkaXRpdmVUd2VlblNpYmxpbmdzLCB0d2VlbiwgbnVsbCwgJ19wcmV2QWRkJywgJ19uZXh0QWRkJyk7XG5cbiAgfVxuXG4gIHJldHVybiB0d2VlbjtcblxufTtcblxuLyoqXG4gKiBAcGFyYW0gIHtUd2Vlbn0gdHdlZW5cbiAqIEByZXR1cm4ge1R3ZWVufVxuICovXG5jb25zdCByZW1vdmVUd2VlblNsaWJsaW5ncyA9IHR3ZWVuID0+IHtcbiAgY29uc3QgdHdlZW5Db21wb3NpdGlvbiA9IHR3ZWVuLl9jb21wb3NpdGlvbjtcbiAgaWYgKHR3ZWVuQ29tcG9zaXRpb24gIT09IGNvbXBvc2l0aW9uVHlwZXMubm9uZSkge1xuICAgIGNvbnN0IHR3ZWVuVGFyZ2V0ID0gdHdlZW4udGFyZ2V0O1xuICAgIGNvbnN0IHR3ZWVuUHJvcGVydHkgPSB0d2Vlbi5wcm9wZXJ0eTtcbiAgICBjb25zdCByZXBsYWNlVHdlZW5zTG9va3VwID0gbG9va3Vwcy5fcmVwO1xuICAgIGNvbnN0IHJlcGxhY2VUYXJnZXRQcm9wcyA9IHJlcGxhY2VUd2VlbnNMb29rdXAuZ2V0KHR3ZWVuVGFyZ2V0KTtcbiAgICBjb25zdCB0d2VlblJlcGxhY2VTaWJsaW5ncyA9IHJlcGxhY2VUYXJnZXRQcm9wc1t0d2VlblByb3BlcnR5XTtcbiAgICByZW1vdmVDaGlsZCh0d2VlblJlcGxhY2VTaWJsaW5ncywgdHdlZW4sICdfcHJldlJlcCcsICdfbmV4dFJlcCcpO1xuICAgIGlmICh0d2VlbkNvbXBvc2l0aW9uID09PSBjb21wb3NpdGlvblR5cGVzLmJsZW5kKSB7XG4gICAgICBjb25zdCBhZGRUd2VlbnNMb29rdXAgPSBsb29rdXBzLl9hZGQ7XG4gICAgICBjb25zdCBhZGRUYXJnZXRQcm9wcyA9IGFkZFR3ZWVuc0xvb2t1cC5nZXQodHdlZW5UYXJnZXQpO1xuICAgICAgaWYgKCFhZGRUYXJnZXRQcm9wcykgcmV0dXJuO1xuICAgICAgY29uc3QgYWRkaXRpdmVUd2VlblNpYmxpbmdzID0gYWRkVGFyZ2V0UHJvcHNbdHdlZW5Qcm9wZXJ0eV07XG4gICAgICBjb25zdCBhZGRpdGl2ZUFuaW1hdGlvbiA9IGFkZGl0aXZlLmFuaW1hdGlvbjtcbiAgICAgIHJlbW92ZUNoaWxkKGFkZGl0aXZlVHdlZW5TaWJsaW5ncywgdHdlZW4sICdfcHJldkFkZCcsICdfbmV4dEFkZCcpO1xuICAgICAgLy8gSWYgb25seSBvbmUgdHdlZW4gaXMgbGVmdCBpbiB0aGUgYWRkaXRpdmUgbG9va3VwLCBpdCdzIHRoZSB0d2VlbiBsb29rdXBcbiAgICAgIGNvbnN0IGxvb2t1cFR3ZWVuID0gYWRkaXRpdmVUd2VlblNpYmxpbmdzLl9oZWFkO1xuICAgICAgaWYgKGxvb2t1cFR3ZWVuICYmIGxvb2t1cFR3ZWVuID09PSBhZGRpdGl2ZVR3ZWVuU2libGluZ3MuX3RhaWwpIHtcbiAgICAgICAgcmVtb3ZlQ2hpbGQoYWRkaXRpdmVUd2VlblNpYmxpbmdzLCBsb29rdXBUd2VlbiwgJ19wcmV2QWRkJywgJ19uZXh0QWRkJyk7XG4gICAgICAgIHJlbW92ZUNoaWxkKGFkZGl0aXZlQW5pbWF0aW9uLCBsb29rdXBUd2Vlbik7XG4gICAgICAgIGxldCBzaG91bGRDbGVhbiA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gYWRkVGFyZ2V0UHJvcHMpIHtcbiAgICAgICAgICBpZiAoYWRkVGFyZ2V0UHJvcHNbcHJvcF0uX2hlYWQpIHtcbiAgICAgICAgICAgIHNob3VsZENsZWFuID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3VsZENsZWFuKSB7XG4gICAgICAgICAgYWRkVHdlZW5zTG9va3VwLmRlbGV0ZSh0d2VlblRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHR3ZWVuO1xufTtcblxuXG5cblxuLyoqXG4gKiBAcGFyYW0gIHtUaW1lcn0gdGltZXJcbiAqIEByZXR1cm4ge1RpbWVyfVxuICovXG5jb25zdCByZXNldFRpbWVyUHJvcGVydGllcyA9IHRpbWVyID0+IHtcbiAgdGltZXIucGF1c2VkID0gdHJ1ZTtcbiAgdGltZXIuYmVnYW4gPSBmYWxzZTtcbiAgdGltZXIuY29tcGxldGVkID0gZmFsc2U7XG4gIHJldHVybiB0aW1lcjtcbn07XG5cbi8qKlxuICogQHBhcmFtICB7VGltZXJ9IHRpbWVyXG4gKiBAcmV0dXJuIHtUaW1lcn1cbiAqL1xuY29uc3QgcmV2aXZlVGltZXIgPSB0aW1lciA9PiB7XG4gIGlmICghdGltZXIuX2NhbmNlbGxlZCkgcmV0dXJuIHRpbWVyO1xuICBpZiAodGltZXIuX2hhc0NoaWxkcmVuKSB7XG4gICAgZm9yRWFjaENoaWxkcmVuKHRpbWVyLCByZXZpdmVUaW1lcik7XG4gIH0gZWxzZSB7XG4gICAgZm9yRWFjaENoaWxkcmVuKHRpbWVyLCAoLyoqIEB0eXBlIHtUd2Vlbn0gdHdlZW4qL3R3ZWVuKSA9PiB7XG4gICAgICBpZiAodHdlZW4uX2NvbXBvc2l0aW9uICE9PSBjb21wb3NpdGlvblR5cGVzLm5vbmUpIHtcbiAgICAgICAgY29tcG9zZVR3ZWVuKHR3ZWVuLCBnZXRUd2VlblNpYmxpbmdzKHR3ZWVuLnRhcmdldCwgdHdlZW4ucHJvcGVydHkpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICB0aW1lci5fY2FuY2VsbGVkID0gMDtcbiAgcmV0dXJuIHRpbWVyO1xufTtcblxubGV0IHRpbWVySWQgPSAwO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgdXNlZCB0byBjcmVhdGUgVGltZXJzLCBBbmltYXRpb25zIGFuZCBUaW1lbGluZXNcbiAqL1xuY2xhc3MgVGltZXIgZXh0ZW5kcyBDbG9jayB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge1RpbWVyUGFyYW1zfSBbcGFyYW1ldGVyc11cbiAgICogQHBhcmFtIHtUaW1lbGluZX0gW3BhcmVudF1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtwYXJlbnRQb3NpdGlvbl1cbiAgICovXG4gIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMgPSB7fSwgcGFyZW50ID0gbnVsbCwgcGFyZW50UG9zaXRpb24gPSAwKSB7XG5cbiAgICBzdXBlcigwKTtcblxuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgZGVsYXksXG4gICAgICBkdXJhdGlvbixcbiAgICAgIHJldmVyc2VkLFxuICAgICAgYWx0ZXJuYXRlLFxuICAgICAgbG9vcCxcbiAgICAgIGxvb3BEZWxheSxcbiAgICAgIGF1dG9wbGF5LFxuICAgICAgZnJhbWVSYXRlLFxuICAgICAgcGxheWJhY2tSYXRlLFxuICAgICAgb25Db21wbGV0ZSxcbiAgICAgIG9uTG9vcCxcbiAgICAgIG9uUGF1c2UsXG4gICAgICBvbkJlZ2luLFxuICAgICAgb25CZWZvcmVVcGRhdGUsXG4gICAgICBvblVwZGF0ZSxcbiAgICB9ID0gcGFyYW1ldGVycztcblxuICAgIGlmIChnbG9iYWxzLnNjb3BlKSBnbG9iYWxzLnNjb3BlLnJldmVydGlibGVzLnB1c2godGhpcyk7XG5cbiAgICBjb25zdCB0aW1lckluaXRUaW1lID0gcGFyZW50ID8gMCA6IGVuZ2luZS5fZWxhcHNlZFRpbWU7XG4gICAgY29uc3QgdGltZXJEZWZhdWx0cyA9IHBhcmVudCA/IHBhcmVudC5kZWZhdWx0cyA6IGdsb2JhbHMuZGVmYXVsdHM7XG4gICAgY29uc3QgdGltZXJEZWxheSA9IC8qKiBAdHlwZSB7TnVtYmVyfSAqLyhpc0ZuYyhkZWxheSkgfHwgaXNVbmQoZGVsYXkpID8gdGltZXJEZWZhdWx0cy5kZWxheSA6ICtkZWxheSk7XG4gICAgY29uc3QgdGltZXJEdXJhdGlvbiA9IGlzRm5jKGR1cmF0aW9uKSB8fCBpc1VuZChkdXJhdGlvbikgPyBJbmZpbml0eSA6ICtkdXJhdGlvbjtcbiAgICBjb25zdCB0aW1lckxvb3AgPSBzZXRWYWx1ZShsb29wLCB0aW1lckRlZmF1bHRzLmxvb3ApO1xuICAgIGNvbnN0IHRpbWVyTG9vcERlbGF5ID0gc2V0VmFsdWUobG9vcERlbGF5LCB0aW1lckRlZmF1bHRzLmxvb3BEZWxheSk7XG4gICAgY29uc3QgdGltZXJJdGVyYXRpb25Db3VudCA9IHRpbWVyTG9vcCA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lckxvb3AgPT09IEluZmluaXR5IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqLyh0aW1lckxvb3ApIDwgMCA/IEluZmluaXR5IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovKHRpbWVyTG9vcCkgKyAxO1xuXG4gICAgbGV0IG9mZnNldFBvc2l0aW9uID0gMDtcblxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIG9mZnNldFBvc2l0aW9uID0gcGFyZW50UG9zaXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzdGFydFRpbWUgPSBub3coKTtcbiAgICAgIC8vIE1ha2Ugc3VyZSB0byB0aWNrIHRoZSBlbmdpbmUgb25jZSBpZiBzdXNwZW5kZWQgdG8gYXZvaWQgYmlnIGdhcHMgd2l0aCB0aGUgZm9sbG93aW5nIG9mZnNldFBvc2l0aW9uIGNhbGN1bGF0aW9uXG4gICAgICBpZiAoZW5naW5lLnBhdXNlZCkge1xuICAgICAgICBlbmdpbmUucmVxdWVzdFRpY2soc3RhcnRUaW1lKTtcbiAgICAgICAgc3RhcnRUaW1lID0gZW5naW5lLl9lbGFwc2VkVGltZTtcbiAgICAgIH1cbiAgICAgIG9mZnNldFBvc2l0aW9uID0gc3RhcnRUaW1lIC0gZW5naW5lLl9zdGFydFRpbWU7XG4gICAgfVxuXG4gICAgLy8gVGltZXIncyBwYXJhbWV0ZXJzXG4gICAgdGhpcy5pZCA9ICFpc1VuZChpZCkgPyBpZCA6ICsrdGltZXJJZDtcbiAgICAvKiogQHR5cGUge1RpbWVsaW5lfSAqL1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIC8vIFRvdGFsIGR1cmF0aW9uIG9mIHRoZSB0aW1lclxuICAgIHRoaXMuZHVyYXRpb24gPSBjbGFtcEluZmluaXR5KCgodGltZXJEdXJhdGlvbiArIHRpbWVyTG9vcERlbGF5KSAqIHRpbWVySXRlcmF0aW9uQ291bnQpIC0gdGltZXJMb29wRGVsYXkpIHx8IG1pblZhbHVlO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLmJhY2t3YXJkcyA9IGZhbHNlO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMuYmVnYW4gPSBmYWxzZTtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPHRoaXM+fSAqL1xuICAgIHRoaXMub25CZWdpbiA9IG9uQmVnaW4gfHwgdGltZXJEZWZhdWx0cy5vbkJlZ2luO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8dGhpcz59ICovXG4gICAgdGhpcy5vbkJlZm9yZVVwZGF0ZSA9IG9uQmVmb3JlVXBkYXRlIHx8IHRpbWVyRGVmYXVsdHMub25CZWZvcmVVcGRhdGU7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazx0aGlzPn0gKi9cbiAgICB0aGlzLm9uVXBkYXRlID0gb25VcGRhdGUgfHwgdGltZXJEZWZhdWx0cy5vblVwZGF0ZTtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPHRoaXM+fSAqL1xuICAgIHRoaXMub25Mb29wID0gb25Mb29wIHx8IHRpbWVyRGVmYXVsdHMub25Mb29wO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8dGhpcz59ICovXG4gICAgdGhpcy5vblBhdXNlID0gb25QYXVzZSB8fCB0aW1lckRlZmF1bHRzLm9uUGF1c2U7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazx0aGlzPn0gKi9cbiAgICB0aGlzLm9uQ29tcGxldGUgPSBvbkNvbXBsZXRlIHx8IHRpbWVyRGVmYXVsdHMub25Db21wbGV0ZTtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLml0ZXJhdGlvbkR1cmF0aW9uID0gdGltZXJEdXJhdGlvbjsgLy8gRHVyYXRpb24gb2Ygb25lIGxvb3BcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLml0ZXJhdGlvbkNvdW50ID0gdGltZXJJdGVyYXRpb25Db3VudDsgLy8gTnVtYmVyIG9mIGxvb3BzXG4gICAgLyoqIEB0eXBlIHtCb29sZWFufFNjcm9sbE9ic2VydmVyfSAqL1xuICAgIHRoaXMuX2F1dG9wbGF5ID0gcGFyZW50ID8gZmFsc2UgOiBzZXRWYWx1ZShhdXRvcGxheSwgdGltZXJEZWZhdWx0cy5hdXRvcGxheSk7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5fb2Zmc2V0ID0gb2Zmc2V0UG9zaXRpb247XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5fZGVsYXkgPSB0aW1lckRlbGF5O1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuX2xvb3BEZWxheSA9IHRpbWVyTG9vcERlbGF5O1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuX2l0ZXJhdGlvblRpbWUgPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuX2N1cnJlbnRJdGVyYXRpb24gPSAwOyAvLyBDdXJyZW50IGxvb3AgaW5kZXhcbiAgICAvKiogQHR5cGUge0Z1bmN0aW9ufSAqL1xuICAgIHRoaXMuX3Jlc29sdmUgPSBub29wOyAvLyBVc2VkIGJ5IC50aGVuKClcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuX3JldmVyc2VkID0gK3NldFZhbHVlKHJldmVyc2VkLCB0aW1lckRlZmF1bHRzLnJldmVyc2VkKTtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLl9yZXZlcnNlID0gdGhpcy5fcmV2ZXJzZWQ7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5fY2FuY2VsbGVkID0gMDtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy5fYWx0ZXJuYXRlID0gc2V0VmFsdWUoYWx0ZXJuYXRlLCB0aW1lckRlZmF1bHRzLmFsdGVybmF0ZSk7XG4gICAgLyoqIEB0eXBlIHtSZW5kZXJhYmxlfSAqL1xuICAgIHRoaXMuX3ByZXYgPSBudWxsO1xuICAgIC8qKiBAdHlwZSB7UmVuZGVyYWJsZX0gKi9cbiAgICB0aGlzLl9uZXh0ID0gbnVsbDtcblxuICAgIC8vIENsb2NrJ3MgcGFyYW1ldGVyc1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuX2VsYXBzZWRUaW1lID0gdGltZXJJbml0VGltZTtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLl9zdGFydFRpbWUgPSB0aW1lckluaXRUaW1lO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuX2xhc3RUaW1lID0gdGltZXJJbml0VGltZTtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLl9mcHMgPSBzZXRWYWx1ZShmcmFtZVJhdGUsIHRpbWVyRGVmYXVsdHMuZnJhbWVSYXRlKTtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLl9zcGVlZCA9IHNldFZhbHVlKHBsYXliYWNrUmF0ZSwgdGltZXJEZWZhdWx0cy5wbGF5YmFja1JhdGUpO1xuICB9XG5cbiAgZ2V0IGNhbmNlbGxlZCgpIHtcbiAgICByZXR1cm4gISF0aGlzLl9jYW5jZWxsZWQ7XG4gIH1cblxuICAvKiogQHBhcmFtIHtCb29sZWFufSBjYW5jZWxsZWQgICovXG4gIHNldCBjYW5jZWxsZWQoY2FuY2VsbGVkKSB7XG4gICAgY2FuY2VsbGVkID8gdGhpcy5jYW5jZWwoKSA6IHRoaXMucmVzZXQoMSkucGxheSgpO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRUaW1lKCkge1xuICAgIHJldHVybiBjbGFtcChyb3VuZCh0aGlzLl9jdXJyZW50VGltZSwgZ2xvYmFscy5wcmVjaXNpb24pLCAtdGhpcy5fZGVsYXksIHRoaXMuZHVyYXRpb24pO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7TnVtYmVyfSB0aW1lICAqL1xuICBzZXQgY3VycmVudFRpbWUodGltZSkge1xuICAgIGNvbnN0IHBhdXNlZCA9IHRoaXMucGF1c2VkO1xuICAgIC8vIFBhdXNpbmcgdGhlIHRpbWVyIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCB0aW1lIGp1bXBzIG9uIGEgcnVubmluZyBpbnN0YW5jZVxuICAgIHRoaXMucGF1c2UoKS5zZWVrKCt0aW1lKTtcbiAgICBpZiAoIXBhdXNlZCkgdGhpcy5yZXN1bWUoKTtcbiAgfVxuXG4gIGdldCBpdGVyYXRpb25DdXJyZW50VGltZSgpIHtcbiAgICByZXR1cm4gcm91bmQodGhpcy5faXRlcmF0aW9uVGltZSwgZ2xvYmFscy5wcmVjaXNpb24pO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7TnVtYmVyfSB0aW1lICAqL1xuICBzZXQgaXRlcmF0aW9uQ3VycmVudFRpbWUodGltZSkge1xuICAgIHRoaXMuY3VycmVudFRpbWUgPSAodGhpcy5pdGVyYXRpb25EdXJhdGlvbiAqIHRoaXMuX2N1cnJlbnRJdGVyYXRpb24pICsgdGltZTtcbiAgfVxuXG4gIGdldCBwcm9ncmVzcygpIHtcbiAgICByZXR1cm4gY2xhbXAocm91bmQodGhpcy5fY3VycmVudFRpbWUgLyB0aGlzLmR1cmF0aW9uLCA1KSwgMCwgMSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtOdW1iZXJ9IHByb2dyZXNzICAqL1xuICBzZXQgcHJvZ3Jlc3MocHJvZ3Jlc3MpIHtcbiAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGhpcy5kdXJhdGlvbiAqIHByb2dyZXNzO1xuICB9XG5cbiAgZ2V0IGl0ZXJhdGlvblByb2dyZXNzKCkge1xuICAgIHJldHVybiBjbGFtcChyb3VuZCh0aGlzLl9pdGVyYXRpb25UaW1lIC8gdGhpcy5pdGVyYXRpb25EdXJhdGlvbiwgNSksIDAsIDEpO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7TnVtYmVyfSBwcm9ncmVzcyAgKi9cbiAgc2V0IGl0ZXJhdGlvblByb2dyZXNzKHByb2dyZXNzKSB7XG4gICAgY29uc3QgaXRlcmF0aW9uRHVyYXRpb24gPSB0aGlzLml0ZXJhdGlvbkR1cmF0aW9uO1xuICAgIHRoaXMuY3VycmVudFRpbWUgPSAoaXRlcmF0aW9uRHVyYXRpb24gKiB0aGlzLl9jdXJyZW50SXRlcmF0aW9uKSArIChpdGVyYXRpb25EdXJhdGlvbiAqIHByb2dyZXNzKTtcbiAgfVxuXG4gIGdldCBjdXJyZW50SXRlcmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50SXRlcmF0aW9uO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7TnVtYmVyfSBpdGVyYXRpb25Db3VudCAgKi9cbiAgc2V0IGN1cnJlbnRJdGVyYXRpb24oaXRlcmF0aW9uQ291bnQpIHtcbiAgICB0aGlzLmN1cnJlbnRUaW1lID0gKHRoaXMuaXRlcmF0aW9uRHVyYXRpb24gKiBjbGFtcCgraXRlcmF0aW9uQ291bnQsIDAsIHRoaXMuaXRlcmF0aW9uQ291bnQgLSAxKSk7XG4gIH1cblxuICBnZXQgcmV2ZXJzZWQoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5fcmV2ZXJzZWQ7XG4gIH1cblxuICAvKiogQHBhcmFtIHtCb29sZWFufSByZXZlcnNlICAqL1xuICBzZXQgcmV2ZXJzZWQocmV2ZXJzZSkge1xuICAgIHJldmVyc2UgPyB0aGlzLnJldmVyc2UoKSA6IHRoaXMucGxheSgpO1xuICB9XG5cbiAgZ2V0IHNwZWVkKCkge1xuICAgIHJldHVybiBzdXBlci5zcGVlZDtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge051bWJlcn0gcGxheWJhY2tSYXRlICAqL1xuICBzZXQgc3BlZWQocGxheWJhY2tSYXRlKSB7XG4gICAgc3VwZXIuc3BlZWQgPSBwbGF5YmFja1JhdGU7XG4gICAgdGhpcy5yZXNldFRpbWUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGludGVybmFsUmVuZGVyXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuICByZXNldChpbnRlcm5hbFJlbmRlciA9IDApIHtcbiAgICAvLyBJZiBjYW5jZWxsZWQsIHJldml2ZSB0aGUgdGltZXIgYmVmb3JlIHJlbmRlcmluZyBpbiBvcmRlciB0byBoYXZlIHByb3BlcnRseSBjb21wb3NlZCB0d2VlbnMgc2libGluZ3NcbiAgICByZXZpdmVUaW1lcih0aGlzKTtcbiAgICBpZiAodGhpcy5fcmV2ZXJzZWQgJiYgIXRoaXMuX3JldmVyc2UpIHRoaXMucmV2ZXJzZWQgPSBmYWxzZTtcbiAgICAvLyBSZW5kZXJpbmcgYmVmb3JlIHVwZGF0aW5nIHRoZSBjb21wbGV0ZWQgZmxhZyB0byBwcmV2ZW50IHNraXBzIGFuZCB0byBtYWtlIHN1cmUgdGhlIHByb3BlcnRpZXMgYXJlIG5vdCBvdmVycmlkZGVuXG4gICAgLy8gU2V0dGluZyB0aGUgaXRlcmF0aW9uVGltZSBhdCB0aGUgZW5kIHRvIGZvcmNlIHRoZSByZW5kZXJpbmcgdG8gaGFwcGVuZCBiYWNrd2FyZHMsIG90aGVyd2lzZSBjYWxsaW5nIC5yZXNldCgpIG9uIFRpbWVsaW5lcyBtaWdodCBub3QgcmVuZGVyIGNoaWxkcmVuIGluIHRoZSByaWdodCBvcmRlclxuICAgIC8vIE5PVEU6IFRoaXMgaXMgb25seSByZXF1aXJlZCBmb3IgVGltZWxpbmVzIGFuZCBtaWdodCBiZSBiZXR0ZXIgdG8gbW92ZSB0byB0aGUgVGltZWxpbmUgY2xhc3M/XG4gICAgdGhpcy5faXRlcmF0aW9uVGltZSA9IHRoaXMuaXRlcmF0aW9uRHVyYXRpb247XG4gICAgLy8gU2V0IHRpY2tNb2RlIHRvIHRpY2tNb2Rlcy5GT1JDRSB0byBmb3JjZSByZW5kZXJpbmdcbiAgICB0aWNrKHRoaXMsIDAsIDEsIGludGVybmFsUmVuZGVyLCB0aWNrTW9kZXMuRk9SQ0UpO1xuICAgIC8vIFJlc2V0IHRpbWVyIHByb3BlcnRpZXMgYWZ0ZXIgcmV2aXZlIC8gcmVuZGVyIHRvIG1ha2Ugc3VyZSB0aGUgcHJvcHMgYXJlIG5vdCB1cGRhdGVkIGFnYWluXG4gICAgcmVzZXRUaW1lclByb3BlcnRpZXModGhpcyk7XG4gICAgLy8gQWxzbyByZXNldCBjaGlsZHJlbiBwcm9wZXJ0aWVzXG4gICAgaWYgKHRoaXMuX2hhc0NoaWxkcmVuKSB7XG4gICAgICBmb3JFYWNoQ2hpbGRyZW4odGhpcywgcmVzZXRUaW1lclByb3BlcnRpZXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGludGVybmFsUmVuZGVyXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuICBpbml0KGludGVybmFsUmVuZGVyID0gMCkge1xuICAgIHRoaXMuZnBzID0gdGhpcy5fZnBzO1xuICAgIHRoaXMuc3BlZWQgPSB0aGlzLl9zcGVlZDtcbiAgICAvLyBNYW51YWxseSBjYWxsaW5nIC5pbml0KCkgb24gdGltZWxpbmVzIHNob3VsZCByZW5kZXIgYWxsIGNoaWxkcmVuIGludGlhbCBzdGF0ZVxuICAgIC8vIEZvcmNlcyBhbGwgY2hpbGRyZW4gdG8gcmVuZGVyIG9uY2UgdGhlbiByZW5kZXIgdG8gMCB3aGVuIHJlc2V0ZWRcbiAgICBpZiAoIWludGVybmFsUmVuZGVyICYmIHRoaXMuX2hhc0NoaWxkcmVuKSB7XG4gICAgICB0aWNrKHRoaXMsIHRoaXMuZHVyYXRpb24sIDEsIGludGVybmFsUmVuZGVyLCB0aWNrTW9kZXMuRk9SQ0UpO1xuICAgIH1cbiAgICB0aGlzLnJlc2V0KGludGVybmFsUmVuZGVyKTtcbiAgICAvLyBNYWtlIHN1cmUgdG8gc2V0IGF1dG9wbGF5IHRvIGZhbHNlIHRvIGNoaWxkIHRpbWVycyBzbyBpdCBkb2Vzbid0IGF0dGVtcHQgdG8gYXV0b3BsYXkgLyBsaW5rXG4gICAgY29uc3QgYXV0b3BsYXkgPSB0aGlzLl9hdXRvcGxheTtcbiAgICBpZiAoYXV0b3BsYXkgPT09IHRydWUpIHtcbiAgICAgIHRoaXMucmVzdW1lKCk7XG4gICAgfSBlbHNlIGlmIChhdXRvcGxheSAmJiAhaXNVbmQoLyoqIEB0eXBlIHtTY3JvbGxPYnNlcnZlcn0gKi8oYXV0b3BsYXkpLmxpbmtlZCkpIHtcbiAgICAgIC8qKiBAdHlwZSB7U2Nyb2xsT2JzZXJ2ZXJ9ICovKGF1dG9wbGF5KS5saW5rKHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHt0aGlzfSAqL1xuICByZXNldFRpbWUoKSB7XG4gICAgY29uc3QgdGltZVNjYWxlID0gMSAvICh0aGlzLl9zcGVlZCAqIGVuZ2luZS5fc3BlZWQpO1xuICAgIHRoaXMuX3N0YXJ0VGltZSA9IG5vdygpIC0gKHRoaXMuX2N1cnJlbnRUaW1lICsgdGhpcy5fZGVsYXkpICogdGltZVNjYWxlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge3RoaXN9ICovXG4gIHBhdXNlKCkge1xuICAgIGlmICh0aGlzLnBhdXNlZCkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgIHRoaXMub25QYXVzZSh0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHt0aGlzfSAqL1xuICByZXN1bWUoKSB7XG4gICAgaWYgKCF0aGlzLnBhdXNlZCkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAvLyBXZSBjYW4gc2FmZWx5IGltZWRpYXRseSByZW5kZXIgYSB0aW1lciB0aGF0IGhhcyBubyBkdXJhdGlvbiBhbmQgbm8gY2hpbGRyZW5cbiAgICBpZiAodGhpcy5kdXJhdGlvbiA8PSBtaW5WYWx1ZSAmJiAhdGhpcy5faGFzQ2hpbGRyZW4pIHtcbiAgICAgIHRpY2sodGhpcywgbWluVmFsdWUsIDAsIDAsIHRpY2tNb2Rlcy5GT1JDRSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5fcnVubmluZykge1xuICAgICAgICBhZGRDaGlsZChlbmdpbmUsIHRoaXMpO1xuICAgICAgICBlbmdpbmUuX2hhc0NoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcnVubmluZyA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLnJlc2V0VGltZSgpO1xuICAgICAgLy8gRm9yY2VzIHRoZSB0aW1lciB0byBhZHZhbmNlIGJ5IGF0IGxlYXN0IG9uZSBmcmFtZSB3aGVuIHRoZSBuZXh0IHRpY2sgb2NjdXJzXG4gICAgICB0aGlzLl9zdGFydFRpbWUgLT0gMTI7XG4gICAgICBlbmdpbmUud2FrZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHt0aGlzfSAqL1xuICByZXN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnJlc2V0KDApLnJlc3VtZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge051bWJlcn0gdGltZVxuICAgKiBAcGFyYW0gIHtCb29sZWFufE51bWJlcn0gW211dGVDYWxsYmFja3NdXG4gICAqIEBwYXJhbSAge0Jvb2xlYW58TnVtYmVyfSBbaW50ZXJuYWxSZW5kZXJdXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuICBzZWVrKHRpbWUsIG11dGVDYWxsYmFja3MgPSAwLCBpbnRlcm5hbFJlbmRlciA9IDApIHtcbiAgICAvLyBSZWNvbXBvc2UgdGhlIHR3ZWVuIHNpYmxpbmdzIGluIGNhc2UgdGhlIHRpbWVyIGhhcyBiZWVuIGNhbmNlbGxlZFxuICAgIHJldml2ZVRpbWVyKHRoaXMpO1xuICAgIC8vIElmIHlvdSBzZWVrIGEgY29tcGxldGVkIGFuaW1hdGlvbiwgb3RoZXJ3aXNlIHRoZSBuZXh0IHBsYXkgd2lsbCBzdGFydHMgYXQgMFxuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgY29uc3QgaXNQYXVzZWQgPSB0aGlzLnBhdXNlZDtcbiAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgLy8gdGltZXIsIHRpbWUsIG11dGVDYWxsYmFja3MsIGludGVybmFsUmVuZGVyLCB0aWNrTW9kZVxuICAgIHRpY2sodGhpcywgdGltZSArIHRoaXMuX2RlbGF5LCB+fm11dGVDYWxsYmFja3MsIH5+aW50ZXJuYWxSZW5kZXIsIHRpY2tNb2Rlcy5BVVRPKTtcbiAgICByZXR1cm4gaXNQYXVzZWQgPyB0aGlzIDogdGhpcy5yZXN1bWUoKTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHt0aGlzfSAqL1xuICBhbHRlcm5hdGUoKSB7XG4gICAgY29uc3QgcmV2ZXJzZWQgPSB0aGlzLl9yZXZlcnNlZDtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuaXRlcmF0aW9uQ291bnQ7XG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLml0ZXJhdGlvbkR1cmF0aW9uO1xuICAgIC8vIENhbGN1bGF0ZSB0aGUgbWF4aW11bSBpdGVyYXRpb25zIHBvc3NpYmxlIGdpdmVuIHRoZSBpdGVyYXRpb24gZHVyYXRpb25cbiAgICBjb25zdCBpdGVyYXRpb25zID0gY291bnQgPT09IEluZmluaXR5ID8gZmxvb3IobWF4VmFsdWUgLyBkdXJhdGlvbikgOiBjb3VudDtcbiAgICB0aGlzLl9yZXZlcnNlZCA9ICsodGhpcy5fYWx0ZXJuYXRlICYmICEoaXRlcmF0aW9ucyAlIDIpID8gcmV2ZXJzZWQgOiAhcmV2ZXJzZWQpO1xuICAgIGlmIChjb3VudCA9PT0gSW5maW5pdHkpIHtcbiAgICAgIC8vIEhhbmRsZSBpbmZpbml0ZSBsb29wcyB0byBsb29wIG9uIHRoZW1zZWxmXG4gICAgICB0aGlzLml0ZXJhdGlvblByb2dyZXNzID0gdGhpcy5fcmV2ZXJzZWQgPyAxIC0gdGhpcy5pdGVyYXRpb25Qcm9ncmVzcyA6IHRoaXMuaXRlcmF0aW9uUHJvZ3Jlc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VlaygoZHVyYXRpb24gKiBpdGVyYXRpb25zKSAtIHRoaXMuX2N1cnJlbnRUaW1lKTtcbiAgICB9XG4gICAgdGhpcy5yZXNldFRpbWUoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHt0aGlzfSAqL1xuICBwbGF5KCkge1xuICAgIGlmICh0aGlzLl9yZXZlcnNlZCkgdGhpcy5hbHRlcm5hdGUoKTtcbiAgICByZXR1cm4gdGhpcy5yZXN1bWUoKTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHt0aGlzfSAqL1xuICByZXZlcnNlKCkge1xuICAgIGlmICghdGhpcy5fcmV2ZXJzZWQpIHRoaXMuYWx0ZXJuYXRlKCk7XG4gICAgcmV0dXJuIHRoaXMucmVzdW1lKCk7XG4gIH1cblxuICAvLyBUT0RPOiBNb3ZlIGFsbCB0aGUgYW5pbWF0aW9uIC8gdHdlZW5zIC8gY2hpbGRyZW4gcmVsYXRlZCBjb2RlIHRvIEFuaW1hdGlvbiAvIFRpbWVsaW5lXG5cbiAgLyoqIEByZXR1cm4ge3RoaXN9ICovXG4gIGNhbmNlbCgpIHtcbiAgICBpZiAodGhpcy5faGFzQ2hpbGRyZW4pIHtcbiAgICAgIGZvckVhY2hDaGlsZHJlbih0aGlzLCAoLyoqIEB0eXBlIHtSZW5kZXJhYmxlfSAqL2NoaWxkKSA9PiBjaGlsZC5jYW5jZWwoKSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvckVhY2hDaGlsZHJlbih0aGlzLCByZW1vdmVUd2VlblNsaWJsaW5ncyk7XG4gICAgfVxuICAgIHRoaXMuX2NhbmNlbGxlZCA9IDE7XG4gICAgLy8gUGF1c2luZyB0aGUgdGltZXIgcmVtb3ZlcyBpdCBmcm9tIHRoZSBlbmdpbmVcbiAgICByZXR1cm4gdGhpcy5wYXVzZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge051bWJlcn0gbmV3RHVyYXRpb25cbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIHN0cmV0Y2gobmV3RHVyYXRpb24pIHtcbiAgICBjb25zdCBjdXJyZW50RHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uO1xuICAgIGNvbnN0IG5vcm1saXplZER1cmF0aW9uID0gbm9ybWFsaXplVGltZShuZXdEdXJhdGlvbik7XG4gICAgaWYgKGN1cnJlbnREdXJhdGlvbiA9PT0gbm9ybWxpemVkRHVyYXRpb24pIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IHRpbWVTY2FsZSA9IG5ld0R1cmF0aW9uIC8gY3VycmVudER1cmF0aW9uO1xuICAgIGNvbnN0IGlzU2V0dGVyID0gbmV3RHVyYXRpb24gPD0gbWluVmFsdWU7XG4gICAgdGhpcy5kdXJhdGlvbiA9IGlzU2V0dGVyID8gbWluVmFsdWUgOiBub3JtbGl6ZWREdXJhdGlvbjtcbiAgICB0aGlzLml0ZXJhdGlvbkR1cmF0aW9uID0gaXNTZXR0ZXIgPyBtaW5WYWx1ZSA6IG5vcm1hbGl6ZVRpbWUodGhpcy5pdGVyYXRpb25EdXJhdGlvbiAqIHRpbWVTY2FsZSk7XG4gICAgdGhpcy5fb2Zmc2V0ICo9IHRpbWVTY2FsZTtcbiAgICB0aGlzLl9kZWxheSAqPSB0aW1lU2NhbGU7XG4gICAgdGhpcy5fbG9vcERlbGF5ICo9IHRpbWVTY2FsZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gLyoqXG4gICAqIENhbmNlbHMgdGhlIHRpbWVyIGJ5IHNlZWtpbmcgaXQgYmFjayB0byAwIGFuZCByZXZlcnRpbmcgdGhlIGF0dGFjaGVkIHNjcm9sbGVyIGlmIG5lY2Vzc2FyeVxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgcmV2ZXJ0KCkge1xuICAgIHRpY2sodGhpcywgMCwgMSwgMCwgdGlja01vZGVzLkFVVE8pO1xuICAgIGNvbnN0IGFwID0gLyoqIEB0eXBlIHtTY3JvbGxPYnNlcnZlcn0gKi8odGhpcy5fYXV0b3BsYXkpO1xuICAgIGlmIChhcCAmJiBhcC5saW5rZWQgJiYgYXAubGlua2VkID09PSB0aGlzKSBhcC5yZXZlcnQoKTtcbiAgICByZXR1cm4gdGhpcy5jYW5jZWwoKTtcbiAgfVxuXG4gLyoqXG4gICAqIEltZWRpYXRseSBjb21wbGV0ZXMgdGhlIHRpbWVyLCBjYW5jZWxzIGl0IGFuZCB0cmlnZ2VycyB0aGUgb25Db21wbGV0ZSBjYWxsYmFja1xuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgY29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Vlayh0aGlzLmR1cmF0aW9uKS5jYW5jZWwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtDYWxsYmFjazx0aGlzPn0gW2NhbGxiYWNrXVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKi9cbiAgdGhlbihjYWxsYmFjayA9IG5vb3ApIHtcbiAgICBjb25zdCB0aGVuID0gdGhpcy50aGVuO1xuICAgIGNvbnN0IG9uUmVzb2x2ZSA9ICgpID0+IHtcbiAgICAgIC8vIHRoaXMudGhlbiA9IG51bGwgcHJldmVudHMgaW5maW5pdGUgcmVjdXJzaW9uIGlmIHJldHVybmVkIGJ5IGFuIGFzeW5jIGZ1bmN0aW9uXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vanVsaWFuZ2Fybmllcm9yZy9hbmltZS1iZXRhL2lzc3Vlcy8yNlxuICAgICAgdGhpcy50aGVuID0gbnVsbDtcbiAgICAgIGNhbGxiYWNrKHRoaXMpO1xuICAgICAgdGhpcy50aGVuID0gdGhlbjtcbiAgICAgIHRoaXMuX3Jlc29sdmUgPSBub29wO1xuICAgIH07XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHIgPT4ge1xuICAgICAgdGhpcy5fcmVzb2x2ZSA9ICgpID0+IHIob25SZXNvbHZlKCkpO1xuICAgICAgLy8gTWFrZSBzdXJlIHRvIHJlc29sdmUgaW1lZGlhdGx5IGlmIHRoZSB0aW1lciBoYXMgYWxyZWFkeSBjb21wbGV0ZWRcbiAgICAgIGlmICh0aGlzLmNvbXBsZXRlZCkgdGhpcy5fcmVzb2x2ZSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSk7XG4gIH1cblxufVxuXG5cbi8qKlxuICogQHBhcmFtIHtUaW1lclBhcmFtc30gW3BhcmFtZXRlcnNdXG4gKiBAcmV0dXJuIHtUaW1lcn1cbiAqL1xuY29uc3QgY3JlYXRlVGltZXIgPSBwYXJhbWV0ZXJzID0+IG5ldyBUaW1lcihwYXJhbWV0ZXJzLCBudWxsLCAwKS5pbml0KCk7XG5cblxuXG5cbi8qKiBAdHlwZSB7RWFzaW5nRnVuY3Rpb259ICovXG5jb25zdCBub25lID0gdCA9PiB0O1xuXG4vLyBDdWJpYyBCZXppZXIgc29sdmVyIGFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNlIMKpIEdhw6t0YW4gUmVuYXVkZWF1XG5cbi8qKlxuICogQHBhcmFtICB7TnVtYmVyfSBhVFxuICogQHBhcmFtICB7TnVtYmVyfSBhQTFcbiAqIEBwYXJhbSAge051bWJlcn0gYUEyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmNvbnN0IGNhbGNCZXppZXIgPSAoYVQsIGFBMSwgYUEyKSA9PiAoKCgxIC0gMyAqIGFBMiArIDMgKiBhQTEpICogYVQgKyAoMyAqIGFBMiAtIDYgKiBhQTEpKSAqIGFUICsgKDMgKiBhQTEpKSAqIGFUO1xuXG4vKipcbiAqIEBwYXJhbSAge051bWJlcn0gYVhcbiAqIEBwYXJhbSAge051bWJlcn0gbVgxXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1YMlxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5jb25zdCBiaW5hcnlTdWJkaXZpZGUgPSAoYVgsIG1YMSwgbVgyKSA9PiB7XG4gIGxldCBhQSA9IDAsIGFCID0gMSwgY3VycmVudFgsIGN1cnJlbnRULCBpID0gMDtcbiAgZG8ge1xuICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyO1xuICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgaWYgKGN1cnJlbnRYID4gMCkge1xuICAgICAgYUIgPSBjdXJyZW50VDtcbiAgICB9IGVsc2Uge1xuICAgICAgYUEgPSBjdXJyZW50VDtcbiAgICB9XG4gIH0gd2hpbGUgKGFicyhjdXJyZW50WCkgPiAuMDAwMDAwMSAmJiArK2kgPCAxMDApO1xuICByZXR1cm4gY3VycmVudFQ7XG59O1xuXG4vKipcbiAqIEBwYXJhbSAge051bWJlcn0gW21YMV1cbiAqIEBwYXJhbSAge051bWJlcn0gW21ZMV1cbiAqIEBwYXJhbSAge051bWJlcn0gW21YMl1cbiAqIEBwYXJhbSAge051bWJlcn0gW21ZMl1cbiAqIEByZXR1cm4ge0Vhc2luZ0Z1bmN0aW9ufVxuICovXG5cbmNvbnN0IGN1YmljQmV6aWVyID0gKG1YMSA9IDAuNSwgbVkxID0gMC4wLCBtWDIgPSAwLjUsIG1ZMiA9IDEuMCkgPT4gKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSA/IG5vbmUgOlxuICB0ID0+IHQgPT09IDAgfHwgdCA9PT0gMSA/IHQgOlxuICBjYWxjQmV6aWVyKGJpbmFyeVN1YmRpdmlkZSh0LCBtWDEsIG1YMiksIG1ZMSwgbVkyKTtcblxuLyoqXG4gKiBTdGVwcyBlYXNlIGltcGxlbWVudGF0aW9uIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2ZyL2RvY3MvV2ViL0NTUy90cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblxuICogT25seSBjb3ZlcnMgJ2VuZCcgYW5kICdzdGFydCcganVtcHRlcm1zXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHN0ZXBzXG4gKiBAcGFyYW0gIHtCb29sZWFufSBbZnJvbVN0YXJ0XVxuICogQHJldHVybiB7RWFzaW5nRnVuY3Rpb259XG4gKi9cbmNvbnN0IHN0ZXBzID0gKHN0ZXBzID0gMTAsIGZyb21TdGFydCkgPT4ge1xuICBjb25zdCByb3VuZE1ldGhvZCA9IGZyb21TdGFydCA/IGNlaWwgOiBmbG9vcjtcbiAgcmV0dXJuIHQgPT4gcm91bmRNZXRob2QoY2xhbXAodCwgMCwgMSkgKiBzdGVwcykgKiAoMSAvIHN0ZXBzKTtcbn07XG5cbi8qKlxuICogV2l0aG91dCBwYXJhbWV0ZXJzLCB0aGUgbGluZWFyIGZ1bmN0aW9uIGNyZWF0ZXMgYSBub24tZWFzZWQgdHJhbnNpdGlvbi5cbiAqIFBhcmFtZXRlcnMsIGlmIHVzZWQsIGNyZWF0ZXMgYSBwaWVjZXdpc2UgbGluZWFyIGVhc2luZyBieSBpbnRlcnBvbGF0aW5nIGxpbmVhcmx5IGJldHdlZW4gdGhlIHNwZWNpZmllZCBwb2ludHMuXG4gKiBAcGFyYW0gIHsuLi5TdHJpbmd8TnVtYmVyfSBbYXJnc10gLSBQb2ludHNcbiAqIEByZXR1cm4ge0Vhc2luZ0Z1bmN0aW9ufVxuICovXG5jb25zdCBsaW5lYXIgPSAoLi4uYXJncykgPT4ge1xuICBjb25zdCBhcmdzTGVuZ3RoID0gYXJncy5sZW5ndGg7XG4gIGlmICghYXJnc0xlbmd0aCkgcmV0dXJuIG5vbmU7XG4gIGNvbnN0IHRvdGFsUG9pbnRzID0gYXJnc0xlbmd0aCAtIDE7XG4gIGNvbnN0IGZpcnN0QXJnID0gYXJnc1swXTtcbiAgY29uc3QgbGFzdEFyZyA9IGFyZ3NbdG90YWxQb2ludHNdO1xuICBjb25zdCB4UG9pbnRzID0gWzBdO1xuICBjb25zdCB5UG9pbnRzID0gW3BhcnNlTnVtYmVyKGZpcnN0QXJnKV07XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgdG90YWxQb2ludHM7IGkrKykge1xuICAgIGNvbnN0IGFyZyA9IGFyZ3NbaV07XG4gICAgY29uc3Qgc3BsaXRWYWx1ZSA9IGlzU3RyKGFyZykgP1xuICAgIC8qKiBAdHlwZSB7U3RyaW5nfSAqLyhhcmcpLnRyaW0oKS5zcGxpdCgnICcpIDpcbiAgICBbYXJnXTtcbiAgICBjb25zdCB2YWx1ZSA9IHNwbGl0VmFsdWVbMF07XG4gICAgY29uc3QgcGVyY2VudCA9IHNwbGl0VmFsdWVbMV07XG4gICAgeFBvaW50cy5wdXNoKCFpc1VuZChwZXJjZW50KSA/IHBhcnNlTnVtYmVyKHBlcmNlbnQpIC8gMTAwIDogaSAvIHRvdGFsUG9pbnRzKTtcbiAgICB5UG9pbnRzLnB1c2gocGFyc2VOdW1iZXIodmFsdWUpKTtcbiAgfVxuICB5UG9pbnRzLnB1c2gocGFyc2VOdW1iZXIobGFzdEFyZykpO1xuICB4UG9pbnRzLnB1c2goMSk7XG4gIHJldHVybiBmdW5jdGlvbiBlYXNlTGluZWFyKHQpIHtcbiAgICBmb3IgKGxldCBpID0gMSwgbCA9IHhQb2ludHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50WCA9IHhQb2ludHNbaV07XG4gICAgICBpZiAodCA8PSBjdXJyZW50WCkge1xuICAgICAgICBjb25zdCBwcmV2WCA9IHhQb2ludHNbaSAtIDFdO1xuICAgICAgICBjb25zdCBwcmV2WSA9IHlQb2ludHNbaSAtIDFdO1xuICAgICAgICByZXR1cm4gcHJldlkgKyAoeVBvaW50c1tpXSAtIHByZXZZKSAqICh0IC0gcHJldlgpIC8gKGN1cnJlbnRYIC0gcHJldlgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geVBvaW50c1t5UG9pbnRzLmxlbmd0aCAtIDFdO1xuICB9XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIHJhbmRvbSBzdGVwc1xuICogQHBhcmFtICB7TnVtYmVyfSBbbGVuZ3RoXSAtIFRoZSBudW1iZXIgb2Ygc3RlcHNcbiAqIEBwYXJhbSAge051bWJlcn0gW3JhbmRvbW5lc3NdIC0gSG93IHN0cm9uZyB0aGUgcmFuZG9tbmVzcyBpc1xuICogQHJldHVybiB7RWFzaW5nRnVuY3Rpb259XG4gKi9cbmNvbnN0IGlycmVndWxhciA9IChsZW5ndGggPSAxMCwgcmFuZG9tbmVzcyA9IDEpID0+IHtcbiAgY29uc3QgdmFsdWVzID0gWzBdO1xuICBjb25zdCB0b3RhbCA9IGxlbmd0aCAtIDE7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgdG90YWw7IGkrKykge1xuICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSB2YWx1ZXNbaSAtIDFdO1xuICAgIGNvbnN0IHNwYWNpbmcgPSBpIC8gdG90YWw7XG4gICAgY29uc3Qgc2VnbWVudEVuZCA9IChpICsgMSkgLyB0b3RhbDtcbiAgICBjb25zdCByYW5kb21WYXJpYXRpb24gPSBzcGFjaW5nICsgKHNlZ21lbnRFbmQgLSBzcGFjaW5nKSAqIE1hdGgucmFuZG9tKCk7XG4gICAgLy8gTWl4IHRoZSBldmVuIHNwYWNpbmcgYW5kIHJhbmRvbSB2YXJpYXRpb24gYmFzZWQgb24gdGhlIHJhbmRvbW5lc3MgcGFyYW1ldGVyXG4gICAgY29uc3QgcmFuZG9tVmFsdWUgPSBzcGFjaW5nICogKDEgLSByYW5kb21uZXNzKSArIHJhbmRvbVZhcmlhdGlvbiAqIHJhbmRvbW5lc3M7XG4gICAgdmFsdWVzLnB1c2goY2xhbXAocmFuZG9tVmFsdWUsIHByZXZpb3VzVmFsdWUsIDEpKTtcbiAgfVxuICB2YWx1ZXMucHVzaCgxKTtcbiAgcmV0dXJuIGxpbmVhciguLi52YWx1ZXMpO1xufTtcblxuLy8gRWFzaW5nIGZ1bmN0aW9ucyBhZGFwdGVkIGZyb20gaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2UgwqkgUm9iZXJ0IFBlbm5lclxuXG4vKipcbiAqIEBjYWxsYmFjayBQb3dlckVhc2luZ1xuICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBbcG93ZXI9MS42NzVdXG4gKiBAcmV0dXJuIHtFYXNpbmdGdW5jdGlvbn1cbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBCYWNrRWFzaW5nXG4gKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IFtvdmVyc2hvb3Q9MS43MDE1OF1cbiAqIEByZXR1cm4ge0Vhc2luZ0Z1bmN0aW9ufVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIEVsYXN0aWNFYXNpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gW2FtcGxpdHVkZT0xXVxuICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBbcGVyaW9kPS4zXVxuICogQHJldHVybiB7RWFzaW5nRnVuY3Rpb259XG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgRWFzZUZhY3RvcnlcbiAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gW3BhcmFtQV1cbiAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gW3BhcmFtQl1cbiAqIEByZXR1cm4ge0Vhc2luZ0Z1bmN0aW9ufE51bWJlcn1cbiAqL1xuXG4vKiogQHR5cGVkZWYge1Bvd2VyRWFzaW5nfEJhY2tFYXNpbmd8RWxhc3RpY0Vhc2luZ30gRWFzZXNGYWN0b3J5ICovXG5cbmNvbnN0IGhhbGZQSSA9IFBJIC8gMjtcbmNvbnN0IGRvdWJsZVBJID0gUEkgKiAyO1xuLyoqIEB0eXBlIHtQb3dlckVhc2luZ30gKi9cbmNvbnN0IGVhc2VJblBvd2VyID0gKHAgPSAxLjY4KSA9PiB0ID0+IHBvdyh0LCArcCk7XG5cbi8qKiBAdHlwZSB7UmVjb3JkPFN0cmluZywgRWFzZXNGYWN0b3J5fEVhc2luZ0Z1bmN0aW9uPn0gKi9cbmNvbnN0IGVhc2VJbkZ1bmN0aW9ucyA9IHtcbiAgW2VtcHR5U3RyaW5nXTogZWFzZUluUG93ZXIsXG4gIFF1YWQ6IGVhc2VJblBvd2VyKDIpLFxuICBDdWJpYzogZWFzZUluUG93ZXIoMyksXG4gIFF1YXJ0OiBlYXNlSW5Qb3dlcig0KSxcbiAgUXVpbnQ6IGVhc2VJblBvd2VyKDUpLFxuICAvKiogQHR5cGUge0Vhc2luZ0Z1bmN0aW9ufSAqL1xuICBTaW5lOiB0ID0+IDEgLSBjb3ModCAqIGhhbGZQSSksXG4gIC8qKiBAdHlwZSB7RWFzaW5nRnVuY3Rpb259ICovXG4gIENpcmM6IHQgPT4gMSAtIHNxcnQoMSAtIHQgKiB0KSxcbiAgLyoqIEB0eXBlIHtFYXNpbmdGdW5jdGlvbn0gKi9cbiAgRXhwbzogdCA9PiB0ID8gcG93KDIsIDEwICogdCAtIDEwKSA6IDAsXG4gIC8qKiBAdHlwZSB7RWFzaW5nRnVuY3Rpb259ICovXG4gIEJvdW5jZTogdCA9PiB7XG4gICAgbGV0IHBvdzIsIGIgPSA0O1xuICAgIHdoaWxlICh0IDwgKChwb3cyID0gcG93KDIsIC0tYikpIC0gMSkgLyAxMSk7XG4gICAgcmV0dXJuIDEgLyBwb3coNCwgMyAtIGIpIC0gNy41NjI1ICogcG93KChwb3cyICogMyAtIDIpIC8gMjIgLSB0LCAyKTtcbiAgfSxcbiAgLyoqIEB0eXBlIHtCYWNrRWFzaW5nfSAqL1xuICBCYWNrOiAob3ZlcnNob290ID0gMS43MDE1OCkgPT4gdCA9PiAoK292ZXJzaG9vdCArIDEpICogdCAqIHQgKiB0IC0gK292ZXJzaG9vdCAqIHQgKiB0LFxuICAvKiogQHR5cGUge0VsYXN0aWNFYXNpbmd9ICovXG4gIEVsYXN0aWM6IChhbXBsaXR1ZGUgPSAxLCBwZXJpb2QgPSAuMykgPT4ge1xuICAgIGNvbnN0IGEgPSBjbGFtcCgrYW1wbGl0dWRlLCAxLCAxMCk7XG4gICAgY29uc3QgcCA9IGNsYW1wKCtwZXJpb2QsIG1pblZhbHVlLCAyKTtcbiAgICBjb25zdCBzID0gKHAgLyBkb3VibGVQSSkgKiBhc2luKDEgLyBhKTtcbiAgICBjb25zdCBlID0gZG91YmxlUEkgLyBwO1xuICAgIHJldHVybiB0ID0+IHQgPT09IDAgfHwgdCA9PT0gMSA/IHQgOiAtYSAqIHBvdygyLCAtMTAgKiAoMSAtIHQpKSAqIHNpbigoKDEgLSB0KSAtIHMpICogZSk7XG4gIH1cbn07XG5cbi8qKlxuICogQGNhbGxiYWNrIEVhc2VUeXBlXG4gKiBAcGFyYW0ge0Vhc2luZ0Z1bmN0aW9ufSBFYXNlXG4gKiBAcmV0dXJuIHtFYXNpbmdGdW5jdGlvbn1cbiAqL1xuXG4vKiogQHR5cGUge1JlY29yZDxTdHJpbmcsIEVhc2VUeXBlPn0gKi9cbmNvbnN0IGVhc2VUeXBlcyA9IHtcbiAgaW46IGVhc2VJbiA9PiB0ID0+IGVhc2VJbih0KSxcbiAgb3V0OiBlYXNlSW4gPT4gdCA9PiAxIC0gZWFzZUluKDEgLSB0KSxcbiAgaW5PdXQ6IGVhc2VJbiA9PiB0ID0+IHQgPCAuNSA/IGVhc2VJbih0ICogMikgLyAyIDogMSAtIGVhc2VJbih0ICogLTIgKyAyKSAvIDIsXG4gIG91dEluOiBlYXNlSW4gPT4gdCA9PiB0IDwgLjUgPyAoMSAtIGVhc2VJbigxIC0gdCAqIDIpKSAvIDIgOiAoZWFzZUluKHQgKiAyIC0gMSkgKyAxKSAvIDIsXG59O1xuXG4vKipcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyaW5nXG4gKiBAcGFyYW0gIHtSZWNvcmQ8U3RyaW5nLCBFYXNlc0ZhY3Rvcnl8RWFzaW5nRnVuY3Rpb24+fSBlYXNlc0Z1bmN0aW9uc1xuICogQHBhcmFtICB7T2JqZWN0fSBlYXNlc0xvb2t1cHNcbiAqIEByZXR1cm4ge0Vhc2luZ0Z1bmN0aW9ufVxuICovXG5jb25zdCBwYXJzZUVhc2VTdHJpbmcgPSAoc3RyaW5nLCBlYXNlc0Z1bmN0aW9ucywgZWFzZXNMb29rdXBzKSA9PiB7XG4gIGlmIChlYXNlc0xvb2t1cHNbc3RyaW5nXSkgcmV0dXJuIGVhc2VzTG9va3Vwc1tzdHJpbmddO1xuICBpZiAoc3RyaW5nLmluZGV4T2YoJygnKSA8PSAtMSkge1xuICAgIGNvbnN0IGhhc1BhcmFtcyA9IGVhc2VUeXBlc1tzdHJpbmddIHx8IHN0cmluZy5pbmNsdWRlcygnQmFjaycpIHx8IHN0cmluZy5pbmNsdWRlcygnRWxhc3RpYycpO1xuICAgIGNvbnN0IHBhcnNlZEZuID0gLyoqIEB0eXBlIHtFYXNpbmdGdW5jdGlvbn0gKi8oaGFzUGFyYW1zID8gLyoqIEB0eXBlIHtFYXNlc0ZhY3Rvcnl9ICovKGVhc2VzRnVuY3Rpb25zW3N0cmluZ10pKCkgOiBlYXNlc0Z1bmN0aW9uc1tzdHJpbmddKTtcbiAgICByZXR1cm4gcGFyc2VkRm4gPyBlYXNlc0xvb2t1cHNbc3RyaW5nXSA9IHBhcnNlZEZuIDogbm9uZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzcGxpdCA9IHN0cmluZy5zbGljZSgwLCAtMSkuc3BsaXQoJygnKTtcbiAgICBjb25zdCBwYXJzZWRGbiA9IC8qKiBAdHlwZSB7RWFzZXNGYWN0b3J5fSAqLyhlYXNlc0Z1bmN0aW9uc1tzcGxpdFswXV0pO1xuICAgIHJldHVybiBwYXJzZWRGbiA/IGVhc2VzTG9va3Vwc1tzdHJpbmddID0gcGFyc2VkRm4oLi4uc3BsaXRbMV0uc3BsaXQoJywnKSkgOiBub25lO1xuICB9XG59O1xuXG4vKipcbiAqIEB0eXBlZGVmICB7T2JqZWN0fSBFYXNlc0Z1bmN0aW9uc1xuICogQHByb3BlcnR5IHt0eXBlb2YgbGluZWFyfSBsaW5lYXJcbiAqIEBwcm9wZXJ0eSB7dHlwZW9mIGlycmVndWxhcn0gaXJyZWd1bGFyXG4gKiBAcHJvcGVydHkge3R5cGVvZiBzdGVwc30gc3RlcHNcbiAqIEBwcm9wZXJ0eSB7dHlwZW9mIGN1YmljQmV6aWVyfSBjdWJpY0JlemllclxuICogQHByb3BlcnR5IHtQb3dlckVhc2luZ30gaW5cbiAqIEBwcm9wZXJ0eSB7UG93ZXJFYXNpbmd9IG91dFxuICogQHByb3BlcnR5IHtQb3dlckVhc2luZ30gaW5PdXRcbiAqIEBwcm9wZXJ0eSB7UG93ZXJFYXNpbmd9IG91dEluXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBpblF1YWRcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IG91dFF1YWRcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IGluT3V0UXVhZFxuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gb3V0SW5RdWFkXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBpbkN1YmljXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBvdXRDdWJpY1xuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gaW5PdXRDdWJpY1xuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gb3V0SW5DdWJpY1xuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gaW5RdWFydFxuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gb3V0UXVhcnRcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IGluT3V0UXVhcnRcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IG91dEluUXVhcnRcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IGluUXVpbnRcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IG91dFF1aW50XG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBpbk91dFF1aW50XG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBvdXRJblF1aW50XG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBpblNpbmVcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IG91dFNpbmVcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IGluT3V0U2luZVxuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gb3V0SW5TaW5lXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBpbkNpcmNcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IG91dENpcmNcbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IGluT3V0Q2lyY1xuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gb3V0SW5DaXJjXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBpbkV4cG9cbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IG91dEV4cG9cbiAqIEBwcm9wZXJ0eSB7RWFzaW5nRnVuY3Rpb259IGluT3V0RXhwb1xuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gb3V0SW5FeHBvXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBpbkJvdW5jZVxuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gb3V0Qm91bmNlXG4gKiBAcHJvcGVydHkge0Vhc2luZ0Z1bmN0aW9ufSBpbk91dEJvdW5jZVxuICogQHByb3BlcnR5IHtFYXNpbmdGdW5jdGlvbn0gb3V0SW5Cb3VuY2VcbiAqIEBwcm9wZXJ0eSB7QmFja0Vhc2luZ30gaW5CYWNrXG4gKiBAcHJvcGVydHkge0JhY2tFYXNpbmd9IG91dEJhY2tcbiAqIEBwcm9wZXJ0eSB7QmFja0Vhc2luZ30gaW5PdXRCYWNrXG4gKiBAcHJvcGVydHkge0JhY2tFYXNpbmd9IG91dEluQmFja1xuICogQHByb3BlcnR5IHtFbGFzdGljRWFzaW5nfSBpbkVsYXN0aWNcbiAqIEBwcm9wZXJ0eSB7RWxhc3RpY0Vhc2luZ30gb3V0RWxhc3RpY1xuICogQHByb3BlcnR5IHtFbGFzdGljRWFzaW5nfSBpbk91dEVsYXN0aWNcbiAqIEBwcm9wZXJ0eSB7RWxhc3RpY0Vhc2luZ30gb3V0SW5FbGFzdGljXG4gKi9cblxuY29uc3QgZWFzZXMgPSAoLyojX19QVVJFX18qLyAoKCkgPT4ge1xuICBjb25zdCBsaXN0ID0geyBsaW5lYXIsIGlycmVndWxhciwgc3RlcHMsIGN1YmljQmV6aWVyIH07XG4gIGZvciAobGV0IHR5cGUgaW4gZWFzZVR5cGVzKSB7XG4gICAgZm9yIChsZXQgbmFtZSBpbiBlYXNlSW5GdW5jdGlvbnMpIHtcbiAgICAgIGNvbnN0IGVhc2VJbiA9IGVhc2VJbkZ1bmN0aW9uc1tuYW1lXTtcbiAgICAgIGNvbnN0IGVhc2VUeXBlID0gZWFzZVR5cGVzW3R5cGVdO1xuICAgICAgbGlzdFt0eXBlICsgbmFtZV0gPSAvKiogQHR5cGUge0Vhc2VzRmFjdG9yeXxFYXNpbmdGdW5jdGlvbn0gKi8oXG4gICAgICAgIG5hbWUgPT09IGVtcHR5U3RyaW5nIHx8IG5hbWUgPT09ICdCYWNrJyB8fCBuYW1lID09PSAnRWxhc3RpYycgP1xuICAgICAgICAoYSwgYikgPT4gZWFzZVR5cGUoLyoqIEB0eXBlIHtFYXNlc0ZhY3Rvcnl9ICovKGVhc2VJbikoYSwgYikpIDpcbiAgICAgICAgZWFzZVR5cGUoLyoqIEB0eXBlIHtFYXNpbmdGdW5jdGlvbn0gKi8oZWFzZUluKSlcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiAvKiogQHR5cGUge0Vhc2VzRnVuY3Rpb25zfSAqLyhsaXN0KTtcbn0pKCkpO1xuXG4vKiogQHR5cGUge1JlY29yZDxTdHJpbmcsIEVhc2luZ0Z1bmN0aW9uPn0gKi9cbmNvbnN0IEpTRWFzZXNMb29rdXBzID0geyBsaW5lYXI6IG5vbmUgfTtcblxuLyoqXG4gKiBAcGFyYW0gIHtFYXNpbmdQYXJhbX0gZWFzZVxuICogQHJldHVybiB7RWFzaW5nRnVuY3Rpb259XG4gKi9cbmNvbnN0IHBhcnNlRWFzaW5ncyA9IGVhc2UgPT4gaXNGbmMoZWFzZSkgPyBlYXNlIDpcbiAgaXNTdHIoZWFzZSkgPyBwYXJzZUVhc2VTdHJpbmcoLyoqIEB0eXBlIHtTdHJpbmd9ICovKGVhc2UpLCBlYXNlcywgSlNFYXNlc0xvb2t1cHMpIDpcbiAgbm9uZTtcblxuXG5cblxuY29uc3QgcHJvcGVydHlOYW1lc0NhY2hlID0ge307XG5cbi8qKlxuICogQHBhcmFtICB7U3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAqIEBwYXJhbSAge1RhcmdldH0gdGFyZ2V0XG4gKiBAcGFyYW0gIHt0d2VlblR5cGVzfSB0d2VlblR5cGVcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuY29uc3Qgc2FuaXRpemVQcm9wZXJ0eU5hbWUgPSAocHJvcGVydHlOYW1lLCB0YXJnZXQsIHR3ZWVuVHlwZSkgPT4ge1xuICBpZiAodHdlZW5UeXBlID09PSB0d2VlblR5cGVzLlRSQU5TRk9STSkge1xuICAgIGNvbnN0IHQgPSBzaG9ydFRyYW5zZm9ybXMuZ2V0KHByb3BlcnR5TmFtZSk7XG4gICAgcmV0dXJuIHQgPyB0IDogcHJvcGVydHlOYW1lO1xuICB9IGVsc2UgaWYgKFxuICAgIHR3ZWVuVHlwZSA9PT0gdHdlZW5UeXBlcy5DU1MgfHxcbiAgICAvLyBIYW5kbGUgc3BlY2lhbCBjYXNlcyB3aGVyZSBwcm9wZXJ0aWVzIGxpa2UgXCJzdHJva2VEYXNob2Zmc2V0XCIgbmVlZHMgdG8gYmUgc2V0IGFzIFwic3Ryb2tlLWRhc2hvZmZzZXRcIlxuICAgIC8vIGJ1dCBwcm9wZXJ0aWVzIGxpa2UgXCJiYXNlRnJlcXVlbmN5XCIgc2hvdWxkIHN0YXkgaW4gbG93ZXJDYW1lbENhc2VcbiAgICAodHdlZW5UeXBlID09PSB0d2VlblR5cGVzLkFUVFJJQlVURSAmJiAoaXNTdmcodGFyZ2V0KSAmJiBwcm9wZXJ0eU5hbWUgaW4gLyoqIEB0eXBlIHtET01UYXJnZXR9ICovKHRhcmdldCkuc3R5bGUpKVxuICApIHtcbiAgICBjb25zdCBjYWNoZWRQcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5hbWVzQ2FjaGVbcHJvcGVydHlOYW1lXTtcbiAgICBpZiAoY2FjaGVkUHJvcGVydHlOYW1lKSB7XG4gICAgICByZXR1cm4gY2FjaGVkUHJvcGVydHlOYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsb3dlckNhc2VOYW1lID0gcHJvcGVydHlOYW1lID8gdG9Mb3dlckNhc2UocHJvcGVydHlOYW1lKSA6IHByb3BlcnR5TmFtZTtcbiAgICAgIHByb3BlcnR5TmFtZXNDYWNoZVtwcm9wZXJ0eU5hbWVdID0gbG93ZXJDYXNlTmFtZTtcbiAgICAgIHJldHVybiBsb3dlckNhc2VOYW1lO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcHJvcGVydHlOYW1lO1xuICB9XG59O1xuXG5cblxuXG5jb25zdCBhbmdsZVVuaXRzTWFwID0geyAnZGVnJzogMSwgJ3JhZCc6IDE4MCAvIFBJLCAndHVybic6IDM2MCB9O1xuY29uc3QgY29udmVydGVkVmFsdWVzQ2FjaGUgPSB7fTtcblxuLyoqXG4gKiBAcGFyYW0gIHtET01UYXJnZXR9IGVsXG4gKiBAcGFyYW0gIHtUd2VlbkRlY29tcG9zZWRWYWx1ZX0gZGVjb21wb3NlZFZhbHVlXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHVuaXRcbiAqIEBwYXJhbSAge0Jvb2xlYW59IFtmb3JjZV1cbiAqIEByZXR1cm4ge1R3ZWVuRGVjb21wb3NlZFZhbHVlfVxuICovXG5jb25zdCBjb252ZXJ0VmFsdWVVbml0ID0gKGVsLCBkZWNvbXBvc2VkVmFsdWUsIHVuaXQsIGZvcmNlID0gZmFsc2UpID0+IHtcbiAgY29uc3QgY3VycmVudFVuaXQgPSBkZWNvbXBvc2VkVmFsdWUudTtcbiAgY29uc3QgY3VycmVudE51bWJlciA9IGRlY29tcG9zZWRWYWx1ZS5uO1xuICBpZiAoZGVjb21wb3NlZFZhbHVlLnQgPT09IHZhbHVlVHlwZXMuVU5JVCAmJiBjdXJyZW50VW5pdCA9PT0gdW5pdCkgeyAvLyBUT0RPOiBDaGVjayBpZiBjaGVja2luZyBhZ2FpbnN0IHRoZSBzYW1lIHVuaXQgc3RyaW5nIGlzIG5lY2Vzc2FyeVxuICAgIHJldHVybiBkZWNvbXBvc2VkVmFsdWU7XG4gIH1cbiAgY29uc3QgY2FjaGVkS2V5ID0gY3VycmVudE51bWJlciArIGN1cnJlbnRVbml0ICsgdW5pdDtcbiAgY29uc3QgY2FjaGVkID0gY29udmVydGVkVmFsdWVzQ2FjaGVbY2FjaGVkS2V5XTtcbiAgaWYgKCFpc1VuZChjYWNoZWQpICYmICFmb3JjZSkge1xuICAgIGRlY29tcG9zZWRWYWx1ZS5uID0gY2FjaGVkO1xuICB9IGVsc2Uge1xuICAgIGxldCBjb252ZXJ0ZWRWYWx1ZTtcbiAgICBpZiAoY3VycmVudFVuaXQgaW4gYW5nbGVVbml0c01hcCkge1xuICAgICAgY29udmVydGVkVmFsdWUgPSBjdXJyZW50TnVtYmVyICogYW5nbGVVbml0c01hcFtjdXJyZW50VW5pdF0gLyBhbmdsZVVuaXRzTWFwW3VuaXRdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBiYXNlbGluZSA9IDEwMDtcbiAgICAgIGNvbnN0IHRlbXBFbCA9IC8qKiBAdHlwZSB7RE9NVGFyZ2V0fSAqLyhlbC5jbG9uZU5vZGUoKSk7XG4gICAgICBjb25zdCBwYXJlbnROb2RlID0gZWwucGFyZW50Tm9kZTtcbiAgICAgIGNvbnN0IHBhcmVudEVsID0gKHBhcmVudE5vZGUgJiYgKHBhcmVudE5vZGUgIT09IGRvYykpID8gcGFyZW50Tm9kZSA6IGRvYy5ib2R5O1xuICAgICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQodGVtcEVsKTtcbiAgICAgIGNvbnN0IGVsU3R5bGUgPSB0ZW1wRWwuc3R5bGU7XG4gICAgICBlbFN0eWxlLndpZHRoID0gYmFzZWxpbmUgKyBjdXJyZW50VW5pdDtcbiAgICAgIGNvbnN0IGN1cnJlbnRVbml0V2lkdGggPSAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyh0ZW1wRWwpLm9mZnNldFdpZHRoIHx8IGJhc2VsaW5lO1xuICAgICAgZWxTdHlsZS53aWR0aCA9IGJhc2VsaW5lICsgdW5pdDtcbiAgICAgIGNvbnN0IG5ld1VuaXRXaWR0aCA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovKHRlbXBFbCkub2Zmc2V0V2lkdGggfHwgYmFzZWxpbmU7XG4gICAgICBjb25zdCBmYWN0b3IgPSBjdXJyZW50VW5pdFdpZHRoIC8gbmV3VW5pdFdpZHRoO1xuICAgICAgcGFyZW50RWwucmVtb3ZlQ2hpbGQodGVtcEVsKTtcbiAgICAgIGNvbnZlcnRlZFZhbHVlID0gZmFjdG9yICogY3VycmVudE51bWJlcjtcbiAgICB9XG4gICAgZGVjb21wb3NlZFZhbHVlLm4gPSBjb252ZXJ0ZWRWYWx1ZTtcbiAgICBjb252ZXJ0ZWRWYWx1ZXNDYWNoZVtjYWNoZWRLZXldID0gY29udmVydGVkVmFsdWU7XG4gIH1cbiAgZGVjb21wb3NlZFZhbHVlLnQgPT09IHZhbHVlVHlwZXMuVU5JVDtcbiAgZGVjb21wb3NlZFZhbHVlLnUgPSB1bml0O1xuICByZXR1cm4gZGVjb21wb3NlZFZhbHVlO1xufTtcblxuXG5cblxuLyoqXG4gKiBAdGVtcGxhdGUge1JlbmRlcmFibGV9IFRcbiAqIEBwYXJhbSB7VH0gcmVuZGVyYWJsZVxuICogQHJldHVybiB7VH1cbiAqL1xuY29uc3QgY2xlYW5JbmxpbmVTdHlsZXMgPSByZW5kZXJhYmxlID0+IHtcbiAgLy8gQWxsb3cgY2xlYW5JbmxpbmVTdHlsZXMoKSB0byBiZSBjYWxsZWQgb24gdGltZWxpbmVzXG4gIGlmIChyZW5kZXJhYmxlLl9oYXNDaGlsZHJlbikge1xuICAgIGZvckVhY2hDaGlsZHJlbihyZW5kZXJhYmxlLCBjbGVhbklubGluZVN0eWxlcywgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYW5pbWF0aW9uID0gLyoqIEB0eXBlIHtKU0FuaW1hdGlvbn0gKi8ocmVuZGVyYWJsZSk7XG4gICAgYW5pbWF0aW9uLnBhdXNlKCk7XG4gICAgZm9yRWFjaENoaWxkcmVuKGFuaW1hdGlvbiwgKC8qKiBAdHlwZSB7VHdlZW59ICovdHdlZW4pID0+IHtcbiAgICAgIGNvbnN0IHR3ZWVuUHJvcGVydHkgPSB0d2Vlbi5wcm9wZXJ0eTtcbiAgICAgIGNvbnN0IHR3ZWVuVGFyZ2V0ID0gdHdlZW4udGFyZ2V0O1xuICAgICAgaWYgKHR3ZWVuVGFyZ2V0W2lzRG9tU3ltYm9sXSkge1xuICAgICAgICBjb25zdCB0YXJnZXRTdHlsZSA9IC8qKiBAdHlwZSB7RE9NVGFyZ2V0fSAqLyh0d2VlblRhcmdldCkuc3R5bGU7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsSW5saW5lZFZhbHVlID0gYW5pbWF0aW9uLl9pbmxpbmVTdHlsZXNbdHdlZW5Qcm9wZXJ0eV07XG4gICAgICAgIGlmICh0d2Vlbi5fdHdlZW5UeXBlID09PSB0d2VlblR5cGVzLlRSQU5TRk9STSkge1xuICAgICAgICAgIGNvbnN0IGNhY2hlZFRyYW5zZm9ybXMgPSB0d2VlblRhcmdldFt0cmFuc2Zvcm1zU3ltYm9sXTtcbiAgICAgICAgICBpZiAoaXNVbmQob3JpZ2luYWxJbmxpbmVkVmFsdWUpIHx8IG9yaWdpbmFsSW5saW5lZFZhbHVlID09PSBlbXB0eVN0cmluZykge1xuICAgICAgICAgICAgZGVsZXRlIGNhY2hlZFRyYW5zZm9ybXNbdHdlZW5Qcm9wZXJ0eV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFRyYW5zZm9ybXNbdHdlZW5Qcm9wZXJ0eV0gPSBvcmlnaW5hbElubGluZWRWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR3ZWVuLl9yZW5kZXJUcmFuc2Zvcm1zKSB7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5rZXlzKGNhY2hlZFRyYW5zZm9ybXMpLmxlbmd0aCkge1xuICAgICAgICAgICAgICB0YXJnZXRTdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNmb3JtJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsZXQgc3RyID0gZW1wdHlTdHJpbmc7XG4gICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBjYWNoZWRUcmFuc2Zvcm1zKSB7XG4gICAgICAgICAgICAgICAgc3RyICs9IHRyYW5zZm9ybXNGcmFnbWVudFN0cmluZ3Nba2V5XSArIGNhY2hlZFRyYW5zZm9ybXNba2V5XSArICcpICc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGFyZ2V0U3R5bGUudHJhbnNmb3JtID0gc3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaXNVbmQob3JpZ2luYWxJbmxpbmVkVmFsdWUpIHx8IG9yaWdpbmFsSW5saW5lZFZhbHVlID09PSBlbXB0eVN0cmluZykge1xuICAgICAgICAgICAgdGFyZ2V0U3R5bGUucmVtb3ZlUHJvcGVydHkodHdlZW5Qcm9wZXJ0eSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFN0eWxlW3R3ZWVuUHJvcGVydHldID0gb3JpZ2luYWxJbmxpbmVkVmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhbmltYXRpb24uX3RhaWwgPT09IHR3ZWVuKSB7XG4gICAgICAgICAgYW5pbWF0aW9uLnRhcmdldHMuZm9yRWFjaCh0ID0+IHtcbiAgICAgICAgICAgIGlmICh0LmdldEF0dHJpYnV0ZSAmJiB0LmdldEF0dHJpYnV0ZSgnc3R5bGUnKSA9PT0gZW1wdHlTdHJpbmcpIHtcbiAgICAgICAgICAgICAgdC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgICB9ICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlbmRlcmFibGU7XG59O1xuXG4vLyBEZWZpbmVzIGRlY29tcG9zZWQgdmFsdWVzIHRhcmdldCBvYmplY3RzIG9ubHkgb25jZSBhbmQgbXV0YXRlIHRoZWlyIHByb3BlcnRpZXMgbGF0ZXIgdG8gYXZvaWQgR0Ncbi8vIFRPRE86IE1heWJlIG1vdmUgdGhlIG9iamVjdHMgY3JlYXRpb24gdG8gdmFsdWVzLmpzIGFuZCB1c2UgdGhlIGRlY29tcG9zZSBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIGJhc2Ugb2JqZWN0XG5jb25zdCBmcm9tVGFyZ2V0T2JqZWN0ID0gY3JlYXRlRGVjb21wb3NlZFZhbHVlVGFyZ2V0T2JqZWN0KCk7XG5jb25zdCB0b1RhcmdldE9iamVjdCA9IGNyZWF0ZURlY29tcG9zZWRWYWx1ZVRhcmdldE9iamVjdCgpO1xuY29uc3QgdG9GdW5jdGlvblN0b3JlID0geyBmdW5jOiBudWxsIH07XG5jb25zdCBrZXlmcmFtZXNUYXJnZXRBcnJheSA9IFtudWxsXTtcbmNvbnN0IGZhc3RTZXRWYWx1ZXNBcnJheSA9IFtudWxsLCBudWxsXTtcbi8qKiBAdHlwZSB7VHdlZW5LZXlWYWx1ZX0gKi9cbmNvbnN0IGtleU9iamVjdFRhcmdldCA9IHsgdG86IG51bGwgfTtcblxubGV0IHR3ZWVuSWQgPSAwO1xubGV0IGtleWZyYW1lcztcbi8qKiBAdHlwZSB7VHdlZW5QYXJhbXNPcHRpb25zICYgVHdlZW5WYWx1ZXN9ICovXG5sZXQga2V5O1xuXG4vKipcbiAqIEBwYXJhbSB7RHVyYXRpb25LZXlmcmFtZXMgfCBQZXJjZW50YWdlS2V5ZnJhbWVzfSBrZXlmcmFtZXNcbiAqIEBwYXJhbSB7QW5pbWF0aW9uUGFyYW1zfSBwYXJhbWV0ZXJzXG4gKiBAcmV0dXJuIHtBbmltYXRpb25QYXJhbXN9XG4gKi9cbmNvbnN0IGdlbmVyYXRlS2V5ZnJhbWVzID0gKGtleWZyYW1lcywgcGFyYW1ldGVycykgPT4ge1xuICAvKiogQHR5cGUge0FuaW1hdGlvblBhcmFtc30gKi9cbiAgY29uc3QgcHJvcGVydGllcyA9IHt9O1xuICBpZiAoaXNBcnIoa2V5ZnJhbWVzKSkge1xuICAgIGNvbnN0IHByb3BlcnR5TmFtZXMgPSBbXS5jb25jYXQoLi4uLyoqIEB0eXBlIHtEdXJhdGlvbktleWZyYW1lc30gKi8oa2V5ZnJhbWVzKS5tYXAoa2V5ID0+IE9iamVjdC5rZXlzKGtleSkpKS5maWx0ZXIoaXNLZXkpO1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gcHJvcGVydHlOYW1lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IHByb3BOYW1lID0gcHJvcGVydHlOYW1lc1tpXTtcbiAgICAgIGNvbnN0IHByb3BBcnJheSA9IC8qKiBAdHlwZSB7RHVyYXRpb25LZXlmcmFtZXN9ICovKGtleWZyYW1lcykubWFwKGtleSA9PiB7XG4gICAgICAgIC8qKiBAdHlwZSB7VHdlZW5LZXlWYWx1ZX0gKi9cbiAgICAgICAgY29uc3QgbmV3S2V5ID0ge307XG4gICAgICAgIGZvciAobGV0IHAgaW4ga2V5KSB7XG4gICAgICAgICAgY29uc3Qga2V5VmFsdWUgPSAvKiogQHR5cGUge1R3ZWVuUHJvcFZhbHVlfSAqLyhrZXlbcF0pO1xuICAgICAgICAgIGlmIChpc0tleShwKSkge1xuICAgICAgICAgICAgaWYgKHAgPT09IHByb3BOYW1lKSB7XG4gICAgICAgICAgICAgIG5ld0tleS50byA9IGtleVZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdLZXlbcF0gPSBrZXlWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0tleTtcbiAgICAgIH0pO1xuICAgICAgcHJvcGVydGllc1twcm9wTmFtZV0gPSAvKiogQHR5cGUge0FycmF5U3ludGF4VmFsdWV9ICovKHByb3BBcnJheSk7XG4gICAgfVxuXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdG90YWxEdXJhdGlvbiA9IC8qKiBAdHlwZSB7TnVtYmVyfSAqLyhzZXRWYWx1ZShwYXJhbWV0ZXJzLmR1cmF0aW9uLCBnbG9iYWxzLmRlZmF1bHRzLmR1cmF0aW9uKSk7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGtleWZyYW1lcylcbiAgICAubWFwKGtleSA9PiB7IHJldHVybiB7bzogcGFyc2VGbG9hdChrZXkpIC8gMTAwLCBwOiBrZXlmcmFtZXNba2V5XX0gfSlcbiAgICAuc29ydCgoYSwgYikgPT4gYS5vIC0gYi5vKTtcbiAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGtleS5vO1xuICAgICAgY29uc3QgcHJvcCA9IGtleS5wO1xuICAgICAgZm9yIChsZXQgbmFtZSBpbiBwcm9wKSB7XG4gICAgICAgIGlmIChpc0tleShuYW1lKSkge1xuICAgICAgICAgIGxldCBwcm9wQXJyYXkgPSAvKiogQHR5cGUge0FycmF5fSAqLyhwcm9wZXJ0aWVzW25hbWVdKTtcbiAgICAgICAgICBpZiAoIXByb3BBcnJheSkgcHJvcEFycmF5ID0gcHJvcGVydGllc1tuYW1lXSA9IFtdO1xuICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gb2Zmc2V0ICogdG90YWxEdXJhdGlvbjtcbiAgICAgICAgICBsZXQgbGVuZ3RoID0gcHJvcEFycmF5Lmxlbmd0aDtcbiAgICAgICAgICBsZXQgcHJldktleSA9IHByb3BBcnJheVtsZW5ndGggLSAxXTtcbiAgICAgICAgICBjb25zdCBrZXlPYmogPSB7IHRvOiBwcm9wW25hbWVdIH07XG4gICAgICAgICAgbGV0IGR1clByb2dyZXNzID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkdXJQcm9ncmVzcyArPSBwcm9wQXJyYXlbaV0uZHVyYXRpb247XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChsZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGtleU9iai5mcm9tID0gcHJldktleS50bztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHByb3AuZWFzZSkge1xuICAgICAgICAgICAga2V5T2JqLmVhc2UgPSBwcm9wLmVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGtleU9iai5kdXJhdGlvbiA9IGR1cmF0aW9uIC0gKGxlbmd0aCA/IGR1clByb2dyZXNzIDogMCk7XG4gICAgICAgICAgcHJvcEFycmF5LnB1c2goa2V5T2JqKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGtleTtcbiAgICB9KTtcblxuICAgIGZvciAobGV0IG5hbWUgaW4gcHJvcGVydGllcykge1xuICAgICAgY29uc3QgcHJvcEFycmF5ID0gLyoqIEB0eXBlIHtBcnJheX0gKi8ocHJvcGVydGllc1tuYW1lXSk7XG4gICAgICBsZXQgcHJldkVhc2U7XG4gICAgICAvLyBsZXQgZHVyUHJvZ3Jlc3MgPSAwXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHByb3BBcnJheS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgcHJvcCA9IHByb3BBcnJheVtpXTtcbiAgICAgICAgLy8gRW11bGF0ZSBXQVBQSSBlYXNpbmcgcGFyYW1ldGVyIHBvc2l0aW9uXG4gICAgICAgIGNvbnN0IGN1cnJlbnRFYXNlID0gcHJvcC5lYXNlO1xuICAgICAgICBwcm9wLmVhc2UgPSBwcmV2RWFzZSA/IHByZXZFYXNlIDogdW5kZWZpbmVkO1xuICAgICAgICBwcmV2RWFzZSA9IGN1cnJlbnRFYXNlO1xuICAgICAgICAvLyBkdXJQcm9ncmVzcyArPSBwcm9wLmR1cmF0aW9uO1xuICAgICAgICAvLyBpZiAoaSA9PT0gbCAtIDEgJiYgZHVyUHJvZ3Jlc3MgIT09IHRvdGFsRHVyYXRpb24pIHtcbiAgICAgICAgLy8gICBwcm9wQXJyYXkucHVzaCh7IGZyb206IHByb3AudG8sIGVhc2U6IHByb3AuZWFzZSwgZHVyYXRpb246IHRvdGFsRHVyYXRpb24gLSBkdXJQcm9ncmVzcyB9KVxuICAgICAgICAvLyB9XG4gICAgICB9XG4gICAgICBpZiAoIXByb3BBcnJheVswXS5kdXJhdGlvbikge1xuICAgICAgICBwcm9wQXJyYXkuc2hpZnQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufTtcblxuY2xhc3MgSlNBbmltYXRpb24gZXh0ZW5kcyBUaW1lciB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge1RhcmdldHNQYXJhbX0gdGFyZ2V0c1xuICAgKiBAcGFyYW0ge0FuaW1hdGlvblBhcmFtc30gcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0ge1RpbWVsaW5lfSBbcGFyZW50XVxuICAgKiBAcGFyYW0ge051bWJlcn0gW3BhcmVudFBvc2l0aW9uXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtmYXN0U2V0PWZhbHNlXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW2luZGV4PTBdXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbbGVuZ3RoPTBdXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICB0YXJnZXRzLFxuICAgIHBhcmFtZXRlcnMsXG4gICAgcGFyZW50LFxuICAgIHBhcmVudFBvc2l0aW9uLFxuICAgIGZhc3RTZXQgPSBmYWxzZSxcbiAgICBpbmRleCA9IDAsXG4gICAgbGVuZ3RoID0gMFxuICApIHtcblxuICAgIHN1cGVyKC8qKiBAdHlwZSB7VGltZXJQYXJhbXMmQW5pbWF0aW9uUGFyYW1zfSAqLyhwYXJhbWV0ZXJzKSwgcGFyZW50LCBwYXJlbnRQb3NpdGlvbik7XG5cbiAgICBjb25zdCBwYXJzZWRUYXJnZXRzID0gcmVnaXN0ZXJUYXJnZXRzKHRhcmdldHMpO1xuICAgIGNvbnN0IHRhcmdldHNMZW5ndGggPSBwYXJzZWRUYXJnZXRzLmxlbmd0aDtcblxuICAgIC8vIElmIHRoZSBwYXJhbWV0ZXJzIG9iamVjdCBjb250YWlucyBhIFwia2V5ZnJhbWVzXCIgcHJvcGVydHksIGNvbnZlcnQgYWxsIHRoZSBrZXlmcmFtZXMgdmFsdWVzIHRvIHJlZ3VsYXIgcHJvcGVydGllc1xuXG4gICAgY29uc3Qga2ZQYXJhbXMgPSAvKiogQHR5cGUge0FuaW1hdGlvblBhcmFtc30gKi8ocGFyYW1ldGVycykua2V5ZnJhbWVzO1xuICAgIGNvbnN0IHBhcmFtcyA9IC8qKiBAdHlwZSB7QW5pbWF0aW9uUGFyYW1zfSAqLyhrZlBhcmFtcyA/IG1lcmdlT2JqZWN0cyhnZW5lcmF0ZUtleWZyYW1lcygvKiogQHR5cGUge0R1cmF0aW9uS2V5ZnJhbWVzfSAqLyhrZlBhcmFtcyksIHBhcmFtZXRlcnMpLCBwYXJhbWV0ZXJzKSA6IHBhcmFtZXRlcnMpO1xuXG4gICAgY29uc3Qge1xuICAgICAgZGVsYXksXG4gICAgICBkdXJhdGlvbixcbiAgICAgIGVhc2UsXG4gICAgICBwbGF5YmFja0Vhc2UsXG4gICAgICBtb2RpZmllcixcbiAgICAgIGNvbXBvc2l0aW9uLFxuICAgICAgb25SZW5kZXIsXG4gICAgfSA9IHBhcmFtcztcblxuICAgIGNvbnN0IGFuaW1EZWZhdWx0cyA9IHBhcmVudCA/IHBhcmVudC5kZWZhdWx0cyA6IGdsb2JhbHMuZGVmYXVsdHM7XG4gICAgY29uc3QgYW5pbWFQbGF5YmFja0Vhc2UgPSBzZXRWYWx1ZShwbGF5YmFja0Vhc2UsIGFuaW1EZWZhdWx0cy5wbGF5YmFja0Vhc2UpO1xuICAgIGNvbnN0IGFuaW1FYXNlID0gYW5pbWFQbGF5YmFja0Vhc2UgPyBwYXJzZUVhc2luZ3MoYW5pbWFQbGF5YmFja0Vhc2UpIDogbnVsbDtcbiAgICBjb25zdCBoYXNTcHJpbmcgPSAhaXNVbmQoZWFzZSkgJiYgIWlzVW5kKC8qKiBAdHlwZSB7U3ByaW5nfSAqLyhlYXNlKS5lYXNlKTtcbiAgICBjb25zdCB0RWFzaW5nID0gaGFzU3ByaW5nID8gLyoqIEB0eXBlIHtTcHJpbmd9ICovKGVhc2UpLmVhc2UgOiBzZXRWYWx1ZShlYXNlLCBhbmltRWFzZSA/ICdsaW5lYXInIDogYW5pbURlZmF1bHRzLmVhc2UpO1xuICAgIGNvbnN0IHREdXJhdGlvbiA9IGhhc1NwcmluZyA/IC8qKiBAdHlwZSB7U3ByaW5nfSAqLyhlYXNlKS5kdXJhdGlvbiA6IHNldFZhbHVlKGR1cmF0aW9uLCBhbmltRGVmYXVsdHMuZHVyYXRpb24pO1xuICAgIGNvbnN0IHREZWxheSA9IHNldFZhbHVlKGRlbGF5LCBhbmltRGVmYXVsdHMuZGVsYXkpO1xuICAgIGNvbnN0IHRNb2RpZmllciA9IG1vZGlmaWVyIHx8IGFuaW1EZWZhdWx0cy5tb2RpZmllcjtcbiAgICAvLyBJZiBubyBjb21wb3NpdGlvbiBpcyBkZWZpbmVkIGFuZCB0aGUgdGFyZ2V0cyBsZW5ndGggaXMgaGlnaCAoPj0gMTAwMCkgc2V0IHRoZSBjb21wb3NpdGlvbiB0byAnbm9uZScgKDApIGZvciBmYXN0ZXIgdHdlZW4gY3JlYXRpb25cbiAgICBjb25zdCB0Q29tcG9zaXRpb24gPSBpc1VuZChjb21wb3NpdGlvbikgJiYgdGFyZ2V0c0xlbmd0aCA+PSBLID8gY29tcG9zaXRpb25UeXBlcy5ub25lIDogIWlzVW5kKGNvbXBvc2l0aW9uKSA/IGNvbXBvc2l0aW9uIDogYW5pbURlZmF1bHRzLmNvbXBvc2l0aW9uO1xuICAgIC8vIFRPRE86IERvIG5vdCBjcmVhdGUgYW4gZW1wdHkgb2JqZWN0IHVudGlsIHdlIGtub3cgdGhlIGFuaW1hdGlvbiB3aWxsIGdlbmVyYXRlIGlubGluZSBzdHlsZXNcbiAgICBjb25zdCBhbmltSW5saW5lU3R5bGVzID0ge307XG4gICAgLy8gY29uc3QgYWJzb2x1dGVPZmZzZXRUaW1lID0gdGhpcy5fb2Zmc2V0O1xuICAgIGNvbnN0IGFic29sdXRlT2Zmc2V0VGltZSA9IHRoaXMuX29mZnNldCArIChwYXJlbnQgPyBwYXJlbnQuX29mZnNldCA6IDApO1xuXG4gICAgbGV0IGl0ZXJhdGlvbkR1cmF0aW9uID0gTmFOO1xuICAgIGxldCBpdGVyYXRpb25EZWxheSA9IE5hTjtcbiAgICBsZXQgYW5pbWF0aW9uQW5pbWF0aW9uTGVuZ3RoID0gMDtcbiAgICBsZXQgc2hvdWxkVHJpZ2dlclJlbmRlciA9IDA7XG5cbiAgICBmb3IgKGxldCB0YXJnZXRJbmRleCA9IDA7IHRhcmdldEluZGV4IDwgdGFyZ2V0c0xlbmd0aDsgdGFyZ2V0SW5kZXgrKykge1xuXG4gICAgICBjb25zdCB0YXJnZXQgPSBwYXJzZWRUYXJnZXRzW3RhcmdldEluZGV4XTtcbiAgICAgIGNvbnN0IHRpID0gaW5kZXggfHwgdGFyZ2V0SW5kZXg7XG4gICAgICBjb25zdCB0bCA9IGxlbmd0aCB8fCB0YXJnZXRzTGVuZ3RoO1xuXG4gICAgICBsZXQgbGFzdFRyYW5zZm9ybUdyb3VwSW5kZXggPSBOYU47XG4gICAgICBsZXQgbGFzdFRyYW5zZm9ybUdyb3VwTGVuZ3RoID0gTmFOO1xuXG4gICAgICBmb3IgKGxldCBwIGluIHBhcmFtcykge1xuXG4gICAgICAgIGlmIChpc0tleShwKSkge1xuXG4gICAgICAgICAgY29uc3QgdHdlZW5UeXBlID0gZ2V0VHdlZW5UeXBlKHRhcmdldCwgcCk7XG5cbiAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IHNhbml0aXplUHJvcGVydHlOYW1lKHAsIHRhcmdldCwgdHdlZW5UeXBlKTtcblxuICAgICAgICAgIGxldCBwcm9wVmFsdWUgPSBwYXJhbXNbcF07XG5cbiAgICAgICAgICBjb25zdCBpc1Byb3BWYWx1ZUFycmF5ID0gaXNBcnIocHJvcFZhbHVlKTtcblxuICAgICAgICAgIGlmIChmYXN0U2V0ICYmICFpc1Byb3BWYWx1ZUFycmF5KSB7XG4gICAgICAgICAgICBmYXN0U2V0VmFsdWVzQXJyYXlbMF0gPSBwcm9wVmFsdWU7XG4gICAgICAgICAgICBmYXN0U2V0VmFsdWVzQXJyYXlbMV0gPSBwcm9wVmFsdWU7XG4gICAgICAgICAgICBwcm9wVmFsdWUgPSBmYXN0U2V0VmFsdWVzQXJyYXk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gVE9ETzogQWxsb3cgbmVzdGVkIGtleWZyYW1lcyBpbnNpZGUgT2JqZWN0VmFsdWUgdmFsdWUgKHByb3A6IHsgdG86IFsuNSwgMSwgLjc1LCAyLCAzXSB9KVxuICAgICAgICAgIC8vIE5vcm1hbGl6ZSBwcm9wZXJ0eSB2YWx1ZXMgdG8gdmFsaWQga2V5ZnJhbWUgc3ludGF4OlxuICAgICAgICAgIC8vIFt4LCB5XSB0byBbe3RvOiBbeCwgeV19XSBvciB7dG86IHh9IHRvIFt7dG86IHh9XSBvciBrZWVwIGtleXMgc3ludGF4IFt7fSwge30sIHt9Li4uXVxuICAgICAgICAgIC8vIGNvbnN0IGtleWZyYW1lcyA9IGlzQXJyKHByb3BWYWx1ZSkgPyBwcm9wVmFsdWUubGVuZ3RoID09PSAyICYmICFpc09iaihwcm9wVmFsdWVbMF0pID8gW3sgdG86IHByb3BWYWx1ZSB9XSA6IHByb3BWYWx1ZSA6IFtwcm9wVmFsdWVdO1xuICAgICAgICAgIGlmIChpc1Byb3BWYWx1ZUFycmF5KSB7XG4gICAgICAgICAgICBjb25zdCBhcnJheUxlbmd0aCA9IC8qKiBAdHlwZSB7QXJyYXl9ICovKHByb3BWYWx1ZSkubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgaXNOb3RPYmplY3RWYWx1ZSA9ICFpc09iaihwcm9wVmFsdWVbMF0pO1xuICAgICAgICAgICAgLy8gQ29udmVydCBbeCwgeV0gdG8gW3t0bzogW3gsIHldfV1cbiAgICAgICAgICAgIGlmIChhcnJheUxlbmd0aCA9PT0gMiAmJiBpc05vdE9iamVjdFZhbHVlKSB7XG4gICAgICAgICAgICAgIGtleU9iamVjdFRhcmdldC50byA9IC8qKiBAdHlwZSB7VHdlZW5QYXJhbVZhbHVlfSAqLygvKiogQHR5cGUge3Vua25vd259ICovKHByb3BWYWx1ZSkpO1xuICAgICAgICAgICAgICBrZXlmcmFtZXNUYXJnZXRBcnJheVswXSA9IGtleU9iamVjdFRhcmdldDtcbiAgICAgICAgICAgICAga2V5ZnJhbWVzID0ga2V5ZnJhbWVzVGFyZ2V0QXJyYXk7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IFt4LCB5LCB6XSB0byBbW3gsIHldLCB6XVxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcnJheUxlbmd0aCA+IDIgJiYgaXNOb3RPYmplY3RWYWx1ZSkge1xuICAgICAgICAgICAgICBrZXlmcmFtZXMgPSBbXTtcbiAgICAgICAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48TnVtYmVyPn0gKi8ocHJvcFZhbHVlKS5mb3JFYWNoKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFpKSB7XG4gICAgICAgICAgICAgICAgICBmYXN0U2V0VmFsdWVzQXJyYXlbMF0gPSB2O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgZmFzdFNldFZhbHVlc0FycmF5WzFdID0gdjtcbiAgICAgICAgICAgICAgICAgIGtleWZyYW1lcy5wdXNoKGZhc3RTZXRWYWx1ZXNBcnJheSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGtleWZyYW1lcy5wdXNoKHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBrZXlmcmFtZXMgPSAvKiogQHR5cGUge0FycmF5LjxUd2VlbktleVZhbHVlPn0gKi8ocHJvcFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAga2V5ZnJhbWVzVGFyZ2V0QXJyYXlbMF0gPSBwcm9wVmFsdWU7XG4gICAgICAgICAgICBrZXlmcmFtZXMgPSBrZXlmcmFtZXNUYXJnZXRBcnJheTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgc2libGluZ3MgPSBudWxsO1xuICAgICAgICAgIGxldCBwcmV2VHdlZW4gPSBudWxsO1xuICAgICAgICAgIGxldCBmaXJzdFR3ZWVuQ2hhbmdlU3RhcnRUaW1lID0gTmFOO1xuICAgICAgICAgIGxldCBsYXN0VHdlZW5DaGFuZ2VFbmRUaW1lID0gMDtcbiAgICAgICAgICBsZXQgdHdlZW5JbmRleCA9IDA7XG5cbiAgICAgICAgICBmb3IgKGxldCBsID0ga2V5ZnJhbWVzLmxlbmd0aDsgdHdlZW5JbmRleCA8IGw7IHR3ZWVuSW5kZXgrKykge1xuXG4gICAgICAgICAgICBjb25zdCBrZXlmcmFtZSA9IGtleWZyYW1lc1t0d2VlbkluZGV4XTtcblxuICAgICAgICAgICAgaWYgKGlzT2JqKGtleWZyYW1lKSkge1xuICAgICAgICAgICAgICBrZXkgPSBrZXlmcmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGtleU9iamVjdFRhcmdldC50byA9IC8qKiBAdHlwZSB7VHdlZW5QYXJhbVZhbHVlfSAqLyhrZXlmcmFtZSk7XG4gICAgICAgICAgICAgIGtleSA9IGtleU9iamVjdFRhcmdldDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG9GdW5jdGlvblN0b3JlLmZ1bmMgPSBudWxsO1xuXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlZFRvVmFsdWUgPSBnZXRGdW5jdGlvblZhbHVlKGtleS50bywgdGFyZ2V0LCB0aSwgdGwsIHRvRnVuY3Rpb25TdG9yZSk7XG5cbiAgICAgICAgICAgIGxldCB0d2VlblRvVmFsdWU7XG4gICAgICAgICAgICAvLyBBbGxvd3MgZnVuY3Rpb24gYmFzZWQgdmFsdWVzIHRvIHJldHVybiBhbiBvYmplY3Qgc3ludGF4IHZhbHVlICh7dG86IHZ9KVxuICAgICAgICAgICAgaWYgKGlzT2JqKGNvbXB1dGVkVG9WYWx1ZSkgJiYgIWlzVW5kKGNvbXB1dGVkVG9WYWx1ZS50bykpIHtcbiAgICAgICAgICAgICAga2V5ID0gY29tcHV0ZWRUb1ZhbHVlO1xuICAgICAgICAgICAgICB0d2VlblRvVmFsdWUgPSBjb21wdXRlZFRvVmFsdWUudG87XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0d2VlblRvVmFsdWUgPSBjb21wdXRlZFRvVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0d2VlbkZyb21WYWx1ZSA9IGdldEZ1bmN0aW9uVmFsdWUoa2V5LmZyb20sIHRhcmdldCwgdGksIHRsKTtcbiAgICAgICAgICAgIGNvbnN0IGtleUVhc2luZyA9IGtleS5lYXNlO1xuICAgICAgICAgICAgY29uc3QgaGFzU3ByaW5nID0gIWlzVW5kKGtleUVhc2luZykgJiYgIWlzVW5kKC8qKiBAdHlwZSB7U3ByaW5nfSAqLyhrZXlFYXNpbmcpLmVhc2UpO1xuICAgICAgICAgICAgLy8gRWFzaW5nIGFyZSB0cmVhdGVkIGRpZmZlcmVudGx5IGFuZCBkb24ndCBhY2NlcHQgZnVuY3Rpb24gYmFzZWQgdmFsdWUgdG8gcHJldmVudCBoYXZpbmcgdG8gcGFzcyBhIGZ1bmN0aW9uIHdyYXBwZXIgdGhhdCByZXR1cm5zIGFuIG90aGVyIGZ1bmN0aW9uIGFsbCB0aGUgdGltZVxuICAgICAgICAgICAgY29uc3QgdHdlZW5FYXNpbmcgPSBoYXNTcHJpbmcgPyAvKiogQHR5cGUge1NwcmluZ30gKi8oa2V5RWFzaW5nKS5lYXNlIDoga2V5RWFzaW5nIHx8IHRFYXNpbmc7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgZGVmYXVsdCBpbmRpdmlkdWFsIGtleWZyYW1lIGR1cmF0aW9uIGJ5IGRpdmlkaW5nIHRoZSB0bCBvZiBrZXlmcmFtZXNcbiAgICAgICAgICAgIGNvbnN0IHR3ZWVuRHVyYXRpb24gPSBoYXNTcHJpbmcgPyAvKiogQHR5cGUge1NwcmluZ30gKi8oa2V5RWFzaW5nKS5kdXJhdGlvbiA6IGdldEZ1bmN0aW9uVmFsdWUoc2V0VmFsdWUoa2V5LmR1cmF0aW9uLCAobCA+IDEgPyBnZXRGdW5jdGlvblZhbHVlKHREdXJhdGlvbiwgdGFyZ2V0LCB0aSwgdGwpIC8gbCA6IHREdXJhdGlvbikpLCB0YXJnZXQsIHRpLCB0bCk7XG4gICAgICAgICAgICAvLyBEZWZhdWx0IGRlbGF5IHZhbHVlIHNob3VsZCBvbmx5IGJlIGFwcGxpZWQgdG8gdGhlIGZpcnN0IHR3ZWVuXG4gICAgICAgICAgICBjb25zdCB0d2VlbkRlbGF5ID0gZ2V0RnVuY3Rpb25WYWx1ZShzZXRWYWx1ZShrZXkuZGVsYXksICghdHdlZW5JbmRleCA/IHREZWxheSA6IDApKSwgdGFyZ2V0LCB0aSwgdGwpO1xuICAgICAgICAgICAgY29uc3QgY29tcHV0ZWRDb21wb3NpdGlvbiA9IGdldEZ1bmN0aW9uVmFsdWUoc2V0VmFsdWUoa2V5LmNvbXBvc2l0aW9uLCB0Q29tcG9zaXRpb24pLCB0YXJnZXQsIHRpLCB0bCk7XG4gICAgICAgICAgICBjb25zdCB0d2VlbkNvbXBvc2l0aW9uID0gaXNOdW0oY29tcHV0ZWRDb21wb3NpdGlvbikgPyBjb21wdXRlZENvbXBvc2l0aW9uIDogY29tcG9zaXRpb25UeXBlc1tjb21wdXRlZENvbXBvc2l0aW9uXTtcbiAgICAgICAgICAgIC8vIE1vZGlmaWVycyBhcmUgdHJlYXRlZCBkaWZmZXJlbnRseSBhbmQgZG9uJ3QgYWNjZXB0IGZ1bmN0aW9uIGJhc2VkIHZhbHVlIHRvIHByZXZlbnQgaGF2aW5nIHRvIHBhc3MgYSBmdW5jdGlvbiB3cmFwcGVyXG4gICAgICAgICAgICBjb25zdCB0d2Vlbk1vZGlmaWVyID0ga2V5Lm1vZGlmaWVyIHx8IHRNb2RpZmllcjtcbiAgICAgICAgICAgIGNvbnN0IGhhc0Zyb212YWx1ZSA9ICFpc1VuZCh0d2VlbkZyb21WYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBoYXNUb1ZhbHVlID0gIWlzVW5kKHR3ZWVuVG9WYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBpc0Zyb21Ub0FycmF5ID0gaXNBcnIodHdlZW5Ub1ZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IGlzRnJvbVRvVmFsdWUgPSBpc0Zyb21Ub0FycmF5IHx8IChoYXNGcm9tdmFsdWUgJiYgaGFzVG9WYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCB0d2VlblN0YXJ0VGltZSA9IHByZXZUd2VlbiA/IGxhc3RUd2VlbkNoYW5nZUVuZFRpbWUgKyB0d2VlbkRlbGF5IDogdHdlZW5EZWxheTtcbiAgICAgICAgICAgIGNvbnN0IGFic29sdXRlU3RhcnRUaW1lID0gYWJzb2x1dGVPZmZzZXRUaW1lICsgdHdlZW5TdGFydFRpbWU7XG5cbiAgICAgICAgICAgIC8vIEZvcmNlIGEgb25SZW5kZXIgY2FsbGJhY2sgaWYgdGhlIGFuaW1hdGlvbiBjb250YWlucyBhdCBsZWFzdCBvbmUgZnJvbSB2YWx1ZSBhbmQgYXV0b3BsYXkgaXMgc2V0IHRvIGZhbHNlXG4gICAgICAgICAgICBpZiAoIXNob3VsZFRyaWdnZXJSZW5kZXIgJiYgKGhhc0Zyb212YWx1ZSB8fCBpc0Zyb21Ub0FycmF5KSkgc2hvdWxkVHJpZ2dlclJlbmRlciA9IDE7XG5cbiAgICAgICAgICAgIGxldCBwcmV2U2libGluZyA9IHByZXZUd2VlbjtcblxuICAgICAgICAgICAgaWYgKHR3ZWVuQ29tcG9zaXRpb24gIT09IGNvbXBvc2l0aW9uVHlwZXMubm9uZSkge1xuICAgICAgICAgICAgICBpZiAoIXNpYmxpbmdzKSBzaWJsaW5ncyA9IGdldFR3ZWVuU2libGluZ3ModGFyZ2V0LCBwcm9wTmFtZSk7XG4gICAgICAgICAgICAgIGxldCBuZXh0U2libGluZyA9IHNpYmxpbmdzLl9oZWFkO1xuICAgICAgICAgICAgICAvLyBJdGVyYXRlIHRyb3VnaCBhbGwgdGhlIG5leHQgc2libGluZ3MgdW50aWwgd2UgZmluZCBhIHNpYmxpbmcgd2l0aCBhbiBlcXVhbCBvciBpbmZlcmlvciBzdGFydCB0aW1lXG4gICAgICAgICAgICAgIHdoaWxlIChuZXh0U2libGluZyAmJiAhbmV4dFNpYmxpbmcuX2lzT3ZlcnJpZGRlbiAmJiBuZXh0U2libGluZy5fYWJzb2x1dGVTdGFydFRpbWUgPD0gYWJzb2x1dGVTdGFydFRpbWUpIHtcbiAgICAgICAgICAgICAgICBwcmV2U2libGluZyA9IG5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIG5leHRTaWJsaW5nID0gbmV4dFNpYmxpbmcuX25leHRSZXA7XG4gICAgICAgICAgICAgICAgLy8gT3ZlcnJpZGVzIGFsbCB0aGUgbmV4dCBzaWJsaW5ncyBpZiB0aGUgbmV4dCBzaWJsaW5nIHN0YXJ0cyBhdCB0aGUgc2FtZSB0aW1lIG9mIGFmdGVyIGFzIHRoZSBuZXcgdHdlZW4gc3RhcnQgdGltZVxuICAgICAgICAgICAgICAgIGlmIChuZXh0U2libGluZyAmJiBuZXh0U2libGluZy5fYWJzb2x1dGVTdGFydFRpbWUgPj0gYWJzb2x1dGVTdGFydFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgIHdoaWxlIChuZXh0U2libGluZykge1xuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZVR3ZWVuKG5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyB3aWxsIGVuZHMgYm90aCB0aGUgY3VycmVudCB3aGlsZSBsb29wIGFuZCB0aGUgdXBwZXIgb25lIG9uY2UgYWxsIHRoZSBuZXh0IHNpYmxsaW5ncyBoYXZlIGJlZW4gb3ZlcnJpZGVuXG4gICAgICAgICAgICAgICAgICAgIG5leHRTaWJsaW5nID0gbmV4dFNpYmxpbmcuX25leHRSZXA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERlY29tcG9zZSB2YWx1ZXNcbiAgICAgICAgICAgIGlmIChpc0Zyb21Ub1ZhbHVlKSB7XG4gICAgICAgICAgICAgIGRlY29tcG9zZVJhd1ZhbHVlKGlzRnJvbVRvQXJyYXkgPyBnZXRGdW5jdGlvblZhbHVlKHR3ZWVuVG9WYWx1ZVswXSwgdGFyZ2V0LCB0aSwgdGwpIDogdHdlZW5Gcm9tVmFsdWUsIGZyb21UYXJnZXRPYmplY3QpO1xuICAgICAgICAgICAgICBkZWNvbXBvc2VSYXdWYWx1ZShpc0Zyb21Ub0FycmF5ID8gZ2V0RnVuY3Rpb25WYWx1ZSh0d2VlblRvVmFsdWVbMV0sIHRhcmdldCwgdGksIHRsLCB0b0Z1bmN0aW9uU3RvcmUpIDogdHdlZW5Ub1ZhbHVlLCB0b1RhcmdldE9iamVjdCk7XG4gICAgICAgICAgICAgIGlmIChmcm9tVGFyZ2V0T2JqZWN0LnQgPT09IHZhbHVlVHlwZXMuTlVNQkVSKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgICBpZiAocHJldlNpYmxpbmcuX3ZhbHVlVHlwZSA9PT0gdmFsdWVUeXBlcy5VTklUKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21UYXJnZXRPYmplY3QudCA9IHZhbHVlVHlwZXMuVU5JVDtcbiAgICAgICAgICAgICAgICAgICAgZnJvbVRhcmdldE9iamVjdC51ID0gcHJldlNpYmxpbmcuX3VuaXQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGRlY29tcG9zZVJhd1ZhbHVlKFxuICAgICAgICAgICAgICAgICAgICBnZXRPcmlnaW5hbEFuaW1hdGFibGVWYWx1ZSh0YXJnZXQsIHByb3BOYW1lLCB0d2VlblR5cGUsIGFuaW1JbmxpbmVTdHlsZXMpLFxuICAgICAgICAgICAgICAgICAgICBkZWNvbXBvc2VkT3JpZ2luYWxWYWx1ZVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGlmIChkZWNvbXBvc2VkT3JpZ2luYWxWYWx1ZS50ID09PSB2YWx1ZVR5cGVzLlVOSVQpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbVRhcmdldE9iamVjdC50ID0gdmFsdWVUeXBlcy5VTklUO1xuICAgICAgICAgICAgICAgICAgICBmcm9tVGFyZ2V0T2JqZWN0LnUgPSBkZWNvbXBvc2VkT3JpZ2luYWxWYWx1ZS51O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKGhhc1RvVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkZWNvbXBvc2VSYXdWYWx1ZSh0d2VlblRvVmFsdWUsIHRvVGFyZ2V0T2JqZWN0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldlR3ZWVuKSB7XG4gICAgICAgICAgICAgICAgICBkZWNvbXBvc2VUd2VlblZhbHVlKHByZXZUd2VlbiwgdG9UYXJnZXRPYmplY3QpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAvLyBObyBuZWVkIHRvIGdldCBhbmQgcGFyc2UgdGhlIG9yaWdpbmFsIHZhbHVlIGlmIHRoZSB0d2VlbiBpcyBwYXJ0IG9mIGEgdGltZWxpbmUgYW5kIGhhcyBhIHByZXZpb3VzIHNpYmxpbmcgcGFydCBvZiB0aGUgc2FtZSB0aW1lbGluZVxuICAgICAgICAgICAgICAgICAgZGVjb21wb3NlUmF3VmFsdWUocGFyZW50ICYmIHByZXZTaWJsaW5nICYmIHByZXZTaWJsaW5nLnBhcmVudC5wYXJlbnQgPT09IHBhcmVudCA/IHByZXZTaWJsaW5nLl92YWx1ZSA6XG4gICAgICAgICAgICAgICAgICBnZXRPcmlnaW5hbEFuaW1hdGFibGVWYWx1ZSh0YXJnZXQsIHByb3BOYW1lLCB0d2VlblR5cGUsIGFuaW1JbmxpbmVTdHlsZXMpLCB0b1RhcmdldE9iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChoYXNGcm9tdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkZWNvbXBvc2VSYXdWYWx1ZSh0d2VlbkZyb21WYWx1ZSwgZnJvbVRhcmdldE9iamVjdCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZUd2Vlbikge1xuICAgICAgICAgICAgICAgICAgZGVjb21wb3NlVHdlZW5WYWx1ZShwcmV2VHdlZW4sIGZyb21UYXJnZXRPYmplY3QpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBkZWNvbXBvc2VSYXdWYWx1ZShwYXJlbnQgJiYgcHJldlNpYmxpbmcgJiYgcHJldlNpYmxpbmcucGFyZW50LnBhcmVudCA9PT0gcGFyZW50ID8gcHJldlNpYmxpbmcuX3ZhbHVlIDpcbiAgICAgICAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gZ2V0IGFuZCBwYXJzZSB0aGUgb3JpZ2luYWwgdmFsdWUgaWYgdGhlIHR3ZWVuIGlzIHBhcnQgb2YgYSB0aW1lbGluZSBhbmQgaGFzIGEgcHJldmlvdXMgc2libGluZyBwYXJ0IG9mIHRoZSBzYW1lIHRpbWVsaW5lXG4gICAgICAgICAgICAgICAgICBnZXRPcmlnaW5hbEFuaW1hdGFibGVWYWx1ZSh0YXJnZXQsIHByb3BOYW1lLCB0d2VlblR5cGUsIGFuaW1JbmxpbmVTdHlsZXMpLCBmcm9tVGFyZ2V0T2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwbHkgb3BlcmF0b3JzXG4gICAgICAgICAgICBpZiAoZnJvbVRhcmdldE9iamVjdC5vKSB7XG4gICAgICAgICAgICAgIGZyb21UYXJnZXRPYmplY3QubiA9IGdldFJlbGF0aXZlVmFsdWUoXG4gICAgICAgICAgICAgICAgIXByZXZTaWJsaW5nID8gZGVjb21wb3NlUmF3VmFsdWUoXG4gICAgICAgICAgICAgICAgICBnZXRPcmlnaW5hbEFuaW1hdGFibGVWYWx1ZSh0YXJnZXQsIHByb3BOYW1lLCB0d2VlblR5cGUsIGFuaW1JbmxpbmVTdHlsZXMpLFxuICAgICAgICAgICAgICAgICAgZGVjb21wb3NlZE9yaWdpbmFsVmFsdWVcbiAgICAgICAgICAgICAgICApLm4gOiBwcmV2U2libGluZy5fdG9OdW1iZXIsXG4gICAgICAgICAgICAgICAgZnJvbVRhcmdldE9iamVjdC5uLFxuICAgICAgICAgICAgICAgIGZyb21UYXJnZXRPYmplY3Qub1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodG9UYXJnZXRPYmplY3Qubykge1xuICAgICAgICAgICAgICB0b1RhcmdldE9iamVjdC5uID0gZ2V0UmVsYXRpdmVWYWx1ZShmcm9tVGFyZ2V0T2JqZWN0Lm4sIHRvVGFyZ2V0T2JqZWN0Lm4sIHRvVGFyZ2V0T2JqZWN0Lm8pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBWYWx1ZXMgb21vZ2VuaXNhdGlvbiBpbiBjYXNlcyBvZiB0eXBlIGRpZmZlcmVuY2UgYmV0d2VlbiBcImZyb21cIiBhbmQgXCJ0b1wiXG4gICAgICAgICAgICBpZiAoZnJvbVRhcmdldE9iamVjdC50ICE9PSB0b1RhcmdldE9iamVjdC50KSB7XG4gICAgICAgICAgICAgIGlmIChmcm9tVGFyZ2V0T2JqZWN0LnQgPT09IHZhbHVlVHlwZXMuQ09NUExFWCB8fCB0b1RhcmdldE9iamVjdC50ID09PSB2YWx1ZVR5cGVzLkNPTVBMRVgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV4VmFsdWUgPSBmcm9tVGFyZ2V0T2JqZWN0LnQgPT09IHZhbHVlVHlwZXMuQ09NUExFWCA/IGZyb21UYXJnZXRPYmplY3QgOiB0b1RhcmdldE9iamVjdDtcbiAgICAgICAgICAgICAgICBjb25zdCBub3RDb21wbGV4VmFsdWUgPSBmcm9tVGFyZ2V0T2JqZWN0LnQgPT09IHZhbHVlVHlwZXMuQ09NUExFWCA/IHRvVGFyZ2V0T2JqZWN0IDogZnJvbVRhcmdldE9iamVjdDtcbiAgICAgICAgICAgICAgICBub3RDb21wbGV4VmFsdWUudCA9IHZhbHVlVHlwZXMuQ09NUExFWDtcbiAgICAgICAgICAgICAgICBub3RDb21wbGV4VmFsdWUucyA9IGNsb25lQXJyYXkoY29tcGxleFZhbHVlLnMpO1xuICAgICAgICAgICAgICAgIG5vdENvbXBsZXhWYWx1ZS5kID0gY29tcGxleFZhbHVlLmQubWFwKCgpID0+IG5vdENvbXBsZXhWYWx1ZS5uKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmcm9tVGFyZ2V0T2JqZWN0LnQgPT09IHZhbHVlVHlwZXMuVU5JVCB8fCB0b1RhcmdldE9iamVjdC50ID09PSB2YWx1ZVR5cGVzLlVOSVQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1bml0VmFsdWUgPSBmcm9tVGFyZ2V0T2JqZWN0LnQgPT09IHZhbHVlVHlwZXMuVU5JVCA/IGZyb21UYXJnZXRPYmplY3QgOiB0b1RhcmdldE9iamVjdDtcbiAgICAgICAgICAgICAgICBjb25zdCBub3RVbml0VmFsdWUgPSBmcm9tVGFyZ2V0T2JqZWN0LnQgPT09IHZhbHVlVHlwZXMuVU5JVCA/IHRvVGFyZ2V0T2JqZWN0IDogZnJvbVRhcmdldE9iamVjdDtcbiAgICAgICAgICAgICAgICBub3RVbml0VmFsdWUudCA9IHZhbHVlVHlwZXMuVU5JVDtcbiAgICAgICAgICAgICAgICBub3RVbml0VmFsdWUudSA9IHVuaXRWYWx1ZS51O1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZyb21UYXJnZXRPYmplY3QudCA9PT0gdmFsdWVUeXBlcy5DT0xPUiB8fCB0b1RhcmdldE9iamVjdC50ID09PSB2YWx1ZVR5cGVzLkNPTE9SKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JWYWx1ZSA9IGZyb21UYXJnZXRPYmplY3QudCA9PT0gdmFsdWVUeXBlcy5DT0xPUiA/IGZyb21UYXJnZXRPYmplY3QgOiB0b1RhcmdldE9iamVjdDtcbiAgICAgICAgICAgICAgICBjb25zdCBub3RDb2xvclZhbHVlID0gZnJvbVRhcmdldE9iamVjdC50ID09PSB2YWx1ZVR5cGVzLkNPTE9SID8gdG9UYXJnZXRPYmplY3QgOiBmcm9tVGFyZ2V0T2JqZWN0O1xuICAgICAgICAgICAgICAgIG5vdENvbG9yVmFsdWUudCA9IHZhbHVlVHlwZXMuQ09MT1I7XG4gICAgICAgICAgICAgICAgbm90Q29sb3JWYWx1ZS5zID0gY29sb3JWYWx1ZS5zO1xuICAgICAgICAgICAgICAgIG5vdENvbG9yVmFsdWUuZCA9IFswLCAwLCAwLCAxXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVbml0IGNvbnZlcnNpb25cbiAgICAgICAgICAgIGlmIChmcm9tVGFyZ2V0T2JqZWN0LnUgIT09IHRvVGFyZ2V0T2JqZWN0LnUpIHtcbiAgICAgICAgICAgICAgbGV0IHZhbHVlVG9Db252ZXJ0ID0gdG9UYXJnZXRPYmplY3QudSA/IGZyb21UYXJnZXRPYmplY3QgOiB0b1RhcmdldE9iamVjdDtcbiAgICAgICAgICAgICAgdmFsdWVUb0NvbnZlcnQgPSBjb252ZXJ0VmFsdWVVbml0KC8qKiBAdHlwZSB7RE9NVGFyZ2V0fSAqLyh0YXJnZXQpLCB2YWx1ZVRvQ29udmVydCwgdG9UYXJnZXRPYmplY3QudSA/IHRvVGFyZ2V0T2JqZWN0LnUgOiBmcm9tVGFyZ2V0T2JqZWN0LnUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgLy8gVE9ETzpcbiAgICAgICAgICAgICAgLy8gY29udmVydFZhbHVlVW5pdCh0YXJnZXQsIHRvLnUgPyBmcm9tIDogdG8sIHRvLnUgPyB0by51IDogZnJvbS51KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRmlsbCBpbiBub24gZXhpc3RpbmcgY29tcGxleCB2YWx1ZXNcbiAgICAgICAgICAgIGlmICh0b1RhcmdldE9iamVjdC5kICYmIGZyb21UYXJnZXRPYmplY3QuZCAmJiAodG9UYXJnZXRPYmplY3QuZC5sZW5ndGggIT09IGZyb21UYXJnZXRPYmplY3QuZC5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGxvbmdlc3RWYWx1ZSA9IGZyb21UYXJnZXRPYmplY3QuZC5sZW5ndGggPiB0b1RhcmdldE9iamVjdC5kLmxlbmd0aCA/IGZyb21UYXJnZXRPYmplY3QgOiB0b1RhcmdldE9iamVjdDtcbiAgICAgICAgICAgICAgY29uc3Qgc2hvcnRlc3RWYWx1ZSA9IGxvbmdlc3RWYWx1ZSA9PT0gZnJvbVRhcmdldE9iamVjdCA/IHRvVGFyZ2V0T2JqZWN0IDogZnJvbVRhcmdldE9iamVjdDtcbiAgICAgICAgICAgICAgLy8gVE9ETzogQ2hlY2sgaWYgbiBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkIG9mIDAgZm9yIGRlZmF1bHQgY29tcGxleCB2YWx1ZXNcbiAgICAgICAgICAgICAgc2hvcnRlc3RWYWx1ZS5kID0gbG9uZ2VzdFZhbHVlLmQubWFwKChfLCBpKSA9PiBpc1VuZChzaG9ydGVzdFZhbHVlLmRbaV0pID8gMCA6IHNob3J0ZXN0VmFsdWUuZFtpXSk7XG4gICAgICAgICAgICAgIHNob3J0ZXN0VmFsdWUucyA9IGNsb25lQXJyYXkobG9uZ2VzdFZhbHVlLnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUd2VlbiBmYWN0b3J5XG5cbiAgICAgICAgICAgIC8vIFJvdW5kaW5nIGlzIG5lY2Vzc2FyeSBoZXJlIHRvIG1pbmltaXplIGZsb2F0aW5nIHBvaW50IGVycm9yc1xuICAgICAgICAgICAgY29uc3QgdHdlZW5VcGRhdGVEdXJhdGlvbiA9IHJvdW5kKCt0d2VlbkR1cmF0aW9uIHx8IG1pblZhbHVlLCAxMik7XG5cbiAgICAgICAgICAgIC8qKiBAdHlwZSB7VHdlZW59ICovXG4gICAgICAgICAgICBjb25zdCB0d2VlbiA9IHtcbiAgICAgICAgICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgICAgICAgICBpZDogdHdlZW5JZCsrLFxuICAgICAgICAgICAgICBwcm9wZXJ0eTogcHJvcE5hbWUsXG4gICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAgICBfdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgIF9mdW5jOiB0b0Z1bmN0aW9uU3RvcmUuZnVuYyxcbiAgICAgICAgICAgICAgX2Vhc2U6IHBhcnNlRWFzaW5ncyh0d2VlbkVhc2luZyksXG4gICAgICAgICAgICAgIF9mcm9tTnVtYmVyczogY2xvbmVBcnJheShmcm9tVGFyZ2V0T2JqZWN0LmQpLFxuICAgICAgICAgICAgICBfdG9OdW1iZXJzOiBjbG9uZUFycmF5KHRvVGFyZ2V0T2JqZWN0LmQpLFxuICAgICAgICAgICAgICBfc3RyaW5nczogY2xvbmVBcnJheSh0b1RhcmdldE9iamVjdC5zKSxcbiAgICAgICAgICAgICAgX2Zyb21OdW1iZXI6IGZyb21UYXJnZXRPYmplY3QubixcbiAgICAgICAgICAgICAgX3RvTnVtYmVyOiB0b1RhcmdldE9iamVjdC5uLFxuICAgICAgICAgICAgICBfbnVtYmVyczogY2xvbmVBcnJheShmcm9tVGFyZ2V0T2JqZWN0LmQpLCAvLyBGb3IgYWRkaXRpdmUgdHdlZW4gYW5kIGFuaW1hdGFibGVzXG4gICAgICAgICAgICAgIF9udW1iZXI6IGZyb21UYXJnZXRPYmplY3QubiwgLy8gRm9yIGFkZGl0aXZlIHR3ZWVuIGFuZCBhbmltYXRhYmxlc1xuICAgICAgICAgICAgICBfdW5pdDogdG9UYXJnZXRPYmplY3QudSxcbiAgICAgICAgICAgICAgX21vZGlmaWVyOiB0d2Vlbk1vZGlmaWVyLFxuICAgICAgICAgICAgICBfY3VycmVudFRpbWU6IDAsXG4gICAgICAgICAgICAgIF9zdGFydFRpbWU6IHR3ZWVuU3RhcnRUaW1lLFxuICAgICAgICAgICAgICBfZGVsYXk6ICt0d2VlbkRlbGF5LFxuICAgICAgICAgICAgICBfdXBkYXRlRHVyYXRpb246IHR3ZWVuVXBkYXRlRHVyYXRpb24sXG4gICAgICAgICAgICAgIF9jaGFuZ2VEdXJhdGlvbjogdHdlZW5VcGRhdGVEdXJhdGlvbixcbiAgICAgICAgICAgICAgX2Fic29sdXRlU3RhcnRUaW1lOiBhYnNvbHV0ZVN0YXJ0VGltZSxcbiAgICAgICAgICAgICAgLy8gTk9URTogSW52ZXN0aWdhdGUgYml0IHBhY2tpbmcgdG8gc3RvcmVzIEVOVU0gLyBCT09MXG4gICAgICAgICAgICAgIF90d2VlblR5cGU6IHR3ZWVuVHlwZSxcbiAgICAgICAgICAgICAgX3ZhbHVlVHlwZTogdG9UYXJnZXRPYmplY3QudCxcbiAgICAgICAgICAgICAgX2NvbXBvc2l0aW9uOiB0d2VlbkNvbXBvc2l0aW9uLFxuICAgICAgICAgICAgICBfaXNPdmVybGFwcGVkOiAwLFxuICAgICAgICAgICAgICBfaXNPdmVycmlkZGVuOiAwLFxuICAgICAgICAgICAgICBfcmVuZGVyVHJhbnNmb3JtczogMCxcbiAgICAgICAgICAgICAgX3ByZXZSZXA6IG51bGwsIC8vIEZvciByZXBsYWNlZCB0d2VlblxuICAgICAgICAgICAgICBfbmV4dFJlcDogbnVsbCwgLy8gRm9yIHJlcGxhY2VkIHR3ZWVuXG4gICAgICAgICAgICAgIF9wcmV2QWRkOiBudWxsLCAvLyBGb3IgYWRkaXRpdmUgdHdlZW5cbiAgICAgICAgICAgICAgX25leHRBZGQ6IG51bGwsIC8vIEZvciBhZGRpdGl2ZSB0d2VlblxuICAgICAgICAgICAgICBfcHJldjogbnVsbCxcbiAgICAgICAgICAgICAgX25leHQ6IG51bGwsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodHdlZW5Db21wb3NpdGlvbiAhPT0gY29tcG9zaXRpb25UeXBlcy5ub25lKSB7XG4gICAgICAgICAgICAgIGNvbXBvc2VUd2Vlbih0d2Vlbiwgc2libGluZ3MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNOYU4oZmlyc3RUd2VlbkNoYW5nZVN0YXJ0VGltZSkpIHtcbiAgICAgICAgICAgICAgZmlyc3RUd2VlbkNoYW5nZVN0YXJ0VGltZSA9IHR3ZWVuLl9zdGFydFRpbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSb3VuZGluZyBpcyBuZWNlc3NhcnkgaGVyZSB0byBtaW5pbWl6ZSBmbG9hdGluZyBwb2ludCBlcnJvcnNcbiAgICAgICAgICAgIGxhc3RUd2VlbkNoYW5nZUVuZFRpbWUgPSByb3VuZCh0d2VlblN0YXJ0VGltZSArIHR3ZWVuVXBkYXRlRHVyYXRpb24sIDEyKTtcbiAgICAgICAgICAgIHByZXZUd2VlbiA9IHR3ZWVuO1xuICAgICAgICAgICAgYW5pbWF0aW9uQW5pbWF0aW9uTGVuZ3RoKys7XG5cbiAgICAgICAgICAgIGFkZENoaWxkKHRoaXMsIHR3ZWVuKTtcblxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFVwZGF0ZSBhbmltYXRpb24gdGltaW5ncyB3aXRoIHRoZSBhZGRlZCB0d2VlbnMgcHJvcGVydGllc1xuXG4gICAgICAgICAgaWYgKGlzTmFOKGl0ZXJhdGlvbkRlbGF5KSB8fCBmaXJzdFR3ZWVuQ2hhbmdlU3RhcnRUaW1lIDwgaXRlcmF0aW9uRGVsYXkpIHtcbiAgICAgICAgICAgIGl0ZXJhdGlvbkRlbGF5ID0gZmlyc3RUd2VlbkNoYW5nZVN0YXJ0VGltZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXNOYU4oaXRlcmF0aW9uRHVyYXRpb24pIHx8IGxhc3RUd2VlbkNoYW5nZUVuZFRpbWUgPiBpdGVyYXRpb25EdXJhdGlvbikge1xuICAgICAgICAgICAgaXRlcmF0aW9uRHVyYXRpb24gPSBsYXN0VHdlZW5DaGFuZ2VFbmRUaW1lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFRPRE86IEZpbmQgYSB3YXkgdG8gaW5saW5lIHR3ZWVuLl9yZW5kZXJUcmFuc2Zvcm1zID0gMSBoZXJlXG4gICAgICAgICAgaWYgKHR3ZWVuVHlwZSA9PT0gdHdlZW5UeXBlcy5UUkFOU0ZPUk0pIHtcbiAgICAgICAgICAgIGxhc3RUcmFuc2Zvcm1Hcm91cEluZGV4ID0gYW5pbWF0aW9uQW5pbWF0aW9uTGVuZ3RoIC0gdHdlZW5JbmRleDtcbiAgICAgICAgICAgIGxhc3RUcmFuc2Zvcm1Hcm91cExlbmd0aCA9IGFuaW1hdGlvbkFuaW1hdGlvbkxlbmd0aDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIC8vIFNldCBfcmVuZGVyVHJhbnNmb3JtcyB0byBsYXN0IHRyYW5zZm9ybSBwcm9wZXJ0eSB0byBjb3JyZWN0bHkgcmVuZGVyIHRoZSB0cmFuc2Zvcm1zIGxpc3RcbiAgICAgIGlmICghaXNOYU4obGFzdFRyYW5zZm9ybUdyb3VwSW5kZXgpKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yRWFjaENoaWxkcmVuKHRoaXMsICgvKiogQHR5cGUge1R3ZWVufSAqL3R3ZWVuKSA9PiB7XG4gICAgICAgICAgaWYgKGkgPj0gbGFzdFRyYW5zZm9ybUdyb3VwSW5kZXggJiYgaSA8IGxhc3RUcmFuc2Zvcm1Hcm91cExlbmd0aCkge1xuICAgICAgICAgICAgdHdlZW4uX3JlbmRlclRyYW5zZm9ybXMgPSAxO1xuICAgICAgICAgICAgaWYgKHR3ZWVuLl9jb21wb3NpdGlvbiA9PT0gY29tcG9zaXRpb25UeXBlcy5ibGVuZCkge1xuICAgICAgICAgICAgICBmb3JFYWNoQ2hpbGRyZW4oYWRkaXRpdmUuYW5pbWF0aW9uLCAoLyoqIEB0eXBlIHtUd2Vlbn0gKi9hZGRpdGl2ZVR3ZWVuKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFkZGl0aXZlVHdlZW4uaWQgPT09IHR3ZWVuLmlkKSB7XG4gICAgICAgICAgICAgICAgICBhZGRpdGl2ZVR3ZWVuLl9yZW5kZXJUcmFuc2Zvcm1zID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpKys7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXRzTGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLndhcm4oYE5vIHRhcmdldCBmb3VuZC4gTWFrZSBzdXJlIHRoZSBlbGVtZW50IHlvdSdyZSB0cnlpbmcgdG8gYW5pbWF0ZSBpcyBhY2Nlc3NpYmxlIGJlZm9yZSBjcmVhdGluZyB5b3VyIGFuaW1hdGlvbi5gKTtcbiAgICB9XG5cbiAgICBpZiAoaXRlcmF0aW9uRGVsYXkpIHtcbiAgICAgIGZvckVhY2hDaGlsZHJlbih0aGlzLCAoLyoqIEB0eXBlIHtUd2Vlbn0gKi90d2VlbikgPT4ge1xuICAgICAgICAvLyBJZiAoc3RhcnRUaW1lIC0gZGVsYXkpIGVxdWFscyAwLCB0aGlzIG1lYW5zIHRoZSB0d2VlbiBpcyBhdCB0aGUgYmVnaW5pbmcgb2YgdGhlIGFuaW1hdGlvbiBzbyB3ZSBuZWVkIHRvIHRyaW0gdGhlIGRlbGF5IHRvb1xuICAgICAgICBpZiAoISh0d2Vlbi5fc3RhcnRUaW1lIC0gdHdlZW4uX2RlbGF5KSkge1xuICAgICAgICAgIHR3ZWVuLl9kZWxheSAtPSBpdGVyYXRpb25EZWxheTtcbiAgICAgICAgfVxuICAgICAgICB0d2Vlbi5fc3RhcnRUaW1lIC09IGl0ZXJhdGlvbkRlbGF5O1xuICAgICAgfSk7XG4gICAgICBpdGVyYXRpb25EdXJhdGlvbiAtPSBpdGVyYXRpb25EZWxheTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlcmF0aW9uRGVsYXkgPSAwO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnRzIGl0ZXJhdGlvbkR1cmF0aW9uIHRvIGJlIE5hTiBpZiBubyB2YWxpZCBhbmltYXRhYmxlIHByb3BzIGhhdmUgYmVlbiBwcm92aWRlZFxuICAgIC8vIFByZXZlbnRzIF9pdGVyYXRpb25Db3VudCB0byBiZSBOYU4gaWYgbm8gdmFsaWQgYW5pbWF0YWJsZSBwcm9wcyBoYXZlIGJlZW4gcHJvdmlkZWRcbiAgICBpZiAoIWl0ZXJhdGlvbkR1cmF0aW9uKSB7XG4gICAgICBpdGVyYXRpb25EdXJhdGlvbiA9IG1pblZhbHVlO1xuICAgICAgdGhpcy5pdGVyYXRpb25Db3VudCA9IDA7XG4gICAgfVxuICAgIC8qKiBAdHlwZSB7VGFyZ2V0c0FycmF5fSAqL1xuICAgIHRoaXMudGFyZ2V0cyA9IHBhcnNlZFRhcmdldHM7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5kdXJhdGlvbiA9IGl0ZXJhdGlvbkR1cmF0aW9uID09PSBtaW5WYWx1ZSA/IG1pblZhbHVlIDogY2xhbXBJbmZpbml0eSgoKGl0ZXJhdGlvbkR1cmF0aW9uICsgdGhpcy5fbG9vcERlbGF5KSAqIHRoaXMuaXRlcmF0aW9uQ291bnQpIC0gdGhpcy5fbG9vcERlbGF5KSB8fCBtaW5WYWx1ZTtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPHRoaXM+fSAqL1xuICAgIHRoaXMub25SZW5kZXIgPSBvblJlbmRlciB8fCBhbmltRGVmYXVsdHMub25SZW5kZXI7XG4gICAgLyoqIEB0eXBlIHtFYXNpbmdGdW5jdGlvbn0gKi9cbiAgICB0aGlzLl9lYXNlID0gYW5pbUVhc2U7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5fZGVsYXkgPSBpdGVyYXRpb25EZWxheTtcbiAgICAvLyBOT1RFOiBJJ20ga2VlcGluZyBkZWxheSB2YWx1ZXMgc2VwYXJhdGVkIGZyb20gb2Zmc2V0cyBpbiB0aW1lbGluZXMgYmVjYXVzZSBkZWxheXMgY2FuIG92ZXJyaWRlIHByZXZpb3VzIHR3ZWVucyBhbmQgaXQgY291bGQgYmUgY29uZnVzaW5nIHRvIGRlYnVnIGEgdGltZWxpbmUgd2l0aCBvdmVycmlkZGVuIHR3ZWVucyBhbmQgbm8gYXNzb2NpYXRlZCB2aXNpYmxlIGRlbGF5cy5cbiAgICAvLyB0aGlzLl9kZWxheSA9IHBhcmVudCA/IDAgOiBpdGVyYXRpb25EZWxheTtcbiAgICAvLyB0aGlzLl9vZmZzZXQgKz0gcGFyZW50ID8gaXRlcmF0aW9uRGVsYXkgOiAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuaXRlcmF0aW9uRHVyYXRpb24gPSBpdGVyYXRpb25EdXJhdGlvbjtcbiAgICAvKiogQHR5cGUge3t9fSAqL1xuICAgIHRoaXMuX2lubGluZVN0eWxlcyA9IGFuaW1JbmxpbmVTdHlsZXM7XG5cbiAgICBpZiAoIXRoaXMuX2F1dG9wbGF5ICYmIHNob3VsZFRyaWdnZXJSZW5kZXIpIHRoaXMub25SZW5kZXIodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtICB7TnVtYmVyfSBuZXdEdXJhdGlvblxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgc3RyZXRjaChuZXdEdXJhdGlvbikge1xuICAgIGNvbnN0IGN1cnJlbnREdXJhdGlvbiA9IHRoaXMuZHVyYXRpb247XG4gICAgaWYgKGN1cnJlbnREdXJhdGlvbiA9PT0gbm9ybWFsaXplVGltZShuZXdEdXJhdGlvbikpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IHRpbWVTY2FsZSA9IG5ld0R1cmF0aW9uIC8gY3VycmVudER1cmF0aW9uO1xuICAgIC8vIE5PVEU6IEZpbmQgYSBiZXR0ZXIgd2F5IHRvIGhhbmRsZSB0aGUgc3RyZXRjaCBvZiBhbiBhbmltYXRpb24gYWZ0ZXIgc3RyZXRjaCA9IDBcbiAgICBmb3JFYWNoQ2hpbGRyZW4odGhpcywgKC8qKiBAdHlwZSB7VHdlZW59ICovdHdlZW4pID0+IHtcbiAgICAgIC8vIFJvdW5kaW5nIGlzIG5lY2Vzc2FyeSBoZXJlIHRvIG1pbmltaXplIGZsb2F0aW5nIHBvaW50IGVycm9yc1xuICAgICAgdHdlZW4uX3VwZGF0ZUR1cmF0aW9uID0gbm9ybWFsaXplVGltZSh0d2Vlbi5fdXBkYXRlRHVyYXRpb24gKiB0aW1lU2NhbGUpO1xuICAgICAgdHdlZW4uX2NoYW5nZUR1cmF0aW9uID0gbm9ybWFsaXplVGltZSh0d2Vlbi5fY2hhbmdlRHVyYXRpb24gKiB0aW1lU2NhbGUpO1xuICAgICAgdHdlZW4uX2N1cnJlbnRUaW1lICo9IHRpbWVTY2FsZTtcbiAgICAgIHR3ZWVuLl9zdGFydFRpbWUgKj0gdGltZVNjYWxlO1xuICAgICAgdHdlZW4uX2Fic29sdXRlU3RhcnRUaW1lICo9IHRpbWVTY2FsZTtcbiAgICB9KTtcbiAgICByZXR1cm4gc3VwZXIuc3RyZXRjaChuZXdEdXJhdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIHJlZnJlc2goKSB7XG4gICAgZm9yRWFjaENoaWxkcmVuKHRoaXMsICgvKiogQHR5cGUge1R3ZWVufSAqL3R3ZWVuKSA9PiB7XG4gICAgICBjb25zdCBvZ1ZhbHVlID0gZ2V0T3JpZ2luYWxBbmltYXRhYmxlVmFsdWUodHdlZW4udGFyZ2V0LCB0d2Vlbi5wcm9wZXJ0eSwgdHdlZW4uX3R3ZWVuVHlwZSk7XG4gICAgICBkZWNvbXBvc2VSYXdWYWx1ZShvZ1ZhbHVlLCBkZWNvbXBvc2VkT3JpZ2luYWxWYWx1ZSk7XG4gICAgICB0d2Vlbi5fZnJvbU51bWJlcnMgPSBjbG9uZUFycmF5KGRlY29tcG9zZWRPcmlnaW5hbFZhbHVlLmQpO1xuICAgICAgdHdlZW4uX2Zyb21OdW1iZXIgPSBkZWNvbXBvc2VkT3JpZ2luYWxWYWx1ZS5uO1xuICAgICAgaWYgKHR3ZWVuLl9mdW5jKSB7XG4gICAgICAgIGRlY29tcG9zZVJhd1ZhbHVlKHR3ZWVuLl9mdW5jKCksIHRvVGFyZ2V0T2JqZWN0KTtcbiAgICAgICAgdHdlZW4uX3RvTnVtYmVycyA9IGNsb25lQXJyYXkodG9UYXJnZXRPYmplY3QuZCk7XG4gICAgICAgIHR3ZWVuLl9zdHJpbmdzID0gY2xvbmVBcnJheSh0b1RhcmdldE9iamVjdC5zKTtcbiAgICAgICAgdHdlZW4uX3RvTnVtYmVyID0gdG9UYXJnZXRPYmplY3QubjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWwgdGhlIGFuaW1hdGlvbiBhbmQgcmV2ZXJ0IGFsbCB0aGUgdmFsdWVzIGFmZmVjdGVkIGJ5IHRoaXMgYW5pbWF0aW9uIHRvIHRoZWlyIG9yaWdpbmFsIHN0YXRlXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuICByZXZlcnQoKSB7XG4gICAgc3VwZXIucmV2ZXJ0KCk7XG4gICAgcmV0dXJuIGNsZWFuSW5saW5lU3R5bGVzKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge0NhbGxiYWNrPHRoaXM+fSBbY2FsbGJhY2tdXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqL1xuICB0aGVuKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHN1cGVyLnRoZW4oY2FsbGJhY2spO1xuICB9XG5cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1RhcmdldHNQYXJhbX0gdGFyZ2V0c1xuICogQHBhcmFtIHtBbmltYXRpb25QYXJhbXN9IHBhcmFtZXRlcnNcbiAqIEByZXR1cm4ge0pTQW5pbWF0aW9ufVxuICovXG5jb25zdCBhbmltYXRlID0gKHRhcmdldHMsIHBhcmFtZXRlcnMpID0+IG5ldyBKU0FuaW1hdGlvbih0YXJnZXRzLCBwYXJhbWV0ZXJzLCBudWxsLCAwLCBmYWxzZSkuaW5pdCgpO1xuXG5cblxuXG4vKipcbiAqIENvbnZlcnRzIGFuIGVhc2luZyBmdW5jdGlvbiBpbnRvIGEgdmFsaWQgQ1NTIGxpbmVhcigpIHRpbWluZyBmdW5jdGlvbiBzdHJpbmdcbiAqIEBwYXJhbSB7RWFzaW5nRnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcn0gW3NhbXBsZXM9MTAwXVxuICogQHJldHVybnMge3N0cmluZ30gQ1NTIGxpbmVhcigpIHRpbWluZyBmdW5jdGlvblxuICovXG5jb25zdCBlYXNpbmdUb0xpbmVhciA9IChmbiwgc2FtcGxlcyA9IDEwMCkgPT4ge1xuICBjb25zdCBwb2ludHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc2FtcGxlczsgaSsrKSBwb2ludHMucHVzaChmbihpIC8gc2FtcGxlcykpO1xuICByZXR1cm4gYGxpbmVhcigke3BvaW50cy5qb2luKCcsICcpfSlgO1xufTtcblxuY29uc3QgV0FBUElFYXNlc0xvb2t1cHMgPSB7XG4gIGluOiAnZWFzZS1pbicsXG4gIG91dDogJ2Vhc2Utb3V0JyxcbiAgaW5PdXQ6ICdlYXNlLWluLW91dCcsXG59O1xuXG5jb25zdCBXQUFQSWVhc2VzID0gLyojX19QVVJFX18qLygoKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSB7fTtcbiAgZm9yIChsZXQgdHlwZSBpbiBlYXNlVHlwZXMpIGxpc3RbdHlwZV0gPSBhID0+IGVhc2VUeXBlc1t0eXBlXShlYXNlSW5Qb3dlcihhKSk7XG4gIHJldHVybiAvKiogQHR5cGUge1JlY29yZDxTdHJpbmcsIEVhc2luZ0Z1bmN0aW9uPn0gKi8obGlzdCk7XG59KSgpO1xuXG4vKipcbiAqIEBwYXJhbSAge0Vhc2luZ1BhcmFtfSBlYXNlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmNvbnN0IHBhcnNlV0FBUElFYXNpbmcgPSAoZWFzZSkgPT4ge1xuICBsZXQgcGFyc2VkRWFzZSA9IFdBQVBJRWFzZXNMb29rdXBzW2Vhc2VdO1xuICBpZiAocGFyc2VkRWFzZSkgcmV0dXJuIHBhcnNlZEVhc2U7XG4gIHBhcnNlZEVhc2UgPSAnbGluZWFyJztcbiAgaWYgKGlzU3RyKGVhc2UpKSB7XG4gICAgaWYgKFxuICAgICAgc3RyaW5nU3RhcnRzV2l0aChlYXNlLCAnbGluZWFyJykgfHxcbiAgICAgIHN0cmluZ1N0YXJ0c1dpdGgoZWFzZSwgJ2N1YmljLScpIHx8XG4gICAgICBzdHJpbmdTdGFydHNXaXRoKGVhc2UsICdzdGVwcycpIHx8XG4gICAgICBzdHJpbmdTdGFydHNXaXRoKGVhc2UsICdlYXNlJylcbiAgICApIHtcbiAgICAgIHBhcnNlZEVhc2UgPSBlYXNlO1xuICAgIH0gZWxzZSBpZiAoc3RyaW5nU3RhcnRzV2l0aChlYXNlLCAnY3ViaWNCJykpIHtcbiAgICAgIHBhcnNlZEVhc2UgPSB0b0xvd2VyQ2FzZShlYXNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VFYXNlU3RyaW5nKGVhc2UsIFdBQVBJZWFzZXMsIFdBQVBJRWFzZXNMb29rdXBzKTtcbiAgICAgIGlmIChpc0ZuYyhwYXJzZWQpKSBwYXJzZWRFYXNlID0gcGFyc2VkID09PSBub25lID8gJ2xpbmVhcicgOiBlYXNpbmdUb0xpbmVhcihwYXJzZWQpO1xuICAgIH1cbiAgICBXQUFQSUVhc2VzTG9va3Vwc1tlYXNlXSA9IHBhcnNlZEVhc2U7XG4gIH0gZWxzZSBpZiAoaXNGbmMoZWFzZSkpIHtcbiAgICBjb25zdCBlYXNpbmcgPSBlYXNpbmdUb0xpbmVhcihlYXNlKTtcbiAgICBpZiAoZWFzaW5nKSBwYXJzZWRFYXNlID0gZWFzaW5nO1xuICB9IGVsc2UgaWYgKC8qKiBAdHlwZSB7U3ByaW5nfSAqLyhlYXNlKS5lYXNlKSB7XG4gICAgcGFyc2VkRWFzZSA9IGVhc2luZ1RvTGluZWFyKC8qKiBAdHlwZSB7U3ByaW5nfSAqLyhlYXNlKS5lYXNlKTtcbiAgfVxuICByZXR1cm4gcGFyc2VkRWFzZTtcbn07XG5cbi8qKlxuICogQHR5cGVkZWYge1N0cmluZ3xOdW1iZXJ8QXJyYXk8U3RyaW5nPnxBcnJheTxOdW1iZXI+fSBXQUFQSVR3ZWVuVmFsdWVcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBXQUFQSUZ1bmN0aW9udmFsdWVcbiAqIEBwYXJhbSB7RE9NVGFyZ2V0fSB0YXJnZXQgLSBUaGUgYW5pbWF0ZWQgdGFyZ2V0XG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXggLSBUaGUgdGFyZ2V0IGluZGV4XG4gKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIC0gVGhlIHRvdGFsIG51bWJlciBvZiBhbmltYXRlZCB0YXJnZXRzXG4gKiBAcmV0dXJuIHtXQUFQSVR3ZWVuVmFsdWV9XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7V0FBUElUd2VlblZhbHVlfFdBQVBJRnVuY3Rpb252YWx1ZXxBcnJheTxTdHJpbmd8TnVtYmVyfFdBQVBJRnVuY3Rpb252YWx1ZT59IFdBQVBJS2V5ZnJhbWVWYWx1ZVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeyhhbmltYXRpb246IFdBQVBJQW5pbWF0aW9uKSA9PiB2b2lkfSBXQUFQSUNhbGxiYWNrXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBXQUFQSVR3ZWVuT3B0aW9uc1xuICogQHByb3BlcnR5IHtXQUFQSUtleWZyYW1lVmFsdWV9IFt0b11cbiAqIEBwcm9wZXJ0eSB7V0FBUElLZXlmcmFtZVZhbHVlfSBbZnJvbV1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfFdBQVBJRnVuY3Rpb252YWx1ZX0gW2R1cmF0aW9uXVxuICogQHByb3BlcnR5IHtOdW1iZXJ8V0FBUElGdW5jdGlvbnZhbHVlfSBbZGVsYXldXG4gKiBAcHJvcGVydHkge0Vhc2luZ1BhcmFtfSBbZWFzZV1cbiAqIEBwcm9wZXJ0eSB7Q29tcG9zaXRlT3BlcmF0aW9ufSBbY29tcG9zaXRpb25dXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBXQUFQSUFuaW1hdGlvbk9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfEJvb2xlYW59IFtsb29wXVxuICogQHByb3BlcnR5IHtCb29sZWFufSBbUmV2ZXJzZWRdXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IFtBbHRlcm5hdGVdXG4gKiBAcHJvcGVydHkge0Jvb2xlYW58U2Nyb2xsT2JzZXJ2ZXJ9IFthdXRvcGxheV1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBbcGxheWJhY2tSYXRlXVxuICogQHByb3BlcnR5IHtOdW1iZXJ8V0FBUElGdW5jdGlvbnZhbHVlfSBbZHVyYXRpb25dXG4gKiBAcHJvcGVydHkge051bWJlcnxXQUFQSUZ1bmN0aW9udmFsdWV9IFtkZWxheV1cbiAqIEBwcm9wZXJ0eSB7RWFzaW5nUGFyYW19IFtlYXNlXVxuICogQHByb3BlcnR5IHtDb21wb3NpdGVPcGVyYXRpb259IFtjb21wb3NpdGlvbl1cbiAqIEBwcm9wZXJ0eSB7V0FBUElDYWxsYmFja30gW29uQ29tcGxldGVdXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7UmVjb3JkPFN0cmluZywgV0FBUElLZXlmcmFtZVZhbHVlIHwgV0FBUElBbmltYXRpb25PcHRpb25zIHwgQm9vbGVhbiB8IFNjcm9sbE9ic2VydmVyIHwgV0FBUElDYWxsYmFjayB8IEVhc2luZ1BhcmFtIHwgV0FBUElUd2Vlbk9wdGlvbnM+ICYgV0FBUElBbmltYXRpb25PcHRpb25zfSBXQUFQSUFuaW1hdGlvblBhcmFtc1xuICovXG5cbmNvbnN0IHRyYW5zZm9ybXNTaG9ydGhhbmRzID0gWyd4JywgJ3knLCAneiddO1xuY29uc3QgY29tbW9uRGVmYXVsdFBYUHJvcGVydGllcyA9IFtcbiAgJ3BlcnNwZWN0aXZlJyxcbiAgJ3dpZHRoJyxcbiAgJ2hlaWdodCcsXG4gICdtYXJnaW4nLFxuICAncGFkZGluZycsXG4gICd0b3AnLFxuICAncmlnaHQnLFxuICAnYm90dG9tJyxcbiAgJ2xlZnQnLFxuICAnYm9yZGVyV2lkdGgnLFxuICAnZm9udFNpemUnLFxuICAnYm9yZGVyUmFkaXVzJyxcbiAgLi4udHJhbnNmb3Jtc1Nob3J0aGFuZHNcbl07XG5cbmNvbnN0IHZhbGlkSW5kaXZpZHVhbFRyYW5zZm9ybXMgPSBbLi4udHJhbnNmb3Jtc1Nob3J0aGFuZHMsIC4uLnZhbGlkVHJhbnNmb3Jtcy5maWx0ZXIodCA9PiBbJ1gnLCAnWScsICdaJ10uc29tZShheGlzID0+IHQuZW5kc1dpdGgoYXhpcykpKV07XG5cbi8vIFNldHRpbmcgaXQgdG8gdHJ1ZSBpbiBjYXNlIENTUy5yZWdpc3RlclByb3BlcnR5IGlzIG5vdCBzdXBwb3J0ZWQgd2lsbCBhdXRvbWF0aWNhbGx5IHNraXAgdGhlIHJlZ2lzdHJhdGlvbiBhbmQgZmFsbGJhY2sgdG8gbm8gYW5pbWF0aW9uXG5sZXQgdHJhbnNmb3Jtc1Byb3BlcnRpZXNSZWdpc3RlcmVkID0gaXNCcm93c2VyICYmIChpc1VuZChDU1MpIHx8ICFPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChDU1MsICdyZWdpc3RlclByb3BlcnR5JykpO1xuXG5jb25zdCByZWdpc3RlclRyYW5zZm9ybXNQcm9wZXJ0aWVzID0gKCkgPT4ge1xuICBpZiAodHJhbnNmb3Jtc1Byb3BlcnRpZXNSZWdpc3RlcmVkKSByZXR1cm47XG4gIHZhbGlkVHJhbnNmb3Jtcy5mb3JFYWNoKHQgPT4ge1xuICAgIGNvbnN0IGlzU2tldyA9IHN0cmluZ1N0YXJ0c1dpdGgodCwgJ3NrZXcnKTtcbiAgICBjb25zdCBpc1NjYWxlID0gc3RyaW5nU3RhcnRzV2l0aCh0LCAnc2NhbGUnKTtcbiAgICBjb25zdCBpc1JvdGF0ZSA9IHN0cmluZ1N0YXJ0c1dpdGgodCwgJ3JvdGF0ZScpO1xuICAgIGNvbnN0IGlzVHJhbnNsYXRlID0gc3RyaW5nU3RhcnRzV2l0aCh0LCAndHJhbnNsYXRlJyk7XG4gICAgY29uc3QgaXNBbmdsZSA9IGlzUm90YXRlIHx8IGlzU2tldztcbiAgICBjb25zdCBzeW50YXggPSBpc0FuZ2xlID8gJzxhbmdsZT4nIDogaXNTY2FsZSA/IFwiPG51bWJlcj5cIiA6IGlzVHJhbnNsYXRlID8gXCI8bGVuZ3RoLXBlcmNlbnRhZ2U+XCIgOiBcIipcIjtcbiAgICB0cnkge1xuICAgICAgQ1NTLnJlZ2lzdGVyUHJvcGVydHkoe1xuICAgICAgICBuYW1lOiAnLS0nICsgdCxcbiAgICAgICAgc3ludGF4LFxuICAgICAgICBpbmhlcml0czogZmFsc2UsXG4gICAgICAgIGluaXRpYWxWYWx1ZTogaXNUcmFuc2xhdGUgPyAnMHB4JyA6IGlzQW5nbGUgPyAnMGRlZycgOiBpc1NjYWxlID8gJzEnIDogJzAnLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCB7fSAgfSk7XG4gIHRyYW5zZm9ybXNQcm9wZXJ0aWVzUmVnaXN0ZXJlZCA9IHRydWU7XG59O1xuXG5jb25zdCBXQUFQSUFuaW1hdGlvbnNMb29rdXBzID0ge1xuICBfaGVhZDogbnVsbCxcbiAgX3RhaWw6IG51bGwsXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RE9NVGFyZ2V0fSAkZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBbcHJvcGVydHldXG4gKiBAcGFyYW0ge1dBQVBJQW5pbWF0aW9ufSBbcGFyZW50XVxuICovXG5jb25zdCByZW1vdmVXQUFQSUFuaW1hdGlvbiA9ICgkZWwsIHByb3BlcnR5LCBwYXJlbnQpID0+IHtcbiAgbGV0IG5leHRMb29rdXAgPSBXQUFQSUFuaW1hdGlvbnNMb29rdXBzLl9oZWFkO1xuICB3aGlsZSAobmV4dExvb2t1cCkge1xuICAgIGNvbnN0IG5leHQgPSBuZXh0TG9va3VwLl9uZXh0O1xuICAgIGNvbnN0IG1hdGNoVGFyZ2V0ID0gbmV4dExvb2t1cC4kZWwgPT09ICRlbDtcbiAgICBjb25zdCBtYXRjaFByb3BlcnR5ID0gIXByb3BlcnR5IHx8IG5leHRMb29rdXAucHJvcGVydHkgPT09IHByb3BlcnR5O1xuICAgIGNvbnN0IG1hdGNoUGFyZW50ID0gIXBhcmVudCB8fCBuZXh0TG9va3VwLnBhcmVudCA9PT0gcGFyZW50O1xuICAgIGlmIChtYXRjaFRhcmdldCAmJiBtYXRjaFByb3BlcnR5ICYmIG1hdGNoUGFyZW50KSB7XG4gICAgICBjb25zdCBhbmltID0gbmV4dExvb2t1cC5hbmltYXRpb247XG4gICAgICB0cnkgeyBhbmltLmNvbW1pdFN0eWxlcygpOyB9IGNhdGNoIHt9ICAgICAgYW5pbS5jYW5jZWwoKTtcbiAgICAgIHJlbW92ZUNoaWxkKFdBQVBJQW5pbWF0aW9uc0xvb2t1cHMsIG5leHRMb29rdXApO1xuICAgICAgY29uc3QgbG9va3VwUGFyZW50ID0gbmV4dExvb2t1cC5wYXJlbnQ7XG4gICAgICBpZiAobG9va3VwUGFyZW50KSB7XG4gICAgICAgIGxvb2t1cFBhcmVudC5fY29tcGxldGVkKys7XG4gICAgICAgIGlmIChsb29rdXBQYXJlbnQuYW5pbWF0aW9ucy5sZW5ndGggPT09IGxvb2t1cFBhcmVudC5fY29tcGxldGVkKSB7XG4gICAgICAgICAgbG9va3VwUGFyZW50LmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKCFsb29rdXBQYXJlbnQubXV0ZUNhbGxiYWNrcykge1xuICAgICAgICAgICAgbG9va3VwUGFyZW50LnBhdXNlZCA9IHRydWU7XG4gICAgICAgICAgICBsb29rdXBQYXJlbnQub25Db21wbGV0ZShsb29rdXBQYXJlbnQpO1xuICAgICAgICAgICAgbG9va3VwUGFyZW50Ll9yZXNvbHZlKGxvb2t1cFBhcmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIG5leHRMb29rdXAgPSBuZXh0O1xuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7V0FBUElBbmltYXRpb259IHBhcmVudFxuICogQHBhcmFtIHtET01UYXJnZXR9ICRlbFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gKiBAcGFyYW0ge1Byb3BlcnR5SW5kZXhlZEtleWZyYW1lc30ga2V5ZnJhbWVzXG4gKiBAcGFyYW0ge0tleWZyYW1lQW5pbWF0aW9uT3B0aW9uc30gcGFyYW1zXG4gKiBAcmV0dW4ge0FuaW1hdGlvbn1cbiAqL1xuY29uc3QgYWRkV0FBUElBbmltYXRpb24gPSAocGFyZW50LCAkZWwsIHByb3BlcnR5LCBrZXlmcmFtZXMsIHBhcmFtcykgPT4ge1xuICBjb25zdCBhbmltYXRpb24gPSAkZWwuYW5pbWF0ZShrZXlmcmFtZXMsIHBhcmFtcyk7XG4gIGNvbnN0IGFuaW1Ub3RhbER1cmF0aW9uID0gcGFyYW1zLmRlbGF5ICsgKCtwYXJhbXMuZHVyYXRpb24gKiBwYXJhbXMuaXRlcmF0aW9ucyk7XG4gIGFuaW1hdGlvbi5wbGF5YmFja1JhdGUgPSBwYXJlbnQuX3NwZWVkO1xuICBpZiAocGFyZW50LnBhdXNlZCkgYW5pbWF0aW9uLnBhdXNlKCk7XG4gIGlmIChwYXJlbnQuZHVyYXRpb24gPCBhbmltVG90YWxEdXJhdGlvbikge1xuICAgIHBhcmVudC5kdXJhdGlvbiA9IGFuaW1Ub3RhbER1cmF0aW9uO1xuICAgIHBhcmVudC5jb250cm9sQW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuICB9XG4gIHBhcmVudC5hbmltYXRpb25zLnB1c2goYW5pbWF0aW9uKTtcbiAgcmVtb3ZlV0FBUElBbmltYXRpb24oJGVsLCBwcm9wZXJ0eSk7XG4gIGFkZENoaWxkKFdBQVBJQW5pbWF0aW9uc0xvb2t1cHMsIHsgcGFyZW50LCBhbmltYXRpb24sICRlbCwgcHJvcGVydHksIF9uZXh0OiBudWxsLCBfcHJldjogbnVsbCB9KTtcbiAgY29uc3QgaGFuZGxlUmVtb3ZlID0gKCkgPT4geyByZW1vdmVXQUFQSUFuaW1hdGlvbigkZWwsIHByb3BlcnR5LCBwYXJlbnQpOyB9O1xuICBhbmltYXRpb24ub25yZW1vdmUgPSBoYW5kbGVSZW1vdmU7XG4gIGFuaW1hdGlvbi5vbmZpbmlzaCA9IGhhbmRsZVJlbW92ZTtcbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn07XG5cbi8qKlxuICogQHBhcmFtICB7U3RyaW5nfSBwcm9wTmFtZVxuICogQHBhcmFtICB7V0FBUElLZXlmcmFtZVZhbHVlfSB2YWx1ZVxuICogQHBhcmFtICB7RE9NVGFyZ2V0fSAkZWxcbiAqIEBwYXJhbSAge051bWJlcn0gaVxuICogQHBhcmFtICB7TnVtYmVyfSB0YXJnZXRzTGVuZ3RoXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmNvbnN0IG5vcm1hbGl6ZVR3ZWVuVmFsdWUgPSAocHJvcE5hbWUsIHZhbHVlLCAkZWwsIGksIHRhcmdldHNMZW5ndGgpID0+IHtcbiAgbGV0IHYgPSBnZXRGdW5jdGlvblZhbHVlKC8qKiBAdHlwZSB7YW55fSAqLyh2YWx1ZSksICRlbCwgaSwgdGFyZ2V0c0xlbmd0aCk7XG4gIGlmICghaXNOdW0odikpIHJldHVybiB2O1xuICBpZiAoY29tbW9uRGVmYXVsdFBYUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wTmFtZSkgfHwgc3RyaW5nU3RhcnRzV2l0aChwcm9wTmFtZSwgJ3RyYW5zbGF0ZScpKSByZXR1cm4gYCR7dn1weGA7XG4gIGlmIChzdHJpbmdTdGFydHNXaXRoKHByb3BOYW1lLCAncm90YXRlJykgfHwgc3RyaW5nU3RhcnRzV2l0aChwcm9wTmFtZSwgJ3NrZXcnKSkgcmV0dXJuIGAke3Z9ZGVnYDtcbiAgcmV0dXJuIGAke3Z9YDtcbn07XG5cbi8qKlxuICogQHBhcmFtICB7RE9NVGFyZ2V0fSAkZWxcbiAqIEBwYXJhbSAge1N0cmluZ30gcHJvcE5hbWVcbiAqIEBwYXJhbSAge1dBQVBJS2V5ZnJhbWVWYWx1ZX0gZnJvbVxuICogQHBhcmFtICB7V0FBUElLZXlmcmFtZVZhbHVlfSB0b1xuICogQHBhcmFtICB7TnVtYmVyfSBpXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHRhcmdldHNMZW5ndGhcbiAqIEByZXR1cm4ge1dBQVBJVHdlZW5WYWx1ZX1cbiAqL1xuY29uc3QgcGFyc2VJbmRpdmlkdWFsVHdlZW5WYWx1ZSA9ICgkZWwsIHByb3BOYW1lLCBmcm9tLCB0bywgaSwgdGFyZ2V0c0xlbmd0aCkgPT4ge1xuICAvKiogQHR5cGUge1dBQVBJVHdlZW5WYWx1ZX0gKi9cbiAgbGV0IHR3ZWVuVmFsdWUgPSAnMCc7XG4gIGNvbnN0IGNvbXB1dGVkVG8gPSAhaXNVbmQodG8pID8gbm9ybWFsaXplVHdlZW5WYWx1ZShwcm9wTmFtZSwgdG8sICRlbCwgaSwgdGFyZ2V0c0xlbmd0aCkgOiBnZXRDb21wdXRlZFN0eWxlKCRlbClbcHJvcE5hbWVdO1xuICBpZiAoIWlzVW5kKGZyb20pKSB7XG4gICAgY29uc3QgY29tcHV0ZWRGcm9tID0gbm9ybWFsaXplVHdlZW5WYWx1ZShwcm9wTmFtZSwgZnJvbSwgJGVsLCBpLCB0YXJnZXRzTGVuZ3RoKTtcbiAgICB0d2VlblZhbHVlID0gW2NvbXB1dGVkRnJvbSwgY29tcHV0ZWRUb107XG4gIH0gZWxzZSB7XG4gICAgdHdlZW5WYWx1ZSA9IGlzQXJyKHRvKSA/IHRvLm1hcCgoLyoqIEB0eXBlIHthbnl9ICovdikgPT4gbm9ybWFsaXplVHdlZW5WYWx1ZShwcm9wTmFtZSwgdiwgJGVsLCBpLCB0YXJnZXRzTGVuZ3RoKSkgOiBjb21wdXRlZFRvO1xuICB9XG4gIHJldHVybiB0d2VlblZhbHVlO1xufTtcblxuY2xhc3MgV0FBUElBbmltYXRpb24ge1xuLyoqXG4gKiBAcGFyYW0ge0RPTVRhcmdldHNQYXJhbX0gdGFyZ2V0c1xuICogQHBhcmFtIHtXQUFQSUFuaW1hdGlvblBhcmFtc30gcGFyYW1zXG4gKi9cbiAgY29uc3RydWN0b3IodGFyZ2V0cywgcGFyYW1zKSB7XG5cbiAgICBpZiAoZ2xvYmFscy5zY29wZSkgZ2xvYmFscy5zY29wZS5yZXZlcnRpYmxlcy5wdXNoKHRoaXMpO1xuXG4gICAgcmVnaXN0ZXJUcmFuc2Zvcm1zUHJvcGVydGllcygpO1xuXG4gICAgY29uc3QgcGFyc2VkVGFyZ2V0cyA9IHJlZ2lzdGVyVGFyZ2V0cyh0YXJnZXRzKTtcbiAgICBjb25zdCB0YXJnZXRzTGVuZ3RoID0gcGFyc2VkVGFyZ2V0cy5sZW5ndGg7XG5cbiAgICBpZiAoIXRhcmdldHNMZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUud2FybihgTm8gdGFyZ2V0IGZvdW5kLiBNYWtlIHN1cmUgdGhlIGVsZW1lbnQgeW91J3JlIHRyeWluZyB0byBhbmltYXRlIGlzIGFjY2Vzc2libGUgYmVmb3JlIGNyZWF0aW5nIHlvdXIgYW5pbWF0aW9uLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGVhc2UgPSBzZXRWYWx1ZShwYXJhbXMuZWFzZSwgcGFyc2VXQUFQSUVhc2luZyhnbG9iYWxzLmRlZmF1bHRzLmVhc2UpKTtcbiAgICBjb25zdCBzcHJpbmcgPSAvKiogQHR5cGUge1NwcmluZ30gKi8oZWFzZSkuZWFzZSAmJiBlYXNlO1xuICAgIGNvbnN0IGF1dG9wbGF5ID0gc2V0VmFsdWUocGFyYW1zLmF1dG9wbGF5LCBnbG9iYWxzLmRlZmF1bHRzLmF1dG9wbGF5KTtcbiAgICBjb25zdCBzY3JvbGwgPSBhdXRvcGxheSAmJiAvKiogQHR5cGUge1Njcm9sbE9ic2VydmVyfSAqLyhhdXRvcGxheSkubGluayA/IGF1dG9wbGF5IDogZmFsc2U7XG4gICAgY29uc3QgYWx0ZXJuYXRlID0gcGFyYW1zLmFsdGVybmF0ZSAmJiAvKiogQHR5cGUge0Jvb2xlYW59ICovKHBhcmFtcy5hbHRlcm5hdGUpID09PSB0cnVlO1xuICAgIGNvbnN0IHJldmVyc2VkID0gcGFyYW1zLnJldmVyc2VkICYmIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi8ocGFyYW1zLnJldmVyc2VkKSA9PT0gdHJ1ZTtcbiAgICBjb25zdCBsb29wID0gc2V0VmFsdWUocGFyYW1zLmxvb3AsIGdsb2JhbHMuZGVmYXVsdHMubG9vcCk7XG4gICAgY29uc3QgaXRlcmF0aW9ucyA9IC8qKiBAdHlwZSB7TnVtYmVyfSAqLygobG9vcCA9PT0gdHJ1ZSB8fCBsb29wID09PSBJbmZpbml0eSkgPyBJbmZpbml0eSA6IGlzTnVtKGxvb3ApID8gbG9vcCArIDEgOiAxKTtcbiAgICAvKiogQHR5cGUge1BsYXliYWNrRGlyZWN0aW9ufSAqL1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGFsdGVybmF0ZSA/IHJldmVyc2VkID8gJ2FsdGVybmF0ZS1yZXZlcnNlJyA6ICdhbHRlcm5hdGUnIDogcmV2ZXJzZWQgPyAncmV2ZXJzZScgOiAnbm9ybWFsJztcbiAgICAvKiogQHR5cGUge0ZpbGxNb2RlfSAqL1xuICAgIGNvbnN0IGZpbGwgPSAnZm9yd2FyZHMnO1xuICAgIC8qKiBAdHlwZSB7U3RyaW5nfSAqL1xuICAgIGNvbnN0IGVhc2luZyA9IHBhcnNlV0FBUElFYXNpbmcoZWFzZSk7XG4gICAgY29uc3QgdGltZVNjYWxlID0gKGdsb2JhbHMudGltZVNjYWxlID09PSAxID8gMSA6IEspO1xuXG4gICAgLyoqIEB0eXBlIHtET01UYXJnZXRzQXJyYXl9XSAqL1xuICAgIHRoaXMudGFyZ2V0cyA9IHBhcnNlZFRhcmdldHM7XG4gICAgLyoqIEB0eXBlIHtBcnJheTxnbG9iYWxUaGlzLkFuaW1hdGlvbj59XSAqL1xuICAgIHRoaXMuYW5pbWF0aW9ucyA9IFtdO1xuICAgIC8qKiBAdHlwZSB7Z2xvYmFsVGhpcy5BbmltYXRpb259XSAqL1xuICAgIHRoaXMuY29udHJvbEFuaW1hdGlvbiA9IG51bGw7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazx0aGlzPn0gKi9cbiAgICB0aGlzLm9uQ29tcGxldGUgPSBwYXJhbXMub25Db21wbGV0ZSB8fCBub29wO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuZHVyYXRpb24gPSAwO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLm11dGVDYWxsYmFja3MgPSBmYWxzZTtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy5wYXVzZWQgPSAhYXV0b3BsYXkgfHwgc2Nyb2xsICE9PSBmYWxzZTtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy5yZXZlcnNlZCA9IHJldmVyc2VkO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbnxTY3JvbGxPYnNlcnZlcn0gKi9cbiAgICB0aGlzLmF1dG9wbGF5ID0gYXV0b3BsYXk7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5fc3BlZWQgPSBzZXRWYWx1ZShwYXJhbXMucGxheWJhY2tSYXRlLCBnbG9iYWxzLmRlZmF1bHRzLnBsYXliYWNrUmF0ZSk7XG4gICAgLyoqIEB0eXBlIHtGdW5jdGlvbn0gKi9cbiAgICB0aGlzLl9yZXNvbHZlID0gbm9vcDsgLy8gVXNlZCBieSAudGhlbigpXG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5fY29tcGxldGVkID0gMDtcbiAgICAvKiogQHR5cGUge0FycmF5PE9iamVjdD59XSAqL1xuICAgIHRoaXMuX2lubGluZVN0eWxlcyA9IHBhcnNlZFRhcmdldHMubWFwKCRlbCA9PiAkZWwuZ2V0QXR0cmlidXRlKCdzdHlsZScpKTtcblxuICAgIHBhcnNlZFRhcmdldHMuZm9yRWFjaCgoJGVsLCBpKSA9PiB7XG5cbiAgICAgIGNvbnN0IGNhY2hlZFRyYW5zZm9ybXMgPSAkZWxbdHJhbnNmb3Jtc1N5bWJvbF07XG5cbiAgICAgIGNvbnN0IGhhc0luZGl2aWR1YWxUcmFuc2Zvcm1zID0gdmFsaWRJbmRpdmlkdWFsVHJhbnNmb3Jtcy5zb21lKHQgPT4gcGFyYW1zLmhhc093blByb3BlcnR5KHQpKTtcblxuICAgICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgICBjb25zdCBkdXJhdGlvbiA9IChzcHJpbmcgPyAvKiogQHR5cGUge1NwcmluZ30gKi8oc3ByaW5nKS5kdXJhdGlvbiA6IGdldEZ1bmN0aW9uVmFsdWUoc2V0VmFsdWUocGFyYW1zLmR1cmF0aW9uLCBnbG9iYWxzLmRlZmF1bHRzLmR1cmF0aW9uKSwgJGVsLCBpLCB0YXJnZXRzTGVuZ3RoKSkgKiB0aW1lU2NhbGU7XG4gICAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICAgIGNvbnN0IGRlbGF5ID0gZ2V0RnVuY3Rpb25WYWx1ZShzZXRWYWx1ZShwYXJhbXMuZGVsYXksIGdsb2JhbHMuZGVmYXVsdHMuZGVsYXkpLCAkZWwsIGksIHRhcmdldHNMZW5ndGgpICogdGltZVNjYWxlO1xuICAgICAgLyoqIEB0eXBlIHtDb21wb3NpdGVPcGVyYXRpb259ICovXG4gICAgICBjb25zdCBjb21wb3NpdGUgPSAvKiogQHR5cGUge0NvbXBvc2l0ZU9wZXJhdGlvbn0gKi8oc2V0VmFsdWUocGFyYW1zLmNvbXBvc2l0aW9uLCAncmVwbGFjZScpKTtcblxuICAgICAgZm9yIChsZXQgbmFtZSBpbiBwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFpc0tleShuYW1lKSkgY29udGludWU7XG4gICAgICAgIC8qKiBAdHlwZSB7UHJvcGVydHlJbmRleGVkS2V5ZnJhbWVzfSAqL1xuICAgICAgICBjb25zdCBrZXlmcmFtZXMgPSB7fTtcbiAgICAgICAgLyoqIEB0eXBlIHtLZXlmcmFtZUFuaW1hdGlvbk9wdGlvbnN9ICovXG4gICAgICAgIGNvbnN0IHR3ZWVuUGFyYW1zID0geyBpdGVyYXRpb25zLCBkaXJlY3Rpb24sIGZpbGwsIGVhc2luZywgZHVyYXRpb24sIGRlbGF5LCBjb21wb3NpdGUgfTtcbiAgICAgICAgY29uc3QgcHJvcGVydHlWYWx1ZSA9IHBhcmFtc1tuYW1lXTtcbiAgICAgICAgY29uc3QgaW5kaXZpZHVhbFRyYW5zZm9ybVByb3BlcnR5ID0gaGFzSW5kaXZpZHVhbFRyYW5zZm9ybXMgPyB2YWxpZFRyYW5zZm9ybXMuaW5jbHVkZXMobmFtZSkgPyBuYW1lIDogc2hvcnRUcmFuc2Zvcm1zLmdldChuYW1lKSA6IGZhbHNlO1xuICAgICAgICBsZXQgcGFyc2VkUHJvcGVydHlWYWx1ZTtcbiAgICAgICAgaWYgKGlzT2JqKHByb3BlcnR5VmFsdWUpKSB7XG4gICAgICAgICAgY29uc3QgdHdlZW5PcHRpb25zID0gLyoqIEB0eXBlIHtXQUFQSVR3ZWVuT3B0aW9uc30gKi8ocHJvcGVydHlWYWx1ZSk7XG4gICAgICAgICAgY29uc3QgdHdlZW5PcHRpb25zRWFzZSA9IHNldFZhbHVlKHR3ZWVuT3B0aW9ucy5lYXNlLCBlYXNlKTtcbiAgICAgICAgICBjb25zdCB0d2Vlbk9wdGlvbnNTcHJpbmcgPSAvKiogQHR5cGUge1NwcmluZ30gKi8odHdlZW5PcHRpb25zRWFzZSkuZWFzZSAmJiB0d2Vlbk9wdGlvbnNFYXNlO1xuICAgICAgICAgIGNvbnN0IHRvID0gLyoqIEB0eXBlIHtXQUFQSVR3ZWVuT3B0aW9uc30gKi8odHdlZW5PcHRpb25zKS50bztcbiAgICAgICAgICBjb25zdCBmcm9tID0gLyoqIEB0eXBlIHtXQUFQSVR3ZWVuT3B0aW9uc30gKi8odHdlZW5PcHRpb25zKS5mcm9tO1xuICAgICAgICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgICAgICAgIHR3ZWVuUGFyYW1zLmR1cmF0aW9uID0gKHR3ZWVuT3B0aW9uc1NwcmluZyA/IC8qKiBAdHlwZSB7U3ByaW5nfSAqLyh0d2Vlbk9wdGlvbnNTcHJpbmcpLmR1cmF0aW9uIDogZ2V0RnVuY3Rpb25WYWx1ZShzZXRWYWx1ZSh0d2Vlbk9wdGlvbnMuZHVyYXRpb24sIGR1cmF0aW9uKSwgJGVsLCBpLCB0YXJnZXRzTGVuZ3RoKSkgKiB0aW1lU2NhbGU7XG4gICAgICAgICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgICAgICAgdHdlZW5QYXJhbXMuZGVsYXkgPSBnZXRGdW5jdGlvblZhbHVlKHNldFZhbHVlKHR3ZWVuT3B0aW9ucy5kZWxheSwgZGVsYXkpLCAkZWwsIGksIHRhcmdldHNMZW5ndGgpICogdGltZVNjYWxlO1xuICAgICAgICAgIC8qKiBAdHlwZSB7Q29tcG9zaXRlT3BlcmF0aW9ufSAqL1xuICAgICAgICAgIHR3ZWVuUGFyYW1zLmNvbXBvc2l0ZSA9IC8qKiBAdHlwZSB7Q29tcG9zaXRlT3BlcmF0aW9ufSAqLyhzZXRWYWx1ZSh0d2Vlbk9wdGlvbnMuY29tcG9zaXRpb24sIGNvbXBvc2l0ZSkpO1xuICAgICAgICAgIC8qKiBAdHlwZSB7U3RyaW5nfSAqL1xuICAgICAgICAgIHR3ZWVuUGFyYW1zLmVhc2luZyA9IHBhcnNlV0FBUElFYXNpbmcodHdlZW5PcHRpb25zRWFzZSk7XG4gICAgICAgICAgcGFyc2VkUHJvcGVydHlWYWx1ZSA9IHBhcnNlSW5kaXZpZHVhbFR3ZWVuVmFsdWUoJGVsLCBuYW1lLCBmcm9tLCB0bywgaSwgdGFyZ2V0c0xlbmd0aCk7XG4gICAgICAgICAgaWYgKGluZGl2aWR1YWxUcmFuc2Zvcm1Qcm9wZXJ0eSkge1xuICAgICAgICAgICAga2V5ZnJhbWVzW2AtLSR7aW5kaXZpZHVhbFRyYW5zZm9ybVByb3BlcnR5fWBdID0gcGFyc2VkUHJvcGVydHlWYWx1ZTtcbiAgICAgICAgICAgIGNhY2hlZFRyYW5zZm9ybXNbaW5kaXZpZHVhbFRyYW5zZm9ybVByb3BlcnR5XSA9IHBhcnNlZFByb3BlcnR5VmFsdWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGtleWZyYW1lc1tuYW1lXSA9IHBhcnNlSW5kaXZpZHVhbFR3ZWVuVmFsdWUoJGVsLCBuYW1lLCBmcm9tLCB0bywgaSwgdGFyZ2V0c0xlbmd0aCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFkZFdBQVBJQW5pbWF0aW9uKHRoaXMsICRlbCwgbmFtZSwga2V5ZnJhbWVzLCB0d2VlblBhcmFtcyk7XG4gICAgICAgICAgaWYgKCFpc1VuZChmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFpbmRpdmlkdWFsVHJhbnNmb3JtUHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgJGVsLnN0eWxlW25hbWVdID0ga2V5ZnJhbWVzW25hbWVdWzBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYC0tJHtpbmRpdmlkdWFsVHJhbnNmb3JtUHJvcGVydHl9YDtcbiAgICAgICAgICAgICAgJGVsLnN0eWxlLnNldFByb3BlcnR5KGtleSwga2V5ZnJhbWVzW2tleV1bMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJzZWRQcm9wZXJ0eVZhbHVlID0gaXNBcnIocHJvcGVydHlWYWx1ZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlLm1hcCgoLyoqIEB0eXBlIHthbnl9ICovdikgPT4gbm9ybWFsaXplVHdlZW5WYWx1ZShuYW1lLCB2LCAkZWwsIGksIHRhcmdldHNMZW5ndGgpKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZVR3ZWVuVmFsdWUobmFtZSwgLyoqIEB0eXBlIHthbnl9ICovKHByb3BlcnR5VmFsdWUpLCAkZWwsIGksIHRhcmdldHNMZW5ndGgpO1xuICAgICAgICAgIGlmIChpbmRpdmlkdWFsVHJhbnNmb3JtUHJvcGVydHkpIHtcbiAgICAgICAgICAgIGtleWZyYW1lc1tgLS0ke2luZGl2aWR1YWxUcmFuc2Zvcm1Qcm9wZXJ0eX1gXSA9IHBhcnNlZFByb3BlcnR5VmFsdWU7XG4gICAgICAgICAgICBjYWNoZWRUcmFuc2Zvcm1zW2luZGl2aWR1YWxUcmFuc2Zvcm1Qcm9wZXJ0eV0gPSBwYXJzZWRQcm9wZXJ0eVZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBrZXlmcmFtZXNbbmFtZV0gPSBwYXJzZWRQcm9wZXJ0eVZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhZGRXQUFQSUFuaW1hdGlvbih0aGlzLCAkZWwsIG5hbWUsIGtleWZyYW1lcywgdHdlZW5QYXJhbXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaGFzSW5kaXZpZHVhbFRyYW5zZm9ybXMpIHtcbiAgICAgICAgbGV0IHRyYW5zZm9ybXMgPSBlbXB0eVN0cmluZztcbiAgICAgICAgZm9yIChsZXQgdCBpbiBjYWNoZWRUcmFuc2Zvcm1zKSB7XG4gICAgICAgICAgdHJhbnNmb3JtcyArPSBgJHt0cmFuc2Zvcm1zRnJhZ21lbnRTdHJpbmdzW3RdfXZhcigtLSR7dH0pKSBgO1xuICAgICAgICB9XG4gICAgICAgICRlbC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1zO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgLyoqIEB0eXBlIHtTY3JvbGxPYnNlcnZlcn0gKi8odGhpcy5hdXRvcGxheSkubGluayh0aGlzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGNhbGxiYWNrIGZvckVhY2hDYWxsYmFja1xuICAgKiBAcGFyYW0ge2dsb2JhbFRoaXMuQW5pbWF0aW9ufSBhbmltYXRpb25cbiAgICovXG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge2ZvckVhY2hDYWxsYmFja3xTdHJpbmd9IGNhbGxiYWNrXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuICBmb3JFYWNoKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgY2IgPSBpc1N0cihjYWxsYmFjaykgPyBhID0+IGFbY2FsbGJhY2tdKCkgOiBjYWxsYmFjaztcbiAgICB0aGlzLmFuaW1hdGlvbnMuZm9yRWFjaChjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgc3BlZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NwZWVkO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7TnVtYmVyfSBzcGVlZCAqL1xuICBzZXQgc3BlZWQoc3BlZWQpIHtcbiAgICB0aGlzLl9zcGVlZCA9ICtzcGVlZDtcbiAgICB0aGlzLmZvckVhY2goYW5pbSA9PiBhbmltLnBsYXliYWNrUmF0ZSA9IHNwZWVkKTtcbiAgfVxuXG4gIGdldCBjdXJyZW50VGltZSgpIHtcbiAgICBjb25zdCBjb250cm9sQW5pbWF0aW9uID0gdGhpcy5jb250cm9sQW5pbWF0aW9uO1xuICAgIGNvbnN0IHRpbWVTY2FsZSA9IGdsb2JhbHMudGltZVNjYWxlO1xuICAgIHJldHVybiB0aGlzLmNvbXBsZXRlZCA/IHRoaXMuZHVyYXRpb24gOiBjb250cm9sQW5pbWF0aW9uID8gK2NvbnRyb2xBbmltYXRpb24uY3VycmVudFRpbWUgKiAodGltZVNjYWxlID09PSAxID8gMSA6IHRpbWVTY2FsZSkgOiAwO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7TnVtYmVyfSB0aW1lICovXG4gIHNldCBjdXJyZW50VGltZSh0aW1lKSB7XG4gICAgY29uc3QgdCA9IHRpbWUgKiAoZ2xvYmFscy50aW1lU2NhbGUgPT09IDEgPyAxIDogSyk7XG4gICAgdGhpcy5mb3JFYWNoKGFuaW0gPT4ge1xuICAgICAgLy8gTWFrZSBzdXJlIHRoZSBhbmltYXRpb24gcGxheVN0YXRlIGlzIG5vdCAncGF1c2VkJyBpbiBvcmRlciB0byBwcm9wZXJseSB0cmlnZ2VyIGFuIG9uZmluaXNoIGNhbGxiYWNrLlxuICAgICAgLy8gVGhlIFwicGF1c2VkXCIgcGxheSBzdGF0ZSBzdXBlcnNlZGVzIHRoZSBcImZpbmlzaGVkXCIgcGxheSBzdGF0ZTsgaWYgdGhlIGFuaW1hdGlvbiBpcyBib3RoIHBhdXNlZCBhbmQgZmluaXNoZWQsIHRoZSBcInBhdXNlZFwiIHN0YXRlIGlzIHRoZSBvbmUgdGhhdCB3aWxsIGJlIHJlcG9ydGVkLlxuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0FuaW1hdGlvbi9maW5pc2hfZXZlbnRcbiAgICAgIGlmICh0ID49IHRoaXMuZHVyYXRpb24pIGFuaW0ucGxheSgpO1xuICAgICAgYW5pbS5jdXJyZW50VGltZSA9IHQ7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgcHJvZ3Jlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFRpbWUgLyB0aGlzLmR1cmF0aW9uO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7TnVtYmVyfSBwcm9ncmVzcyAqL1xuICBzZXQgcHJvZ3Jlc3MocHJvZ3Jlc3MpIHtcbiAgICB0aGlzLmZvckVhY2goYW5pbSA9PiBhbmltLmN1cnJlbnRUaW1lID0gcHJvZ3Jlc3MgKiB0aGlzLmR1cmF0aW9uIHx8IDApO1xuICB9XG5cbiAgcmVzdW1lKCkge1xuICAgIGlmICghdGhpcy5wYXVzZWQpIHJldHVybiB0aGlzO1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgLy8gVE9ETzogU3RvcmUgdGhlIGN1cnJlbnQgdGltZSwgYW5kIHNlZWsgYmFjayB0byB0aGUgbGFzdCBwb3NpdGlvblxuICAgIHJldHVybiB0aGlzLmZvckVhY2goJ3BsYXknKTtcbiAgfVxuXG4gIHBhdXNlKCkge1xuICAgIGlmICh0aGlzLnBhdXNlZCkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLmZvckVhY2goJ3BhdXNlJyk7XG4gIH1cblxuICBhbHRlcm5hdGUoKSB7XG4gICAgdGhpcy5yZXZlcnNlZCA9ICF0aGlzLnJldmVyc2VkO1xuICAgIHRoaXMuZm9yRWFjaCgncmV2ZXJzZScpO1xuICAgIGlmICh0aGlzLnBhdXNlZCkgdGhpcy5mb3JFYWNoKCdwYXVzZScpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICBpZiAodGhpcy5yZXZlcnNlZCkgdGhpcy5hbHRlcm5hdGUoKTtcbiAgICByZXR1cm4gdGhpcy5yZXN1bWUoKTtcbiAgfVxuXG4gIHJldmVyc2UoKSB7XG4gICAgaWYgKCF0aGlzLnJldmVyc2VkKSB0aGlzLmFsdGVybmF0ZSgpO1xuICAgIHJldHVybiB0aGlzLnJlc3VtZSgpO1xuICB9XG5cbiAvKipcbiAgKiBAcGFyYW0ge051bWJlcn0gdGltZVxuICAqIEBwYXJhbSB7Qm9vbGVhbn0gbXV0ZUNhbGxiYWNrc1xuICAqL1xuICBzZWVrKHRpbWUsIG11dGVDYWxsYmFja3MgPSBmYWxzZSkge1xuICAgIGlmIChtdXRlQ2FsbGJhY2tzKSB0aGlzLm11dGVDYWxsYmFja3MgPSB0cnVlO1xuICAgIGlmICh0aW1lIDwgdGhpcy5kdXJhdGlvbikgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGltZTtcbiAgICB0aGlzLm11dGVDYWxsYmFja3MgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5wYXVzZWQpIHRoaXMucGF1c2UoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlc3RhcnQoKSB7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zZWVrKDAsIHRydWUpLnJlc3VtZSgpO1xuICB9XG5cbiAgY29tbWl0U3R5bGVzKCkge1xuICAgIHJldHVybiB0aGlzLmZvckVhY2goJ2NvbW1pdFN0eWxlcycpO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Vlayh0aGlzLmR1cmF0aW9uKTtcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLmZvckVhY2goJ2NhbmNlbCcpO1xuICAgIHJldHVybiB0aGlzLnBhdXNlKCk7XG4gIH1cblxuICByZXZlcnQoKSB7XG4gICAgdGhpcy5jYW5jZWwoKTtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgoJGVsLCBpKSA9PiAkZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIHRoaXMuX2lubGluZVN0eWxlc1tpXSkgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtXQUFQSUNhbGxiYWNrfSBbY2FsbGJhY2tdXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqL1xuICB0aGVuKGNhbGxiYWNrID0gbm9vcCkge1xuICAgIGNvbnN0IHRoZW4gPSB0aGlzLnRoZW47XG4gICAgY29uc3Qgb25SZXNvbHZlID0gKCkgPT4ge1xuICAgICAgdGhpcy50aGVuID0gbnVsbDtcbiAgICAgIGNhbGxiYWNrKHRoaXMpO1xuICAgICAgdGhpcy50aGVuID0gdGhlbjtcbiAgICAgIHRoaXMuX3Jlc29sdmUgPSBub29wO1xuICAgIH07XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHIgPT4ge1xuICAgICAgdGhpcy5fcmVzb2x2ZSA9ICgpID0+IHIob25SZXNvbHZlKCkpO1xuICAgICAgaWYgKHRoaXMuY29tcGxldGVkKSB0aGlzLl9yZXNvbHZlKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCB3YWFwaSA9IHtcbi8qKlxuICogQHBhcmFtIHtET01UYXJnZXRzUGFyYW19IHRhcmdldHNcbiAqIEBwYXJhbSB7V0FBUElBbmltYXRpb25QYXJhbXN9IHBhcmFtc1xuICogQHJldHVybiB7V0FBUElBbmltYXRpb259XG4gKi9cbiAgYW5pbWF0ZTogKHRhcmdldHMsIHBhcmFtcykgPT4gbmV3IFdBQVBJQW5pbWF0aW9uKHRhcmdldHMsIHBhcmFtcyksXG4gIGNvbnZlcnRFYXNlOiBlYXNpbmdUb0xpbmVhclxufTtcblxuXG5cblxuLyoqXG4gKiBAcGFyYW0gIHtDYWxsYmFjazxUaW1lcj59IFtjYWxsYmFja11cbiAqIEByZXR1cm4ge1RpbWVyfVxuICovXG5jb25zdCBzeW5jID0gKGNhbGxiYWNrID0gbm9vcCkgPT4ge1xuICByZXR1cm4gbmV3IFRpbWVyKHsgZHVyYXRpb246IDEgKiBnbG9iYWxzLnRpbWVTY2FsZSwgb25Db21wbGV0ZTogY2FsbGJhY2sgfSwgbnVsbCwgMCkucmVzdW1lKCk7XG59O1xuXG4vKipcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtICB7RE9NVGFyZ2V0U2VsZWN0b3J9IHRhcmdldFNlbGVjdG9yXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICAgcHJvcE5hbWVcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqXG4gKiBAb3ZlcmxvYWRcbiAqIEBwYXJhbSAge0pTVGFyZ2V0c1BhcmFtfSB0YXJnZXRTZWxlY3RvclxuICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgIHByb3BOYW1lXG4gKiBAcmV0dXJuIHtOdW1iZXJ8U3RyaW5nfVxuICpcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtICB7RE9NVGFyZ2V0c1BhcmFtfSB0YXJnZXRTZWxlY3RvclxuICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICBwcm9wTmFtZVxuICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgICB1bml0XG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKlxuICogQG92ZXJsb2FkXG4gKiBAcGFyYW0gIHtUYXJnZXRzUGFyYW19IHRhcmdldFNlbGVjdG9yXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgIHByb3BOYW1lXG4gKiBAcGFyYW0gIHtCb29sZWFufSAgICAgIHVuaXRcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqXG4gKiBAcGFyYW0gIHtUYXJnZXRzUGFyYW19ICAgdGFyZ2V0U2VsZWN0b3JcbiAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICBwcm9wTmFtZVxuICogQHBhcmFtICB7U3RyaW5nfEJvb2xlYW59IFt1bml0XVxuICovXG5mdW5jdGlvbiBnZXRUYXJnZXRWYWx1ZSh0YXJnZXRTZWxlY3RvciwgcHJvcE5hbWUsIHVuaXQpIHtcbiAgY29uc3QgdGFyZ2V0cyA9IHJlZ2lzdGVyVGFyZ2V0cyh0YXJnZXRTZWxlY3Rvcik7XG4gIGlmICghdGFyZ2V0cy5sZW5ndGgpIHJldHVybjtcbiAgY29uc3QgWyB0YXJnZXQgXSA9IHRhcmdldHM7XG4gIGNvbnN0IHR3ZWVuVHlwZSA9IGdldFR3ZWVuVHlwZSh0YXJnZXQsIHByb3BOYW1lKTtcbiAgY29uc3Qgbm9ybWFsaXplUHJvcE5hbWUgPSBzYW5pdGl6ZVByb3BlcnR5TmFtZShwcm9wTmFtZSwgdGFyZ2V0LCB0d2VlblR5cGUpO1xuICBsZXQgb3JpZ2luYWxWYWx1ZSA9IGdldE9yaWdpbmFsQW5pbWF0YWJsZVZhbHVlKHRhcmdldCwgbm9ybWFsaXplUHJvcE5hbWUpO1xuICBpZiAoaXNVbmQodW5pdCkpIHtcbiAgICByZXR1cm4gb3JpZ2luYWxWYWx1ZTtcbiAgfSBlbHNlIHtcbiAgICBkZWNvbXBvc2VSYXdWYWx1ZShvcmlnaW5hbFZhbHVlLCBkZWNvbXBvc2VkT3JpZ2luYWxWYWx1ZSk7XG4gICAgaWYgKGRlY29tcG9zZWRPcmlnaW5hbFZhbHVlLnQgPT09IHZhbHVlVHlwZXMuTlVNQkVSIHx8IGRlY29tcG9zZWRPcmlnaW5hbFZhbHVlLnQgPT09IHZhbHVlVHlwZXMuVU5JVCkge1xuICAgICAgaWYgKHVuaXQgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBkZWNvbXBvc2VkT3JpZ2luYWxWYWx1ZS5uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29udmVydGVkVmFsdWUgPSBjb252ZXJ0VmFsdWVVbml0KC8qKiBAdHlwZSB7RE9NVGFyZ2V0fSAqLyh0YXJnZXQpLCBkZWNvbXBvc2VkT3JpZ2luYWxWYWx1ZSwgLyoqIEB0eXBlIHtTdHJpbmd9ICovKHVuaXQpLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBgJHtyb3VuZChjb252ZXJ0ZWRWYWx1ZS5uLCBnbG9iYWxzLnByZWNpc2lvbil9JHtjb252ZXJ0ZWRWYWx1ZS51fWA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQHBhcmFtICB7VGFyZ2V0c1BhcmFtfSAgICB0YXJnZXRzXG4gKiBAcGFyYW0gIHtBbmltYXRpb25QYXJhbXN9IHBhcmFtZXRlcnNcbiAqIEByZXR1cm4ge0pTQW5pbWF0aW9ufVxuICovXG5jb25zdCBzZXRUYXJnZXRWYWx1ZXMgPSAodGFyZ2V0cywgcGFyYW1ldGVycykgPT4ge1xuICBpZiAoaXNVbmQocGFyYW1ldGVycykpIHJldHVybjtcbiAgcGFyYW1ldGVycy5kdXJhdGlvbiA9IG1pblZhbHVlO1xuICAvLyBEbyBub3Qgb3ZlcnJpZGVzIGN1cnJlbnRseSBhY3RpdmUgdHdlZW5zIGJ5IGRlZmF1bHRcbiAgcGFyYW1ldGVycy5jb21wb3NpdGlvbiA9IHNldFZhbHVlKHBhcmFtZXRlcnMuY29tcG9zaXRpb24sIGNvbXBvc2l0aW9uVHlwZXMubm9uZSk7XG4gIC8vIFNraXAgaW5pdCgpIGFuZCBmb3JjZSByZW5kZXJpbmcgYnkgcGxheWluZyB0aGUgYW5pbWF0aW9uXG4gIHJldHVybiBuZXcgSlNBbmltYXRpb24odGFyZ2V0cywgcGFyYW1ldGVycywgbnVsbCwgMCwgdHJ1ZSkucmVzdW1lKCk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSAge1RhcmdldHNBcnJheX0gdGFyZ2V0c0FycmF5XG4gKiBAcGFyYW0gIHtKU0FuaW1hdGlvbn0gICAgYW5pbWF0aW9uXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgIFtwcm9wZXJ0eU5hbWVdXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5jb25zdCByZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbiA9ICh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbiwgcHJvcGVydHlOYW1lKSA9PiB7XG4gIGxldCB0d2VlbnNNYXRjaGVzVGFyZ2V0cyA9IGZhbHNlO1xuICBmb3JFYWNoQ2hpbGRyZW4oYW5pbWF0aW9uLCAoLyoqQHR5cGUge1R3ZWVufSAqL3R3ZWVuKSA9PiB7XG4gICAgY29uc3QgdHdlZW5UYXJnZXQgPSB0d2Vlbi50YXJnZXQ7XG4gICAgaWYgKHRhcmdldHNBcnJheS5pbmNsdWRlcyh0d2VlblRhcmdldCkpIHtcbiAgICAgIGNvbnN0IHR3ZWVuTmFtZSA9IHR3ZWVuLnByb3BlcnR5O1xuICAgICAgY29uc3QgdHdlZW5UeXBlID0gdHdlZW4uX3R3ZWVuVHlwZTtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZVByb3BOYW1lID0gc2FuaXRpemVQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lLCB0d2VlblRhcmdldCwgdHdlZW5UeXBlKTtcbiAgICAgIGlmICghbm9ybWFsaXplUHJvcE5hbWUgfHwgbm9ybWFsaXplUHJvcE5hbWUgJiYgbm9ybWFsaXplUHJvcE5hbWUgPT09IHR3ZWVuTmFtZSkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgdG8gZmxhZyB0aGUgcHJldmlvdXMgQ1NTIHRyYW5zZm9ybSB0d2VlbiB0byByZW5kZXJUcmFuc2Zvcm1cbiAgICAgICAgaWYgKHR3ZWVuLnBhcmVudC5fdGFpbCA9PT0gdHdlZW4gJiZcbiAgICAgICAgICAgIHR3ZWVuLl90d2VlblR5cGUgPT09IHR3ZWVuVHlwZXMuVFJBTlNGT1JNICYmXG4gICAgICAgICAgICB0d2Vlbi5fcHJldiAmJlxuICAgICAgICAgICAgdHdlZW4uX3ByZXYuX3R3ZWVuVHlwZSA9PT0gdHdlZW5UeXBlcy5UUkFOU0ZPUk1cbiAgICAgICAgKSB7XG4gICAgICAgICAgdHdlZW4uX3ByZXYuX3JlbmRlclRyYW5zZm9ybXMgPSAxO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZXMgdGhlIHR3ZWVuIGZyb20gdGhlIHNlbGVjdGVkIGFuaW1hdGlvblxuICAgICAgICByZW1vdmVDaGlsZChhbmltYXRpb24sIHR3ZWVuKTtcbiAgICAgICAgLy8gRGV0YWNoIHRoZSB0d2VlbiBmcm9tIGl0cyBzaWJsaW5ncyB0byBtYWtlIHN1cmUgYmxlbmRlZCB0d2VlbnMgYXJlIGNvcnJlY3RsbHkgcmVtb3ZlZFxuICAgICAgICByZW1vdmVUd2VlblNsaWJsaW5ncyh0d2Vlbik7XG4gICAgICAgIHR3ZWVuc01hdGNoZXNUYXJnZXRzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHRydWUpO1xuICByZXR1cm4gdHdlZW5zTWF0Y2hlc1RhcmdldHM7XG59O1xuXG4vKipcbiAqIEBwYXJhbSAge1RhcmdldHNQYXJhbX0gdGFyZ2V0c1xuICogQHBhcmFtICB7UmVuZGVyYWJsZXxXQUFQSUFuaW1hdGlvbn0gW3JlbmRlcmFibGVdXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICAgICAgICAgICBbcHJvcGVydHlOYW1lXVxuICogQHJldHVybiB7VGFyZ2V0c0FycmF5fVxuICovXG5jb25zdCByZW1vdmUgPSAodGFyZ2V0cywgcmVuZGVyYWJsZSwgcHJvcGVydHlOYW1lKSA9PiB7XG4gIGNvbnN0IHRhcmdldHNBcnJheSA9IHBhcnNlVGFyZ2V0cyh0YXJnZXRzKTtcbiAgY29uc3QgcGFyZW50ID0gLyoqIEB0eXBlIHtSZW5kZXJhYmxlfHR5cGVvZiBlbmdpbmV9ICoqLyhyZW5kZXJhYmxlID8gcmVuZGVyYWJsZSA6IGVuZ2luZSk7XG4gIGNvbnN0IHdhYXBpQW5pbWF0aW9uID0gcmVuZGVyYWJsZSAmJiAvKiogQHR5cGUge1dBQVBJQW5pbWF0aW9ufSAqLyhyZW5kZXJhYmxlKS5jb250cm9sQW5pbWF0aW9uICYmIC8qKiBAdHlwZSB7V0FBUElBbmltYXRpb259ICovKHJlbmRlcmFibGUpO1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRhcmdldHNBcnJheS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCAkZWwgPSAvKiogQHR5cGUge0RPTVRhcmdldH0gICovKHRhcmdldHNBcnJheVtpXSk7XG4gICAgcmVtb3ZlV0FBUElBbmltYXRpb24oJGVsLCBwcm9wZXJ0eU5hbWUsIHdhYXBpQW5pbWF0aW9uKTtcbiAgfVxuICBsZXQgcmVtb3ZlTWF0Y2hlcztcbiAgaWYgKHBhcmVudC5faGFzQ2hpbGRyZW4pIHtcbiAgICBsZXQgaXRlcmF0aW9uRHVyYXRpb24gPSAwO1xuICAgIGZvckVhY2hDaGlsZHJlbihwYXJlbnQsICgvKiogQHR5cGUge1JlbmRlcmFibGV9ICovY2hpbGQpID0+IHtcbiAgICAgIGlmICghY2hpbGQuX2hhc0NoaWxkcmVuKSB7XG4gICAgICAgIHJlbW92ZU1hdGNoZXMgPSByZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbih0YXJnZXRzQXJyYXksIC8qKiBAdHlwZSB7SlNBbmltYXRpb259ICovKGNoaWxkKSwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBjaGlsZCBmcm9tIGl0cyBwYXJlbnQgaWYgbm8gdHdlZW5zIGFuZCBubyBjaGlsZHJlbiBsZWZ0IGFmdGVyIHRoZSByZW1vdmFsXG4gICAgICAgIGlmIChyZW1vdmVNYXRjaGVzICYmICFjaGlsZC5faGVhZCkge1xuICAgICAgICAgIGNoaWxkLmNhbmNlbCgpO1xuICAgICAgICAgIHJlbW92ZUNoaWxkKHBhcmVudCwgY2hpbGQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbmV3IGl0ZXJhdGlvbkR1cmF0aW9uIHZhbHVlIHRvIGhhbmRsZSBvbkNvbXBsZXRlIHdpdGggbGFzdCBjaGlsZCBpbiByZW5kZXIoKVxuICAgICAgICAgIGNvbnN0IGNoaWxkVExPZmZzZXQgPSBjaGlsZC5fb2Zmc2V0ICsgY2hpbGQuX2RlbGF5O1xuICAgICAgICAgIGNvbnN0IGNoaWxkRHVyID0gY2hpbGRUTE9mZnNldCArIGNoaWxkLmR1cmF0aW9uO1xuICAgICAgICAgIGlmIChjaGlsZER1ciA+IGl0ZXJhdGlvbkR1cmF0aW9uKSB7XG4gICAgICAgICAgICBpdGVyYXRpb25EdXJhdGlvbiA9IGNoaWxkRHVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gTWFrZSBzdXJlIHRvIGFsc28gcmVtb3ZlIGVuZ2luZSdzIGNoaWxkcmVuIHRhcmdldHNcbiAgICAgIC8vIE5PVEU6IEF2b2lkIHJlY3Vyc2lvbj9cbiAgICAgIGlmIChjaGlsZC5faGVhZCkge1xuICAgICAgICByZW1vdmUodGFyZ2V0cywgY2hpbGQsIHByb3BlcnR5TmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC5faGFzQ2hpbGRyZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCB0cnVlKTtcbiAgICAvLyBVcGRhdGUgaXRlcmF0aW9uRHVyYXRpb24gdmFsdWUgdG8gaGFuZGxlIG9uQ29tcGxldGUgd2l0aCBsYXN0IGNoaWxkIGluIHJlbmRlcigpXG4gICAgaWYgKCFpc1VuZCgvKiogQHR5cGUge1JlbmRlcmFibGV9ICovKHBhcmVudCkuaXRlcmF0aW9uRHVyYXRpb24pKSB7XG4gICAgICAvKiogQHR5cGUge1JlbmRlcmFibGV9ICovKHBhcmVudCkuaXRlcmF0aW9uRHVyYXRpb24gPSBpdGVyYXRpb25EdXJhdGlvbjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVtb3ZlTWF0Y2hlcyA9IHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9uKFxuICAgICAgdGFyZ2V0c0FycmF5LFxuICAgICAgLyoqIEB0eXBlIHtKU0FuaW1hdGlvbn0gKi8ocGFyZW50KSxcbiAgICAgIHByb3BlcnR5TmFtZVxuICAgICk7XG4gIH1cblxuICBpZiAocmVtb3ZlTWF0Y2hlcyAmJiAhcGFyZW50Ll9oZWFkKSB7XG4gICAgcGFyZW50Ll9oYXNDaGlsZHJlbiA9IGZhbHNlO1xuICAgIC8vIENhbmNlbCB0aGUgcGFyZW50IGlmIHRoZXJlIGFyZSBubyB0d2VlbnMgYW5kIG5vIGNoaWxkcmVuIGxlZnQgYWZ0ZXIgdGhlIHJlbW92YWxcbiAgICAvLyBXZSBoYXZlIHRvIGNoZWNrIGlmIHRoZSAuY2FuY2VsKCkgbWV0aG9kIGV4aXN0IHRvIGhhbmRsZSBjYXNlcyB3aGVyZSB0aGUgcGFyZW50IGlzIHRoZSBlbmdpbmUgaXRzZWxmXG4gICAgaWYgKC8qKiBAdHlwZSB7UmVuZGVyYWJsZX0gKi8ocGFyZW50KS5jYW5jZWwpIC8qKiBAdHlwZSB7UmVuZGVyYWJsZX0gKi8ocGFyZW50KS5jYW5jZWwoKTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXRzQXJyYXk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSAge051bWJlcn0gbWluXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1heFxuICogQHBhcmFtICB7TnVtYmVyfSBbZGVjaW1hbExlbmd0aF1cbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuY29uc3QgcmFuZG9tID0gKG1pbiwgbWF4LCBkZWNpbWFsTGVuZ3RoKSA9PiB7IGNvbnN0IG0gPSAxMCAqKiAoZGVjaW1hbExlbmd0aCB8fCAwKTsgcmV0dXJuIGZsb29yKChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArICgxIC8gbSkpICsgbWluKSAqIG0pIC8gbSB9O1xuXG4vKipcbiAqIEBwYXJhbSAge1N0cmluZ3xBcnJheX0gaXRlbXNcbiAqIEByZXR1cm4ge2FueX1cbiAqL1xuY29uc3QgcmFuZG9tUGljayA9IGl0ZW1zID0+IGl0ZW1zW3JhbmRvbSgwLCBpdGVtcy5sZW5ndGggLSAxKV07XG5cbi8qKlxuICogQWRhcHRlZCBmcm9tIGh0dHBzOi8vYm9zdC5vY2tzLm9yZy9taWtlL3NodWZmbGUvXG4gKiBAcGFyYW0gIHtBcnJheX0gaXRlbXNcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5jb25zdCBzaHVmZmxlID0gaXRlbXMgPT4ge1xuICBsZXQgbSA9IGl0ZW1zLmxlbmd0aCwgdCwgaTtcbiAgd2hpbGUgKG0pIHsgaSA9IHJhbmRvbSgwLCAtLW0pOyB0ID0gaXRlbXNbbV07IGl0ZW1zW21dID0gaXRlbXNbaV07IGl0ZW1zW2ldID0gdDsgfVxuICByZXR1cm4gaXRlbXM7XG59O1xuXG4vKipcbiAqIEBwYXJhbSAge051bWJlcnxTdHJpbmd9IHZcbiAqIEBwYXJhbSAge051bWJlcn0gZGVjaW1hbExlbmd0aFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5jb25zdCByb3VuZFBhZCA9ICh2LCBkZWNpbWFsTGVuZ3RoKSA9PiAoK3YpLnRvRml4ZWQoZGVjaW1hbExlbmd0aCk7XG5cbi8qKlxuICogQHBhcmFtICB7TnVtYmVyfSB2XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHRvdGFsTGVuZ3RoXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHBhZFN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5jb25zdCBwYWRTdGFydCA9ICh2LCB0b3RhbExlbmd0aCwgcGFkU3RyaW5nKSA9PiBgJHt2fWAucGFkU3RhcnQodG90YWxMZW5ndGgsIHBhZFN0cmluZyk7XG5cbi8qKlxuICogQHBhcmFtICB7TnVtYmVyfSB2XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHRvdGFsTGVuZ3RoXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHBhZFN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5jb25zdCBwYWRFbmQgPSAodiwgdG90YWxMZW5ndGgsIHBhZFN0cmluZykgPT4gYCR7dn1gLnBhZEVuZCh0b3RhbExlbmd0aCwgcGFkU3RyaW5nKTtcblxuLyoqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZcbiAqIEBwYXJhbSAge051bWJlcn0gbWluXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1heFxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5jb25zdCB3cmFwID0gKHYsIG1pbiwgbWF4KSA9PiAoKCh2IC0gbWluKSAlIChtYXggLSBtaW4pICsgKG1heCAtIG1pbikpICUgKG1heCAtIG1pbikpICsgbWluO1xuXG4vKipcbiAqIEBwYXJhbSAge051bWJlcn0gdmFsdWVcbiAqIEBwYXJhbSAge051bWJlcn0gaW5Mb3dcbiAqIEBwYXJhbSAge051bWJlcn0gaW5IaWdoXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG91dExvd1xuICogQHBhcmFtICB7TnVtYmVyfSBvdXRIaWdoXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmNvbnN0IG1hcFJhbmdlID0gKHZhbHVlLCBpbkxvdywgaW5IaWdoLCBvdXRMb3csIG91dEhpZ2gpID0+IG91dExvdyArICgodmFsdWUgLSBpbkxvdykgLyAoaW5IaWdoIC0gaW5Mb3cpKSAqIChvdXRIaWdoIC0gb3V0TG93KTtcblxuLyoqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGRlZ3JlZXNcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuY29uc3QgZGVnVG9SYWQgPSBkZWdyZWVzID0+IGRlZ3JlZXMgKiBQSSAvIDE4MDtcblxuLyoqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHJhZGlhbnNcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuY29uc3QgcmFkVG9EZWcgPSByYWRpYW5zID0+IHJhZGlhbnMgKiAxODAgLyBQSTtcblxuLyoqXG4gKiBodHRwczovL3d3dy5yb3J5ZHJpc2NvbGwuY29tLzIwMTYvMDMvMDcvZnJhbWUtcmF0ZS1pbmRlcGVuZGVudC1kYW1waW5nLXVzaW5nLWxlcnAvXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHN0YXJ0XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGVuZFxuICogQHBhcmFtICB7TnVtYmVyfSBhbW91bnRcbiAqIEBwYXJhbSAge1JlbmRlcmFibGV8Qm9vbGVhbn0gW3JlbmRlcmFibGVdXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmNvbnN0IGxlcnAgPSAoc3RhcnQsIGVuZCwgYW1vdW50LCByZW5kZXJhYmxlKSA9PiB7XG4gIGxldCBkdCA9IEsgLyBnbG9iYWxzLmRlZmF1bHRzLmZyYW1lUmF0ZTtcbiAgaWYgKHJlbmRlcmFibGUgIT09IGZhbHNlKSB7XG4gICAgY29uc3QgdGlja2VyID0gLyoqIEB0eXBlIFJlbmRlcmFibGUgKi9cbiAgICAgICAgICAgICAgICAgICAocmVuZGVyYWJsZSkgfHxcbiAgICAgICAgICAgICAgICAgICAoZW5naW5lLl9oYXNDaGlsZHJlbiAmJiBlbmdpbmUpO1xuICAgIGlmICh0aWNrZXIgJiYgdGlja2VyLmRlbHRhVGltZSkge1xuICAgICAgZHQgPSB0aWNrZXIuZGVsdGFUaW1lO1xuICAgIH1cbiAgfVxuICBjb25zdCB0ID0gMSAtIE1hdGguZXhwKC1hbW91bnQgKiBkdCAqIC4xKTtcbiAgcmV0dXJuICFhbW91bnQgPyBzdGFydCA6IGFtb3VudCA9PT0gMSA/IGVuZCA6ICgxIC0gdCkgKiBzdGFydCArIHQgKiBlbmQ7XG59O1xuXG4vLyBDaGFpbi1hYmxlIHV0aWxpdGllc1xuXG4vKipcbiAqIEBjYWxsYmFjayBVdGlsaXR5RnVuY3Rpb25cbiAqIEBwYXJhbSB7Li4uKn0gYXJnc1xuICogQHJldHVybiB7TnVtYmVyfFN0cmluZ31cbiAqXG4gKiBAcGFyYW0ge1V0aWxpdHlGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7TnVtYmVyfSBbbGFzdD0wXVxuICogQHJldHVybiB7ZnVuY3Rpb24oLi4uKE51bWJlcnxTdHJpbmcpKTogZnVuY3Rpb24oTnVtYmVyfFN0cmluZyk6IChOdW1iZXJ8U3RyaW5nKX1cbiAqL1xuY29uc3QgY3VycnkgPSAoZm4sIGxhc3QgPSAwKSA9PiAoLi4uYXJncykgPT4gbGFzdCA/IHYgPT4gZm4oLi4uYXJncywgdikgOiB2ID0+IGZuKHYsIC4uLmFyZ3MpO1xuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtmdW5jdGlvbiguLi4oTnVtYmVyfFN0cmluZykpfVxuICovXG5jb25zdCBjaGFpbiA9IGZuID0+IHtcbiAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGZuKC4uLmFyZ3MpO1xuICAgIHJldHVybiBuZXcgUHJveHkobm9vcCwge1xuICAgICAgYXBwbHk6IChfLCBfXywgW3ZdKSA9PiByZXN1bHQodiksXG4gICAgICBnZXQ6IChfLCBwcm9wKSA9PiBjaGFpbigvKipAcGFyYW0gey4uLk51bWJlcnxTdHJpbmd9IG5leHRBcmdzICovKC4uLm5leHRBcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHRSZXN1bHQgPSB1dGlsc1twcm9wXSguLi5uZXh0QXJncyk7XG4gICAgICAgIHJldHVybiAoLyoqQHR5cGUge051bWJlcnxTdHJpbmd9ICovdikgPT4gbmV4dFJlc3VsdChyZXN1bHQodikpO1xuICAgICAgfSlcbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge1V0aWxpdHlGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7TnVtYmVyfSBbcmlnaHRdXG4gKiBAcmV0dXJuIHtmdW5jdGlvbiguLi4oTnVtYmVyfFN0cmluZykpOiBVdGlsaXR5RnVuY3Rpb259XG4gKi9cbmNvbnN0IG1ha2VDaGFpbmFibGUgPSAoZm4sIHJpZ2h0ID0gMCkgPT4gKC4uLmFyZ3MpID0+IChhcmdzLmxlbmd0aCA8IGZuLmxlbmd0aCA/IGNoYWluKGN1cnJ5KGZuLCByaWdodCkpIDogZm4pKC4uLmFyZ3MpO1xuXG4vKipcbiAqIEBjYWxsYmFjayBDaGFpbmVkVXRpbHNSZXN1bHRcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICogQHJldHVybiB7TnVtYmVyfVxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IENoYWluYWJsZVV0aWxzXG4gKiBAcHJvcGVydHkge0NoYWluZWRDbGFtcH0gY2xhbXBcbiAqIEBwcm9wZXJ0eSB7Q2hhaW5lZFJvdW5kfSByb3VuZFxuICogQHByb3BlcnR5IHtDaGFpbmVkU25hcH0gc25hcFxuICogQHByb3BlcnR5IHtDaGFpbmVkV3JhcH0gd3JhcFxuICogQHByb3BlcnR5IHtDaGFpbmVkSW50ZXJwb2xhdGV9IGludGVycG9sYXRlXG4gKiBAcHJvcGVydHkge0NoYWluZWRNYXBSYW5nZX0gbWFwUmFuZ2VcbiAqIEBwcm9wZXJ0eSB7Q2hhaW5lZFJvdW5kUGFkfSByb3VuZFBhZFxuICogQHByb3BlcnR5IHtDaGFpbmVkUGFkU3RhcnR9IHBhZFN0YXJ0XG4gKiBAcHJvcGVydHkge0NoYWluZWRQYWRFbmR9IHBhZEVuZFxuICogQHByb3BlcnR5IHtDaGFpbmVkRGVnVG9SYWR9IGRlZ1RvUmFkXG4gKiBAcHJvcGVydHkge0NoYWluZWRSYWRUb0RlZ30gcmFkVG9EZWdcbiAqXG4gKiBAdHlwZWRlZiB7Q2hhaW5hYmxlVXRpbHMgJiBDaGFpbmVkVXRpbHNSZXN1bHR9IENoYWluYWJsZVV0aWxcbiAqXG4gKiBAY2FsbGJhY2sgQ2hhaW5lZENsYW1wXG4gKiBAcGFyYW0ge051bWJlcn0gbWluXG4gKiBAcGFyYW0ge051bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtDaGFpbmFibGVVdGlsfVxuICpcbiAqIEBjYWxsYmFjayBDaGFpbmVkUm91bmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBkZWNpbWFsTGVuZ3RoXG4gKiBAcmV0dXJuIHtDaGFpbmFibGVVdGlsfVxuICpcbiAqIEBjYWxsYmFjayBDaGFpbmVkU25hcFxuICogQHBhcmFtIHtOdW1iZXJ9IGluY3JlbWVudFxuICogQHJldHVybiB7Q2hhaW5hYmxlVXRpbH1cbiAqXG4gKiBAY2FsbGJhY2sgQ2hhaW5lZFdyYXBcbiAqIEBwYXJhbSB7TnVtYmVyfSBtaW5cbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge0NoYWluYWJsZVV0aWx9XG4gKlxuICogQGNhbGxiYWNrIENoYWluZWRJbnRlcnBvbGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXJ0XG4gKiBAcGFyYW0ge051bWJlcn0gZW5kXG4gKiBAcmV0dXJuIHtDaGFpbmFibGVVdGlsfVxuICpcbiAqIEBjYWxsYmFjayBDaGFpbmVkTWFwUmFuZ2VcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbkxvd1xuICogQHBhcmFtIHtOdW1iZXJ9IGluSGlnaFxuICogQHBhcmFtIHtOdW1iZXJ9IG91dExvd1xuICogQHBhcmFtIHtOdW1iZXJ9IG91dEhpZ2hcbiAqIEByZXR1cm4ge0NoYWluYWJsZVV0aWx9XG4gKlxuICogQGNhbGxiYWNrIENoYWluZWRSb3VuZFBhZFxuICogQHBhcmFtIHtOdW1iZXJ9IGRlY2ltYWxMZW5ndGhcbiAqIEByZXR1cm4ge0NoYWluYWJsZVV0aWx9XG4gKlxuICogQGNhbGxiYWNrIENoYWluZWRQYWRTdGFydFxuICogQHBhcmFtIHtOdW1iZXJ9IHRvdGFsTGVuZ3RoXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFkU3RyaW5nXG4gKiBAcmV0dXJuIHtDaGFpbmFibGVVdGlsfVxuICpcbiAqIEBjYWxsYmFjayBDaGFpbmVkUGFkRW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdG90YWxMZW5ndGhcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYWRTdHJpbmdcbiAqIEByZXR1cm4ge0NoYWluYWJsZVV0aWx9XG4gKlxuICogQGNhbGxiYWNrIENoYWluZWREZWdUb1JhZFxuICogQHJldHVybiB7Q2hhaW5hYmxlVXRpbH1cbiAqXG4gKiBAY2FsbGJhY2sgQ2hhaW5lZFJhZFRvRGVnXG4gKiBAcmV0dXJuIHtDaGFpbmFibGVVdGlsfVxuICovXG5cbmNvbnN0IHV0aWxzID0ge1xuICAkOiByZWdpc3RlclRhcmdldHMsXG4gIGdldDogZ2V0VGFyZ2V0VmFsdWUsXG4gIHNldDogc2V0VGFyZ2V0VmFsdWVzLFxuICByZW1vdmUsXG4gIGNsZWFuSW5saW5lU3R5bGVzLFxuICByYW5kb20sXG4gIHJhbmRvbVBpY2ssXG4gIHNodWZmbGUsXG4gIGxlcnAsXG4gIHN5bmMsXG4gIGNsYW1wOiAvKiogQHR5cGUge3R5cGVvZiBjbGFtcCAmIENoYWluZWRDbGFtcH0gKi8obWFrZUNoYWluYWJsZShjbGFtcCkpLFxuICByb3VuZDogLyoqIEB0eXBlIHt0eXBlb2Ygcm91bmQgJiBDaGFpbmVkUm91bmR9ICovKG1ha2VDaGFpbmFibGUocm91bmQpKSxcbiAgc25hcDogLyoqIEB0eXBlIHt0eXBlb2Ygc25hcCAmIENoYWluZWRTbmFwfSAqLyhtYWtlQ2hhaW5hYmxlKHNuYXApKSxcbiAgd3JhcDogLyoqIEB0eXBlIHt0eXBlb2Ygd3JhcCAmIENoYWluZWRXcmFwfSAqLyhtYWtlQ2hhaW5hYmxlKHdyYXApKSxcbiAgaW50ZXJwb2xhdGU6IC8qKiBAdHlwZSB7dHlwZW9mIGludGVycG9sYXRlICYgQ2hhaW5lZEludGVycG9sYXRlfSAqLyhtYWtlQ2hhaW5hYmxlKGludGVycG9sYXRlLCAxKSksXG4gIG1hcFJhbmdlOiAvKiogQHR5cGUge3R5cGVvZiBtYXBSYW5nZSAmIENoYWluZWRNYXBSYW5nZX0gKi8obWFrZUNoYWluYWJsZShtYXBSYW5nZSkpLFxuICByb3VuZFBhZDogLyoqIEB0eXBlIHt0eXBlb2Ygcm91bmRQYWQgJiBDaGFpbmVkUm91bmRQYWR9ICovKG1ha2VDaGFpbmFibGUocm91bmRQYWQpKSxcbiAgcGFkU3RhcnQ6IC8qKiBAdHlwZSB7dHlwZW9mIHBhZFN0YXJ0ICYgQ2hhaW5lZFBhZFN0YXJ0fSAqLyhtYWtlQ2hhaW5hYmxlKHBhZFN0YXJ0KSksXG4gIHBhZEVuZDogLyoqIEB0eXBlIHt0eXBlb2YgcGFkRW5kICYgQ2hhaW5lZFBhZEVuZH0gKi8obWFrZUNoYWluYWJsZShwYWRFbmQpKSxcbiAgZGVnVG9SYWQ6IC8qKiBAdHlwZSB7dHlwZW9mIGRlZ1RvUmFkICYgQ2hhaW5lZERlZ1RvUmFkfSAqLyhtYWtlQ2hhaW5hYmxlKGRlZ1RvUmFkKSksXG4gIHJhZFRvRGVnOiAvKiogQHR5cGUge3R5cGVvZiByYWRUb0RlZyAmIENoYWluZWRSYWRUb0RlZ30gKi8obWFrZUNoYWluYWJsZShyYWRUb0RlZykpLFxufTtcblxuXG5cblxuLyoqXG4gKiBAdHlwZWRlZiB7TnVtYmVyfFN0cmluZ3xGdW5jdGlvbn0gVGltZVBvc2l0aW9uXG4gKi9cblxuLyoqXG4gKiBUaW1lbGluZSdzIGNoaWxkcmVuIG9mZnNldHMgcG9zaXRpb25zIHBhcnNlclxuICogQHBhcmFtICB7VGltZWxpbmV9IHRpbWVsaW5lXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHRpbWVQb3NpdGlvblxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5jb25zdCBnZXRQcmV2Q2hpbGRPZmZzZXQgPSAodGltZWxpbmUsIHRpbWVQb3NpdGlvbikgPT4ge1xuICBpZiAoc3RyaW5nU3RhcnRzV2l0aCh0aW1lUG9zaXRpb24sICc8JykpIHtcbiAgICBjb25zdCBnb1RvUHJldkFuaW1hdGlvbk9mZnNldCA9IHRpbWVQb3NpdGlvblsxXSA9PT0gJzwnO1xuICAgIGNvbnN0IHByZXZBbmltYXRpb24gPSAvKiogQHR5cGUge1RpY2thYmxlfSAqLyh0aW1lbGluZS5fdGFpbCk7XG4gICAgY29uc3QgcHJldk9mZnNldCA9IHByZXZBbmltYXRpb24gPyBwcmV2QW5pbWF0aW9uLl9vZmZzZXQgKyBwcmV2QW5pbWF0aW9uLl9kZWxheSA6IDA7XG4gICAgcmV0dXJuIGdvVG9QcmV2QW5pbWF0aW9uT2Zmc2V0ID8gcHJldk9mZnNldCA6IHByZXZPZmZzZXQgKyBwcmV2QW5pbWF0aW9uLmR1cmF0aW9uO1xuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSAge1RpbWVsaW5lfSB0aW1lbGluZVxuICogQHBhcmFtICB7VGltZVBvc2l0aW9ufSBbdGltZVBvc2l0aW9uXVxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5jb25zdCBwYXJzZVRpbWVsaW5lUG9zaXRpb24gPSAodGltZWxpbmUsIHRpbWVQb3NpdGlvbikgPT4ge1xuICBsZXQgdGxEdXJhdGlvbiA9IHRpbWVsaW5lLml0ZXJhdGlvbkR1cmF0aW9uO1xuICBpZiAodGxEdXJhdGlvbiA9PT0gbWluVmFsdWUpIHRsRHVyYXRpb24gPSAwO1xuICBpZiAoaXNVbmQodGltZVBvc2l0aW9uKSkgcmV0dXJuIHRsRHVyYXRpb247XG4gIGlmIChpc051bSgrdGltZVBvc2l0aW9uKSkgcmV0dXJuICt0aW1lUG9zaXRpb247XG4gIGNvbnN0IHRpbWVQb3NTdHIgPSAvKiogQHR5cGUge1N0cmluZ30gKi8odGltZVBvc2l0aW9uKTtcbiAgY29uc3QgdGxMYWJlbHMgPSB0aW1lbGluZSA/IHRpbWVsaW5lLmxhYmVscyA6IG51bGw7XG4gIGNvbnN0IGhhc0xhYmVscyA9ICFpc05pbCh0bExhYmVscyk7XG4gIGNvbnN0IHByZXZPZmZzZXQgPSBnZXRQcmV2Q2hpbGRPZmZzZXQodGltZWxpbmUsIHRpbWVQb3NTdHIpO1xuICBjb25zdCBoYXNTaWJsaW5nID0gIWlzVW5kKHByZXZPZmZzZXQpO1xuICBjb25zdCBtYXRjaGVkUmVsYXRpdmVPcGVyYXRvciA9IHJlbGF0aXZlVmFsdWVzRXhlY1JneC5leGVjKHRpbWVQb3NTdHIpO1xuICBpZiAobWF0Y2hlZFJlbGF0aXZlT3BlcmF0b3IpIHtcbiAgICBjb25zdCBmdWxsT3BlcmF0b3IgPSBtYXRjaGVkUmVsYXRpdmVPcGVyYXRvclswXTtcbiAgICBjb25zdCBzcGxpdCA9IHRpbWVQb3NTdHIuc3BsaXQoZnVsbE9wZXJhdG9yKTtcbiAgICBjb25zdCBsYWJlbE9mZnNldCA9IGhhc0xhYmVscyAmJiBzcGxpdFswXSA/IHRsTGFiZWxzW3NwbGl0WzBdXSA6IHRsRHVyYXRpb247XG4gICAgY29uc3QgcGFyc2VkT2Zmc2V0ID0gaGFzU2libGluZyA/IHByZXZPZmZzZXQgOiBoYXNMYWJlbHMgPyBsYWJlbE9mZnNldCA6IHRsRHVyYXRpb247XG4gICAgY29uc3QgcGFyc2VkTnVtZXJpY2FsT2Zmc2V0ID0gK3NwbGl0WzFdO1xuICAgIHJldHVybiBnZXRSZWxhdGl2ZVZhbHVlKHBhcnNlZE9mZnNldCwgcGFyc2VkTnVtZXJpY2FsT2Zmc2V0LCBmdWxsT3BlcmF0b3JbMF0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBoYXNTaWJsaW5nID8gcHJldk9mZnNldCA6XG4gICAgICAgICAgIGhhc0xhYmVscyA/ICFpc1VuZCh0bExhYmVsc1t0aW1lUG9zU3RyXSkgPyB0bExhYmVsc1t0aW1lUG9zU3RyXSA6XG4gICAgICAgICAgIHRsRHVyYXRpb24gOiB0bER1cmF0aW9uO1xuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7VGltZWxpbmV9IHRsXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldFRpbWVsaW5lVG90YWxEdXJhdGlvbih0bCkge1xuICByZXR1cm4gY2xhbXBJbmZpbml0eSgoKHRsLml0ZXJhdGlvbkR1cmF0aW9uICsgdGwuX2xvb3BEZWxheSkgKiB0bC5pdGVyYXRpb25Db3VudCkgLSB0bC5fbG9vcERlbGF5KSB8fCBtaW5WYWx1ZTtcbn1cblxuLyoqXG4gKiBAb3ZlcmxvYWRcbiAqIEBwYXJhbSAge1RpbWVyUGFyYW1zfSBjaGlsZFBhcmFtc1xuICogQHBhcmFtICB7VGltZWxpbmV9IHRsXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHRpbWVQb3NpdGlvblxuICogQHJldHVybiB7VGltZWxpbmV9XG4gKlxuICogQG92ZXJsb2FkXG4gKiBAcGFyYW0gIHtBbmltYXRpb25QYXJhbXN9IGNoaWxkUGFyYW1zXG4gKiBAcGFyYW0gIHtUaW1lbGluZX0gdGxcbiAqIEBwYXJhbSAge051bWJlcn0gdGltZVBvc2l0aW9uXG4gKiBAcGFyYW0gIHtUYXJnZXRzUGFyYW19IHRhcmdldHNcbiAqIEBwYXJhbSAge051bWJlcn0gW2luZGV4XVxuICogQHBhcmFtICB7TnVtYmVyfSBbbGVuZ3RoXVxuICogQHJldHVybiB7VGltZWxpbmV9XG4gKlxuICogQHBhcmFtICB7VGltZXJQYXJhbXN8QW5pbWF0aW9uUGFyYW1zfSBjaGlsZFBhcmFtc1xuICogQHBhcmFtICB7VGltZWxpbmV9IHRsXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHRpbWVQb3NpdGlvblxuICogQHBhcmFtICB7VGFyZ2V0c1BhcmFtfSBbdGFyZ2V0c11cbiAqIEBwYXJhbSAge051bWJlcn0gW2luZGV4XVxuICogQHBhcmFtICB7TnVtYmVyfSBbbGVuZ3RoXVxuICovXG5mdW5jdGlvbiBhZGRUbENoaWxkKGNoaWxkUGFyYW1zLCB0bCwgdGltZVBvc2l0aW9uLCB0YXJnZXRzLCBpbmRleCwgbGVuZ3RoKSB7XG4gIGNvbnN0IGlzU2V0dGVyID0gaXNOdW0oY2hpbGRQYXJhbXMuZHVyYXRpb24pICYmIC8qKiBAdHlwZSB7TnVtYmVyfSAqLyhjaGlsZFBhcmFtcy5kdXJhdGlvbikgPD0gbWluVmFsdWU7XG4gIC8vIE9mZnNldCB0aGUgdGwgcG9zaXRpb24gd2l0aCAtbWluVmFsdWUgZm9yIDAgZHVyYXRpb24gYW5pbWF0aW9ucyBvciAuc2V0KCkgY2FsbHMgaW4gb3JkZXIgdG8gYWxpZ24gdGhlaXIgZW5kIHZhbHVlIHdpdGggdGhlIGRlZmluZWQgcG9zaXRpb25cbiAgY29uc3QgYWRqdXN0ZWRQb3NpdGlvbiA9IGlzU2V0dGVyID8gdGltZVBvc2l0aW9uIC0gbWluVmFsdWUgOiB0aW1lUG9zaXRpb247XG4gIHRpY2sodGwsIGFkanVzdGVkUG9zaXRpb24sIDEsIDEsIHRpY2tNb2Rlcy5BVVRPKTtcbiAgY29uc3QgdGxDaGlsZCA9IHRhcmdldHMgP1xuICAgIG5ldyBKU0FuaW1hdGlvbih0YXJnZXRzLC8qKiBAdHlwZSB7QW5pbWF0aW9uUGFyYW1zfSAqLyhjaGlsZFBhcmFtcyksIHRsLCBhZGp1c3RlZFBvc2l0aW9uLCBmYWxzZSwgaW5kZXgsIGxlbmd0aCkgOlxuICAgIG5ldyBUaW1lcigvKiogQHR5cGUge1RpbWVyUGFyYW1zfSAqLyhjaGlsZFBhcmFtcyksIHRsLCBhZGp1c3RlZFBvc2l0aW9uKTtcbiAgdGxDaGlsZC5pbml0KDEpO1xuICAvLyBUT0RPOiBNaWdodCBiZSBiZXR0ZXIgdG8gaW5zZXJ0IGF0IGEgcG9zaXRpb24gcmVsYXRpdmUgdG8gc3RhcnRUaW1lP1xuICBhZGRDaGlsZCh0bCwgdGxDaGlsZCk7XG4gIGZvckVhY2hDaGlsZHJlbih0bCwgKC8qKiBAdHlwZSB7UmVuZGVyYWJsZX0gKi9jaGlsZCkgPT4ge1xuICAgIGNvbnN0IGNoaWxkVExPZmZzZXQgPSBjaGlsZC5fb2Zmc2V0ICsgY2hpbGQuX2RlbGF5O1xuICAgIGNvbnN0IGNoaWxkRHVyID0gY2hpbGRUTE9mZnNldCArIGNoaWxkLmR1cmF0aW9uO1xuICAgIGlmIChjaGlsZER1ciA+IHRsLml0ZXJhdGlvbkR1cmF0aW9uKSB0bC5pdGVyYXRpb25EdXJhdGlvbiA9IGNoaWxkRHVyO1xuICB9KTtcbiAgdGwuZHVyYXRpb24gPSBnZXRUaW1lbGluZVRvdGFsRHVyYXRpb24odGwpO1xuICByZXR1cm4gdGw7XG59XG5cbmNsYXNzIFRpbWVsaW5lIGV4dGVuZHMgVGltZXIge1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1RpbWVsaW5lUGFyYW1zfSBbcGFyYW1ldGVyc11cbiAgICovXG4gIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMgPSB7fSkge1xuICAgIHN1cGVyKC8qKiBAdHlwZSB7VGltZXJQYXJhbXMmVGltZWxpbmVQYXJhbXN9ICovKHBhcmFtZXRlcnMpLCBudWxsLCAwKTtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLmR1cmF0aW9uID0gMDsgLy8gVEwgZHVyYXRpb24gc3RhcnRzIGF0IDAgYW5kIGdyb3dzIHdoZW4gYWRkaW5nIGNoaWxkcmVuXG4gICAgLyoqIEB0eXBlIHtSZWNvcmQ8U3RyaW5nLCBOdW1iZXI+fSAqL1xuICAgIHRoaXMubGFiZWxzID0ge307XG4gICAgY29uc3QgZGVmYXVsdHNQYXJhbXMgPSBwYXJhbWV0ZXJzLmRlZmF1bHRzO1xuICAgIGNvbnN0IGdsb2JhbERlZmF1bHRzID0gZ2xvYmFscy5kZWZhdWx0cztcbiAgICAvKiogQHR5cGUge0RlZmF1bHRzUGFyYW1zfSAqL1xuICAgIHRoaXMuZGVmYXVsdHMgPSBkZWZhdWx0c1BhcmFtcyA/IG1lcmdlT2JqZWN0cyhkZWZhdWx0c1BhcmFtcywgZ2xvYmFsRGVmYXVsdHMpIDogZ2xvYmFsRGVmYXVsdHM7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazx0aGlzPn0gKi9cbiAgICB0aGlzLm9uUmVuZGVyID0gcGFyYW1ldGVycy5vblJlbmRlciB8fCBnbG9iYWxEZWZhdWx0cy5vblJlbmRlcjtcbiAgICBjb25zdCB0bFBsYXliYWNrRWFzZSA9IHNldFZhbHVlKHBhcmFtZXRlcnMucGxheWJhY2tFYXNlLCBnbG9iYWxEZWZhdWx0cy5wbGF5YmFja0Vhc2UpO1xuICAgIHRoaXMuX2Vhc2UgPSB0bFBsYXliYWNrRWFzZSA/IHBhcnNlRWFzaW5ncyh0bFBsYXliYWNrRWFzZSkgOiBudWxsO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuaXRlcmF0aW9uRHVyYXRpb24gPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVybG9hZFxuICAgKiBAcGFyYW0ge1RhcmdldHNQYXJhbX0gYTFcbiAgICogQHBhcmFtIHtBbmltYXRpb25QYXJhbXN9IGEyXG4gICAqIEBwYXJhbSB7VGltZVBvc2l0aW9ufSBbYTNdXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqXG4gICAqIEBvdmVybG9hZFxuICAgKiBAcGFyYW0ge1RpbWVyUGFyYW1zfSBhMVxuICAgKiBAcGFyYW0ge1RpbWVQb3NpdGlvbn0gW2EyXVxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKlxuICAgKiBAcGFyYW0ge1RhcmdldHNQYXJhbXxUaW1lclBhcmFtc30gYTFcbiAgICogQHBhcmFtIHtBbmltYXRpb25QYXJhbXN8VGltZVBvc2l0aW9ufSBhMlxuICAgKiBAcGFyYW0ge1RpbWVQb3NpdGlvbn0gW2EzXVxuICAgKi9cbiAgYWRkKGExLCBhMiwgYTMpIHtcbiAgICBjb25zdCBpc0FuaW0gPSBpc09iaihhMik7XG4gICAgY29uc3QgaXNUaW1lciA9IGlzT2JqKGExKTtcbiAgICBpZiAoaXNBbmltIHx8IGlzVGltZXIpIHtcbiAgICAgIHRoaXMuX2hhc0NoaWxkcmVuID0gdHJ1ZTtcbiAgICAgIGlmIChpc0FuaW0pIHtcbiAgICAgICAgY29uc3QgY2hpbGRQYXJhbXMgPSAvKiogQHR5cGUge0FuaW1hdGlvblBhcmFtc30gKi8oYTIpO1xuICAgICAgICAvLyBDaGVjayBmb3IgZnVuY3Rpb24gZm9yIGNoaWxkcmVuIHN0YWdnZXIgcG9zaXRpb25zXG4gICAgICAgIGlmIChpc0ZuYyhhMykpIHtcbiAgICAgICAgICBjb25zdCBzdGFnZ2VyZWRQb3NpdGlvbiA9IC8qKiBAdHlwZSB7RnVuY3Rpb259ICovKGEzKTtcbiAgICAgICAgICBjb25zdCBwYXJzZWRUYXJnZXRzQXJyYXkgPSBwYXJzZVRhcmdldHMoLyoqIEB0eXBlIHtUYXJnZXRzUGFyYW19ICovKGExKSk7XG4gICAgICAgICAgLy8gU3RvcmUgaW5pdGlhbCBkdXJhdGlvbiBiZWZvcmUgYWRkaW5nIG5ldyBjaGlsZHJlbiB0aGF0IHdpbGwgY2hhbmdlIHRoZSBkdXJhdGlvblxuICAgICAgICAgIGNvbnN0IHRsRHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uO1xuICAgICAgICAgIC8vIFN0b3JlIGluaXRpYWwgX2l0ZXJhdGlvbkR1cmF0aW9uIGJlZm9yZSBhZGRpbmcgbmV3IGNoaWxkcmVuIHRoYXQgd2lsbCBjaGFuZ2UgdGhlIGR1cmF0aW9uXG4gICAgICAgICAgY29uc3QgdGxJdGVyYXRpb25EdXJhdGlvbiA9IHRoaXMuaXRlcmF0aW9uRHVyYXRpb247XG4gICAgICAgICAgLy8gU3RvcmUgdGhlIG9yaWdpbmFsIGlkIGluIG9yZGVyIHRvIGFkZCBzcGVjaWZpYyBpbmRleGVzIHRvIHRoZSBuZXcgYW5pbWF0aW9ucyBpZHNcbiAgICAgICAgICBjb25zdCBpZCA9IGNoaWxkUGFyYW1zLmlkO1xuICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICBjb25zdCBwYXJzZWRMZW5ndGggPSBwYXJzZWRUYXJnZXRzQXJyYXkubGVuZ3RoO1xuICAgICAgICAgIHBhcnNlZFRhcmdldHNBcnJheS5mb3JFYWNoKCgvKiogQHR5cGUge1RhcmdldH0gKi90YXJnZXQpID0+IHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBwYXJhbWV0ZXIgb2JqZWN0IGZvciBlYWNoIHN0YWdnZXJlZCBjaGlsZHJlblxuICAgICAgICAgICAgY29uc3Qgc3RhZ2dlcmVkQ2hpbGRQYXJhbXMgPSB7IC4uLmNoaWxkUGFyYW1zIH07XG4gICAgICAgICAgICAvLyBSZXNldCB0aGUgZHVyYXRpb24gb2YgdGhlIHRpbWVsaW5lIGl0ZXJhdGlvbiBiZWZvcmUgZWFjaCBzdGFnZ2VyIHRvIHByZXZlbnQgd3Jvbmcgc3RhcnQgdmFsdWUgY2FsY3VsYXRpb25cbiAgICAgICAgICAgIHRoaXMuZHVyYXRpb24gPSB0bER1cmF0aW9uO1xuICAgICAgICAgICAgdGhpcy5pdGVyYXRpb25EdXJhdGlvbiA9IHRsSXRlcmF0aW9uRHVyYXRpb247XG4gICAgICAgICAgICBpZiAoIWlzVW5kKGlkKSkgc3RhZ2dlcmVkQ2hpbGRQYXJhbXMuaWQgPSBpZCArICctJyArIGk7XG4gICAgICAgICAgICBhZGRUbENoaWxkKFxuICAgICAgICAgICAgICBzdGFnZ2VyZWRDaGlsZFBhcmFtcyxcbiAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgc3RhZ2dlcmVkUG9zaXRpb24odGFyZ2V0LCBpLCBwYXJzZWRMZW5ndGgsIHRoaXMpLFxuICAgICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgIHBhcnNlZExlbmd0aFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRUbENoaWxkKFxuICAgICAgICAgICAgY2hpbGRQYXJhbXMsXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgcGFyc2VUaW1lbGluZVBvc2l0aW9uKHRoaXMsIGEzKSxcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7VGFyZ2V0c1BhcmFtfSAqLyhhMSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSXQncyBhIFRpbWVyXG4gICAgICAgIGFkZFRsQ2hpbGQoXG4gICAgICAgICAgLyoqIEB0eXBlIFRpbWVyUGFyYW1zICovKGExKSxcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIHBhcnNlVGltZWxpbmVQb3NpdGlvbih0aGlzLC8qKiBAdHlwZSBUaW1lUG9zaXRpb24gKi8oYTIpKSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmluaXQoMSk7IC8vIDEgPSBpbnRlcm5hbFJlbmRlclxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcmxvYWRcbiAgICogQHBhcmFtIHtUaWNrYWJsZX0gW3N5bmNlZF1cbiAgICogQHBhcmFtIHtUaW1lUG9zaXRpb259IFtwb3NpdGlvbl1cbiAgICogQHJldHVybiB7dGhpc31cbiAgICpcbiAgICogQG92ZXJsb2FkXG4gICAqIEBwYXJhbSB7Z2xvYmFsVGhpcy5BbmltYXRpb259IFtzeW5jZWRdXG4gICAqIEBwYXJhbSB7VGltZVBvc2l0aW9ufSBbcG9zaXRpb25dXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqXG4gICAqIEBvdmVybG9hZFxuICAgKiBAcGFyYW0ge1dBQVBJQW5pbWF0aW9ufSBbc3luY2VkXVxuICAgKiBAcGFyYW0ge1RpbWVQb3NpdGlvbn0gW3Bvc2l0aW9uXVxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKlxuICAgKiBAcGFyYW0ge1RpY2thYmxlfFdBQVBJQW5pbWF0aW9ufGdsb2JhbFRoaXMuQW5pbWF0aW9ufSBbc3luY2VkXVxuICAgKiBAcGFyYW0ge1RpbWVQb3NpdGlvbn0gW3Bvc2l0aW9uXVxuICAgKi9cbiAgc3luYyhzeW5jZWQsIHBvc2l0aW9uKSB7XG4gICAgaWYgKGlzVW5kKHN5bmNlZCkgfHwgc3luY2VkICYmIGlzVW5kKHN5bmNlZC5wYXVzZSkpIHJldHVybiB0aGlzO1xuICAgIHN5bmNlZC5wYXVzZSgpO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gKygvKiogQHR5cGUge2dsb2JhbFRoaXMuQW5pbWF0aW9ufSAqLyhzeW5jZWQpLmVmZmVjdCA/IC8qKiBAdHlwZSB7Z2xvYmFsVGhpcy5BbmltYXRpb259ICovKHN5bmNlZCkuZWZmZWN0LmdldFRpbWluZygpLmR1cmF0aW9uIDogLyoqIEB0eXBlIHtUaWNrYWJsZX0gKi8oc3luY2VkKS5kdXJhdGlvbik7XG4gICAgcmV0dXJuIHRoaXMuYWRkKHN5bmNlZCwgeyBjdXJyZW50VGltZTogWzAsIGR1cmF0aW9uXSwgZHVyYXRpb24sIGVhc2U6ICdsaW5lYXInIH0sIHBvc2l0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtUYXJnZXRzUGFyYW19IHRhcmdldHNcbiAgICogQHBhcmFtICB7QW5pbWF0aW9uUGFyYW1zfSBwYXJhbWV0ZXJzXG4gICAqIEBwYXJhbSAge1RpbWVQb3NpdGlvbn0gW3Bvc2l0aW9uXVxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgc2V0KHRhcmdldHMsIHBhcmFtZXRlcnMsIHBvc2l0aW9uKSB7XG4gICAgaWYgKGlzVW5kKHBhcmFtZXRlcnMpKSByZXR1cm4gdGhpcztcbiAgICBwYXJhbWV0ZXJzLmR1cmF0aW9uID0gbWluVmFsdWU7XG4gICAgcGFyYW1ldGVycy5jb21wb3NpdGlvbiA9IGNvbXBvc2l0aW9uVHlwZXMucmVwbGFjZTtcbiAgICByZXR1cm4gdGhpcy5hZGQodGFyZ2V0cywgcGFyYW1ldGVycywgcG9zaXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Q2FsbGJhY2s8VGltZXI+fSBjYWxsYmFja1xuICAgKiBAcGFyYW0ge1RpbWVQb3NpdGlvbn0gW3Bvc2l0aW9uXVxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgY2FsbChjYWxsYmFjaywgcG9zaXRpb24pIHtcbiAgICBpZiAoaXNVbmQoY2FsbGJhY2spIHx8IGNhbGxiYWNrICYmICFpc0ZuYyhjYWxsYmFjaykpIHJldHVybiB0aGlzO1xuICAgIHJldHVybiB0aGlzLmFkZCh7IGR1cmF0aW9uOiAwLCBvbkNvbXBsZXRlOiAoKSA9PiBjYWxsYmFjayh0aGlzKSB9LCBwb3NpdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtTdHJpbmd9IGxhYmVsTmFtZVxuICAgKiBAcGFyYW0ge1RpbWVQb3NpdGlvbn0gW3Bvc2l0aW9uXVxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKlxuICAgKi9cbiAgbGFiZWwobGFiZWxOYW1lLCBwb3NpdGlvbikge1xuICAgIGlmIChpc1VuZChsYWJlbE5hbWUpIHx8IGxhYmVsTmFtZSAmJiAhaXNTdHIobGFiZWxOYW1lKSkgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5sYWJlbHNbbGFiZWxOYW1lXSA9IHBhcnNlVGltZWxpbmVQb3NpdGlvbih0aGlzLC8qKiBAdHlwZSBUaW1lUG9zaXRpb24gKi8ocG9zaXRpb24pKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtUYXJnZXRzUGFyYW19IHRhcmdldHNcbiAgICogQHBhcmFtICB7U3RyaW5nfSBbcHJvcGVydHlOYW1lXVxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgcmVtb3ZlKHRhcmdldHMsIHByb3BlcnR5TmFtZSkge1xuICAgIHJlbW92ZSh0YXJnZXRzLCB0aGlzLCBwcm9wZXJ0eU5hbWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge051bWJlcn0gbmV3RHVyYXRpb25cbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIHN0cmV0Y2gobmV3RHVyYXRpb24pIHtcbiAgICBjb25zdCBjdXJyZW50RHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uO1xuICAgIGlmIChjdXJyZW50RHVyYXRpb24gPT09IG5vcm1hbGl6ZVRpbWUobmV3RHVyYXRpb24pKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCB0aW1lU2NhbGUgPSBuZXdEdXJhdGlvbiAvIGN1cnJlbnREdXJhdGlvbjtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmxhYmVscztcbiAgICBmb3JFYWNoQ2hpbGRyZW4odGhpcywgKC8qKiBAdHlwZSB7SlNBbmltYXRpb259ICovY2hpbGQpID0+IGNoaWxkLnN0cmV0Y2goY2hpbGQuZHVyYXRpb24gKiB0aW1lU2NhbGUpKTtcbiAgICBmb3IgKGxldCBsYWJlbE5hbWUgaW4gbGFiZWxzKSBsYWJlbHNbbGFiZWxOYW1lXSAqPSB0aW1lU2NhbGU7XG4gICAgcmV0dXJuIHN1cGVyLnN0cmV0Y2gobmV3RHVyYXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuICByZWZyZXNoKCkge1xuICAgIGZvckVhY2hDaGlsZHJlbih0aGlzLCAoLyoqIEB0eXBlIHtKU0FuaW1hdGlvbn0gKi9jaGlsZCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnJlZnJlc2gpIGNoaWxkLnJlZnJlc2goKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgcmV2ZXJ0KCkge1xuICAgIHN1cGVyLnJldmVydCgpO1xuICAgIGZvckVhY2hDaGlsZHJlbih0aGlzLCAoLyoqIEB0eXBlIHtKU0FuaW1hdGlvbn0gKi9jaGlsZCkgPT4gY2hpbGQucmV2ZXJ0LCB0cnVlKTtcbiAgICByZXR1cm4gY2xlYW5JbmxpbmVTdHlsZXModGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtICB7Q2FsbGJhY2s8dGhpcz59IFtjYWxsYmFja11cbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICovXG4gIHRoZW4oY2FsbGJhY2spIHtcbiAgICByZXR1cm4gc3VwZXIudGhlbihjYWxsYmFjayk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1RpbWVsaW5lUGFyYW1zfSBbcGFyYW1ldGVyc11cbiAqIEByZXR1cm4ge1RpbWVsaW5lfVxuICovXG5jb25zdCBjcmVhdGVUaW1lbGluZSA9IHBhcmFtZXRlcnMgPT4gbmV3IFRpbWVsaW5lKHBhcmFtZXRlcnMpLmluaXQoKTtcblxuXG5cblxuY2xhc3MgQW5pbWF0YWJsZSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge1RhcmdldHNQYXJhbX0gdGFyZ2V0c1xuICAgKiBAcGFyYW0ge0FuaW1hdGFibGVQYXJhbXN9IHBhcmFtZXRlcnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHRhcmdldHMsIHBhcmFtZXRlcnMpIHtcbiAgICBpZiAoZ2xvYmFscy5zY29wZSkgZ2xvYmFscy5zY29wZS5yZXZlcnRpYmxlcy5wdXNoKHRoaXMpO1xuICAgIC8qKiBAdHlwZSB7QW5pbWF0aW9uUGFyYW1zfSAqL1xuICAgIGNvbnN0IGdsb2JhbFBhcmFtcyA9IHt9O1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB7fTtcbiAgICB0aGlzLnRhcmdldHMgPSBbXTtcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSB7fTtcbiAgICBpZiAoaXNVbmQodGFyZ2V0cykgfHwgaXNVbmQocGFyYW1ldGVycykpIHJldHVybjtcbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBwYXJhbWV0ZXJzKSB7XG4gICAgICBjb25zdCBwYXJhbVZhbHVlID0gcGFyYW1ldGVyc1twcm9wTmFtZV07XG4gICAgICBpZiAoaXNLZXkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BlcnRpZXNbcHJvcE5hbWVdID0gcGFyYW1WYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdsb2JhbFBhcmFtc1twcm9wTmFtZV0gPSBwYXJhbVZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICBjb25zdCBwcm9wVmFsdWUgPSBwcm9wZXJ0aWVzW3Byb3BOYW1lXTtcbiAgICAgIGNvbnN0IGlzT2JqVmFsdWUgPSBpc09iaihwcm9wVmFsdWUpO1xuICAgICAgLyoqIEB0eXBlIHtUd2VlblBhcmFtc09wdGlvbnN9ICovXG4gICAgICBsZXQgcHJvcFBhcmFtcyA9IHt9O1xuICAgICAgbGV0IHRvID0gJys9MCc7XG4gICAgICBpZiAoaXNPYmpWYWx1ZSkge1xuICAgICAgICBjb25zdCB1bml0ID0gcHJvcFZhbHVlLnVuaXQ7XG4gICAgICAgIGlmIChpc1N0cih1bml0KSkgdG8gKz0gdW5pdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BQYXJhbXMuZHVyYXRpb24gPSBwcm9wVmFsdWU7XG4gICAgICB9XG4gICAgICBwcm9wUGFyYW1zW3Byb3BOYW1lXSA9IGlzT2JqVmFsdWUgPyBtZXJnZU9iamVjdHMoeyB0byB9LCBwcm9wVmFsdWUpIDogdG87XG4gICAgICBjb25zdCBhbmltUGFyYW1zID0gbWVyZ2VPYmplY3RzKGdsb2JhbFBhcmFtcywgcHJvcFBhcmFtcyk7XG4gICAgICBhbmltUGFyYW1zLmNvbXBvc2l0aW9uID0gY29tcG9zaXRpb25UeXBlcy5yZXBsYWNlO1xuICAgICAgYW5pbVBhcmFtcy5hdXRvcGxheSA9IGZhbHNlO1xuICAgICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb25zW3Byb3BOYW1lXSA9IG5ldyBKU0FuaW1hdGlvbih0YXJnZXRzLCBhbmltUGFyYW1zLCBudWxsLCAwLCBmYWxzZSkuaW5pdCgpO1xuICAgICAgaWYgKCF0aGlzLnRhcmdldHMubGVuZ3RoKSB0aGlzLnRhcmdldHMucHVzaCguLi5hbmltYXRpb24udGFyZ2V0cyk7XG4gICAgICAvKiogQHR5cGUge0FuaW1hdGFibGVQcm9wZXJ0eX0gKi9cbiAgICAgIHRoaXNbcHJvcE5hbWVdID0gKHRvLCBkdXJhdGlvbiwgZWFzZSkgPT4ge1xuICAgICAgICBjb25zdCB0d2VlbiA9IC8qKiBAdHlwZSB7VHdlZW59ICovKGFuaW1hdGlvbi5faGVhZCk7XG4gICAgICAgIGlmIChpc1VuZCh0bykgJiYgdHdlZW4pIHtcbiAgICAgICAgICBjb25zdCBudW1iZXJzID0gdHdlZW4uX251bWJlcnM7XG4gICAgICAgICAgaWYgKG51bWJlcnMgJiYgbnVtYmVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHdlZW4uX21vZGlmaWVyKHR3ZWVuLl9udW1iZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3JFYWNoQ2hpbGRyZW4oYW5pbWF0aW9uLCAoLyoqIEB0eXBlIHtUd2Vlbn0gKi90d2VlbikgPT4ge1xuICAgICAgICAgICAgaWYgKGlzQXJyKHRvKSkge1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IC8qKiBAdHlwZSB7QXJyYXl9ICovKHRvKS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVW5kKHR3ZWVuLl9udW1iZXJzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdHdlZW4uX2Zyb21OdW1iZXJzW2ldID0gLyoqIEB0eXBlIHtOdW1iZXJ9ICovKHR3ZWVuLl9tb2RpZmllcih0d2Vlbi5fbnVtYmVyc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgdHdlZW4uX3RvTnVtYmVyc1tpXSA9IHRvW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdHdlZW4uX2Zyb21OdW1iZXIgPSAvKiogQHR5cGUge051bWJlcn0gKi8odHdlZW4uX21vZGlmaWVyKHR3ZWVuLl9udW1iZXIpKTtcbiAgICAgICAgICAgICAgdHdlZW4uX3RvTnVtYmVyID0gLyoqIEB0eXBlIHtOdW1iZXJ9ICovKHRvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaXNVbmQoZWFzZSkpIHR3ZWVuLl9lYXNlID0gcGFyc2VFYXNpbmdzKGVhc2UpO1xuICAgICAgICAgICAgdHdlZW4uX2N1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoIWlzVW5kKGR1cmF0aW9uKSkgYW5pbWF0aW9uLnN0cmV0Y2goZHVyYXRpb24pO1xuICAgICAgICAgIGFuaW1hdGlvbi5yZXNldCgxKS5yZXN1bWUoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXZlcnQoKSB7XG4gICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gdGhpcy5hbmltYXRpb25zKSB7XG4gICAgICB0aGlzW3Byb3BOYW1lXSA9IG5vb3A7XG4gICAgICB0aGlzLmFuaW1hdGlvbnNbcHJvcE5hbWVdLnJldmVydCgpO1xuICAgIH1cbiAgICB0aGlzLmFuaW1hdGlvbnMgPSB7fTtcbiAgICB0aGlzLnRhcmdldHMubGVuZ3RoID0gMDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7VGFyZ2V0c1BhcmFtfSB0YXJnZXRzXG4gKiBAcGFyYW0ge0FuaW1hdGFibGVQYXJhbXN9IHBhcmFtZXRlcnNcbiAqIEByZXR1cm4ge0FuaW1hdGFibGVPYmplY3R9XG4gKi9cbmNvbnN0IGNyZWF0ZUFuaW1hdGFibGUgPSAodGFyZ2V0cywgcGFyYW1ldGVycykgPT4gLyoqIEB0eXBlIHtBbmltYXRhYmxlT2JqZWN0fSAqLyhuZXcgQW5pbWF0YWJsZSh0YXJnZXRzLCBwYXJhbWV0ZXJzKSk7XG5cblxuXG5cbi8qXG4gKiBTcHJpbmcgZWFzZSBzb2x2ZXIgYWRhcHRlZCBmcm9tIGh0dHBzOi8vd2Via2l0Lm9yZy9kZW1vcy9zcHJpbmcvc3ByaW5nLmpzXG4gKiBXZWJraXQgQ29weXJpZ2h0IMKpIDIwMTYgQXBwbGUgSW5jXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBTcHJpbmdQYXJhbXNcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBbbWFzcz0xXSAtIE1hc3MsIGRlZmF1bHQgMVxuICogQHByb3BlcnR5IHtOdW1iZXJ9IFtzdGlmZm5lc3M9MTAwXSAtIFN0aWZmbmVzcywgZGVmYXVsdCAxMDBcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBbZGFtcGluZz0xMF0gLSBEYW1waW5nLCBkZWZhdWx0IDEwXG4gKiBAcHJvcGVydHkge051bWJlcn0gW3ZlbG9jaXR5PTBdIC0gSW5pdGlhbCB2ZWxvY2l0eSwgZGVmYXVsdCAwXG4gKi9cblxuY2xhc3MgU3ByaW5nIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7U3ByaW5nUGFyYW1zfSBbcGFyYW1ldGVyc11cbiAgICovXG4gIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMgPSB7fSkge1xuICAgIHRoaXMudGltZVN0ZXAgPSAuMDI7IC8vIEludGVydmFsIGZlZCB0byB0aGUgc29sdmVyIHRvIGNhbGN1bGF0ZSBkdXJhdGlvblxuICAgIHRoaXMucmVzdFRocmVzaG9sZCA9IC4wMDA1OyAvLyBWYWx1ZXMgYmVsb3cgdGhpcyB0aHJlc2hvbGQgYXJlIGNvbnNpZGVyZWQgcmVzdGluZyBwb3NpdGlvblxuICAgIHRoaXMucmVzdER1cmF0aW9uID0gMjAwOyAvLyBEdXJhdGlvbiBpbiBtcyB1c2VkIHRvIGNoZWNrIGlmIHRoZSBzcHJpbmcgaXMgcmVzdGluZyBhZnRlciByZWFjaGluZyByZXN0VGhyZXNob2xkXG4gICAgdGhpcy5tYXhEdXJhdGlvbiA9IDYwMDAwOyAvLyBUaGUgbWF4aW11bSBhbGxvd2VkIHNwcmluZyBkdXJhdGlvbiBpbiBtcyAoZGVmYXVsdCAxIG1pbilcbiAgICB0aGlzLm1heFJlc3RTdGVwcyA9IHRoaXMucmVzdER1cmF0aW9uIC8gdGhpcy50aW1lU3RlcCAvIEs7IC8vIEhvdyBtYW55IHN0ZXBzIGFsbG93ZWQgYWZ0ZXIgcmVhY2hpbmcgcmVzdFRocmVzaG9sZCBiZWZvcmUgc3RvcHBpbmcgdGhlIGR1cmF0aW9uIGNhbGN1bGF0aW9uXG4gICAgdGhpcy5tYXhJdGVyYXRpb25zID0gdGhpcy5tYXhEdXJhdGlvbiAvIHRoaXMudGltZVN0ZXAgLyBLOyAvLyBDYWxjdWxhdGUgdGhlIG1heGltdW0gaXRlcmF0aW9ucyBhbGxvd2VkIGJhc2VkIG9uIG1heER1cmF0aW9uXG4gICAgdGhpcy5tID0gY2xhbXAoc2V0VmFsdWUocGFyYW1ldGVycy5tYXNzLCAxKSwgMCwgSyk7XG4gICAgdGhpcy5zID0gY2xhbXAoc2V0VmFsdWUocGFyYW1ldGVycy5zdGlmZm5lc3MsIDEwMCksIDEsIEspO1xuICAgIHRoaXMuZCA9IGNsYW1wKHNldFZhbHVlKHBhcmFtZXRlcnMuZGFtcGluZywgMTApLCAuMSwgSyk7XG4gICAgdGhpcy52ID0gY2xhbXAoc2V0VmFsdWUocGFyYW1ldGVycy52ZWxvY2l0eSwgMCksIC0xZTMsIEspO1xuICAgIHRoaXMudzAgPSAwO1xuICAgIHRoaXMuemV0YSA9IDA7XG4gICAgdGhpcy53ZCA9IDA7XG4gICAgdGhpcy5iID0gMDtcbiAgICB0aGlzLnNvbHZlckR1cmF0aW9uID0gMDtcbiAgICB0aGlzLmR1cmF0aW9uID0gMDtcbiAgICB0aGlzLmNvbXB1dGUoKTtcbiAgICAvKiogQHR5cGUge0Vhc2luZ0Z1bmN0aW9ufSAqL1xuICAgIHRoaXMuZWFzZSA9IHQgPT4gdCA9PT0gMCB8fCB0ID09PSAxID8gdCA6IHRoaXMuc29sdmUodCAqIHRoaXMuc29sdmVyRHVyYXRpb24pO1xuICB9XG5cbiAgLyoqIEB0eXBlIHtFYXNpbmdGdW5jdGlvbn0gKi9cbiAgc29sdmUodGltZSkge1xuICAgIGNvbnN0IHsgemV0YSwgdzAsIHdkLCBiIH0gPSB0aGlzO1xuICAgIGxldCB0ID0gdGltZTtcbiAgICBpZiAoemV0YSA8IDEpIHtcbiAgICAgIHQgPSBleHAoLXQgKiB6ZXRhICogdzApICogKDEgKiBjb3Mod2QgKiB0KSArIGIgKiBzaW4od2QgKiB0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQgPSAoMSArIGIgKiB0KSAqIGV4cCgtdCAqIHcwKTtcbiAgICB9XG4gICAgcmV0dXJuIDEgLSB0O1xuICB9XG5cbiAgY29tcHV0ZSgpIHtcbiAgICBjb25zdCB7IG1heFJlc3RTdGVwcywgbWF4SXRlcmF0aW9ucywgcmVzdFRocmVzaG9sZCwgdGltZVN0ZXAsIG0sIGQsIHMsIHYgfSA9IHRoaXM7XG4gICAgY29uc3QgdzAgPSB0aGlzLncwID0gY2xhbXAoc3FydChzIC8gbSksIG1pblZhbHVlLCBLKTtcbiAgICBjb25zdCB6ZXRhID0gdGhpcy56ZXRhID0gZCAvICgyICogc3FydChzICogbSkpO1xuICAgIGNvbnN0IHdkID0gdGhpcy53ZCA9IHpldGEgPCAxID8gdzAgKiBzcXJ0KDEgLSB6ZXRhICogemV0YSkgOiAwO1xuICAgIHRoaXMuYiA9IHpldGEgPCAxID8gKHpldGEgKiB3MCArIC12KSAvIHdkIDogLXYgKyB3MDtcbiAgICBsZXQgc29sdmVyVGltZSA9IDA7XG4gICAgbGV0IHJlc3RTdGVwcyA9IDA7XG4gICAgbGV0IGl0ZXJhdGlvbnMgPSAwO1xuICAgIHdoaWxlIChyZXN0U3RlcHMgPCBtYXhSZXN0U3RlcHMgJiYgaXRlcmF0aW9ucyA8IG1heEl0ZXJhdGlvbnMpIHtcbiAgICAgIGlmIChhYnMoMSAtIHRoaXMuc29sdmUoc29sdmVyVGltZSkpIDwgcmVzdFRocmVzaG9sZCkge1xuICAgICAgICByZXN0U3RlcHMrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3RTdGVwcyA9IDA7XG4gICAgICB9XG4gICAgICB0aGlzLnNvbHZlckR1cmF0aW9uID0gc29sdmVyVGltZTtcbiAgICAgIHNvbHZlclRpbWUgKz0gdGltZVN0ZXA7XG4gICAgICBpdGVyYXRpb25zKys7XG4gICAgfVxuICAgIHRoaXMuZHVyYXRpb24gPSByb3VuZCh0aGlzLnNvbHZlckR1cmF0aW9uICogSywgMCkgKiBnbG9iYWxzLnRpbWVTY2FsZTtcbiAgfVxuXG4gIGdldCBtYXNzKCkge1xuICAgIHJldHVybiB0aGlzLm07XG4gIH1cblxuICBzZXQgbWFzcyh2KSB7XG4gICAgdGhpcy5tID0gY2xhbXAoc2V0VmFsdWUodiwgMSksIDAsIEspO1xuICAgIHRoaXMuY29tcHV0ZSgpO1xuICB9XG5cbiAgZ2V0IHN0aWZmbmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5zO1xuICB9XG5cbiAgc2V0IHN0aWZmbmVzcyh2KSB7XG4gICAgdGhpcy5zID0gY2xhbXAoc2V0VmFsdWUodiwgMTAwKSwgMSwgSyk7XG4gICAgdGhpcy5jb21wdXRlKCk7XG4gIH1cblxuICBnZXQgZGFtcGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5kO1xuICB9XG5cbiAgc2V0IGRhbXBpbmcodikge1xuICAgIHRoaXMuZCA9IGNsYW1wKHNldFZhbHVlKHYsIDEwKSwgLjEsIEspO1xuICAgIHRoaXMuY29tcHV0ZSgpO1xuICB9XG5cbiAgZ2V0IHZlbG9jaXR5KCkge1xuICAgIHJldHVybiB0aGlzLnY7XG4gIH1cblxuICBzZXQgdmVsb2NpdHkodikge1xuICAgIHRoaXMudiA9IGNsYW1wKHNldFZhbHVlKHYsIDApLCAtMWUzLCBLKTtcbiAgICB0aGlzLmNvbXB1dGUoKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7U3ByaW5nUGFyYW1zfSBbcGFyYW1ldGVyc11cbiAqIEByZXR1cm5zIHtTcHJpbmd9XG4gKi9cbmNvbnN0IGNyZWF0ZVNwcmluZyA9IChwYXJhbWV0ZXJzKSA9PiBuZXcgU3ByaW5nKHBhcmFtZXRlcnMpO1xuXG5cblxuXG4vKipcbiAqIEBwYXJhbSB7RXZlbnR9IGVcbiAqL1xuY29uc3QgcHJldmVudERlZmF1bHQgPSBlID0+IHtcbiAgaWYgKGUuY2FuY2VsYWJsZSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xufTtcblxuY2xhc3MgRE9NUHJveHkge1xuICAvKiogQHBhcmFtIHtPYmplY3R9IGVsICovXG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMuekluZGV4ID0gMDtcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuY2xhc3NMaXN0ID0ge1xuICAgICAgYWRkOiBub29wLFxuICAgICAgcmVtb3ZlOiBub29wLFxuICAgIH07XG4gIH1cblxuICBnZXQgeCgpIHsgcmV0dXJuIHRoaXMuZWwueCB8fCAwIH07XG4gIHNldCB4KHYpIHsgdGhpcy5lbC54ID0gdjsgfTtcblxuICBnZXQgeSgpIHsgcmV0dXJuIHRoaXMuZWwueSB8fCAwIH07XG4gIHNldCB5KHYpIHsgdGhpcy5lbC55ID0gdjsgfTtcblxuICBnZXQgd2lkdGgoKSB7IHJldHVybiB0aGlzLmVsLndpZHRoIHx8IDAgfTtcbiAgc2V0IHdpZHRoKHYpIHsgdGhpcy5lbC53aWR0aCA9IHY7IH07XG5cbiAgZ2V0IGhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZWwuaGVpZ2h0IHx8IDAgfTtcbiAgc2V0IGhlaWdodCh2KSB7IHRoaXMuZWwuaGVpZ2h0ID0gdjsgfTtcblxuICBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogdGhpcy55LFxuICAgICAgcmlnaHQ6IHRoaXMueCxcbiAgICAgIGJvdHRvbTogdGhpcy55ICsgdGhpcy5oZWlnaHQsXG4gICAgICBsZWZ0OiB0aGlzLnggKyB0aGlzLndpZHRoLFxuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBUcmFuc2Zvcm1zIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7RE9NVGFyZ2V0fERPTVByb3h5fSAkZWxcbiAgICovXG4gIGNvbnN0cnVjdG9yKCRlbCkge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRoaXMuaW5saW5lVHJhbnNmb3JtcyA9IFtdO1xuICAgIHRoaXMucG9pbnQgPSBuZXcgRE9NUG9pbnQoKTtcbiAgICB0aGlzLmludmVyc2VkTWF0cml4ID0gdGhpcy5nZXRNYXRyaXgoKS5pbnZlcnNlKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAgICogQHJldHVybiB7RE9NUG9pbnR9XG4gICAqL1xuICBub3JtYWxpemVQb2ludCh4LCB5KSB7XG4gICAgdGhpcy5wb2ludC54ID0geDtcbiAgICB0aGlzLnBvaW50LnkgPSB5O1xuICAgIHJldHVybiB0aGlzLnBvaW50Lm1hdHJpeFRyYW5zZm9ybSh0aGlzLmludmVyc2VkTWF0cml4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAY2FsbGJhY2sgVHJhdmVyc2VQYXJlbnRzQ2FsbGJhY2tcbiAgICogQHBhcmFtIHtET01UYXJnZXR9ICRlbFxuICAgKiBAcGFyYW0ge051bWJlcn0gaVxuICAgKi9cblxuICAvKipcbiAgICogQHBhcmFtIHtUcmF2ZXJzZVBhcmVudHNDYWxsYmFja30gY2JcbiAgICovXG4gIHRyYXZlcnNlVXAoY2IpIHtcbiAgICBsZXQgJGVsID0gLyoqIEB0eXBlIHtET01UYXJnZXR8RG9jdW1lbnR9ICovKHRoaXMuJGVsLnBhcmVudEVsZW1lbnQpLCBpID0gMDtcbiAgICB3aGlsZSAoJGVsICYmICRlbCAhPT0gZG9jKSB7XG4gICAgICBjYigvKiogQHR5cGUge0RPTVRhcmdldH0gKi8oJGVsKSwgaSk7XG4gICAgICAkZWwgPSAvKiogQHR5cGUge0RPTVRhcmdldH0gKi8oJGVsLnBhcmVudEVsZW1lbnQpO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfVxuXG4gIGdldE1hdHJpeCgpIHtcbiAgICBjb25zdCBtYXRyaXggPSBuZXcgRE9NTWF0cml4KCk7XG4gICAgdGhpcy50cmF2ZXJzZVVwKCRlbCA9PiB7XG4gICAgICBjb25zdCB0cmFuc2Zvcm1WYWx1ZSA9IGdldENvbXB1dGVkU3R5bGUoJGVsKS50cmFuc2Zvcm07XG4gICAgICBpZiAodHJhbnNmb3JtVmFsdWUpIHtcbiAgICAgICAgY29uc3QgZWxNYXRyaXggPSBuZXcgRE9NTWF0cml4KHRyYW5zZm9ybVZhbHVlKTtcbiAgICAgICAgbWF0cml4LnByZU11bHRpcGx5U2VsZihlbE1hdHJpeCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hdHJpeDtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLnRyYXZlcnNlVXAoKCRlbCwgaSkgPT4ge1xuICAgICAgdGhpcy5pbmxpbmVUcmFuc2Zvcm1zW2ldID0gJGVsLnN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICRlbC5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSc7XG4gICAgfSk7XG4gIH1cblxuICByZXZlcnQoKSB7XG4gICAgdGhpcy50cmF2ZXJzZVVwKCgkZWwsIGkpID0+IHtcbiAgICAgIGNvbnN0IGN0ID0gdGhpcy5pbmxpbmVUcmFuc2Zvcm1zW2ldO1xuICAgICAgaWYgKGN0ID09PSAnJykge1xuICAgICAgICAkZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zZm9ybScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGVsLnN0eWxlLnRyYW5zZm9ybSA9IGN0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIHtBcnJheTxOdW1iZXI+fERPTVRhcmdldFNlbGVjdG9yfFN0cmluZ3xOdW1iZXJ8Qm9vbGVhbnxGdW5jdGlvbnxEcmFnZ2FibGVDdXJzb3JQYXJhbXN9IFRcbiAqIEBwYXJhbSB7VCB8ICgoZHJhZ2dhYmxlOiBEcmFnZ2FibGUpID0+IFQpfSB2YWx1ZVxuICogQHBhcmFtIHtEcmFnZ2FibGV9IGRyYWdnYWJsZVxuICogQHJldHVybiB7VH1cbiAqL1xuY29uc3QgcGFyc2VEcmFnZ2FibGVGdW5jdGlvblBhcmFtZXRlciA9ICh2YWx1ZSwgZHJhZ2dhYmxlKSA9PiB2YWx1ZSAmJiBpc0ZuYyh2YWx1ZSkgPyAvKiogQHR5cGUge0Z1bmN0aW9ufSAqLyh2YWx1ZSkoZHJhZ2dhYmxlKSA6IHZhbHVlO1xuXG5sZXQgekluZGV4ID0gMDtcblxuY2xhc3MgRHJhZ2dhYmxlIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7VGFyZ2V0c1BhcmFtfSB0YXJnZXRcbiAgICogQHBhcmFtIHtEcmFnZ2FibGVQYXJhbXN9IFtwYXJhbWV0ZXJzXVxuICAgKi9cbiAgY29uc3RydWN0b3IodGFyZ2V0LCBwYXJhbWV0ZXJzID0ge30pIHtcbiAgICBpZiAoIXRhcmdldCkgcmV0dXJuO1xuICAgIGlmIChnbG9iYWxzLnNjb3BlKSBnbG9iYWxzLnNjb3BlLnJldmVydGlibGVzLnB1c2godGhpcyk7XG4gICAgY29uc3QgcGFyYW1YID0gcGFyYW1ldGVycy54O1xuICAgIGNvbnN0IHBhcmFtWSA9IHBhcmFtZXRlcnMueTtcbiAgICBjb25zdCB0cmlnZ2VyID0gcGFyYW1ldGVycy50cmlnZ2VyO1xuICAgIGNvbnN0IG1vZGlmaWVyID0gcGFyYW1ldGVycy5tb2RpZmllcjtcbiAgICBjb25zdCBlYXNlID0gcGFyYW1ldGVycy5yZWxlYXNlRWFzZTtcbiAgICBjb25zdCBjdXN0b21FYXNlID0gZWFzZSAmJiBwYXJzZUVhc2luZ3MoZWFzZSk7XG4gICAgY29uc3QgaGFzU3ByaW5nID0gIWlzVW5kKGVhc2UpICYmICFpc1VuZCgvKiogQHR5cGUge1NwcmluZ30gKi8oZWFzZSkuZWFzZSk7XG4gICAgY29uc3QgeFByb3AgPSAvKiogQHR5cGUge1N0cmluZ30gKi8oaXNPYmoocGFyYW1YKSAmJiAhaXNVbmQoLyoqIEB0eXBlIHtPYmplY3R9ICovKHBhcmFtWCkubWFwVG8pID8gLyoqIEB0eXBlIHtPYmplY3R9ICovKHBhcmFtWCkubWFwVG8gOiAndHJhbnNsYXRlWCcpO1xuICAgIGNvbnN0IHlQcm9wID0gLyoqIEB0eXBlIHtTdHJpbmd9ICovKGlzT2JqKHBhcmFtWSkgJiYgIWlzVW5kKC8qKiBAdHlwZSB7T2JqZWN0fSAqLyhwYXJhbVkpLm1hcFRvKSA/IC8qKiBAdHlwZSB7T2JqZWN0fSAqLyhwYXJhbVkpLm1hcFRvIDogJ3RyYW5zbGF0ZVknKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBwYXJzZURyYWdnYWJsZUZ1bmN0aW9uUGFyYW1ldGVyKHBhcmFtZXRlcnMuY29udGFpbmVyLCB0aGlzKTtcbiAgICB0aGlzLmNvbnRhaW5lckFycmF5ID0gaXNBcnIoY29udGFpbmVyKSA/IGNvbnRhaW5lciA6IG51bGw7XG4gICAgdGhpcy4kY29udGFpbmVyID0gLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8oY29udGFpbmVyICYmICF0aGlzLmNvbnRhaW5lckFycmF5ID8gcGFyc2VUYXJnZXRzKC8qKiBAdHlwZSB7RE9NVGFyZ2V0fSAqLyhjb250YWluZXIpKVswXSA6IGRvYy5ib2R5KTtcbiAgICB0aGlzLnVzZVdpbiA9IHRoaXMuJGNvbnRhaW5lciA9PT0gZG9jLmJvZHk7XG4gICAgLyoqIEB0eXBlIHtXaW5kb3cgfCBIVE1MRWxlbWVudH0gKi9cbiAgICB0aGlzLiRzY3JvbGxDb250YWluZXIgPSB0aGlzLnVzZVdpbiA/IHdpbiA6IHRoaXMuJGNvbnRhaW5lcjtcbiAgICB0aGlzLiR0YXJnZXQgPSAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyhpc09iaih0YXJnZXQpID8gbmV3IERPTVByb3h5KHRhcmdldCkgOiBwYXJzZVRhcmdldHModGFyZ2V0KVswXSk7XG4gICAgdGhpcy4kdHJpZ2dlciA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovKHBhcnNlVGFyZ2V0cyh0cmlnZ2VyID8gdHJpZ2dlciA6IHRhcmdldClbMF0pO1xuICAgIHRoaXMuZml4ZWQgPSBnZXRUYXJnZXRWYWx1ZSh0aGlzLiR0YXJnZXQsICdwb3NpdGlvbicpID09PSAnZml4ZWQnO1xuICAgIC8vIFJlZnJlc2hhYmxlIHBhcmFtZXRlcnNcbiAgICB0aGlzLmlzRmluZVBvaW50ZXIgPSB0cnVlO1xuICAgIC8qKiBAdHlwZSB7W051bWJlciwgTnVtYmVyLCBOdW1iZXIsIE51bWJlcl19ICovXG4gICAgdGhpcy5jb250YWluZXJQYWRkaW5nID0gWzAsIDAsIDAsIDBdO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuY29udGFpbmVyRnJpY3Rpb24gPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMucmVsZWFzZUNvbnRhaW5lckZyaWN0aW9uID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcnxBcnJheTxOdW1iZXI+fSAqL1xuICAgIHRoaXMuc25hcFggPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfEFycmF5PE51bWJlcj59ICovXG4gICAgdGhpcy5zbmFwWSA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5zY3JvbGxTcGVlZCA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5zY3JvbGxUaHJlc2hvbGQgPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuZHJhZ1NwZWVkID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLm1heFZlbG9jaXR5ID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLm1pblZlbG9jaXR5ID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLnZlbG9jaXR5TXVsdGlwbGllciA9IDA7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufERyYWdnYWJsZUN1cnNvclBhcmFtc30gKi9cbiAgICB0aGlzLmN1cnNvciA9IGZhbHNlO1xuICAgIC8qKiBAdHlwZSB7U3ByaW5nfSAqL1xuICAgIHRoaXMucmVsZWFzZVhTcHJpbmcgPSBoYXNTcHJpbmcgPyAvKiogQHR5cGUge1NwcmluZ30gKi8oZWFzZSkgOiBjcmVhdGVTcHJpbmcoe1xuICAgICAgbWFzczogc2V0VmFsdWUocGFyYW1ldGVycy5yZWxlYXNlTWFzcywgMSksXG4gICAgICBzdGlmZm5lc3M6IHNldFZhbHVlKHBhcmFtZXRlcnMucmVsZWFzZVN0aWZmbmVzcywgODApLFxuICAgICAgZGFtcGluZzogc2V0VmFsdWUocGFyYW1ldGVycy5yZWxlYXNlRGFtcGluZywgMjApLFxuICAgIH0pO1xuICAgIC8qKiBAdHlwZSB7U3ByaW5nfSAqL1xuICAgIHRoaXMucmVsZWFzZVlTcHJpbmcgPSBoYXNTcHJpbmcgPyAvKiogQHR5cGUge1NwcmluZ30gKi8oZWFzZSkgOiBjcmVhdGVTcHJpbmcoe1xuICAgICAgbWFzczogc2V0VmFsdWUocGFyYW1ldGVycy5yZWxlYXNlTWFzcywgMSksXG4gICAgICBzdGlmZm5lc3M6IHNldFZhbHVlKHBhcmFtZXRlcnMucmVsZWFzZVN0aWZmbmVzcywgODApLFxuICAgICAgZGFtcGluZzogc2V0VmFsdWUocGFyYW1ldGVycy5yZWxlYXNlRGFtcGluZywgMjApLFxuICAgIH0pO1xuICAgIC8qKiBAdHlwZSB7RWFzaW5nRnVuY3Rpb259ICovXG4gICAgdGhpcy5yZWxlYXNlRWFzZSA9IGN1c3RvbUVhc2UgfHwgZWFzZXMub3V0UXVpbnQ7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMuaGFzUmVsZWFzZVNwcmluZyA9IGhhc1NwcmluZztcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPHRoaXM+fSAqL1xuICAgIHRoaXMub25HcmFiID0gcGFyYW1ldGVycy5vbkdyYWIgfHwgbm9vcDtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPHRoaXM+fSAqL1xuICAgIHRoaXMub25EcmFnID0gcGFyYW1ldGVycy5vbkRyYWcgfHwgbm9vcDtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPHRoaXM+fSAqL1xuICAgIHRoaXMub25SZWxlYXNlID0gcGFyYW1ldGVycy5vblJlbGVhc2UgfHwgbm9vcDtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPHRoaXM+fSAqL1xuICAgIHRoaXMub25VcGRhdGUgPSBwYXJhbWV0ZXJzLm9uVXBkYXRlIHx8IG5vb3A7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazx0aGlzPn0gKi9cbiAgICB0aGlzLm9uU2V0dGxlID0gcGFyYW1ldGVycy5vblNldHRsZSB8fCBub29wO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8dGhpcz59ICovXG4gICAgdGhpcy5vblNuYXAgPSBwYXJhbWV0ZXJzLm9uU25hcCB8fCBub29wO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8dGhpcz59ICovXG4gICAgdGhpcy5vblJlc2l6ZSA9IHBhcmFtZXRlcnMub25SZXNpemUgfHwgbm9vcDtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPHRoaXM+fSAqL1xuICAgIHRoaXMub25BZnRlclJlc2l6ZSA9IHBhcmFtZXRlcnMub25BZnRlclJlc2l6ZSB8fCBub29wO1xuICAgIC8qKiBAdHlwZSB7W051bWJlciwgTnVtYmVyXX0gKi9cbiAgICB0aGlzLmRpc2FibGVkID0gWzAsIDBdO1xuICAgIC8qKiBAdHlwZSB7QW5pbWF0YWJsZVBhcmFtc30gKi9cbiAgICBjb25zdCBhbmltYXRhYmxlUGFyYW1zID0ge307XG4gICAgaWYgKG1vZGlmaWVyKSBhbmltYXRhYmxlUGFyYW1zLm1vZGlmaWVyID0gbW9kaWZpZXI7XG4gICAgaWYgKGlzVW5kKHBhcmFtWCkgfHwgcGFyYW1YID09PSB0cnVlKSB7XG4gICAgICBhbmltYXRhYmxlUGFyYW1zW3hQcm9wXSA9IDA7XG4gICAgfSBlbHNlIGlmIChpc09iaihwYXJhbVgpKSB7XG4gICAgICBjb25zdCBwYXJhbVhPYmplY3QgPSAvKiogQHR5cGUge0RyYWdnYWJsZUF4aXNQYXJhbX0gKi8ocGFyYW1YKTtcbiAgICAgIGNvbnN0IGFuaW1hdGFibGVYUGFyYW1zID0ge307XG4gICAgICBpZiAocGFyYW1YT2JqZWN0Lm1vZGlmaWVyKSBhbmltYXRhYmxlWFBhcmFtcy5tb2RpZmllciA9IHBhcmFtWE9iamVjdC5tb2RpZmllcjtcbiAgICAgIGlmIChwYXJhbVhPYmplY3QuY29tcG9zaXRpb24pIGFuaW1hdGFibGVYUGFyYW1zLmNvbXBvc2l0aW9uID0gcGFyYW1YT2JqZWN0LmNvbXBvc2l0aW9uO1xuICAgICAgYW5pbWF0YWJsZVBhcmFtc1t4UHJvcF0gPSBhbmltYXRhYmxlWFBhcmFtcztcbiAgICB9IGVsc2UgaWYgKHBhcmFtWCA9PT0gZmFsc2UpIHtcbiAgICAgIGFuaW1hdGFibGVQYXJhbXNbeFByb3BdID0gMDtcbiAgICAgIHRoaXMuZGlzYWJsZWRbMF0gPSAxO1xuICAgIH1cbiAgICBpZiAoaXNVbmQocGFyYW1ZKSB8fCBwYXJhbVkgPT09IHRydWUpIHtcbiAgICAgIGFuaW1hdGFibGVQYXJhbXNbeVByb3BdID0gMDtcbiAgICB9IGVsc2UgaWYgKGlzT2JqKHBhcmFtWSkpIHtcbiAgICAgIGNvbnN0IHBhcmFtWU9iamVjdCA9IC8qKiBAdHlwZSB7RHJhZ2dhYmxlQXhpc1BhcmFtfSAqLyhwYXJhbVkpO1xuICAgICAgY29uc3QgYW5pbWF0YWJsZVlQYXJhbXMgPSB7fTtcbiAgICAgIGlmIChwYXJhbVlPYmplY3QubW9kaWZpZXIpIGFuaW1hdGFibGVZUGFyYW1zLm1vZGlmaWVyID0gcGFyYW1ZT2JqZWN0Lm1vZGlmaWVyO1xuICAgICAgaWYgKHBhcmFtWU9iamVjdC5jb21wb3NpdGlvbikgYW5pbWF0YWJsZVlQYXJhbXMuY29tcG9zaXRpb24gPSBwYXJhbVlPYmplY3QuY29tcG9zaXRpb247XG4gICAgICBhbmltYXRhYmxlUGFyYW1zW3lQcm9wXSA9IGFuaW1hdGFibGVZUGFyYW1zO1xuICAgIH0gZWxzZSBpZiAocGFyYW1ZID09PSBmYWxzZSkge1xuICAgICAgYW5pbWF0YWJsZVBhcmFtc1t5UHJvcF0gPSAwO1xuICAgICAgdGhpcy5kaXNhYmxlZFsxXSA9IDE7XG4gICAgfVxuICAgIC8qKiBAdHlwZSB7QW5pbWF0YWJsZU9iamVjdH0gKi9cbiAgICB0aGlzLmFuaW1hdGUgPSAvKiogQHR5cGUge0FuaW1hdGFibGVPYmplY3R9ICovKG5ldyBBbmltYXRhYmxlKHRoaXMuJHRhcmdldCwgYW5pbWF0YWJsZVBhcmFtcykpO1xuICAgIC8vIEludGVybmFsIHByb3BzXG4gICAgdGhpcy54UHJvcCA9IHhQcm9wO1xuICAgIHRoaXMueVByb3AgPSB5UHJvcDtcbiAgICB0aGlzLmRlc3RYID0gMDtcbiAgICB0aGlzLmRlc3RZID0gMDtcbiAgICB0aGlzLmRlbHRhWCA9IDA7XG4gICAgdGhpcy5kZWx0YVkgPSAwO1xuICAgIHRoaXMuc2Nyb2xsID0ge3g6IDAsIHk6IDB9O1xuICAgIC8qKiBAdHlwZSB7W051bWJlciwgTnVtYmVyLCBOdW1iZXIsIE51bWJlcl19ICovXG4gICAgdGhpcy5jb29yZHMgPSBbdGhpcy54LCB0aGlzLnksIDAsIDBdOyAvLyB4LCB5LCB0ZW1wIHgsIHRlbXAgeVxuICAgIC8qKiBAdHlwZSB7W051bWJlciwgTnVtYmVyXX0gKi9cbiAgICB0aGlzLnNuYXBwZWQgPSBbMCwgMF07IC8vIHgsIHlcbiAgICAvKiogQHR5cGUge1tOdW1iZXIsIE51bWJlciwgTnVtYmVyLCBOdW1iZXIsIE51bWJlciwgTnVtYmVyLCBOdW1iZXIsIE51bWJlcl19ICovXG4gICAgdGhpcy5wb2ludGVyID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdOyAvLyB4MSwgeTEsIHgyLCB5MiwgdGVtcCB4MSwgdGVtcCB5MSwgdGVtcCB4MiwgdGVtcCB5MlxuICAgIC8qKiBAdHlwZSB7W051bWJlciwgTnVtYmVyXX0gKi9cbiAgICB0aGlzLnNjcm9sbFZpZXcgPSBbMCwgMF07IC8vIHcsIGhcbiAgICAvKiogQHR5cGUge1tOdW1iZXIsIE51bWJlciwgTnVtYmVyLCBOdW1iZXJdfSAqL1xuICAgIHRoaXMuZHJhZ0FyZWEgPSBbMCwgMCwgMCwgMF07IC8vIHgsIHksIHcsIGhcbiAgICAvKiogQHR5cGUge1tOdW1iZXIsIE51bWJlciwgTnVtYmVyLCBOdW1iZXJdfSAqL1xuICAgIHRoaXMuY29udGFpbmVyQm91bmRzID0gWy0xZTEyLCBtYXhWYWx1ZSwgbWF4VmFsdWUsIC0xZTEyXTsgLy8gdCwgciwgYiwgbFxuICAgIC8qKiBAdHlwZSB7W051bWJlciwgTnVtYmVyLCBOdW1iZXIsIE51bWJlcl19ICovXG4gICAgdGhpcy5zY3JvbGxCb3VuZHMgPSBbMCwgMCwgMCwgMF07IC8vIHQsIHIsIGIsIGxcbiAgICAvKiogQHR5cGUge1tOdW1iZXIsIE51bWJlciwgTnVtYmVyLCBOdW1iZXJdfSAqL1xuICAgIHRoaXMudGFyZ2V0Qm91bmRzID0gWzAsIDAsIDAsIDBdOyAvLyB0LCByLCBiLCBsXG4gICAgLyoqIEB0eXBlIHtbTnVtYmVyLCBOdW1iZXJdfSAqL1xuICAgIHRoaXMud2luZG93ID0gWzAsIDBdOyAvLyB3LCBoXG4gICAgLyoqIEB0eXBlIHtbTnVtYmVyLCBOdW1iZXIsIE51bWJlcl19ICovXG4gICAgdGhpcy52ZWxvY2l0eVN0YWNrID0gWzAsIDAsIDBdO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMudmVsb2NpdHlTdGFja0luZGV4ID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLnZlbG9jaXR5VGltZSA9IG5vdygpO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMudmVsb2NpdHkgPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuYW5nbGUgPSAwO1xuICAgIC8qKiBAdHlwZSB7SlNBbmltYXRpb259ICovXG4gICAgdGhpcy5jdXJzb3JTdHlsZXMgPSBudWxsO1xuICAgIC8qKiBAdHlwZSB7SlNBbmltYXRpb259ICovXG4gICAgdGhpcy50cmlnZ2VyU3R5bGVzID0gbnVsbDtcbiAgICAvKiogQHR5cGUge0pTQW5pbWF0aW9ufSAqL1xuICAgIHRoaXMuYm9keVN0eWxlcyA9IG51bGw7XG4gICAgLyoqIEB0eXBlIHtKU0FuaW1hdGlvbn0gKi9cbiAgICB0aGlzLnRhcmdldFN0eWxlcyA9IG51bGw7XG4gICAgLyoqIEB0eXBlIHtKU0FuaW1hdGlvbn0gKi9cbiAgICB0aGlzLnRvdWNoQWN0aW9uU3R5bGVzID0gbnVsbDtcbiAgICB0aGlzLnRyYW5zZm9ybXMgPSBuZXcgVHJhbnNmb3Jtcyh0aGlzLiR0YXJnZXQpO1xuICAgIHRoaXMub3ZlcnNob290Q29vcmRzID0geyB4OiAwLCB5OiAwIH07XG4gICAgdGhpcy5vdmVyc2hvb3RYVGlja2VyID0gbmV3IFRpbWVyKHsgYXV0b3BsYXk6IGZhbHNlIH0sIG51bGwsIDApLmluaXQoKTtcbiAgICB0aGlzLm92ZXJzaG9vdFlUaWNrZXIgPSBuZXcgVGltZXIoeyBhdXRvcGxheTogZmFsc2UgfSwgbnVsbCwgMCkuaW5pdCgpO1xuICAgIHRoaXMudXBkYXRlVGlja2VyID0gbmV3IFRpbWVyKHsgYXV0b3BsYXk6IGZhbHNlIH0sIG51bGwsIDApLmluaXQoKTtcbiAgICB0aGlzLm92ZXJzaG9vdFhUaWNrZXIub25VcGRhdGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZFswXSkgcmV0dXJuO1xuICAgICAgdGhpcy51cGRhdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMubWFudWFsID0gdHJ1ZTtcbiAgICAgIHRoaXMuYW5pbWF0ZVt0aGlzLnhQcm9wXSh0aGlzLm92ZXJzaG9vdENvb3Jkcy54LCAwKTtcbiAgICB9O1xuICAgIHRoaXMub3ZlcnNob290WFRpY2tlci5vbkNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWRbMF0pIHJldHVybjtcbiAgICAgIHRoaXMubWFudWFsID0gZmFsc2U7XG4gICAgICB0aGlzLmFuaW1hdGVbdGhpcy54UHJvcF0odGhpcy5vdmVyc2hvb3RDb29yZHMueCwgMCk7XG4gICAgfTtcbiAgICB0aGlzLm92ZXJzaG9vdFlUaWNrZXIub25VcGRhdGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZFsxXSkgcmV0dXJuO1xuICAgICAgdGhpcy51cGRhdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMubWFudWFsID0gdHJ1ZTtcbiAgICAgIHRoaXMuYW5pbWF0ZVt0aGlzLnlQcm9wXSh0aGlzLm92ZXJzaG9vdENvb3Jkcy55LCAwKTtcbiAgICB9O1xuICAgIHRoaXMub3ZlcnNob290WVRpY2tlci5vbkNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWRbMV0pIHJldHVybjtcbiAgICAgIHRoaXMubWFudWFsID0gZmFsc2U7XG4gICAgICB0aGlzLmFuaW1hdGVbdGhpcy55UHJvcF0odGhpcy5vdmVyc2hvb3RDb29yZHMueSwgMCk7XG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZVRpY2tlci5vblVwZGF0ZSA9ICgpID0+IHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy5jb250YWluZWQgPSAhaXNVbmQoY29udGFpbmVyKTtcbiAgICB0aGlzLm1hbnVhbCA9IGZhbHNlO1xuICAgIHRoaXMuZ3JhYmJlZCA9IGZhbHNlO1xuICAgIHRoaXMuZHJhZ2dlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVsZWFzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNhblNjcm9sbCA9IGZhbHNlO1xuICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZVByb3AgPSB0aGlzLmRpc2FibGVkWzFdID8geFByb3AgOiB5UHJvcDtcbiAgICB0aGlzLmFuaW1hdGUuYW5pbWF0aW9uc1t0aGlzLmFjdGl2ZVByb3BdLm9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgaGFzVXBkYXRlZCA9IHRoaXMudXBkYXRlZDtcbiAgICAgIGNvbnN0IGhhc01vdmVkID0gdGhpcy5ncmFiYmVkICYmIGhhc1VwZGF0ZWQ7XG4gICAgICBjb25zdCBoYXNSZWxlYXNlZCA9ICFoYXNNb3ZlZCAmJiB0aGlzLnJlbGVhc2VkO1xuICAgICAgY29uc3QgeCA9IHRoaXMueDtcbiAgICAgIGNvbnN0IHkgPSB0aGlzLnk7XG4gICAgICBjb25zdCBkeCA9IHggLSB0aGlzLmNvb3Jkc1syXTtcbiAgICAgIGNvbnN0IGR5ID0geSAtIHRoaXMuY29vcmRzWzNdO1xuICAgICAgdGhpcy5kZWx0YVggPSBkeDtcbiAgICAgIHRoaXMuZGVsdGFZID0gZHk7XG4gICAgICB0aGlzLmNvb3Jkc1syXSA9IHg7XG4gICAgICB0aGlzLmNvb3Jkc1szXSA9IHk7XG4gICAgICBpZiAoaGFzVXBkYXRlZCkge1xuICAgICAgICB0aGlzLm9uVXBkYXRlKHRoaXMpO1xuICAgICAgfVxuICAgICAgaWYgKCFoYXNSZWxlYXNlZCkge1xuICAgICAgICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZVZlbG9jaXR5KGR4LCBkeSk7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBhdGFuMihkeSwgZHgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5hbmltYXRlLmFuaW1hdGlvbnNbdGhpcy5hY3RpdmVQcm9wXS5vbkNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKCghdGhpcy5ncmFiYmVkICYmIHRoaXMucmVsZWFzZWQpKSB7XG4gICAgICAgIC8vIFNldCBlbGVhc2VkIHRvIGZhbHNlIGJlZm9yZSBjYWxsaW5nIG9uU2V0dGxlIHRvIGF2b2lkIHJlY3Vyc2lvblxuICAgICAgICB0aGlzLnJlbGVhc2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMubWFudWFsKSB7XG4gICAgICAgIHRoaXMuZGVsdGFYID0gMDtcbiAgICAgICAgdGhpcy5kZWx0YVkgPSAwO1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eVN0YWNrWzBdID0gMDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eVN0YWNrWzFdID0gMDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eVN0YWNrWzJdID0gMDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eVN0YWNrSW5kZXggPSAwO1xuICAgICAgICB0aGlzLm9uU2V0dGxlKHRoaXMpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5yZXNpemVUaWNrZXIgPSBuZXcgVGltZXIoe1xuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgZHVyYXRpb246IDE1MCAqIGdsb2JhbHMudGltZVNjYWxlLFxuICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICB0aGlzLm9uUmVzaXplKHRoaXMpO1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgdGhpcy5vbkFmdGVyUmVzaXplKHRoaXMpO1xuICAgICAgfSxcbiAgICB9KS5pbml0KCk7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgIHRoaXMucmVzaXplVGlja2VyLnJlc3RhcnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuJGNvbnRhaW5lcik7XG4gICAgaWYgKCFpc09iaih0YXJnZXQpKSB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy4kdGFyZ2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGR4XG4gICAqIEBwYXJhbSAge051bWJlcn0gZHlcbiAgICogQHJldHVybiB7TnVtYmVyfVxuICAgKi9cbiAgY29tcHV0ZVZlbG9jaXR5KGR4LCBkeSkge1xuICAgIGNvbnN0IHByZXZUaW1lID0gdGhpcy52ZWxvY2l0eVRpbWU7XG4gICAgY29uc3QgY3VyVGltZSA9IG5vdygpO1xuICAgIGNvbnN0IGVsYXBzZWQgPSBjdXJUaW1lIC0gcHJldlRpbWU7XG4gICAgaWYgKGVsYXBzZWQgPCAxNykgcmV0dXJuIHRoaXMudmVsb2NpdHk7XG4gICAgdGhpcy52ZWxvY2l0eVRpbWUgPSBjdXJUaW1lO1xuICAgIGNvbnN0IHZlbG9jaXR5U3RhY2sgPSB0aGlzLnZlbG9jaXR5U3RhY2s7XG4gICAgY29uc3Qgdk11bCA9IHRoaXMudmVsb2NpdHlNdWx0aXBsaWVyO1xuICAgIGNvbnN0IG1pblYgPSB0aGlzLm1pblZlbG9jaXR5O1xuICAgIGNvbnN0IG1heFYgPSB0aGlzLm1heFZlbG9jaXR5O1xuICAgIGNvbnN0IHZpID0gdGhpcy52ZWxvY2l0eVN0YWNrSW5kZXg7XG4gICAgdmVsb2NpdHlTdGFja1t2aV0gPSByb3VuZChjbGFtcCgoc3FydChkeCAqIGR4ICsgZHkgKiBkeSkgLyBlbGFwc2VkKSAqIHZNdWwsIG1pblYsIG1heFYpLCA1KTtcbiAgICBjb25zdCB2ZWxvY2l0eSA9IG1heCh2ZWxvY2l0eVN0YWNrWzBdLCB2ZWxvY2l0eVN0YWNrWzFdLCB2ZWxvY2l0eVN0YWNrWzJdKTtcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgdGhpcy52ZWxvY2l0eVN0YWNrSW5kZXggPSAodmkgKyAxKSAlIDM7XG4gICAgcmV0dXJuIHZlbG9jaXR5O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSAgeFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFttdXRlVXBkYXRlQ2FsbGJhY2tdXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuICBzZXRYKHgsIG11dGVVcGRhdGVDYWxsYmFjayA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWRbMF0pIHJldHVybjtcbiAgICBjb25zdCB2ID0gcm91bmQoeCwgNSk7XG4gICAgdGhpcy5vdmVyc2hvb3RYVGlja2VyLnBhdXNlKCk7XG4gICAgdGhpcy5tYW51YWwgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlZCA9ICFtdXRlVXBkYXRlQ2FsbGJhY2s7XG4gICAgdGhpcy5kZXN0WCA9IHY7XG4gICAgdGhpcy5zbmFwcGVkWzBdID0gc25hcCh2LCB0aGlzLnNuYXBYKTtcbiAgICB0aGlzLmFuaW1hdGVbdGhpcy54UHJvcF0odiwgMCk7XG4gICAgdGhpcy5tYW51YWwgPSBmYWxzZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge051bWJlcn0gIHlcbiAgICogQHBhcmFtIHtCb29sZWFufSBbbXV0ZVVwZGF0ZUNhbGxiYWNrXVxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgc2V0WSh5LCBtdXRlVXBkYXRlQ2FsbGJhY2sgPSBmYWxzZSkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkWzFdKSByZXR1cm47XG4gICAgY29uc3QgdiA9IHJvdW5kKHksIDUpO1xuICAgIHRoaXMub3ZlcnNob290WVRpY2tlci5wYXVzZSgpO1xuICAgIHRoaXMubWFudWFsID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZWQgPSAhbXV0ZVVwZGF0ZUNhbGxiYWNrO1xuICAgIHRoaXMuZGVzdFkgPSB2O1xuICAgIHRoaXMuc25hcHBlZFsxXSA9IHNuYXAodiwgdGhpcy5zbmFwWSk7XG4gICAgdGhpcy5hbmltYXRlW3RoaXMueVByb3BdKHYsIDApO1xuICAgIHRoaXMubWFudWFsID0gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gcm91bmQoLyoqIEB0eXBlIHtOdW1iZXJ9ICovKHRoaXMuYW5pbWF0ZVt0aGlzLnhQcm9wXSgpKSwgZ2xvYmFscy5wcmVjaXNpb24pO1xuICB9XG5cbiAgc2V0IHgoeCkge1xuICAgIHRoaXMuc2V0WCh4LCBmYWxzZSk7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICByZXR1cm4gcm91bmQoLyoqIEB0eXBlIHtOdW1iZXJ9ICovKHRoaXMuYW5pbWF0ZVt0aGlzLnlQcm9wXSgpKSwgZ2xvYmFscy5wcmVjaXNpb24pO1xuICB9XG5cbiAgc2V0IHkoeSkge1xuICAgIHRoaXMuc2V0WSh5LCBmYWxzZSk7XG4gIH1cblxuICBnZXQgcHJvZ3Jlc3NYKCkge1xuICAgIHJldHVybiBtYXBSYW5nZSh0aGlzLngsIHRoaXMuY29udGFpbmVyQm91bmRzWzNdLCB0aGlzLmNvbnRhaW5lckJvdW5kc1sxXSwgMCwgMSk7XG4gIH1cblxuICBzZXQgcHJvZ3Jlc3NYKHgpIHtcbiAgICB0aGlzLnNldFgobWFwUmFuZ2UoeCwgMCwgMSwgdGhpcy5jb250YWluZXJCb3VuZHNbM10sIHRoaXMuY29udGFpbmVyQm91bmRzWzFdKSwgZmFsc2UpO1xuICB9XG5cbiAgZ2V0IHByb2dyZXNzWSgpIHtcbiAgICByZXR1cm4gbWFwUmFuZ2UodGhpcy55LCB0aGlzLmNvbnRhaW5lckJvdW5kc1swXSwgdGhpcy5jb250YWluZXJCb3VuZHNbMl0sIDAsIDEpO1xuICB9XG5cbiAgc2V0IHByb2dyZXNzWSh5KSB7XG4gICAgdGhpcy5zZXRZKG1hcFJhbmdlKHksIDAsIDEsIHRoaXMuY29udGFpbmVyQm91bmRzWzBdLCB0aGlzLmNvbnRhaW5lckJvdW5kc1syXSksIGZhbHNlKTtcbiAgfVxuXG4gIHVwZGF0ZVNjcm9sbENvb3JkcygpIHtcbiAgICBjb25zdCBzeCA9IHJvdW5kKHRoaXMudXNlV2luID8gd2luLnNjcm9sbFggOiB0aGlzLiRjb250YWluZXIuc2Nyb2xsTGVmdCwgMCk7XG4gICAgY29uc3Qgc3kgPSByb3VuZCh0aGlzLnVzZVdpbiA/IHdpbi5zY3JvbGxZIDogdGhpcy4kY29udGFpbmVyLnNjcm9sbFRvcCwgMCk7XG4gICAgY29uc3QgWyBjcHQsIGNwciwgY3BiLCBjcGwgXSA9IHRoaXMuY29udGFpbmVyUGFkZGluZztcbiAgICBjb25zdCB0aHJlc2hvbGQgPSB0aGlzLnNjcm9sbFRocmVzaG9sZDtcbiAgICB0aGlzLnNjcm9sbC54ID0gc3g7XG4gICAgdGhpcy5zY3JvbGwueSA9IHN5O1xuICAgIHRoaXMuc2Nyb2xsQm91bmRzWzBdID0gc3kgLSB0aGlzLnRhcmdldEJvdW5kc1swXSArIGNwdCAtIHRocmVzaG9sZDtcbiAgICB0aGlzLnNjcm9sbEJvdW5kc1sxXSA9IHN4IC0gdGhpcy50YXJnZXRCb3VuZHNbMV0gLSBjcHIgKyB0aHJlc2hvbGQ7XG4gICAgdGhpcy5zY3JvbGxCb3VuZHNbMl0gPSBzeSAtIHRoaXMudGFyZ2V0Qm91bmRzWzJdIC0gY3BiICsgdGhyZXNob2xkO1xuICAgIHRoaXMuc2Nyb2xsQm91bmRzWzNdID0gc3ggLSB0aGlzLnRhcmdldEJvdW5kc1szXSArIGNwbCAtIHRocmVzaG9sZDtcbiAgfVxuXG4gIHVwZGF0ZUJvdW5kaW5nVmFsdWVzKCkge1xuICAgIGNvbnN0ICRjb250YWluZXIgPSB0aGlzLiRjb250YWluZXI7XG4gICAgY29uc3QgY3ggPSB0aGlzLng7XG4gICAgY29uc3QgY3kgPSB0aGlzLnk7XG4gICAgY29uc3QgY3gyID0gdGhpcy5jb29yZHNbMl07XG4gICAgY29uc3QgY3kyID0gIHRoaXMuY29vcmRzWzNdO1xuICAgIC8vIFByZXZlbnRzIGludGVyZmVyaW5nIHdpdGggdGhlIHNjcm9sbCBhcmVhIGluIGNhc2VzIHRoZSB0YXJnZXQgaXMgb3V0c2lkZSBvZiB0aGUgY29udGFpbmVyXG4gICAgLy8gTWFrZSBzdXJlIHRoZSB0ZW1wIGNvb3JkcyBhcmUgYWxzbyBhZGp1c2V0IHRvIHByZXZlbnRzIHdyb25nIGRlbHRhIGNhbGN1bGF0aW9uIG9uIHVwZGF0ZXNcbiAgICB0aGlzLmNvb3Jkc1syXSA9IDA7XG4gICAgdGhpcy5jb29yZHNbM10gPSAwO1xuICAgIHRoaXMuc2V0WCgwLCB0cnVlKTtcbiAgICB0aGlzLnNldFkoMCwgdHJ1ZSk7XG4gICAgdGhpcy50cmFuc2Zvcm1zLnJlbW92ZSgpO1xuICAgIGNvbnN0IGl3ID0gdGhpcy53aW5kb3dbMF0gPSB3aW4uaW5uZXJXaWR0aDtcbiAgICBjb25zdCBpaCA9IHRoaXMud2luZG93WzFdID0gd2luLmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IHV3ID0gdGhpcy51c2VXaW47XG4gICAgY29uc3Qgc3cgPSAkY29udGFpbmVyLnNjcm9sbFdpZHRoO1xuICAgIGNvbnN0IHNoID0gJGNvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG4gICAgY29uc3QgZnggPSB0aGlzLmZpeGVkO1xuICAgIGNvbnN0IHRyYW5zZm9ybUNvbnRhaW5lclJlY3QgPSAkY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IFsgY3B0LCBjcHIsIGNwYiwgY3BsIF0gPSB0aGlzLmNvbnRhaW5lclBhZGRpbmc7XG4gICAgdGhpcy5kcmFnQXJlYVswXSA9IHV3ID8gMCA6IHRyYW5zZm9ybUNvbnRhaW5lclJlY3QubGVmdDtcbiAgICB0aGlzLmRyYWdBcmVhWzFdID0gdXcgPyAwIDogdHJhbnNmb3JtQ29udGFpbmVyUmVjdC50b3A7XG4gICAgdGhpcy5zY3JvbGxWaWV3WzBdID0gdXcgPyBjbGFtcChzdywgaXcsIHN3KSA6IHN3O1xuICAgIHRoaXMuc2Nyb2xsVmlld1sxXSA9IHV3ID8gY2xhbXAoc2gsIGloLCBzaCkgOiBzaDtcbiAgICB0aGlzLnVwZGF0ZVNjcm9sbENvb3JkcygpO1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgbGVmdCwgdG9wLCByaWdodCwgYm90dG9tIH0gPSAkY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMuZHJhZ0FyZWFbMl0gPSByb3VuZCh1dyA/IGNsYW1wKHdpZHRoLCBpdywgaXcpIDogd2lkdGgsIDApO1xuICAgIHRoaXMuZHJhZ0FyZWFbM10gPSByb3VuZCh1dyA/IGNsYW1wKGhlaWdodCwgaWgsIGloKSA6IGhlaWdodCwgMCk7XG4gICAgY29uc3QgY29udGFpbmVyT3ZlcmZsb3cgPSBnZXRUYXJnZXRWYWx1ZSgkY29udGFpbmVyLCAnb3ZlcmZsb3cnKTtcbiAgICBjb25zdCB2aXNpYmxlT3ZlcmZsb3cgPSBjb250YWluZXJPdmVyZmxvdyA9PT0gJ3Zpc2libGUnO1xuICAgIGNvbnN0IGhpZGRlbk92ZXJmbG93ID0gY29udGFpbmVyT3ZlcmZsb3cgPT09ICdoaWRkZW4nO1xuICAgIHRoaXMuY2FuU2Nyb2xsID0gZnggPyBmYWxzZSA6XG4gICAgICB0aGlzLmNvbnRhaW5lZCAmJlxuICAgICAgKCgkY29udGFpbmVyID09PSBkb2MuYm9keSAmJiB2aXNpYmxlT3ZlcmZsb3cpIHx8ICghaGlkZGVuT3ZlcmZsb3cgJiYgIXZpc2libGVPdmVyZmxvdykpICYmXG4gICAgICAoc3cgPiB0aGlzLmRyYWdBcmVhWzJdICsgY3BsIC0gY3ByIHx8IHNoID4gdGhpcy5kcmFnQXJlYVszXSArIGNwdCAtIGNwYikgJiZcbiAgICAgICghdGhpcy5jb250YWluZXJBcnJheSB8fCAodGhpcy5jb250YWluZXJBcnJheSAmJiAhaXNBcnIodGhpcy5jb250YWluZXJBcnJheSkpKTtcbiAgICBpZiAodGhpcy5jb250YWluZWQpIHtcbiAgICAgIGNvbnN0IHN4ID0gdGhpcy5zY3JvbGwueDtcbiAgICAgIGNvbnN0IHN5ID0gdGhpcy5zY3JvbGwueTtcbiAgICAgIGNvbnN0IGNhblNjcm9sbCA9IHRoaXMuY2FuU2Nyb2xsO1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRoaXMuJHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGhpZGRlbkxlZnQgPSBjYW5TY3JvbGwgPyB1dyA/IDAgOiAkY29udGFpbmVyLnNjcm9sbExlZnQgOiAwO1xuICAgICAgY29uc3QgaGlkZGVuVG9wID0gY2FuU2Nyb2xsID8gdXcgPyAwIDogJGNvbnRhaW5lci5zY3JvbGxUb3AgOiAwO1xuICAgICAgY29uc3QgaGlkZGVuUmlnaHQgPSBjYW5TY3JvbGwgPyB0aGlzLnNjcm9sbFZpZXdbMF0gLSBoaWRkZW5MZWZ0IC0gd2lkdGggOiAwO1xuICAgICAgY29uc3QgaGlkZGVuQm90dG9tID0gY2FuU2Nyb2xsID8gdGhpcy5zY3JvbGxWaWV3WzFdIC0gaGlkZGVuVG9wIC0gaGVpZ2h0IDogMDtcbiAgICAgIHRoaXMudGFyZ2V0Qm91bmRzWzBdID0gcm91bmQoKHRhcmdldFJlY3QudG9wICsgc3kpIC0gKHV3ID8gMCA6IHRvcCksIDApO1xuICAgICAgdGhpcy50YXJnZXRCb3VuZHNbMV0gPSByb3VuZCgodGFyZ2V0UmVjdC5yaWdodCArIHN4KSAtICh1dyA/IGl3IDogcmlnaHQpLCAwKTtcbiAgICAgIHRoaXMudGFyZ2V0Qm91bmRzWzJdID0gcm91bmQoKHRhcmdldFJlY3QuYm90dG9tICsgc3kpIC0gKHV3ID8gaWggOiBib3R0b20pLCAwKTtcbiAgICAgIHRoaXMudGFyZ2V0Qm91bmRzWzNdID0gcm91bmQoKHRhcmdldFJlY3QubGVmdCArIHN4KSAtICh1dyA/IDAgOiBsZWZ0KSwgMCk7XG4gICAgICBpZiAodGhpcy5jb250YWluZXJBcnJheSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lckJvdW5kc1swXSA9IHRoaXMuY29udGFpbmVyQXJyYXlbMF0gKyBjcHQ7XG4gICAgICAgIHRoaXMuY29udGFpbmVyQm91bmRzWzFdID0gdGhpcy5jb250YWluZXJBcnJheVsxXSAtIGNwcjtcbiAgICAgICAgdGhpcy5jb250YWluZXJCb3VuZHNbMl0gPSB0aGlzLmNvbnRhaW5lckFycmF5WzJdIC0gY3BiO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckJvdW5kc1szXSA9IHRoaXMuY29udGFpbmVyQXJyYXlbM10gKyBjcGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lckJvdW5kc1swXSA9IC1yb3VuZCh0YXJnZXRSZWN0LnRvcCAtIChmeCA/IGNsYW1wKHRvcCwgMCwgaWgpIDogdG9wKSArIGhpZGRlblRvcCAtIGNwdCwgMCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyQm91bmRzWzFdID0gLXJvdW5kKHRhcmdldFJlY3QucmlnaHQgLSAoZnggPyBjbGFtcChyaWdodCwgMCwgaXcpIDogcmlnaHQpIC0gaGlkZGVuUmlnaHQgKyBjcHIsIDApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckJvdW5kc1syXSA9IC1yb3VuZCh0YXJnZXRSZWN0LmJvdHRvbSAtIChmeCA/IGNsYW1wKGJvdHRvbSwgMCwgaWgpIDogYm90dG9tKSAtIGhpZGRlbkJvdHRvbSArIGNwYiwgMCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyQm91bmRzWzNdID0gLXJvdW5kKHRhcmdldFJlY3QubGVmdCAtIChmeCA/IGNsYW1wKGxlZnQsIDAsIGl3KSA6IGxlZnQpICsgaGlkZGVuTGVmdCAtIGNwbCwgMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudHJhbnNmb3Jtcy5yZXZlcnQoKTtcbiAgICAvLyBSZXN0b3JlIGNvb3JkaW5hdGVzXG4gICAgdGhpcy5jb29yZHNbMl0gPSBjeDI7XG4gICAgdGhpcy5jb29yZHNbM10gPSBjeTI7XG4gICAgdGhpcy5zZXRYKGN4LCB0cnVlKTtcbiAgICB0aGlzLnNldFkoY3ksIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgMCBpZiBub3QgT0IsIDEgaWYgeCBpcyBPQiwgMiBpZiB5IGlzIE9CLCAzIGlmIGJvdGggeCBhbmQgeSBhcmUgT0JcbiAgICpcbiAgICogQHBhcmFtICB7QXJyYXl9IGJvdW5kc1xuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHhcbiAgICogQHBhcmFtICB7TnVtYmVyfSB5XG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICovXG4gIGlzT3V0T2ZCb3VuZHMoYm91bmRzLCB4LCB5KSB7XG4gICAgaWYgKCF0aGlzLmNvbnRhaW5lZCkgcmV0dXJuIDA7XG4gICAgY29uc3QgWyBidCwgYnIsIGJiLCBibCBdID0gYm91bmRzO1xuICAgIGNvbnN0IFsgZHgsIGR5IF0gPSB0aGlzLmRpc2FibGVkO1xuICAgIGNvbnN0IG9ieCA9ICFkeCAmJiB4IDwgYmwgfHwgIWR4ICYmIHggPiBicjtcbiAgICBjb25zdCBvYnkgPSAhZHkgJiYgeSA8IGJ0IHx8ICFkeSAmJiB5ID4gYmI7XG4gICAgcmV0dXJuIG9ieCAmJiAhb2J5ID8gMSA6ICFvYnggJiYgb2J5ID8gMiA6IG9ieCAmJiBvYnkgPyAzIDogMDtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5wYXJhbWV0ZXJzO1xuICAgIGNvbnN0IHBhcmFtWCA9IHBhcmFtcy54O1xuICAgIGNvbnN0IHBhcmFtWSA9IHBhcmFtcy55O1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHBhcnNlRHJhZ2dhYmxlRnVuY3Rpb25QYXJhbWV0ZXIocGFyYW1zLmNvbnRhaW5lciwgdGhpcyk7XG4gICAgY29uc3QgY3AgPSBwYXJzZURyYWdnYWJsZUZ1bmN0aW9uUGFyYW1ldGVyKHBhcmFtcy5jb250YWluZXJQYWRkaW5nLCB0aGlzKSB8fCAwO1xuICAgIGNvbnN0IGNvbnRhaW5lclBhZGRpbmcgPSAvKiogQHR5cGUge1tOdW1iZXIsIE51bWJlciwgTnVtYmVyLCBOdW1iZXJdfSAqLyhpc0FycihjcCkgPyBjcCA6IFtjcCwgY3AsIGNwLCBjcF0pO1xuICAgIGNvbnN0IGN4ID0gdGhpcy54O1xuICAgIGNvbnN0IGN5ID0gdGhpcy55O1xuICAgIGNvbnN0IHBhcnNlZEN1cnNvclN0eWxlcyA9IHBhcnNlRHJhZ2dhYmxlRnVuY3Rpb25QYXJhbWV0ZXIocGFyYW1zLmN1cnNvciwgdGhpcyk7XG4gICAgY29uc3QgY3Vyc29yU3R5bGVzID0geyBvbkhvdmVyOiAnZ3JhYicsIG9uR3JhYjogJ2dyYWJiaW5nJyB9O1xuICAgIGlmIChwYXJzZWRDdXJzb3JTdHlsZXMpIHtcbiAgICAgIGNvbnN0IHsgb25Ib3Zlciwgb25HcmFiIH0gPSAvKiogQHR5cGUge0RyYWdnYWJsZUN1cnNvclBhcmFtc30gKi8ocGFyc2VkQ3Vyc29yU3R5bGVzKTtcbiAgICAgIGlmIChvbkhvdmVyKSBjdXJzb3JTdHlsZXMub25Ib3ZlciA9IG9uSG92ZXI7XG4gICAgICBpZiAob25HcmFiKSBjdXJzb3JTdHlsZXMub25HcmFiID0gb25HcmFiO1xuICAgIH1cbiAgICB0aGlzLmNvbnRhaW5lckFycmF5ID0gaXNBcnIoY29udGFpbmVyKSA/IGNvbnRhaW5lciA6IG51bGw7XG4gICAgdGhpcy4kY29udGFpbmVyID0gLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8oY29udGFpbmVyICYmICF0aGlzLmNvbnRhaW5lckFycmF5ID8gcGFyc2VUYXJnZXRzKC8qKiBAdHlwZSB7RE9NVGFyZ2V0fSAqLyhjb250YWluZXIpKVswXSA6IGRvYy5ib2R5KTtcbiAgICB0aGlzLnVzZVdpbiA9IHRoaXMuJGNvbnRhaW5lciA9PT0gZG9jLmJvZHk7XG4gICAgLyoqIEB0eXBlIHtXaW5kb3cgfCBIVE1MRWxlbWVudH0gKi9cbiAgICB0aGlzLiRzY3JvbGxDb250YWluZXIgPSB0aGlzLnVzZVdpbiA/IHdpbiA6IHRoaXMuJGNvbnRhaW5lcjtcbiAgICB0aGlzLmlzRmluZVBvaW50ZXIgPSBtYXRjaE1lZGlhKCcocG9pbnRlcjpmaW5lKScpLm1hdGNoZXM7XG4gICAgdGhpcy5jb250YWluZXJQYWRkaW5nID0gc2V0VmFsdWUoY29udGFpbmVyUGFkZGluZywgWzAsIDAsIDAsIDBdKTtcbiAgICB0aGlzLmNvbnRhaW5lckZyaWN0aW9uID0gY2xhbXAoc2V0VmFsdWUocGFyc2VEcmFnZ2FibGVGdW5jdGlvblBhcmFtZXRlcihwYXJhbXMuY29udGFpbmVyRnJpY3Rpb24sIHRoaXMpLCAuOCksIDAsIDEpO1xuICAgIHRoaXMucmVsZWFzZUNvbnRhaW5lckZyaWN0aW9uID0gY2xhbXAoc2V0VmFsdWUocGFyc2VEcmFnZ2FibGVGdW5jdGlvblBhcmFtZXRlcihwYXJhbXMucmVsZWFzZUNvbnRhaW5lckZyaWN0aW9uLCB0aGlzKSwgdGhpcy5jb250YWluZXJGcmljdGlvbiksIDAsIDEpO1xuICAgIHRoaXMuc25hcFggPSBwYXJzZURyYWdnYWJsZUZ1bmN0aW9uUGFyYW1ldGVyKGlzT2JqKHBhcmFtWCkgJiYgIWlzVW5kKHBhcmFtWC5zbmFwKSA/IHBhcmFtWC5zbmFwIDogcGFyYW1zLnNuYXAsIHRoaXMpO1xuICAgIHRoaXMuc25hcFkgPSBwYXJzZURyYWdnYWJsZUZ1bmN0aW9uUGFyYW1ldGVyKGlzT2JqKHBhcmFtWSkgJiYgIWlzVW5kKHBhcmFtWS5zbmFwKSA/IHBhcmFtWS5zbmFwIDogcGFyYW1zLnNuYXAsIHRoaXMpO1xuICAgIHRoaXMuc2Nyb2xsU3BlZWQgPSBzZXRWYWx1ZShwYXJzZURyYWdnYWJsZUZ1bmN0aW9uUGFyYW1ldGVyKHBhcmFtcy5zY3JvbGxTcGVlZCwgdGhpcyksIDEuNSk7XG4gICAgdGhpcy5zY3JvbGxUaHJlc2hvbGQgPSBzZXRWYWx1ZShwYXJzZURyYWdnYWJsZUZ1bmN0aW9uUGFyYW1ldGVyKHBhcmFtcy5zY3JvbGxUaHJlc2hvbGQsIHRoaXMpLCAyMCk7XG4gICAgdGhpcy5kcmFnU3BlZWQgPSBzZXRWYWx1ZShwYXJzZURyYWdnYWJsZUZ1bmN0aW9uUGFyYW1ldGVyKHBhcmFtcy5kcmFnU3BlZWQsIHRoaXMpLCAxKTtcbiAgICB0aGlzLm1pblZlbG9jaXR5ID0gc2V0VmFsdWUocGFyc2VEcmFnZ2FibGVGdW5jdGlvblBhcmFtZXRlcihwYXJhbXMubWluVmVsb2NpdHksIHRoaXMpLCAwKTtcbiAgICB0aGlzLm1heFZlbG9jaXR5ID0gc2V0VmFsdWUocGFyc2VEcmFnZ2FibGVGdW5jdGlvblBhcmFtZXRlcihwYXJhbXMubWF4VmVsb2NpdHksIHRoaXMpLCA1MCk7XG4gICAgdGhpcy52ZWxvY2l0eU11bHRpcGxpZXIgPSBzZXRWYWx1ZShwYXJzZURyYWdnYWJsZUZ1bmN0aW9uUGFyYW1ldGVyKHBhcmFtcy52ZWxvY2l0eU11bHRpcGxpZXIsIHRoaXMpLCAxKTtcbiAgICB0aGlzLmN1cnNvciA9IHBhcnNlZEN1cnNvclN0eWxlcyA9PT0gZmFsc2UgPyBmYWxzZSA6IGN1cnNvclN0eWxlcztcbiAgICB0aGlzLnVwZGF0ZUJvdW5kaW5nVmFsdWVzKCk7XG5cbiAgICAvLyBjb25zdCBvYiA9IHRoaXMuaXNPdXRPZkJvdW5kcyh0aGlzLmNvbnRhaW5lckJvdW5kcywgdGhpcy54LCB0aGlzLnkpO1xuICAgIC8vIGlmIChvYiA9PT0gMSB8fCBvYiA9PT0gMykgdGhpcy5wcm9ncmVzc1ggPSBweDtcbiAgICAvLyBpZiAob2IgPT09IDIgfHwgb2IgPT09IDMpIHRoaXMucHJvZ3Jlc3NZID0gcHk7XG5cbiAgICAvLyBpZiAodGhpcy5pbml0aWFsaXplZCAmJiB0aGlzLmNvbnRhaW5lZCkge1xuICAgIC8vICAgaWYgKHRoaXMucHJvZ3Jlc3NYICE9PSBweCkgdGhpcy5wcm9ncmVzc1ggPSBweDtcbiAgICAvLyAgIGlmICh0aGlzLnByb2dyZXNzWSAhPT0gcHkpIHRoaXMucHJvZ3Jlc3NZID0gcHk7XG4gICAgLy8gfVxuXG4gICAgY29uc3QgWyBidCwgYnIsIGJiLCBibCBdID0gdGhpcy5jb250YWluZXJCb3VuZHM7XG4gICAgdGhpcy5zZXRYKGNsYW1wKGN4LCBibCwgYnIpLCB0cnVlKTtcbiAgICB0aGlzLnNldFkoY2xhbXAoY3ksIGJ0LCBiYiksIHRydWUpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlU2Nyb2xsQ29vcmRzKCk7XG4gICAgaWYgKHRoaXMuY2FuU2Nyb2xsKSB7XG4gICAgICBjb25zdCBbIGNwdCwgY3ByLCBjcGIsIGNwbCBdID0gdGhpcy5jb250YWluZXJQYWRkaW5nO1xuICAgICAgY29uc3QgWyBzdywgc2ggXSA9IHRoaXMuc2Nyb2xsVmlldztcbiAgICAgIGNvbnN0IGRhdyA9IHRoaXMuZHJhZ0FyZWFbMl07XG4gICAgICBjb25zdCBkYWggPSB0aGlzLmRyYWdBcmVhWzNdO1xuICAgICAgY29uc3QgY3N4ID0gdGhpcy5zY3JvbGwueDtcbiAgICAgIGNvbnN0IGNzeSA9IHRoaXMuc2Nyb2xsLnk7XG4gICAgICBjb25zdCBuc3cgPSB0aGlzLiRjb250YWluZXIuc2Nyb2xsV2lkdGg7XG4gICAgICBjb25zdCBuc2ggPSB0aGlzLiRjb250YWluZXIuc2Nyb2xsSGVpZ2h0O1xuICAgICAgY29uc3QgY3N3ID0gdGhpcy51c2VXaW4gPyBjbGFtcChuc3csIHRoaXMud2luZG93WzBdLCBuc3cpIDogbnN3O1xuICAgICAgY29uc3QgY3NoID0gdGhpcy51c2VXaW4gPyBjbGFtcChuc2gsIHRoaXMud2luZG93WzFdLCBuc2gpIDogbnNoO1xuICAgICAgY29uc3Qgc3dkID0gc3cgLSBjc3c7XG4gICAgICBjb25zdCBzaGQgPSBzaCAtIGNzaDtcbiAgICAgIC8vIEhhbmRsZSBjYXNlcyB3aGVyZSB0aGUgc2Nyb2xsYXJlYSBkaW1lbnNpb25zIGNoYW5nZXMgZHVyaW5nIGRyYWdcbiAgICAgIGlmICh0aGlzLmRyYWdnZWQgJiYgc3dkID4gMCkge1xuICAgICAgICB0aGlzLmNvb3Jkc1swXSAtPSBzd2Q7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlld1swXSA9IGNzdztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRyYWdnZWQgJiYgc2hkID4gMCkge1xuICAgICAgICB0aGlzLmNvb3Jkc1sxXSAtPSBzaGQ7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlld1sxXSA9IGNzaDtcbiAgICAgIH1cbiAgICAgIC8vIEhhbmRsZSBhdXRvc2Nyb2xsIHdoZW4gdGFyZ2V0IGlzIGF0IHRoZSBlZGdlcyBvZiB0aGUgc2Nyb2xsIGJvdW5kc1xuICAgICAgY29uc3QgcyA9IHRoaXMuc2Nyb2xsU3BlZWQgKiAxMDtcbiAgICAgIGNvbnN0IHRocmVzaG9sZCA9IHRoaXMuc2Nyb2xsVGhyZXNob2xkO1xuICAgICAgY29uc3QgWyB4LCB5IF0gPSB0aGlzLmNvb3JkcztcbiAgICAgIGNvbnN0IFsgc3QsIHNyLCBzYiwgc2wgXSA9IHRoaXMuc2Nyb2xsQm91bmRzO1xuICAgICAgY29uc3QgdCA9IHJvdW5kKGNsYW1wKCh5IC0gc3QgKyBjcHQpIC8gdGhyZXNob2xkLCAtMSwgMCkgKiBzLCAwKTtcbiAgICAgIGNvbnN0IHIgPSByb3VuZChjbGFtcCgoeCAtIHNyIC0gY3ByKSAvIHRocmVzaG9sZCwgMCwgMSkgKiBzLCAwKTtcbiAgICAgIGNvbnN0IGIgPSByb3VuZChjbGFtcCgoeSAtIHNiIC0gY3BiKSAvIHRocmVzaG9sZCwgMCwgMSkgKiBzLCAwKTtcbiAgICAgIGNvbnN0IGwgPSByb3VuZChjbGFtcCgoeCAtIHNsICsgY3BsKSAvIHRocmVzaG9sZCwgLTEsIDApICogcywgMCk7XG4gICAgICBpZiAodCB8fCBiIHx8IGwgfHwgcikge1xuICAgICAgICBjb25zdCBbbngsIG55XSA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgICAgIGxldCBzY3JvbGxYID0gY3N4O1xuICAgICAgICBsZXQgc2Nyb2xsWSA9IGNzeTtcbiAgICAgICAgaWYgKCFueCkge1xuICAgICAgICAgIHNjcm9sbFggPSByb3VuZChjbGFtcChjc3ggKyAobCB8fCByKSwgMCwgc3cgLSBkYXcpLCAwKTtcbiAgICAgICAgICB0aGlzLmNvb3Jkc1swXSAtPSBjc3ggLSBzY3JvbGxYO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbnkpIHtcbiAgICAgICAgICBzY3JvbGxZID0gcm91bmQoY2xhbXAoY3N5ICsgKHQgfHwgYiksIDAsIHNoIC0gZGFoKSwgMCk7XG4gICAgICAgICAgdGhpcy5jb29yZHNbMV0gLT0gY3N5IC0gc2Nyb2xsWTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOb3RlOiBTYWZhcmkgbW9iaWxlIHJlcXVpcmVzIHRvIHVzZSBkaWZmZXJlbnQgc2Nyb2xsIG1ldGhvZHMgZGVwZW5kaW5nIGlmIHVzaW5nIHRoZSB3aW5kb3cgb3Igbm90XG4gICAgICAgIGlmICh0aGlzLnVzZVdpbikge1xuICAgICAgICAgIHRoaXMuJHNjcm9sbENvbnRhaW5lci5zY3JvbGxCeSgtKGNzeCAtIHNjcm9sbFgpLCAtKGNzeSAtIHNjcm9sbFkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLiRzY3JvbGxDb250YWluZXIuc2Nyb2xsVG8oc2Nyb2xsWCwgc2Nyb2xsWSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgWyBjdCwgY3IsIGNiLCBjbCBdID0gdGhpcy5jb250YWluZXJCb3VuZHM7XG4gICAgY29uc3QgWyBweDEsIHB5MSwgcHgyLCBweTIsIHB4MywgcHkzIF0gPSB0aGlzLnBvaW50ZXI7XG4gICAgdGhpcy5jb29yZHNbMF0gKz0gKHB4MSAtIHB4MykgKiB0aGlzLmRyYWdTcGVlZDtcbiAgICB0aGlzLmNvb3Jkc1sxXSArPSAocHkxIC0gcHkzKSAqIHRoaXMuZHJhZ1NwZWVkO1xuICAgIHRoaXMucG9pbnRlcls0XSA9IHB4MTtcbiAgICB0aGlzLnBvaW50ZXJbNV0gPSBweTE7XG4gICAgY29uc3QgWyBjeCwgY3kgXSA9IHRoaXMuY29vcmRzO1xuICAgIGNvbnN0IFsgc3gsIHN5IF0gPSB0aGlzLnNuYXBwZWQ7XG4gICAgY29uc3QgY2YgPSAoMSAtIHRoaXMuY29udGFpbmVyRnJpY3Rpb24pICogdGhpcy5kcmFnU3BlZWQ7XG4gICAgdGhpcy5zZXRYKGN4ID4gY3IgPyBjciArIChjeCAtIGNyKSAqIGNmIDogY3ggPCBjbCA/IGNsICsgKGN4IC0gY2wpICogY2YgOiBjeCwgZmFsc2UpO1xuICAgIHRoaXMuc2V0WShjeSA+IGNiID8gY2IgKyAoY3kgLSBjYikgKiBjZiA6IGN5IDwgY3QgPyBjdCArIChjeSAtIGN0KSAqIGNmIDogY3ksIGZhbHNlKTtcbiAgICB0aGlzLmNvbXB1dGVWZWxvY2l0eShweDEgLSBweDMsIHB5MSAtIHB5Myk7XG4gICAgdGhpcy5hbmdsZSA9IGF0YW4yKHB5MSAtIHB5MiwgcHgxIC0gcHgyKTtcbiAgICBjb25zdCBbIG5zeCwgbnN5IF0gPSB0aGlzLnNuYXBwZWQ7XG4gICAgaWYgKG5zeCAhPT0gc3ggJiYgdGhpcy5zbmFwWCB8fCBuc3kgIT09IHN5ICYmIHRoaXMuc25hcFkpIHtcbiAgICAgIHRoaXMub25TbmFwKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy51cGRhdGVUaWNrZXIucGF1c2UoKTtcbiAgICB0aGlzLm92ZXJzaG9vdFhUaWNrZXIucGF1c2UoKTtcbiAgICB0aGlzLm92ZXJzaG9vdFlUaWNrZXIucGF1c2UoKTtcbiAgICAvLyBQYXVzZXMgdGhlIGluIGJvdW5kcyBvblJlbGVhc2UgYW5pbWF0aW9uc1xuICAgIGZvciAobGV0IHByb3AgaW4gdGhpcy5hbmltYXRlLmFuaW1hdGlvbnMpIHRoaXMuYW5pbWF0ZS5hbmltYXRpb25zW3Byb3BdLnBhdXNlKCk7XG4gICAgcmVtb3ZlKHRoaXMsIG51bGwsICd4Jyk7XG4gICAgcmVtb3ZlKHRoaXMsIG51bGwsICd5Jyk7XG4gICAgcmVtb3ZlKHRoaXMsIG51bGwsICdwcm9ncmVzc1gnKTtcbiAgICByZW1vdmUodGhpcywgbnVsbCwgJ3Byb2dyZXNzWScpO1xuICAgIHJlbW92ZSh0aGlzLnNjcm9sbCk7IC8vIFJlbW92ZXMgYW55IGFjdGl2ZSBhbmltYXRpb25zIG9uIHRoZSBjb250YWluZXIgc2Nyb2xsXG4gICAgcmVtb3ZlKHRoaXMub3ZlcnNob290Q29vcmRzKTsgLy8gUmVtb3ZlcyBhY3RpdmUgb3ZlcnNob290IGFuaW1hdGlvbnNcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge051bWJlcn0gW2R1cmF0aW9uXVxuICAgKiBAcGFyYW0ge051bWJlcn0gW2dhcF1cbiAgICogQHBhcmFtIHtFYXNpbmdQYXJhbX0gW2Vhc2VdXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuICBzY3JvbGxJblZpZXcoZHVyYXRpb24sIGdhcCA9IDAsIGVhc2UgPSBlYXNlcy5pbk91dFF1YWQpIHtcbiAgICB0aGlzLnVwZGF0ZVNjcm9sbENvb3JkcygpO1xuICAgIGNvbnN0IHggPSB0aGlzLmRlc3RYO1xuICAgIGNvbnN0IHkgPSB0aGlzLmRlc3RZO1xuICAgIGNvbnN0IHNjcm9sbCA9IHRoaXMuc2Nyb2xsO1xuICAgIGNvbnN0IHNjcm9sbEJvdW5kcyA9IHRoaXMuc2Nyb2xsQm91bmRzO1xuICAgIGNvbnN0IGNhblNjcm9sbCA9IHRoaXMuY2FuU2Nyb2xsO1xuICAgIGlmICghdGhpcy5jb250YWluZXJBcnJheSAmJiB0aGlzLmlzT3V0T2ZCb3VuZHMoc2Nyb2xsQm91bmRzLCB4LCB5KSkge1xuICAgICAgY29uc3QgWyBzdCwgc3IsIHNiLCBzbCBdID0gc2Nyb2xsQm91bmRzO1xuICAgICAgY29uc3QgdCA9IHJvdW5kKGNsYW1wKHkgLSBzdCwgLTFlMTIsIDApLCAwKTtcbiAgICAgIGNvbnN0IHIgPSByb3VuZChjbGFtcCh4IC0gc3IsIDAsIG1heFZhbHVlKSwgMCk7XG4gICAgICBjb25zdCBiID0gcm91bmQoY2xhbXAoeSAtIHNiLCAwLCBtYXhWYWx1ZSksIDApO1xuICAgICAgY29uc3QgbCA9IHJvdW5kKGNsYW1wKHggLSBzbCwgLTFlMTIsIDApLCAwKTtcbiAgICAgIG5ldyBKU0FuaW1hdGlvbihzY3JvbGwsIHtcbiAgICAgICAgeDogcm91bmQoc2Nyb2xsLnggKyAobCA/IGwgLSBnYXAgOiByID8gciArIGdhcCA6IDApLCAwKSxcbiAgICAgICAgeTogcm91bmQoc2Nyb2xsLnkgKyAodCA/IHQgLSBnYXAgOiBiID8gYiArIGdhcCA6IDApLCAwKSxcbiAgICAgICAgZHVyYXRpb246IGlzVW5kKGR1cmF0aW9uKSA/IDM1MCAqIGdsb2JhbHMudGltZVNjYWxlIDogZHVyYXRpb24sXG4gICAgICAgIGVhc2UsXG4gICAgICAgIG9uVXBkYXRlOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jYW5TY3JvbGwgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLiRzY3JvbGxDb250YWluZXIuc2Nyb2xsVG8oc2Nyb2xsLngsIHNjcm9sbC55KTtcbiAgICAgICAgfVxuICAgICAgfSkuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmNhblNjcm9sbCA9IGNhblNjcm9sbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGhhbmRsZUhvdmVyKCkge1xuICAgIGlmICh0aGlzLmlzRmluZVBvaW50ZXIgJiYgdGhpcy5jdXJzb3IgJiYgIXRoaXMuY3Vyc29yU3R5bGVzKSB7XG4gICAgICB0aGlzLmN1cnNvclN0eWxlcyA9IHNldFRhcmdldFZhbHVlcyh0aGlzLiR0cmlnZ2VyLCB7XG4gICAgICAgIGN1cnNvcjogLyoqIEB0eXBlIHtEcmFnZ2FibGVDdXJzb3JQYXJhbXN9ICovKHRoaXMuY3Vyc29yKS5vbkhvdmVyXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtICB7TnVtYmVyfSBbZHVyYXRpb25dXG4gICAqIEBwYXJhbSAge051bWJlcn0gW2dhcF1cbiAgICogQHBhcmFtICB7RWFzaW5nUGFyYW19IFtlYXNlXVxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgYW5pbWF0ZUluVmlldyhkdXJhdGlvbiwgZ2FwID0gMCwgZWFzZSA9IGVhc2VzLmluT3V0UXVhZCkge1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIHRoaXMudXBkYXRlQm91bmRpbmdWYWx1ZXMoKTtcbiAgICBjb25zdCB4ID0gdGhpcy54O1xuICAgIGNvbnN0IHkgPSB0aGlzLnk7XG4gICAgY29uc3QgWyBjcHQsIGNwciwgY3BiLCBjcGwgXSA9IHRoaXMuY29udGFpbmVyUGFkZGluZztcbiAgICBjb25zdCBidCA9IHRoaXMuc2Nyb2xsLnkgLSB0aGlzLnRhcmdldEJvdW5kc1swXSArIGNwdCArIGdhcDtcbiAgICBjb25zdCBiciA9IHRoaXMuc2Nyb2xsLnggLSB0aGlzLnRhcmdldEJvdW5kc1sxXSAtIGNwciAtIGdhcDtcbiAgICBjb25zdCBiYiA9IHRoaXMuc2Nyb2xsLnkgLSB0aGlzLnRhcmdldEJvdW5kc1syXSAtIGNwYiAtIGdhcDtcbiAgICBjb25zdCBibCA9IHRoaXMuc2Nyb2xsLnggLSB0aGlzLnRhcmdldEJvdW5kc1szXSArIGNwbCArIGdhcDtcbiAgICBjb25zdCBvYiA9IHRoaXMuaXNPdXRPZkJvdW5kcyhbYnQsIGJyLCBiYiwgYmxdLCB4LCB5KTtcbiAgICBpZiAob2IpIHtcbiAgICAgIGNvbnN0IFsgZGlzYWJsZWRYLCBkaXNhYmxlZFkgXSA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgICBjb25zdCBkZXN0WCA9IGNsYW1wKHNuYXAoeCwgdGhpcy5zbmFwWCksIGJsLCBicik7XG4gICAgICBjb25zdCBkZXN0WSA9IGNsYW1wKHNuYXAoeSwgdGhpcy5zbmFwWSksIGJ0LCBiYik7XG4gICAgICBjb25zdCBkdXIgPSBpc1VuZChkdXJhdGlvbikgPyAzNTAgKiBnbG9iYWxzLnRpbWVTY2FsZSA6IGR1cmF0aW9uO1xuICAgICAgaWYgKCFkaXNhYmxlZFggJiYgKG9iID09PSAxIHx8IG9iID09PSAzKSkgdGhpcy5hbmltYXRlW3RoaXMueFByb3BdKGRlc3RYLCBkdXIsIGVhc2UpO1xuICAgICAgaWYgKCFkaXNhYmxlZFkgJiYgKG9iID09PSAyIHx8IG9iID09PSAzKSkgdGhpcy5hbmltYXRlW3RoaXMueVByb3BdKGRlc3RZLCBkdXIsIGVhc2UpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge01vdXNlRXZlbnR8VG91Y2hFdmVudH0gZVxuICAgKi9cbiAgaGFuZGxlRG93bihlKSB7XG4gICAgY29uc3QgJGVUYXJnZXQgPSAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyhlLnRhcmdldCk7XG4gICAgaWYgKHRoaXMuZ3JhYmJlZCB8fCAvKiogQHR5cGUge0hUTUxJbnB1dEVsZW1lbnR9ICAqLygkZVRhcmdldCkudHlwZSA9PT0gJ3JhbmdlJykgcmV0dXJuO1xuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMuZ3JhYmJlZCA9IHRydWU7XG4gICAgdGhpcy5yZWxlYXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIHRoaXMudXBkYXRlQm91bmRpbmdWYWx1ZXMoKTtcbiAgICBjb25zdCB0b3VjaGVzID0gLyoqIEB0eXBlIHtUb3VjaEV2ZW50fSAqLyhlKS5jaGFuZ2VkVG91Y2hlcztcbiAgICBjb25zdCBldmVudFggPSB0b3VjaGVzID8gdG91Y2hlc1swXS5jbGllbnRYIDogLyoqIEB0eXBlIHtNb3VzZUV2ZW50fSAqLyhlKS5jbGllbnRYO1xuICAgIGNvbnN0IGV2ZW50WSA9IHRvdWNoZXMgPyB0b3VjaGVzWzBdLmNsaWVudFkgOiAvKiogQHR5cGUge01vdXNlRXZlbnR9ICovKGUpLmNsaWVudFk7XG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLnRyYW5zZm9ybXMubm9ybWFsaXplUG9pbnQoZXZlbnRYLCBldmVudFkpO1xuICAgIGNvbnN0IFsgY3QsIGNyLCBjYiwgY2wgXSA9IHRoaXMuY29udGFpbmVyQm91bmRzO1xuICAgIGNvbnN0IGNmID0gKDEgLSB0aGlzLmNvbnRhaW5lckZyaWN0aW9uKSAqIHRoaXMuZHJhZ1NwZWVkO1xuICAgIGNvbnN0IGN4ID0gdGhpcy54O1xuICAgIGNvbnN0IGN5ID0gdGhpcy55O1xuICAgIHRoaXMuY29vcmRzWzBdID0gdGhpcy5jb29yZHNbMl0gPSAhY2YgPyBjeCA6IGN4ID4gY3IgPyBjciArIChjeCAtIGNyKSAvIGNmIDogY3ggPCBjbCA/IGNsICsgKGN4IC0gY2wpIC8gY2YgOiBjeDtcbiAgICB0aGlzLmNvb3Jkc1sxXSA9IHRoaXMuY29vcmRzWzNdID0gIWNmID8gY3kgOiBjeSA+IGNiID8gY2IgKyAoY3kgLSBjYikgLyBjZiA6IGN5IDwgY3QgPyBjdCArIChjeSAtIGN0KSAvIGNmIDogY3k7XG4gICAgdGhpcy5wb2ludGVyWzBdID0geDtcbiAgICB0aGlzLnBvaW50ZXJbMV0gPSB5O1xuICAgIHRoaXMucG9pbnRlclsyXSA9IHg7XG4gICAgdGhpcy5wb2ludGVyWzNdID0geTtcbiAgICB0aGlzLnBvaW50ZXJbNF0gPSB4O1xuICAgIHRoaXMucG9pbnRlcls1XSA9IHk7XG4gICAgdGhpcy5wb2ludGVyWzZdID0geDtcbiAgICB0aGlzLnBvaW50ZXJbN10gPSB5O1xuICAgIHRoaXMuZGVsdGFYID0gMDtcbiAgICB0aGlzLmRlbHRhWSA9IDA7XG4gICAgdGhpcy52ZWxvY2l0eSA9IDA7XG4gICAgdGhpcy52ZWxvY2l0eVN0YWNrWzBdID0gMDtcbiAgICB0aGlzLnZlbG9jaXR5U3RhY2tbMV0gPSAwO1xuICAgIHRoaXMudmVsb2NpdHlTdGFja1syXSA9IDA7XG4gICAgdGhpcy52ZWxvY2l0eVN0YWNrSW5kZXggPSAwO1xuICAgIHRoaXMuYW5nbGUgPSAwO1xuICAgIGlmICh0aGlzLnRhcmdldFN0eWxlcykge1xuICAgICAgdGhpcy50YXJnZXRTdHlsZXMucmV2ZXJ0KCk7XG4gICAgICB0aGlzLnRhcmdldFN0eWxlcyA9IG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHogPSAvKiogQHR5cGUge051bWJlcn0gKi8oZ2V0VGFyZ2V0VmFsdWUodGhpcy4kdGFyZ2V0LCAnekluZGV4JywgZmFsc2UpKTtcbiAgICB6SW5kZXggPSAoeiA+IHpJbmRleCA/IHogOiB6SW5kZXgpICsgMTtcbiAgICB0aGlzLnRhcmdldFN0eWxlcyA9IHNldFRhcmdldFZhbHVlcyh0aGlzLiR0YXJnZXQsIHsgekluZGV4IH0pO1xuICAgIGlmICh0aGlzLnRyaWdnZXJTdHlsZXMpIHtcbiAgICAgIHRoaXMudHJpZ2dlclN0eWxlcy5yZXZlcnQoKTtcbiAgICAgIHRoaXMudHJpZ2dlclN0eWxlcyA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnNvclN0eWxlcykge1xuICAgICAgdGhpcy5jdXJzb3JTdHlsZXMucmV2ZXJ0KCk7XG4gICAgICB0aGlzLmN1cnNvclN0eWxlcyA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzRmluZVBvaW50ZXIgJiYgdGhpcy5jdXJzb3IpIHtcbiAgICAgIHRoaXMuYm9keVN0eWxlcyA9IHNldFRhcmdldFZhbHVlcyhkb2MuYm9keSwge1xuICAgICAgICBjdXJzb3I6IC8qKiBAdHlwZSB7RHJhZ2dhYmxlQ3Vyc29yUGFyYW1zfSAqLyh0aGlzLmN1cnNvcikub25HcmFiXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zY3JvbGxJblZpZXcoMTAwLCAwLCBlYXNlcy5vdXQoMykpO1xuICAgIHRoaXMub25HcmFiKHRoaXMpO1xuXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3RzdGFydCcsIHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7TW91c2VFdmVudHxUb3VjaEV2ZW50fSBlXG4gICAqL1xuICBoYW5kbGVNb3ZlKGUpIHtcbiAgICBpZiAoIXRoaXMuZ3JhYmJlZCkgcmV0dXJuO1xuICAgIGNvbnN0IHRvdWNoZXMgPSAvKiogQHR5cGUge1RvdWNoRXZlbnR9ICovKGUpLmNoYW5nZWRUb3VjaGVzO1xuICAgIGNvbnN0IGV2ZW50WCA9IHRvdWNoZXMgPyB0b3VjaGVzWzBdLmNsaWVudFggOiAvKiogQHR5cGUge01vdXNlRXZlbnR9ICovKGUpLmNsaWVudFg7XG4gICAgY29uc3QgZXZlbnRZID0gdG91Y2hlcyA/IHRvdWNoZXNbMF0uY2xpZW50WSA6IC8qKiBAdHlwZSB7TW91c2VFdmVudH0gKi8oZSkuY2xpZW50WTtcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMudHJhbnNmb3Jtcy5ub3JtYWxpemVQb2ludChldmVudFgsIGV2ZW50WSk7XG4gICAgY29uc3QgbW92ZWRYID0geCAtIHRoaXMucG9pbnRlcls2XTtcbiAgICBjb25zdCBtb3ZlZFkgPSB5IC0gdGhpcy5wb2ludGVyWzddO1xuXG4gICAgbGV0ICRwYXJlbnQgPSAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyhlLnRhcmdldCk7XG4gICAgbGV0IGlzQXRUb3AgPSBmYWxzZTtcbiAgICBsZXQgaXNBdEJvdHRvbSA9IGZhbHNlO1xuICAgIGxldCBjYW5Ub3VjaFNjcm9sbCA9IGZhbHNlO1xuXG4gICAgd2hpbGUgKHRvdWNoZXMgJiYgJHBhcmVudCAmJiAkcGFyZW50ICE9PSB0aGlzLiR0cmlnZ2VyKSB7XG4gICAgICBjb25zdCBvdmVyZmxvd1kgPSBnZXRUYXJnZXRWYWx1ZSgkcGFyZW50LCAnb3ZlcmZsb3cteScpO1xuICAgICAgaWYgKG92ZXJmbG93WSAhPT0gJ2hpZGRlbicgJiYgb3ZlcmZsb3dZICE9PSAndmlzaWJsZScpIHtcbiAgICAgICAgY29uc3QgeyBzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCwgY2xpZW50SGVpZ2h0IH0gPSAkcGFyZW50O1xuICAgICAgICBpZiAoc2Nyb2xsSGVpZ2h0ID4gY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgY2FuVG91Y2hTY3JvbGwgPSB0cnVlO1xuICAgICAgICAgIGlzQXRUb3AgPSBzY3JvbGxUb3AgPD0gMztcbiAgICAgICAgICBpc0F0Qm90dG9tID0gc2Nyb2xsVG9wID49IChzY3JvbGxIZWlnaHQgLSBjbGllbnRIZWlnaHQpIC0gMztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHBhcmVudCA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovKCRwYXJlbnQucGFyZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKGNhblRvdWNoU2Nyb2xsICYmICgoIWlzQXRUb3AgJiYgIWlzQXRCb3R0b20pIHx8IChpc0F0VG9wICYmIG1vdmVkWSA8IDApIHx8IChpc0F0Qm90dG9tICYmIG1vdmVkWSA+IDApKSkge1xuXG4gICAgICB0aGlzLnBvaW50ZXJbMF0gPSB4O1xuICAgICAgdGhpcy5wb2ludGVyWzFdID0geTtcbiAgICAgIHRoaXMucG9pbnRlclsyXSA9IHg7XG4gICAgICB0aGlzLnBvaW50ZXJbM10gPSB5O1xuICAgICAgdGhpcy5wb2ludGVyWzRdID0geDtcbiAgICAgIHRoaXMucG9pbnRlcls1XSA9IHk7XG4gICAgICB0aGlzLnBvaW50ZXJbNl0gPSB4O1xuICAgICAgdGhpcy5wb2ludGVyWzddID0geTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuXG4gICAgICAvLyBOZWVkZWQgdG8gcHJldmVudHMgY2xpY2sgb24gaGFuZGxlVXBcbiAgICAgIGlmICghdGhpcy50cmlnZ2VyU3R5bGVzKSB0aGlzLnRyaWdnZXJTdHlsZXMgPSBzZXRUYXJnZXRWYWx1ZXModGhpcy4kdHJpZ2dlciwgeyBwb2ludGVyRXZlbnRzOiAnbm9uZScgfSk7XG4gICAgICAvLyBOZWVkZWQgdG8gcHJldmVudCBwYWdlIHNjcm9sbCB3aGlsZSBkcmFnZ2luZyBvbiB0b3VjaCBkZXZ2aWNlXG4gICAgICB0aGlzLiR0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBwcmV2ZW50RGVmYXVsdCwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICAgIHRoaXMuJHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudERlZmF1bHQsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgICB0aGlzLiR0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgcHJldmVudERlZmF1bHQpO1xuXG5cbiAgICAgIGlmICgoIXRoaXMuZGlzYWJsZWRbMF0gJiYgYWJzKG1vdmVkWCkgPiAzKSB8fCAoIXRoaXMuZGlzYWJsZWRbMV0gJiYgYWJzKG1vdmVkWSkgPiAzKSkge1xuXG4gICAgICAgIHRoaXMudXBkYXRlVGlja2VyLnJlc3VtZSgpO1xuICAgICAgICB0aGlzLnBvaW50ZXJbMl0gPSB0aGlzLnBvaW50ZXJbMF07XG4gICAgICAgIHRoaXMucG9pbnRlclszXSA9IHRoaXMucG9pbnRlclsxXTtcbiAgICAgICAgdGhpcy5wb2ludGVyWzBdID0geDtcbiAgICAgICAgdGhpcy5wb2ludGVyWzFdID0geTtcbiAgICAgICAgdGhpcy5kcmFnZ2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZWxlYXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uRHJhZyh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVVcCgpIHtcblxuICAgIGlmICghdGhpcy5ncmFiYmVkKSByZXR1cm47XG5cbiAgICB0aGlzLnVwZGF0ZVRpY2tlci5wYXVzZSgpO1xuXG4gICAgaWYgKHRoaXMudHJpZ2dlclN0eWxlcykge1xuICAgICAgdGhpcy50cmlnZ2VyU3R5bGVzLnJldmVydCgpO1xuICAgICAgdGhpcy50cmlnZ2VyU3R5bGVzID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ib2R5U3R5bGVzKSB7XG4gICAgICB0aGlzLmJvZHlTdHlsZXMucmV2ZXJ0KCk7XG4gICAgICB0aGlzLmJvZHlTdHlsZXMgPSBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IFsgZGlzYWJsZWRYLCBkaXNhYmxlZFkgXSA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgY29uc3QgWyBweDEsIHB5MSwgcHgyLCBweTIsIHB4MywgcHkzIF0gPSB0aGlzLnBvaW50ZXI7XG4gICAgY29uc3QgWyBjdCwgY3IsIGNiLCBjbCBdID0gdGhpcy5jb250YWluZXJCb3VuZHM7XG4gICAgY29uc3QgWyBzeCwgc3kgXSA9IHRoaXMuc25hcHBlZDtcbiAgICBjb25zdCBzcHJpbmdYID0gdGhpcy5yZWxlYXNlWFNwcmluZztcbiAgICBjb25zdCBzcHJpbmdZID0gdGhpcy5yZWxlYXNlWVNwcmluZztcbiAgICBjb25zdCByZWxlYXNlRWFzZSA9IHRoaXMucmVsZWFzZUVhc2U7XG4gICAgY29uc3QgaGFzUmVsZWFzZVNwcmluZyA9IHRoaXMuaGFzUmVsZWFzZVNwcmluZztcbiAgICBjb25zdCBvdmVyc2hvb3RDb29yZHMgPSB0aGlzLm92ZXJzaG9vdENvb3JkcztcbiAgICBjb25zdCBjeCA9IHRoaXMueDtcbiAgICBjb25zdCBjeSA9IHRoaXMueTtcbiAgICBjb25zdCBwdiA9IHRoaXMuY29tcHV0ZVZlbG9jaXR5KHB4MSAtIHB4MywgcHkxIC0gcHkzKTtcbiAgICBjb25zdCBwYSA9IHRoaXMuYW5nbGUgPSBhdGFuMihweTEgLSBweTIsIHB4MSAtIHB4Mik7XG4gICAgY29uc3QgZHMgPSBwdiAqIDE1MDtcbiAgICBjb25zdCBjZiA9ICgxIC0gdGhpcy5yZWxlYXNlQ29udGFpbmVyRnJpY3Rpb24pICogdGhpcy5kcmFnU3BlZWQ7XG4gICAgY29uc3QgbnggPSBjeCArIChjb3MocGEpICogZHMpO1xuICAgIGNvbnN0IG55ID0gY3kgKyAoc2luKHBhKSAqIGRzKTtcbiAgICBjb25zdCBieCA9IG54ID4gY3IgPyBjciArIChueCAtIGNyKSAqIGNmIDogbnggPCBjbCA/IGNsICsgKG54IC0gY2wpICogY2YgOiBueDtcbiAgICBjb25zdCBieSA9IG55ID4gY2IgPyBjYiArIChueSAtIGNiKSAqIGNmIDogbnkgPCBjdCA/IGN0ICsgKG55IC0gY3QpICogY2YgOiBueTtcbiAgICBjb25zdCBkeCA9IHRoaXMuZGVzdFggPSBjbGFtcChyb3VuZChzbmFwKGJ4LCB0aGlzLnNuYXBYKSwgNSksIGNsLCBjcik7XG4gICAgY29uc3QgZHkgPSB0aGlzLmRlc3RZID0gY2xhbXAocm91bmQoc25hcChieSwgdGhpcy5zbmFwWSksIDUpLCBjdCwgY2IpO1xuICAgIGNvbnN0IG9iID0gdGhpcy5pc091dE9mQm91bmRzKHRoaXMuY29udGFpbmVyQm91bmRzLCBueCwgbnkpO1xuXG4gICAgbGV0IGR1cmF0aW9uWCA9IDA7XG4gICAgbGV0IGR1cmF0aW9uWSA9IDA7XG4gICAgbGV0IGVhc2VYID0gcmVsZWFzZUVhc2U7XG4gICAgbGV0IGVhc2VZID0gcmVsZWFzZUVhc2U7XG4gICAgbGV0IGxvbmdlc3RSZWxlYXNlRHVyYXRpb24gPSAwO1xuXG4gICAgb3ZlcnNob290Q29vcmRzLnggPSBjeDtcbiAgICBvdmVyc2hvb3RDb29yZHMueSA9IGN5O1xuXG4gICAgaWYgKCFkaXNhYmxlZFgpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGlvblggPSBkeCA9PT0gY3IgPyBjeCA+IGNyID8gLTEgOiAxIDogY3ggPCBjbCA/IC0xIDogMTtcbiAgICAgIGNvbnN0IGRpc3RhbmNlWCA9IHJvdW5kKGN4IC0gZHgsIDApO1xuICAgICAgc3ByaW5nWC52ZWxvY2l0eSA9IGRpc2FibGVkWSAmJiBoYXNSZWxlYXNlU3ByaW5nID8gZGlzdGFuY2VYID8gKGRzICogZGlyZWN0aW9uWCkgLyBhYnMoZGlzdGFuY2VYKSA6IDAgOiBwdjtcbiAgICAgIGNvbnN0IHsgZWFzZSwgZHVyYXRpb24sIHJlc3REdXJhdGlvbiB9ID0gc3ByaW5nWDtcbiAgICAgIGR1cmF0aW9uWCA9IGN4ID09PSBkeCA/IDAgOiBoYXNSZWxlYXNlU3ByaW5nID8gZHVyYXRpb24gOiBkdXJhdGlvbiAtIChyZXN0RHVyYXRpb24gKiBnbG9iYWxzLnRpbWVTY2FsZSk7XG4gICAgICBpZiAoaGFzUmVsZWFzZVNwcmluZykgZWFzZVggPSBlYXNlO1xuICAgICAgaWYgKGR1cmF0aW9uWCA+IGxvbmdlc3RSZWxlYXNlRHVyYXRpb24pIGxvbmdlc3RSZWxlYXNlRHVyYXRpb24gPSBkdXJhdGlvblg7XG4gICAgfVxuXG4gICAgaWYgKCFkaXNhYmxlZFkpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGlvblkgPSBkeSA9PT0gY2IgPyBjeSA+IGNiID8gLTEgOiAxIDogY3kgPCBjdCA/IC0xIDogMTtcbiAgICAgIGNvbnN0IGRpc3RhbmNlWSA9IHJvdW5kKGN5IC0gZHksIDApO1xuICAgICAgc3ByaW5nWS52ZWxvY2l0eSA9IGRpc2FibGVkWCAmJiBoYXNSZWxlYXNlU3ByaW5nID8gZGlzdGFuY2VZID8gKGRzICogZGlyZWN0aW9uWSkgLyBhYnMoZGlzdGFuY2VZKSA6IDAgOiBwdjtcbiAgICAgIGNvbnN0IHsgZWFzZSwgZHVyYXRpb24sIHJlc3REdXJhdGlvbiB9ID0gc3ByaW5nWTtcbiAgICAgIGR1cmF0aW9uWSA9IGN5ID09PSBkeSA/IDAgOiBoYXNSZWxlYXNlU3ByaW5nID8gZHVyYXRpb24gOiBkdXJhdGlvbiAtIChyZXN0RHVyYXRpb24gKiBnbG9iYWxzLnRpbWVTY2FsZSk7XG4gICAgICBpZiAoaGFzUmVsZWFzZVNwcmluZykgZWFzZVkgPSBlYXNlO1xuICAgICAgaWYgKGR1cmF0aW9uWSA+IGxvbmdlc3RSZWxlYXNlRHVyYXRpb24pIGxvbmdlc3RSZWxlYXNlRHVyYXRpb24gPSBkdXJhdGlvblk7XG4gICAgfVxuXG4gICAgaWYgKCFoYXNSZWxlYXNlU3ByaW5nICYmIG9iICYmIGNmICYmIChkdXJhdGlvblggfHwgZHVyYXRpb25ZKSkge1xuXG4gICAgICAgIGNvbnN0IGNvbXBvc2l0aW9uID0gY29tcG9zaXRpb25UeXBlcy5ibGVuZDtcblxuICAgICAgICBuZXcgSlNBbmltYXRpb24ob3ZlcnNob290Q29vcmRzLCB7XG4gICAgICAgICAgeDogeyB0bzogYngsIGR1cmF0aW9uOiBkdXJhdGlvblggKiAuNjUgfSxcbiAgICAgICAgICB5OiB7IHRvOiBieSwgZHVyYXRpb246IGR1cmF0aW9uWSAqIC42NSB9LFxuICAgICAgICAgIGVhc2U6IHJlbGVhc2VFYXNlLFxuICAgICAgICAgIGNvbXBvc2l0aW9uLFxuICAgICAgICB9KS5pbml0KCk7XG5cbiAgICAgICAgbmV3IEpTQW5pbWF0aW9uKG92ZXJzaG9vdENvb3Jkcywge1xuICAgICAgICAgIHg6IHsgdG86IGR4LCBkdXJhdGlvbjogZHVyYXRpb25YIH0sXG4gICAgICAgICAgeTogeyB0bzogZHksIGR1cmF0aW9uOiBkdXJhdGlvblkgfSxcbiAgICAgICAgICBlYXNlOiByZWxlYXNlRWFzZSxcbiAgICAgICAgICBjb21wb3NpdGlvbixcbiAgICAgICAgfSkuaW5pdCgpO1xuXG4gICAgICAgIHRoaXMub3ZlcnNob290WFRpY2tlci5zdHJldGNoKGR1cmF0aW9uWCkucmVzdGFydCgpO1xuICAgICAgICB0aGlzLm92ZXJzaG9vdFlUaWNrZXIuc3RyZXRjaChkdXJhdGlvblkpLnJlc3RhcnQoKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGlmICghZGlzYWJsZWRYKSB0aGlzLmFuaW1hdGVbdGhpcy54UHJvcF0oZHgsIGR1cmF0aW9uWCwgZWFzZVgpO1xuICAgICAgaWYgKCFkaXNhYmxlZFkpIHRoaXMuYW5pbWF0ZVt0aGlzLnlQcm9wXShkeSwgZHVyYXRpb25ZLCBlYXNlWSk7XG5cbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbEluVmlldyhsb25nZXN0UmVsZWFzZUR1cmF0aW9uLCB0aGlzLnNjcm9sbFRocmVzaG9sZCwgcmVsZWFzZUVhc2UpO1xuXG4gICAgbGV0IGhhc1NuYXBwZWQgPSBmYWxzZTtcblxuICAgIGlmIChkeCAhPT0gc3gpIHtcbiAgICAgIHRoaXMuc25hcHBlZFswXSA9IGR4O1xuICAgICAgaWYgKHRoaXMuc25hcFgpIGhhc1NuYXBwZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChkeSAhPT0gc3kgJiYgdGhpcy5zbmFwWSkge1xuICAgICAgdGhpcy5zbmFwcGVkWzFdID0gZHk7XG4gICAgICBpZiAodGhpcy5zbmFwWSkgaGFzU25hcHBlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGhhc1NuYXBwZWQpIHRoaXMub25TbmFwKHRoaXMpO1xuXG4gICAgdGhpcy5ncmFiYmVkID0gZmFsc2U7XG4gICAgdGhpcy5kcmFnZ2VkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVkID0gdHJ1ZTtcbiAgICB0aGlzLnJlbGVhc2VkID0gdHJ1ZTtcblxuICAgIC8vIEl0J3MgaW1wb3J0YW50IHRvIHRyaWdnZXIgdGhlIGNhbGxiYWNrIGFmdGVyIHRoZSByZWxlYXNlIGFuaW1hdGlvbnMgdG8gYmUgYWJsZSB0byBjYW5jZWwgdGhlbVxuICAgIHRoaXMub25SZWxlYXNlKHRoaXMpO1xuXG4gICAgdGhpcy4kdHJpZ2dlci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgcHJldmVudERlZmF1bHQpO1xuICAgIHRoaXMuJHRyaWdnZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudERlZmF1bHQpO1xuICAgIHRoaXMuJHRyaWdnZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBwcmV2ZW50RGVmYXVsdCk7XG5cbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcyk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcyk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcyk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcyk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NlbGVjdHN0YXJ0JywgdGhpcyk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLnJlc2l6ZVRpY2tlci5wYXVzZSgpO1xuICAgIHRoaXMuZ3JhYmJlZCA9IGZhbHNlO1xuICAgIHRoaXMuZHJhZ2dlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVsZWFzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNhblNjcm9sbCA9IGZhbHNlO1xuICAgIHRoaXMuc2V0WCgwLCB0cnVlKTtcbiAgICB0aGlzLnNldFkoMCwgdHJ1ZSk7XG4gICAgdGhpcy5jb29yZHNbMF0gPSAwO1xuICAgIHRoaXMuY29vcmRzWzFdID0gMDtcbiAgICB0aGlzLnBvaW50ZXJbMF0gPSAwO1xuICAgIHRoaXMucG9pbnRlclsxXSA9IDA7XG4gICAgdGhpcy5wb2ludGVyWzJdID0gMDtcbiAgICB0aGlzLnBvaW50ZXJbM10gPSAwO1xuICAgIHRoaXMucG9pbnRlcls0XSA9IDA7XG4gICAgdGhpcy5wb2ludGVyWzVdID0gMDtcbiAgICB0aGlzLnBvaW50ZXJbNl0gPSAwO1xuICAgIHRoaXMucG9pbnRlcls3XSA9IDA7XG4gICAgdGhpcy52ZWxvY2l0eSA9IDA7XG4gICAgdGhpcy52ZWxvY2l0eVN0YWNrWzBdID0gMDtcbiAgICB0aGlzLnZlbG9jaXR5U3RhY2tbMV0gPSAwO1xuICAgIHRoaXMudmVsb2NpdHlTdGFja1syXSA9IDA7XG4gICAgdGhpcy52ZWxvY2l0eVN0YWNrSW5kZXggPSAwO1xuICAgIHRoaXMuYW5nbGUgPSAwO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy4kdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWRpc2FibGVkJyk7XG4gICAgICB0aGlzLnRvdWNoQWN0aW9uU3R5bGVzID0gc2V0VGFyZ2V0VmFsdWVzKHRoaXMuJHRyaWdnZXIsIHtcbiAgICAgICAgdG91Y2hBY3Rpb246IHRoaXMuZGlzYWJsZWRbMF0gPyAncGFuLXgnIDogdGhpcy5kaXNhYmxlZFsxXSA/ICdwYW4teScgOiAnbm9uZSdcbiAgICAgIH0pO1xuICAgICAgdGhpcy4kdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcywgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgdGhpcy4kdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICB0aGlzLiR0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ3JhYmJlZCA9IGZhbHNlO1xuICAgIHRoaXMuZHJhZ2dlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVsZWFzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNhblNjcm9sbCA9IGZhbHNlO1xuICAgIHRoaXMudG91Y2hBY3Rpb25TdHlsZXMucmV2ZXJ0KCk7XG4gICAgaWYgKHRoaXMuY3Vyc29yU3R5bGVzKSB7XG4gICAgICB0aGlzLmN1cnNvclN0eWxlcy5yZXZlcnQoKTtcbiAgICAgIHRoaXMuY3Vyc29yU3R5bGVzID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMudHJpZ2dlclN0eWxlcykge1xuICAgICAgdGhpcy50cmlnZ2VyU3R5bGVzLnJldmVydCgpO1xuICAgICAgdGhpcy50cmlnZ2VyU3R5bGVzID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuYm9keVN0eWxlcykge1xuICAgICAgdGhpcy5ib2R5U3R5bGVzLnJldmVydCgpO1xuICAgICAgdGhpcy5ib2R5U3R5bGVzID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMudGFyZ2V0U3R5bGVzKSB7XG4gICAgICB0aGlzLnRhcmdldFN0eWxlcy5yZXZlcnQoKTtcbiAgICAgIHRoaXMudGFyZ2V0U3R5bGVzID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy4kdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2lzLWRpc2FibGVkJyk7XG4gICAgdGhpcy4kdHJpZ2dlci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcyk7XG4gICAgdGhpcy4kdHJpZ2dlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzKTtcbiAgICB0aGlzLiR0cmlnZ2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcyk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcyk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcyk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcyk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NlbGVjdHN0YXJ0JywgdGhpcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXZlcnQoKSB7XG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgIHRoaXMuJHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1kaXNhYmxlZCcpO1xuICAgIHRoaXMudXBkYXRlVGlja2VyLnJldmVydCgpO1xuICAgIHRoaXMub3ZlcnNob290WFRpY2tlci5yZXZlcnQoKTtcbiAgICB0aGlzLm92ZXJzaG9vdFlUaWNrZXIucmV2ZXJ0KCk7XG4gICAgdGhpcy5yZXNpemVUaWNrZXIucmV2ZXJ0KCk7XG4gICAgdGhpcy5hbmltYXRlLnJldmVydCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICovXG4gIGhhbmRsZUV2ZW50KGUpIHtcbiAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgY2FzZSAnbW91c2Vkb3duJzpcbiAgICAgICAgdGhpcy5oYW5kbGVEb3duKC8qKiBAdHlwZSB7TW91c2VFdmVudH0gKi8oZSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvdWNoc3RhcnQnOlxuICAgICAgICB0aGlzLmhhbmRsZURvd24oLyoqIEB0eXBlIHtUb3VjaEV2ZW50fSAqLyhlKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbW91c2Vtb3ZlJzpcbiAgICAgICAgdGhpcy5oYW5kbGVNb3ZlKC8qKiBAdHlwZSB7TW91c2VFdmVudH0gKi8oZSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvdWNobW92ZSc6XG4gICAgICAgIHRoaXMuaGFuZGxlTW92ZSgvKiogQHR5cGUge1RvdWNoRXZlbnR9ICovKGUpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtb3VzZXVwJzpcbiAgICAgICAgdGhpcy5oYW5kbGVVcCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvdWNoZW5kJzpcbiAgICAgICAgdGhpcy5oYW5kbGVVcCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvdWNoY2FuY2VsJzpcbiAgICAgICAgdGhpcy5oYW5kbGVVcCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vdXNlZW50ZXInOlxuICAgICAgICB0aGlzLmhhbmRsZUhvdmVyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VsZWN0c3RhcnQnOlxuICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtUYXJnZXRzUGFyYW19IHRhcmdldFxuICogQHBhcmFtIHtEcmFnZ2FibGVQYXJhbXN9IFtwYXJhbWV0ZXJzXVxuICogQHJldHVybiB7RHJhZ2dhYmxlfVxuICovXG5jb25zdCBjcmVhdGVEcmFnZ2FibGUgPSAodGFyZ2V0LCBwYXJhbWV0ZXJzKSA9PiBuZXcgRHJhZ2dhYmxlKHRhcmdldCwgcGFyYW1ldGVycyk7XG5cblxuXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gUmVhY3RSZWZcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR8U1ZHRWxlbWVudHxudWxsfSBbY3VycmVudF1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEFuZ3VsYXJSZWZcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR8U1ZHRWxlbWVudH0gW25hdGl2ZUVsZW1lbnRdXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBTY29wZVBhcmFtc1xuICogQHByb3BlcnR5IHtET01UYXJnZXRTZWxlY3RvcnxSZWFjdFJlZnxBbmd1bGFyUmVmfSBbcm9vdF1cbiAqIEBwcm9wZXJ0eSB7RGVmYXVsdHNQYXJhbXN9IFtkZWZhdWx0c11cbiAqIEBwcm9wZXJ0eSB7UmVjb3JkPFN0cmluZywgU3RyaW5nPn0gW21lZGlhUXVlcmllc11cbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBTY29wZUNsZWFudXBcbiAqIEBwYXJhbSB7U2NvcGV9IFtzY29wZV1cbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBTY29wZUNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge1Njb3BlfSBbc2NvcGVdXG4gKiBAcmV0dXJuIHtTY29wZUNsZWFudXB8dm9pZH1cbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBTY29wZU1ldGhvZFxuICogQHBhcmFtIHsuLi4qfSBhcmdzXG4gKiBAcmV0dXJuIHtTY29wZUNsZWFudXB8dm9pZH1cbiAqL1xuXG5jbGFzcyBTY29wZSB7XG4gIC8qKiBAcGFyYW0ge1Njb3BlUGFyYW1zfSBbcGFyYW1ldGVyc10gKi9cbiAgY29uc3RydWN0b3IocGFyYW1ldGVycyA9IHt9KSB7XG4gICAgaWYgKGdsb2JhbHMuc2NvcGUpIGdsb2JhbHMuc2NvcGUucmV2ZXJ0aWJsZXMucHVzaCh0aGlzKTtcbiAgICBjb25zdCByb290UGFyYW0gPSBwYXJhbWV0ZXJzLnJvb3Q7XG4gICAgLyoqIEB0eXBlIHtEb2N1bWVudHxET01UYXJnZXR9ICovXG4gICAgbGV0IHJvb3QgPSBkb2M7XG4gICAgaWYgKHJvb3RQYXJhbSkge1xuICAgICAgcm9vdCA9IC8qKiBAdHlwZSB7UmVhY3RSZWZ9ICovKHJvb3RQYXJhbSkuY3VycmVudCB8fFxuICAgICAgICAgICAgIC8qKiBAdHlwZSB7QW5ndWxhclJlZn0gKi8ocm9vdFBhcmFtKS5uYXRpdmVFbGVtZW50IHx8XG4gICAgICAgICAgICAgcGFyc2VUYXJnZXRzKC8qKiBAdHlwZSB7RE9NVGFyZ2V0U2VsZWN0b3J9ICovKHJvb3RQYXJhbSkpWzBdIHx8XG4gICAgICAgICAgICAgZG9jO1xuICAgIH1cbiAgICBjb25zdCBzY29wZURlZmF1bHRzID0gcGFyYW1ldGVycy5kZWZhdWx0cztcbiAgICBjb25zdCBnbG9iYWxEZWZhdWx0ID0gZ2xvYmFscy5kZWZhdWx0cztcbiAgICBjb25zdCBtZWRpYVF1ZXJpZXMgPSBwYXJhbWV0ZXJzLm1lZGlhUXVlcmllcztcbiAgICAvKiogQHR5cGUge0RlZmF1bHRzUGFyYW1zfSAqL1xuICAgIHRoaXMuZGVmYXVsdHMgPSBzY29wZURlZmF1bHRzID8gbWVyZ2VPYmplY3RzKHNjb3BlRGVmYXVsdHMsIGdsb2JhbERlZmF1bHQpIDogZ2xvYmFsRGVmYXVsdDtcbiAgICAvKiogQHR5cGUge0RvY3VtZW50fERPTVRhcmdldH0gKi9cbiAgICB0aGlzLnJvb3QgPSByb290O1xuICAgIC8qKiBAdHlwZSB7QXJyYXk8U2NvcGVDb25zdHJ1Y3Rvcj59ICovXG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBbXTtcbiAgICAvKiogQHR5cGUge0FycmF5PEZ1bmN0aW9uPn0gKi9cbiAgICB0aGlzLnJldmVydENvbnN0cnVjdG9ycyA9IFtdO1xuICAgIC8qKiBAdHlwZSB7QXJyYXk8UmV2ZXJ0aWJsZT59ICovXG4gICAgdGhpcy5yZXZlcnRpYmxlcyA9IFtdO1xuICAgIC8qKiBAdHlwZSB7UmVjb3JkPFN0cmluZywgRnVuY3Rpb24+fSAqL1xuICAgIHRoaXMubWV0aG9kcyA9IHt9O1xuICAgIC8qKiBAdHlwZSB7UmVjb3JkPFN0cmluZywgQm9vbGVhbj59ICovXG4gICAgdGhpcy5tYXRjaGVzID0ge307XG4gICAgLyoqIEB0eXBlIHtSZWNvcmQ8U3RyaW5nLCBNZWRpYVF1ZXJ5TGlzdD59ICovXG4gICAgdGhpcy5tZWRpYVF1ZXJ5TGlzdHMgPSB7fTtcbiAgICAvKiogQHR5cGUge1JlY29yZDxTdHJpbmcsIGFueT59ICovXG4gICAgdGhpcy5kYXRhID0ge307XG4gICAgaWYgKG1lZGlhUXVlcmllcykge1xuICAgICAgZm9yIChsZXQgbXEgaW4gbWVkaWFRdWVyaWVzKSB7XG4gICAgICAgIGNvbnN0IF9tcSA9IHdpbi5tYXRjaE1lZGlhKG1lZGlhUXVlcmllc1ttcV0pO1xuICAgICAgICB0aGlzLm1lZGlhUXVlcnlMaXN0c1ttcV0gPSBfbXE7XG4gICAgICAgIF9tcS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGNhbGxiYWNrIFNjb3BwZWRDYWxsYmFja1xuICAgKiBAcGFyYW0ge3RoaXN9IHNjb3BlXG4gICAqIEByZXR1cm4ge2FueX1cbiAgICpcbiAgICogQHBhcmFtIHtTY29wcGVkQ2FsbGJhY2t9IGNiXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuICBleGVjdXRlKGNiKSB7XG4gICAgbGV0IGFjdGl2ZVNjb3BlID0gZ2xvYmFscy5zY29wZTtcbiAgICBsZXQgYWN0aXZlUm9vdCA9IGdsb2JhbHMucm9vdDtcbiAgICBsZXQgYWN0aXZlRGVmYXVsdHMgPSBnbG9iYWxzLmRlZmF1bHRzO1xuICAgIGdsb2JhbHMuc2NvcGUgPSB0aGlzO1xuICAgIGdsb2JhbHMucm9vdCA9IHRoaXMucm9vdDtcbiAgICBnbG9iYWxzLmRlZmF1bHRzID0gdGhpcy5kZWZhdWx0cztcbiAgICBjb25zdCBtcXMgPSB0aGlzLm1lZGlhUXVlcnlMaXN0cztcbiAgICBmb3IgKGxldCBtcSBpbiBtcXMpIHRoaXMubWF0Y2hlc1ttcV0gPSBtcXNbbXFdLm1hdGNoZXM7XG4gICAgY29uc3QgcmV0dXJuZWQgPSBjYih0aGlzKTtcbiAgICBnbG9iYWxzLnNjb3BlID0gYWN0aXZlU2NvcGU7XG4gICAgZ2xvYmFscy5yb290ID0gYWN0aXZlUm9vdDtcbiAgICBnbG9iYWxzLmRlZmF1bHRzID0gYWN0aXZlRGVmYXVsdHM7XG4gICAgcmV0dXJuIHJldHVybmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZXhlY3V0ZSgoKSA9PiB7XG4gICAgICBsZXQgaSA9IHRoaXMucmV2ZXJ0aWJsZXMubGVuZ3RoO1xuICAgICAgbGV0IHkgPSB0aGlzLnJldmVydENvbnN0cnVjdG9ycy5sZW5ndGg7XG4gICAgICB3aGlsZSAoaS0tKSB0aGlzLnJldmVydGlibGVzW2ldLnJldmVydCgpO1xuICAgICAgd2hpbGUgKHktLSkgdGhpcy5yZXZlcnRDb25zdHJ1Y3RvcnNbeV0odGhpcyk7XG4gICAgICB0aGlzLnJldmVydGlibGVzLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLnJldmVydENvbnN0cnVjdG9ycy5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5jb25zdHJ1Y3RvcnMuZm9yRWFjaCggY29uc3RydWN0b3IgPT4ge1xuICAgICAgICBjb25zdCByZXZlcnRDb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yKHRoaXMpO1xuICAgICAgICBpZiAocmV2ZXJ0Q29uc3RydWN0b3IpIHtcbiAgICAgICAgICB0aGlzLnJldmVydENvbnN0cnVjdG9ycy5wdXNoKHJldmVydENvbnN0cnVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQGNhbGxiYWNrIGNvbnRydWN0b3JDYWxsYmFja1xuICAgKiBAcGFyYW0ge3RoaXN9IHNlbGZcbiAgICpcbiAgICogQG92ZXJsb2FkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhMVxuICAgKiBAcGFyYW0ge1Njb3BlTWV0aG9kfSBhMlxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKlxuICAgKiBAb3ZlcmxvYWRcbiAgICogQHBhcmFtIHtjb250cnVjdG9yQ2FsbGJhY2t9IGExXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfGNvbnRydWN0b3JDYWxsYmFja30gYTFcbiAgICogQHBhcmFtIHtTY29wZU1ldGhvZH0gW2EyXVxuICAgKi9cbiAgYWRkKGExLCBhMikge1xuICAgIGlmIChpc0ZuYyhhMSkpIHtcbiAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gLyoqIEB0eXBlIHtjb250cnVjdG9yQ2FsbGJhY2t9ICovKGExKTtcbiAgICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICAgICAgdGhpcy5leGVjdXRlKCgpID0+IHtcbiAgICAgICAgY29uc3QgcmV2ZXJ0Q29uc3RydWN0b3IgPSBjb25zdHJ1Y3Rvcih0aGlzKTtcbiAgICAgICAgaWYgKHJldmVydENvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgdGhpcy5yZXZlcnRDb25zdHJ1Y3RvcnMucHVzaChyZXZlcnRDb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1ldGhvZHNbLyoqIEB0eXBlIHtTdHJpbmd9ICovKGExKV0gPSAoLyoqIEB0eXBlIHthbnl9ICovLi4uYXJncykgPT4gdGhpcy5leGVjdXRlKCgpID0+IGEyKC4uLmFyZ3MpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgKi9cbiAgaGFuZGxlRXZlbnQoZSkge1xuICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICBjYXNlICdjaGFuZ2UnOlxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV2ZXJ0KCkge1xuICAgIGNvbnN0IHJldmVydGlibGVzID0gdGhpcy5yZXZlcnRpYmxlcztcbiAgICBjb25zdCByZXZlcnRDb25zdHJ1Y3RvcnMgPSB0aGlzLnJldmVydENvbnN0cnVjdG9ycztcbiAgICBjb25zdCBtcXMgPSB0aGlzLm1lZGlhUXVlcnlMaXN0cztcbiAgICBsZXQgaSA9IHJldmVydGlibGVzLmxlbmd0aDtcbiAgICBsZXQgeSA9IHJldmVydENvbnN0cnVjdG9ycy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkgcmV2ZXJ0aWJsZXNbaV0ucmV2ZXJ0KCk7XG4gICAgd2hpbGUgKHktLSkgcmV2ZXJ0Q29uc3RydWN0b3JzW3ldKHRoaXMpO1xuICAgIGZvciAobGV0IG1xIGluIG1xcykgbXFzW21xXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzKTtcbiAgICByZXZlcnRpYmxlcy5sZW5ndGggPSAwO1xuICAgIHJldmVydENvbnN0cnVjdG9ycy5sZW5ndGggPSAwO1xuICAgIHRoaXMuY29uc3RydWN0b3JzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5tYXRjaGVzID0ge307XG4gICAgdGhpcy5tZXRob2RzID0ge307XG4gICAgdGhpcy5tZWRpYVF1ZXJ5TGlzdHMgPSB7fTtcbiAgICB0aGlzLmRhdGEgPSB7fTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7U2NvcGVQYXJhbXN9IFtwYXJhbXNdXG4gKiBAcmV0dXJuIHtTY29wZX1cbiAqL1xuY29uc3QgY3JlYXRlU2NvcGUgPSBwYXJhbXMgPT4gbmV3IFNjb3BlKHBhcmFtcyk7XG5cbi8qKlxuICogQHR5cGVkZWYge1N0cmluZ3xOdW1iZXJ9IFNjcm9sbFRocmVzaG9sZFZhbHVlXG4gKi9cblxuLyoqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmNvbnN0IGdldE1heFZpZXdIZWlnaHQgPSAoKSA9PiB7XG4gIGNvbnN0ICRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkb2MuYm9keS5hcHBlbmRDaGlsZCgkZWwpO1xuICAkZWwuc3R5bGUuaGVpZ2h0ID0gJzEwMGx2aCc7XG4gIGNvbnN0IGhlaWdodCA9ICRlbC5vZmZzZXRIZWlnaHQ7XG4gIGRvYy5ib2R5LnJlbW92ZUNoaWxkKCRlbCk7XG4gIHJldHVybiBoZWlnaHQ7XG59O1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7U2Nyb2xsVGhyZXNob2xkVmFsdWV8U3RyaW5nfE51bWJlcnxCb29sZWFufEZ1bmN0aW9ufE9iamVjdH0gVFxuICogQHBhcmFtIHtUIHwgKChvYnNlcnZlcjogU2Nyb2xsT2JzZXJ2ZXIpID0+IFQpfSB2YWx1ZVxuICogQHBhcmFtIHtTY3JvbGxPYnNlcnZlcn0gc2Nyb2xsZXJcbiAqIEByZXR1cm4ge1R9XG4gKi9cbmNvbnN0IHBhcnNlU2Nyb2xsT2JzZXJ2ZXJGdW5jdGlvblBhcmFtZXRlciA9ICh2YWx1ZSwgc2Nyb2xsZXIpID0+IHZhbHVlICYmIGlzRm5jKHZhbHVlKSA/IC8qKiBAdHlwZSB7RnVuY3Rpb259ICovKHZhbHVlKShzY3JvbGxlcikgOiB2YWx1ZTtcblxuY29uc3Qgc2Nyb2xsQ29udGFpbmVycyA9IG5ldyBNYXAoKTtcblxuY2xhc3MgU2Nyb2xsQ29udGFpbmVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9ICRlbFxuICAgKi9cbiAgY29uc3RydWN0b3IoJGVsKSB7XG4gICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi9cbiAgICB0aGlzLmVsZW1lbnQgPSAkZWw7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMudXNlV2luID0gdGhpcy5lbGVtZW50ID09PSBkb2MuYm9keTtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLndpbldpZHRoID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLndpbkhlaWdodCA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy53aWR0aCA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5oZWlnaHQgPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMubGVmdCA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy50b3AgPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuekluZGV4ID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLnNjcm9sbFggPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuc2Nyb2xsWSA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5wcmV2U2Nyb2xsWCA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5wcmV2U2Nyb2xsWSA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5zY3JvbGxXaWR0aCA9IDA7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5zY3JvbGxIZWlnaHQgPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMudmVsb2NpdHkgPSAwO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLmJhY2t3YXJkWCA9IGZhbHNlO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLmJhY2t3YXJkWSA9IGZhbHNlO1xuICAgIC8qKiBAdHlwZSB7VGltZXJ9ICovXG4gICAgdGhpcy5zY3JvbGxUaWNrZXIgPSBuZXcgVGltZXIoe1xuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgb25CZWdpbjogKCkgPT4gdGhpcy5kYXRhVGltZXIucmVzdW1lKCksXG4gICAgICBvblVwZGF0ZTogKCkgPT4ge1xuICAgICAgICBjb25zdCBiYWNrd2FyZHMgPSB0aGlzLmJhY2t3YXJkWCB8fCB0aGlzLmJhY2t3YXJkWTtcbiAgICAgICAgZm9yRWFjaENoaWxkcmVuKHRoaXMsICgvKiogQHR5cGUge1Njcm9sbE9ic2VydmVyfSAqL2NoaWxkKSA9PiBjaGlsZC5oYW5kbGVTY3JvbGwoKSwgYmFja3dhcmRzKTtcbiAgICAgIH0sXG4gICAgICBvbkNvbXBsZXRlOiAoKSA9PiB0aGlzLmRhdGFUaW1lci5wYXVzZSgpXG4gICAgfSkuaW5pdCgpO1xuICAgIC8qKiBAdHlwZSB7VGltZXJ9ICovXG4gICAgdGhpcy5kYXRhVGltZXIgPSBuZXcgVGltZXIoe1xuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgZnJhbWVSYXRlOiAzMCxcbiAgICAgIG9uVXBkYXRlOiBzZWxmID0+IHtcbiAgICAgICAgY29uc3QgZHQgPSBzZWxmLmRlbHRhVGltZTtcbiAgICAgICAgY29uc3QgcHggPSB0aGlzLnByZXZTY3JvbGxYO1xuICAgICAgICBjb25zdCBweSA9IHRoaXMucHJldlNjcm9sbFk7XG4gICAgICAgIGNvbnN0IG54ID0gdGhpcy5zY3JvbGxYO1xuICAgICAgICBjb25zdCBueSA9IHRoaXMuc2Nyb2xsWTtcbiAgICAgICAgY29uc3QgZHggPSBweCAtIG54O1xuICAgICAgICBjb25zdCBkeSA9IHB5IC0gbnk7XG4gICAgICAgIHRoaXMucHJldlNjcm9sbFggPSBueDtcbiAgICAgICAgdGhpcy5wcmV2U2Nyb2xsWSA9IG55O1xuICAgICAgICBpZiAoZHgpIHRoaXMuYmFja3dhcmRYID0gcHggPiBueDtcbiAgICAgICAgaWYgKGR5KSB0aGlzLmJhY2t3YXJkWSA9IHB5ID4gbnk7XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSByb3VuZChkdCA+IDAgPyBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpIC8gZHQgOiAwLCA1KTtcbiAgICAgIH1cbiAgICB9KS5pbml0KCk7XG4gICAgLyoqIEB0eXBlIHtUaW1lcn0gKi9cbiAgICB0aGlzLnJlc2l6ZVRpY2tlciA9IG5ldyBUaW1lcih7XG4gICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICBkdXJhdGlvbjogMjUwICogZ2xvYmFscy50aW1lU2NhbGUsXG4gICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlV2luZG93Qm91bmRzKCk7XG4gICAgICAgIHRoaXMucmVmcmVzaFNjcm9sbE9ic2VydmVycygpO1xuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbCgpO1xuICAgICAgfVxuICAgIH0pLmluaXQoKTtcbiAgICAvKiogQHR5cGUge1RpbWVyfSAqL1xuICAgIHRoaXMud2FrZVRpY2tlciA9IG5ldyBUaW1lcih7XG4gICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICBkdXJhdGlvbjogNTAwICogZ2xvYmFscy50aW1lU2NhbGUsXG4gICAgICBvbkJlZ2luOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVGlja2VyLnJlc3VtZSgpO1xuICAgICAgfSxcbiAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgdGhpcy5zY3JvbGxUaWNrZXIucGF1c2UoKTtcbiAgICAgIH1cbiAgICB9KS5pbml0KCk7XG4gICAgLyoqIEB0eXBlIHtTY3JvbGxPYnNlcnZlcn0gKi9cbiAgICB0aGlzLl9oZWFkID0gbnVsbDtcbiAgICAvKiogQHR5cGUge1Njcm9sbE9ic2VydmVyfSAqL1xuICAgIHRoaXMuX3RhaWwgPSBudWxsO1xuICAgIHRoaXMudXBkYXRlU2Nyb2xsQ29vcmRzKCk7XG4gICAgdGhpcy51cGRhdGVXaW5kb3dCb3VuZHMoKTtcbiAgICB0aGlzLnVwZGF0ZUJvdW5kcygpO1xuICAgIHRoaXMucmVmcmVzaFNjcm9sbE9ic2VydmVycygpO1xuICAgIHRoaXMuaGFuZGxlU2Nyb2xsKCk7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB0aGlzLnJlc2l6ZVRpY2tlci5yZXN0YXJ0KCkpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQpO1xuICAgICh0aGlzLnVzZVdpbiA/IHdpbiA6IHRoaXMuZWxlbWVudCkuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcywgZmFsc2UpO1xuICB9XG5cbiAgdXBkYXRlU2Nyb2xsQ29vcmRzKCkge1xuICAgIGNvbnN0IHVzZVdpbiA9IHRoaXMudXNlV2luO1xuICAgIGNvbnN0ICRlbCA9IHRoaXMuZWxlbWVudDtcbiAgICB0aGlzLnNjcm9sbFggPSByb3VuZCh1c2VXaW4gPyB3aW4uc2Nyb2xsWCA6ICRlbC5zY3JvbGxMZWZ0LCAwKTtcbiAgICB0aGlzLnNjcm9sbFkgPSByb3VuZCh1c2VXaW4gPyB3aW4uc2Nyb2xsWSA6ICRlbC5zY3JvbGxUb3AsIDApO1xuICB9XG5cbiAgdXBkYXRlV2luZG93Qm91bmRzKCkge1xuICAgIHRoaXMud2luV2lkdGggPSB3aW4uaW5uZXJXaWR0aDtcbiAgICB0aGlzLndpbkhlaWdodCA9IGdldE1heFZpZXdIZWlnaHQoKTtcbiAgfVxuXG4gIHVwZGF0ZUJvdW5kcygpIHtcbiAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KTtcbiAgICBjb25zdCAkZWwgPSB0aGlzLmVsZW1lbnQ7XG4gICAgdGhpcy5zY3JvbGxXaWR0aCA9ICRlbC5zY3JvbGxXaWR0aCArIHBhcnNlRmxvYXQoc3R5bGUubWFyZ2luTGVmdCkgKyBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpblJpZ2h0KTtcbiAgICB0aGlzLnNjcm9sbEhlaWdodCA9ICRlbC5zY3JvbGxIZWlnaHQgKyBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpblRvcCkgKyBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpbkJvdHRvbSk7XG4gICAgdGhpcy51cGRhdGVXaW5kb3dCb3VuZHMoKTtcbiAgICBsZXQgd2lkdGgsIGhlaWdodDtcbiAgICBpZiAodGhpcy51c2VXaW4pIHtcbiAgICAgIHdpZHRoID0gdGhpcy53aW5XaWR0aDtcbiAgICAgIGhlaWdodCA9IHRoaXMud2luSGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlbFJlY3QgPSAkZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB3aWR0aCA9IGVsUmVjdC53aWR0aDtcbiAgICAgIGhlaWdodCA9IGVsUmVjdC5oZWlnaHQ7XG4gICAgICB0aGlzLnRvcCA9IGVsUmVjdC50b3A7XG4gICAgICB0aGlzLmxlZnQgPSBlbFJlY3QubGVmdDtcbiAgICB9XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgcmVmcmVzaFNjcm9sbE9ic2VydmVycygpIHtcbiAgICBmb3JFYWNoQ2hpbGRyZW4odGhpcywgKC8qKiBAdHlwZSB7U2Nyb2xsT2JzZXJ2ZXJ9ICovY2hpbGQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5fZGVidWcpIHtcbiAgICAgICAgY2hpbGQucmVtb3ZlRGVidWcoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZUJvdW5kcygpO1xuICAgIGZvckVhY2hDaGlsZHJlbih0aGlzLCAoLyoqIEB0eXBlIHtTY3JvbGxPYnNlcnZlcn0gKi9jaGlsZCkgPT4ge1xuICAgICAgY2hpbGQucmVmcmVzaCgpO1xuICAgICAgaWYgKGNoaWxkLl9kZWJ1Zykge1xuICAgICAgICBjaGlsZC5kZWJ1ZygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0JvdW5kcygpO1xuICAgIHRoaXMudXBkYXRlQm91bmRzKCk7XG4gICAgdGhpcy5yZWZyZXNoU2Nyb2xsT2JzZXJ2ZXJzKCk7XG4gICAgdGhpcy5oYW5kbGVTY3JvbGwoKTtcbiAgfVxuXG4gIGhhbmRsZVNjcm9sbCgpIHtcbiAgICB0aGlzLnVwZGF0ZVNjcm9sbENvb3JkcygpO1xuICAgIHRoaXMud2FrZVRpY2tlci5yZXN0YXJ0KCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgKi9cbiAgaGFuZGxlRXZlbnQoZSkge1xuICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICBjYXNlICdzY3JvbGwnOlxuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbCgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXZlcnQoKSB7XG4gICAgdGhpcy5zY3JvbGxUaWNrZXIuY2FuY2VsKCk7XG4gICAgdGhpcy5kYXRhVGltZXIuY2FuY2VsKCk7XG4gICAgdGhpcy5yZXNpemVUaWNrZXIuY2FuY2VsKCk7XG4gICAgdGhpcy53YWtlVGlja2VyLmNhbmNlbCgpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuZWxlbWVudCk7XG4gICAgKHRoaXMudXNlV2luID8gd2luIDogdGhpcy5lbGVtZW50KS5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzKTtcbiAgICBzY3JvbGxDb250YWluZXJzLmRlbGV0ZSh0aGlzLmVsZW1lbnQpO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtUYXJnZXRzUGFyYW19IHRhcmdldFxuICogQHJldHVybiB7U2Nyb2xsQ29udGFpbmVyfVxuICovXG5jb25zdCByZWdpc3RlckFuZEdldFNjcm9sbENvbnRhaW5lciA9IHRhcmdldCA9PiB7XG4gIGNvbnN0ICRlbCA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovKHRhcmdldCA/IHBhcnNlVGFyZ2V0cyh0YXJnZXQpWzBdIHx8IGRvYy5ib2R5IDogZG9jLmJvZHkpO1xuICBsZXQgc2Nyb2xsQ29udGFpbmVyID0gc2Nyb2xsQ29udGFpbmVycy5nZXQoJGVsKTtcbiAgaWYgKCFzY3JvbGxDb250YWluZXIpIHtcbiAgICBzY3JvbGxDb250YWluZXIgPSBuZXcgU2Nyb2xsQ29udGFpbmVyKCRlbCk7XG4gICAgc2Nyb2xsQ29udGFpbmVycy5zZXQoJGVsLCBzY3JvbGxDb250YWluZXIpO1xuICB9XG4gIHJldHVybiBzY3JvbGxDb250YWluZXI7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9ICRlbFxuICogQHBhcmFtIHtOdW1iZXJ8c3RyaW5nfSB2XG4gKiBAcGFyYW0ge051bWJlcn0gc2l6ZVxuICogQHBhcmFtIHtOdW1iZXJ9IFt1bmRlcl1cbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3Zlcl1cbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuY29uc3QgY29udmVydFZhbHVlVG9QeCA9ICgkZWwsIHYsIHNpemUsIHVuZGVyLCBvdmVyKSA9PiB7XG4gIGNvbnN0IGNsYW1wTWluID0gdiA9PT0gJ21pbic7XG4gIGNvbnN0IGNsYW1wTWF4ID0gdiA9PT0gJ21heCc7XG4gIGNvbnN0IHZhbHVlID0gdiA9PT0gJ3RvcCcgfHwgdiA9PT0gJ2xlZnQnIHx8IHYgPT09ICdzdGFydCcgfHwgY2xhbXBNaW4gPyAwIDpcbiAgICAgICAgICAgICAgICB2ID09PSAnYm90dG9tJyB8fCB2ID09PSAncmlnaHQnIHx8IHYgPT09ICdlbmQnIHx8IGNsYW1wTWF4ID8gJzEwMCUnIDpcbiAgICAgICAgICAgICAgICB2ID09PSAnY2VudGVyJyA/ICc1MCUnIDpcbiAgICAgICAgICAgICAgICB2O1xuICBjb25zdCB7IG4sIHUgfSA9IGRlY29tcG9zZVJhd1ZhbHVlKHZhbHVlLCBkZWNvbXBvc2VkT3JpZ2luYWxWYWx1ZSk7XG4gIGxldCBweCA9IG47XG4gIGlmICh1ID09PSAnJScpIHtcbiAgICBweCA9IChuIC8gMTAwKSAqIHNpemU7XG4gIH0gZWxzZSBpZiAodSkge1xuICAgIHB4ID0gY29udmVydFZhbHVlVW5pdCgkZWwsIGRlY29tcG9zZWRPcmlnaW5hbFZhbHVlLCAncHgnLCB0cnVlKS5uO1xuICB9XG4gIGlmIChjbGFtcE1heCAmJiB1bmRlciA8IDApIHB4ICs9IHVuZGVyO1xuICBpZiAoY2xhbXBNaW4gJiYgb3ZlciA+IDApIHB4ICs9IG92ZXI7XG4gIHJldHVybiBweDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gJGVsXG4gKiBAcGFyYW0ge1Njcm9sbFRocmVzaG9sZFZhbHVlfSB2XG4gKiBAcGFyYW0ge051bWJlcn0gc2l6ZVxuICogQHBhcmFtIHtOdW1iZXJ9IFt1bmRlcl1cbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3Zlcl1cbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuY29uc3QgcGFyc2VCb3VuZFZhbHVlID0gKCRlbCwgdiwgc2l6ZSwgdW5kZXIsIG92ZXIpID0+IHtcbiAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gIGxldCB2YWx1ZTtcbiAgaWYgKGlzU3RyKHYpKSB7XG4gICAgY29uc3QgbWF0Y2hlZE9wZXJhdG9yID0gcmVsYXRpdmVWYWx1ZXNFeGVjUmd4LmV4ZWMoLyoqIEB0eXBlIHtTdHJpbmd9ICovKHYpKTtcbiAgICBpZiAobWF0Y2hlZE9wZXJhdG9yKSB7XG4gICAgICBjb25zdCBzcGxpdHRlciA9IG1hdGNoZWRPcGVyYXRvclswXTtcbiAgICAgIGNvbnN0IG9wZXJhdG9yID0gc3BsaXR0ZXJbMF07XG4gICAgICBjb25zdCBzcGxpdHRlZCA9IC8qKiBAdHlwZSB7U3RyaW5nfSAqLyh2KS5zcGxpdChzcGxpdHRlcik7XG4gICAgICBjb25zdCBjbGFtcE1pbiA9IHNwbGl0dGVkWzBdID09PSAnbWluJztcbiAgICAgIGNvbnN0IGNsYW1wTWF4ID0gc3BsaXR0ZWRbMF0gPT09ICdtYXgnO1xuICAgICAgY29uc3QgdmFsdWVBUHggPSBjb252ZXJ0VmFsdWVUb1B4KCRlbCwgc3BsaXR0ZWRbMF0sIHNpemUsIHVuZGVyLCBvdmVyKTtcbiAgICAgIGNvbnN0IHZhbHVlQlB4ID0gY29udmVydFZhbHVlVG9QeCgkZWwsIHNwbGl0dGVkWzFdLCBzaXplLCB1bmRlciwgb3Zlcik7XG4gICAgICBpZiAoY2xhbXBNaW4pIHtcbiAgICAgICAgY29uc3QgbWluID0gZ2V0UmVsYXRpdmVWYWx1ZShjb252ZXJ0VmFsdWVUb1B4KCRlbCwgJ21pbicsIHNpemUpLCB2YWx1ZUJQeCwgb3BlcmF0b3IpO1xuICAgICAgICB2YWx1ZSA9IG1pbiA8IHZhbHVlQVB4ID8gdmFsdWVBUHggOiBtaW47XG4gICAgICB9IGVsc2UgaWYgKGNsYW1wTWF4KSB7XG4gICAgICAgIGNvbnN0IG1heCA9IGdldFJlbGF0aXZlVmFsdWUoY29udmVydFZhbHVlVG9QeCgkZWwsICdtYXgnLCBzaXplKSwgdmFsdWVCUHgsIG9wZXJhdG9yKTtcbiAgICAgICAgdmFsdWUgPSBtYXggPiB2YWx1ZUFQeCA/IHZhbHVlQVB4IDogbWF4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBnZXRSZWxhdGl2ZVZhbHVlKHZhbHVlQVB4LCB2YWx1ZUJQeCwgb3BlcmF0b3IpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGNvbnZlcnRWYWx1ZVRvUHgoJGVsLCB2LCBzaXplLCB1bmRlciwgb3Zlcik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhbHVlID0gLyoqIEB0eXBlIHtOdW1iZXJ9ICovKHYpO1xuICB9XG4gIHJldHVybiByb3VuZCh2YWx1ZSwgMCk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7SlNBbmltYXRpb259IGxpbmtlZFxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmNvbnN0IGdldEFuaW1hdGlvbkRvbVRhcmdldCA9IGxpbmtlZCA9PiB7XG4gIGxldCAkbGlua2VkVGFyZ2V0O1xuICBjb25zdCBsaW5rZWRUYXJnZXRzID0gbGlua2VkLnRhcmdldHM7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gbGlua2VkVGFyZ2V0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCB0YXJnZXQgPSBsaW5rZWRUYXJnZXRzW2ldO1xuICAgIGlmICh0YXJnZXRbaXNEb21TeW1ib2xdKSB7XG4gICAgICAkbGlua2VkVGFyZ2V0ID0gLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi8odGFyZ2V0KTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJGxpbmtlZFRhcmdldDtcbn07XG5cbmxldCBzY3JvbGxlckluZGV4ID0gMDtcblxuY29uc3QgZGVidWdDb2xvcnMgPSBbJyNGRjRCNEInLCcjRkY5NzFCJywnI0ZGQzczMCcsJyNGOUY2NDAnLCcjN0FGRjVBJywnIzE4RkY3NCcsJyMxN0UwOUInLCcjM0NGRkVDJywnIzA1REJFOScsJyMzM0IzRjEnLCcjNjM4Q0Y5JywnI0M1NjNGRScsJyNGRjRGQ0YnLCcjRjkzRjhBJ107XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gU2Nyb2xsVGhyZXNob2xkUGFyYW1cbiAqIEBwcm9wZXJ0eSB7U2Nyb2xsVGhyZXNob2xkVmFsdWV9IFt0YXJnZXRdXG4gKiBAcHJvcGVydHkge1Njcm9sbFRocmVzaG9sZFZhbHVlfSBbY29udGFpbmVyXVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIFNjcm9sbE9ic2VydmVyQXhpc0NhbGxiYWNrXG4gKiBAcGFyYW0ge1Njcm9sbE9ic2VydmVyfSBzZWxmXG4gKiBAcmV0dXJuIHsneCd8J3knfVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIFNjcm9sbFRocmVzaG9sZENhbGxiYWNrXG4gKiBAcGFyYW0ge1Njcm9sbE9ic2VydmVyfSBzZWxmXG4gKiBAcmV0dXJuIHtTY3JvbGxUaHJlc2hvbGRWYWx1ZXxTY3JvbGxUaHJlc2hvbGRQYXJhbX1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFNjcm9sbE9ic2VydmVyUGFyYW1zXG4gKiBAcHJvcGVydHkge051bWJlcnxTdHJpbmd9IFtpZF1cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbnxOdW1iZXJ8U3RyaW5nfEVhc2luZ1BhcmFtfSBbc3luY11cbiAqIEBwcm9wZXJ0eSB7VGFyZ2V0c1BhcmFtfSBbY29udGFpbmVyXVxuICogQHByb3BlcnR5IHtUYXJnZXRzUGFyYW19IFt0YXJnZXRdXG4gKiBAcHJvcGVydHkgeyd4J3wneSd8U2Nyb2xsT2JzZXJ2ZXJBeGlzQ2FsbGJhY2t8KChvYnNlcnZlcjogU2Nyb2xsT2JzZXJ2ZXIpID0+ICd4J3wneSd8U2Nyb2xsT2JzZXJ2ZXJBeGlzQ2FsbGJhY2spfSBbYXhpc11cbiAqIEBwcm9wZXJ0eSB7U2Nyb2xsVGhyZXNob2xkVmFsdWV8U2Nyb2xsVGhyZXNob2xkUGFyYW18U2Nyb2xsVGhyZXNob2xkQ2FsbGJhY2t8KChvYnNlcnZlcjogU2Nyb2xsT2JzZXJ2ZXIpID0+IFNjcm9sbFRocmVzaG9sZFZhbHVlfFNjcm9sbFRocmVzaG9sZFBhcmFtfFNjcm9sbFRocmVzaG9sZENhbGxiYWNrKX0gW2VudGVyXVxuICogQHByb3BlcnR5IHtTY3JvbGxUaHJlc2hvbGRWYWx1ZXxTY3JvbGxUaHJlc2hvbGRQYXJhbXxTY3JvbGxUaHJlc2hvbGRDYWxsYmFja3woKG9ic2VydmVyOiBTY3JvbGxPYnNlcnZlcikgPT4gU2Nyb2xsVGhyZXNob2xkVmFsdWV8U2Nyb2xsVGhyZXNob2xkUGFyYW18U2Nyb2xsVGhyZXNob2xkQ2FsbGJhY2spfSBbbGVhdmVdXG4gKiBAcHJvcGVydHkge0Jvb2xlYW58KChvYnNlcnZlcjogU2Nyb2xsT2JzZXJ2ZXIpID0+IEJvb2xlYW4pfSBbcmVwZWF0XVxuICogQHByb3BlcnR5IHtCb29sZWFufSBbZGVidWddXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrPFNjcm9sbE9ic2VydmVyPn0gW29uRW50ZXJdXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrPFNjcm9sbE9ic2VydmVyPn0gW29uTGVhdmVdXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrPFNjcm9sbE9ic2VydmVyPn0gW29uRW50ZXJGb3J3YXJkXVxuICogQHByb3BlcnR5IHtDYWxsYmFjazxTY3JvbGxPYnNlcnZlcj59IFtvbkxlYXZlRm9yd2FyZF1cbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2s8U2Nyb2xsT2JzZXJ2ZXI+fSBbb25FbnRlckJhY2t3YXJkXVxuICogQHByb3BlcnR5IHtDYWxsYmFjazxTY3JvbGxPYnNlcnZlcj59IFtvbkxlYXZlQmFja3dhcmRdXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrPFNjcm9sbE9ic2VydmVyPn0gW29uVXBkYXRlXVxuICogQHByb3BlcnR5IHtDYWxsYmFjazxTY3JvbGxPYnNlcnZlcj59IFtvblN5bmNDb21wbGV0ZV1cbiAqL1xuXG5jbGFzcyBTY3JvbGxPYnNlcnZlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge1Njcm9sbE9ic2VydmVyUGFyYW1zfSBwYXJhbWV0ZXJzXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzID0ge30pIHtcbiAgICBpZiAoZ2xvYmFscy5zY29wZSkgZ2xvYmFscy5zY29wZS5yZXZlcnRpYmxlcy5wdXNoKHRoaXMpO1xuICAgIGNvbnN0IHN5bmNNb2RlID0gc2V0VmFsdWUocGFyYW1ldGVycy5zeW5jLCAncGxheSBwYXVzZScpO1xuICAgIGNvbnN0IGVhc2UgPSBzeW5jTW9kZSA/IHBhcnNlRWFzaW5ncygvKiogQHR5cGUge0Vhc2luZ1BhcmFtfSAqLyhzeW5jTW9kZSkpIDogbnVsbDtcbiAgICBjb25zdCBpc0xpbmVhciA9IHN5bmNNb2RlICYmIChzeW5jTW9kZSA9PT0gJ2xpbmVhcicgfHwgc3luY01vZGUgPT09IG5vbmUpO1xuICAgIGNvbnN0IGlzRWFzZSA9IHN5bmNNb2RlICYmICEoZWFzZSA9PT0gbm9uZSAmJiAhaXNMaW5lYXIpO1xuICAgIGNvbnN0IGlzU21vb3RoID0gc3luY01vZGUgJiYgKGlzTnVtKHN5bmNNb2RlKSB8fCBzeW5jTW9kZSA9PT0gdHJ1ZSB8fCBpc0xpbmVhcik7XG4gICAgY29uc3QgaXNNZXRob2RzID0gc3luY01vZGUgJiYgKGlzU3RyKHN5bmNNb2RlKSAmJiAhaXNFYXNlICYmICFpc1Ntb290aCk7XG4gICAgY29uc3Qgc3luY01ldGhvZHMgPSBpc01ldGhvZHMgPyAvKiogQHR5cGUge1N0cmluZ30gKi8oc3luY01vZGUpLnNwbGl0KCcgJykubWFwKFxuICAgICAgKC8qKiBAdHlwZSB7U3RyaW5nfSAqL20pID0+ICgpID0+IHtcbiAgICAgICAgY29uc3QgbGlua2VkID0gdGhpcy5saW5rZWQ7XG4gICAgICAgIHJldHVybiBsaW5rZWQgJiYgbGlua2VkW21dID8gbGlua2VkW21dKCkgOiBudWxsO1xuICAgICAgfVxuICAgICkgOiBudWxsO1xuICAgIGNvbnN0IGJpRGlyU3luYyA9IGlzTWV0aG9kcyAmJiBzeW5jTWV0aG9kcy5sZW5ndGggPiAyO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMuaW5kZXggPSBzY3JvbGxlckluZGV4Kys7XG4gICAgLyoqIEB0eXBlIHtTdHJpbmd8TnVtYmVyfSAqL1xuICAgIHRoaXMuaWQgPSAhaXNVbmQocGFyYW1ldGVycy5pZCkgPyBwYXJhbWV0ZXJzLmlkIDogdGhpcy5pbmRleDtcbiAgICAvKiogQHR5cGUge1Njcm9sbENvbnRhaW5lcn0gKi9cbiAgICB0aGlzLmNvbnRhaW5lciA9IHJlZ2lzdGVyQW5kR2V0U2Nyb2xsQ29udGFpbmVyKHBhcmFtZXRlcnMuY29udGFpbmVyKTtcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xuICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICAvKiogQHR5cGUge1RpY2thYmxlfFdBQVBJQW5pbWF0aW9ufSAqL1xuICAgIHRoaXMubGlua2VkID0gbnVsbDtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy5yZXBlYXQgPSBudWxsO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLmhvcml6b250YWwgPSBudWxsO1xuICAgIC8qKiBAdHlwZSB7U2Nyb2xsVGhyZXNob2xkUGFyYW18U2Nyb2xsVGhyZXNob2xkVmFsdWV8U2Nyb2xsVGhyZXNob2xkQ2FsbGJhY2t9ICovXG4gICAgdGhpcy5lbnRlciA9IG51bGw7XG4gICAgLyoqIEB0eXBlIHtTY3JvbGxUaHJlc2hvbGRQYXJhbXxTY3JvbGxUaHJlc2hvbGRWYWx1ZXxTY3JvbGxUaHJlc2hvbGRDYWxsYmFja30gKi9cbiAgICB0aGlzLmxlYXZlID0gbnVsbDtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy5zeW5jID0gaXNFYXNlIHx8IGlzU21vb3RoIHx8ICEhc3luY01ldGhvZHM7XG4gICAgLyoqIEB0eXBlIHtFYXNpbmdGdW5jdGlvbn0gKi9cbiAgICB0aGlzLnN5bmNFYXNlID0gaXNFYXNlID8gZWFzZSA6IG51bGw7XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5zeW5jU21vb3RoID0gaXNTbW9vdGggPyBzeW5jTW9kZSA9PT0gdHJ1ZSB8fCBpc0xpbmVhciA/IDEgOiAvKiogQHR5cGUge051bWJlcn0gKi8oc3luY01vZGUpIDogbnVsbDtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPFNjcm9sbE9ic2VydmVyPn0gKi9cbiAgICB0aGlzLm9uU3luY0VudGVyID0gc3luY01ldGhvZHMgJiYgIWJpRGlyU3luYyAmJiBzeW5jTWV0aG9kc1swXSA/IHN5bmNNZXRob2RzWzBdIDogbm9vcDtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPFNjcm9sbE9ic2VydmVyPn0gKi9cbiAgICB0aGlzLm9uU3luY0xlYXZlID0gc3luY01ldGhvZHMgJiYgIWJpRGlyU3luYyAmJiBzeW5jTWV0aG9kc1sxXSA/IHN5bmNNZXRob2RzWzFdIDogbm9vcDtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPFNjcm9sbE9ic2VydmVyPn0gKi9cbiAgICB0aGlzLm9uU3luY0VudGVyRm9yd2FyZCA9IHN5bmNNZXRob2RzICYmIGJpRGlyU3luYyAmJiBzeW5jTWV0aG9kc1swXSA/IHN5bmNNZXRob2RzWzBdIDogbm9vcDtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPFNjcm9sbE9ic2VydmVyPn0gKi9cbiAgICB0aGlzLm9uU3luY0xlYXZlRm9yd2FyZCA9IHN5bmNNZXRob2RzICYmIGJpRGlyU3luYyAmJiBzeW5jTWV0aG9kc1sxXSA/IHN5bmNNZXRob2RzWzFdIDogbm9vcDtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPFNjcm9sbE9ic2VydmVyPn0gKi9cbiAgICB0aGlzLm9uU3luY0VudGVyQmFja3dhcmQgPSBzeW5jTWV0aG9kcyAmJiBiaURpclN5bmMgJiYgc3luY01ldGhvZHNbMl0gPyBzeW5jTWV0aG9kc1syXSA6IG5vb3A7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazxTY3JvbGxPYnNlcnZlcj59ICovXG4gICAgdGhpcy5vblN5bmNMZWF2ZUJhY2t3YXJkID0gc3luY01ldGhvZHMgJiYgYmlEaXJTeW5jICYmIHN5bmNNZXRob2RzWzNdID8gc3luY01ldGhvZHNbM10gOiBub29wO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8U2Nyb2xsT2JzZXJ2ZXI+fSAqL1xuICAgIHRoaXMub25FbnRlciA9IHBhcmFtZXRlcnMub25FbnRlciB8fCBub29wO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8U2Nyb2xsT2JzZXJ2ZXI+fSAqL1xuICAgIHRoaXMub25MZWF2ZSA9IHBhcmFtZXRlcnMub25MZWF2ZSB8fCBub29wO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8U2Nyb2xsT2JzZXJ2ZXI+fSAqL1xuICAgIHRoaXMub25FbnRlckZvcndhcmQgPSBwYXJhbWV0ZXJzLm9uRW50ZXJGb3J3YXJkIHx8IG5vb3A7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazxTY3JvbGxPYnNlcnZlcj59ICovXG4gICAgdGhpcy5vbkxlYXZlRm9yd2FyZCA9IHBhcmFtZXRlcnMub25MZWF2ZUZvcndhcmQgfHwgbm9vcDtcbiAgICAvKiogQHR5cGUge0NhbGxiYWNrPFNjcm9sbE9ic2VydmVyPn0gKi9cbiAgICB0aGlzLm9uRW50ZXJCYWNrd2FyZCA9IHBhcmFtZXRlcnMub25FbnRlckJhY2t3YXJkIHx8IG5vb3A7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazxTY3JvbGxPYnNlcnZlcj59ICovXG4gICAgdGhpcy5vbkxlYXZlQmFja3dhcmQgPSBwYXJhbWV0ZXJzLm9uTGVhdmVCYWNrd2FyZCB8fCBub29wO1xuICAgIC8qKiBAdHlwZSB7Q2FsbGJhY2s8U2Nyb2xsT2JzZXJ2ZXI+fSAqL1xuICAgIHRoaXMub25VcGRhdGUgPSBwYXJhbWV0ZXJzLm9uVXBkYXRlIHx8IG5vb3A7XG4gICAgLyoqIEB0eXBlIHtDYWxsYmFjazxTY3JvbGxPYnNlcnZlcj59ICovXG4gICAgdGhpcy5vblN5bmNDb21wbGV0ZSA9IHBhcmFtZXRlcnMub25TeW5jQ29tcGxldGUgfHwgbm9vcDtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy5yZXZlcnRlZCA9IGZhbHNlO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLmJlZ2FuID0gZmFsc2U7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMuaXNJblZpZXcgPSBmYWxzZTtcbiAgICAvKiogQHR5cGUge0Jvb2xlYW59ICovXG4gICAgdGhpcy5mb3JjZUVudGVyID0gZmFsc2U7XG4gICAgLyoqIEB0eXBlIHtCb29sZWFufSAqL1xuICAgIHRoaXMuaGFzRW50ZXJlZCA9IGZhbHNlO1xuICAgIC8qKiBAdHlwZSB7QXJyYXkuPE51bWJlcj59ICovXG4gICAgdGhpcy5vZmZzZXRzID0gW107XG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9ICovXG4gICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMub2Zmc2V0U3RhcnQgPSAwO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIHRoaXMub2Zmc2V0RW5kID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLmRpc3RhbmNlID0gMDtcbiAgICAvKiogQHR5cGUge051bWJlcn0gKi9cbiAgICB0aGlzLnByZXZQcm9ncmVzcyA9IDA7XG4gICAgLyoqIEB0eXBlIHtBcnJheX0gKi9cbiAgICB0aGlzLnRocmVzaG9sZHMgPSBbJ3N0YXJ0JywgJ2VuZCcsICdlbmQnLCAnc3RhcnQnXTtcbiAgICAvKiogQHR5cGUge1tOdW1iZXIsIE51bWJlciwgTnVtYmVyLCBOdW1iZXJdfSAqL1xuICAgIHRoaXMuY29vcmRzID0gWzAsIDAsIDAsIDBdO1xuICAgIC8qKiBAdHlwZSB7SlNBbmltYXRpb259ICovXG4gICAgdGhpcy5kZWJ1Z1N0eWxlcyA9IG51bGw7XG4gICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi9cbiAgICB0aGlzLiRkZWJ1ZyA9IG51bGw7XG4gICAgLyoqIEB0eXBlIHtTY3JvbGxPYnNlcnZlclBhcmFtc30gKi9cbiAgICB0aGlzLl9wYXJhbXMgPSBwYXJhbWV0ZXJzO1xuICAgIC8qKiBAdHlwZSB7Qm9vbGVhbn0gKi9cbiAgICB0aGlzLl9kZWJ1ZyA9IHNldFZhbHVlKHBhcmFtZXRlcnMuZGVidWcsIGZhbHNlKTtcbiAgICAvKiogQHR5cGUge1Njcm9sbE9ic2VydmVyfSAqL1xuICAgIHRoaXMuX25leHQgPSBudWxsO1xuICAgIC8qKiBAdHlwZSB7U2Nyb2xsT2JzZXJ2ZXJ9ICovXG4gICAgdGhpcy5fcHJldiA9IG51bGw7XG4gICAgYWRkQ2hpbGQodGhpcy5jb250YWluZXIsIHRoaXMpO1xuICAgIC8vIFdhaXQgZm9yIHRoZSBuZXh0IGZyYW1lIHRvIGFkZCB0byB0aGUgY29udGFpbmVyIGluIG9yZGVyIHRvIGhhbmRsZSBjYWxscyB0byBsaW5rKClcbiAgICBzeW5jKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnJldmVydGVkKSByZXR1cm47XG4gICAgICBpZiAoIXRoaXMudGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovKHBhcnNlVGFyZ2V0cyhwYXJhbWV0ZXJzLnRhcmdldClbMF0pO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldCB8fCBkb2MuYm9keTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fZGVidWcpIHRoaXMuZGVidWcoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1RpY2thYmxlfFdBQVBJQW5pbWF0aW9ufSBsaW5rZWRcbiAgICovXG4gIGxpbmsobGlua2VkKSB7XG4gICAgaWYgKGxpbmtlZCkge1xuICAgICAgLy8gTWFrZSBzdXJlIHRvIHBhdXNlIHRoZSBsaW5rZWQgb2JqZWN0IGluIGNhc2UgaXQncyBhZGRlZCBsYXRlclxuICAgICAgbGlua2VkLnBhdXNlKCk7XG4gICAgICB0aGlzLmxpbmtlZCA9IGxpbmtlZDtcbiAgICAgIC8vIFRyeSB0byB1c2UgYSB0YXJnZXQgb2YgdGhlIGxpbmtlZCBvYmplY3QgaWYgbm8gdGFyZ2V0IHBhcmFtZXRlcnMgc3BlY2lmaWVkXG4gICAgICBpZiAoIXRoaXMuX3BhcmFtcy50YXJnZXQpIHtcbiAgICAgICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi9cbiAgICAgICAgbGV0ICRsaW5rZWRUYXJnZXQ7XG4gICAgICAgIGlmICghaXNVbmQoLyoqIEB0eXBlIHtKU0FuaW1hdGlvbn0gKi8obGlua2VkKS50YXJnZXRzKSkge1xuICAgICAgICAgICRsaW5rZWRUYXJnZXQgPSBnZXRBbmltYXRpb25Eb21UYXJnZXQoLyoqIEB0eXBlIHtKU0FuaW1hdGlvbn0gKi8obGlua2VkKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yRWFjaENoaWxkcmVuKC8qKiBAdHlwZSB7VGltZWxpbmV9ICovKGxpbmtlZCksICgvKiogQHR5cGUge0pTQW5pbWF0aW9ufSAqL2NoaWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hpbGQudGFyZ2V0cyAmJiAhJGxpbmtlZFRhcmdldCkge1xuICAgICAgICAgICAgICAkbGlua2VkVGFyZ2V0ID0gZ2V0QW5pbWF0aW9uRG9tVGFyZ2V0KC8qKiBAdHlwZSB7SlNBbmltYXRpb259ICovKGNoaWxkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmFsbGJhY2sgdG8gYm9keSBpZiBubyB0YXJnZXQgZm91bmRcbiAgICAgICAgdGhpcy50YXJnZXQgPSAkbGlua2VkVGFyZ2V0IHx8IGRvYy5ib2R5O1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgdmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLnZlbG9jaXR5O1xuICB9XG5cbiAgZ2V0IGJhY2t3YXJkKCkge1xuICAgIHJldHVybiB0aGlzLmhvcml6b250YWwgPyB0aGlzLmNvbnRhaW5lci5iYWNrd2FyZFggOiB0aGlzLmNvbnRhaW5lci5iYWNrd2FyZFk7XG4gIH1cblxuICBnZXQgc2Nyb2xsKCkge1xuICAgIHJldHVybiB0aGlzLmhvcml6b250YWwgPyB0aGlzLmNvbnRhaW5lci5zY3JvbGxYIDogdGhpcy5jb250YWluZXIuc2Nyb2xsWTtcbiAgfVxuXG4gIGdldCBwcm9ncmVzcygpIHtcbiAgICBjb25zdCBwID0gKHRoaXMuc2Nyb2xsIC0gdGhpcy5vZmZzZXRTdGFydCkgLyB0aGlzLmRpc3RhbmNlO1xuICAgIHJldHVybiBwID09PSBJbmZpbml0eSB8fCBpc05hTihwKSA/IDAgOiByb3VuZChjbGFtcChwLCAwLCAxKSwgNik7XG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMucmV2ZXJ0ZWQgPSBmYWxzZTtcbiAgICBjb25zdCBwYXJhbXMgPSB0aGlzLl9wYXJhbXM7XG4gICAgdGhpcy5yZXBlYXQgPSBzZXRWYWx1ZShwYXJzZVNjcm9sbE9ic2VydmVyRnVuY3Rpb25QYXJhbWV0ZXIocGFyYW1zLnJlcGVhdCwgdGhpcyksIHRydWUpO1xuICAgIHRoaXMuaG9yaXpvbnRhbCA9IHNldFZhbHVlKHBhcnNlU2Nyb2xsT2JzZXJ2ZXJGdW5jdGlvblBhcmFtZXRlcihwYXJhbXMuYXhpcywgdGhpcyksICd5JykgPT09ICd4JztcbiAgICB0aGlzLmVudGVyID0gc2V0VmFsdWUocGFyc2VTY3JvbGxPYnNlcnZlckZ1bmN0aW9uUGFyYW1ldGVyKHBhcmFtcy5lbnRlciwgdGhpcyksICdlbmQgc3RhcnQnKTtcbiAgICB0aGlzLmxlYXZlID0gc2V0VmFsdWUocGFyc2VTY3JvbGxPYnNlcnZlckZ1bmN0aW9uUGFyYW1ldGVyKHBhcmFtcy5sZWF2ZSwgdGhpcyksICdzdGFydCBlbmQnKTtcbiAgICB0aGlzLnVwZGF0ZUJvdW5kcygpO1xuICAgIHRoaXMuaGFuZGxlU2Nyb2xsKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW1vdmVEZWJ1ZygpIHtcbiAgICBpZiAodGhpcy4kZGVidWcpIHtcbiAgICAgIHRoaXMuJGRlYnVnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy4kZGVidWcpO1xuICAgICAgdGhpcy4kZGVidWcgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5kZWJ1Z1N0eWxlcykge1xuICAgICAgdGhpcy5kZWJ1Z1N0eWxlcy5yZXZlcnQoKTtcbiAgICAgIHRoaXMuJGRlYnVnID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkZWJ1ZygpIHtcbiAgICB0aGlzLnJlbW92ZURlYnVnKCk7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgY29uc3QgaXNIb3JpID0gdGhpcy5ob3Jpem9udGFsO1xuICAgIGNvbnN0ICRleGlzdGluZ0RlYnVnID0gY29udGFpbmVyLmVsZW1lbnQucXVlcnlTZWxlY3RvcignOnNjb3BlID4gLmFuaW1lanMtb25zY3JvbGwtZGVidWcnKTtcbiAgICBjb25zdCAkZGVidWcgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgJHRocmVzaG9sZHMgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgJHRyaWdnZXJzID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNvbG9yID0gZGVidWdDb2xvcnNbdGhpcy5pbmRleCAlIGRlYnVnQ29sb3JzLmxlbmd0aF07XG4gICAgY29uc3QgdXNlV2luID0gY29udGFpbmVyLnVzZVdpbjtcbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IHVzZVdpbiA/IGNvbnRhaW5lci53aW5XaWR0aCA6IGNvbnRhaW5lci53aWR0aDtcbiAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSB1c2VXaW4gPyBjb250YWluZXIud2luSGVpZ2h0IDogY29udGFpbmVyLmhlaWdodDtcbiAgICBjb25zdCBzY3JvbGxXaWR0aCA9IGNvbnRhaW5lci5zY3JvbGxXaWR0aDtcbiAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBjb250YWluZXIuc2Nyb2xsSGVpZ2h0O1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLmNvbnRhaW5lci53aWR0aCA+IDM2MCA/IDMyMCA6IDI2MDtcbiAgICBjb25zdCBvZmZMZWZ0ID0gaXNIb3JpID8gMCA6IDEwO1xuICAgIGNvbnN0IG9mZlRvcCA9IGlzSG9yaSA/IDEwIDogMDtcbiAgICBjb25zdCBoYWxmID0gaXNIb3JpID8gMjQgOiBzaXplIC8gMjtcbiAgICBjb25zdCBsYWJlbEhlaWdodCA9IGlzSG9yaSA/IGhhbGYgOiAxNTtcbiAgICBjb25zdCBsYWJlbFdpZHRoID0gaXNIb3JpID8gNjAgOiBoYWxmO1xuICAgIGNvbnN0IGxhYmVsU2l6ZSA9IGlzSG9yaSA/IGxhYmVsV2lkdGggOiBsYWJlbEhlaWdodDtcbiAgICBjb25zdCByZXBlYXQgPSBpc0hvcmkgPyAncmVwZWF0LXgnIDogJ3JlcGVhdC15JztcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdlxuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cbiAgICBjb25zdCBncmFkaWVudE9mZnNldCA9IHYgPT4gaXNIb3JpID8gJzBweCAnKyh2KSsncHgnIDogKHYpKydweCcrJyAycHgnO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqL1xuICAgIGNvbnN0IGxpbmVDU1MgPSAoYykgPT4gYGxpbmVhci1ncmFkaWVudCgke2lzSG9yaSA/IDkwIDogMH1kZWcsICR7Y30gMnB4LCB0cmFuc3BhcmVudCAxcHgpYDtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBsXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gd1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBoXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqL1xuICAgIGNvbnN0IGJhc2VDU1MgPSAocCwgbCwgdCwgdywgaCkgPT4gYHBvc2l0aW9uOiR7cH07bGVmdDoke2x9cHg7dG9wOiR7dH1weDt3aWR0aDoke3d9cHg7aGVpZ2h0OiR7aH1weDtgO1xuICAgICRkZWJ1Zy5zdHlsZS5jc3NUZXh0ID0gYCR7YmFzZUNTUygnYWJzb2x1dGUnLCBvZmZMZWZ0LCBvZmZUb3AsIGlzSG9yaSA/IHNjcm9sbFdpZHRoIDogc2l6ZSwgaXNIb3JpID8gc2l6ZSA6IHNjcm9sbEhlaWdodCl9XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIHotaW5kZXg6ICR7dGhpcy5jb250YWluZXIuekluZGV4Kyt9O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiAke2lzSG9yaSA/ICdjb2x1bW4nIDogJ3Jvdyd9O1xuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDBweCByZ2JhKDAsMCwwLC43NSkpO1xuICAgIGA7XG4gICAgJHRocmVzaG9sZHMuc3R5bGUuY3NzVGV4dCA9IGAke2Jhc2VDU1MoJ3N0aWNreScsIDAsIDAsIGlzSG9yaSA/IGNvbnRhaW5lcldpZHRoIDogaGFsZiwgaXNIb3JpID8gaGFsZiA6IGNvbnRhaW5lckhlaWdodCl9YDtcbiAgICBpZiAoISRleGlzdGluZ0RlYnVnKSB7XG4gICAgICAkdGhyZXNob2xkcy5zdHlsZS5jc3NUZXh0ICs9IGBiYWNrZ3JvdW5kOlxuICAgICAgICAke2xpbmVDU1MoJyNGRkZGJyl9JHtncmFkaWVudE9mZnNldChoYWxmLTEwKX0gLyAke2lzSG9yaSA/ICcxMDBweCAxMDBweCcgOiAnMTAwcHggMTAwcHgnfSAke3JlcGVhdH0sXG4gICAgICAgICR7bGluZUNTUygnI0ZGRjgnKX0ke2dyYWRpZW50T2Zmc2V0KGhhbGYtMTApfSAvICR7aXNIb3JpID8gJzEwcHggMTBweCcgOiAnMTBweCAxMHB4J30gJHtyZXBlYXR9O1xuICAgICAgYDtcbiAgICB9XG4gICAgJHRyaWdnZXJzLnN0eWxlLmNzc1RleHQgPSBgJHtiYXNlQ1NTKCdyZWxhdGl2ZScsIDAsIDAsIGlzSG9yaSA/IHNjcm9sbFdpZHRoIDogaGFsZiwgaXNIb3JpID8gaGFsZiA6IHNjcm9sbEhlaWdodCl9YDtcbiAgICBpZiAoISRleGlzdGluZ0RlYnVnKSB7XG4gICAgICAkdHJpZ2dlcnMuc3R5bGUuY3NzVGV4dCArPSBgYmFja2dyb3VuZDpcbiAgICAgICAgJHtsaW5lQ1NTKCcjRkZGRicpfSR7Z3JhZGllbnRPZmZzZXQoMCl9IC8gJHtpc0hvcmkgPyAnMTAwcHggMTBweCcgOiAnMTBweCAxMDBweCd9ICR7cmVwZWF0fSxcbiAgICAgICAgJHtsaW5lQ1NTKCcjRkZGOCcpfSR7Z3JhZGllbnRPZmZzZXQoMCl9IC8gJHtpc0hvcmkgPyAnMTBweCAwcHgnIDogJzBweCAxMHB4J30gJHtyZXBlYXR9O1xuICAgICAgYDtcbiAgICB9XG4gICAgY29uc3QgbGFiZWxzID0gWycgZW50ZXI6ICcsICcgbGVhdmU6ICddO1xuICAgIHRoaXMuY29vcmRzLmZvckVhY2goKHYsIGkpID0+IHtcbiAgICAgIGNvbnN0IGlzVmlldyA9IGkgPiAxO1xuICAgICAgY29uc3QgdmFsdWUgPSAoaXNWaWV3ID8gMCA6IHRoaXMub2Zmc2V0KSArIHY7XG4gICAgICBjb25zdCBpc1RhaWwgPSBpICUgMjtcbiAgICAgIGNvbnN0IGlzRmlyc3QgPSB2YWx1ZSA8IGxhYmVsU2l6ZTtcbiAgICAgIGNvbnN0IGlzT3ZlciA9IHZhbHVlID4gKGlzVmlldyA/IGlzSG9yaSA/IGNvbnRhaW5lcldpZHRoIDogY29udGFpbmVySGVpZ2h0IDogaXNIb3JpID8gc2Nyb2xsV2lkdGggOiBzY3JvbGxIZWlnaHQpIC0gbGFiZWxTaXplO1xuICAgICAgY29uc3QgaXNGbGlwID0gKGlzVmlldyA/IGlzVGFpbCAmJiAhaXNGaXJzdCA6ICFpc1RhaWwgJiYgIWlzRmlyc3QpIHx8IGlzT3ZlcjtcbiAgICAgIGNvbnN0ICRsYWJlbCA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0ICR0ZXh0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgZGlyUHJvcCA9IGlzSG9yaSA/IGlzRmxpcCA/ICdyaWdodCcgOiAnbGVmdCcgOiBpc0ZsaXAgPyAnYm90dG9tJyA6ICd0b3AnO1xuICAgICAgY29uc3QgZmxpcE9mZnNldCA9IGlzRmxpcCA/IChpc0hvcmkgPyBsYWJlbFdpZHRoIDogbGFiZWxIZWlnaHQpICsgKCFpc1ZpZXcgPyBpc0hvcmkgPyAtMSA6IC0yIDogaXNIb3JpID8gLTEgOiBpc092ZXIgPyAwIDogLTIpIDogIWlzVmlldyA/IGlzSG9yaSA/IDEgOiAwIDogaXNIb3JpID8gMSA6IDA7XG4gICAgICAvLyAkdGV4dC5pbm5lckhUTUwgPSBgJHshaXNWaWV3ID8gJycgOiBsYWJlbHNbaXNUYWlsXSArICcgJ30ke3RoaXMuaWR9OiAke3RoaXMudGhyZXNob2xkc1tpXX0gJHtpc1ZpZXcgPyAnJyA6IGxhYmVsc1tpc1RhaWxdfWA7XG4gICAgICAkdGV4dC5pbm5lckhUTUwgPSBgJHt0aGlzLmlkfSR7bGFiZWxzW2lzVGFpbF19JHt0aGlzLnRocmVzaG9sZHNbaV19YDtcbiAgICAgICRsYWJlbC5zdHlsZS5jc3NUZXh0ID0gYCR7YmFzZUNTUygnYWJzb2x1dGUnLCAwLCAwLCBsYWJlbFdpZHRoLCBsYWJlbEhlaWdodCl9XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiAke2lzSG9yaSA/ICdjb2x1bW4nIDogJ3Jvdyd9O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtJHtpc1ZpZXcgPyAnc3RhcnQnIDogJ2VuZCd9O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC0ke2lzRmxpcCA/ICdlbmQnIDogJ3N0YXJ0J307XG4gICAgICAgIGJvcmRlci0ke2RpclByb3B9OiAycHggJHtpc1RhaWwgPyAnc29saWQnIDogJ3NvbGlkJ30gJHtjb2xvcn07XG4gICAgICBgO1xuICAgICAgJHRleHQuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWF4LXdpZHRoOiAkeyhzaXplIC8gMikgLSAxMH1weDtcbiAgICAgICAgaGVpZ2h0OiAke2xhYmVsSGVpZ2h0fTtcbiAgICAgICAgbWFyZ2luLSR7aXNIb3JpID8gaXNGbGlwID8gJ3JpZ2h0JyA6ICdsZWZ0JyA6IGlzRmxpcCA/ICdib3R0b20nIDogJ3RvcCd9OiAtMnB4O1xuICAgICAgICBwYWRkaW5nOiAxcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIG1vbm9zcGFjZTtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4wMjVlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDlweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogJHtpc0hvcmkgJiYgaXNGbGlwIHx8ICFpc0hvcmkgJiYgIWlzVmlldyA/ICdyaWdodCcgOiAnbGVmdCd9O1xuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgY29sb3I6ICR7aXNUYWlsID8gY29sb3IgOiAncmdiYSgwLDAsMCwuNzUpJ307XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7aXNUYWlsID8gJ3JnYmEoMCwwLDAsLjY1KScgOiBjb2xvcn07XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7aXNUYWlsID8gY29sb3IgOiAndHJhbnNwYXJlbnQnfTtcbiAgICAgICAgYm9yZGVyLSR7aXNIb3JpID8gaXNGbGlwID8gJ3RvcC1sZWZ0JyA6ICd0b3AtcmlnaHQnIDogaXNGbGlwID8gJ3RvcC1sZWZ0JyA6ICdib3R0b20tbGVmdCd9LXJhZGl1czogNXB4O1xuICAgICAgICBib3JkZXItJHtpc0hvcmkgPyBpc0ZsaXAgPyAnYm90dG9tLWxlZnQnIDogJ2JvdHRvbS1yaWdodCcgOiBpc0ZsaXAgPyAndG9wLXJpZ2h0JyA6ICdib3R0b20tcmlnaHQnfS1yYWRpdXM6IDVweDtcbiAgICAgIGA7XG4gICAgICAkbGFiZWwuYXBwZW5kQ2hpbGQoJHRleHQpO1xuICAgICAgbGV0IHBvc2l0aW9uID0gdmFsdWUgLSBmbGlwT2Zmc2V0ICsgKGlzSG9yaSA/IDEgOiAwKTtcbiAgICAgICRsYWJlbC5zdHlsZVtpc0hvcmkgPyAnbGVmdCcgOiAndG9wJ10gPSBgJHtwb3NpdGlvbn1weGA7XG4gICAgICAvLyAkbGFiZWwuc3R5bGVbaXNIb3JpID8gJ2xlZnQnIDogJ3RvcCddID0gdmFsdWUgLSBmbGlwT2Zmc2V0ICsgKCFpc0ZsaXAgJiYgaXNGaXJzdCAmJiAhaXNWaWV3ID8gMSA6IGlzRmxpcCA/IDAgOiAtMikgKyAncHgnO1xuICAgICAgKGlzVmlldyA/ICR0aHJlc2hvbGRzIDogJHRyaWdnZXJzKS5hcHBlbmRDaGlsZCgkbGFiZWwpO1xuICAgIH0pO1xuXG4gICAgJGRlYnVnLmFwcGVuZENoaWxkKCR0aHJlc2hvbGRzKTtcbiAgICAkZGVidWcuYXBwZW5kQ2hpbGQoJHRyaWdnZXJzKTtcbiAgICBjb250YWluZXIuZWxlbWVudC5hcHBlbmRDaGlsZCgkZGVidWcpO1xuXG4gICAgaWYgKCEkZXhpc3RpbmdEZWJ1ZykgJGRlYnVnLmNsYXNzTGlzdC5hZGQoJ2FuaW1lanMtb25zY3JvbGwtZGVidWcnKTtcbiAgICB0aGlzLiRkZWJ1ZyA9ICRkZWJ1ZztcbiAgICBjb25zdCBjb250YWluZXJQb3NpdGlvbiA9IGdldFRhcmdldFZhbHVlKGNvbnRhaW5lci5lbGVtZW50LCAncG9zaXRpb24nKTtcbiAgICBpZiAoY29udGFpbmVyUG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICB0aGlzLmRlYnVnU3R5bGVzID0gc2V0VGFyZ2V0VmFsdWVzKGNvbnRhaW5lci5lbGVtZW50LCB7IHBvc2l0aW9uOiAncmVsYXRpdmUgJ30pO1xuICAgIH1cblxuICB9XG5cbiAgdXBkYXRlQm91bmRzKCkge1xuICAgIGlmICh0aGlzLl9kZWJ1Zykge1xuICAgICAgdGhpcy5yZW1vdmVEZWJ1ZygpO1xuICAgIH1cbiAgICBsZXQgc3RpY2t5cztcbiAgICBjb25zdCAkdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgY29uc3QgaXNIb3JpID0gdGhpcy5ob3Jpem9udGFsO1xuICAgIGNvbnN0IGxpbmtlZCA9IHRoaXMubGlua2VkO1xuICAgIGxldCBsaW5rZWRUaW1lO1xuICAgIGxldCAkZWwgPSAkdGFyZ2V0O1xuICAgIGxldCBvZmZzZXRYID0gMDtcbiAgICBsZXQgb2Zmc2V0WSA9IDA7XG4gICAgLyoqIEB0eXBlIHtFbGVtZW50fSAqL1xuICAgIGxldCAkb2Zmc2V0UGFyZW50ID0gJGVsO1xuICAgIGlmIChsaW5rZWQpIHtcbiAgICAgIGxpbmtlZFRpbWUgPSBsaW5rZWQuY3VycmVudFRpbWU7XG4gICAgICBsaW5rZWQuc2VlaygwLCB0cnVlKTtcbiAgICB9XG4gICAgY29uc3QgaXNDb250YWluZXJTdGF0aWMgPSBnZXRUYXJnZXRWYWx1ZShjb250YWluZXIuZWxlbWVudCwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnID8gc2V0VGFyZ2V0VmFsdWVzKGNvbnRhaW5lci5lbGVtZW50LCB7IHBvc2l0aW9uOiAncmVsYXRpdmUgJ30pIDogZmFsc2U7XG4gICAgd2hpbGUgKCRlbCAmJiAkZWwgIT09IGNvbnRhaW5lci5lbGVtZW50ICYmICRlbCAhPT0gZG9jLmJvZHkpIHtcbiAgICAgIGNvbnN0IGlzU3RpY2t5ID0gZ2V0VGFyZ2V0VmFsdWUoJGVsLCAncG9zaXRpb24nKSA9PT0gJ3N0aWNreScgP1xuICAgICAgICAgICAgICAgICAgICAgICBzZXRUYXJnZXRWYWx1ZXMoJGVsLCB7IHBvc2l0aW9uOiAnc3RhdGljJyB9KSA6XG4gICAgICAgICAgICAgICAgICAgICAgIGZhbHNlO1xuICAgICAgaWYgKCRlbCA9PT0gJG9mZnNldFBhcmVudCkge1xuICAgICAgICBvZmZzZXRYICs9ICRlbC5vZmZzZXRMZWZ0IHx8IDA7XG4gICAgICAgIG9mZnNldFkgKz0gJGVsLm9mZnNldFRvcCB8fCAwO1xuICAgICAgICAkb2Zmc2V0UGFyZW50ID0gJGVsLm9mZnNldFBhcmVudDtcbiAgICAgIH1cbiAgICAgICRlbCA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovKCRlbC5wYXJlbnRFbGVtZW50KTtcbiAgICAgIGlmIChpc1N0aWNreSkge1xuICAgICAgICBpZiAoIXN0aWNreXMpIHN0aWNreXMgPSBbXTtcbiAgICAgICAgc3RpY2t5cy5wdXNoKGlzU3RpY2t5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzQ29udGFpbmVyU3RhdGljKSBpc0NvbnRhaW5lclN0YXRpYy5yZXZlcnQoKTtcbiAgICBjb25zdCBvZmZzZXQgPSBpc0hvcmkgPyBvZmZzZXRYIDogb2Zmc2V0WTtcbiAgICBjb25zdCB0YXJnZXRTaXplID0gaXNIb3JpID8gJHRhcmdldC5vZmZzZXRXaWR0aCA6ICR0YXJnZXQub2Zmc2V0SGVpZ2h0O1xuICAgIGNvbnN0IGNvbnRhaW5lclNpemUgPSBpc0hvcmkgPyBjb250YWluZXIud2lkdGggOiBjb250YWluZXIuaGVpZ2h0O1xuICAgIGNvbnN0IHNjcm9sbFNpemUgPSBpc0hvcmkgPyBjb250YWluZXIuc2Nyb2xsV2lkdGggOiBjb250YWluZXIuc2Nyb2xsSGVpZ2h0O1xuICAgIGNvbnN0IG1heFNjcm9sbCA9IHNjcm9sbFNpemUgLSBjb250YWluZXJTaXplO1xuICAgIGNvbnN0IGVudGVyID0gdGhpcy5lbnRlcjtcbiAgICBjb25zdCBsZWF2ZSA9IHRoaXMubGVhdmU7XG5cbiAgICAvKiogQHR5cGUge1Njcm9sbFRocmVzaG9sZFZhbHVlfSAqL1xuICAgIGxldCBlbnRlclRhcmdldCA9ICdzdGFydCc7XG4gICAgLyoqIEB0eXBlIHtTY3JvbGxUaHJlc2hvbGRWYWx1ZX0gKi9cbiAgICBsZXQgbGVhdmVUYXJnZXQgPSAnZW5kJztcbiAgICAvKiogQHR5cGUge1Njcm9sbFRocmVzaG9sZFZhbHVlfSAqL1xuICAgIGxldCBlbnRlckNvbnRhaW5lciA9ICdlbmQnO1xuICAgIC8qKiBAdHlwZSB7U2Nyb2xsVGhyZXNob2xkVmFsdWV9ICovXG4gICAgbGV0IGxlYXZlQ29udGFpbmVyID0gJ3N0YXJ0JztcblxuICAgIGlmIChpc1N0cihlbnRlcikpIHtcbiAgICAgIGNvbnN0IHNwbGl0dGVkID0gLyoqIEB0eXBlIHtTdHJpbmd9ICovKGVudGVyKS5zcGxpdCgnICcpO1xuICAgICAgZW50ZXJDb250YWluZXIgPSBzcGxpdHRlZFswXTtcbiAgICAgIGVudGVyVGFyZ2V0ID0gc3BsaXR0ZWQubGVuZ3RoID4gMSA/IHNwbGl0dGVkWzFdIDogZW50ZXJUYXJnZXQ7XG4gICAgfSBlbHNlIGlmIChpc09iaihlbnRlcikpIHtcbiAgICAgIGNvbnN0IGUgPSAvKiogQHR5cGUge1Njcm9sbFRocmVzaG9sZFBhcmFtfSAqLyhlbnRlcik7XG4gICAgICBpZiAoIWlzVW5kKGUuY29udGFpbmVyKSkgZW50ZXJDb250YWluZXIgPSBlLmNvbnRhaW5lcjtcbiAgICAgIGlmICghaXNVbmQoZS50YXJnZXQpKSBlbnRlclRhcmdldCA9IGUudGFyZ2V0O1xuICAgIH0gZWxzZSBpZiAoaXNOdW0oZW50ZXIpKSB7XG4gICAgICBlbnRlckNvbnRhaW5lciA9IC8qKiBAdHlwZSB7TnVtYmVyfSAqLyhlbnRlcik7XG4gICAgfVxuXG4gICAgaWYgKGlzU3RyKGxlYXZlKSkge1xuICAgICAgY29uc3Qgc3BsaXR0ZWQgPSAvKiogQHR5cGUge1N0cmluZ30gKi8obGVhdmUpLnNwbGl0KCcgJyk7XG4gICAgICBsZWF2ZUNvbnRhaW5lciA9IHNwbGl0dGVkWzBdO1xuICAgICAgbGVhdmVUYXJnZXQgPSBzcGxpdHRlZC5sZW5ndGggPiAxID8gc3BsaXR0ZWRbMV0gOiBsZWF2ZVRhcmdldDtcbiAgICB9IGVsc2UgaWYgKGlzT2JqKGxlYXZlKSkge1xuICAgICAgY29uc3QgdCA9IC8qKiBAdHlwZSB7U2Nyb2xsVGhyZXNob2xkUGFyYW19ICovKGxlYXZlKTtcbiAgICAgIGlmICghaXNVbmQodC5jb250YWluZXIpKSBsZWF2ZUNvbnRhaW5lciA9IHQuY29udGFpbmVyO1xuICAgICAgaWYgKCFpc1VuZCh0LnRhcmdldCkpIGxlYXZlVGFyZ2V0ID0gdC50YXJnZXQ7XG4gICAgfSBlbHNlIGlmIChpc051bShsZWF2ZSkpIHtcbiAgICAgIGxlYXZlQ29udGFpbmVyID0gLyoqIEB0eXBlIHtOdW1iZXJ9ICovKGxlYXZlKTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZWRFbnRlclRhcmdldCA9IHBhcnNlQm91bmRWYWx1ZSgkdGFyZ2V0LCBlbnRlclRhcmdldCwgdGFyZ2V0U2l6ZSk7XG4gICAgY29uc3QgcGFyc2VkTGVhdmVUYXJnZXQgPSBwYXJzZUJvdW5kVmFsdWUoJHRhcmdldCwgbGVhdmVUYXJnZXQsIHRhcmdldFNpemUpO1xuICAgIGNvbnN0IHVuZGVyID0gKHBhcnNlZEVudGVyVGFyZ2V0ICsgb2Zmc2V0KSAtIGNvbnRhaW5lclNpemU7XG4gICAgY29uc3Qgb3ZlciA9IChwYXJzZWRMZWF2ZVRhcmdldCArIG9mZnNldCkgLSBtYXhTY3JvbGw7XG4gICAgY29uc3QgcGFyc2VkRW50ZXJDb250YWluZXIgPSBwYXJzZUJvdW5kVmFsdWUoJHRhcmdldCwgZW50ZXJDb250YWluZXIsIGNvbnRhaW5lclNpemUsIHVuZGVyLCBvdmVyKTtcbiAgICBjb25zdCBwYXJzZWRMZWF2ZUNvbnRhaW5lciA9IHBhcnNlQm91bmRWYWx1ZSgkdGFyZ2V0LCBsZWF2ZUNvbnRhaW5lciwgY29udGFpbmVyU2l6ZSwgdW5kZXIsIG92ZXIpO1xuICAgIGNvbnN0IG9mZnNldFN0YXJ0ID0gcGFyc2VkRW50ZXJUYXJnZXQgKyBvZmZzZXQgLSBwYXJzZWRFbnRlckNvbnRhaW5lcjtcbiAgICBjb25zdCBvZmZzZXRFbmQgPSBwYXJzZWRMZWF2ZVRhcmdldCArIG9mZnNldCAtIHBhcnNlZExlYXZlQ29udGFpbmVyO1xuICAgIGNvbnN0IHNjcm9sbERlbHRhID0gb2Zmc2V0RW5kIC0gb2Zmc2V0U3RhcnQ7XG4gICAgdGhpcy5vZmZzZXRzWzBdID0gb2Zmc2V0WDtcbiAgICB0aGlzLm9mZnNldHNbMV0gPSBvZmZzZXRZO1xuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgIHRoaXMub2Zmc2V0U3RhcnQgPSBvZmZzZXRTdGFydDtcbiAgICB0aGlzLm9mZnNldEVuZCA9IG9mZnNldEVuZDtcbiAgICB0aGlzLmRpc3RhbmNlID0gc2Nyb2xsRGVsdGEgPD0gMCA/IDAgOiBzY3JvbGxEZWx0YTtcbiAgICB0aGlzLnRocmVzaG9sZHMgPSBbZW50ZXJUYXJnZXQsIGxlYXZlVGFyZ2V0LCBlbnRlckNvbnRhaW5lciwgbGVhdmVDb250YWluZXJdO1xuICAgIHRoaXMuY29vcmRzID0gW3BhcnNlZEVudGVyVGFyZ2V0LCBwYXJzZWRMZWF2ZVRhcmdldCwgcGFyc2VkRW50ZXJDb250YWluZXIsIHBhcnNlZExlYXZlQ29udGFpbmVyXTtcbiAgICBpZiAoc3RpY2t5cykge1xuICAgICAgc3RpY2t5cy5mb3JFYWNoKHN0aWNreSA9PiBzdGlja3kucmV2ZXJ0KCkpO1xuICAgIH1cbiAgICBpZiAobGlua2VkKSB7XG4gICAgICBsaW5rZWQuc2VlayhsaW5rZWRUaW1lLCB0cnVlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RlYnVnKSB7XG4gICAgICB0aGlzLmRlYnVnKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2Nyb2xsKCkge1xuICAgIGNvbnN0IGxpbmtlZCA9IHRoaXMubGlua2VkO1xuICAgIGNvbnN0IHN5bmMgPSB0aGlzLnN5bmM7XG4gICAgY29uc3Qgc3luY0Vhc2UgPSB0aGlzLnN5bmNFYXNlO1xuICAgIGNvbnN0IHN5bmNTbW9vdGggPSB0aGlzLnN5bmNTbW9vdGg7XG4gICAgY29uc3Qgc2hvdWxkU2VlayA9IGxpbmtlZCAmJiAoc3luY0Vhc2UgfHwgc3luY1Ntb290aCk7XG4gICAgY29uc3QgaXNIb3JpID0gdGhpcy5ob3Jpem9udGFsO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgIGNvbnN0IHNjcm9sbCA9IHRoaXMuc2Nyb2xsO1xuICAgIGNvbnN0IGlzQmVmb3JlID0gc2Nyb2xsIDw9IHRoaXMub2Zmc2V0U3RhcnQ7XG4gICAgY29uc3QgaXNBZnRlciA9IHNjcm9sbCA+PSB0aGlzLm9mZnNldEVuZDtcbiAgICBjb25zdCBpc0luVmlldyA9ICFpc0JlZm9yZSAmJiAhaXNBZnRlcjtcbiAgICBjb25zdCBpc09uVGhlRWRnZSA9IHNjcm9sbCA9PT0gdGhpcy5vZmZzZXRTdGFydCB8fCBzY3JvbGwgPT09IHRoaXMub2Zmc2V0RW5kO1xuICAgIGNvbnN0IGZvcmNlRW50ZXIgPSAhdGhpcy5oYXNFbnRlcmVkICYmIGlzT25UaGVFZGdlO1xuICAgIGNvbnN0ICRkZWJ1ZyA9IHRoaXMuX2RlYnVnICYmIHRoaXMuJGRlYnVnO1xuICAgIGxldCBoYXNVcGRhdGVkID0gZmFsc2U7XG4gICAgbGV0IHN5bmNDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICBsZXQgcCA9IHRoaXMucHJvZ3Jlc3M7XG5cbiAgICBpZiAoaXNCZWZvcmUgJiYgdGhpcy5iZWdhbikge1xuICAgICAgdGhpcy5iZWdhbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChwID4gMCAmJiAhdGhpcy5iZWdhbikge1xuICAgICAgdGhpcy5iZWdhbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZFNlZWspIHtcbiAgICAgIGNvbnN0IGxwID0gbGlua2VkLnByb2dyZXNzO1xuICAgICAgaWYgKHN5bmNTbW9vdGggJiYgaXNOdW0oc3luY1Ntb290aCkpIHtcbiAgICAgICAgaWYgKC8qKiBAdHlwZSB7TnVtYmVyfSAqLyhzeW5jU21vb3RoKSA8IDEpIHtcbiAgICAgICAgICBjb25zdCBzdGVwID0gMC4wMDAxO1xuICAgICAgICAgIGNvbnN0IHNuYXAgPSBscCA8IHAgJiYgcCA9PT0gMSA/IHN0ZXAgOiBscCA+IHAgJiYgIXAgPyAtMWUtNCA6IDA7XG4gICAgICAgICAgcCA9IHJvdW5kKGxlcnAobHAsIHAsIGludGVycG9sYXRlKC4wMSwgLjIsIC8qKiBAdHlwZSB7TnVtYmVyfSAqLyhzeW5jU21vb3RoKSksIGZhbHNlKSArIHNuYXAsIDYpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHN5bmNFYXNlKSB7XG4gICAgICAgIHAgPSBzeW5jRWFzZShwKTtcbiAgICAgIH1cbiAgICAgIGhhc1VwZGF0ZWQgPSBwICE9PSB0aGlzLnByZXZQcm9ncmVzcztcbiAgICAgIHN5bmNDb21wbGV0ZWQgPSBscCA9PT0gMTtcbiAgICAgIGlmIChoYXNVcGRhdGVkICYmICFzeW5jQ29tcGxldGVkICYmIChzeW5jU21vb3RoICYmIGxwKSkge1xuICAgICAgICBjb250YWluZXIud2FrZVRpY2tlci5yZXN0YXJ0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCRkZWJ1Zykge1xuICAgICAgY29uc3Qgc3RpY2t5ID0gaXNIb3JpID8gY29udGFpbmVyLnNjcm9sbFkgOiBjb250YWluZXIuc2Nyb2xsWDtcbiAgICAgICRkZWJ1Zy5zdHlsZVtpc0hvcmkgPyAndG9wJyA6ICdsZWZ0J10gPSBzdGlja3kgKyAxMCArICdweCc7XG4gICAgfVxuXG4gICAgLy8gVHJpZ2dlciBlbnRlciBjYWxsYmFja3MgaWYgYWxyZWFkeSBpbiB2aWV3IG9yIHdoZW4gZW50ZXJpbmcgdGhlIHZpZXdcbiAgICBpZiAoKGlzSW5WaWV3ICYmICF0aGlzLmlzSW5WaWV3KSB8fCAoZm9yY2VFbnRlciAmJiAhdGhpcy5mb3JjZUVudGVyICYmICF0aGlzLmhhc0VudGVyZWQpKSB7XG4gICAgICBpZiAoaXNJblZpZXcpIHRoaXMuaXNJblZpZXcgPSB0cnVlO1xuICAgICAgaWYgKCF0aGlzLmZvcmNlRW50ZXIgfHwgIXRoaXMuaGFzRW50ZXJlZCkge1xuICAgICAgICBpZiAoJGRlYnVnICYmIGlzSW5WaWV3KSAkZGVidWcuc3R5bGUuekluZGV4ID0gYCR7dGhpcy5jb250YWluZXIuekluZGV4Kyt9YDtcbiAgICAgICAgdGhpcy5vblN5bmNFbnRlcih0aGlzKTtcbiAgICAgICAgdGhpcy5vbkVudGVyKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5iYWNrd2FyZCkge1xuICAgICAgICAgIHRoaXMub25TeW5jRW50ZXJCYWNrd2FyZCh0aGlzKTtcbiAgICAgICAgICB0aGlzLm9uRW50ZXJCYWNrd2FyZCh0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9uU3luY0VudGVyRm9yd2FyZCh0aGlzKTtcbiAgICAgICAgICB0aGlzLm9uRW50ZXJGb3J3YXJkKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFzRW50ZXJlZCA9IHRydWU7XG4gICAgICAgIGlmIChmb3JjZUVudGVyKSB0aGlzLmZvcmNlRW50ZXIgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChpc0luVmlldykge1xuICAgICAgICB0aGlzLmZvcmNlRW50ZXIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNJblZpZXcgfHwgIWlzSW5WaWV3ICYmIHRoaXMuaXNJblZpZXcpIHtcbiAgICAgIGhhc1VwZGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChoYXNVcGRhdGVkKSB7XG4gICAgICBpZiAoc2hvdWxkU2VlaykgbGlua2VkLnNlZWsobGlua2VkLmR1cmF0aW9uICogcCk7XG4gICAgICB0aGlzLm9uVXBkYXRlKHRoaXMpO1xuICAgIH1cblxuICAgIGlmICghaXNJblZpZXcgJiYgdGhpcy5pc0luVmlldykge1xuICAgICAgdGhpcy5pc0luVmlldyA9IGZhbHNlO1xuICAgICAgdGhpcy5vblN5bmNMZWF2ZSh0aGlzKTtcbiAgICAgIHRoaXMub25MZWF2ZSh0aGlzKTtcbiAgICAgIGlmICh0aGlzLmJhY2t3YXJkKSB7XG4gICAgICAgIHRoaXMub25TeW5jTGVhdmVCYWNrd2FyZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkxlYXZlQmFja3dhcmQodGhpcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9uU3luY0xlYXZlRm9yd2FyZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkxlYXZlRm9yd2FyZCh0aGlzKTtcbiAgICAgIH1cbiAgICAgIGlmIChzeW5jICYmICFzeW5jU21vb3RoKSB7XG4gICAgICAgIHN5bmNDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwID49IDEgJiYgdGhpcy5iZWdhbiAmJiAhdGhpcy5jb21wbGV0ZWQgJiYgKHN5bmMgJiYgc3luY0NvbXBsZXRlZCB8fCAhc3luYykpIHtcbiAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgIHRoaXMub25TeW5jQ29tcGxldGUodGhpcyk7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICBpZiAoKCF0aGlzLnJlcGVhdCAmJiAhbGlua2VkKSB8fCAoIXRoaXMucmVwZWF0ICYmIGxpbmtlZCAmJiBsaW5rZWQuY29tcGxldGVkKSkge1xuICAgICAgICB0aGlzLnJldmVydCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwIDwgMSAmJiB0aGlzLmNvbXBsZXRlZCkge1xuICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnByZXZQcm9ncmVzcyA9IHA7XG4gIH1cblxuICByZXZlcnQoKSB7XG4gICAgaWYgKHRoaXMucmV2ZXJ0ZWQpIHJldHVybjtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICByZW1vdmVDaGlsZChjb250YWluZXIsIHRoaXMpO1xuICAgIGlmICghY29udGFpbmVyLl9oZWFkKSB7XG4gICAgICBjb250YWluZXIucmV2ZXJ0KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZWJ1Zykge1xuICAgICAgdGhpcy5yZW1vdmVEZWJ1ZygpO1xuICAgIH1cbiAgICB0aGlzLnJldmVydGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5cbi8qKlxuICogQHBhcmFtIHtTY3JvbGxPYnNlcnZlclBhcmFtc30gW3BhcmFtZXRlcnM9e31dXG4gKiBAcmV0dXJuIHtTY3JvbGxPYnNlcnZlcn1cbiAqL1xuY29uc3Qgb25TY3JvbGwgPSAocGFyYW1ldGVycyA9IHt9KSA9PiBuZXcgU2Nyb2xsT2JzZXJ2ZXIocGFyYW1ldGVycyk7XG5cblxuXG5cbi8qKlxuICogQHR5cGVkZWYgIHtPYmplY3R9IFN0YWdnZXJQYXJhbWV0ZXJzXG4gKiBAcHJvcGVydHkge051bWJlcnxTdHJpbmd9IFtzdGFydF1cbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfCdmaXJzdCd8J2NlbnRlcid8J2xhc3QnfSBbZnJvbV1cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gW3JldmVyc2VkXVxuICogQHByb3BlcnR5IHtBcnJheS48TnVtYmVyPn0gW2dyaWRdXG4gKiBAcHJvcGVydHkgeygneCd8J3knKX0gW2F4aXNdXG4gKiBAcHJvcGVydHkge0Vhc2luZ1BhcmFtfSBbZWFzZV1cbiAqIEBwcm9wZXJ0eSB7VHdlZW5Nb2RpZmllcn0gW21vZGlmaWVyXVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIFN0YWdnZXJGdW5jdGlvblxuICogQHBhcmFtIHtUYXJnZXR9IFt0YXJnZXRdXG4gKiBAcGFyYW0ge051bWJlcn0gW2luZGV4XVxuICogQHBhcmFtIHtOdW1iZXJ9IFtsZW5ndGhdXG4gKiBAcGFyYW0ge1RpbWVsaW5lfSBbdGxdXG4gKiBAcmV0dXJuIHtOdW1iZXJ8U3RyaW5nfVxuICovXG5cbi8qKlxuICogQHBhcmFtICB7TnVtYmVyfFN0cmluZ3xbTnVtYmVyfFN0cmluZyxOdW1iZXJ8U3RyaW5nXX0gdmFsXG4gKiBAcGFyYW0gIHtTdGFnZ2VyUGFyYW1ldGVyc30gcGFyYW1zXG4gKiBAcmV0dXJuIHtTdGFnZ2VyRnVuY3Rpb259XG4gKi9cbmNvbnN0IHN0YWdnZXIgPSAodmFsLCBwYXJhbXMgPSB7fSkgPT4ge1xuICBsZXQgdmFsdWVzID0gW107XG4gIGxldCBtYXhWYWx1ZSA9IDA7XG4gIGNvbnN0IGZyb20gPSBwYXJhbXMuZnJvbTtcbiAgY29uc3QgcmV2ZXJzZWQgPSBwYXJhbXMucmV2ZXJzZWQ7XG4gIGNvbnN0IGVhc2UgPSBwYXJhbXMuZWFzZTtcbiAgY29uc3QgaGFzRWFzaW5nID0gIWlzVW5kKGVhc2UpO1xuICBjb25zdCBoYXNTcHJpbmcgPSBoYXNFYXNpbmcgJiYgIWlzVW5kKC8qKiBAdHlwZSB7U3ByaW5nfSAqLyhlYXNlKS5lYXNlKTtcbiAgY29uc3Qgc3RhZ2dlckVhc2UgPSBoYXNTcHJpbmcgPyAvKiogQHR5cGUge1NwcmluZ30gKi8oZWFzZSkuZWFzZSA6IGhhc0Vhc2luZyA/IHBhcnNlRWFzaW5ncyhlYXNlKSA6IG51bGw7XG4gIGNvbnN0IGdyaWQgPSBwYXJhbXMuZ3JpZDtcbiAgY29uc3QgYXhpcyA9IHBhcmFtcy5heGlzO1xuICBjb25zdCBmcm9tRmlyc3QgPSBpc1VuZChmcm9tKSB8fCBmcm9tID09PSAwIHx8IGZyb20gPT09ICdmaXJzdCc7XG4gIGNvbnN0IGZyb21DZW50ZXIgPSBmcm9tID09PSAnY2VudGVyJztcbiAgY29uc3QgZnJvbUxhc3QgPSBmcm9tID09PSAnbGFzdCc7XG4gIGNvbnN0IGlzUmFuZ2UgPSBpc0Fycih2YWwpO1xuICBjb25zdCB2YWwxID0gaXNSYW5nZSA/IHBhcnNlTnVtYmVyKHZhbFswXSkgOiBwYXJzZU51bWJlcih2YWwpO1xuICBjb25zdCB2YWwyID0gaXNSYW5nZSA/IHBhcnNlTnVtYmVyKHZhbFsxXSkgOiAwO1xuICBjb25zdCB1bml0TWF0Y2ggPSB1bml0c0V4ZWNSZ3guZXhlYygoaXNSYW5nZSA/IHZhbFsxXSA6IHZhbCkgKyBlbXB0eVN0cmluZyk7XG4gIGNvbnN0IHN0YXJ0ID0gcGFyYW1zLnN0YXJ0IHx8IDAgKyAoaXNSYW5nZSA/IHZhbDEgOiAwKTtcbiAgbGV0IGZyb21JbmRleCA9IGZyb21GaXJzdCA/IDAgOiBpc051bShmcm9tKSA/IGZyb20gOiAwO1xuICByZXR1cm4gKF8sIGksIHQsIHRsKSA9PiB7XG4gICAgaWYgKGZyb21DZW50ZXIpIGZyb21JbmRleCA9ICh0IC0gMSkgLyAyO1xuICAgIGlmIChmcm9tTGFzdCkgZnJvbUluZGV4ID0gdCAtIDE7XG4gICAgaWYgKCF2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdDsgaW5kZXgrKykge1xuICAgICAgICBpZiAoIWdyaWQpIHtcbiAgICAgICAgICB2YWx1ZXMucHVzaChhYnMoZnJvbUluZGV4IC0gaW5kZXgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBmcm9tWCA9ICFmcm9tQ2VudGVyID8gZnJvbUluZGV4ICUgZ3JpZFswXSA6IChncmlkWzBdIC0gMSkgLyAyO1xuICAgICAgICAgIGNvbnN0IGZyb21ZID0gIWZyb21DZW50ZXIgPyBmbG9vcihmcm9tSW5kZXggLyBncmlkWzBdKSA6IChncmlkWzFdIC0gMSkgLyAyO1xuICAgICAgICAgIGNvbnN0IHRvWCA9IGluZGV4ICUgZ3JpZFswXTtcbiAgICAgICAgICBjb25zdCB0b1kgPSBmbG9vcihpbmRleCAvIGdyaWRbMF0pO1xuICAgICAgICAgIGNvbnN0IGRpc3RhbmNlWCA9IGZyb21YIC0gdG9YO1xuICAgICAgICAgIGNvbnN0IGRpc3RhbmNlWSA9IGZyb21ZIC0gdG9ZO1xuICAgICAgICAgIGxldCB2YWx1ZSA9IHNxcnQoZGlzdGFuY2VYICogZGlzdGFuY2VYICsgZGlzdGFuY2VZICogZGlzdGFuY2VZKTtcbiAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3gnKSB2YWx1ZSA9IC1kaXN0YW5jZVg7XG4gICAgICAgICAgaWYgKGF4aXMgPT09ICd5JykgdmFsdWUgPSAtZGlzdGFuY2VZO1xuICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBtYXhWYWx1ZSA9IG1heCguLi52YWx1ZXMpO1xuICAgICAgfVxuICAgICAgaWYgKHN0YWdnZXJFYXNlKSB2YWx1ZXMgPSB2YWx1ZXMubWFwKHZhbCA9PiBzdGFnZ2VyRWFzZSh2YWwgLyBtYXhWYWx1ZSkgKiBtYXhWYWx1ZSk7XG4gICAgICBpZiAocmV2ZXJzZWQpIHZhbHVlcyA9IHZhbHVlcy5tYXAodmFsID0+IGF4aXMgPyAodmFsIDwgMCkgPyB2YWwgKiAtMSA6IC12YWwgOiBhYnMobWF4VmFsdWUgLSB2YWwpKTtcbiAgICB9XG4gICAgY29uc3Qgc3BhY2luZyA9IGlzUmFuZ2UgPyAodmFsMiAtIHZhbDEpIC8gbWF4VmFsdWUgOiB2YWwxO1xuICAgIGNvbnN0IG9mZnNldCA9IHRsID8gcGFyc2VUaW1lbGluZVBvc2l0aW9uKHRsLCBpc1VuZChwYXJhbXMuc3RhcnQpID8gdGwuaXRlcmF0aW9uRHVyYXRpb24gOiBzdGFydCkgOiAvKiogQHR5cGUge051bWJlcn0gKi8oc3RhcnQpO1xuICAgIC8qKiBAdHlwZSB7U3RyaW5nfE51bWJlcn0gKi9cbiAgICBsZXQgb3V0cHV0ID0gb2Zmc2V0ICsgKChzcGFjaW5nICogcm91bmQodmFsdWVzW2ldLCAyKSkgfHwgMCk7XG4gICAgaWYgKHBhcmFtcy5tb2RpZmllcikgb3V0cHV0ID0gcGFyYW1zLm1vZGlmaWVyKG91dHB1dCk7XG4gICAgaWYgKHVuaXRNYXRjaCkgb3V0cHV0ID0gYCR7b3V0cHV0fSR7dW5pdE1hdGNoWzJdfWA7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxufTtcblxuZXhwb3J0IHsgQW5pbWF0YWJsZSwgRHJhZ2dhYmxlLCBKU0FuaW1hdGlvbiwgU2NvcGUsIFNjcm9sbE9ic2VydmVyLCBTcHJpbmcsIFRpbWVsaW5lLCBUaW1lciwgV0FBUElBbmltYXRpb24sIGFuaW1hdGUsIGNyZWF0ZUFuaW1hdGFibGUsIGNyZWF0ZURyYWdnYWJsZSwgY3JlYXRlU2NvcGUsIGNyZWF0ZVNwcmluZywgY3JlYXRlVGltZWxpbmUsIGNyZWF0ZVRpbWVyLCBlYXNlcywgZW5naW5lLCBvblNjcm9sbCwgc2Nyb2xsQ29udGFpbmVycywgc3RhZ2dlciwgc3ZnLCB1dGlscywgd2FhcGkgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYW5pbWF0ZSB9IGZyb20gJ2FuaW1lanMnO1xuXG5jb25zdCBhbmltYXRpb24gPSBhbmltYXRlKHRhcmdldHMsIHBhcmFtZXRlcnMpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==