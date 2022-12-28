const express= require("express")
const app=express()

app.get('/',(req,res)=>{
    res.send("con cat")
})
app.get('/createTables',(req,res)=>{
    let models=require("./models")
    models.sequelize.sync().then(()=>{
        res.send("tables created")
    })
})
app.get('/deleteTables',(req,res)=>{
    let models=require("./models")
    models.sequelize.drop().then(()=>{
        res.send("drop all tables")
    })
})
app.set('port',process.env.Port || 3000)
app.listen(app.get('port'),()=>{
    console.log("server is listening on port "+app.get('port'))
})