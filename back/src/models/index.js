const Sequelize = require('sequelize');
const database = require('../config/index');

const loginModels = database.define('registros',{
    id:{
        type : Sequelize.INTEGER(4),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome : Sequelize.STRING(50),
    cpf : Sequelize.CHAR(11),
    email : Sequelize.STRING(50),
    senha: Sequelize.STRING(100),
    numero: Sequelize.INTEGER(10)
});



database.sync();

module.exports = loginModels;