const express = require('express');
const mongoose = require("mongoose")
require('dotenv').config();

const ActivityRoute = require('./Routes/ActivityRoute');
const HomeRoute = require('./Routes/HomeRoute');
const BlogRoute = require('./Routes/BlogRoute');
const AuthRoute = require('./Routes/AuthRoute');
const server = express();

const PORT = process.env.PORT;

// this is a universal middleware
// 1. it will run for every request
// 2. it should be placed before all the routes
server.use(express.json());

server.use("/", HomeRoute);

// FITNESS PAGE
server.get("/fitness", (req, res) => {
    const fitnessObj = {
            name: "utkarsh",
            gender: "male",
            phone: 9933774466,
            age: 25,
            hobbies: ["cycling", "gymming", "running"],
            shouldSleep: true,
            address: {
                street: "123 main street",
                city: "new york",
                state: "NY",
                country: "USA"
            }
        }
    res.status(200).json(fitnessObj);
});


// ACtivity 
server.use("/api/v1/activity", ActivityRoute);

// blogs 
server.use("/api/v1/blog", BlogRoute);

// auth route 
server.use("/api/v1/auth", AuthRoute);



const MONGO_URI = process.env.MONGDB_URI + '' + process.env.DB_NAME + '';

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });




server.listen(PORT, () => {
    console.log(`Server EXPRESS listening on http://localhost:${PORT}`);
});
