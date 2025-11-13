const BlogModel = require("../Models/BlogsModel");

class BlogService {

    static async createBLog({title, author, content}) {
        // we will create a mongoose model object here
        const newBlog = new BlogModel({
            title: title,
            content: content,
            author: author
        });

        console.log("Inside service - before save", newBlog);

        // save to database 
        try {
            const response = await newBlog.save();
            return response;
        } catch(error) {
            return error
        }
    }
}


module.exports = BlogService;




// Inversion of control
// stratergy pattern