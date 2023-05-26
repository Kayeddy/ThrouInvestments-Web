module.exports = (function(){
    'use strict'

    var jwt = require('jwt-simple');
    let configFile = require('../Config/Config');
    var jwtConfig = configFile.jwt.config;
    var moment = require('moment');
    const ValidationError = require('../Handler/ValidationError');
    const bcrypt = require('bcrypt')

    // Modelos
    var User = require('../Model/User');

    /**
     * Para validar si el usuario existe o no
     * @param login identificacion del usuario
     * @param pass contraseña
     */
    var validUser = async function(login, pass, networkId=97){
        return new Promise((resolve, reject) => {

            //buscar una usuario por un  id
             User.findOne({ email: login })
                .then(async (user, err) => {
                    // Error en la petición
                    if(err || !user){
                        let msg = (!user) ? "Usuario y/o Contraseña invalidos": "No se pudo realizar la peticion, intenta nuevamente"
                        reject(new ValidationError(new Error(msg)))
                        return 
                    }

                    // Verificar si ya se verificó la cuenta
                    if(!user.verify){
                       resolve({msg: "La cuenta no se ha verificado, por favor verifique su bandeja de entrada."})
                      return;
                    }

                    console.log("Get User: " + login)

                    // validar contraseña
                    if(bcrypt.compareSync(pass, user.password)){
                        resolve([user])
                    }
                    else{
                        resolve({msg: "Contraseña inválida o su credencial ha expirado..."}); 
                    }
                    
                })
        })
    }

    /**
     * Crear Token JWT
     * @param userId identificador del usuario
     * @returns {*}
     */
    var createToken = function(userId) {
        //Generar el payload para el jwt
        var payload = {
            sub: {"id": userId},
            iat: moment().unix(),
            exp: moment().add(jwtConfig.expDays, "days").unix(),
        };
        return jwt.encode(payload, jwtConfig.secretPassword, jwtConfig.algorithm);
    }

    
    var isValidSessionToken = function (token) {
        return new Promise((resolve, reject) => {
            let payload = null
            if(token){
                payload = jwt.decode(token, jwtConfig.secretPassword, false, jwtConfig.algorithm);

                //Verificar si el token expiro
                if(payload.exp <= moment().unix()) {
                    reject();
                }
                else{ // valido
                    resolve()
                }
            }
            else{
                reject();
            }
        });
    }

    //Api publica del modulo
    return {
        validUser: validUser,
        createToken: createToken,
        isValidSessionToken: isValidSessionToken,
    }
})();
