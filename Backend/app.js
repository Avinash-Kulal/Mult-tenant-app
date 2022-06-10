const express = require("express");
const app = express();
require("dotenv-defaults").config();
const login = require("./routes/login");

app.get('/',(req,res)=>{
 return res.send('Root endpoint');
})

app.use('/login',login);


app.listen(process.env.PORT,()=>{
 console.log(`App listen on port ${process.env.PORT}`)
})