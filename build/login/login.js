import { Router } from 'express';
import jwt from 'jsonwebtoken';
const loginRouter = Router();
loginRouter.post('/login', (req, res) => {
    //authenticate user
    const user = req.body;
    const secret = process.env.ACCES_TOKEN_SECRET;
    const accesToken = jwt.sign(user, secret);
    res.send({ accesToken });
});
export default loginRouter;
