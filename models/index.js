const Sequelize = require("sequelize");
const sequelize = require("../config/database");
const { Users } = require("./user.model.js");
const { Movies } = require("./movie.model.js");
const { Reviews } = require("./review.model.js");

const db = {
    sequelize,
    Sequelize,
    Users,
    Movies,
    Reviews,
};

Users.hasMany(Reviews, {foreignKey: "userId"});
Reviews.belongsTo(Users, {foreignKey: "userId"});

Movies.hasMany(Reviews, {foreignKey: "movieId"});
Reviews.belongsTo(Movies, {foreignKey: "movieId"});

module.exports = db;
