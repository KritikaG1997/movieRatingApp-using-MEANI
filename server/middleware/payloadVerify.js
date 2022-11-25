const message = require("../responsesMessage/messages");
const userModel = require("../model/userModel");


exports.payloadVerify = async (req, res, next) => {
    if (req.body !== "") {
        if (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(req.body.email)) {

            userModel.findOne({ email: req.body.email }).exec(async (err, email) => {
                if (email) {
                    return res.status(401).send({
                        message: message.errorMessage.message.emailExit,
                        error: err
                    })
                }
                if (req.body.password.match(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,12})"))) {

                    if (req.body.confirm_password) {
                        if (req.body.password === req.body.confirm_password) {
                            next();
                        }
                        else {
                            return res.send({
                                message: message.errorMessage.message.notSame
                            })
                        }
                    }
                    else {
                        return res.send({
                            message: message.errorMessage.message.confirmPass
                        })
                    }
                }
                else {
                    return res.send({
                        message: message.errorMessage.message.password
                    })
                }
            })
        }
        else {
            return res.send({
                message: message.errorMessage.message.email
            })
        }
    }
    else {
        return res.send({
            message: message.errorMessage.message.required
        })
    }
}