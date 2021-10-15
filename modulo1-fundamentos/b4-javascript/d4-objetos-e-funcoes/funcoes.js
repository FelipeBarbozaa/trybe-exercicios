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


//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorNome(array){
  let primeiroNome = array[0]
  for(let index of array){
    if(primeiroNome.length < index.length){
      primeiroNome = index
    }
  }
  return primeiroNome
}


console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))


//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function maisRepete(array){
  let quantidade = array.length
  let quantasVezes = {}
  for(let index = 0; index < array.length; index +=1){
    quantasVezes[+index] = 0
  }

  for(let primeiroNumero = 0; primeiroNumero < array.length; primeiroNumero+=1){
    let numeroAtual = array[primeiroNumero]
    for(let segundoNumero = 0; segundoNumero < array.length; segundoNumero+= 1){
      let numeroDepois = array[segundoNumero]
      if(numeroAtual === numeroDepois){
        quantasVezes[primeiroNumero] += 1
      }
    }
  }
  let maiorNumero = 0
  for(let index in quantasVezes){
    if(maiorNumero < quantasVezes[index]){
      maiorNumero = index
    }
  }
  return (`O número que mais se repete é o: ${array[maiorNumero]}`)
}


let array = [2, 3, 2, 5, 8, 2, 3]
console.log(maisRepete(array))


