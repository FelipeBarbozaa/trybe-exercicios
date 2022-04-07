const { exercicio } = require('./ex001');

const randomNumber = () => {
  num1 = Math.round(Math.random() * 100 );
  num2 = Math.round(Math.random() * 100 );
  num3 = Math.round(Math.random() * 100 );
  exercicio(num1, num2, num3).then((result) => {
    console.log(`Sucesso! O resultado é: ${result}`)
  })
    .catch((error) => console.log(`Falhou! Erro: ${error}`))
};

randomNumber();