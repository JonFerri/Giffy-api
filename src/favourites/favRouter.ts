import { Router } from "express";
import favControllers, {authenticateToken} from "./favControllers.js";

const favRouter = Router()

favRouter.post("/createFav", favControllers.createFav)
favRouter.get("/getFavs", authenticateToken, favControllers.getFavs)


export default favRouter