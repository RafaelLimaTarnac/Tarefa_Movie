const userService= require("../services/users.services.js");

const findById_C = async(req, res) => {
    const id = req.params.id;
    const { users, feedback } = await userService.findById(id);

    if(feedback)
	return res.json({feedback});
    else
	return res.json(users);
};

const findAll_C = async(req, res) => {
    const { users, feedback } = await userService.findAll();

    if(feedback)
	return res.json({feedback});
    else
	return res.json(users);
}

const createUser_C = async(req, res) => {
    const {name, email} = req.body;

    if(!name || !email)
	return res.send("insira email e nome");

    const {new_user, feedback}  = await userService.createUser(name, email);

    if(feedback)
	return res.json({feedback})
    else
	return res.json(new_user);
}

module.exports = { findById_C, createUser_C, findAll_C };

