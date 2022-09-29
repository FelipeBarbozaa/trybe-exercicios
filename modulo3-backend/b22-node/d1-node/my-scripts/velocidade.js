const readline = require('readline-sync');

const distancia = readline.questionInt('Qual a distância?(metros) : ');
const tempo = readline.questionInt('Qual é o tempo (segundos)? : ');

const velocidade = distancia / tempo;

console.log(`Velocidade de ${velocidade} metros por segundo! `);