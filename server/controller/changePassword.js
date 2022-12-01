const service = require("../service/services");
const message = require("../responsesMessage/messages");
const helper = require("../helper/index");

exports.changePassword = async (req, res) => {
    const hashPassword = {
        password: await helper.hashPassword.hashPass(req.body.newPassword)
    }
    if (hashPassword) {
        const option = { "upsert": false };
        const updatePassword = await service.changePass(req.userData, hashPassword, option);
        if (updatePassword) {
            res.send({
                message: message.successMessage.message.changed
            })
        }
        else {
            return res.send({
                message: message.errorMessage.message.chnagePass
            })
        };
    }
    else {
        return res.send({
            message: message.errorMessage.message.hassPass
        })
    }
}