// function exampleRoute(req, res) {
//     const db = getDb();
// Do things with your database connection
//     res.json(results);
// }

const readResources = db => {
    db.collection("resources")
        .find()
        .toArray((error, result) => {
            if (error) {
                throw error;
            }

            console.log(result);
        });
};

module.exports = readResources;
