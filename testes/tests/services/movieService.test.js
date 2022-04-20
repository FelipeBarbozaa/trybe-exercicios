const sinon = require('sinon');
const { expect } = require('chai');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', async () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

describe('Busca um filme por "id"', () => {
  describe('Quando acha o filme', () => {

    before(() => {
      sinon.stub(MoviesModel, 'getById').resolves({ id: 2})
    })

    after(() => {
      MoviesModel.getById.restore();
    });

    it('O retorno é um objeto', async() => {
      const response = await MoviesService.getById(2);
      expect(response).to.be.a('object');
    })

    it('O "id" da busca está no objeto', async() => {
      const response = await MoviesService.getById(2);
      expect(response).to.have.a.property('id');
      expect(response.id).to.have.equals(2);
    })
  })
  describe('Quando não acha o filme', () => {

    before(() => {
      sinon.stub(MoviesModel, 'getById').resolves()
    })

    after(() => {
      MoviesModel.getById.restore();
    });

    it('O retorno é um boolean "false"', async() => {
      const response = await MoviesService.getById(2);
      expect(response).to.be.equal(false)
    })
  })
})