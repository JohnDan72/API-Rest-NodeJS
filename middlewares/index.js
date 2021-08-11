const Validar_JWT = require('./validar-jwt');
const Validar_ROLE = require('./validar-role');
const Validar_Campos = require('./validarCampos');

module.exports = {
    ...Validar_JWT,
    ...Validar_ROLE,
    ...Validar_Campos
}