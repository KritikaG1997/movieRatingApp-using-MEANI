const express = require("express");

const userRoute = express.Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const clientId = "1087889266620-q22jq0va0n8sldl9j1r5mmo9njqtocmm.apps.googleusercontent.com"
const clientKey = "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";

//importing file's folders
const controllerFiles = require("../controller/index");


//middleware
const middleware = require("../middleware/index");

userRoute.use(passport.initialize());
// userRoute.use(passport.session());
// login route
userRoute.post("/login", middleware.userVerify.verifyUser, controllerFiles.login.login);

// signup routes
userRoute.post("/signup", middleware.multer.single("image"), middleware.payloadVerify.payloadVerify, controllerFiles.signup.signup);

//user profile url
userRoute.get("/profile", middleware.jwtVerify.tokenVerify, controllerFiles.profile.userProfile);

//change user password
userRoute.put("/password", middleware.jwtVerify.tokenVerify, middleware.comparePass.verifyAndValidatePass, controllerFiles.chnagePass.changePassword);

passport.use(
    new GoogleStrategy({
        clientID: clientId,
        clientSecret: clientKey,
        callbackURL: 'http://localhost:8080/user/auth/google/callback'

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