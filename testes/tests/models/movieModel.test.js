const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  })

  describe('quando é inserido com sucesso', async () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });

  });
});

describe('Pesquisa um filme por "id"', () => {
  describe('Quando o filme é encontrado', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([{ id: 2 }])
    });
  
    after(() => {
      connection.execute.restore();
    });
    it('Retorna um objeto', async() => {
      const response = await MoviesModel.getById(2);
      expect(response).to.be.a('object');
    })

    it('O objeto possui o "id" do filme buscado', async() => {
      const response = await MoviesModel.getById(2);
      expect(response.id).to.be.equals(2);
    })
  })

  describe('Quando o filme não é encontrado', () => {
  
    before(() => {
    sinon.stub(connection, 'execute').resolves([[]])
    });

    after(() => {
      connection.execute.restore();
    });

    it('Retorna um boolean "false"', async() => {
      const response = await MoviesModel.getById(2);
      expect(response).to.be.equal(false);
    })
  })

})