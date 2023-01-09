const controller = {}

controller.show = (req, res) => {
    res.render('index',{layout: 'mainLayout'});
}

module.exports = controller