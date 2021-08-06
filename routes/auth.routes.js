const { Router } = require("express");
const { check } = require("express-validator");
const { loginUser, loginToken } = require("../controllers/login.controller");
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
        router.post('/google',[
            check('id_token', 'Token es obligatorio').not().isEmpty(),
            validarCampos
        ], loginToken);

module.exports = {router};