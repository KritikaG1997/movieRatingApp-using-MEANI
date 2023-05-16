const message = require("../responsesMessage/messages");
const service = require("../service/services");
const movModel = require("../model/movieModel");

exports.getAllMovie = async (req, res) => {
    const movieList = await service.getAllMovie();
    if (movieList) {
        res.status(200).send({
            message: message.successMessage.message.listsOfMovie,
            result: movieList
        });
    };
};

exports.getMovieByUserId = async (req, res) => {
    const userExits = await service.findUserById(req.user.ID);

    if (typeof userExits !== "undefined") {
        const userMovieList = await service.userMovieList(userExits["_id"])
        if (typeof userMovieList !== "undefined") {
            return res.status(200).send({
                message: message.successMessage.message.MovieList,
                result: userMovieList
            })
        }
        else {
            return res.status(404).send({
                error: message.errorMessage.message.list
            });
        };
    }
    else {
        return res.status(404).send({
            error: message.errorMessage.message.notFound
        });
    };
}

exports.getMovieById = async (req, res) => {
    const movieDetails = await service.findMovieById(req.params.id);
    if (movieDetails) {
        return res.status(200).send({
            message: message.successMessage.message.listsOfMovie,
            result: movieDetails
        })
    }
    else {
        return res.status(404).send({
            error: message.errorMessage.message.list
        });
    };
};

exports.search = async (req, res) => {
    try {
        let queryString = req.query.movieName;
        if (queryString == '') {

            movModel.find().
                then((result) => {
                    if (typeof result !== "undefined" && result.length > 0) {
                        let response = {}
                        response["result"] = result;
                        response["status"] = 200
                        res.status(200).send({
                            result:response
                        })
                    }
                }).
                catch((err) => {
                    res.status(500).send({ error: err.message });
                })
        }
        else {
            movModel.find({ movieName: { $regex: queryString, $options: 'm' } }).
                then((result) => {
                    
                    if (typeof result !== "undefined" && result.length > 0) {
                        let response = {}
                        response["result"] = result;
                        response["status"] = 200
                        res.status(200).send({
                            result:response
                        })
                    }
                }).
                catch((err) => {
                    res.status(500).send({ error: err.message });
                })
        }
    }
    catch (err) {
        res.status(400).send({
            message: "soething went wrong"
        });
    };
};
