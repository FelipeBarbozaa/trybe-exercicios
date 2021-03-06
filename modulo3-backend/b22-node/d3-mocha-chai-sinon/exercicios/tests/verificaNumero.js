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

  it('Verifica se a resposta é uma string', () => {
    const resultado = verificaNumero(5);
    expect(resultado).to.be.a('string');
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
  
  it('Verifica se a resposta é uma string', () => {
    const resultado = verificaNumero(-5);
    expect(resultado).to.be.a('string');
  })
})

describe('Verifica se o número é neutro', () => {
  it('Verifica se o número 0 é neutro', () => {
    const resultado = verificaNumero(0);
    expect(resultado).to.be.equals('neutro');
  })

  it('Verifica se a resposta é uma string', () => {
    const resultado = verificaNumero(5);
    expect(resultado).to.be.a('string');
  })
})

describe('Verifica se a função aceita apenas números', () => {
  it('Verifica se ao passar uma string retorna uma mensagem de erro', () => {
    const resultado = verificaNumero('string');
    expect(resultado).to.be.equals('O valor deve ser um número!')
  })
})