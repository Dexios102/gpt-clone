/* OpenAI Configuration */
import OpenAI from "openai";

export const openaiConfig = (): OpenAI => {
  return new OpenAI({
    apiKey: process.env.OPEN_AI_SECRET,
    organization: process.env.OPENAI_ORGANIZATION,
  });
};
