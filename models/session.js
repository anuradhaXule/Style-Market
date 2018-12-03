'use strict';
module.exports = (sequelize, DataTypes) => {
  const session = sequelize.define('session', {
      date: DataTypes.DATE,
      sessionType: DataTypes.STRING,
      comments: DataTypes.TEXT
  }, {});
  session.associate = function(models) {
      session.belongsTo(models.stylist);
      session.hasOne(models.reviews);
  };
  return session;
};