import express, { json } from "express"
import cors from "cors";
import dotenv from "dotenv";
import authent from "./routes/authRouter.js";
import { connectDb } from "./lib/db.js";
import cookieParser from "cookie-parser"
import publi from "./routes/publRouter.js";
import chat from "./routes/chatAi.js"
dotenv.config()
const app = express();
const Port = process.env.Port;
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use("/auth" , authent)
app.use("/" , publi);
app.use("/ai-chat" , chat)
app.listen(5000 ,()=>{
    connectDb()
console.log("server connected on http://localhost:"+Port)
})