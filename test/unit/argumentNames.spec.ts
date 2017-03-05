import {args} from '../../src/argumentNames';

describe('args', ():void => {
    it('return the arguments', ():void => {
        const a:string = 'a';
        const foo:string = 'foo';

        expect(args(function (a, foo) {})).toBe('a, foo');
    });
});
