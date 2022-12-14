'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_tasks', {
      user_task_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      task_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      task_start: {
        type: Sequelize.DATE,
        allowNull: false
      },
      is_completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    await queryInterface.dropTable('user_tasks');
  }
};