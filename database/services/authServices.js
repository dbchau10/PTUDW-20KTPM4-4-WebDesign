const models=require('./models')

const controller = {};
controller.findAdmin =  async (req, res) => {
  var {phonenumber,password}=req.body;

  var admin= await models.khachhang.findAll({
    attribute: ['idkhachhang','hoten','email','sdt','ngaysinh','password','admin'],
    where:{
        sdt: phonenumber,
        password: password,
        admin:true
    },
  })
  return admin
};

module.exports = controller;
