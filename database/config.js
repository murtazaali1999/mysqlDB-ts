const Sequelize = require("Sequelize");

module.exports = new Sequelize("User", "root", "", {
    host: "localhost",
    dialect: "mysql",
});
