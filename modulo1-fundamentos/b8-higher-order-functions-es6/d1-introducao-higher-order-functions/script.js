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