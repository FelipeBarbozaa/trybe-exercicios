// Reescreva o código do exercício anterior para que utilize async/await .

const { exercicio } = require('./ex001');

const randomNumber = async () => {
  num1 = Math.round(Math.random() * 100 );
  num2 = Math.round(Math.random() * 100 );
  num3 = Math.round(Math.random() * 100 );
  try {
    const resultado = await exercicio(num1, num2, num3)
    console.log(resultado);
  } catch (error) {
    console.log(error)
  }
};

randomNumber();