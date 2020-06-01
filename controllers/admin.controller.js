function indexPage(req, res) {
    var days = new Date();

    var date = days.getDate();
    var month = days.getMonth() + 1;
    var year = days.getFullYear();

    console.log(date, month, year);
    res.render('admin/index');
}

module.exports = {
    indexPage
};
