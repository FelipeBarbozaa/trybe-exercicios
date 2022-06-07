type Bird = {
  name: string,
  age: number,
  sex: string
};

function printBird(info: Bird) {
  console.log(`O nome é: ${info.name}, tem ${info.age} anos e é do sexo ${info.sex}`)
}

printBird({ name: 'Jubileu', age: 1, sex: 'Não sabemos' })