import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";
import "dotenv/config";
import userRouter from "./Routes/userRouter.js";


// app config
const app = express();
const port = 5000


// middleware
app.use(bodyParser.json());
app.use(express.static('uploads')); 
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors())

// DB connection
connectDB();


//api end point
app.use("/api/user/",userRouter)

app.get("/", (req,res)=> {
    res.send("api initiating")
})

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})