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
          // casts: req.body.casts,
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
          budget: req.body.budget,
        };

        const movieAdded = await service.addMovie(payload);

        if (movieAdded) {
          return res.send({
            message: message.successMessage.message.added,
          });
        } else {
          return res.send({
            error: message.errorMessage.message.desc,
          });
        }
      } else {
        return res.send({
          error: message.errorMessage.message.story,
        });
      }
    } else {
      return res.send({
        error: message.errorMessage.message.desc,
      });
    }
  } else {
    return res.send({
      error: message.errorMessage.message.notFound,
    });
  }
};

exports.addCasts = async (req, res) => {
  const userExits = await service.findUserById(req.user.ID);

  const nameOfCastMembers = req.body.castName;
  const imagesOfCastMembers = req.files;

  if (typeof userExits !== undefined || userExits !== null) {
    const movie = await service.findMovieById(req.params.id);

    if (typeof movie !== undefined || movie !== null) {
      if (userExits._id.equals(movie.UserId)) {
        let arrayOfCastInfo = [];

        for (let i = 0; i < nameOfCastMembers.length; i++) {

          let castInfoObject = {
            castName: "",
            castImage: "",
          };

          castInfoObject["castName"] = nameOfCastMembers[i];
          castInfoObject["castImage"] = imagesOfCastMembers[i].path;
          arrayOfCastInfo.push(castInfoObject);

        }

        console.log(arrayOfCastInfo, "arrayOfCastInfo");

        const payload = {
            castsInfo : arrayOfCastInfo
        }

        const updateMovieCast = await service.updateMovie(movie, payload);
        if (updateMovieCast) {
            res.send({
                message: message.successMessage.message.updated,
            });
        }
        else {
            res.send({
                message: message.errorMessage.message.update
            });
        }
      }
    }
  }
};
