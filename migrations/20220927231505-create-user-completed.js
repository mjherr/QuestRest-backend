'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_completed', {
      completed_task_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_task_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      task_end: {
        type: Sequelize.DATE,
        allowNull: false
      },
      task_duration: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_completed');
  }
};