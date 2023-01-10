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

const accountmanager=require('./routes/accountmanageRoute');
app.use('/accountmanage', accountmanager)



app.use('/debug', (req,res)=>{res.send("hit")})
//---------------
const sendemailr=require('./routes/sendEmail');
app.use('/email', sendemailr)

//-------------------------my code "Khoi"
const dbr=require('./routes/databaseRoute')
app.use('/database',dbr)


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


  