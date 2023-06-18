const Frame = require('./frame');

class ScoreCard {
    constructor(){
        this.frames = [];
        this.frame_index = 0
    };
    
    addNewFrames(){
        if(this.frames.length == 0){
            for (let i = 0; i < 10; i++) {
                this.frames.push(new Frame());
            };
        };

    };

    addRolls(pins){
        if(this.frames[this.frame_index].endOfFrame == false){
            this.frames[this.frame_index].roll(pins);
        }else {
            this.frame_index ++;
            this.frames[this.frame_index].roll(pins);
        };
    
    }

    allFrames(){
        return this.frames;
    }

};

module.exports = ScoreCard;