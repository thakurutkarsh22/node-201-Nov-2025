const express = require('express');
const { getAllUsers, getUserByGender, getUserByFirstName } = require('../Controllers/ActivityController');
const router = express.Router();


router.get("/users", getAllUsers);

// 2. get user by gender
// WAY 1 : query params. (?) https://www.google.com/search?q=sachin
router.get("/users/search", getUserByGender);

// 3 get user by firstname 
// WAY 2: route params (/users/:id)
router.get("/users/getuser/:firstName", getUserByFirstName);

module.exports = router;