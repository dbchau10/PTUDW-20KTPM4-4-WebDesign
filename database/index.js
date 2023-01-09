const express = require("express");
const app = express();
const expressHbs = require("express-handlebars");

app.engine(
  "hbs",
  expressHbs.engine({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
  })
);
app.set("view engine", "hbs");

app.use(express.static(__dirname + "/static"));
console.log(__dirname);

app.use("/v1", require("./routes/authRoute/user"));
// app.use("/v2", require("./routes/authRoute/admin"));
app.use("/accountmanage", require("./routes/accountmanageRoute"));

// =======================================

//=======================================
app.use("/email/:to_email/:content", require("./routes/sendEmail"));

//-------------------------my code "Khoi"
const dbr = require("./routes/databaseRoute");
app.use("/database", dbr);

//--------------migrate
// const seeders=require('./seeders');
// app.get('/createData',(req,res)=>{
//     seeders.sequelize.sync().then(()=>{
//         res.send("data created")
//     })
// })

//-------------------------my code "Khoi"

app.set("port", process.env.Port || 3000);
app.listen(app.get("port"), () => {
  console.log("server is listening on port " + app.get("port"));
});
