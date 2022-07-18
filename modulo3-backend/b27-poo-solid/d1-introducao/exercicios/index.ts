import EvaluationResult from "./exercicios/EvaluationResult"
import Exam from "./exercicios/Exam"
import Student from "./exercicios/Student"
import Subject from "./exercicios/Subject"
import Teacher from "./exercicios/Teacher"
import Work from "./exercicios/Work"

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));

const math = new Subject('Matemática');
const history = new Subject('História');

const marta = new Teacher(math, 'Marta da Silva', new Date('1980/03/30'), 2000);
const joao = new Teacher(history, 'João Antônio da Costa', new Date('1982/04/21'), 2000);

const examMath = new Exam(25, marta);
const workMath = new Work(50, marta);
const examHistory = new Exam(25, joao);
const workHistory = new Work(50, joao);

carolina.addEvaluationResult(new EvaluationResult(examMath, 23));
carolina.addEvaluationResult(new EvaluationResult(workMath, 42));
carolina.addEvaluationResult(new EvaluationResult(examHistory, 25));
carolina.addEvaluationResult(new EvaluationResult(workHistory, 50));

console.log('Avaliações: ', carolina._evaluationsResult);
console.log('Soma das notas: ', carolina.sumGrades());
console.log('Média das notas: ', carolina.sumAvegareGrade());

lucas.addEvaluationResult(new EvaluationResult(examMath, 25));
lucas.addEvaluationResult(new EvaluationResult(workMath, 49));
lucas.addEvaluationResult(new EvaluationResult(examHistory, 20));
lucas.addEvaluationResult(new EvaluationResult(workHistory, 50));

console.log('Avaliações: ', lucas._evaluationsResult);
console.log('Soma das notas: ', lucas.sumGrades());
console.log('Média das notas: ', lucas.sumAvegareGrade());