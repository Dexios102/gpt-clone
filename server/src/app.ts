import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import appRouter from "./routes";

const app = express();

/* CORS Option */
var corsOptions = {
    origin: true,
    credentials: true,
    optionSuccessStatus: 200
}
/* Middlewares */
app.use(express.json())
   .use(urlencoded({ extended: true }))
   .use(cors(corsOptions))
   .use(cookieParser(process.env.COOKIE_SECRET))
   .use(helmet())
   .use(morgan("dev"))
   .use("/api/v1", appRouter);


export default app;