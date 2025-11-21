const UserModel = require("../Models/UserModel");
const bcrypt = require('bcrypt');

class AuthService {
    
    static async register({name, password, email, phoneNumber, age}) {

        // custom logic to register user

        const userObject = new UserModel({
            name,
            password: await this.getHashPassword(password),
            email,
            phoneNumber,
            age
        })

        // talking to database/ saving user

        try {
            const savedUser = await userObject.save();
            return savedUser;
        } catch (error) {
            return error;
        }
    }

    static async getHashPassword(password) {
        const SALT_ROUNDS = await bcrypt.genSalt(); // 10 is the default value 
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        return hashedPassword;
    }

    static async login({ email, password }) {

        const isUserLoggedIn = {
            isLogged: false
        }

        try {
            const user = await this.findUserByEmail(email);

            if(!user) {
                return isUserLoggedIn;
            } else {
                const userPasswordFromDB = user.password; // hashed password : $2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW
                const isPasswordMatched = await bcrypt.compare(password, userPasswordFromDB); // true or false

                return {
                    isLogged: isPasswordMatched,
                }

            }

        } catch (error) {
            return {
                isLogged: false,
            };
        }



    }


    // null , userObject
    static async findUserByEmail(email) {
        const user = await UserModel.findOne({ email: email });
        return user;
    }
}

module.exports = AuthService;