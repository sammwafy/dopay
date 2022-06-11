import { Schema, model } from "mongoose";

const UserSchema = new Schema(
   {
      userId: { type: String, required: true },
      name: { type: String, required: true },
      account: { type: String, required: true },
      payment: { type: String, required: true },
      email: { type: String, required: true },
      status: { type: String, default: 'pending' }
   },
   { timestamps: true }
);
const UserModel = model("user", UserSchema);

export default UserModel;