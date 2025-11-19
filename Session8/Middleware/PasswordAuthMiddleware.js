const SECRET_SERVER_PASSWORD = process.env.SECRET_SERVER_PASSWORD;

function PasswordAuthMiddleware(req, res, next) {
     const headers = req.headers;
     const inputPassword = headers["authorization"]; // this password is from the client

    if(inputPassword === SECRET_SERVER_PASSWORD) {
        // good request
        next();
    } else {
        res.status(403).json({
            message: "Forbidden: Invalid Server Password"
        });
        return;
    }
}

module.exports = PasswordAuthMiddleware;