function indexPage(req, res) {
    res.render('home/index');
}

function categoryPage (req, res) {
    res.render('home/category');
}

function detailPage (req, res) {
    res.render('home/detail');
}

function viewPage (req, res) {
    res.render('home/view');
}

module.exports = {
    indexPage,
    categoryPage,
    detailPage,
    viewPage
};