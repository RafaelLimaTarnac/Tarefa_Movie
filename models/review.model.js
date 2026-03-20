const { DataTypes } = require("sequelize");
const sequelize = require("../config/database")

const Reviews = sequelize.define("Reviews",{
    id:{
	type: DataTypes.INTEGER,
	autoIncrement:true,
	primaryKey: true
    },
    rating:{
	type: DataTypes.INTEGER,
	allowNull:false
    },
    comment:{
	type: DataTypes.STRING,
	allowNull:false
    },
    
}, {
	timestamps: true,
	tableName: "reviews"
    }
);

module.exports = { Reviews };
