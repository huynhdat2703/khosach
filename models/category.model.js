const db = require('../util/database');

const categorySchema = new db.Schema({
    category: String,
    slug: String
});

const Category = db.model('Category', categorySchema);

function getListCategory() {
    var listCategory = Category.find({});
    return listCategory;
}

module.exports = {
    getListCategory
};