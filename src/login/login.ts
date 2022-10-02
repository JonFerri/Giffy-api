import { Router, Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const loginRouter = Router()

loginRouter.post('/login',(req: Request, res: Response)=>{
    //authenticate user
    
    const user = req.body
    const secret = process.env.ACCES_TOKEN_SECRET as string
    const accesToken = jwt.sign(user, secret)
    res.send({accesToken})

})





export default loginRouter