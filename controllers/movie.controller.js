const movieService = require("../services/movies.services.js");

const findById_C = async(req, res) => {
    const id = req.params.id;
    const {movies, feedback} = await movieService.findById(id);

    if(feedback)
	return res.json({feedback});
    else
	return res.json(movies);
}

const findAll_C = async(req, res) => {
    const {movies, feedback} = await movieService.findAll();
    
    if(feedback)
	return res.json({feedback});
    else
	return res.json(movies);    
}

const createMovie_C = async(req, res) => {
    const {title, duration, sinopse, isActive} = req.body;
    const {feedback, movies} = await movieService.createMovie(
	title, duration, sinopse, isActive);
    
    if(feedback)
	return res.json({feedback});
    else
	return res.json(movies);
}

const updateMovie_C = async(req, res) => {
    const id = req.params.id;
    const {title, duration, sinopse, isActive} = req.body;
    const {feedback, movies} = await movieService.updateMovie(
	id, title, duration, sinopse, isActive);
    
    if(feedback)
	return res.json({feedback});
    else
	return res.json(movies);
}

const deleteMovie_C = async(req, res) => {
    const id = req.params.id;
    const {feedback, movies} = await movieService.deleteMovie(id);
    
    if(feedback)
	return res.json({feedback});
    else
	return res.json(movies);
}

const findAllWithReviews_C = async(req, res) => {
    const { movies, feedback } = await movieService.findAllWithReviews();
    
    if(feedback)
	return res.json({feedback});
    else
	return res.json(movies);    
}

module.exports = { findById_C, findAll_C, createMovie_C, updateMovie_C, deleteMovie_C, findAllWithReviews_C};
