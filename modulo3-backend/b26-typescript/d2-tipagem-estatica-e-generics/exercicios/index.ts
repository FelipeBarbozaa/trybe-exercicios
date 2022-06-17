type Slices = 4 | 6 | 8
type Comum = 'Calabresa' | 'Frango' | 'Pepperoni';
type Vegetariana = 'Marguerita' | 'Palmito' | 'Cogumelo';
type Doce = 'Nutlea' | 'Goiabada com queijo' | 'Marshmallow'

interface Pizza {
  flavor: string;
  slices: Slices;
}

interface PizzaComum extends Pizza {
  flavor: Comum
}

const calabresa: PizzaComum = {
  flavor: 'Calabresa',
  slices: 6
}

console.log(calabresa);