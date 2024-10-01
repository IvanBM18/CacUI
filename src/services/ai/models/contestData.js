export default class ContestData{
    constructor(name,total,correct,difficulty) {
        this.name = name;
        this.total = total;
        this.correct = correct;
        this.difficulty = difficulty;
    }

    getJSON(){
        return JSON.stringify(this);
    }
}