// const Joi = require('joi');
const express = require("express");
const app = express();
// const route = require('./routes');
// const cors = require("cors");

// app.use(cors());
app.use(express.json());


const auth=require("./login/auth")
console.log(auth)
app.use("/authenciation",auth.auth)

// routes init
// route(app);

// PORT
const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));