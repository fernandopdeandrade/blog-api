'use strict';

/**
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      displayName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'display_name',
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
