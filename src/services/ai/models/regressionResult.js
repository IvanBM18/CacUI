export default class RegressionResult {
  constructor(input,output,malla) {
    this.input = input;
    this.output = output;
    this.malla = malla;
  }

  getJSON() {
    return JSON.stringify(this);
  }
}