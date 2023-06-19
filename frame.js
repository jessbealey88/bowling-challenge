class Frame {
    constructor(){
        this.scoreCount = 0;
        this.rollCount = 1;
        this.isStrike = false;
        this.isSpare = false;
        this.endOfFrame = false;
        this.roll_1 = 0;
        this.roll_2 = 0;

    };

    roll(pins){
        if(this.rollCount==1 && pins ==10){
            this.isStrike = true;
            this.scoreCount += pins;
            this.roll_1 += pins;
            this.endOfFrame = true;
        } else if(this.rollCount == 2 && this.scoreCount + pins == 10){
            this.isSpare = true;
            this.scoreCount += pins; 
            this.roll_2 += pins;
            this.endOfFrame = true;  
        }else if(this.rollCount == 2){
            this.scoreCount += pins; 
            this.roll_2 += pins;
            this.endOfFrame = true;
        }else{
            this.scoreCount += pins; 
            this.roll_1 += pins;
            this.rollCount ++;
        }

    }

    score(){
        return this.scoreCount;
    }

    strike(){
        return this.isStrike;
    };

    spare(){
        return this.isSpare;
    }

    endFrame(){
        return this.endOfFrame;
    }
    
};

module.exports = Frame;