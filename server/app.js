// package imports
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

// custom files imports
//const songRouter = require("./routes/song-route");

// mongodb connection
// TODO: enter your 👇 database name below
const user=require('./model/user.model');
const URI = "mongodb+srv://ikjas:ikjas@ikjas.0vvpm6b.mongodb.net/?retryWrites=true&w=majority&appName=ikjas";
mongoose.connect(URI);
mongoose.connection.on("connected", () => {
    console.log("mongodb is connected successfully");
});
const User=require('./model/user.model');
// declaration
const app = express();
// middle ware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

// routers
// TODO: add your router below 👇
//app.use('/song', songRouter);


// exports
module.exports = app;