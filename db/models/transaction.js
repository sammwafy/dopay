import mongoose from "mongoose";
const Schema = mongoose.Schema;

const transaction = new Schema({
	userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
	accountIdFrom: {
		type: Schema.Types.ObjectId,
		ref: "Account",
		required: true,
	},
	accountIdTo: { type: Schema.Types.ObjectId, ref: "Account", required: true },
	status: {
		type: String,
		required: true,
		default: "pending",
	},
	type: { type: String, default: "personal" },
});

mongoose.models = {};

export const Transaction = mongoose.model("Transaction", transaction);
