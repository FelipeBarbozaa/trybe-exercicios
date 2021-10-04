// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

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