import Employee from "./IEmployee";
import Person from "./Student";

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

class Teacher extends Person implements Employee {
  _registration: string;
  _admissionDate: Date;
  _salary: number;
  private _subject: Subject
  constructor(
    nome: string,
    birthDate: Date,
    salary: number,
    subject: Subject,
    ) {
    super(nome, birthDate);

    this._subject = subject;
    this._salary = salary;
    this._admissionDate = new Date();
    this._registration = this.generateRegistration();
  }

  get subject() {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  get salary() {
    return this._salary;
  }

  set salary(value: number) {
    this._salary = value;
  }

  generateRegistration(): string {
    return `a`;
  }
}

const teste = new Teacher('Felipe', new Date(), 3500, materia1);
console.log('-------------------')
console.log(teste);