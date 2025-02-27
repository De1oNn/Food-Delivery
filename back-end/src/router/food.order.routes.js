import { Router } from "express"
import { getOrder } from "../controllers/orders/get-order.js";
import { createOrder } from "../controllers/orders/create-order.js";
export const foodOrderRouter = Router();

foodOrderRouter.post("/", createOrder)
foodOrderRouter.get("/:id", getOrder)
