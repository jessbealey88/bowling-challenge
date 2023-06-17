class Frame {
    constructor(){
        this.scoreCount = 0;
        this.rollCount = 1;
        this.isStrike = false;
        this.isSpare = false;

    };

    roll(pins){
        if(this.rollCount==1 && pins ==10){
            this.isStrike = true;
            this.scoreCount += pins;
        } else if(this.rollCount == 2 && this.scoreCount + pins == 10){
            this.isSpare = true;
            this.scoreCount += pins;   
        }else {
            this.scoreCount += pins; 
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
    
};

module.exports = Frame;