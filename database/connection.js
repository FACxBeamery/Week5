const assert = require("assert");
const mongoClient = require("mongodb").MongoClient;

let _db;

const initDB = () => {
    return new Promise((resolve, reject) => {
        const dbConnect = (error, client) => {
            if (error) {
                reject(error);
            } else {
                console.log("Initializing DB!");
                _db = client.db("trainingWorkshops");
                resolve(_db);
            }
        };

        if (_db) {
            console.warn("Trying to init DB again!");
            resolve(_db);
        }

        mongoClient.connect(
            "mongodb://localhost:27017/trainingWorkshops",
            { useNewUrlParser: true, useUnifiedTopology: true },
            dbConnect
        );
    });
};

const getDB = () => {
    assert.ok(_db, "Db has not been initialized. Please call initDB first.");
    return _db;
};

module.exports = { getDB, initDB };
