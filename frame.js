class Frame {
    constructor(){
        this.scoreCount = 0

    };

    roll(pins){
        this.scoreCount += pins;
    }

    score(){
        return this.scoreCount;
    }

};

module.exports = Frame;