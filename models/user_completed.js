'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Completed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_Completed.init({
    completed_task_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_task_id: {
      type: DataTypes.INTEGER,
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
    modelName: 'User_Completed',
    tableName: 'user_completed',
    timestamps: false
  });
  return User_Completed;
};