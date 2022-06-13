import mongoose from "mongoose";
const Schema = mongoose.Schema;

const transaction = new Schema({
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
	notification: { type: [String] },
});

mongoose.models = {};

export const Transaction = mongoose.model("Transaction", transaction);
