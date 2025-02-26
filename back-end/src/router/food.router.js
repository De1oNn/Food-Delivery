import { Router } from 'express'
import { createFoodCategory } from '../controllers/food-category/create-food-catergory.js'
export const foodRouter = Router()

foodRouter.post("/category", createFoodCategory)