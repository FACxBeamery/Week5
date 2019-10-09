const readResources = require("../../database/queries/readResources.js");
const getDB = require("../../database/connection.js").getDB;

const getResources = (req, res) => {
    const db = getDB();

    readResources(db);
};

module.exports = getResources;
