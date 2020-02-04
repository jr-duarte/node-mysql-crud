const express = require('express');

const UsuarioControler = require ('../src/controllers/UsuarioController');

const ClienteControler = require ('../src/controllers/UsuarioController');

const routes = express.Router();

routes.get('/listar', UsuarioControler.index);

routes.post('/cadastrar', UsuarioControler.store);

routes.delete('/deletar', UsuarioControler.destroy);

routes.patch('/alterar', UsuarioControler.update);




//teste
routes.get('/cliente/listar', ClienteControler.index);

module.exports = routes;