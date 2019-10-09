const express = require("express");
const formidable = require("express-formidable");
const router = require("./router.js");
const initDB = require("../database/connection.js").initDB;

const app = express();

const port = process.env.PORT || 3000;

app.use(formidable());

app.use(router);

initDB()
    .then(_db => {
        app.listen(port, () => {
            console.log(`API Up and running on port ${port}`);
        });
    })
    .catch(console.error);
