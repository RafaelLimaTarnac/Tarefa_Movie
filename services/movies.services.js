/*
POST /movies Criar filme 
GET /movies Listar filmes 
GET /movies/:id Buscar filme por ID 
PUT /movies/:id Atualizar filme 
DELETE /movies/:id Deletar filme
*/
const { Movies } = require("../models/movie.model.js");
const { Reviews } = require("../models/review.model.js");
const { Users } = require("../models/user.model.js");

const findById = async(id) =>{
    const movie = await Movies.findByPk(id);
    if(!movie)
	return {feedback: "kk, se fudeu A",};
    else
	return {movies: movie,};
}

const findAll = async() =>{
    const movie = await Movies.findAll();
    if(!movie)
	return {feedback: "kk, se fudeu B",}
    else
	return {movies: movie,}
}

const createMovie = async(_title, _duration, _sinopse, _isActive) =>{
    const movie = await Movies.create(
	{title: _title, duration: _duration,
	 sinopse: _sinopse, isActive: _isActive,}
    );

    if(!movie)
	return {feedback: "kk, se fudeu C",};
    else
	return {movies: movie,};
}

const updateMovie = async(_id, _title, _duration, _sinopse, _isActive) =>{
    const movie = await Movies.update(
	{title: _title, duration: _duration,
	 sinopse: _sinopse, isActive: _isActive,},
	{where: {
	    id: _id,
	}}
    );

    if(!movie)
	return {feedback: "kk, se fudeu D",};
    else
	return {movies: movie,};
}

const deleteMovie = async(_id) =>{
    const movie = await Movies.destroy({where: {id: _id}});
    
    if(!movie)
	return {feedback: "kk, se fudeu E",};
    else
	return {movies: movie,};
}

const findAllWithReviews = async() => {
    const movie = await Movies.findAll(
	{
	    include:[{model: Reviews,
		      include:[{model: Users}]}]
	}
    );
    
    if(!movie)
	return {feedback: "kk, se fudeu F",};
    else
	return {movies: movie,};    
}

module.exports = { findById, findAll, createMovie, updateMovie, deleteMovie, findAllWithReviews };
