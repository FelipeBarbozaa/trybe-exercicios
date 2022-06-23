class Person {
  constructor(private _nome: string, private _birthDate: Date) {}

  get name() {
    return this._nome;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('Nome deve ter no mínimo 3 caracteres!')
    }
    this._nome = value;
  }

  get birthDate() {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this.validateBithDate(value);
    this._birthDate = value;
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  private validateBithDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro')
    if (Person.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos')
  }

}

const person1 = new Person('Felipe', new Date())








class Student extends Person {
  private static matricula = 2012080703507600;
  private _matricula: number;
  private _notas: number[];
  private _trabalhos: number[];
  constructor(nome: string, bithDate: Date ) {
    Student.addMatricula();
    super(nome, bithDate);
    this._matricula = Student.matricula;
    this._notas = [1, 3];
    this._trabalhos = [];
  }

  get matricula() {
    return this._matricula;
  }

  get notas() {
    return this._notas;
  }

  set notas(value: number[]) {
    if (value.length + this._notas.length > 4) throw new Error('Só pode ter 4 notas de provas')
    value.forEach((nota) => this._notas.push(nota))
  }

  get trabalhos() {
    return this._trabalhos;
  }

  set trabalhos(value: number[]) {
    if (value.length + this._trabalhos.length > 2) throw new Error('Só pode ter 2 notas de trabalhos');
    value.forEach((trabalho) => this._trabalhos.push(trabalho))
  }

  info() {
    console.log(`aluno ---- ${this.name}`)
    console.log(`matricula ---- ${this._matricula}`)
    console.log(`Data de nascimento ---- ${this.birthDate}`)
    console.log(`Notas de provas ---- ${this._notas}`)
    console.log(`Notas de trabalhos ---- ${this._trabalhos}`)
  }

  private static addMatricula() {
    Student.matricula += 1;
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

const estudante = new Student('Felipe', new Date());
estudante.notas = [5, 8]
estudante.trabalhos = [10]
estudante.info();
