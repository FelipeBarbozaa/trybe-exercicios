import EvaluationResult from "./EvaluationResult";
import Enrollable from "./IEnrollable";
import Person from "./Person";

export default class Student extends Person implements Enrollable {
  _enrollment: string;
  _evaluationsResult: EvaluationResult[] = [];

  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];
  constructor(nome: string, bithDate: Date) {
    super(nome, bithDate);
    this._enrollment = this.generateEnrollment();
  }

  get enrollment() {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) throw new Error('É permitido no minimo 16 caracteres')
    this._enrollment = value;
  }

  get examsGrades() {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length + this._examsGrades.length > 4) throw new Error('Só pode ter 4 notas de provas')
    value.forEach((nota) => this._examsGrades.push(nota))
  }

  get worksGrades() {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if (value.length + this._worksGrades.length > 2) throw new Error('Só pode ter 2 notas de trabalhos');
    value.forEach((trabalho) => this._worksGrades.push(trabalho))
  }

  sumGrades() {
    const result = this._examsGrades.reduce((sum, e) => {
      return sum += e;
    }, 0)
    console.log(result);
  }

  sumAvegareGrade() {
    const result = this._examsGrades.reduce((sum, e) => {
      return sum += e;
    }, 0)
    console.log(result / this._examsGrades.length)
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1))
      .replace(/\W/g, '');

    return `STU${randomStr}`;
  }

  get evaluationResults(): EvaluationResult[] {
    return this._evaluationsResult;
  }

  addEvaluationResult(value: EvaluationResult): void {
    this._evaluationsResult.push(value);
  }
}