const express = require("express");

const movieRoutes = express.Router();

//importing file's folders
const controllerFiles = require("../controller/index");

//middleware
const middleware = require("../middleware/index");

// adding movie route
movieRoutes.post(
  "/add",
  middleware.jwtVerify.tokenVerify,
  middleware.multer.single("image"),
  controllerFiles.addMovie.addMovie
);

// signup routes
movieRoutes.delete(
  "/delete/:id",
  middleware.jwtVerify.tokenVerify,
  controllerFiles.deleteMovie.deleteMovie
);

// update movie details
movieRoutes.put(
  "/edit/:id",
  middleware.jwtVerify.tokenVerify,
  middleware.multer.single("image"),
  controllerFiles.editMovie.editMovie
);

//get all movie list
movieRoutes.get("/", controllerFiles.getMovies.getAllMovie);

// get movie list by user id
movieRoutes.get(
  "/list",
  middleware.jwtVerify.tokenVerify,
  controllerFiles.getMovies.getMovieByUserId
);

// add rating to movie
movieRoutes.post(
  "/rate/:id",
  middleware.jwtVerify.tokenVerify,
  controllerFiles.rating.Rating
);

//movie by id
movieRoutes.get("/get/:id", controllerFiles.getMovies.getMovieById);

//add cast
movieRoutes.put(
  "/addcast/:id",
  middleware.jwtVerify.tokenVerify,
  middleware.multer.array("image"),
  controllerFiles.addMovie.addCasts
);

//add movie related photos
movieRoutes.put(
  "/addphotos/:id",
  middleware.jwtVerify.tokenVerify,
  middleware.multer.array("image"),
  controllerFiles.addMoviePhotos.addPhotos
);

module.exports = movieRoutes;
