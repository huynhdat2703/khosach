const userModel = require('../models/user.model');

async function indexPage(req, res) {
    var users = await userModel.getAllUsers();
    console.log(users);
    res.render('admin/index');
}

module.exports = {
    indexPage
};
