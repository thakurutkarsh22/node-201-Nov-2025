const express = require('express');
const ActivityRoute = require('./Routes/ActivityRoute');
const HomeRoute = require('./Routes/HomeRoute');
const server = express();

const PORT = 8089;

// app.use(express.json());


server.use("/", HomeRoute);


// (req, res) => {} -> REQUEST HANDLER

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
        // json is setting the header Content-Type to application/json and also stringifying the object
    res.status(200).json(fitnessObj);
});


// ACtivity 
// use supports all req methods - GET, POST, PUT, DELETE
server.use("/api/v1/activity", ActivityRoute);





server.listen(PORT, () => {
    console.log(`Server EXPRESS listening on http://localhost:${PORT}`);
});
