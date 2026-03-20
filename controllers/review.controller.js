const reviewService = require("../services/review.services.js");

const createReview_C = async(req, res) => {
    const {userId, movieId, rating, comment} = req.body;
    const { reviews, feedback } = await reviewService.createReview(	userId, movieId, rating, comment);
    
    if(feedback)
	return res.json({feedback});
    else
	return res.json(reviews);
}

const findAll_C = async(req, res) => {
    const { reviews, feedback } = await reviewService.findAll();

    if(feedback)
	return res.json({feedback});
    else
	return res.json(reviews);    
}

const findByMovieId_C = async(req, res) => {
    const id = req.params.id;
    const { reviews, feedback } = await reviewService.findByMovieId(id);

    if(feedback)
	return res.json({feedback});
    else
	return res.json(reviews);
}

module.exports = {createReview_C, findAll_C, findByMovieId_C};
