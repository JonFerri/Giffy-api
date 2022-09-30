import { Router } from 'express';
import jwt from 'jsonwebtoken';
const loginRouter = Router();
loginRouter.post('/login', (req, res) => {
    //authenticate user
    console.log(process.env);
    const user = req.body.user;
    const secret = process.env.ACCES_TOKEN_SECRET;
    const token = jwt.sign(user, secret);
});
