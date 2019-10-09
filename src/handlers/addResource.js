const createResource = require("../../database/queries/createResource.js");
const getDB = require("../../database/connection.js").getDB;

const addResource = (req, res) => {
    const db = getDB();

    createResource(db, { topic: "node", resourceUrl: "www.resource2.com" });

    res.status(201).send({ topic: "node", resourceUrl: "www.resource2.com" });
};

module.exports = addResource;
