import {isFunction} from '../../src/isFunction';

describe('isFunction', ():void => {
    it('match old style function', ():void => {
        expect(isFunction(function(){})).toBe(true);
        expect(isFunction(function(a){})).toBe(true);
        expect(isFunction(function(a, b){})).toBe(true);
        expect(isFunction(function(a,b,foo){})).toBe(true);
        expect(isFunction(function named(a,b,foo){})).toBe(true);
    });

    it('match fat arrow style function', ():void => {
        const a:string = 'a';
        const b:string = 'b';
        const foo:string = 'foo';

        expect(isFunction(a => foo)).toBe(true);
        expect(isFunction((a, b) => foo)).toBe(true);
        expect(isFunction(() => foo)).toBe(true);
        expect(isFunction(() => {})).toBe(true);
        expect(isFunction((a,b) => {})).toBe(true);
        expect(isFunction((a, b,foo) => {})).toBe(true);
    });

    it('not match other statements', ():void => {
        expect(isFunction('a')).toBe(false);
        expect(isFunction(42)).toBe(false);
        expect(isFunction({})).toBe(false);
        expect(isFunction(new Date())).toBe(false);
        expect(isFunction([1, 'foo'])).toBe(false);
    });
});
