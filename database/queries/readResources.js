const readResources = (db, callback, topicFilter) => {
    db.collection("resources")
        .find({ topic: topicFilter })
        .sort({ dateAdded: -1 })
        .toArray(callback);
};

module.exports = readResources;
