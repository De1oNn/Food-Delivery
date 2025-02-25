import { Schema, model } from "mongoose";

const userSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    default: "USER"
  },
  orderedFoods: [{ type: Schema.Types.ObjectId, ref: "Foods" }],
  name: { type: String }
},{
  timestamps: true
});

export const UserModel = model("Users", userSchema);
