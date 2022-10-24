const { Sequelize, DataTypes } = require("Sequelize");
const dbConnection = require("../database/config");

const userModel = dbConnection.define("User", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    }
    , first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    freezeTableName: true, // to use the above table declared name, instead from User to Users, To User only,
    timestamps: false, // disables timestamps as created and updated at
})

module.exports = userModel;