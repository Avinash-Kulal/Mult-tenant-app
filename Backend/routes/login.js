const loginRoutes = require("express").Router();
const userDb = require("../database/user")

loginRoutes.post('/', (req, res) => {
 console.log('here')
 const data = req.body;
 if (!data.username || !data.password)
  return res.status(500).json({
   "message": "Username and password required"
  })
 var found = false;
 userDb.users.map(user => {
  if (user.username == data.username && user.password == data.password)
   found = true;
 })

 if (found)
  return res.status(200).json({"message": "user login successful"})
 else
  return res.status(400).json({"message": "user not found"})
})

module.exports = loginRoutes