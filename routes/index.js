var express = require("express");
var router = express.Router();

var db = require("../queries");

router.get("/api/writers", db.getAllPuppies);
router.get("/api/getByList", db.getAllListsByAuthor);

module.exports = router;
