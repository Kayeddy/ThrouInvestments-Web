/* eslint-disable */
module.exports = (function(){
    'use strict'

    // Imports
    var mongoModel = require('../Model/MongoTest.js')

    // Si necesitamos importar algun tipo de configuracion
    //var confg = require('../Config/Config.js')
    
    /**
     * Esta funcion se encarga de realizar una actualizacion a un registro dentro de una coleccion de MongoDB
     * @param {Number} testParam Parametro de prueba
     * @param {Boolean} testParam2 Parametro de prueba
     * @returns 
     */
    var test = (testParam, testParam2) => {
        return new Promise(async (resolve, reject) =>{
            // Se llama como ejemplo la funcion update, donde se actualiza un registro del  mongo, 
            // de igual manera para los demas metodos de mongo como get, delete, etc
            mongoModel.updateOne({propertiTest: testParam}, {propertiTest2: testParam2})
                .then(result => {
                    resolve(result);
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    var testAdd = (testParam, testParam2) => {
        return new Promise(async (resolve, reject) =>{
            // agregar un registro
            mongoModel.insertMany([{propertiTest: testParam, propertiTest2: testParam2}])
                .then(result => {
                    resolve(result);
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    /**
     * Funcion encargada de devolver un texto de prueba
     * @returns String
     */
    var testGet = () => {
        return new Promise(async (resolve, reject) =>{
            resolve("Prueba Get Throu")
        })
    }
    
    /** Api Pública */
    return {
        test: test,
        testGet: testGet,
        testAdd: testAdd
    }

})();