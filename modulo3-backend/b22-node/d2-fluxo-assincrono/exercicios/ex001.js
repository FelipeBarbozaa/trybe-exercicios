const exercicio = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if ((num1 + num2) * num3 < 50) return new Error(reject('Valor muito baixo!'))
    if(typeof(num1) !== 'number' || typeof(num2) !== 'number' || typeof(num3) !== 'number') {
      return new Error(reject('Todos os valores devem ser numericos'))
    }
    return resolve((num1 + num2 ) * num3 )
  })
}

/*
exercicio(10, 10, 8).then((resultado) => {
  console.log(`Resultado: ${resultado}`)
})
.catch((err) => console.log(`Erro: ${err}`));


function exercicio2(num1, num2, num3) {
  return (num1 + num2) * num3
}
*/

module.exports = {
  exercicio
};