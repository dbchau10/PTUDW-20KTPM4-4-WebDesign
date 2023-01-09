'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nhaxe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // nhaxe.hasMany(models.chuyenxe,{foreignKey:'idnhaxe'}); 
      // nhaxe.belongsToMany(models.khachhang,{through:'danhgias',
      //                           foreignKey:'idnhaxe'});
    }
  }
  nhaxe.init({
    idnhaxe: DataTypes.INTEGER,
    tennhaxe: DataTypes.STRING,
    noidunggioithieu: DataTypes.TEXT,
    anhnhaxe: DataTypes.STRING,
    sdt: {
        type:DataTypes.STRING
        
    },
    diachi: DataTypes.STRING,
    email: {
        type:DataTypes.STRING
       
    },
    website: DataTypes.STRING,
    soSaoTB: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'nhaxe',
  });
  return nhaxe;
};