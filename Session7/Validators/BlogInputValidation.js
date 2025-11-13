const Joi = require('joi');

const blogSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    author: Joi.string().optional()
});



// data will be input from the postman 
/**
 * 
 * {

    "title": "Indiawonby2runs222222",
    "content": "",
    "author": "",
    "nationality": "India",
    "age": "20"
}
 */

function validateBlogInput(inputDataFromPOstman) {
    return blogSchema.validate(inputDataFromPOstman);
}

module.exports = {
    validateBlogInput
};