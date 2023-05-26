/* eslint-disable */
module.exports = (function(){
    'use strict'
    
    // Validador de Errores - Se ha creado un manejador de errores para los mensajes. Este se puede usar como en este ejemplo
    const ValidationError = require('../Handler/ValidationError');

    // Enumeradores
    var enums = require('../Util/Enum');
    var httpStatus = enums.httpStatusCodes;

    // Services
    var testService = require("../Service/Test");

    /**
     * Realizar un test a MongoDB haciendo un update a un modelo definido
     * @param {*} req Peticion o request
     * @param {*} res Respuesta o response
     * @param {*} next funcion siguiente callback nodejs
     */
    var test = async function(req, res, next) {
        try {
            testService
                .test(req.body.testParam1, req.body.testParam2)
                .then(response => {
                    res.status(httpStatus.Ok).send(response);
                })
                .catch(err => {
                    // Encapsular todo el error dentro de nuestra clase ValidationError, para poder alertar 
                    // posibles errores en produccion y manejo de excepciones.
                    next(new ValidationError(new Error(err)));
                });            
        } catch (err) {
            next(new ValidationError(new Error(err)));
        }
    }

    /**
     * Realiza un llamado al servicio test e invoca el metodo testGet, el cual retorna una cadena de texto
     * @param {*} req Peticion o request
     * @param {*} res Respuesta o response
     * @param {*} next funcion siguiente callback nodejs 
     */
    var testGet = async function(req, res, next) {
        try {
            testService
                .testGet()
                .then(response => {
                    res.status(httpStatus.Ok).send(response);
                })
                .catch(err => {
                    next(new ValidationError(new Error(err)));
                });            
        } catch (err) {
            next(new ValidationError(new Error(err)));
        }
    }

    var testAdd = async function(req, res, next) {
        try {
            testService
                .testAdd(req.body.param1, req.body.param2)
                .then(response => {
                    res.status(httpStatus.Ok).send(response);
                })
                .catch(err => {
                    next(new ValidationError(new Error(err)));
                });            
        } catch (err) {
            next(new ValidationError(new Error(err)));
        }
    }   
    

    //Api publica
    return{
        test: test,
        testGet: testGet,
        testAdd: testAdd
    }
})();