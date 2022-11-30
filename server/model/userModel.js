const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({

    role: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    Country: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    });

const user = mongoose.model("user-account", UserSchema);

module.exports = user;
