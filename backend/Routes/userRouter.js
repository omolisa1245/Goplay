 import express from "express"
import { adminLogin, getUserData, loginUser, registerUser } from "../Controller/userController.js"



const userRouter = express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.post("/admin",adminLogin)
userRouter.get("/data", getUserData)


export default userRouter;
