const message = require("../responsesMessage/messages");
const service = require("../service/services");

exports.Rating = async (req, res) => {
    const userExit = await service.findUserById(req.user.ID);
    if (userExit) {
        const movie = await service.findMovieById(req.params.id);
        if (movie) {
            const findRatingUser = await service.findratedUser(userExit["_id"]);

            if (findRatingUser.length == 0) {
                const addLike = {
                    UserId: userExit["_id"],
                    MovieId: movie["_id"],
                    Likes: 1
                };

                const rateMovie = await service.ratingAdd(addLike);

                if (rateMovie) {
                    const likes = {
                        rates: movie["rates"] + 1
                    }

                    const updateLikes = await service.updateMovie(movie, likes);
                    return res.send({
                        message: message.successMessage.message.rateing
                    })
                };

            }
            else if (findRatingUser.length != 0) {
                let movieRatedId = 0;

                for (let i = 0; i < findRatingUser.length; i++) {
                    if (findRatingUser[i].MovieId.equals(req.params.id)) {
                        movieRatedId = findRatingUser[i]["MovieId"];
                    };
                };
                if (!movieRatedId) {
                    const addLike = {
                        UserId: userExit["_id"],
                        MovieId: movie["_id"],
                        Likes: 1
                    };

                    const rateMovie = await service.ratingAdd(addLike);
                    if (rateMovie) {
                        const likes = {
                            rates: movie["rates"] + 1
                        }

                        const updateLikes = await service.updateMovie(movie, likes);
                        return res.send({
                            message: message.successMessage.message.rateing
                        })
                    };

                }
                else {
                    return res.send({
                        message: message.errorMessage.message.rated
                    })
                };
            }
            else {
                return res.send({
                    message: message.errorMessage.message.rated
                })
            };
        }
        else {
            return res.send({
                message: message.errorMessage.message.movie
            });
        };
    }
    else {
        return res.send({
            message: message.errorMessage.message.notFound
        });
    };
};