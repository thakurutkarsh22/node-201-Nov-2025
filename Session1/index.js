const http = require('http');
const PORT = 8089;


const server = http.createServer((req, res) => {

    const url = req.url;
    console.log("request url is ", url);

    if(url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        
        res.write("<h1>hello welcome<h1>");
        res.write("<h2>to our website<h2>");
        res.end();
    } else if (url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        
        res.end("this website is created by someone who is coder.")
        // -----------  this will be illegal line 
        // res.write("<h2>this is a stunt<h2>");
    } else if (url === "/fitness") {
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


        const stringifiedObject = JSON.stringify(fitnessObj);

        // we have to tell the frontend this looks like a STRING data but in real life this data is JSON 
        // for this we will set the METADATA OF DATA - HEADER

        res.setHeader("Content-Type", "application/json"); // this line helps the client to identify the data type
        res.end(stringifiedObject);

    }

   
});

server.listen(PORT, () => {
    console.log("thumbs up server has started ar port ", PORT);
});

