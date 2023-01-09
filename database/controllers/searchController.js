const controller = {}

controller.show = (req, res) => {
    res.render('Search',{
        style_base: 'base.css',
        style_style: 'Search_style.css',
        style_responsive: 'Search_responsive.css',
        js: 'Search_main.js',
    });
}

module.exports = controller