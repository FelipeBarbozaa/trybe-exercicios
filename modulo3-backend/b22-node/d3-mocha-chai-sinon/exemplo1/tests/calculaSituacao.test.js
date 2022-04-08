const { expect } = require('chai');
const calculaSituacao = require('../calculaSituacao')

describe('Verifica o resultado da funcao', () => {
  it('média 4 retorna "reprovado"', () => {
    const resposta = calculaSituacao(4);
    expect(resposta).equal('reprovado');
  });

  it('média 8 retorna "aprovado"', () => {
    const resposta = calculaSituacao(8);
    expect(resposta).equal('aprovado');
  });

  it('média 7 retorna "aprovado"', () => {
    const resposta = calculaSituacao(7);
    expect(resposta).to.be.equals('aprovado');
  });

});