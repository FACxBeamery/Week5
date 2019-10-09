const readResources = (db, callback) => {
    db.collection("resources")
        .find()
        .toArray(callback);
};

module.exports = readResources;
