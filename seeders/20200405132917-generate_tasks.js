'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

    */
      return queryInterface.bulkInsert('Tasks', [{
        id: 1,
        descripcion:'primera tarea',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      */
      return queryInterface.bulkDelete('Tasks', null, {});

  }
};
