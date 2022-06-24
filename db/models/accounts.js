import mongoose from "mongoose";
const Schema = mongoose.Schema;

const accounts = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
      required: true,
    },
    type: {
      type: String,
    },
    name: {
      type: String,
    },
    tranactionsId: [{ type: Schema.Types.ObjectId, ref: "Transactions" }],
  },
  { timestamps: true }
);

mongoose.models = {};

export const Accounts = mongoose.model("Accounts", accounts);
