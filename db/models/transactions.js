import mongoose from "mongoose";
const Schema = mongoose.Schema;

const transactions = new Schema({
  type: {
    type: string,
    required: true,
  },
  fromAccountId: {
    type: String,
    required: true,
  },
  toAccountId: {
    type: String,
    required: true,
  },
  dateIssued: {
    type: Date,
  }
});

mongoose.models = {};

export const Transactions = mongoose.model("Transactions", transactions);


