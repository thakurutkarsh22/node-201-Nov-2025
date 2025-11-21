const mongoose = require('mongoose');
const validatorPackage = require('validator');

// bloom filter 
const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            validate: (data) => validatorPackage.isEmail(data),
        },
        password: { type: String, required: true, minlength: 6 },
        age: { type: Number, min: 0 },
        phoneNumber: {
            type: String,
            trim: true,
            validate: {
                validator: function (value) {
                    return validatorPackage.isMobilePhone(value, 'any');
                },
                message: props => `${props.value} is not a valid phone number`,
            },
        },
    },
    { timestamps: true }
);

// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) return next();
//     try {
//         const salt = await bcrypt.genSalt(SALT_ROUNDS);
//         this.password = await bcrypt.hash(this.password, salt);
//         next();
//     } catch (err) {
//         next(err);
//     }
// });

// userSchema.methods.comparePassword = function (candidatePassword) {
//     return bcrypt.compare(candidatePassword, this.password);
// };

// userSchema.set('toJSON', {
//     transform: (doc, ret) => {
//         delete ret.password;
//         delete ret.__v;
//         return ret;
//     },
// });

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;