const express = require("express");
const formidable = require("express-formidable");
const router = require("./router.js");
const initDb = require("../database/connection.js").initDb;
const getDb = require("../database/connection.js").getDb;

const app = express();

const port = process.env.PORT || 3001;

// app.use("/", exampleRoute);

initDb(error => {
    app.listen(port, error => {
        if (error) {
            throw error; //
        }
        console.log("API Up and running on port " + port);
    });
});

// function exampleRoute(req, res) {
//     const db = getDb();
//     //Do things with your database connection
//     res.json(results);
// }
