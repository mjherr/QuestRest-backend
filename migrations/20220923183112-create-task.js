'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      title: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      task_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      locale: {
        type: Sequelize.STRING,
        allowNull: false
      },
      work_load: {
        type: Sequelize.STRING,
        allowNull: false
      },
      activity: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};