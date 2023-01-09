const controller = {}

controller.show = (req, res) => {
    res.render('ForgetPassword',{
        layout: 'loginLayout',
        title: 'Forget Password'
});
}

module.exports = controller