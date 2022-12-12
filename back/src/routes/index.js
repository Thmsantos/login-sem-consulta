const express = require('express');


const loginController = require('../controllers/index');

const router = express.Router();

router
    .post('/adicionar', loginController.inserir)
    .post('/verify', loginController.validacao_login)
    .post('/excluir', loginController.excluir)
    .post('/recuperarPass', loginController.recuperarSenha)
    .post('/verificarCode', loginController.verificarSenha)
    .post('/attSenha', loginController.Attsenha)

module.exports = router 

