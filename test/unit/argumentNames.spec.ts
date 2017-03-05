import {argumentNames} from '../../src/argumentNames';

describe('argumentNames', ():void => {
    it('get the names of the arguments', ():void => {
        const a:string = 'a';
        const foo:string = 'foo';

        expect(argumentNames(function () {})).toEqual([]);
        expect(argumentNames(function (a, foo) {})).toEqual(['a', 'foo']);
        expect(argumentNames(function (a) {})).toEqual(['a']);
        expect(argumentNames(function  ( a    ,            foo) {})).toEqual(['a', 'foo']);
    });
});
