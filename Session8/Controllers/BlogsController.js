const BlogModel = require("../Models/BlogsModel");
const BlogService = require("../Service/BlogService");
const { validateBlogInput } = require("../Validators/BlogInputValidation");

async function createBlog(req, res, next) {
    const {title, author, content} = req.body;

    // call the service
    try {
        console.log("Inside controller - before service call", req.body);
        const response = await BlogService.createBLog({title, author, content});
        console.log("Inside controller - before service call", response);

        res.status(201).json({
            message: "Blog created successfully",
            data: response
        });
    } catch(Error) {
        res.status(500).json({
            message: "Error creating blog",
            error: Error
        });
    }


}

async function deleteBlogById(req, res, next) {
    // TODO: implement deleteBlogById
    res.status(501).json({ message: 'Not implemented' });
}

async function getAllBlogs(req, res, next) {
    // TODO: implement getAllBlogs
    res.status(501).json({ message: 'Not implemented' });
}

module.exports = {
    createBlog,
    deleteBlogById,
    getAllBlogs,
};