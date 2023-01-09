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

app.use('/', require('./routes/indexRoute'))

// app.get('/',(req,res)=>{
//     res.render('index',{
//         style_base: 'base.css',
//         style_style: 'AboutUs_style.css',
//         style_responsive: 'AboutUs_responsive.css',
//         js: 'AboutUs_main.js',
//     });
// })

app.use('/', require('./routes/detailRoute'))

// app.get('/Detail',(req,res)=>{
//     res.render('Detail',{
//         style_base: 'base.css',
//         style_style: 'Detail_style.css',
//         style_responsive: 'Detail_responsive.css',
//         js: 'Detail_main.js',
//     });
// })


app.use('/', require('./routes/garageRoute'))

// app.get('/Garage',(req,res)=>{
//     res.render('Garage',{
//         style_base: 'base.css',
//         style_style: 'Garage_style.css',
//         style_responsive: 'Garage_responsive.css',
//         js: 'Garage_main.js',
//     });
// })

app.use('/', require('./routes/paymentRoute'))

// app.get('/Payment',(req,res)=>{
//     res.render('Payment',{
//         style_base: 'base.css',
//         style_style: 'Payment_style.css',
//         style_responsive: 'Payment_responsive.css',
//         js: 'Payment_main.js',
//     });
// })

app.use('/', require('./routes/searchRoute'))

// app.get('/Search',(req,res)=>{
//     res.render('Search',{
//         style_base: 'base.css',
//         style_style: 'Search_style.css',
//         style_responsive: 'Search_responsive.css',
//         js: 'Search_main.js',
//     });
// })

app.use('/', require('./routes/userInfoRoute'))

// app.get('/UserInfo',(req,res)=>{
//     res.render('UserInfo',{
//         style_base: 'base.css',
//         style_style: 'UserInfo_style.css',
//         style_responsive: 'UserInfo_responsive.css',
//         js: 'UserInfo_main.js',
//     });
// })
const models=require('./models');
app.get('/createTables',(req,res)=>{
   
    models.sequelize.sync().then(()=>{
        res.send("tables created")
    })
})
app.get('/createData',(req,res)=>{
    
    models.sequelize.sync().then(()=>{
        res.send("tables created")
    })
})
app.get('/deleteTables',(req,res)=>{
    
    models.sequelize.drop().then(()=>{
        res.send("drop all tables")
    })
})
app.set('port',process.env.Port || 3000)
app.listen(app.get('port'),()=>{
    console.log("server is listening on port "+app.get('port'))
})


  