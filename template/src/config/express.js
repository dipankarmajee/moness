const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

/* MIDDLEWARE */
app.use(morgan("dev"));
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

/* ROUTES */
app.use("/api/users", require("../routes/userRoutes"));

module.exports = app;
