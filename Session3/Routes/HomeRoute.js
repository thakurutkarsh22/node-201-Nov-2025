const express = require('express');
const { HomeReponse, AboutResponse } = require('../Controllers/HomeController');
const router = express.Router();


router.get("/", HomeReponse);
router.get("/about", AboutResponse);


module.exports = router;