import express, {Response,Request} from 'express'

const router = express.Router()

router.get("/tri", (req: Request, res: Response)=> {
    res.send("primordial")
})

export default router
