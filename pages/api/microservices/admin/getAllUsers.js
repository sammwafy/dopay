import { resolveOnChange } from "antd/lib/input/Input";
import { User } from "../../../../db/models/user";
const { dbConnect } = require("../../../../db/middleware/mongodb");
export default async function getAllUsers(req, res) {
	await dbConnect().then(console.log("connected"));

	try {
		let users;
		users = await User.find();

		res.status(200).end(JSON.stringify(users));
	} catch (err) {
		console.log("error is ", err);
		res.status(500).end(JSON.stringify(err));
	}

	// return new Promise((resolve, reject) => {
	// 	User.find()
	// 		.then((response) => {
	// 			res.statusCode = 200;
	// 			// res.setHeader("Content-Type", "application/json");
	// 			// res.setHeader("Cache-Control", "max-age=180000");
	// 			res.end(JSON.stringify(response));
	// 			// resolve();
	// 		})
	// 		.catch((error) => {
	// 			res.json(error);
	// 			res.status(405).end();
	// 			resolve();
	// 		});
	// });
}
