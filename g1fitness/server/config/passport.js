require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("./models/User"); // import user model

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,  //update when changed to production!!!!
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                // check if the user already exists or create a new one
                const [user, created] = await User.findOrCreate({ //'created' is a return value of this inherent function
                    where: { googleId: profile.id }, // look for user by google id
                    defaults: {
                        email: profile.emails[0].value, 
                        firstName: profile.name.givenName, 
                    },
                });

                console.log("User found or created:", user);
                return done(null, user); // pass the user to next
            } catch (error) {
                console.error("Error during user creation:", error);
                return done(error, null); // handle errors
            }
        }
    )
);

// serialize user to store in session
passport.serializeUser((user, done) => {
    done(null, user.id); // store only the user's ID in session
});

// deserialize user from session
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findByPk(id); // find user by ID
        done(null, user); // attach user obj to sesion
    } catch (error) {
        done(error, null);
    }
});

module.exports = passport;
