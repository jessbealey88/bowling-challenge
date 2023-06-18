const Frame = require('./frame');

class ScoreCard {
    constructor(){
        this.frames = [];
        this.frame_index = 0
    };
    
    addNewFrames(){
        this.frames.push(new Frame());
    };

    addRolls(pins){
    
        this.frames[this.frame_index].roll(pins);
    }

    allFrames(){
        return this.frames;
    }

};

module.exports = ScoreCard;