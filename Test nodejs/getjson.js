// Get express into "express" string
const express = require ("express");
const app = express();
app.use(express.json()); // to parse json body

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

// Try it on your browser
app.listen(3000, () => {
    console.log(" Go to http://localhost:3000/getjson with PUT request to get what you send in the body");
})