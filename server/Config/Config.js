module.exports = (function(){
    'use strict'
    
    // Variables de entorno
    require('dotenv').config()

    /**
     * Parametros basicos de publicacion del api
     */
    var api = {
        version: 1,
        name: 'BackEndNodeThrou',
        port: 3800,
    }
    
    var taskConfig = {
        delayUpdateList: 60000,
    }

    /**
     * Configuracion general de json web token
     */
    var jwt = {
        config : {
            secretPassword: 'b0t-nf7',
            expDays: 1,
            algorithm: 'HS512' /**HS256, HS384, HS512 and RS256 (ver problemas HS256) */
        }
    }

    /**Configuracion general para rateLimit */
    var apiLimiter = {
        config: {
            windowMs: 10*60*1000, // 10 minutos
            delayAfter: 0, //comienza a ralentizar las respuestas después de la primera solicitud
            //delayMs: 3 * 1000, //Ralentizar las respuestas posteriores en 3 segundos por solicitud
            max: 1500, //Comienza a bloquear después de 500 solicitudes
            message: "Demasiadas peticiones realizadas, intente de nuevo en 10 minutos"
        }
    }

    /**
     * Archivos ssl
     */
    var sslOptions = {
        key: '/Certs/throudapp/certificate.key',
        cert: '/Certs/throudapp/certificate.crt',
        ca: ['/Certs/throudapp/certificate.ca.crt']        
    };
    

    /**Api publica */
    return {
        api: api,      
        jwt: jwt,
        apiLimiter: apiLimiter,
        sslOptions: sslOptions,
        taskConfig: taskConfig,
    }
})();
