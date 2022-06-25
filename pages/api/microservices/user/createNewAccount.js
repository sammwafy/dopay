import { Accounts } from "../../../../db/models/accounts";
const { dbConnect } = require("../../../../db/middleware/mongodb");
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const bcrypt = require("bcrypt");

export default async function createNewAccount(req, res) {
	await dbConnect().then(console.log("connected"));
	const { userId, balance, status, type } = req.body;
	if (req.method === "POST") {
		const newAccount = new Accounts({
			userId,
			balance,
			type,
		});
		try {
			const savedAccount = await newAccount.save();
			console.log(savedAccount);
			res.status(200).json(savedAccount);
			eventEmitter.on("newBank", (number) => {
				console.log(`${number} create new account`);
			});

			eventEmitter.emit("newBank", savedAccount.userId);
		} catch (err) {
			res.status(500).json(err);
		}
	}
}
