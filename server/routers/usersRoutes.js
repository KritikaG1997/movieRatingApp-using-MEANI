const express = require("express");

const userRoute = express.Router();

//importing file's folders
const controllerFiles = require("../controller/index");

//middleware
const middleware = require("../middleware/index");

// login route
userRoute.post("/login", middleware.userVerify.verifyUser, controllerFiles.login.login);

// signup routes
userRoute.post("/signup", middleware.payloadVerify.payloadVerify, controllerFiles.signup.signup);

//user profile url
userRoute.get("/profile", middleware.jwtVerify.tokenVerify, controllerFiles.profile.userProfile);

//change user password
userRoute.put("/password", middleware.jwtVerify.tokenVerify, middleware.comparePass.verifyAndValidatePass, controllerFiles.chnagePass.changePassword);



module.exports = userRoute;