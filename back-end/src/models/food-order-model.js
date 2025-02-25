import { Schema, model } from "mongoose"

const foodOrderSchema = new Schema(
  {
    id: { type: Schema.Types.ObjectId },
    user: { type: Schema.Types.ObjectId },
    totalPrice: { type: Number, required: true },
    foodOrderItems: {
      food: { type: Schema.Types.ObjectId },
      quantity: { type: Number, required: true }
    },
    role: {
      type: String,
      enum: ["PENDING", "CANCELED", "DELIVERED"],
      default: "PENDING",
    },
  },
  {
    timestamps: true,
  }
);

export const foodOrderModel = model("foodOrder", foodOrderSchema)