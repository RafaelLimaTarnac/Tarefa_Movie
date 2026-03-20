const { DataTypes } = require("sequelize");
const sequelize = require("../config/database")
const { Reviews } = require("./review.model.js");

const Users = sequelize.define("Users",{
    id:{
	type: DataTypes.INTEGER,
	autoIncrement:true,
	primaryKey: true
    },
    name:{
	type: DataTypes.STRING,
	allowNull:false
    },
    email:{
	type: DataTypes.STRING,
	allowNull:false,
	unique:true
    },
    
}, {
	timestamps: true,
	tableName: "users"
    }
);

//Users.hasMany(Reviews, {foreignKey: "userId"});
//Reviews.belongsTo(Users, {foreignKey: "userId"});

module.exports = { Users };
