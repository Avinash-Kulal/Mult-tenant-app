const loginRoutes = require("express").Router();
const userDb = require("../database/user")
const passport = require("passport")

loginRoutes.post('/',passport.authenticate('local'),(req,res)=>{res.status(200).json({"message":"Login successful"})})

module.exports = loginRoutes