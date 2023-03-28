const message = require("../responsesMessage/messages");
const service = require("../service/services");

exports.getAllMovie = async (req, res) => {
    const movieList = await service.getAllMovie();
    if (movieList) {
        res.send({
            message: message.successMessage.message.listsOfMovie,
            result: movieList
        });
    };
};

exports.getMovieByUserId = async (req, res) => {
    const userExits = await service.findUserById(req.user.ID);

    if (userExits) {
        const userMovieList = await service.userMovieList(userExits["_id"])
        if (userMovieList) {
            return res.send({
                message: message.successMessage.message.MovieList,
                result: userMovieList
            })
        }
        else {
            return res.send({
                error: message.errorMessage.message.list
            });
        };
    }
    else {
        return res.send({
            error: message.errorMessage.message.notFound
        });
    };
}

exports.getMovieById = async (req, res) => {
    const movieDetails = await service.findMovieById(req.params.id);
    if (movieDetails) {
        return res.send({
            message: message.successMessage.message.listsOfMovie,
            result: movieDetails
        })
    }
    else {
        return res.send({
            error: message.errorMessage.message.list
        });
    };
};