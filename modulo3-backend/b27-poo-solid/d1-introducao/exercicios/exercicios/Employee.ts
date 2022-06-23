import Enrollable from "./IEnrollable";
import Person from "./Person";

export default class Employee extends Person implements Enrollable {
  _enrollment: string
  private _admissionDate: Date;
  constructor(name: string, birthday: Date, private _salary: number) {
    super(name, birthday);
    this._admissionDate = new Date();
    this._enrollment = this.generateEnrollment();
  }

  get enrollment() {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error('Mínimo de 16 caracteres!');
    }
    this._enrollment = value;
  }

  get admissionDate() {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) throw new Error('Coloque uma data que não seja do futuro!');
    this._admissionDate = value;
  }

  get salary() {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) {
      throw new Error('Salário não pode ser menor que 0!');
    }
    this._salary = value;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `FUNC${randomStr}`;
  }
}
