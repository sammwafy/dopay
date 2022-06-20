import mongoose from "mongoose";
const Schema = mongoose.Schema;

const accounts = new Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    balance: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default:"pending",
      required: true,
    },
    type: {
      type: String,
    },
   tranactionsId: [{ type: Schema.Types.ObjectId, ref: "Transactions" }],
  },
  { timestamps: true }
);

mongoose.models = {};

export const Accounts = mongoose.model("Accounts", accounts);
