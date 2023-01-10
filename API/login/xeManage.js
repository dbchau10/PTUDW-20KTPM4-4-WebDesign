const pool = require("../Pooldb");
class AccountsController {
    // [GET]
    async findAllVeXeByUserId(req, res) {
        try {
            const {UserId} = req.body;
            const account = await pool.query(
                'select * from public."vexes" where idkhachhang=$1',
                [UserId]
            );
            res.json(account.rows[0]);
            console.log(account)
        }
        catch (err){
            console.error(err.message);
        }
    }
    // [GET]
    async findAllChuyenXe(req, res) {
        try {
            const account = await pool.query(
                'select * from public."chuyenxes"'
            );
            res.json(account.rows[0]);
            console.log(account)
        }
        catch (err){
            console.error(err.message);
        }
    }
    async findAllChuyenXeById(req, res) {
        try {
            const {id} = req.body;
            const account = await pool.query(
                'select * from public."chuyenxes" where idchuyenxe=$1',
                [id]
            );
            res.json(account.rows[0]);
            console.log(account)
        }
        catch (err){
            console.error(err.message);
        }
    }
    async findChuyenXeByPriceAsc(req, res) {
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
    async findChuyenXeByPriceDesc(req, res) {
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
    async findNhaXeById(req, res) {
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
}
// ac=new AccountsController;
// ac.auth({body:{sdt:"1728604899",password:"evjYVyT"}},1)
module.exports = new AccountsController;