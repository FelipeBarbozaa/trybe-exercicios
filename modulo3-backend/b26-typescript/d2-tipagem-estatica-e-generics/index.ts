type Point = {
  x: number;
  y: number;
};

function printCoord(cord: Point) {
  console.log("O valor da cordenada x é: " + cord.x);
  console.log("O valor da coordenada y é: " + cord.y);
}

printCoord({ x: 100, y: 100 });

type Bird = {
  name: string,
  age: number,
  sex: string
};

function printBird(info: Bird) {
  console.log(`O nome é: ${info.name}, tem ${info.age} anos e é do sexo ${info.sex}`)
}

printBird({ name: 'Jubileu', age: 1, sex: 'Não sabemos' })

type Soma = {
  numberOne: number,
  numberTwo: number,
}

function somaDoisNumeros(resultado: Soma) {
  console.log(`O resultado é ${resultado.numberOne + resultado.numberTwo}`)
}

somaDoisNumeros({ numberOne: 10, numberTwo: 30})

type address = {
  pais: string,
  cidade: string,
  bairro: string,
  rua: string,
  numero: number,
};

//======================================================================

// A função abaixo pode receber tanto um número
// quanto uma string.
function retornarCPF(cpf: number | string){
  console.log("Seu CPF é: " + cpf);
}

retornarCPF(12550145)

type estadoDaMatéria = "liquido" | "solido" | "gasoso";

