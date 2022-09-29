/*




4) Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

5) Utilizando for , descubra qual o maior valor contido no array e imprima-o;

6) Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

7) Utilizando for , descubra qual o menor valor contido no array e imprima-o;

8) Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

9) Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;


//1)  Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for (let numeros of numbers){
    console.log(numeros)
}

//2) Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
for (let numeros of numbers){
    soma += numeros
}
console.log(soma)

//3) Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

media = soma/numbers.length
console.log(media)

//4) Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media > 20){
    console.log("Valor maior que 20")
} else {
    console.log ('Valor menor ou igual a 20')
}

//5) Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maior = 0;
for (let numeros of numbers){
    if (numeros > maior){
        maior = numeros
    }
}
console.log(maior)

//6) Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let impar = []
for (let numeros of numbers){
    if (numeros % 2 == 1){
        impar.push(numeros)
    }
}

if (impar.length <= 0){
    console.log('Nenhum valor impar encontrado')
}
console.log(impar)

//7) Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menor = numbers[0]; 
for (let numeros of numbers){
    if (menor > numeros){
        menor = numeros
    }
}
console.log (menor)


//8) Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let novaArray = []
for (let index = 1; index < 26; index +=1 ){
    novaArray.push(index)
}
console.log(novaArray)

//9) Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for (let numeros of novaArray){
    console.log(numeros/2)
}