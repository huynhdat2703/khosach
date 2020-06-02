const db = require('../util/database');

const chapterSchema = new db.Schema({
    chap: String,
    chapTitle: String,
    slug: String,
    content: String,
    bookID: String
});

const Chapter = db.model('Chapter', chapterSchema);

function getListChapter() {
    var listChapter = Chapter.find({}).limit(10);
    return listChapter;
}

function getChapterBySlugAndBookID(slug, bookID) {
    var foundChapter = Chapter.findOne({ slug: slug, bookID: bookID });
    return foundChapter;
}

module.exports = {
    getListChapter,
    getChapterBySlugAndBookID
};