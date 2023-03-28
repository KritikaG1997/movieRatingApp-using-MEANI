const service = require("../service/services");
const helper = require("../helper/index");
const axios = require("axios");
const secreData = require("../config/secreDataOfThirdParty");

exports.gitHubLogin = async (req, res) => {

    let accessToken;
    const requestToken = req.query.code;
    axios({
        method: 'post',
        url: `https://github.com/login/oauth/access_token?client_id=${secreData.crediential.gitHubAuth.clientID}&client_secret=${secreData.crediential.gitHubAuth.clientSecretKey}&code=${requestToken}`,

        headers: {
            accept: 'application/json'
        }
    })
        .then(async (response) => {
            accessToken = await response.data.access_token;
            if (accessToken) {

                axios({
                    method: 'get',
                    url: `https://api.github.com/user`,

                    headers: {
                        accept: 'application/json',
                        Authorization: 'token ' + accessToken
                    }
                })
                    .then(async (response) => {

                        const user_info = await response.data;
                        const userExits = await service.findUserByGitId(user_info.id);

                        if (userExits) {
                            const token = helper.jwtToken.createJwt(userExits["_id"]);

                            res.cookie('token', token, {
                                httpOnly: false,
                                maxAge: 1000 * 60 * 60 * 24 * 356
                            });

                            res.redirect('http://localhost:8100/google-authentication');

                        } else {

                            const infoOfUser = {
                                gitHubId: user_info.id,
                                userName: user_info.login,
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
                    })
                    .catch((err) => {
                        console.log(err.message);
                    })
            }
        })
}