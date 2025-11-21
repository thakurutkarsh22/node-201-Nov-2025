const SECRET_JWT_KEY = process.env.SECRET_JWT_KEY
const jwt = require("jsonwebtoken");


function JWTAuthMiddleware(req, res, next) {
     const headers = req.headers;
     const authorization = headers["authorization"]; 
     const token = authorization.split(" ")[1]; // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJ0aGFrdXJsYWtzaGF5QGdtYWlsLmNvbSIsIm5hbWUiOiJsYWtzaGF5IiwicGhvbmUiOiI4ODk5Nzc2NjU1IiwiaWF0IjoxNzYzNzM5ODk1LCJleHAiOjE3NjM3Mzk5MDV9.yFlnwbmXDcjNub1geHpkB7Kex9HDZwLAjiC60OufLMU

     // bearer -> bill him 
     // c2c - > dont bill him 
     console.log(token, "token inside JWTAuthMiddleware");

     if(token == null) {
        return res.status(401).json({message: "Please Login!!"})
     } else {

        // verify that token 
        jwt.verify(token, SECRET_JWT_KEY, (error, decodePayload)=> {
            if(error) {
                return res.status(401).json({message: "Please re- Login!!", error})
            } else {

                next();
            }
        })
     }



}

module.exports = {JWTAuthMiddleware, SECRET_JWT_KEY};