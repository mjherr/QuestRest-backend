'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User_Tasks, User }) {
      Task.belongsTo(User_Tasks, {

      })
      Task.belongsToMany(User, {
        through: User_Tasks
      })
    }
  }
  Task.init({
    task_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.SERIAL
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    task_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    locale: {
      type: DataTypes.STRING,
      allowNull: false
    },
    work_load: {
      type: DataTypes.STRING,
    },
    activity: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks',
    timestamps: false
  });
  return Task;
};