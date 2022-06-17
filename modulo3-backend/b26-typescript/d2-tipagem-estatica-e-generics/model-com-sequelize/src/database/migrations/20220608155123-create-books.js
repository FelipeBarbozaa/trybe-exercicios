module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books', {
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
        type: Sequelize.DECIMAL(10,2),
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      isbn: {
        type: Sequelize.STRING(100),
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('books');
  }
};
