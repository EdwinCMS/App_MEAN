//Configuracion del Servidor
//----------------------------------------------------------------------------
//modulo 'express': crear servidor
//modulo 'nodemon': refresca automaticamente el servidor al guardar algun archivo 
//modulo 'morgan': ver por consola lo que el usuario esta pidiendo
//modulo 'cors'. se conecta con el servidor de angular '4200'
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { mongoose } = require('./database'); //{} destructuring

//----------------------------------------------------------------------------
//SETTINGS
//creacion de variable 'port' de manera global
//'process.env.PORT || 3000' : SI EXISTE UN PUERTO DADO POR EL S.O TOMARLO SI NO TOMAR EL PORT 3000 
app.set('port', process.env.PORT || 3000);

//----------------------------------------------------------------------------
//MIDDLEWARES: proceso de datos: conversion de datos para que se entiendan
app.use(morgan('dev'));   //al ejecutar 'dev', hace uso de 'morgan'
app.use(express.json());  //metodo que convierte los datos en json
app.use(cors({origin: "http://localhost:4200"})); //se comunican los dos puertosmondog

//----------------------------------------------------------------------------
//ROUTES
app.use('/api/employees',require('./routes/employee.routes'));
//creacion del servidor 
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});