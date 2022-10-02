import Favourite from './favModel.js';
import jwt from 'jsonwebtoken';
// interface UserRequest extends Request {
//     user: any
// }
const favControllers = {
    async getFavs(req, res) {
        const userName = req.user.nickName;
        const favs = await Favourite.find({ user: userName });
        res.send(favs);
    },
    async createFav(req, res) {
        try {
            const fav = req.body;
            const favToSave = new Favourite(fav);
            const favSaved = await favToSave.save();
            res.json(favSaved);
        }
        catch (error) {
            console.log(error);
        }
    }
};
export function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(" ")[1];
    if (token == null)
        return res.sendStatus(401);
    const secret = process.env.ACCES_TOKEN_SECRET;
    jwt.verify(token, secret, (err, user) => {
        if (err)
            return res.sendStatus(403);
        req.user = user;
        next();
    });
}
export default favControllers;
