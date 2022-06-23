import Subject from "./Subject";
import Teacher from "./Teacher";

export default class Evaluation {
  constructor(private _score: number, private _teacher: Teacher, private _type: string) {}

  get score() {
    return this._score;
  }

  set score(value: number) {
    if (value < 0) throw new Error('O valor não pode ser negativo');
    if (this._type === 'prova' && value > 25) throw new Error('A pontuação da prova não pode passar de 25')
    if (this._type === 'trabalho' && value > 50) throw new Error('A pontuação do trabalho não pode passar de 50')
    if (this._type !== 'prova' && this._type !== 'trabalho') {
      throw new Error('Apenas "prova" e "trabalho" é permitido')
    }
    this._score = value;
  }
}

const materia = new Subject('Matemática');
const professor = new Teacher(materia, 'Felipe', new Date('2000/04/21'), 5000);
const teste = new Evaluation(10, professor, 'prova')
console.log(teste);