
/*modulo 'mongoose': modulo de mongo db, necesario para express, 
para conectarse a la db y para modelar la base de datos */
const mongoose = require('mongoose');

//ubicacion de la base de datos, si no se encuentra la db se crea automaticamente
const URI = 'mongodb://localhost/mean-crud';

//Coneccion 
mongoose.connect(URI)
    //promesa
    .then(db => console.log('DB is connected')) //si hay conexion ...
    .catch(err => console.error(err));          //si no, mostrar el error ...

module.exports = mongoose;  //exportado al index.js
