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

app.use('/', require('./routes/aboutUsRoute'))
app.use('/', require('./routes/detailRoute'))
app.use('/', require('./routes/garageRoute'))
app.use('/', require('./routes/paymentRoute'))
app.use('/', require('./routes/searchRoute'))
app.use('/', require('./routes/userInfoRoute'))
app.use('/', require('./routes/indexRoute'))
app.use('/', require('./routes/loginRoute'))
app.use('/', require('./routes/signUpRoute'))
app.use('/', require('./routes/signUpDetailsRoute'))
app.use('/', require('./routes/forgetPasswordRoute'))
//---------------
app.use('/email', require('./routes/sendEmail'))

//-------------------------my code "Khoi"
const models=require('./models');
app.get('/createTables',(req,res)=>{
    models.sequelize.sync().then(()=>{
        res.send("tables created")
    })
})
app.get('/createData',(req,res)=>{
    models.sequelize.sync().then(()=>{
        res.send("data created")
    })
})
app.get('/deleteTables',(req,res)=>{
    models.sequelize.drop().then(()=>{
        res.send("drop all tables")
    })
})
//--------------migrate
// const seeders=require('./seeders');
// app.get('/createData',(req,res)=>{
//     seeders.sequelize.sync().then(()=>{
//         res.send("data created")
//     })
// })

//-------------------------my code "Khoi"

app.set('port',process.env.Port || 3000)
app.listen(app.get('port'),()=>{
    console.log("server is listening on port "+app.get('port'))
})


  