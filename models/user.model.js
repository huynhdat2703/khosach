const db = require('../util/database');

const UserSchema = new db.Schema();
const UserModel = db.model("User", UserSchema);

function getAllUsers() {
    var listUser = UserModel.find({});
    return listUser;
}

module.exports = {
    getAllUsers
};