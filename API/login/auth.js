const pool = require("../Pooldb");
class AccountsController {
    // [GET]
    async auth(req, res) {
        try {
            const {sdt,password} = req.body;
            const account = await pool.query(
                'SELECT idkhachhang,hoten,email,sdt,ngaysinh,password,admin FROM public."khachhangs" as kh WHERE sdt=$1 and password=$2',
                [sdt,password]
            );
            res.json(account.rows[0]);
            console.log(account)
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [GET]
    
}
// ac=new AccountsController;
// ac.auth({body:{sdt:"1728604899",password:"evjYVyT"}},1)
module.exports = new AccountsController;