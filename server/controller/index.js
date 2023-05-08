const addMovie = require("./addMovie");
const editMovie = require("./editMovie");
const getMovies = require("./getMovies");
const login = require("./loginUser");
const signup = require("./signup");
const deleteMovie = require("./deletemodvie");
const rating = require("./Movie-rating");
const profile = require("./userProfile");
const chnagePass = require("./changePassword");
const forgotPass = require("./forgotPassword");
const googleAuth = require("./googleAuth");
const facebook = require("./FaceBookAuthLogin");
const gitHub = require("./gitHubLogin");
const addMoviePhotos = require("./addMoviePhotos");

module.exports = {
    addMovie,
    editMovie,
    getMovies,
    login,
    signup,
    deleteMovie,
    rating,
    profile,
    chnagePass,
    forgotPass,
    googleAuth,
    facebook,
    gitHub,
    addMoviePhotos
}



