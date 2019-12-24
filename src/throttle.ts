export function throttle(threshhold: number, fn: Function): Function {
    let last: number | undefined;
    let timeout: number;

    // tslint:disable-next-line no-any
    function invoke(now: number, args: any[]): void {
        last = now;
        // tslint:disable-next-line no-null-keyword
        fn.call(null, ...args);
    }

    // tslint:disable-next-line no-any
    return (...args: any[]): void => {
        const now: number = Date.now();

        if (last !== undefined && (last + threshhold) > now) {
            window.clearTimeout(timeout);
            timeout = window.setTimeout(
                (): void => {
                    invoke(now, args);
                },
                threshhold,
            );
        } else {
            invoke(now, args);
        }
    };
}
