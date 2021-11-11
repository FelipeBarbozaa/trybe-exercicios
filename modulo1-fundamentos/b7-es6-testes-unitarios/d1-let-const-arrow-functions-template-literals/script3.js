const fatorial = numero => {
  let resultado = numero;
  for (let i = numero - 1; i >= 1; i -= 1) {
    resultado *= i
  }
  return resultado;
}




const fatorial2 = (numero) => (
  numero === 1 ? 1 : numero * fatorial2(numero - 1)
);


const maiorPalavra = array => {
  const palavra = array.split(' ')
  let maiorPalavra = ''
  console.log(palavra)

  for (let i = 0; i < palavra.length; i += 1) {
    for (let index = 1; index < palavra.length - 1; index += 1) {
      if (palavra[i].length >= palavra[index].length) {
        maiorPalavra = palavra[i]
      }
    }
  }
  return maiorPalavra
}

console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'))