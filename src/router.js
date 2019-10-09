const express = require("express");
const getResources = require("./handlers/getResources.js");
const addResource = require("./handlers/addResource.js");

const router = express();

router.use(express.static("public"));

router.get("/resources", getResources);

router.post("/resources", addResource);

module.exports = router;
