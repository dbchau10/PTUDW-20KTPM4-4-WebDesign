'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class danhgia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
 
    }
  }
  danhgia.init({
    ngaydanhgia:  {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    sosao: DataTypes.FLOAT,
    noidung: DataTypes.STRING,
    idkhachhang:DataTypes.INTEGER,
    idnhaxe:DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'danhgia',
  });
  return danhgia;
};