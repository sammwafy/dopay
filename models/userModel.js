import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
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

mongoose.models = {};

export var UserModel = mongoose.model("users", UserSchema);