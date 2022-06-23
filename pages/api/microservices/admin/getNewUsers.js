import { User } from "../../../db/models/user";
const { dbConnect } = require("../../../db/middleware/mongodb");
export default async function getNewUsers(req, res) {
	await dbConnect().then(console.log("connected"));
	const date = new Date();
	const lastMonth = new Date(
		date.getFullYear(),
		date.getMonth() - 1,
		date.getDate()
	);
	try {
		const newUsers = await User.find({ createdAt: { $gte: lastMonth } });
		// await User.aggregate([
		//   { $match: { createdAt: { $gte: lastMonth } } },
		//   {
		//     $group: {
		//       _id: "total number of new users last month",
		//       total: { $sum: 1 }, //return total number of new users last month
		//     },
		//   },
		// ]);
		res.status(200).end(JSON.stringify(newUsers));
	} catch (err) {
		res.status(500).json(err);
	}
}
