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





















    
    // mongoose.connect('mongodb+srv://csd_31:kittucsd_31@nodeexpressprojects.pg3vubx.mongodb.net/google-auth?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
    
    // // mongoose.set("useCreateIndex", true);
    
    // const userSchema = new mongoose.Schema ({
      //     username: String,
    //     name: String,
    //     googleId: String,
    //     secret: String
    //   });
    
    // userSchema.plugin(passportLocalMongoose);
    // userSchema.plugin(findOrCreate);
    
    // const User = new mongoose.model("User", userSchema);
    
    // app.get("/auth/login/success", (req, res) => {
      //     res.status(200).json({
        //       success: true,
        //       message: "successfull",
        //       user: req.user,
        //       //   cookies: req.cookies
        //     });
        // })
        
        // app.get("/auth/login/failed", (req, res) => {
          //   res.status(401).json({
            //     success: false,
            //     message: "failure",
            //   });
            // });
            
            // app.get("/auth/logout", (req, res) => {
              //   req.logout();
              //   res.redirect("http://localhost:3000/");
              // });
              
              // app.get("/auth/google",
              //   passport.authenticate("google", { scope: ["profile"] })
              // );
              
              // app.get("/auth/google/callback",
              // passport.authenticate("google", {  failureRedirect: "auth/login/failed" }), 
              // function(req, res) {
                //     // Successful authentication, redirect secrets.
                //     res.redirect("http://localhost:3000");
                // }
                // );
                
                // passport.serializeUser(function(user, done) {
                  //     done(null, user.id);
                  //   });
                  
                  //   passport.deserializeUser(function(id, done) {
              //     User.findById(id, function(err, user) {
                //       done(err, user);
                //     });
                //   });
                
                // passport.use(new GoogleStrategy({
                  //   clientID: process.env.CLIENT_ID,
                  //   clientSecret: process.env.CLIENT_SECRET,
                  //   callbackURL:  "http://localhost:4000/auth/google/callback",
                  //   // userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
                  //   scope:["profile", "email"]
              // },
              // function(accessToken, refreshToken, profile, cb) {
                //   User.findOrCreate({ googleId: profile.id, username: profile.displayName }, function (err, user) {
                  //     return cb(err, user);
                  //   });
                  // }
                  // ));
                
                
                
  
  