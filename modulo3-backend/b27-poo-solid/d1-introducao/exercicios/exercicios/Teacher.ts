import Employee from "./Employee";
import Subject from "./Subject";

export default class Teacher extends Employee {
  constructor(private _subject: Subject, name: string, bitrhDay: Date, salary: number) {
    super(name, bitrhDay, salary);
    this.enrollment = this.generateEnrollment();
  }

  get subject() {
    return this._subject;
  }

  set subject(value: Subject) {
    this.subject = value;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRF${randomStr}`;
  }
}

const materia = new Subject('Matemática');
const professor = new Teacher(materia, 'Felipe', new Date('2000/04/21'), 5000);
console.log(professor)