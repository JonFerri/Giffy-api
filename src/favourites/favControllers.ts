import { Request, Response, NextFunction } from 'express'
import Favourite from './favModel.js'
import jwt from 'jsonwebtoken'

const favControllers = {
    async getFavs (req: any, res: Response) {
        const user =  req.user.nickName
        const favs = await Favourite.find({userName:user})
        res.send(favs)
    },
    async createFav (req: any, res: Response) {
        try{
            const fav = {
                userName: req.user.nickName,
                giff: req.body.giff
            }
            const favToSave = new Favourite(fav)
            const favSaved = await favToSave.save();
            res.json(favSaved)
        
        } catch (error:any) {
            res.json({thisistheerror: error})
        }
    },
    async deleteFav (req: any, res: Response){
        try {
            const id = req.params.id
            const userName = req.user.nickName
            const deletedFav = await Favourite.findByIdAndDelete({_id: id})
            res.json(deletedFav)
            
        } catch (error) {
            console.log(error)
        }
        
    }
    ,
    async deleteAllFavs (req: Request, res: Response){
        
        try {
            const deletedFavs = await Favourite.deleteMany()
            res.json(deletedFavs)
        } catch (error) {
            console.log(error)
        }
    }
}

export function authenticateToken (req: any, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    const token = authHeader?.split(" ")[1]

    if (token == null) return res.sendStatus(401)

    const secret = process.env.ACCES_TOKEN_SECRET as string
     
    jwt.verify(token, secret, (error:any, user:any)=> {
        if (error) return res.status(403).json({error})
        
        req.user = user
        next()
    })
    
}

export default favControllers