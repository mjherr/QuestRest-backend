//DEPENDENCIES 
const { Sequelize, DataTypes, Model } = require('sequelize')
// const sequelize = new Sequelize(process.env.PG_URI)

//MODEL
class Task extends Model { }

Task.init({
    task_type: {
        type: DataTypes.STRING, // either Quest or Rest
        allowNull: false
    },
    title: {
        type: DataTypes.STRING, // short description of the task ie, read a book, mop the kitchen, fold clothes
        primaryKey: true,
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER, // number signifying the expected amount of time the activity should take, in minutes
        allowNull: false
    },
    locale: {
        type: DataTypes.STRING, // we'll start with indoor/outdoor options.  this will help the user slim down the list of options
        allowNull: false
    },
    work_load: {
        type: DataTypes.STRING, // either light or heavy work
    },
    activity: {
        type: DataTypes.STRING, // either mental of physical
    },
}, {
    sequelize,
    modelName: 'Task',
    tableName: 'task',
    timestamps: false
})

//EXPORT
module.exports = Task