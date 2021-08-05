const Role = require("../models/role");
const Usuario = require("../models/usuario");

//checar role válido
const checarRoleValido = async(rol = '') => {
    const existeRole = await Role.findOne({ role: rol });
    if(!existeRole){
        throw new Error(`El rol ${ rol } no esta registrado en la DB`)
    }
}

//verificar si el correo existe
const checarEmailExiste= async(email = '') => {
    const existeMail = await Usuario.findOne({correo: email});
    if(existeMail){
        throw new Error(`Este correo ${email} ya esta registrado`);
    }
}

//verificar si el correo existe para LOGIN
const checarEmailExisteLogin= async(email = '') => {
    const existeMail = await Usuario.findOne({correo: email, estado: true});
    if(!existeMail){
        throw new Error(`La cuenta con este correo no existe`);
    }
}

//existe usuario by id
const existeUsuarioById = async(id = '') => {
    const existeUsuario = await Usuario.findOne({_id:id});
    if(!existeUsuario){
        throw new Error(`Este usuario con id ${id} no existe`);
    }
}

//checar num entero para paginación de GET usuarios
const enteroValido = (num = 0) => {
    const val = parseInt(num);
    if(isNaN(val) || val % 1 != 0){
        throw new Error(`El parámetro debe ser un número entero`);
    }
}




module.exports = { checarRoleValido, checarEmailExiste, checarEmailExisteLogin, existeUsuarioById, enteroValido }