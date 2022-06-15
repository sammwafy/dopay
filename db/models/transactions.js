import mongoose from "mongoose";
const Schema = mongoose.Schema;

const transactions = new Schema(
  {
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
    },
    ammount: {
      type: Number,
      required: true,
    },
    dateIssued: {
      type: Date,
    },
  },
  { timestamps: true }
);

mongoose.models = {};

export const Transactions = mongoose.model("Transactions", transactions);
