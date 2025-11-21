const express = require('express');
const { getAllUsers, getUserByGender, getUserByFirstName } = require('../Controllers/ActivityController');
const PasswordAuthMiddleware = require('../Middleware/PasswordAuthMiddleware');
const { JWTAuthMiddleware } = require('../Middleware/JWTAuthMiddleware');
const router = express.Router();


router.get("/users", JWTAuthMiddleware, getAllUsers);

router.get("/users/search", PasswordAuthMiddleware, getUserByGender);

router.get("/users/getuser/:firstName", getUserByFirstName);

module.exports = router;