'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Task, User }) {
      User_Tasks.hasMany(Task, {

      })
      User_Tasks.belongsTo(User, {

      })
    }

  }
  User_Tasks.init({
    user_task_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    task_start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    is_completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    task_end: {
      type: DataTypes.DATE,
      allowNull: false
    },
    task_duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User_Task',
    tableName: 'user_tasks',
    timestamps: false
  });
  return User_Tasks;
};