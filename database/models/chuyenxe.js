'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chuyenxe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      chuyenxe.belongsTo(models.nhaxe,{foreignKey:'idnhaxe'});
      chuyenxe.hasMany(models.vexe,{foreignKey:'idchuyenxe'}); 
      chuyenxe.hasMany(models.ghechuyenxe,{foreignKey:'idchuyenxe'}); 


    }
  }
  chuyenxe.init({
    anhchuyenxe: DataTypes.STRING,
    noikhoihanh: DataTypes.STRING,
    noiketthuc: DataTypes.STRING,
    giokhoihanh: {
        type:DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    gioketthuc: {
        type:DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    loaixe: DataTypes.STRING,
    sochongoiconlai: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'chuyenxe',
  });
  return chuyenxe;
};