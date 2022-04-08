const { expect } = require('chai');

const verificaNumero = require('../verificaNumero');

describe('Verifica se o número é positivo', () => {
  it('Verifica se 5 é positivo', () => {
    const resultado = verificaNumero(5);
    expect(resultado).to.be.equals('positivo');
  })

  it('Verifica se 100 é positivo', () => {
    const resultado = verificaNumero(100);
    expect(resultado).to.be.equals('positivo');
  })

  it('Verifica se o valor é um número', () => {
    const resultado = verificaNumero(5);
    expect(resultado).to.be.a('number');
  })
})

describe('Verifica se o número é negativo', () => {
  it('Verifica se -2 é negativo', () => {
    const resultado = verificaNumero(-2);
    expect(resultado).to.be.equals('negativo');
  })
  
  it('Verifica se -10 é negativo', () => {
    const resultado = verificaNumero(-10);
    expect(resultado).to.be.equals('negativo');
  })
  
  it('Verifica se o valor é um número', () => {
    const resultado = verificaNumero(-5);
    expect(resultado).to.be.a('number');
  })
})

describe('Verifica se o número é neutro', () => {
  it('Verifica se o número 0 é neutro', () => {
    const resultado = verificaNumero(0);
    expect(resultado).to.be.equals('neutro');
  })

  it('Verifica se o valor é um número', () => {
    const resultado = verificaNumero(5);
    expect(resultado).to.be.a('number');
  })
})