interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string; 
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) { }

  myFunc(myParam: number) {
    return `O resultado é: ${myParam + this.myNumber}`
  }
}

const teste = new MyClass(2);
console.log(teste.myFunc(5));