const assert = require("assert");
const client = require("mongodb").MongoClient;
const config = require("../config.js");

let _db;

const initDB = callback => {
    if (_db) {
        console.warn("Trying to init DB again!");
        return callback(null, _db);
    }

    client.connect(
        "mongo://localhost:27017/",
        { useNewUrlParser: true, useUnifiedTopology: true },
        (error, db) => {
            if (error) {
                return callback(error);
            }

            console.log(
                "DB initialized - connected to: " +
                    config.db.connectionString.split("@")[1]
            );
            _db = db;
            return callback(null, _db);
        }
    );
};

const getDB = () => {
    assert.ok(_db, "Db has not been initialized. Please call init first.");
    return _db;
};

module.exports = { getDB, initDB };
