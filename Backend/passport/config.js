const passport = require("passport");
const LocalStrategy = require("passport-local")
const userDb = require("../database/user")

passport.use(new LocalStrategy(function (username, password, cb) {
  var found = false;
  userDb.users.map(user => {
    if (user.username == username && user.password == password)
      found = true;
  })
  if (found) {
    return cb(null, username)
  }
  return cb(null, false, { "message": "User not found" })
}))

passport.serializeUser(function (user, cb) {
  return cb(null, user);
})

passport.deserializeUser(function (user, cb) {
  return cb(null, user);
})