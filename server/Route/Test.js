/* eslint-disable */
'use strict'
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
// Cargamos el controlador
var testController = require('../Controller/Test');
// Llamamos al router
var api = express.Router();
 
api.post('/testthrou', testController.test)
// Otros posibles enpoints para representar los verbos REST hhtps 
api.get('/testthrou', testController.testGet)
// api.patch('/updatestatenft', testController.testx)
api.put('/testupdate', testController.testAdd)
// api.delete('/updategbls', testController.testx)


// Exportamos la configuración
module.exports = api;