const express = require("express");
const db = require("./models");
const app = express();
const port = 3000;

const users_r  = require("./routes/user.routes.js");
const movies_r  = require("./routes/movie.routes.js");
const reviews_r  = require("./routes/review.routes.js");

const moviesExtra = require("./controllers/movie.controller.js");

app.use(express.json());
app.use("/users", users_r);
app.use("/movies", movies_r);
app.use("/reviews", reviews_r);

app.get("/movies-with-reviews", moviesExtra.findAllWithReviews_C);

async function startServer(){
    try{
	await db.sequelize.authenticate();
	console.log("Database running");

	await db.sequelize.sync({alter:true});

	app.listen(port, ()=>{
	    console.log(`Server running on ${port}`);
	});
    }
    catch{
	console.log("Couldn't start server");
    }
}

startServer();
