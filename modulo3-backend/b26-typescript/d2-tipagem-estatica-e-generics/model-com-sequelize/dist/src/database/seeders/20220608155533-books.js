var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = {
    up: (queryInterface) => __awaiter(this, void 0, void 0, function* () {
        yield queryInterface.bulkInsert('books', [
            {
                title: 'Código Limpo',
                price: 125.9,
                author: 'Robert C Martin',
                isbn: '8576082675'
            },
            {
                title: 'Refatoração',
                price: 129.9,
                author: 'Martin Fowler',
                isbn: '8575227246'
            },
            {
                title: 'Padrões de Projetos',
                price: 141.98,
                author: 'Erich Gamma',
                isbn: '8573076100'
            },
        ], {});
    }),
    down: (queryInterface) => __awaiter(this, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('books', null, {});
    }),
};
