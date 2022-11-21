const jwt = require("jsonwebtoken");

exports.createJwt = (userId) => {
    let token = jwt.sign({ ID: userId }, "token", {
        expiresIn: "365d"
    });
    return token;
}