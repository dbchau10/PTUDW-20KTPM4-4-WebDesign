const express= require("express")
const app=express()
const expressHbs = require('express-handlebars');

app.engine('hbs', expressHbs.engine({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}))
app.set('view engine', 'hbs')

app.use(express.static(__dirname+'/static'))
console.log(__dirname)

app.get('/',(req,res)=>{
    res.render('index',{
        style_base: 'base.css',
        style_style: 'AboutUs_style.css',
        style_responsive: 'AboutUs_responsive.css',
        js: 'AboutUs_main.js',
    });
})

app.get('/Detail',(req,res)=>{
    res.render('Detail',{
        style_base: 'base.css',
        style_style: 'Detail_style.css',
        style_responsive: 'Detail_responsive.css',
        js: 'Detail_main.js',
    });
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