const express = require("express");
const cors = require('cors')

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';
    //Middlewares
    this.middlewares();
    //Rutas de la aplicación
    this.routes();
  }

  middlewares() {
    //cors
    this.app.use(cors());
    //lectura y parseo del body
    this.app.use( express.json() );
    //Directorio público
    this.app.use(express.static("public"));
    
  }
  routes() {
    this.app.use(this.usuariosPath, require('../routes/usuarios.routes').router)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Escuchando desde puerto ${this.port}`);
    });
  }
}

module.exports = Server;
