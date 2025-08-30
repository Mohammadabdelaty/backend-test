// Connect to the database
const { Client } = require("pg");
require('dotenv').config({ path: 'config/dev.env' });

const client = new Client ({
    user: process.env.USERNAME,
    host: process.env.HOST,
    database: process.env.DBNAME,
    password: process.env.USER_PASSOWRD,
    port: process.env.PORT
});

client.connect()
    .then(() => {
        console.log('Connected to the PostgreSQL database');
    })
    .catch(err => console.error('Connection error', err.stack));

module.exports = client;