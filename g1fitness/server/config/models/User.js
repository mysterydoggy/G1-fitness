const { DataTypes } = require("sequelize");
const sequelize = require("../db"); // database connection

// user model compatible for OAuth2.0
const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    googleId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,  // google ID unique for each user
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: true, 
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = User;
