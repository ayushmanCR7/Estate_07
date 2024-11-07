import express from "express"
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();
import { getAll,getSingle,deletePost,updatePost,addpost } from "../controllers/post.js";

router.get("/",getAll)

router.get("/:id",verifyToken ,getSingle)

router.post("/",verifyToken,addpost);

router.put("/:id",verifyToken,updatePost);

router.delete("/:id",verifyToken,deletePost)


export default router