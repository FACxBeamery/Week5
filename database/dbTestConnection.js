require("dotenv").config();
const url = require("url");
const client = require("mongodb").MongoClient;

// let dbUrl;

let dbUrl = "mongodb://localhost:27017/trainingWorkshopsTest";

// if (process.env.NODE_ENV === "test") {
//     dbUrl = "mongodb://localhost:27017/trainingWorkshopsTest";
// }

let _client;
let _db;

const initDB = () => {
    return new Promise((resolve, reject) => {
        if (_db) {
            console.warn("Database already connected, use getDB()");
            resolve(_db);
        } else {
            client.connect(
                dbUrl,
                { useNewUrlParser: true, useUnifiedTopology: true },
                (error, client) => {
                    if (error) {
                        reject(error);
                    } else {
                        _client = client;
                        _db = client.db("trainingWorkshopsTest");
                        resolve(_db);
                    }
                }
            );
        }
    });
};

const getDB = () => {
    if (!_db) {
        throw new Error("Database has not yet been initialised");
        return _db;
    }
};

const closeDB = () => {
    _db = null;
    return _client.close();
};

module.exports = { initDB, getDB, closeDB };
