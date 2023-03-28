const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    gitHubId: {
        type: Number,
        default: 0
    },
    googleID: {
        type: Number,
        default: 0
    },
    facebookID: {
        type: Number,
        default: 0
    },
    role: {
        type: String,
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    dob: {
        type: String,
    },
    Country: {
        type: String,
    },
    image: {
        type: String,
    },
    password: {
        type: String,
    }
},
    {
        timestamps: true
    });

const user = mongoose.model("user-account", UserSchema);

module.exports = user;
