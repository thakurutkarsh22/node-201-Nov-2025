const express = require('express');
const { getAllUsers, getUserByGender, getUserByFirstName } = require('../Controllers/ActivityController');
const PasswordAuthMiddleware = require('../Middleware/PasswordAuthMiddleware');
const router = express.Router();


router.get("/users", PasswordAuthMiddleware, getAllUsers);

router.get("/users/search", PasswordAuthMiddleware, getUserByGender);

router.get("/users/getuser/:firstName", getUserByFirstName);

module.exports = router;