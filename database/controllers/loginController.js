const controller = {}

controller.show = (req, res) => {
    res.render('Login',{layout: 'loginLayout'});
}

module.exports = controller