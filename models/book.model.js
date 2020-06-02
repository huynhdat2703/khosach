const db = require('../util/database');

const bookSchema = new db.Schema({
    title: String,
    slug: String,
    image: String,
    view: Number,
    categoryID: String
});

const Book = db.model('Book', bookSchema);

function getListBook() {
    var listBook = Book.find({}).limit(6);
    return listBook;
}

function getBookByID(id) {
    var foundBook = Book.findById(id);
    return foundBook;
}

function getBookBySlug(slug) {
    var foundBook = Book.findOne({ slug });
    return foundBook;
}

function getListBookByCategory(categoryID) {
    var listBook = Book.find({ categoryID: categoryID });
    return listBook;
}

module.exports = {
    getListBook,
    getBookByID,
    getBookBySlug,
    getListBookByCategory
};