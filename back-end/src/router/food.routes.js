import { Router } from 'express'
import { createFood } from '../controllers/food-controller/create-food.js'
import { getFood } from '../controllers/food-controller/get-food.js'
export const foodRouter = Router()

foodRouter.post("/", createFood)
foodRouter.get("/", getFood)