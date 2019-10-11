require("dotenv").config();
const assert = require("assert");
const mongoClient = require("mongodb").MongoClient;
const deleteAllData = require("../database/dbBuild.js").deleteAllData;
const populateDB = require("../database/dbBuild.js").populateDB;

let _db;
let _client;

let dbUrl;

if (process.env.NODE_ENV === "test") {
    dbUrl = process.env.DATABASE_URL_TEST;
} else {
    dbUrl = process.env.DATABASE_URL;
}

const dbConfig = { useNewUrlParser: true, useUnifiedTopology: true };

const initDB = () => {
    return new Promise((resolve, reject) => {
        const dbConnect = (error, client) => {
            if (error) {
                reject(error);
            } else {
                console.log("Initializing DB!");
                _client = client;
                _db = client.db("trainingWorkshops");
                deleteAllData(_db);
                populateDB(_db);
                resolve(_db);
            }
        };

        if (_db) {
            console.warn("Trying to init DB again!");
            resolve(_db);
        }

        mongoClient.connect(dbUrl, dbConfig, dbConnect);
    });
};

const getDB = () => {
    assert.ok(_db, "Db has not been initialized. Please call initDB first.");
    return _db;
};

const closeDB = () => {
    _db = null;

    return _client.close();
};
module.exports = { getDB, initDB, closeDB };
