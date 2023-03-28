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
                    casts: req.body.casts,
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
                        error: message.errorMessage.message.desc
                    })
                };
            }
            else {
                return res.send({
                    error: message.errorMessage.message.story
                })
            };
        }
        else {
            return res.send({
                error: message.errorMessage.message.desc
            })
        };
    }
    else {
        return res.send({
            error: message.errorMessage.message.notFound
        });
    };
};

// exports.addCasts = async (req, res) => {

//     console.log(req.body, "req", req.file, "req.file", req.files,"req.params.id",req.params.id);
//     const userExits = await service.findUserById(req.user.ID);
//     console.log(userExits, "userExits");
//     if (userExits) {
//         const movie = await service.findMovieById(req.params.id);
//         console.log(movie, "movie");


//         // if (movie) {
//         //     if (userExits._id.equals(movie.UserId)) {
//         //         const payload = {
//         //             casts: req.body[0].name,
//         //             castsPhotos: req.file?.path
//         //         };
//         //         const updateMovie = await service.updateMovie(movie, payload);
//         //         if (updateMovie) {
//         //             res.send({
//         //                 message: message.successMessage.message.updated,
//         //             });
//         //         }
//         //         else {
//         //             res.send({
//         //                 message: message.errorMessage.message.update
//         //             });
//         //         }
//         //     }
//         // }
//     }
// }