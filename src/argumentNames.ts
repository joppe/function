/**
 * This regular expression matches
 * @type {RegExp}
 */
const ARGS_RE:RegExp = /^function?[^(]*\(([^)]*)\)/m;

/**
 * @interface ArgumentNamesFunctionInterface
 */
export interface ArgumentNamesFunctionInterface {
    /**
     * @param {Function} func
     * @returns {string[]}
     */
    (func:Function):string[];
}

/**
 * Get the names of the arguments of a function.
 *
 * @param {Function} func
 * @returns {string[]}
 */
export const argumentNames:ArgumentNamesFunctionInterface = (func:Function):string[] => {
    // Get a string representation of the function
    const str:string = func.toString();

    // Get the string that represents the arguments.
    const match:RegExpMatchArray = str.match(ARGS_RE);
    let args:string[] = [];

    // The zero index of the match array is the matched string, the second is the first group, which are the arguments.
    if (null === match || 2 > match.length || '' === match[1]) {
        return args;
    }

    // Split and trim the arguments
    args = match[1].split(',').map((arg:string):string => {
        return arg.trim();
    });

    return args;
};
