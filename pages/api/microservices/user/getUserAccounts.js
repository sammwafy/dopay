import { Accounts } from "../../../../db/models/accounts";
const { dbConnect } = require("../../../../db/middleware/mongodb");
export default async function getUserAccounts(req, res) {
	await dbConnect().then(console.log("connected"));
	try {
		const userAccounts = await Accounts.find({ userId: req.body.id }).exec();
		res.status(200).json(userAccounts);
	} catch (err) {
		res.status(500).json(err);
	}
}
