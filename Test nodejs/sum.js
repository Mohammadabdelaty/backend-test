// Get express into "express" string
const express = require ("express");
const app = express();
app.use(express.json()); // to parse json body

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

// Try it on your browser
app.listen(3000, () => {
    console.log(" Go to http://localhost:3000/num1/num2 with POST request to sum two numbers");
    console.log(" Go to http://localhost:3000/num with POST request print numbers from 0 to 9");
})