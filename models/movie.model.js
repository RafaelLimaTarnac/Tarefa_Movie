const { DataTypes } = require("sequelize");
const sequelize = require("../config/database")
const Reviews = require("./review.model.js");

const Movies = sequelize.define("Movies",{
    id:{
	type: DataTypes.INTEGER,
	autoIncrement:true,
	primaryKey: true
    },
    title:{
	type: DataTypes.STRING,
	allowNull:false
    },
    duration:{
	type: DataTypes.INTEGER,
	allowNull:false,
    },
    sinopse:{
	type: DataTypes.STRING,
	allowNull:false
    },
    isActive:{
	type: DataTypes.BOOLEAN,
	allowNull:false
    }
    
}, {
	timestamps: true,
	tableName: "movies"
    }
);

//Movies.hasMany(Reviews, {foreignKey: "movieId"});
//Reviews.belongsTo(Movies, {foreignKey: "movieId"});

module.exports = { Movies };
