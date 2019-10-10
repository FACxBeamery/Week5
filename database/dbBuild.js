const initialData = require("./initialDbData.js");

const deleteAllData = db => {
	return db.collection("resources").deleteMany({});
};

const populateDB = db => {
	return db.collection("resources").insertMany(initialData);
};

module.exports = { deleteAllData, populateDB };
