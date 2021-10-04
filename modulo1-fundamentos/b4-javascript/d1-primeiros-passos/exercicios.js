/*1) Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:


Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

const a = 5;
const b = 2;

console.log (a + b)
console.log (a - b)
console.log (a * b)
console.log (a / b)
console.log (a % b)

//2) Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const a = 5;
const b = 2;

if (a > b){
    console.log (`O número ${a} é maior que o número ${b}`)
} else {
    console.log (`O número ${a} é menor que o número ${b}`)
} 

//3) Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 6;
const b = 2;
const c = 10;

if (a > b && a > c){
    console.log (`O número ${a} é o maior`)
} else if (b > a && b > c) {
    console.log (`O número ${b} é o maior`)
} else {
    console.log (`O número ${c} é o maior`)
}

//4) Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const valor = 2;

if (valor > 0){
    console.log("positive")
} else if (valor < 0){
    console.log("negative")
} else {
    console.log("zero")
}

//5) Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// A+B+C = 180

const ladoA = 60;
const ladoB = 60;
const ladoC = 60;

if (ladoA + ladoB + ladoC == 180){
    console.log(true)
} else {
    console.log(false)
}