const express = require('express');

const loginController = require('../controllers/index');

const router = express.Router();

router
    .post('/adicionar', loginController.inserir)
    .post('/verify', loginController.validacao_login)

module.exports = router 

