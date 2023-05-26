module.exports = (function(){
    'use strict'

    // Validador de Errores
    const ValidationError = require('../Handler/ValidationError');

    // Modelos
    var User = require('../Model/User');
    // const welcomeTheme = require('../MailTemplates/welcome');

    // Services
    // var mailService = require('../Service/Mail');
    const bcrypt = require('bcrypt')

    /**
     * Metodo encargado de obtener un usuario segun el ID
     * @param {*} userId Id de la entrada
     */
    var getById = function (userId) {
        return new Promise((resolve, reject) => {
            //buscar una entrada por un id
            User.findById(userId, (err, user) => {
                // Error en la petición
                if(err) reject(new ValidationError(new Error('Error en la petición ' + err.message)));
                // No existen entradas - user
                if(!user) reject(new ValidationError(new Error('User not exists')));
                console.log("Get User ID: " + userId);
                // Retornamos la respuesta
                resolve(user);
            })
        })
    }

    var getByWallet = function (walletAddress) {
        return new Promise((resolve, reject) => {
            //buscar una entrada por wallet
            User.findOne({"wallet": walletAddress}, (err, user) => {
                // Error en la petición
                if(err) reject(new ValidationError(new Error('Error en la petición ' + err.message)));
                // No existen entradas - user
                if(!user) reject(new ValidationError(new Error('User not exists')));
                // Retornamos la respuesta
                resolve(user);
            })
        })
    }

    /**
     * Funcion encargada de agregar un nuevo usuario
     * @param {*} data Dats del usuario
     */
    var add = function (data) {
        return new Promise((resolve, reject) =>{

            // encriptar contraseña
            // let passTmp = data.password;
            if(data.password)
                data.password = bcrypt.hashSync(data.password, 10);
            
            // Asignar un numero aleatorio (Para login con metamask)
            data.nonce = Math.floor(Math.random() * 10000)
            if (data.email=='') {
                reject()
                return
            }
            
            if(!data.wallet)
                data.wallet = null
                
            User.insertMany([data])
                .then(result => {
                    resolve(result)
                })
                .catch(err => {
                    reject(new ValidationError(new Error(err)));
                });
        })
    }

    // Actualizar parcialmente o totalmente un usuario
    var update = function (_email, data) {
        return new Promise(async (resolve, reject) =>{
            User.updateOne({email: _email}, data)
                .then(result => {
                    resolve(result);
                })
                .catch(err => {
                    reject(err)
                });
        })
    }

    var updateByWallet = function (_wallet, data) {
        return new Promise(async (resolve, reject) =>{
            User.updateOne({"wallet": _wallet}, data)
                .then(result => {
                    resolve(result);
                })
                .catch(err => {
                    reject(err)
                });
        })
    }

    /** Api Pública */
    return {
        getById: getById,
        getByWallet: getByWallet,
        add: add,
        update: update,
        updateByWallet: updateByWallet,
    }
})();