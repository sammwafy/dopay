import { Accounts } from "../../../../db/models/accounts";
const { dbConnect } = require("../../../../db/middleware/mongodb");
export default async function updateUserStatus(req, res) {
	await dbConnect().then(console.log("connected"));
	try {
		console.log(req.body._id, req.body.status);

		const updatedAccount = await Accounts.findByIdAndUpdate(
			req.body._id,
			{
				$set: { status: req.body.status },
			},
			{ new: true }
		);
		console.log("updatedAccount", updatedAccount);
		res.status(200).json(updatedAccount);
	} catch (err) {
		res.status(500).json(err);
		console.log(err);
	}
}
