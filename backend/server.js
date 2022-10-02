require('dotenv').config()
const express = require('express')
const session = require("express-session");
const cors = require('cors')
const passport = require("passport");
const passportSetup = require('./passport')
const authRoute = require('./routes/auth')
const User = require('./db/database')

const app = express()

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
  
app.use(session({
    secret: "Seeeeecret.",
    resave: false,
    saveUninitialized: false
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  
  passport.use(User.createStrategy());
  
  app.use('/auth', authRoute)
  
  const port = 4000
    
   app.listen(port, () => {
      console.log(`server listening on port ${port}`)
    })