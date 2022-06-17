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
    up: (queryInterface, Sequelize) => __awaiter(this, void 0, void 0, function* () {
        yield queryInterface.createTable('books', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING(30),
            },
            price: {
                allowNull: false,
                type: Sequelize.DECIMAL(10, 2),
            },
            author: {
                allowNull: false,
                type: Sequelize.STRING(100),
            },
            isbn: {
                type: Sequelize.STRING(100),
            },
        });
    }),
    down: (queryInterface) => __awaiter(this, void 0, void 0, function* () {
        yield queryInterface.dropTable('books');
    })
};
