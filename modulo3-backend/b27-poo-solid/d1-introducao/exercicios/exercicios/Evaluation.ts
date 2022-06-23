import Subject from "./Subject";
import Teacher from "./Teacher";

export default abstract class Evaluation {
  constructor(private _score: number, private _teacher: Teacher) {}

  get score() {
    return this._score;
  }

  set score(value: number) {
    if (value < 0) throw new Error('Valor não pode ser negativo');
    this._score = value;
  }

  get teacher() {
    return this._teacher;
  }

  set teacher(value: Teacher) {
    this._teacher = value;
  } 
}

const materia = new Subject('Matemática');
const professor = new Teacher(materia, 'Felipe', new Date('2000/04/21'), 5000);
