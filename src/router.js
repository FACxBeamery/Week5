const express = require("express");
const router = express();
const getResources = require("./handlers/getResources.js");
const addResource = require("./handlers/addResource.js");

router.use(express.static("public"));

router.get("/resources", getResources);

router.post("/resources", addResource);

module.exports = router;
