import mongoose from "mongoose";
const Schema = mongoose.Schema;

const user = new Schema({
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
  status: {
    type: String,
    required: true,
    default: "active",
  },
  country: {
    type: String,
  },
  city: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  notificationSettings: {
    emailNotify: { type: Boolean, default: true },
    webNotify: { type: Boolean, default: true },
  },
});

mongoose.models = {};

export const User = mongoose.model("User", user);


