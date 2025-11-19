const express = require('express');
const { createBlog, deleteBlogById, getAllBlogs } = require('../Controllers/BlogsController');
const blogInputValidationMiddleware = require('../Middleware/BLogInputValidationMiddleware');
const router = express.Router();


router.post("/createBlog",blogInputValidationMiddleware, createBlog);

router.post("/blog/:id", deleteBlogById);

router.get("/getAllBlogs", getAllBlogs);

module.exports = router;



