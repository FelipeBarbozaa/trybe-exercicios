const readline = require('readline-sync');

function runGame() {
  const sorteio = Math.round(Math.random() * 10);
  const numero = readline.questionInt('Escolha um número: ')

  if(numero === sorteio) {
    console.log('Parabéns, número Correto!');
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${sorteio}`)
  }

  const novamente = readline.question('Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) '
  );

  if (novamente !== 's') return console.log('Até a próxima!') 

  runGame();
};

runGame();