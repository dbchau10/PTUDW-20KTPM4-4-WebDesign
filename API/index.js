// const Joi = require('joi');
const express = require("express");
const app = express();
// const route = require('./routes');
// const cors = require("cors");

// app.use(cors());
app.use(express.json());


const auth=require("./login/auth")
app.use("/authenciation",auth.auth)

const xeController=require("./login/xeManage")
app.use("/findAllChuyenXe",xeController.findAllChuyenXe)
app.use("/findAllChuyenXeById",xeController.findAllChuyenXeById)
app.use("/findAllVeXeByUserId",xeController.findAllVeXeByUserId)
app.use("/findChuyenXeByPriceAsc",xeController.findChuyenXeByPriceAsc)
app.use("/findChuyenXeByPriceDesc",xeController.findChuyenXeByPriceDesc)
app.use("/findNhaXeById",xeController.findNhaXeById)
// routes init
// route(app);

// PORT
const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));