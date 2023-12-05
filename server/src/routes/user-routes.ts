import { Router } from "express";
import { getAllUsers, userSignUp, userSignIn, verifyUser } from "../controllers/user-controller";
import { validate, signupValidator, loginValidator } from "../utils/validators";
import { verifyToken } from "../utils/token";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post('/signup', validate(signupValidator), userSignUp);
userRoutes.post('/signin', validate(loginValidator), userSignIn);
userRoutes.get('/auth-status', verifyToken, verifyUser);

export default userRoutes