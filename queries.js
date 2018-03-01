var promise = require("bluebird");

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require("pg-promise")(options);
var connectionString = "postgres://testpuppies:testpuppies@localhost:5432/lyre";
var db = pgp(connectionString);

// add query functions

module.exports = {
  getAllPuppies: getAllPuppies,
  getAllListsByAuthor: getAllListsByAuthor
};

function getAllPuppies(req, res, next) {
  db
    .any("select * from writers")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL puppies"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function getAllListsByAuthor(req, res, next) {
  db
    .any(`select * from writers, lists WHERE writers.writer = lists.writer`)
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL puppies"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}
