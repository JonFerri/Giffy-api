import express, {Response,Request} from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import path from 'path'
import url from 'url'
import dotenv from 'dotenv'
import userRouter from './users/userRouter.js'
import loginRouter from './login/login.js'
import favRouter from './favourites/favRouter.js'


dotenv.config()



const filename = url.fileURLToPath(import.meta.url) 
const dirname = path.dirname(filename)


//App
const app = express()

//Server

const PORT = process.env.PORT || 3030
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})

//Database
const connection = process.env.DB_CONNECTION as string
mongoose.connect(connection, ()=> {
    console.log("connected to the database")
})

//middleware
app.use(cors({
    origin:"*"
}));
app.use(express.json())

app.get("/", (req: Request, res: Response)=>{
    res.send("Wellcome to the homePage")
})
app.get("/users",(req:any,res:any)=> {
    res.send("wellcome to the users page")
})
app.use("/api/users", userRouter)
app.use("/api/login", loginRouter)
app.use("/api/favs", favRouter)