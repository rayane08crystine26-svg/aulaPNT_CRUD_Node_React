
const Sequelize = require('sequelize');
const database = require('./db');

const Produto = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    senha: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = Usuario;

