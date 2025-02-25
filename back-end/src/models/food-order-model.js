import { Schema, model } from "mongoose"

const foodOrderSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  user: { type: Schema.Types.ObjectId },
  totalPrice: { type: Number, required: true },
  foodOrderItems: { }, 
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    default: "USER"
  },
},{
    timestamps: true
});

export const foodOrderModel = model("foodOrder", foodOrderSchema)