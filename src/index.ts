import express, {Response,Request} from 'express'
import router from './router.js'
import dotenv from 'dotenv'
import mongoose, { mongo } from 'mongoose'

//enviroment variables
dotenv.config()

//App
const app = express()

//Server
app.listen(3030, ()=> {
    console.log("listening on port 3030")
})

//Database
const connection = process.env.DB_CONNECTION as string
mongoose.connect(connection, ()=> {
    console.log("connected to the database")
})

app.get("/prove", (req:Request, res:Response)=>{
    res.send("getting started")
})

app.use("/api", router)