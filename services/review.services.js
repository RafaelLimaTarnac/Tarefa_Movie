/*
POST /reviews Criar avaliacao 
GET /reviews Listar avaliacoes com usuario e filme 
GET /movies/:id/reviews Listar avaliacoes de um filme
*/
const { Reviews } = require("../models/review.model.js");
const { Users } = require("../models/user.model.js");
const { Movies } = require("../models/movie.model.js");

const createReview = async(_userId, _movieId, _rating, _comment) => {
    if(!_userId || !_movieId)
	return {feedback: "sem movie/user id, burrao!"};
    if(!_rating || !_comment)
	return {feedback: "sem content, seu animal!"};

    if(_rating < 0)
	_rating = 0;
    else if(_rating > 5)
	_rating = 5;

    const review = await Reviews.create({
	rating: _rating,
	comment: _comment,
	userId: _userId,
	movieId: _movieId,
    });

    if(!review)
	return {feedback: "kk, se fudeu Z"};
    else
	return {reviews: review};
}

const findAll = async() => {
    const review = await Reviews.findAll(
	{include: [{model: Users}, {model: Movies}]}
    );
    
    if(!review)
	return {feedback: "kk, se fudeu Y"};
    else
	return {reviews: review};
}

const findByMovieId = async(id) => {
    const review = await Reviews.findAll({
	where: {
	    movieId: id,
	}
    });

    if(!review)
	return {feedback: "kk, se fudeu X"};
    else
	return {reviews: review};	  
}

module.exports = { createReview, findAll, findByMovieId};
