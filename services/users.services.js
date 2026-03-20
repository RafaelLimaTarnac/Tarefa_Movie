// criar user POST/users
// listar users GET/users
// buscar por id GET/USERS/:id
const { Users } = require("../models/user.model.js");

const findById = async(id) => {
    const user = await Users.findByPk(id);
    if(!user)
	return {feedback: "kk, se fudeu",};
    else
	return {users: user,};
}

const findAll = async() => {
    const user = await Users.findAll();
    if(!user)
	return {feedback: "kk, se fudeu²",}
    else
	return {users: user,}
}

const createUser = async(_name, _email) => {
    const user = await Users.create({name: _name, email: _email});
    if(user)
	return {new_user: user,}
    else
	return {feedback: "kk, se fudeu 4",}
}

module.exports = { findById, findAll, createUser };
