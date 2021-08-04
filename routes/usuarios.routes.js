const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/usuarios.controller');

const   router = Router();
        router.get("/", usuariosGet);
        router.post("/", usuariosPost);
        router.put("/:id_user/:id_otro", usuariosPut);
        router.delete("/", usuariosDelete);

module.exports = {
    router
}