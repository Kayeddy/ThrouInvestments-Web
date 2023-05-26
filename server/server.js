// Ecmascript 6
"use strict";
var app = require("./appServer");
var config = require("./Config/Config");
var https = require("https");
var fs = require("fs");

// HTTPS
/*
const privateKey = fs.readFileSync('/etc/letsencrypt/live/nft.wilsonamado.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/nft.wilsonamado.com/fullchain.pem', 'utf8');
https
    .createServer({
        key: privateKey,
        cert: certificate,
        }, app)
    .listen(config.api.port, () => {
        console.log("Servidor corriendo en https://localhost:" + config.api.port + "/api/v1/");
    });*/

// HTTP

app.listen(config.api.port, () => {
  console.log(
    "Servidor corriendo en http://localhost:" +
      config.api.port +
      "/api/v1/ y Sitio web en http://localhost:" +
      config.api.port
  );
});
