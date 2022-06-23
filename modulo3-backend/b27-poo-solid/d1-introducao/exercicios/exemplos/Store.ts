class Client {
  private _name: string;
  constructor (name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres');
    }

    this._name = value;
  }
}

class Item {
  private _name: string;
  private _price: number;
  
  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres')
    }

    this._name = value;
  }

  get price() {
    return this._price;
  }

  set price(value: number) {
    if (value < 0) {
      throw new Error('O preço deve ser positivo');
    }

    this._price = value;
  }
}


class Pedido {
  private _client: Client
  private _items: Item[] = [];
  private _method: string;
  private _discount: number = 0;

  constructor(client: Client, items: Item[], method: string, discount: number) {
    this._client = client;
    this._items = items;
    this._method = method;
    this._discount = discount;
  }

  calcTotal() {
    const result = this._items.reduce((sum, e) => {
      sum += e.price;
      return sum;
    }, 0)
    return result;
  }

  calcWithDiscount() {
    const result = this.calcTotal();
    const discount = result * this._discount;
    console.log(result - discount)
  }
}

const client1 = new Client('Felipe');

const sandwich = new Item('Sanduiche de presunto', 13.00);
const juice = new Item('Suco de Abacaxí', 5.00);

const order = new Pedido(client1, [sandwich, juice], 'dinheiro', 0.10)
order.calcTotal();
order.calcWithDiscount();