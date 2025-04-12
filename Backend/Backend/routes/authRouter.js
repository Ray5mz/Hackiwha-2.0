import express from "express";
import { login, logout, signUp,updateProfile } from "../controllers/auth.controller.js";
import { authMdl } from "../middleware/authMdl.js";
const router = express.Router();
router.post("/signUp" , signUp)
router.post("/login" , login)
router.post("/logout" , logout);
router.put("/update-profile" ,authMdl, updateProfile)



export default router