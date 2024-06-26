const Pool = require('pg').Pool;
require('dotenv').config();

// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "students",
//     password: "root",
//     port: 5433 
// })


const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
})


module.exports = pool;