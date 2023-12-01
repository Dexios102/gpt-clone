import jwt from "jsonwebtoken";
import 'dotenv/config';

export const generateToken = (id: string, email: string, expiresIn: string ) => {
    const payload = { id, email };
    const jwtSecret: any = process.env.JWT_SECRET
    const token = jwt.sign(payload, jwtSecret, {
        expiresIn: "7d",
    })
    return token;
}