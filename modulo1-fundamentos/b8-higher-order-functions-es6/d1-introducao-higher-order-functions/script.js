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

