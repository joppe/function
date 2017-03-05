/**
 * @param {Function} func
 * @param {number} wait
 * @returns {Function}
 */
export const throttle:Function = (func:Function, wait:number = 0):Function => {
    let previous:number = 0;

    return (...args:any[]):any => {
        const now:number = Date.now();
        const elapsed:number = now - previous;

        if (elapsed > wait) {
            previous = now;

            func(...args);
        }
    };
};
