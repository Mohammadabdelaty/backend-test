// Get express into "express" string
const express = require ("express");

const app = express();

// your app
app.get("/hello", (req, res) => { // When user request hello
    res.send("Hello Mohammad!"); // send this a response
});

// Try it on your browser
app.listen(3000, () => {
    console.log(" Go to http://localhost:3000/hello");
})