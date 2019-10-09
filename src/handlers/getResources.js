const readResources = require("../../database/queries/readResources.js");
const getDB = require("../../database/connection.js").getDB;

const getResources = (req, res) => {
    const db = getDB();

    readResources(db, (error, result) => {
        if (error) {
            throw error;
        }

        return res.status(200).send(result);
    });
};

module.exports = getResources;
