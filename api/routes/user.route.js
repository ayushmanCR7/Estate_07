import express from "express"
import { deleteUsers, getSingleUsers, getUsers, updateUsers } from "../controllers/userroute.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/",getUsers)
router.get("/:id",verifyToken,getSingleUsers);
router.put("/:id",verifyToken,updateUsers)
router.delete("/:id",verifyToken,deleteUsers);

export default router