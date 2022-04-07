const readline = require('readline-sync');

do {
  const sorteio = Math.round(Math.random() * 10);
  const numero = readline.questionInt('Escolha um número: ')

  if(numero === sorteio) {
    console.log('Parabéns, número Correto!');
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${sorteio}`)
  }

  const continuar = readline.question("Deseja continuar? : (y / n)")
} while (continuar = "y");