module.exports = (function(){
    'use strict'

    var config = require('../Util/Enum');
    var httpStatus = config.httpStatusCodes;
    var authService = require('../Service/Auth');
    const ValidationError = require('../Handler/ValidationError');

    /**
     * Método encargado para realizar el login del usuario
     * @param {*} req 
     * @param {*} res 
     */
    var login = function (req, res, next) {
        // Validar usuario
        //if(req.body.body)
        //    req.body = req.body.body;
            
        authService.validUser(req.body.login, req.body.pass)
            .then(result =>{
                //Si existe
                if(result.length > 0){
                    let token = authService.createToken(result[0].id);
                    //result[0]["token"] = token;
                    let resul = JSON.stringify(result[0]);
                    resul = JSON.parse(resul);
                    resul.token = token;
                    result.valid = true;
                    res.status(httpStatus.Ok).jsonp([resul]);
                }else{ //Si no existe
                    res.status(httpStatus.Unauthorized).jsonp({message: (result.msg)?result.msg:"Identificación o contraseña invalido"})
                }
            })
            //Respuesta de error (Pasar el error al middleware)
            .catch(error => {
                next(error)
            });
    };

    var isValidSessionToken = function(req, res, next) { 
        try {

            let token = req.headers['x-access-token'];
            if(!token)
                token = req.headers['x-acces-token'];

            authService
                .isValidSessionToken(token)
                .then(() => {
                    res.status(httpStatus.Ok).send({"valid": true});
                })
                .catch(err => {
                    res.status(httpStatus.Unauthorized).send({"valid": false});
                });            
        } catch (err) {
            next(new ValidationError(new Error(err)));
        }
    }

    //Api publica
    return{    
        login: login,
        isValidSessionToken:  isValidSessionToken,
    }
})();
