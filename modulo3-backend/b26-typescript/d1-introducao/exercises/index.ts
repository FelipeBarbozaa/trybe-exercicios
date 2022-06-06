// ./index.ts

import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(100, 200)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(100)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(100, 200)}cm²`);

console.log(`Losango com diagonal maior de 32cm e menor 18cm: ${Exercise.losango(32, 18)}cm²`);
console.log(`Losango com diagonal maior de 200cm e menor 50cm: ${Exercise.losango(200, 50)}cm²`);
console.log(`Losango com diagonal maior de 75cm e menor 25cm: ${Exercise.losango(75, 25)}cm²`);

console.log(`Àrea de um trapezio com base maior de 100cm, menor 70cm e alturas 50cm: ${Exercise.trapezio(100, 70, 50)} cm²`);
console.log(`Àrea de um trapezio com base maior de 75cm, menor 50cm e alturas 35cm: ${Exercise.trapezio(75, 50 ,35)} cm²`);
console.log(`Àrea de um trapezio com base maior de 150cm, menor 120cm e alturas 80cm: ${Exercise.trapezio(150, 120, 80)} cm²`);

console.log(`Área de um circulo com raio de 25cm: ${Exercise.circulo(25)}cm²`);
console.log(`Área de um circulo com raio de 100cm: ${Exercise.circulo(100)}cm²`);
console.log(`Área de um circulo com raio de 12.5cm: ${Exercise.circulo(25)}cm²`);