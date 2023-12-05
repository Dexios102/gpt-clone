import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import { configureOpenAI } from "../config/openai-config";
import { ChatCompletionRequestMessage } from "openai";


/* interface ChatCompletionRequestMessage {
    role: string;
    content: string;
} */

export const generateChat = async (req: Request, res: Response, next: NextFunction) => {
    const { message } = req.body;
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(404).json({
                msg: `User ${res.locals.jwtData.id} not found`,
                status: 404
            });
        }
        const chats = user.chats.map(({ role, content }) => ({ role, content })) as ChatCompletionRequestMessage[];
        chats.push({ content: message, role: "user" });
        user.chats.push({ content: message, role: "user" });
        const config: any = configureOpenAI();
        const openai = new OpenAIApi(config);
        const chatResponse = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: chats
        });
        const generatedMessage = chatResponse.data.choices[0]?.message;
        if (!generatedMessage) {
            throw new Error("Failed to generate a response");
        }
        user.chats.push({ content: generatedMessage, role: "assistant" });
        await user.save();
        return res.status(200).json({
            msg: user.chats,
            status: 200
        });
    } catch (err: any) {
        console.error(err);
        return res.status(500).json({
            msg: "Internal Server Error",
            error: err.message,
            status: 500
        });
    }
};
