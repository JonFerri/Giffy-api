import { Request, Response } from "express"
import User from "./userModel.js"
import bcrypt, { hashSync } from 'bcrypt'



const userControllers = {
    async getAllUsers (req: Request, res:Response){
        try {
            const users = await User.find()
            res.json(users)
        } catch (error) {
            console.log(error)            
        }
    },
    async saveUser (req: Request, res: Response){
        
        try {
            const user = req.body
            const salt = await bcrypt.genSalt()
            const hashedPassword = await bcrypt.hash(req.body.password,salt)
            user.password = hashedPassword
            const userToSave = new User(user)
            const userSaved = await userToSave.save();
            res.json(userSaved)
        } catch (error) {
            console.log(error)
        }

    },
    async deleteUser (req: Request, res: Response) {
        const id = req.params.id
        try {
            const deletedUser = await User.findByIdAndDelete(id)
            res.json(deletedUser)
        } catch (error) {
            console.log(error)
        }
    },
    async deleteAllUsers (req: Request, res: Response){
        
        try {
            const deletedUsers = await User.deleteMany()
            res.json(deletedUsers)
        } catch (error) {
            console.log(error)
        }
    }
}

export default userControllers