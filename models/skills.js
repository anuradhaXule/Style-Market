'use strict';
module.exports = (sequelize, DataTypes) => {
  const skills = sequelize.define('skills', {
    skillType: DataTypes.STRING
  }, {});
  skills.associate = function(models) {
      skills.belongsTo(models.stylist);
  };
  return skills;
};