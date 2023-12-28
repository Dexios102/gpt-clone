import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { openaiConfig } from "../config/openai-config";
export const generateChatCompletion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message, maxSentencesResponse } = req.body;
  try {
    console.log("Finding user...");
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      console.log("User not found or token malfunctioned");
      return res
        .status(401)
        .json({ message: "User not registered OR Token malfunctioned" });
    }
    console.log("User found, processing chats...");
    const userChats = user.chats.map(({ role, content }) => ({
      role,
      content,
    })) as { role: string; content: string }[];
    userChats.push({ role: "user", content: message });
    user.chats.push({ role: "user", content: message });
    console.log("Generating chat completion...");
    const openAI = openaiConfig();
    const maxSentenceRule =
      "Response must contain at most " + maxSentencesResponse + " sentences";
    const chatCompletion = await openAI.chat.completions.create({
      messages: [{ role: "user", content: message + " " + maxSentenceRule }],
      model: "gpt-3.5-turbo",
    });
    let assistantMessage = chatCompletion.choices[0].message.content;
    if (assistantMessage !== null) {
      let sentences = assistantMessage.split(". ");
      if (sentences.length > maxSentencesResponse) {
        sentences = sentences.slice(0, maxSentencesResponse);
        assistantMessage = sentences.join(". ") + ".";
      }
    }
    user.chats.push({
      role: "assistant",
      content: assistantMessage,
    });
    console.log("Saving user...");
    await user.save();
    console.log("User chats saved successfully");
    return res.status(200).json({ message: "OK", chat: chatCompletion });
  } catch (error: any) {
    console.log("An error occurred:", error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const sendChatsToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //user token check
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).send("User not registered OR Token malfunctioned");
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permissions didn't match");
    }
    return res.status(200).json({ message: "OK", chats: user.chats });
  } catch (error: any) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const deleteChats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //user token check
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).send("User not registered OR Token malfunctioned");
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permissions didn't match");
    }
    //@ts-ignore
    user.chats = [];
    await user.save();
    return res.status(200).json({ message: "OK" });
  } catch (error: any) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};
