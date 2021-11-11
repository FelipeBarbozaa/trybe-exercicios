const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

/*const customerInfo = (order) => {
  // "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  let delivery = Object.values(order.order.delivery)
  let orderName = Object.values(order)
  let street = Object.values(orderName[2])
  console.log(street)

  console.log(`Olá ${delivery[0]}, entrega para: ${orderName[0]}, Telefone: ${orderName[1]}, R. ${street[0]}, N: ${street[1]}, AP: ${street[2]}`)
  
}
customerInfo(order);*/


const orderModifier = (order) => {
  // "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  order['name'] = 'Luiz Silva'
  order['payment']['total'] = 50
  let nome = Object.values(order)[0]
  let pizza1 = Object.keys(order.order.pizza)[0]
  let pizza2 = Object.keys(order.order.pizza)[1]
  let refri = Object.values(order.order.drinks)[0]
  refri = Object.values(refri)[0]
  let preço = Object.values(order.payment)
  console.log(`Olá ${nome}, o total do seu pedido de ${pizza1}, ${pizza2} e ${refri} é de R$: ${preço},00.`)
}

orderModifier(order);