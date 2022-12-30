const controller = {}

controller.show = (req, res) => {
    res.render('Payment',{
        style_base: 'base.css',
        style_style: 'Payment_style.css',
        style_responsive: 'Payment_responsive.css',
        js: 'Payment_main.js',
    });
}

module.exports = controller