const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'user-accounts'
    },
    movieName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    releaseDate: {
        type: String,
        required: true
    },
    casts: {
        type: Array,
        required: true
    },

    director: {
        type: String,
        required: true
    },
    producer: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    collectionAmount: {
        type: String,
        required: true
    },
    timing: {
        type: String,
        required: true
    },
    writtenBy: {
        type: String,
        required: true
    },
    music: {
        type: String,
        required: true
    },
    rates: {
        type: Number
    },
    moviePhotos: {
        type: String
    },
    castsPhotos: [String],

    storyline: {
        type: String,
        required: true
    },
    videos: {
        type: String
    },
    reviews: {
        type: String,

    },
    genre: {
        type: String,
        required: true
    },
    budget: {
        type: String,
        required: true
    },
});

const movieModel = mongoose.model("movie-details", movieSchema);

module.exports = movieModel;
