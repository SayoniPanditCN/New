const cookieSession = require("cookie-session");
const session = require('express-session');
const express = require("express")
const passport = require("passport")
const cors = require("cors")
const passportSetup = require("./passport")
const AuthRoute = require("./Routes/auth")

const app = express()
app.use(cors())


app.use(
    session({ name: "session", keys: ["sayoni"], secret: 'keyboard cat',maxAge: 24 * 60 * 60 * 100 })
  );

app.use("/auth", AuthRoute)



// app.use(session({ secret: 'SECRET' }));

//   app.use((req, res, next) =>{
//     session({ name: "session", keys: ["sayoni"], maxAge: 24 * 60 * 60 * 100 })
//     next()
//   })

app.use(passport.initialize())
app.use(passport.session())
app.use(
    cors({
      origin: "http://localhost:3000",
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );




console.log("hi");

app.listen("5000", () =>{
    console.log("Server is running");
})