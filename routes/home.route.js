const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home.controller');

router.get('/', homeController.indexPage);

router.get('/category', homeController.categoryPage);

router.get('/detail', homeController.detailPage);

router.get('/view', homeController.viewPage);

module.exports = router;