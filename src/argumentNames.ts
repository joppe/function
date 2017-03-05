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
    // The zero index of the match array is the matched string, the second is the first group, which are the arguments.
    const match:RegExpMatchArray = str.match(ARGS_RE);
    let args:string[] = [];

    if (null === match) {
        return args;
    }

    // Split and trim the arguments
    args = match[1].split(',').map((arg:string):string => {
        return arg.trim();
    }).filter((arg:string):boolean => {
        return '' !== arg;
    });

    return args;
};
