const Frame = require('./frame');

describe('Frame', () =>{
    it('Scores a single roll', () => {
        const frame = new Frame();
        frame.roll(5);
        expect(frame.score()).toBe(5);
    });

    it('Scores two rolls', () => {
        const frame = new Frame();
        frame.roll(5);
        frame.roll(3);
        expect(frame.score()).toBe(8);
    });

    it('logs a strike', () => {
        const frame = new Frame();
        frame.roll(10);
        expect(frame.score()).toBe(10);
        expect(frame.strike()).toBe(true);
    })

    it('logs a spare', () => {
        const frame = new Frame();
        frame.roll(5);
        frame.roll(5);
        expect(frame.score()).toBe(10);
        expect(frame.spare()).toBe(true);

    })


});