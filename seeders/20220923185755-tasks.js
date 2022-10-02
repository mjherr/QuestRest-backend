'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tasks', [
      {
        title: 'mow the law',
        task_type: 'quest',   //quest or rest
        duration: 30,         //amount of time in minutes
        locale: 'outside',    //inside or outside
        work_load: 'heavy',   //heavy or light
        activity: 'physical',  //physical or mental
      },
      {
        title: 'read a book',
        task_type: 'rest',   //quest or rest
        duration: 60,       //amount of time in minutes
        locale: 'inside',    //inside or outside
        work_load: 'light',   //heavy or light
        activity: 'mental',  //physical or mental

      },
      {
        title: 'do homework',
        task_type: 'quest',   //quest or rest
        duration: 45,       //amount of time in minutes
        locale: 'inside',    //inside or outside
        work_load: 'heavy',   //heavy or light
        activity: 'mental',  //physical or mental
      },
      {
        title: 'go for a walk',
        task_type: 'rest',   //quest or rest
        duration: 60,       //amount of time in minutes
        locale: 'outside',    //inside or outside
        work_load: 'light',   //heavy or light
        activity: 'physical',  //physical or mental
      }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};
