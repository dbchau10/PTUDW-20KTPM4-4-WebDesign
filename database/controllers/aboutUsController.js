const controller = {}

controller.show = (req, res) => {
    res.render('AboutUs',{
        style_base: 'base.css',
        style_style: 'AboutUs_style.css',
        style_responsive: 'AboutUs_responsive.css',
        js: 'AboutUs_main.js',
    });
}

module.exports = controller