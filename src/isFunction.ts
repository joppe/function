/**
 * @interface CheckFunctionInterface
 */
export interface CheckFunctionInterface {
    /**
     * @param {any} func
     * @returns {boolean}
     */
    (func:any):boolean;
}

/**
 * Check if given argument is a function.
 *
 * @param {any} func
 * @returns {boolean}
 */
export const isFunction:CheckFunctionInterface = (func:any):boolean => {
    return '[object Function]' === Object.prototype.toString.call(func);
};
