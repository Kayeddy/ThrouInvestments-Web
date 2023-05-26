module.exports = (function () {
  "use strict";

  var express = require("express");
  var api = express.Router();
  var authController = require("../Controller/Auth");
  var nameSpace = "/auth";

  api.post(nameSpace, authController.login);
  api.get(nameSpace + "/token", authController.isValidSessionToken);

  return api;
})();
