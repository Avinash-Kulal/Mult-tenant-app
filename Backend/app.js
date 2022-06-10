const express = require("express");
const app = express();
require("dotenv-defaults").config();
const login = require("./routes/login");

app.use(express.json());

app.get('/',(req,res)=>{
 return res.send('Root endpoint');
})

app.use('/login',login);


app.use("*",(req,res)=>{
 res.status(500).json({  "message":"Invalid endpoint" })
})

app.listen(process.env.PORT,()=>{
 console.log(`App listen on port ${process.env.PORT}`)
})