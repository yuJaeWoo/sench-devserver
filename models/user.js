'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.group, {
        through: 'multigroup',
        foreignKey: 'userid'
      });
    }
  };
  user.init({
    email: DataTypes.STRING,
    ingroup: DataTypes.INTEGER,
    groupname: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};