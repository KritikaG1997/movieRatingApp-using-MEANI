const service = require("../service/services");
const message = require("../responsesMessage/messages");

exports.userProfile = async (req, res) => {
    const profile = await service.findUserById(req.user.ID);
    if (profile) {
        return res.send({
            message: message.successMessage.message.logged,
            result: profile
        })
    }
    else {
        return res.send({
            message: message.errorMessage.message.notFound
        })
    }
}