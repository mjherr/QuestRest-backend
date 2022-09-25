'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        user_name: 'Kyle',
      },
      {
        user_name: 'Mary',
      },
      {
        user_name: 'Maria',
      }
    ])

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})

  }
};
