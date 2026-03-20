const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("movie_api_2", "user", "1929", {
    dialect:"mysql",
    host:"localhost"
});

module.exports = sequelize;
