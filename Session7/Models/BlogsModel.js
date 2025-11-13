const mongoose = require('mongoose');
const validator = require('validator');

const { Schema } = mongoose;

const BlogSchema = new Schema(
    {
        title: { 
            type: String, 
            required: true, 
            trim: true,
            minlength: 3,
            maxlength: 100,
            validate: (data) => {
                const isALphaNumeric = validator.isAlphanumeric(data);
                return isALphaNumeric;
            }
        },
        content: { 
            type: String, 
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 100,
            validate: (data) => {
                const isAlpha = validator.isAlpha(data);
                return  isAlpha;
            }
        },
         author: { 
            type: String
        }
    },
    { timestamps: true }
);

const BlogModel = mongoose.model('Blog', BlogSchema);

// 'Blog' this is the collection name in MongoDB

module.exports = BlogModel;