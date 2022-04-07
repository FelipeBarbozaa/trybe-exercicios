const readline = require('readline-sync');

const peso = readline.questionInt('Qual seu peso ? : ')
const altura = readline.questionInt('Qual sua altura (cm) ? : ')
const imc = peso / (( altura / 100 ) ** 2)
console.log(imc.toFixed(2))

if (imc < 18.5) {
  console.log('Abaixo do peso (magreza)')
} else if (imc <= 24.9) {
  console.log('Peso normal')
} else if (imc <= 29.9) {
  console.log('Acima do peso (sobrepeso)')
} else if (imc <= 34.9) {
  console.log('Obesidade grau I')
} else if (imc <= 39.9) {
  console.log('Obesidade grau II')
} else {
  console.log('Obesidade grau III e IV')
}