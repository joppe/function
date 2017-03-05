/**
 * @type {RegExp}
 */
const FUNCTION_ARGS_RE:RegExp = /^\s*function\s*\w*\s*\(([^)]*)\)\s*\{/i;

/**
 * @type {RegExp}
 */
const FAT_ARROW_ARGS_RE:RegExp = /^\s*\(?[^)=]*\)?\s*=>/i;

/**
 * @type RegExp[]
 */
const ARGS_RE:RegExp[] = [FUNCTION_ARGS_RE, FAT_ARROW_ARGS_RE];

export const args = (func:Function):string => {
    const str:string = func.toString();
    let args:string;

    ARGS_RE.every((re:RegExp):boolean => {
        const match:RegExpMatchArray = str.match(re);

        if (null === match) {
            return true;
        }

        args = match[1];

        return false;
    });

    return args;
};
/**
export const argumentNames = (func:Function):string[] => {
    const str:string = func.toString();
    const args:string[] = [];

    RE.every((re:RegExp):boolean => {
        const match:RegExpMatchArray = str.match(FUNCTION_ARGS_RE);

        return false;
    });

    return args;
};
/**/
