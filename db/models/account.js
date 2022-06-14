import mongoose from "mongoose";
const Schema = mongoose.Schema;

const account = new Schema({
	userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
	balance: {
		type: Number,
		required: true,
		unique: true,
	},
	type: {
		type: String,
		default: "personal",
	},
	status: {
		type: String,
		required: true,
		default: "pending",
	},
});

mongoose.models = {};

export const Account = mongoose.model("Account", account);
