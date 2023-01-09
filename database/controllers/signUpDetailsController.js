const controller = {}

controller.show = (req, res) => {
    res.render('SignUpDetails',{
        layout: 'loginLayout',
        title: 'Đăng ký'
    });
}

module.exports = controller