const controller = {}

controller.show = (req, res) => {
    res.render('Garage',{
        style_base: 'base.css',
        style_style: 'Garage_style.css',
        style_responsive: 'Garage_responsive.css',
        js: 'Garage_main.js',
    });
}

module.exports = controller