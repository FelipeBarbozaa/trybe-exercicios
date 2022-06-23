import Employee from "./Employee";
import Person from "./Person";

export default class Teacher extends Person implements Employee {
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