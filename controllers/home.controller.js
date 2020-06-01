const categoryModel = require('../models/category.model');
const bookModel = require('../models/book.model');

async function indexPage(req, res) {
    var listCategory = await categoryModel.getListCategory();
    var listBook = await bookModel.getListBook();


    res.render('home/index',
        {
            listCategory: listCategory,
            listBook: listBook
        });
}

async function categoryPage(req, res) {
    var slug = req.params.slug;
    var currentPage = 1;

    if (req.query.page) {
        if (parseInt(req.query.page) < 1) {
            currentPage = 1;
        }
        else {
            currentPage = parseInt(req.query.page);
        }
    }

    var listCategory = await categoryModel.getListCategory();

    var selectCategory = listCategory.find((cate) => {
        return cate.slug === slug;
    });

    var booksByCategory = await bookModel.getListBookByCategory(selectCategory._id);

    var bookPerPage = 12;
    var totalPage = Math.floor(booksByCategory.length / bookPerPage) + 1;

    if (currentPage > totalPage) {
        currentPage = totalPage;
    }

    var listBookPerPage = booksByCategory.slice((currentPage - 1) * bookPerPage, currentPage * bookPerPage);

    res.render('home/category',
        {
            listCategory: listCategory,
            selectCategory: selectCategory,
            booksByCategory: listBookPerPage,
            currentPage: currentPage,
            totalPage: totalPage
        });
}

async function detailPage(req, res) {
    var listCategory = await categoryModel.getListCategory();
    res.render('home/detail', {
        listCategory: listCategory
    });
}

async function viewPage(req, res) {
    var listCategory = await categoryModel.getListCategory();
    res.render('home/view', {
        listCategory: listCategory
    });
}

module.exports = {
    indexPage,
    categoryPage,
    detailPage,
    viewPage
};