const message = require("../responsesMessage/messages");
const service = require("../service/services");
const helper = require("../helper/index");


exports.signup = async (req, res) => {

    const payload = {
        role: req.body.role,
        userName: req.body.name,
        email: req.body.email,
        Country: req.body.Country,
        image: req.file?.path,
        password: req.body.password
    };
    const hashPassword = await helper.hashPassword.hashPass(req.body.password);

    if (hashPassword) {

        payload["password"] = hashPassword;

        const createAccount = await service.singupUser(payload);
        if (createAccount !== "") {

            return res.send({
                message: message.successMessage.message.signup,
                result: {
                    role: payload.role,
                    name: payload.userName,
                    email: payload.email,
                    image: payload.image,
                    Country: payload.Country,
                    password: req.body.password
                }
            });
        };
    }
    else {
        return res.send({
            message: message.errorMessage.message.hassPass
        })
    }
};