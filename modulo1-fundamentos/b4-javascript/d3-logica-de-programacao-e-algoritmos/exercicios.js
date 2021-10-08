//1) Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:



console.log('Exercicio 1')
let n = 5
var ast = ''
for (let i = 0; i < n; i += 1){
    ast += ('*')
}
for(let i = 0; i < n; i += 1){
    console.log(ast)
}


//2) Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

console.log('Exercicio 2')
n = 5
ast = ''
for (let i = 0; i < n; i += 1){
    ast += ('*')
    console.log(ast)
}


//3) Agora inverta o lado do triângulo.

n = 5
ast = ''

