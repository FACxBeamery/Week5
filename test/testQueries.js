const test = require("tape");
const deleteAllData = require("../database/dbBuild").deleteAllData;
const populateDB = require("../database/dbBuild").populateDB;

const initDB = require("../database/connection.js").initDB;
const getDB = require("../database/connection.js").getDB;
const closeDB = require("../database/connection.js").closeDB;

const readResources = require("../database/queries/readResources");
const createResources = require("../database/queries/createResource");

test("initialising the database", t => {
	initDB().then(db => {
		deleteAllData(db)
			.then(populateDB(db))
			.then(closeDB)
			.then(() => t.end());
	});
});
