const sum = require('./sum');

describe('Requisito 1 - Função de soma', () => {
  it('A função recebe 2 e 3 e retorna 5', () => {
    expect(5).toEqual(sum(2, 3))
  })

  it('A função recebe 5 e 5 e retorna 10', () => {
    expect(10).toEqual(sum(5, 5))
  })
})
