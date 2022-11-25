const models = require("../model/index");

// finding user by email address
exports.findUserByEmail = (email) => {
    return models.userModel.findOne({ email: email });
};

// creating user by giving his payload

exports.singupUser = (payload) => {
    return models.userModel.create(payload);
};

// adding move query 
exports.addMovie = (payload) => {
    return models.movieModel.create(payload);
};

// finding user by using by user id
exports.findUserById = (Id) => {
    return models.userModel.findOne({ _id: Id });
};

// deleting movie by using movie id
exports.deleteMovieById = (Id) => {
    return models.movieModel.deleteOne({ _id: Id });
};

//finding movie details by using movie id
exports.findMovieById = (Id) => {
    return models.movieModel.findOne({ _id: Id });
};

//get all movie without login
exports.getAllMovie = async () => {
    return models.movieModel.find();

};

//update movies details
exports.updateMovie = (post, payload) => {
    const options = { "upsert": false };
    return models.movieModel.updateOne(post, payload, options);
};

//get movie list according to user
exports.userMovieList = async (Id) => {
    return models.movieModel.find({ UserId: Id });
};

// give rating to movie
exports.ratingAdd = (payload) => {
    return models.ratingModel.create(payload);
};

//find user who gave rating to user
exports.findratedUser = (id) => {
    return models.ratingModel.find({ UserId: id });
};

//change user password
exports.changePass = (user, payload, option) => {
    return models.userModel.updateOne(user, payload, options);
};