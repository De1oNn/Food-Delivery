import { Schema, model } from "mongoose"

const foodOrderSchema = new Schema(
  {
    user: {
       type: Schema.Types.ObjectId,
       ref: 'user',
       required: true 
    },
    totalPrice: { 
      type: Number,
      required: true 
    },
    foodOrderItems: {
      food: { type: Schema.Types.ObjectId },
      quantity: { type: Number, required: true },
      required: true
    },
    status: {
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