const controller = {}

controller.show = (req, res) => {
    res.render('UserInfo',{
        style_base: 'base.css',
        style_style: 'UserInfo_style.css',
        style_responsive: 'UserInfo_responsive.css',
        js: 'UserInfo_main.js',
    });
}

module.exports = controller