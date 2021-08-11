const { request, response } = require("express");
const path = require("path");
const { v4: uuidv4 } = require('uuid');



const uploadFile = async ( req = request , res = response) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json('No hay archivos que subir');
    }
    if (!req.files.archivo) {
        return res.status(400).json('No hay archivo');
    }

    
}

module.exports = {
    uploadFile
}