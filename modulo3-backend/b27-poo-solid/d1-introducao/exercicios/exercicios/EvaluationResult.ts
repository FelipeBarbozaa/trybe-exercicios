import Evaluation from "./Evaluation";

export default class EvaluationResult {
  private _evaluation: Evaluation;

  constructor(evaluation: Evaluation, private _score: number) {
    this._evaluation = evaluation;
  }

  get evaluation() {
    return this._evaluation;
  }
  
  set evaluation(value: Evaluation) {
    this.evaluation = value;
  }

  get score() {
    return this._score;
  }

  validateValueThreshold(value: number, threshold: number) {
    if (value > threshold) {
      throw new Error(`A pontução deve ser menor que ${threshold} pontos.`);
    }
  }

  set score(value: number) {
    if (value < 0) throw new Error('A pontução deve ser positiva.');
    this.validateValueThreshold(value, 25);
    this.validateValueThreshold(value, 50);
    this._score = value;
  }
}
