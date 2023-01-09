const controller = {}

controller.show = (req, res) => {
    res.render('Login',{
        layout: 'loginLayout',
        title: 'Đăng nhập'
    });
}

module.exports = controller