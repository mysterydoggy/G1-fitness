require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const passport = require("./config/passport");
const session = require("express-session");
const sequelize = require("./config/db"); // import sequelize instance

sequelize.sync({ force: false }) // set to `true` to reset DB on restart
    .then(() => console.log("Database synced"))
    .catch((err) => console.error("Database error:", err)) // log any errors

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
app.use(passport.initialize());
app.use(passport.session());


//google oauth route
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

//google callback route for oauth
app.get("/auth/google/callback", passport.authenticate("google", 
    { failureRedirect: "/login"}), (req, res) => {
        res.redirect("/success") }
)

//logout route
app.get("/logout", (req, res) => {
    req.logout(() => {
        res.redirect("/");
    });
});

// testing api routes
app.use("/api/users", userRoutes);
//app.use("/api/workouts", workoutRoutes);
//app.use("/api/journals", journalRoutes);


// test route
app.get("/test", (req, res) => {
    res.send("Hello from the backend! Version 3");
});

app.get("/success", (req, res) => {
    res.send("Successful sign up or sign in, see console log on VSC for user object. Note the field 'isNewRecord' determines whether this user was just made in the db or pre-existing");
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
