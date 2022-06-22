abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  constructor(private _name: string, private _power: string) {
    super();
  }

  talk(): void {
    console.log(`Hi, i'm ${this._name}. I attack at close range! `)
  };

  specialMove(): void {
    console.log(this._power);
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _power: string) {
    super();
  }

  talk(): void {
    console.log(`Hi, i'm ${this._name}. I attack at far range! `)
  }

  specialMove(): void {
    console.log(this._power);
  }
}

function character(character: Character) {
  character.talk();
  character.specialMove();
}

const yoshi = new MeleeCharacter('yoshi', 'Super dragon');
const samus = new LongRangeCharacter('samus', 'Zero Laser');

character(yoshi);
character(samus);