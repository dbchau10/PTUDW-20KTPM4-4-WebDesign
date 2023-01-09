'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vexe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // vexe.belongsTo(models.chuyenxe,{foreignKey:'idchuyenxe'});
      // vexe.belongsTo(models.khachhang,{foreignKey:'idkhachhang'});

    }
  }
  vexe.init({
    idvexe: DataTypes.INTEGER,
    giatien: DataTypes.INTEGER,
    thoigiandatve: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    trangthaive: DataTypes.STRING,
    idchuyenxe: DataTypes.INTEGER,
    idkhachhang: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vexe',
  });
  return vexe;
};