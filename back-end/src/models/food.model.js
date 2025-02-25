import { Schema, model } from "mongoose"

const foodSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  foodName: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  ingredients: { type: String, required: true },
  category: { type: Schema.Types.ObjectId }
},{
    timestamps: true
});

export const foodModel = model("food", foodSchema)