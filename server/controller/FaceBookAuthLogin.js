const service = require("../service/services");
const helper = require("../helper/index");

exports.facebookAuth = async (req, res) => {
    try {
        const user_info = req.user._json;
        console.log(user_info, "user_info");

        const userData = await service.findUserByEmail(user_info.email);
        console.log(userData);

        if (userData) {
            const token = helper.jwtToken.createJwt(userData["_id"]);


            res.cookie('token', token, {
                httpOnly: false,
                maxAge: 1000 * 60 * 60 * 24 * 356
            });

            res.redirect('http://localhost:8100/google-authentication');

        } else {

            const infoOfUser = {
                facebookID: user_info.id,
                userName: user_info.first_name + " " + user_info.last_name,
                email: user_info.email,
            };
            let userModel = await service.singupUser(infoOfUser);

            if (userModel) {
                const token = helper.jwtToken.createJwt(userModel["_id"]);
                res.cookie('token', token, {
                    httpOnly: false,
                    maxAge: 1000 * 60 * 60 * 24 * 356
                });
                res.redirect('http://localhost:8100/google-authentication');
            }
        }

    } catch (err) {
        console.log(err);
    };

};