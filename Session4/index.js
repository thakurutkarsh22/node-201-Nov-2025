const express = require('express');
require('dotenv').config();

const ActivityRoute = require('./Routes/ActivityRoute');
const HomeRoute = require('./Routes/HomeRoute');
const server = express();

const PORT = process.env.PORT;

// app.use(express.json());

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





server.listen(PORT, () => {
    console.log(`Server EXPRESS listening on http://localhost:${PORT}`);
});
