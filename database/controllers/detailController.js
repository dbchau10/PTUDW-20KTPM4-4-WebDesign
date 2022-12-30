const controller = {}

controller.show = (req, res) => {
    res.render('Detail',{
        style_base: 'base.css',
        style_style: 'Detail_style.css',
        style_responsive: 'Detail_responsive.css',
        js: 'Detail_main.js',
    });
}

module.exports = controller