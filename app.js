// Get express into "express" string
const express = require ("express");

const app = express();
app.use(express.json()); // to parse json body

// your app

// This enpoint to print numbers from 0 to 9 using GET (default) browser request
//------------------------------------------------------------------------------
app.get("/num", (req, res) => { // When user request hello
    let numbers = "";
    for (let i = 0; i < 10; i++) {
        numbers += i + " - ";
    }
    res.send("Numbers: " + numbers); // send this a response
});


// This endpoint to calculate sum of two numbers (Added as path parameters) using POST request
// -------------------------------------------------------------------------------------------
app.post("/sum/:num1/:num2", (req, res) => { // add Path params to request in the path >> params are parameters
    console.log(req.params);
    const sum = parseInt(req.params.num1) + parseInt(req.params.num2);
    res.send("num1: " + req.params.num1 + "\nnum2: " + req.params.num2 + "\nsum: " + sum + "\n"); // send this a response
});


// This endpoint to update user information with his query and body params using PUT request
// -------------------------------------------------------------------------------------------
app.put("/gettext", (req, res) => { // When user request hello
    console.log(req.body); // requires app.use express.json // Body parameters
    // console.log(req.body.name);
    console.log(req.query); // ?age=30 >> Query paramters
    res.send(
        "body param: " + JSON.stringify(req.body) +
        "\nquery param: " + JSON.stringify(req.query) +
        "\nYour Name from body is: " + JSON.stringify(req.body.name) +
        "\nYour Age from query is: " + JSON.stringify(req.query.age));
});

app.put("/getjson", (req, res) => { // When user request hello
    console.log(req.body); // requires app.use express.json // Body parameters
    // console.log(req.body.name);
    console.log(req.query); // ?age=30 >> Query paramters
    res.json(
        {
            name: req.body.name,
            age: req.query.age
        }
    );
});


// This endpoint is to send back data in json with delete request
app.get("/maintenance", (req, res) => { // When user request hello
    res.sendFile(__dirname + "/views/maintnance.html");
});



// Try it on your browser
app.listen(3000, () => {
    console.log(" Go to http://localhost:3000/hello for hello page");
    console.log(" Go to http://localhost:3000/admin for admin page");
})