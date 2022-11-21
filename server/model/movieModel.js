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
        type: String,
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
});

const movieModel = mongoose.model("movie-details", movieSchema);

module.exports = movieModel;
