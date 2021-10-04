// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// A+B+C = 180

const ladoA = 60;
const ladoB = 60;
const ladoC = 60;

if (ladoA + ladoB + ladoC == 180){
    console.log(true)
} else {
    console.log(false)
}