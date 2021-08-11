const express = require("express");
const cors = require('cors')
const { dbConection } = require('../database/config')

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.path = {
      authPath:       '/api/auth',
      categoriasPath: '/api/categorias',
      productosPath:   '/api/productos',
      usuariosPath:   '/api/usuarios'
    }
    // this.usuariosPath = '/api/usuarios';
    // this.authPath = '/api/auth';
    // this.categoriasPath = '/api/categorias';
    
    //Conectar a base de datos mongo
    this.conectarMongo();
    //Middlewares
    this.middlewares();
    //Rutas de la aplicación
    this.routes();
  }

  async conectarMongo(){
    await dbConection();
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
    this.app.use(this.path.authPath, require('../routes/auth.routes').router);
    this.app.use(this.path.usuariosPath, require('../routes/usuarios.routes').router);
    this.app.use(this.path.categoriasPath, require('../routes/categorias.routes').router);
    this.app.use(this.path.productosPath, require('../routes/productos.routes').router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Escuchando desde puerto ${this.port}`);
    });
  }
}

module.exports = Server;
