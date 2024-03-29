const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const workoutRoutes = require("./routes/workouts");
const methodOverride = require("method-override");
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

require("dotenv").config({path: "./config/.env"});

// Passport config
require("./config/passport")(passport);

connectDB();

app.set("view engine", "ejs");
// eslint-disable-next-line no-undef
app.use("/public", express.static(__dirname + "/public"));
// eslint-disable-next-line no-undef
app.use("/dist", express.static(__dirname + "/dist"));
// eslint-disable-next-line no-undef
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(methodOverride("_method"));
// Sessions
app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  );
  
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
  
app.use("/", mainRoutes);
app.use("/home", workoutRoutes);
 
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}, you better catch it!`);
});