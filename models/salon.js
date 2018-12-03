'use strict';
module.exports = (sequelize, DataTypes) => {
  const salon = sequelize.define('salon', {
      salonName: DataTypes.STRING
  }, {});
  salon.associate = function(models) {
    salon.hasMany(models.reviews);
  };
  return salon;
};