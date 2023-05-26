'use strict'
// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');
// Esquemas mongoose
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var MongoTest = Schema({
    propertiTest: {
        type: Number,
        unique: false
    },
    propertiTest2: {
        type: Boolean,
        required: false
    },
},{collection: 'MongoTest'});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('MongoTestCollectionName', MongoTest, "MongoTest");