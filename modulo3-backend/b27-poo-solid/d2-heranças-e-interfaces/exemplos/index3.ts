interface Logger {
  log(param: string): void;
}

class ConsoleLog implements Logger {
  log(param: string): void {
    console.log(param);
  }
}

class ConsoleLog2 implements Logger {
  log(param: string): void {
    console.log('Logger2: ', param);
  }
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLog()) {}

  save(key: string, value: string): void {
    this.logger.log(`Salvando o valor ${value} na chave ${key}`)
  }
}
const obj1 = new ConsoleLog();
obj1.log('pão')
const obj2 = new ConsoleLog2();
obj2.log('pão');

const teste1 = new ExampleDatabase(obj1)
teste1.save('cor', 'azul')
const teste2 = new ExampleDatabase(obj2)
teste2.save('cor', 'azul')
const teste3 = new ExampleDatabase()
teste3.save('cor', 'azul')



console.log(obj1);
console.log(obj2);
console.log(teste1);
console.log(teste2);
console.log(teste3);