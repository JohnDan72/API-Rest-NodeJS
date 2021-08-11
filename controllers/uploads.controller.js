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

    const { archivo } = req.files;
    //sacar extensión
    const nombreCortado = archivo.name.split('.');
    const extension = nombreCortado[nombreCortado.length - 1];
    //validar la extension
    const extensionesPermitidas = ['png','jpg','jpeg','tiff'];
    if(!extensionesPermitidas.includes(extension)){
        return res.status(400).json({
            error_msg: `Extensiones permitidas ${extensionesPermitidas}`
        })
    }
    console.log(nombreCortado);
    console.log(extension);
    

    const nombreTemp = uuidv4() + '.' + extension;
    //dirección del archivo para subirlo
    const pathfile = path.join(__dirname , '../uploads/' , nombreTemp);

    // Use the mv() method to place the file somewhere on your server
    archivo.mv(pathfile, (err) => {
        if (err){
            console.log(err);
            return res.status(500).send(err);
        }
        

        res.status(201).json({
            msg: 'Archivo subido exitosamente'
        });
    });
}

module.exports = {
    uploadFile
}