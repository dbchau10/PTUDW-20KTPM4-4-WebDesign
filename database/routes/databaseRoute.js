const express=require("express");
const router=express.Router();

const databaseController=require("../controllers/databaseController");

router.get('/createTables',(req,res)=>{
    databaseController.sequelize.sync().then(()=>{
        res.send("tables created")
    })
})
router.get('/deleteTables',(req,res)=>{
    databaseController.sequelize.drop().then(()=>{
        res.send("drop all tables")
    })
})
module.exports=router;