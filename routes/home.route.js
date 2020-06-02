const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home.controller');

router.get('/', homeController.indexPage);

router.get('/category/:slug', homeController.categoryPage);

router.get('/detail/:slug', homeController.detailPage);

router.get('/view/:book/:chap', homeController.viewPage);

module.exports = router;