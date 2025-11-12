const express = require('express');
const { createBlog, deleteBlogById, getAllBlogs } = require('../Controllers/BlogsController');
const router = express.Router();


router.post("/createBlog", createBlog);

router.post("/blog/:id", deleteBlogById);

router.get("/getAllBlogs", getAllBlogs);

module.exports = router;



