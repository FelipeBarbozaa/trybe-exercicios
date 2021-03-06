export default abstract class Person {
  constructor(private _name: string, private _birthDate: Date) {}

  get name() {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('Nome deve ter no mínimo 3 caracteres!')
    }
    this._name = value;
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
