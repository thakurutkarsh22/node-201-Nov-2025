const BlogModel = require("../Models/BlogsModel");
const { validateBlogInput } = require("../Validators/BlogInputValidation");

async function createBlog(req, res, next) {


    // validation of the request 
    const {error, value} = validateBlogInput(req.body);
    if(error) {
        return  res.status(400).json({
            message: "Invalid input data",
            error: error.details[0].message
        });

        return;
    }



    const {title, author, content} = req.body;


    // we will create a mongoose model object here
    
    const newBlog = new BlogModel({
        title: title,
        content: content,
        author: author
    });

    // save to database 
    try {
        const response = await newBlog.save();
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