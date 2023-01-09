'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class khachhang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // khachhang.hasMany(models.vexe,{foreignKey:'idkhachhang'});
      // khachhang.belongsToMany(models.nhaxe,{through:'danhgias',
      //                           foreignKey:'idkhachhang'});

      
    }
  }
  khachhang.init({
    idkhachhang: DataTypes.INTEGER,
    hoten: {
      type:DataTypes.STRING
    },
    email: {
        type:DataTypes.STRING
    },
    sdt: {
        type:DataTypes.STRING
    },
    ngaysinh: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    password: DataTypes.STRING
 
  }, {
    sequelize,
    modelName: 'khachhang',
  });
  return khachhang;
};