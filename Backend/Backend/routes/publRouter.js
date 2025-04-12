import express from "express"
import { commentsPost, createPost, deletePost, getPost } from "../controllers/publ.controller.js";
import { authMdl } from "../middleware/authMdl.js";
const router = express.Router();
router.get("" ,authMdl, getPost)
router.post("/create" ,authMdl, createPost),
router.delete("/:id" ,authMdl, deletePost)
router.post("/comment/:id" ,authMdl, commentsPost)
export default router
