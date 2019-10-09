const express = require("express");
const getResources = require("./handlers/getResources.js");

const router = express();

router.get("/resources", getResources);

// router.post("/resources", addResource);

module.exports = router;
