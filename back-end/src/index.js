import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./router/user.routes.js";
import { foodRouter } from "./router/food.router.js";


const app = express();
dotenv.config();
const PORT = 3000;
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Connected to MongoDB");
});

app.use("/user", userRouter);
app.use("/food", foodRouter)

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
