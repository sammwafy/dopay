import { User } from "../../../../db/models/user";
const { dbConnect } = require("../../../../db/middleware/mongodb");
export default async function updateUserStatus(req, res) {
	await dbConnect().then(console.log("connected"));
	try {
		const updatedUser = await User.findOneAndUpdate(
			{ email: req.body.email },
			{
				$set: { status: req.body.status },
			},
			{ new: true }
		);
		res.status(200).json(updatedUser);
	} catch (err) {
		res.status(500).json(err);
	}
}
