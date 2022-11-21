const mongoose = require("mongoose");

const RatingSchema = mongoose.Schema({

    UserId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'user-accounts'
    },
    MovieId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'movie-details'
    },
    Likes: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    });

const rating = mongoose.model("movie-rating", RatingSchema);

module.exports = rating;
