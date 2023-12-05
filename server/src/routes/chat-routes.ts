import { Router } from "express";
import { verifyToken } from "../utils/token";
import { messageValidator, validate } from "../utils/validators";
import { generateChat } from "../controllers/chat-controller";

const chatRoutes = Router();
chatRoutes.post('/new',validate(messageValidator), verifyToken, generateChat);

export default chatRoutes;