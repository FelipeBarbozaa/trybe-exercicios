//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromo(palavra){
  if (palavra === palavra.split("").reverse().join("")){
    return true
  } else {
    return false
  }

}
console.log(palindromo('arara'))



//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maior(array){
  valorInicial = array[0]
  for(let index = 0; index<array.length; index +=1){
    if(valorInicial < array[index]){
      valorInicial = array[index]
    }
  }
  return array.indexOf(valorInicial)
}
console.log(maior([2, 10, 20, 2, 30, 50, 100, 5, 7]))



//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menor(array){
  valorInicial = array[0]
  for(let index = 0; index<array.length; index +=1){
    if(valorInicial > array[index]){
      valorInicial = array[index]
    }
  }
  return array.indexOf(valorInicial)
}
console.log(menor([2, 4, 6, -50, 10, 0, -3]))


