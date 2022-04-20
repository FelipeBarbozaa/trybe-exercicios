const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');
const req = require('express/lib/request');

describe('Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'create')
        .resolves(false);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await MoviesController.create(request, response);

      expect(response.json.calledWith({ message: 'Dados inválidos' })).to.be.equal(true);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'create')
        .resolves(true);
    })

    after(() => {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 201', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o json com a mensagem "Filme criado com sucesso!"', async () => {
      await MoviesController.create(request, response);

      expect(response.json.calledWith({message: 'Filme criado com sucesso!'})).to.be.equal(true);
    });

  });
});

describe('Ao chamar o controller do getById', () => {
  describe('Quando é encontrado um filme pelo "id"', () => {

    const response = {};
    const request = {};

    before(() => {
      request.params = 2;

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns()
      sinon.stub(MoviesService, 'getById').resolves({ id: 2})
    });

    after(() => {
      MoviesService.getById.restore();
    });
  
    it('É chamado o status com o código 200 - OK', async() => {
      await MoviesController.getById(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    })

    it('É chamado o json com as informações do filme', async() => {
      await MoviesController.getById(request, response);
      expect(response.json.calledWith({ id: 2})).to.be.equal(true);
    })

  })

  describe('Quando não é encontrado o filme pelo "id"', () => {
    const response = {};
    const request = {};

    before(() => {
      request.params = { id: 2 }
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(MoviesService, 'getById').resolves(false);
    });

    after(() => {
      MoviesService.getById.restore();
    })

    it('É chamado o status com o código 404 - Not found', async() => {
      await MoviesController.getById(request, response);
      expect(response.status.calledWith(404)).to.be.equal(true);
    })
    
    it('É chamado o json com com a mensagem "Not found"', async() => {
      await MoviesController.getById(request, response);
      expect(response.json.calledWith({ message: 'Not found'})).to.be.equal(true);
    })
  })
})