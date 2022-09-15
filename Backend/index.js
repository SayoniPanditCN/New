const cookieSession = require("cookie-session");
const express = require("express")
const passport = require("passport")
const cors = require("cors")

const app = express()

app.use(cookieSession({
    name: "session",
    keys: ["Sayoni"]
}));

app.use(passport.initialize())
app.use(passport.session())
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credential : true,
}))


console.log("hi");

app.listen("5000", () =>{
    console.log("Server is running");
})