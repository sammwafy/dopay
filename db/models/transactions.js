import mongoose from "mongoose";
const Schema = mongoose.Schema;

const transactions = new Schema(
	{
		type: {
			type: String,
			required: true,
		},
		fromAccountId: {
			type: Schema.Types.ObjectId,
			ref: "Accounts",
			required: true,
		},
		toAccountId: {
			type: Schema.Types.ObjectId,
			ref: "Accounts",
			required: true,
		},
		amount: {
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
