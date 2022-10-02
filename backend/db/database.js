const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate")

//connecting to mongodb 
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//creating a user schema 
const userSchema = new mongoose.Schema ({
    username: String,
    name: String,
    googleId: String,
    secret: String
  });

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

 const User = new mongoose.model("User", userSchema);

 module.exports = User