import express from 'express';
import userRouter from './users/userRouter.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import url from 'url';
const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
console.log(path.resolve(dirname, "index.html"));
console.log({ dirname, filename });
//enviroment variables
dotenv.config();
//App
const app = express();
//Server
app.listen(3030, () => {
    console.log("listening on port 3030");
});
//Database
const connection = process.env.DB_CONNECTION;
mongoose.connect(connection, () => {
    console.log("connected to the database");
});
//middleware
app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.get("/", (req, res) => {
    res.sendFile(path.resolve(dirname, "index.html"));
});
app.use("/api/users", userRouter);
