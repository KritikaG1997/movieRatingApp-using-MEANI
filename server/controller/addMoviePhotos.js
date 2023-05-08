const service = require("../service/services");
const message = require("../responsesMessage/messages");

exports.addPhotos = async (req, res) => {
  const userExits = await service.findUserById(req.user.ID);

  const movieRelatedPhotos = req.files;

  if (typeof userExits !== undefined || userExits !== null) {
    const movie = await service.findMovieById(req.params.id);
    console.log(movie, "movie");

    if (typeof movie !== undefined || movie !== null) {
      if (userExits._id.equals(movie.UserId)) {
        let moviePayload = [];
        for (image of movieRelatedPhotos) {
          let movieImg = {
            moviePhotos: "",
          };

          movieImg.moviePhotos = image?.path;
          moviePayload.push(movieImg);
        }
        let payload = {
          moviePhotos: moviePayload,
        };

        const updateMoviePhotsArray = await service.updateMovie(
          movie,
          payload
        );
        console.log("updateMoviePhotsArray", updateMoviePhotsArray);

        if (
          typeof updateMoviePhotsArray !== undefined &&
          updateMoviePhotsArray !== null
        ) {
          res.send({
            message: message.successMessage.message.updated,
            payload: payload,
          });
        } else {
          res.send({
            error: message.errorMessage.message.update,
          });
        }
      }
    }
  }
};
