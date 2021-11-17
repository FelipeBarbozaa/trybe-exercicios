console.log('=====')
console.log('Exercicio 1')
const cadastro = (nome) => {
  const dados = {
    nome: nome,
    email: `${nome}@trybe.com`.toLowerCase().replace(" ", "_"),
  };
  return dados;
};

const newEmployees = () => {
  const employees = {
    id1: cadastro("Pedro Guerra"),
    id2: cadastro("Luiza Drumond"),
    id3: cadastro("Carla Paiva"),
  };
  return employees;
};

const sorteio = (numero, func) => {
  const numeroSorteado = Math.ceil(Math.random()*5)
  func(numero, numeroSorteado)
}
console.log('=====')
console.log('Exercicio 2')
const comparar = (numero, numeroSorteado) => {
  if (numero === numeroSorteado) {
    console.log(`Parabéns, você acertou!!
Numero escolhido: ${numero}
Numero sorteado: ${numeroSorteado}`) 
  } else {
    console.log(`Que pena, você errou!!
Numero escolhido: ${numero}
Numero sorteado: ${numeroSorteado}`)
  }
}
sorteio(3, comparar)

console.log('=====')
console.log('Exercicio 3')
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const hof = (gabarito, resposta, func) => {
  func(gabarito, resposta)
}

const verificar = (gabarito, resposta) => {
  let pontos = 0
  for (let i = 0; i < resposta.length; i += 1) {
    if (resposta[i] === 'N.A') {
      pontos += 0
    } else if (resposta [i] !== gabarito[i]) {
      pontos -= 0.5
    } else {
      pontos += 1
    }
  }
  console.log(pontos)
}

hof(RIGHT_ANSWERS, STUDENT_ANSWERS, verificar)
