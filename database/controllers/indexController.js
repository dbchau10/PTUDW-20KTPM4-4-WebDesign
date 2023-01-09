const controller = {}

controller.show = (req, res) => {
    res.render('index',{
        layout: 'mainLayout',
        title: 'Trang chủ'
    });
}

module.exports = controller