'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        user_name: 'Kyle',
        quests: 'none',
        rests: 'none',
        completed_tasks: 'none'
      },
      {
        user_name: 'Mary',
        quests: 'none',
        rests: 'none',
        completed_tasks: 'none'
      },
      {
        user_name: 'Maria',
        quests: 'none',
        rests: 'none',
        completed_tasks: 'none'
      }
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
