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
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    task_type: DataTypes.STRING,
    title: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    locale: DataTypes.STRING,
    work_load: DataTypes.STRING,
    activity: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};