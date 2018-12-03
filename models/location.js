'use strict';
module.exports = (sequelize, DataTypes) => {
  const location = sequelize.define('location', {
      streetOne: DataTypes.STRING,
      streetTwo: DataTypes.STRING,
      city: DataTypes.STRING,
      postalCode: DataTypes.INTEGER
  }, {});
  location.associate = function(models) {
      location.belongsTo(models.stylist);
  };
  return location;
};