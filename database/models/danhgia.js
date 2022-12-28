'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class danhgias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
 
    }
  }
  danhgias.init({
    ngaydanhgia:  {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    sosao: DataTypes.INTEGER,
    noidung: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'danhgias',
  });
  return danhgias;
};