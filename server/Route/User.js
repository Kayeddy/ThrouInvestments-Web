module.exports = (function () {
  "use strict";

  var express = require("express");
  var api = express.Router();
  var userController = require("../Controller/User");

  api.get("/user/:id", function (req, res, next) {
    userController.get(req, res, next);
  });

  //api.get("/user/:id/isvalidaddress", userController.isValidAddress);
  api.post("/user", userController.addUser);
  api.patch("/user/:id", userController.patch);
  api.put("/user/:id", userController.put);

  return api;
})();
