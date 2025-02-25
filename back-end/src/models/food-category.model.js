import { Schema, model } from "mongoose"

const foodCategorySchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  categoryName: { type: String, required: true }
},{
    timestamps: true
});

export const foodCategoryModel = model("foodCategory", foodCategorySchema)