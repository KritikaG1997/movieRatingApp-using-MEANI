const service = require("../service/services");
const message = require("../responsesMessage/messages");

exports.addMovie = async (req, res) => {

    const userExits = await service.findUserById(req.user.ID);
    if (userExits) {
        const description = req.body.description.match(/(\w+)/g).length;

        if (description <= 100) {

            const payload = {
                UserId: userExits["_id"],
                movieName: req.body.movie,
                image: req.file?.path,
                releaseDate: req.body.date,
                casts: req.body.casts,
                director: req.body.director,
                producer: req.body.producer,
                description: req.body.description,
                collectionAmount: req.body.collection,
                timing: req.body.timing,
                writtenBy: req.body.writtenBy,
                music: req.body.music,
                rates: 0
            };

            const movieAdded = await service.addMovie(payload);

            if (movieAdded) {
                return res.send({
                    message: message.successMessage.message.added
                })
            }
            else {
                return res.send({
                    message: message.errorMessage.message.desc
                })
            };
        }
        else {
            return res.send({
                message: message.errorMessage.message.desc
            })
        };
    }
    else {
        return res.send({
            message: message.errorMessage.message.notFound
        });
    };
};