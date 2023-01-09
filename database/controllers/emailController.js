const { json } = require('express');
// const pool = require("../models/database");
const send_email=require("../utils/sendemailfunc")
class emailController {
    // [GET]
    async send_email(req, res) {
        try {
            //res.send("hit");
            const {to_email,content} = req.params;
            await send_email(to_email,content).catch(err=>{
                res.send(`some error occurs ${err.message} can't send email to ${to_email}`)
            }).then(res.send(`sending email to ${to_email} with content ${content} successfully`))
        }
        catch (err){
            console.error(err.message);
        }
    
    }
   
}
module.exports = new emailController;