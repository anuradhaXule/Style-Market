'use strict';
module.exports = (sequelize, DataTypes) => {
  const stylist = sequelize.define('stylist', {
      name: DataTypes.STRING,
      status: DataTypes.STRING,
      description: DataTypes.STRING,
      type: DataTypes.STRING,
      qualification: DataTypes.STRING,
      rating: DataTypes.INTEGER
  }, {});
  stylist.associate = function(models) {
    stylist.hasMany(models.rates);
    stylist.hasMany(models.location);
    stylist.hasMany(models.photos);
    stylist.hasMany(models.session);
    stylist.hasMany(models.skills);
  };
  return stylist;
};