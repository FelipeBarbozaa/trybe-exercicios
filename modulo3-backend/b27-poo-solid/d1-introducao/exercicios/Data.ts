class Data {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day: number, month: number, year: number) {
    const dateStr = `${year}-${month}-${day}`;

    // verifica se a data é válida
    if (new Date(dateStr).getDate() !== day) {
      this._day = 1;
      this._month = 1;
      this._year = 1900;
    } else {
      this._day = day;
      this._month = month;
      this._year = year;
    }
  }
}

const testDate = new Data(29, 1, 1989);

console.log(testDate);