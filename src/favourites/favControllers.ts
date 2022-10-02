import { Request, Response, NextFunction } from 'express'
import Favourite from './favModel.js'
import jwt from 'jsonwebtoken'

// interface UserRequest extends Request {
//     user: any
// }

const favControllers = {
    async getFavs (req: any, res: Response) {
        const userName =  req.user.nickName
        const favs = await Favourite.find({user:userName})
        res.send(favs)
    },
    async createFav (req: Request, res: Response) {
        try{
            const fav = req.body
            const favToSave = new Favourite(fav)
            const favSaved = await favToSave.save();
            res.json(favSaved)
        } catch (error:any) {
            console.log(error)
        }
    }
}

export function authenticateToken (req: any, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    const token = authHeader?.split(" ")[1]

    if (token == null) return res.sendStatus(401)

    const secret = process.env.ACCES_TOKEN_SECRET as string
     
    jwt.verify(token, secret, (err:any, user:any)=> {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
    
}

export default favControllers