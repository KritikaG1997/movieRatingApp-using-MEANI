const bcrypt = require("bcrypt");
const message = require("../responsesMessage/messages");
const service = require("../service/services")

exports.verifyAndValidatePass = async (req, res, next) => {
    const userExits = await service.findUserById(req.user.ID);
    if (userExits) { }
    bcrypt.compare(req.body.password, userExits["password"], (err, result) => {
        if (result == true) {
            if (req.body.newPassword.match(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,12})"))) {

                if (req.body.newPassword.length >= 8 && req.body.newPassword.length <= 12) {
                    if (req.body.reEnterPassword) {

                        if (req.body.newPassword == req.body.reEnterPassword) {
                            req.userData = userExits
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
                    };
                }
                else {
                    return res.send({
                        message: message.errorMessage.message.length
                    })
                }
            }
            else {
                return res.send({
                    message: message.errorMessage.message.password
                })
            }
        }
        else if ((result == false)) {
            return res.send({
                message: message.errorMessage.message.wrong
            })
        }

    })
}