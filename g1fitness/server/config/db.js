const { Sequelize } = require("sequelize");

//db start up
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./server/database.sqlite", // SQLite file
    logging: false, 
});

sequelize.sync({ force: false }) // set to `true` to reset DB on restart
    .then(() => console.log("Database synced"))
    .catch((err) => console.error("Database error:", err));

module.exports = sequelize;
