const jwt = require("jsonwebtoken");
const message = require("../responsesMessage/messages");

exports.tokenVerify = async (req, res, next) => {

    const token = req.headers.authorization;
    if (token) {
        // let sliceToken = token.slice(7, token.length - 0);

        jwt.verify(token, 'token', (err, user) => {
            if (err) {
                res.send({
                    status: 404,
                    error: err
                })
            }
            else {
                req.user = user;
                next()
            };
        });
    }
    else {
        return res.send({
            message: message.errorMessage.message.login
        });
    };
};