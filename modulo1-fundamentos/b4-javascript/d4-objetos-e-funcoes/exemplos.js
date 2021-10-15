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