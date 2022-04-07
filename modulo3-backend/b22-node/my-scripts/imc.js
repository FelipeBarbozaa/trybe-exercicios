const readline = require('readline-sync');

const peso = readline.questionInt('Qual seu peso ? : ')
const altura = 1.65
const imc = peso / (altura ** 2)

console.log(imc.toFixed(2));