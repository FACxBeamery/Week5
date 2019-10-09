const assert = require("assert");
const mongoClient = require("mongodb").MongoClient;

let _db;

// const initDB = callback => {
//     if (_db) {
//         console.warn("Trying to init DB again!");
//         return callback(null, _db);
//     }

//     mongoClient.connect(
//         "mongo://localhost:27017/",
//         { useNewUrlParser: true, useUnifiedTopology: true },
//         (error, db) => {
//             if (error) {
//                 return callback(error);
//             }

//             console.log(
//                 "DB initialized - connected to: " +
//                     config.db.connectionString.split("@")[1]
//             );
//             _db = db;
//             return callback(null, _db);
//         }
//     );
// };

const initDB = () => {
    return new Promise((resolve, reject) => {
        const dbConnect = (error, client) => {
            if (error) {
                reject(error);
            } else {
                console.log("reached connection to db");
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
    assert.ok(_db, "Db has not been initialized. Please call init first.");
    return _db;
};

module.exports = { getDB, initDB };
