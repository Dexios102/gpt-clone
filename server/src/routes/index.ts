import { Router } from "express";
import userRoutes from "./user-routes";
import chatRoutes from "./chat-routes";

const appRouter = Router();

appRouter.use("/users", userRoutes);
appRouter.use("/chats", chatRoutes);	

export default appRouter