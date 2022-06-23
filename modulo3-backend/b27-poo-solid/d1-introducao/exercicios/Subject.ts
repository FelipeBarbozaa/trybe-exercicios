class Subject {
  constructor(private _name: string) {}

  get name() {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) throw new Error('O nome deve possuir no minimo 3 caracteres')
    this._name = value;
  }

}

const materia1 = new Subject('Matématica');
const materia2 = new Subject('Inglês');
const materia3 = new Subject('Química');

console.log(materia1, materia2, materia3);