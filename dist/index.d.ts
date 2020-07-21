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
export declare function todo(...args: any[]): never;
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
export declare function unimplemented(...args: any[]): never;
/**
 * Shorthand of {@link unimplemented}
 */
export declare const unimpl: typeof unimplemented;
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
export declare function unreachable(...args: any[]): never;
/**
 * Shorthand of {@link unreachable}
 */
export declare const unreach: typeof unreachable;
//# sourceMappingURL=index.d.ts.map