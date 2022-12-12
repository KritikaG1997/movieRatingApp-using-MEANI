// packages
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const session = require("express-session");

//routes folder
const routes = require("../routers/routes");

const app = express();
app.use(session({ secret: 'melody hensley is my spirit animal' }));

app.use(cors());
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());



app.use('/upload', express.static('upload'));


//routes
app.use("/user", routes.userRoute);
app.use("/movie", routes.movieRoutes);

module.exports = app;