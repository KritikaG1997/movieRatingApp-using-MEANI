const mongoose = require("mongoose");
const message = require("../responsesMessage/messages");

const uri = "mongodb+srv://Madhav:kritika123@cluster0.ysgo71k.mongodb.net/movieRatingApp?retryWrites=true&w=majority";

const connect = mongoose.connect(uri).
    then((result) => {
        console.log({
            message: message.consoleMessage.message.dbConnect
        })
    }).catch((err) => {
        console.log({
            message: message.consoleMessage.message.dbNotConnect,
            error: err.message
        });
    });

module.exports = connect;