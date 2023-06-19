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
    
    };
    strikeBonus(){
        for(let i = 0; i < 10; i++){
          if(this.frames[i].isStrike == true && this.frames[i + 1].isStrike == false){
              this.frames[i].scoreCount += this.frames[i + 1].scoreCount;
          }else if(this.frames[i].isStrike == true && this.frames[i + 1].isStrike == true){
              this.frames[i].scoreCount += this.frames[i + 1].scoreCount + this.frames[i + 2].roll_1;
          };
        };
    };

    spareBonus(){
        for(let i = 0; i < 10; i++){
            if(this.frames[i].isSpare == true){
                this.frames[i].scoreCount += this.frames[i + 1].roll_1;

            };
        };
    };
    

    getFinalScore(){
        this.strikeBonus();
        this.spareBonus();
        let totalScore = this.frames.reduce((total,frame) => total + frame.scoreCount, 0)
        return totalScore;
    }

    allFrames(){
        return this.frames;
    }

};

module.exports = ScoreCard;