const { Router } = require("express");
const { check } = require("express-validator");
const { loginUser } = require("../controllers/login.controller");
const { checarEmailExisteLogin } = require("../helpers/db-validators");
const { validaJWT } = require("../middlewares/validar-jwt");
const { validarCampos } = require("../middlewares/validarCampos");


const   router = Router();
        router.post('/login', [
            
            check('correo', 'El correo no es valido').isEmail(),
            check('correo').custom(checarEmailExisteLogin),
            check('password', 'Contraseña obligatoria').not().isEmpty(),
            validarCampos
        ], loginUser);
        

module.exports = {router};