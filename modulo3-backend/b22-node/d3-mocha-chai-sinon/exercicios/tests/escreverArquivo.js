const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');

const escreverArquivo = require('../escreverArquivo')

const ESCREVER_ARQUIVO = 'VQV com TDD';

describe('Executa a função escreverArquivo', () => {

  before(() => {
    sinon.stub(fs, 'writeFileSync')
  });

  after(() => {
    fs.writeFileSync.restore();
  })

  describe('A respota', () => {

    it('É uma "string"', () => {
      const resposta = escreverArquivo('./arquivo.txt', ESCREVER_ARQUIVO)
      expect(resposta).to.be.a('string');
    });

    it('é igual à "ok"', () => {
      const resposta = escreverArquivo('./arquivo.txt', ESCREVER_ARQUIVO)
      expect(resposta).to.be.equals('ok');
    });

  });
})