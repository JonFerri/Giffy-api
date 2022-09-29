import { Request, Response } from "express"
import User from "./userModel.js"

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
        const user = req.body
        const userToSave = new User(user)
        try {
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
    }
}

export default userControllers