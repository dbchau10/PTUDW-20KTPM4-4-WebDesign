const controller = {}

controller.show = (req, res) => {
    res.render('SignUp',{
        layout: 'loginLayout',
        title: 'Đăng ký'
    });
}

module.exports = controller