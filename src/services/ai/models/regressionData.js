export default class RegressionData {
  constructor(avgDifficulty, avgCorrect, correctSubmissions, newContest) {
    this.avgDifficulty = avgDifficulty;
    this.avgCorrect = avgCorrect;
    this.correctSubmissions = correctSubmissions;
    this.newContest = newContest;
    this.result = null;
  }

  setResult(result) {
    this.result = result;
  }

  getJSON() {
    return JSON.stringify(this);
  }
}