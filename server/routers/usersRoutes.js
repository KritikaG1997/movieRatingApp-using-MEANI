const express = require("express");
const userRoute = express.Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const secreData = require("../config/secreDataOfThirdParty");
const FacebookStrategy = require('passport-facebook').Strategy

//importing file's folders
const controllerFiles = require("../controller/index");

//middleware
const middleware = require("../middleware/index");

userRoute.use(passport.initialize());


// login route
userRoute.post("/login", middleware.userVerify.verifyUser, controllerFiles.login.login);

// signup routes
userRoute.post("/signup", middleware.multer.single("image"), middleware.payloadVerify.payloadVerify, controllerFiles.signup.signup);

//user profile url
userRoute.get("/profile", middleware.jwtVerify.tokenVerify, controllerFiles.profile.userProfile);

//change user password
userRoute.put("/password", middleware.jwtVerify.tokenVerify, middleware.comparePass.verifyAndValidatePass, controllerFiles.chnagePass.changePassword);

//github login

userRoute.get('/oauth/redirect', controllerFiles.gitHub.gitHubLogin);

//login with facebook

passport.use(new FacebookStrategy({
    clientID: secreData.crediential.facebookAuth.appId,
    clientSecret: secreData.crediential.facebookAuth.appSecretKey,
    callbackURL: secreData.crediential.facebookAuth.callbackURl,
    profileFields: ["email", "name"]
},
    function (accessToken, refreshToken, profile, done) {

        process.nextTick(function () {
            //Check whether the User exists or not using profile.id
            return done(null, profile);
        });
    }
));

userRoute.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

userRoute.get('/auth/facebook/callback',
    passport.authenticate("facebook", {
        failureRedirect: "/failed"
    }),
    controllerFiles.facebook.facebookAuth
);

//login with google routes
passport.use(
    new GoogleStrategy({
        clientID: secreData.crediential.googleAuth.clientID,
        clientSecret: secreData.crediential.googleAuth.clientSecretKey,
        callbackURL: secreData.crediential.googleAuth.callbackURl

    },
        (accessToken, refreshToken, profile, done) => {
            return done(null, profile)
        })
);

userRoute.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
})
);

userRoute.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/failed" }),
    controllerFiles.googleAuth.googleLogin
);

userRoute.get("/failed", (req, res) => {
    res.send("Failed")
})

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

module.exports = userRoute;