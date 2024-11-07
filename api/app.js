import express from "express";
import authrotes from "./routes/auth.rotes.js"
import postroutes from "./routes/post.rotes.js"
import testroutes from "./routes/testroute.js"
import userroutes from "./routes/user.route.js"
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import cors from "cors"
const app = express()
const corsOptions = {
    origin: 'http://localhost:5173', // Allow your frontend's origin
    methods: 'GET,POST,PUT,DELETE',
    credentials: true, // if you need to include credentials like cookies or authorization headers
  };
  dotenv.config();  // Loads the .env file

app.use(cors(corsOptions));
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authrotes)
app.use("/api/post",postroutes)
app.use("/api/test",testroutes)
app.use("/api/user",userroutes)

app.listen(3000,()=>{
    console.log("first")
})