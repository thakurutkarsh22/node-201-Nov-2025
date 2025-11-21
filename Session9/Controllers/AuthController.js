const AuthService = require("../Service/AuthService");

async function login (req, res) {

    const { email, password } = req.body;

    try {
        const {isLogged} = await AuthService.login({ email, password });

        if(!isLogged) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }
        res.status(200).json({
            message: "User logged in successfully",
            data: isLogged
        });
    } catch (error) {
        res.status(500).json({
            message: "Error logging in user server error",
            error: error
        });
    }

}

async function register (req, res) {

    const { name, password, email, phoneNumber, age } = req.body;


    try {
        const response = await AuthService.register({name, password, email, phoneNumber, age});
        res.status(201).json({
            message: "User registered successfully",
            data: response
        });
    } catch (error) {
        res.status(500).json({
            message: "Error registering user",
            error: error
        });
    }
    
}

module.exports = {
    login,
    register
};