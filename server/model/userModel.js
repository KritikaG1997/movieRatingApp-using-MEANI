const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    googleID: {
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
        required: true
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
