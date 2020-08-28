//modulo express: para crear esquemas
const mongoose = require('mongoose');
const { Schema } = mongoose;

//Creacion de esquema
const EmployeeSchema = new Schema({
    name: { type: String, require: true},     //no null
    position: { type: String, require: true}, //no null
    office: { type: String, require: true},   //no null
    salary: { type: Number, require: true}    //no null
});
//se pasa a un modelo de datos de mongoose
//se utiliza en controllers
module.exports = mongoose.model('Employee', EmployeeSchema);  //exportado a controllers
