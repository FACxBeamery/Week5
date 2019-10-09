const express = require("express");
const formidable = require("express-formidable");
const router = require("./router.js");
const initDB = require("../database/connection.js").initDB;
const getDB = require("../database/connection.js").getDB;

const app = express();

const port = process.env.PORT || 3000;

app.use(formidable());

app.use(router);

// app.use("/", exampleRoute);

// initDB(error => {
//     app.listen(port, error => {
//         if (error) {
//             throw error; //
//         }
//         console.log("API Up and running on port " + port);
//     });
// });

initDB()
    .then(_db => {
        app.listen(port, () => {
            console.log(`API Up and running on port ${port}`);
        });
    })
    .catch(console.error);

// function exampleRoute(req, res) {
//     const db = getDb();
// Do things with your database connection
//     res.json(results);
// }
