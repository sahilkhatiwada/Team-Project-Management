import { Router } from "express";
import { getCurrentUserController } from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.get("/loggedInUser", getCurrentUserController);

export default userRoutes;
