const pool = require("../Pooldb");
class xeController {
    // [GET]
    async findAllVeXeByUserId(req, res) {
        try {
            const {UserId} = req.body;
            const account = await pool.query(
                'select * from public."vexes" where idkhachhang=$1',
                [UserId]
            );
            res.json(account.rows[0]);
      
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
            
        }
        catch (err){
            console.error(err.message);
        }
    }
    async findChuyenXeByPriceAsc(req, res) {
        try {
            const account = await pool.query(
                'select  idchuyenxe,min(vx.giatien) from public."chuyenxes" as cx inner join public."vexes" as vx ON vx.idghechuyenxe=cx.idchuyenxe group by idchuyenxe order by min(vx.giatien)'
               
            );
            res.json(account.rows[0]);
         
        }
        catch (err){
            console.error(err.message);
        }
    }
    async findChuyenXeByPriceDesc(req, res) {
        try {
            const account = await pool.query(
                'select  idchuyenxe,min(vx.giatien) from public."chuyenxes" as cx inner join public."vexes" as vx ON vx.idghechuyenxe=cx.idchuyenxe group by idchuyenxe order by min(vx.giatien) decs'
               
            );
            res.json(account.rows[0]);
         
        }
        catch (err){
            console.error(err.message);
        }
    }
    
    async findNhaXeById(req, res) {
        try {
            const {idnhaxe} = req.body;
            const account = await pool.query(
                'select * from public."nhaxes" where idnhaxe=$1',
                [idnhaxe]
            );
            res.json(account.rows[0]);
         
        }
        catch (err){
            console.error(err.message);
        }
    }
}
// ac=new AccountsController;
// ac.auth({body:{sdt:"1728604899",password:"evjYVyT"}},1)
module.exports = new xeController;