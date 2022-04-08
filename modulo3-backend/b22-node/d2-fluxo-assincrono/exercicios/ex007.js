function ex007() {
  const randomNumber = Math.round(Math.random() * 100)
  return new Promise((resolve, reject) => {
    if (randomNumber % 3 === 0) return resolve('Fizz');
    if (randomNumber % 5 === 0) return resolve('Buzz');
    if (randomNumber % 3 === 0 && randomNumber % 5 === 0) return resolve('FizzBuzz')
    reject(`Número sorteado: ${randomNumber}`)
  })
}

ex007().then(result => console.log(result)).catch(error => console.log(error))