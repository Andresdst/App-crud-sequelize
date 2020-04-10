'use strict';
module.exports = (sequelize, DataTypes) => {

  const Task = sequelize.define('Task', {
    descripcion: DataTypes.TEXT
  }, {});

  Task.associate = function(models) {
    // relaciones de entidades

  };
  return Task;
};