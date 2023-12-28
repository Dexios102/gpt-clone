import { Router } from "express";
import { verifyToken } from "../utils/token";
import { messageValidator, validate } from "../utils/validators";
import {
  generateChatCompletion,
  sendChatsToUser,
  deleteChats,
} from "../controllers/chat-controller";

const chatRoutes = Router();
chatRoutes.post(
  "/generate",
  /* validate(messageValidator),
  verifyToken, */
  generateChatCompletion
);
chatRoutes.get("/all-chats", verifyToken, sendChatsToUser);
chatRoutes.delete("/delete", verifyToken, deleteChats);

export default chatRoutes;
