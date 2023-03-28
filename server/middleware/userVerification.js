const bcrypt = require("bcrypt");
const service = require("../service/services");
const message = require("../responsesMessage/messages");

exports.verifyUser = async (req, res, next) => {

    const verification = await service.findUserByEmail(req.body.email);
    if (verification) {
        bcrypt.compare(req.body.password, verification["password"], (err,result) => {
            if (result == true) {
                req.pass = result;
                req.details = verification;
                next()
            }
            else if ((result == false)) {
                return res.send({
                    error: "password does not matched"
                })
            }
        })
    }
    else {
        return res.send({
            error: message.errorMessage.message.notVerify
        })
    }
}