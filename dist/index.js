"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Indicates unimplemented code by throwing an error with a message of 'Not yet implemented'.
 *
 * This can be useful if you are prototyping and are just looking to have your code typecheck.
 *
 * The difference between {@link unimpl} and `todo` is that while `todo` conveys
 * an intent of implementing the functionality later and the message is 'Not yet implemented',
 * {@link unimpl} makes no such claims.
 * Its message is 'not implemented'. Also some IDEs will mark `todo`s.
 */
function todo() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var msg = 'Not yet implemented';
    throw error.apply(void 0, __spreadArrays([msg], args));
}
exports.todo = todo;
/**
 * Indicates unimplemented code by throwing an error with a message of 'Not yet implemented'.
 *
 * This allows your code to type-check, which is useful if you are prototyping or
 * implementing a code that requires multiple methods which you don't plan of using all of.
 *
 * The difference between `unimpl` and {@link todo} is that while {@link todo} conveys
 * an intent of implementing the functionality later and the message is 'Not yet implemented',
 * `unimplemented` makes no such claims.
 * Its message is 'not implemented'. Also some IDEs will mark {@link todo}s.
 */
function unimplemented() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var msg = 'Not implemented';
    throw error.apply(void 0, __spreadArrays([msg], args));
}
exports.unimplemented = unimplemented;
/**
 * Shorthand of {@link unimplemented}
 */
exports.unimpl = unimplemented;
/**
 * Indicates unreachable code.
 *
 * This is useful any time that the compiler can't determine that some code is unreachable. For example:
 *
 * - Guard conditions and switch-case.
 * - Loops that dynamically terminate.
 * - Iterators that dynamically terminate.
 *
 * If the determination that the code is unreachable proves incorrect, the program immediately terminates with throwing an error.
 */
function unreachable() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var msg = 'Internal error: entered unreachable code';
    throw error.apply(void 0, __spreadArrays([msg], args));
}
exports.unreachable = unreachable;
/**
 * Shorthand of {@link unreachable}
 */
exports.unreach = unreachable;
function error(msg) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (args.length === 0) {
        return Error(msg);
    }
    return Error(msg + ": " + args.join(' '));
}
//# sourceMappingURL=index.js.map