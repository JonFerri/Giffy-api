import express, {Response,Request} from 'express'
import userControllers from './userControllers.js'

const userRouter = express.Router()

userRouter.post("/saveUser", userControllers.saveUser)
userRouter.delete("/deleteUser/:id", userControllers.deleteUser)
userRouter.get("/getAllUsers", userControllers.getAllUsers)
userRouter.delete("/deleteAll", userControllers.deleteAllUsers)

export default userRouter
