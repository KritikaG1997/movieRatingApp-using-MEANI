const service = require("../service/services");
const message = require("../responsesMessage/messages");

exports.addMovie = async (req, res) => {

    const userExits = await service.findUserById(req.user.ID);
    if (userExits) {
        const description = req.body.description.match(/(\w+)/g).length;
        const storyWords = req.body.storyline.match(/(\w+)/g).length;

        if (description <= 100 && description >= 10) {
            if (storyWords <= 200 && storyWords >= 10) {


                const payload = {
                    UserId: userExits["_id"],
                    movieName: req.body.movie,
                    image: req.file?.path,
                    releaseDate: req.body.date,
                    director: req.body.director,
                    producer: req.body.producer,
                    description: req.body.description,
                    collectionAmount: req.body.collection,
                    timing: req.body.timing,
                    writtenBy: req.body.writtenBy,
                    music: req.body.music,
                    rates: 0,
                    storyline: req.body.storyline,
                    reviews: 0,
                    genre: req.body.genre,
                    budget: req.body.budget
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
                    message: message.errorMessage.message.story
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

// exports.addCasts = async (req, res) => {
//     let MovieCastsName = JSON.parse(req.body.casts);
//     let MovieCastsPicute = JSON.parse(req.body.image);
    
// }