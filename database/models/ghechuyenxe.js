'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ghechuyenxe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ghechuyenxe.belongsTo(models.chuyenxe,{foreignKey:'idchuyenxe'});

    }
  }
  ghechuyenxe.init({
    vitri: DataTypes.STRING,
    trangthai: DataTypes.BOOLEAN
 
  }, {
    sequelize,
    modelName: 'ghechuyenxe',
  });
  return ghechuyenxe;
};