import express from "express";
import { createUser } from "../controllers/user-controller/create-user.js";
import { deleteUser } from "../controllers/user-controller/delete-user.js";
import { updateUser } from "../controllers/user-controller/update-user.js";
import { getUser } from "../controllers/user-controller/get-user.js";

export const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.delete("/", deleteUser);
userRouter.put("/:id", updateUser);
userRouter.get("/:id", getUser)