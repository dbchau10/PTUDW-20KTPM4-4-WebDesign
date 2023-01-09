const controller = {}

controller.show = (req, res) => {
    res.render('index_notSignIn',{layout: 'mainLayout'});
}

module.exports = controller