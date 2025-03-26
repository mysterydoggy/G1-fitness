const express = require("express")
const path = require("path")
//const session = require("express-session")





const app = express()
app.use(express.json())

app.use(express.static(path.join(__dirname, '../src/')))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/", "App.js"))
})

app.set("view engine", "js")

app.get("/test", (req, res) => {
    res.send("hello from backend! ver 2")
})

app.get("/", (req, res) => {
    res.render("../src/App.js")
})

app.get("/Login", (req, res) => {
    res.render("../src/login")
})














app.listen(8080)