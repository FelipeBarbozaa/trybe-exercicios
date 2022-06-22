class Student  {
  private _matricula: string;
  private _nome: string;
  private _notas: number[];
  private _trabalho: number[];

  constructor(
    matricula: string,
    nome: string,
    ) {
    this._matricula = matricula;
    this._nome = nome;
    this._notas = [1, 2, 10];
    this._trabalho = [];
  }

  notaTotal() {
    const result = this._notas.reduce((sum, e) => {
      return sum += e;
    }, 0)
    console.log(result);
  }

  notaMedia() {
    const result = this._notas.reduce((sum, e) => {
      return sum += e;
    }, 0)
    console.log(result / this._notas.length)
  }
}

const teste = new Student('teste', 'Felipe');
teste.notaTotal();
teste.notaMedia();