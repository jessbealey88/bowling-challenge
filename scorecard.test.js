const ScoreCard = require('./scorecard');

describe('ScoreCard', () => {
    
    beforeEach(() => {
        scorecard = new ScoreCard();
        
    });

    it('adds 10 frames to a new scorecard', () => {
        scorecard.addNewFrames();
        expect(scorecard.allFrames().length).toEqual(10); 
    });

    it('only adds frames to a new scorecard once', () => {
        scorecard.addNewFrames();
        scorecard.addNewFrames();
        expect(scorecard.allFrames().length).toEqual(10); 

    });

    it('adds a roll to the first frame', () => {
        scorecard.addNewFrames();
        scorecard.addRolls(10);
        expect(scorecard.allFrames()[0].scoreCount).toEqual(10);
        expect(scorecard.allFrames()[0].isStrike).toEqual(true);
    })

    it('adds two rolls to one frame if first roll is <10', () => {
        scorecard.addNewFrames();
        scorecard.addRolls(6);
        scorecard.addRolls(2);
        expect(scorecard.allFrames()[0].scoreCount).toEqual(8);
        expect(scorecard.allFrames()[0].rollCount).toEqual(2);
        expect(scorecard.allFrames()[0].endOfFrame).toEqual(true);
        
    })

    it('moves onto next frame after 2 rolls', () => {
        scorecard.addNewFrames();
        scorecard.addRolls(6);
        scorecard.addRolls(2);
        scorecard.addRolls(2);
        expect(scorecard.allFrames()[0].scoreCount).toEqual(8);
        expect(scorecard.allFrames()[0].rollCount).toEqual(2);
        expect(scorecard.allFrames()[1].scoreCount).toEqual(2);
        
    });
});
