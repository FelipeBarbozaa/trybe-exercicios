const fs = require('fs').promises;

const arquivo = './simpsons.json'

const exercicio4 = async () => {
  const arquivoJson = await fs.readFile(arquivo, 'utf8')
  .then((result) => JSON.parse(result));

  arquivoJson.map(({ id, name }) => {
    console.log(`${id} - ${name}`)
  })
}

const exercicio41 = async (findId) => {
  const arquivoJson = await fs.readFile(arquivo, 'utf8')
  .then((result) => JSON.parse(result));

  const findCharacter = arquivoJson.find(character => parseInt(character.id) === findId)
  if (!findCharacter) throw new Error('id não encontrado')
  return findCharacter;
}

const exercicio42 = () => {

}