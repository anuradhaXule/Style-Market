'use strict';
module.exports = (sequelize, DataTypes) => {
  const photos = sequelize.define('photos', {
      photoName: DataTypes.STRING
  }, {});
  photos.associate = function(models) {
      photos.belongsTo(models.stylist);
  };
  return photos;
};