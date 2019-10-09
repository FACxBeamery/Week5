const readResources = require("../../database/queries/readResources.js");
const getDB = require("../../database/connection.js").getDB;

const getResources = (req, res) => {
    console.log("req.query: ", req.query);
    const db = getDB();

    readResources(
        db,
        (error, result) => {
            if (error) {
                throw error;
            }

            return res.status(200).send(result);
        },
        req.query.topic
    );
};

module.exports = getResources;
