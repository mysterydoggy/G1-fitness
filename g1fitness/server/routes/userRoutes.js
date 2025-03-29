const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../config/models/User");
const authMiddleware = require("../config/authMiddleware");  

const router = express.Router();

/* signup for user (can test with postman -> http://localhost:8080/api/users/signup)
set to POST, and in the body set to raw JSON, use this body:
{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
}
    should return a success message and the user object with hashed password
*/
router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        res.json({ message: "User registered successfully", user: newUser });
    } catch (err) {
        res.status(400).json({ message: "Error signing up", error: err.message });
    }
});

// login for user (can test with postman -> http://localhost:8080/api/users/login)
// set to POST, and in the body set to raw JSON, 
//body should look like this:
/*
{
    "email": "test@example.com",
    "password": "password123"
}
And it'll return a success message and token
*/
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Login successful", token });
    } catch (err) {
        res.status(400).json({ message: "Error logging in", error: err.message });
    }
});

// protected route (requires JWT) (work in progress, USE POSTMAN FOR TESTING)
router.get("/protected", authMiddleware, (req, res) => {
    res.json({ message: "You have access to this protected route!" });
});

module.exports = router;
