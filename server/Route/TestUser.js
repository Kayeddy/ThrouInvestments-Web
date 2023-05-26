// Route/TestUser.js
"use strict";

const express = require("express");
const testUserController = {
  addUser: (req, res) => {
    console.log("Test POST /user route hit");
    res.status(200).send("Test POST /user route");
  },
};

const testUserApi = express.Router();
testUserApi.post("/testUser", testUserController.addUser);
module.exports = testUserApi;
