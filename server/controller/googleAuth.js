const service = require("../service/services");
const axios = require('axios');
const helper = require("../helper/index");
const fs = require("fs");

exports.googleLogin = async (req, res) => {
    try {
        const user_info = req.user._json;

        const userData = await service.findUserByEmail(user_info.email);

        if (userData) {
            const token = helper.jwtToken.createJwt(userData["_id"]);


            res.cookie('token', token, {
                httpOnly: false,
                maxAge: 1000 * 60 * 60 * 24 * 356
            });

            res.redirect('http://localhost:8100/google-authentication');

        } else {

            const infoOfUser = {
                googleID: user_info.sub,
                userName: user_info.name,
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