'use strict'
// Cargamos el módulo de mongoose
var mongoose =  require('mongoose')
// Esquemas mongoose
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var UserSchema = Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: false
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    yearOld: {
        type: Number,
        required: true,
        unique: false
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    addressStreet: {
        type: String,
        trim: true,
        required: false,
        unique: false
    },
    cedula: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    wallet: {
        type: String,
        required: false
    },
    nonce: {
        type: Number,
        require: true
    },
},{collection: 'Users'})
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('User' , UserSchema, "Users")