const test = require("tape");
const deleteAllData = require("../database/dbBuild").deleteAllData;
const populateDB = require("../database/dbBuild").populateDB;

const initDB = require("../database/connection.js").initDB;
const getDB = require("../database/connection.js").getDB;
const closeDB = require("../database/connection.js").closeDB;

const readResources = require("../database/queries/readResources");
const createResource = require("../database/queries/createResource");

test("initialising the database", t => {
    initDB().then(db => {
        deleteAllData(db)
            .then(populateDB(db))
            .then(closeDB)
            .then(() => t.end());
    });
});

test("async test 1", t => {
    // state how many test assertions will be made
    t.plan(1);
    // open new db connection for these tests
    initDB()
        .then(db => {
            //put tests here, using db returned from initDb promise
            //   findAllCheeses(db)
            readResources(
                db,
                (error, result) => {
                    if (error) {
                        throw error;
                    }
                    t.equal(
                        result.length,
                        3,
                        "resources array 3 express resources"
                    );
                    t.end();
                },
                "express"
            );
        })
        .then(closeDB);
});

test("async test 2", t => {
    t.plan(4);

    initDB()
        .then(db => {
            readResources(
                db,
                (error, result) => {
                    if (error) {
                        throw error;
                    }
                    t.equal(
                        result[0].resourceUrl,
                        "https://github.com/node-girls/node-workshop",
                        "first node workshop should be the Node girls HTTP server codealong"
                    );
                    t.equal(
                        result[0].comment,
                        "Node girls HTTP server workshop (no frameworks)",
                        "first node workshop should be the Node girls HTTP server codealong"
                    );
                    t.equal(
                        result[1].resourceUrl,
                        "https://github.com/foundersandcoders/Node-Intro-Workshop",
                        "second node workshop should be the Node HTTP server codealong"
                    );
                    t.equal(
                        result[1].comment,
                        "Node HTTP server codealong",
                        "second node workshop should be the Node HTTP server codealong"
                    );
                    t.end();
                },
                "node"
            );
        })
        .then(closeDB);
});

test("async test 3", t => {
    t.plan(3);

    initDB()
        .then(db => {
            readResources(
                db,
                (error, result) => {
                    if (error) {
                        throw error;
                    }
                    console.log(result);
                    t.equal(
                        typeof result[0].resourceUrl,
                        "string",
                        "first design workshop url should be a string"
                    );
                    t.equal(
                        typeof result[0].comment,
                        "string",
                        "first design workshop comment should be a string"
                    );
                    t.equal(
                        typeof result[0].dateAdded,
                        "number",
                        "first design workshop dateAdded value should be a number (in milliseconds)"
                    );
                    t.end();
                },
                "design"
            );
        })
        .then(closeDB);
});

test("async test 4", t => {
    // t.plan(3);

    const resourceToAdd = {
        topic: "fetch",
        dateAdded: new Date(Date.now()).toUTCString(),
        comment: "Fetch workshop",
        resourceUrl: "www.github.com/fetch-workshop"
    };

    initDB()
        .then(db => {
            createResource(db, resourceToAdd);
            return db;
        })
        .then(db => {
            readResources(
                db,
                (error, result) => {
                    if (error) {
                        throw error;
                    }
                    console.log(result);
                    t.equal(
                        result[0].resourceUrl,
                        resourceToAdd.resourceUrl,
                        "Added resource should have the resourceUrl of the resourceToAdd"
                    );
                    t.equal(
                        result[0].comment,
                        resourceToAdd.comment,
                        "Added resource should have the same comment as the resourceToAdd"
                    );
                    t.equal(
                        result[0].dateAdded,
                        resourceToAdd.dateAdded,
                        "Added resource should have the same dateAdded as the resourceToAdd"
                    );
                    t.equal(
                        result[0].topic,
                        resourceToAdd.topic,
                        "Added resource should have the same topic as the resourceToAdd"
                    );
                    t.end();
                },
                resourceToAdd.topic
            );
        })
        .then(closeDB);
});
