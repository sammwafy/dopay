import mongoose from "mongoose";
const Schema = mongoose.Schema;

const accounts = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  balance: {
    type: Double,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  }
});

mongoose.models = {};

export const Accounts = mongoose.model("Accounts", accounts);


