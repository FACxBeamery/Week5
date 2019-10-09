const createResource = (db, resourceToAdd) => {
    db.collection("resources").insertOne(resourceToAdd);
};

module.exports = createResource;
