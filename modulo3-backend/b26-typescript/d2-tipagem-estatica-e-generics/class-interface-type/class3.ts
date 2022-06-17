interface House {
  owner: string,
  color: string,
  area: number;
  apresentar(owner: string): void;
}

class House {
    constructor(owner: string, color: string, area: number) {
      this.owner = owner,
      this.color = color,
      this.area = area
    }

    apresentar(owner: string) {
      console.log(owner)
    }
}

const house1 = new House('Felipe', 'Branca', 25)
house1.apresentar(house1.owner)