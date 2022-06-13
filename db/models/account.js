import mongoose from "mongoose";
const Schema = mongoose.Schema;

const account = new Schema({
	userId: {
		type: mongoose.ObjectId,
		required: true,
	},
	balance: {
		type: Numbeer,
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
		default: "active",
	},
});

mongoose.models = {};

export const Account = mongoose.model("Account", account);
