type Soma = {
  numberOne: number,
  numberTwo: number,
}

function somaDoisNumeros(resultado: Soma) {
  console.log(`O resultado é ${resultado.numberOne + resultado.numberTwo}`)
}

somaDoisNumeros({ numberOne: 10, numberTwo: 30 })