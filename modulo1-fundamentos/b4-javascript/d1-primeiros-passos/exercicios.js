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

// a = 5
// b = 2

if (a > b){
    console.log (`O número ${a} é maior que o número ${b}`)
} else {
    console.log (`O número ${a} é menor que o número ${b}`)
} 

//3) Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.


// a = 5
// b = 2
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

/*6) Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro. */

let peça = "CaVaLO";
let peçaLowerCase = peça.toLowerCase()

switch (peçaLowerCase){
    case "rei":
        console.log ('O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.')
    break;

    case "rainha":
        console.log('A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.')
        break;

    case "bispo":
        console.log('O bispo move-se ao longo da diagonal. Não pode pular outras peças.')
        break;
    
    case "cavalo":
        console.log ('É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.')
        break;

    case "torre":
        console.log ('A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.')
        break;

    case "peão":
        console.log('O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.')
        break;

    default:
        console.log('Digite uma peça válida!')
}

/*7) Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F */

let notaPorcentagem = 89;

if (notaPorcentagem > 100 || notaPorcentagem < 0){
    console.log('Digite um valor válido!')
} else if (notaPorcentagem >= 90){
    console.log('nota A')
} else if(notaPorcentagem >= 80){  
    console.log('nota B')
} else if(notaPorcentagem >= 70){
    console.log('nota C')
} else if(notaPorcentagem >= 60){
    console.log('nota D')
} else if(notaPorcentagem >= 50){
    console.log('nota E')
} else {
    console.log('nota F')
} 


/*8) Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false . 
''
Bonus: use somente um if .

a = 5
b = 2
c = 10 */

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0){
    console.log(true)
} else {
    console.log(false)
}


/*9) Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if . */

if (a % 2 == 1 || b % 2 == 1 || c % 2 == 1){
    console.log(true)
} else {
    console.log(false)
}

/* Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto) */

