const readResources = (db, callback, topicFilter) => {
    db.collection("resources")
        .find({ topic: topicFilter })
        .toArray(callback);
};

module.exports = readResources;
