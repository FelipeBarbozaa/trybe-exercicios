function divisao(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) reject(new Error('Não pode dividir um número por zero'));

    const resultado = num1 / num2
    resolve(resultado);
  })
}

divisao(10, 2)
  .then(result => console.log(result))
  .catch(err => console.log(err.message)) 