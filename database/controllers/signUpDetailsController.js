const controller = {}

controller.show = (req, res) => {
    res.render('SignUpDetails',{layout: "loginLayout"});
}

module.exports = controller