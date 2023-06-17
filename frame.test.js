const Frame = require('./frame');

describe('Frame', () =>{
    it('Scores a single roll', () =>{
        const frame = new Frame();
        frame.roll(5);
        expect(frame.score()).toBe(5);

    });

});