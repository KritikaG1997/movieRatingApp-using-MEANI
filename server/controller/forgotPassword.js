const service = require("../service/services");
const message = require("../responsesMessage/messages");

exports.forgotPassword = async (req, res) => {
    const userExit = service.findUserByEmail(req.body.email);
    if (userExit) {
        var otp = Math.floor(1000 + Math.random() * 9000);
        const userOtp = new otp({
            email: req.body.user_email,
            code: otp,
            expireIn: new Date().getTime() + 300 * 1000
        });
    }
    else {
        return res.send({
            error: message.errorMessage.message.notVerify
        })
    }

}