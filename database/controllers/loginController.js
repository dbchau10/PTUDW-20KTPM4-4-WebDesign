const controller = {};

controller.show = (req, res) => {
  const { sdt, password } = req.body;
    res.render("Login", {
      layout: "loginLayout",
      title: "Đăng nhập",
    });
  };

controller.login = async (req, res) => {
  const { sdt, password } = req.body;

    const account = await 



    res.redirect('/')
  };


module.exports = controller;
