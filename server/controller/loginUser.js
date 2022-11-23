const message = require("../responsesMessage/messages");
const helper = require("../helper/index");

exports.login = async (req, res) => {
    if (req.pass == true) {
        const token = helper.jwtToken.createJwt(req.details["_id"]);
        if (token) {
            return res.cookie("userToken", token).
                send({
                    message: message.successMessage.message.login,
                    user: req.details,
                    token:token
                });
        }
        else {
            return res.send({
                message: message.errorMessage.message.token
            });
        };
    }
    else {
        return res.send({
            message: message.errorMessage.message.notVerify
        });
    };
};