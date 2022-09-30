import { Router, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const loginRouter = Router()

loginRouter.post('/login',(req: Request, res: Response)=>{
    //authenticate user
    console.log(process.env)
    const user = req.body.user
    const secret = process.env.ACCES_TOKEN_SECRET as string
    const token = jwt.sign(user, secret)

})