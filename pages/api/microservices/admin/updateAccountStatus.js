import { Accounts } from "../../../../db/models/user";
const { dbConnect } = require("../../../../db/middleware/mongodb");
export default async function updateUserStatus(req, res) {
	await dbConnect().then(console.log("connected"));
	try {
		console.log(req.body);
		const updatedAccount = await Accounts.findOneAndUpdate(
			{ _id: req.body._id },
			{
				$set: { status: req.body.status },
			},
			{ new: true }
		);
		res.status(200).json(updatedAccount);
	} catch (err) {
		res.status(500).json(err);
	}
}
