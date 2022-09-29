import express from 'express';
import router from './router.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
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
app.get("/prove", (req, res) => {
    res.send("getting started");
});
app.use("/api", router);
