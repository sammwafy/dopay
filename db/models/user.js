import mongoose from "mongoose";
const Schema = mongoose.Schema;

const user = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      required: true,
      default: "pending",
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },
    phoneNumber: {
      type: Number,
      required:true
    },
    notificationSettings: {
      emailNotify: { type: Boolean, default: true },
      webNotify: { type: Boolean, default: true },
      allowNotification: {type: Boolean, default: true}
    },
    notification: { type: [String] },
    // accounts: [{ type: Schema.Types.ObjectId, ref: "Account" }],
  },
  { timestamps: true }
);

mongoose.models = {};

export const User = mongoose.model("User", user);
