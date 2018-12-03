'use strict';
module.exports = (sequelize, DataTypes) => {
  const reviews = sequelize.define('reviews', {
      review: DataTypes.TEXT
  }, {});
  reviews.associate = function(models) {
      reviews.belongsTo(models.session);
      reviews.belongsTo(models.salon);
  };
  return reviews;
};