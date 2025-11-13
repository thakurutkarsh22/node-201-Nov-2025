const { validateBlogInput } = require("../Validators/BlogInputValidation");


function blogInputValidationMiddleware(req, res, next) {
    const { error, value } = validateBlogInput(req.body);
    if (error) {
        return res.status(400).json({
            message: "Invalid input data in middleware",
            error: error
        });
    }

    // attach the sanitized/validated value for downstream handlers
    req.validatedBlog = value;
    next();
}

module.exports = blogInputValidationMiddleware;