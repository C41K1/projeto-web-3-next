const Sequelize = require ('sequelize');
const sequelize = new Sequelize("Projeto3_web2", "postgres", "1234", {
    host: 'localhost',
    dialect: 'postgres'
});

var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Pacote = require("../models/pacote")(sequelize, Sequelize);

module.exports = db;