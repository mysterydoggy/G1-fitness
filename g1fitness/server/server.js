require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
//const passport = require("passport");
const session = require("express-session");

// import routes
const userRoutes = require("./routes/userRoutes"); 
//const workoutRoutes = require("./routes/workoutRoutes"); // to be created
//const journalRoutes = require("./routes/journalRoutes"); // to be created

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));

// passport middleware start
//app.use(passport.initialize());
//app.use(passport.session());
//require("./config/passport")(passport); // Passport strategy (to be implemented)


// testing api routes
app.use("/api/users", userRoutes);
//app.use("/api/workouts", workoutRoutes);
//app.use("/api/journals", journalRoutes);


// test route
app.get("/test", (req, res) => {
    res.send("Hello from the backend! Version 3");
});

// serve static files
app.use(express.static(path.join(__dirname, '../src/')));

// default route
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../src", "App.js"));
});

// start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
