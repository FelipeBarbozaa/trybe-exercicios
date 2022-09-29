let skills = ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub']

const tryber = palavra => {
  let string = 'Tryber x aqui!'
  let frase = string.replace('x', palavra)
  return(`${frase} Minhas cinco principais habilidades são:
  ${skills[0]}
  ${skills[1]}
  ${skills[2]}
  ${skills[3]}
  ${skills[4]}`)
}

console.log(tryber('Felipe'))
