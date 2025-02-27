import { Router } from "express";
import { createFoodCategory } from "../controllers/food-category/create-food-catergory.js";
export const categoryRouter = Router();

categoryRouter.post("/", createFoodCategory)