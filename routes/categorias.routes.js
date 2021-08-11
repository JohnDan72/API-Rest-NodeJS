const { Router } = require("express");
const { check } = require("express-validator");
const {
    getCategorias,
    getCategoriaById,
    crearCategoria,
    updateCategoria,
    deleteCategoria
} = require("../controllers/categorias.controller");

const { validaJWT, validarCampos } = require("../middlewares");


// url = 'http://localhost/api/categorias'
const router = Router();
// get categorias por paginación
router.get("/", [

], getCategorias);

// get categoria by id
router.get("/:id_cat", [

], getCategoriaById);

// crear cualquier categoria por cualquier token válido
router.post("/", [
    validaJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearCategoria);

// actualizar categoria por cualquier token válido
router.put("/:id_cat", [

], updateCategoria);

// borrar una categoria por cualquier token válido que sea ADMIN
router.delete("/:id_cat", [

], deleteCategoria);

module.exports = { router };