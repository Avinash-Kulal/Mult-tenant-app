const express = require("express");
const app = express();
require("dotenv-defaults").config();
const login = require("./routes/login");
const cors = require("cors");
var morgan = require("morgan");
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'))

app.get('/',(req,res)=>{
 return res.status(200).json({"message":'Root endpoint'});
})

app.use('/login',login);


app.use("*",(req,res)=>{
 res.status(500).json({  "message":"Invalid endpoint" })
})

app.listen(process.env.PORT,()=>{
 console.log(`App listen on port ${process.env.PORT}`)
})