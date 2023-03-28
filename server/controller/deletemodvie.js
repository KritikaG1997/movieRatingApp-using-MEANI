const service = require("../service/services");
const message = require("../responsesMessage/messages");

exports.deleteMovie = async (req, res) => {
    const userExits = await service.findUserById(req.user.ID);

    if (userExits) {
        const movie = await service.findMovieById(req.params.id);
        if (movie) {

            if (userExits._id.equals(movie.UserId)) {
                const deleteMovie = await service.deleteMovieById(req.params.id);

                if (deleteMovie.acknowledged == true) {
                    return res.send({
                        message: message.successMessage.message.deletedMovie
                    });
                }
                else {
                    return res.send({
                        error: message.errorMessage.message.deleteMovie
                    });
                };
            }
            else {
                return res.send({
                    error: message.errorMessage.message.admin
                });
            };
        }
        else {
            return res.send({
                error: message.errorMessage.message.movie
            });
        };
    }
    else {
        return res.send({
            error: message.errorMessage.message.notFound
        });
    };

}