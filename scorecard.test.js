const ScoreCard = require('./scorecard');
const Frame = require('./frame')

describe('ScoreCard', () => {
    it('adds a single frame', () => {
        const frame = new Frame();
        const scorecard = new ScoreCard();
        scorecard.addNewFrames();
        expect(scorecard.allFrames().length).toEqual(1);
          
    });

    it('adds a roll to the first frame', () => {
        const frame = new Frame();
        const scorecard = new ScoreCard();
        scorecard.addNewFrames();
        scorecard.addRolls(10);
        expect(scorecard.allFrames()).toEqual([]);

    })
});