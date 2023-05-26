"use strict";

// Cargamos modelo del usuario (el post)
var User = require("../Model/User");

// Enumeradores
var enums = require("../Util/Enum");
var httpStatus = enums.httpStatusCodes;

// Services
var userService = require("../Service/User");

var userController = {
  // Obtener un Post segun el ID
  get: function (req, res, next) {
    try {
      userService
        .getById(req.params.id)
        .then((post) => {
          res.status(httpStatus.Ok).send({ post });
        })
        .catch((err) => {
          next(err);
        });
    } catch (err) {
      next(err);
    }
  },

  /**
   * Metodo encargado de guardar la información del usuario (post)
   * @param {*} req
   * @param {*} res
   */
  addUser: function (req, res, next) {
    var userData;
    try {
      // Agregamos el nuevo usuario
      console.log("Received user data:", req.body);
      userService
        .add(req.body)
        .then((result) => {
          res.status(httpStatus.Ok).jsonp(result);
        })
        .catch((err) => {
          next(err);
        });
    } catch (err) {
      next(new ValidationError(new Error(err)));
    }
  },

  put: function (req, res, next) {
    var userId = req.params.id;
    try {
      User.updateOne({ _id: userId }, req.body)
        .then((result) => {
          res.status(200).jsonp(result);
        })
        .catch((err) => {
          next(err);
          //res.status(500).jsonp({"name": "Error interno", "msg": err});
        });
    } catch (error) {
      next(error);
      //res.status(500).send({"error": "Error al crear el cultivo. " + error});
    }
  },

  del: function (req, res, next) {
    var userId = req.params.id;
    try {
      User.deleteOne({ _id: userId })
        .then((result) => {
          var response = {
            msj: "No se logro eliminar el registro.",
          };
          if (result.deletedCount > 0 && result.ok === 1)
            response = {
              msj: "El registro fue eliminado correctamente.",
            };

          res.status(200).jsonp(response);
        })
        .catch((err) => {
          res.status(500).jsonp({ name: "Error interno", msg: err });
        });
    } catch (error) {
      res.status(500).send({ error: "Error al borrar el cultivo. " + error });
    }
  },

  /**
   * Metodo encargado de actualizar parcialmente el cultivo
   * @param {*} req
   * @param {*} res
   */
  patch: function (req, res, next) {
    var userId = req.params.id;
    var patchData;
    try {
      patchData = req.body;
      User.update({ _id: userId }, { $set: patchData })
        .then((result) => {
          res.status(200).jsonp(result);
        })
        .catch((err) => {
          res.status(500).jsonp({ name: "Error interno", msg: err });
        });
    } catch (error) {
      res.status(500).send({ error: "Error al crear el cultivo. " + error });
    }
  },
};

module.exports = userController;
