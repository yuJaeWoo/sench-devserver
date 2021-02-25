'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.user, {
        through: 'multigroup',
        foreignKey: 'groupid'
      });
      this.belongsToMany(models.content, {
        through: 'groupcontent',
        foreignKey: 'groupid'
  });
}
  };
  group.init({
    membernumber: DataTypes.INTEGER,
    groupid: DataTypes.INTEGER,
    groupname: DataTypes.STRING,
    notice: DataTypes.STRING,
    totalcost: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'group',
  });
  return group;
};