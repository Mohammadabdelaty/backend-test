// Get express into "express" string
const express = require ("express");
const app = express();
app.use(express.json()); // to parse json body

// This endpoint is to send back data in json with delete request
app.get("/maintenance", (req, res) => { // When user request hello
    res.sendFile(__dirname + "/views/maintenance.html");
});

// Try it on your browser
app.listen(3000, () => {
    console.log(" Go to http://localhost:3000/maintenance with GET request for your testings");
})