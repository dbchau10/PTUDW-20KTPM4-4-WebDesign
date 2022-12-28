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
      vexe.belongsTo(models.chuyenxe,{foreignKey:'idchuyenxe'});
      vexe.belongsTo(models.khachhang,{foreignKey:'idkhachhang'});

    }
  }
  vexe.init({

    giatien: DataTypes.INTEGER,
    thoiGianDatVe: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    trangthaive: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'vexe',
  });
  return vexe;
};