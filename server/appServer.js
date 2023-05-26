/**
 * Throu Backend node
 * Creación: Julián García para BitsDapps
 *
 */
var express = require("express");
var bodyParser = require("body-parser");
var handlerError = require("./Handler/ErrorHandler");
const cors = require("cors");

// Seguridad
var rateLimit = require("express-rate-limit"); //Middleware fuerza bruta

var app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});

// Importamos las rutas
var testRoute = require("./Route/Test");
var authRoute = require("./Route/Auth");
var userRoute = require("./Route/User");
const testUserRoute = require("./Route/TestUser");

var meta = require("./Config/Config");
require("dotenv").config();
var mongoCloud =
  "mongodb+srv://" +
  process.env.USER_MONGO +
  ":" +
  process.env.PWD_MONGO +
  "@throu00.qy6ph4t.mongodb.net/?retryWrites=true&w=majority";
var mongoose = require("mongoose");

// Biblioteca de imagenes
mongoose.connect(mongoCloud, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", async () => {
  console.log("Conectado a mongo");
});
// Si la conexion arroja errores
mongoose.connection.on("error", (err) => {
  console.log("handle mongo errored connections: " + err);
});
// Cuendo la conexion es desconectada
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose default connection disconnected");
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
  );

  next();
});

//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cargamos las rutas
app.use("/api/v1", testRoute);
app.use("/api/v1", authRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", testUserRoute);

//cargar middlewares
//Asignar el Error handling middleware
app.use(handlerError.http);

//Asignar middleware encargado de limitar fuerza bruta
var apiLimiter = new rateLimit(meta.apiLimiter.config);
app.use("/api/v1", apiLimiter);

module.exports = app;
