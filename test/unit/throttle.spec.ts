import {throttle} from '../../src/throttle';

describe('throttle', ():void => {
    it('should fire once', ():void => {
        let i:number = 0;
        const f:Function = () => { i += 1; };
        const t:Function = throttle(f, 200);

        expect(i).toBe(0);
        t();
        t();
        t();
        t();
        expect(i).toBe(1);
    });

    it('should fire once the waiting time is expired', (done:Function):void => {
        let i:number = 0;
        const f:Function = () => { i += 1; };
        const t:Function = throttle(f);

        t();
        t();
        t();
        t();

        setTimeout(():void => {
            t();
            t();
            t();
            expect(i).toBe(2);
            done();
        }, 300);
    });
});
