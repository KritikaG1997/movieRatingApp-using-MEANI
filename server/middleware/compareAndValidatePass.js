const bcrypt = require("bcrypt");
const message = require("../responsesMessage/messages");

exports.verifyAndValidatePass = async (req, res, next) => {
    const userExits = await service.findUserById(req.user.ID);
    if (userExits) { }
    bcrypt.compare(req.body.password, userExits["password"], (err, result) => {
        if (result == true) {
            if (req.body.password.match(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,12})"))) {
                if (req.body.password.length >= 8 && req.body.password.length <= 12) {
                    if (req.body.reEnterPassword) {
                        if (req.body.password == req.body.reEnterPassword) {
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
                error: err
            })
        }

    })
}