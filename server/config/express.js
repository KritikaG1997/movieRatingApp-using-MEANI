// packages
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//routes folder
const routes = require("../routers/routes");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


//routes
app.use("/user", routes.userRoute);
app.use("/movie", routes.movieRoutes);

module.exports = app;