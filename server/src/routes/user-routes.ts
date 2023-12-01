import { Router } from "express";
import { getAllUsers, userSignUp, userSignIn } from "../controllers/user-controller";
import { validate, signupValidator, loginValidator } from "../utils/validators";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post('/signup', validate(signupValidator), userSignUp);
userRoutes.post('/signin', validate(loginValidator), userSignIn);

export default userRoutes