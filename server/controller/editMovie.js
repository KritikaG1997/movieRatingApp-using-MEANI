const message = require("../responsesMessage/messages");
const service = require("../service/services");

exports.editMovie = async (req, res) => {
    const userExits = await service.findUserById(req.user.ID);
    if (userExits) {
        const movie = await service.findMovieById(req.params.id);
        if (movie) {
            if (userExits._id.equals(movie.UserId)) {
                const description = req.body.description.match(/(\w+)/g).length;
                if (description <= 100) {
                    const payload = {

                        image: req.file?.path,
                        description: req.body.description,
                        collectionAmount: req.body.collection,
                    };
                    const updateMovie = await service.updateMovie(movie, payload);
                    if (updateMovie) {
                        res.send({
                            message: message.successMessage.message.updated,
                        })
                    }
                    else {
                        res.send({
                            error: message.errorMessage.message.update
                        })
                    }
                }
                else {
                    return res.send({
                        error: message.errorMessage.message.desc
                    })
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
