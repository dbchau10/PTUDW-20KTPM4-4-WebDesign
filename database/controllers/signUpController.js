const controller = {}

controller.show = (req, res) => {
    res.render('SignUp',{layout: "loginLayout"});
}

module.exports = controller