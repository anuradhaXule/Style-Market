'use strict';
module.exports = (sequelize, DataTypes) => {
  const rates = sequelize.define('rates', {
      rateType: DataTypes.STRING,
      stylistType: DataTypes.STRING,
      rateValue: DataTypes.DOUBLE
  }, {});
  rates.associate = function(models) {
    rates.belongsTo(models.stylist);
  };
  return rates;
};