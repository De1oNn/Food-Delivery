import { Router } from 'express'
import { createFoodCategory } from '../controllers/food-category/create-food-catergory.js'
import { createFood } from '../controllers/food-controller/create-food.js'
import { getFood } from '../controllers/food-controller/get-food.js'
import { createOrder } from '../controllers/orders/create-order.js'
import { getOrder } from '../controllers/orders/get-order.js'
export const foodRouter = Router()

foodRouter.post("/category", createFoodCategory)
foodRouter.post("/", createFood)
foodRouter.get("/", getFood)
foodRouter.post("/order", createOrder)
foodRouter.get("/order/:id", getOrder)