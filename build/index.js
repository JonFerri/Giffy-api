import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import url from 'url';
import dotenv from 'dotenv';
import userRouter from './users/userRouter.js';
import loginRouter from './login/login.js';
import favRouter from './favourites/favRouter.js';
dotenv.config();
const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
//App
const app = express();
//Server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
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
app.use("/api/login", loginRouter);
app.use("/api/favs", favRouter);
