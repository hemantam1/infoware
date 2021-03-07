const {Sequelize} = require("sequelize");
var fs = require("fs");
var path = require("path");

const sequelize = new Sequelize('JFmJUEW7AG', 'JFmJUEW7AG', 'uQEwco18y8', {
    host: 'remotemysql.com',
    port : 3306,
    dialect: 'mysql'
});

// const sequelize = new Sequelize("agri_portal4", "root", "", {
//     define: {
//       charset: "utf8mb4",
//     },
//     host: "localhost",
//     dialect: "mysql",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000,
//     },
//     // logging: false,
//     logging: console.log,
// });

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