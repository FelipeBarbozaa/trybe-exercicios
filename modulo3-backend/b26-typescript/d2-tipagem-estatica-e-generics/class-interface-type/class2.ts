enum Color {
  Black = "Pretos",
  White = "Brancos",
  Brown = "Castanhos",
}

interface Dog {
  name: string,
  age: number,
  color?: string
}

class Dog {
    constructor(name: string, age: number, color?: Color) {
      this.name = name;
      this.age = age;
      this.color = color
    }

    apresentar(): void {
      console.log(`Olá, eu sou o ${this.name}, tenho ${this.age} anos e meus pelos são ${this.color}`)
    }
}

const dog1 = new Dog('Billy', 3, Color.Brown)
const dog2 = new Dog('Felipe', 22)
console.log(dog1);
console.log(dog2);