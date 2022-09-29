const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const adicionarTurno = (objeto, chave, valor) => objeto[chave] = valor
adicionarTurno(lesson2, 'turno', 'noite')

const listarKeys = (objeto) => {
  return Object.keys(objeto)
}

const tamanhoObjeto = (objeto) => {
  return Object.keys(objeto).length
}

const listarValores = (objeto) => {
  return Object.values(objeto)
}

const allLessons = {lesson1, lesson2, lesson3}

const numeroDeAlunos = () => {
  return lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes
}

const valorDaChave = (objeto, indice) => {
  return Object.values(objeto)[indice]
}

const verificarPar = (objeto, chave, valor) => {
  if (objeto[chave]) {
    if (Object.values(objeto[chave]).join('') === valor) {
      return true
    }
  return false
  }
}
