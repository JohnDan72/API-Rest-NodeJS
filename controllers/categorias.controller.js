const { request, response } = require("express");

// get categorias
const getCategorias = (req = request, res = response) => {
    res.status(201).json({
        msg: "get categorias"
    })
}

// get categoria by id
const getCategoriaById = (req = request, res = response) => {
    res.status(201).json({
        msg: "get categoria by id"
    })
}

// create a category with a valid token
const createCategoria = (req = request, res = response) => {
    res.status(201).json({
        msg: "create categoria"
    })
}

// actualizar categoria con un token válido
const updateCategoria = (req = request, res = response) => {
    res.status(201).json({
        msg: "update categoria"
    })
}

// delete categoria by id
const deleteCategoria = (req = request, res = response) => {
    res.status(201).json({
        msg: "delete categoria"
    })
}

module.exports = {
    getCategorias,
    getCategoriaById,
    createCategoria,
    updateCategoria,
    deleteCategoria
}