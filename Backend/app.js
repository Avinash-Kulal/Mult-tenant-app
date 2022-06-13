const express = require("express");
const app = express();
require("dotenv-defaults").config();
const login = require("./routes/login");
const cors = require("cors");
var morgan = require("morgan");
var session = require("express-session")
const passport = require('passport')

require("./passport/config.js")

app.use(cors());

app.use(session({
 secret: process.env.SESSION_SECRET,
 resave: false,
 saveUninitialized: false
}))
app.use(passport.initialize())//I guess without this req.isAuthenticated() wont' work
app.use(passport.session())

app.use(express.json());
app.use(morgan('tiny'))

app.get('/', (req, res) => {
 return res.status(200).json({ "message": 'Root endpoint' });
})

app.use('/login', checkUserNotAuthenticated, login);

app.get('/dashboard', checkUserAuthenticated, (req, res) => {
 res.json({ "message": 'done' })
})

app.use("*", (req, res) => {
 res.status(500).json({ "message": "Invalid endpoint" })
})

app.listen(process.env.PORT, () => {
 console.log(`App listen on port ${process.env.PORT}`)
})


function checkUserAuthenticated(req, res, next) {
 if (req.isAuthenticated())
  return next();
 return res.redirect('/?module=login')
}

function checkUserNotAuthenticated(req, res, next) {
 if (req.isAuthenticated())
  return res.redirect('/?module=dashboard')
 return next();
}
