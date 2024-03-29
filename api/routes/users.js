import express  from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkuser/:id", verifyUser, (req,res, next) => {
    res.send("hello");
});

// UPDATE
router.put("/:id", verifyUser , updateUser);

// DELETE
router.delete("/:id", verifyUser,  deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL
router.get("/", verifyAdmin, getUsers); 

export default router;