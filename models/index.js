const {Sequelize} = require("sequelize");
var fs = require("fs");
var path = require("path");

const sequelize = new Sequelize('Zg7Vzv2yI5', 'Zg7Vzv2yI5', 'wKZYN50IOH', {
    host: 'remotemysql.com',
    port : 3306,
    dialect: 'mysql'
});

const db = {};

 
fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        var model = require(path.join(__dirname, file))(sequelize, Sequelize);
        db[model.name] = model;
    });
 
Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;



module.exports = db;