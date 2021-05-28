const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    const query = req.query;
    const {nombre, otra_edad} = req.query;

    res.status(201).json({
      msg: "get",
      body: query,
      nombre,
      otra_edad
    });
  }

  const usuariosPost = (req = request, res = response) => {
    const {nombre, edad} = req.body;
    
    res.status(201).json({
      msg: 'put',
      body: req.body,
      edad: edad,
      nombre: nombre,
      
    });
  }
  const usuariosPut = (req = request, res = response) => {
    res.status(201).json({
      msg: "put",
      body: req.params
    });
  }
  const usuariosDelete = (req = request, res = response) => {
    res.status(201).json({
      msg: "delete",
    });
  }


module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete
}