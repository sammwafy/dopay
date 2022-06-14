const { User } = require("../../../../db/models/user");
const { dbConnect } = require("../../../../db/middleware/mongodb");

export default async function users(req, res) {
	await dbConnect().then(console.log("connected"));

	if (req.method === "GET") {
		try {
			const users = await User.find().exec();
			res.json(users);
		} catch (err) {
			console.log(err);
		}
	} else if (req.method === "PUT") {
		const { email, status } = req.body;
		const filter = { email: email };
		const update = { status: status };
		try {
			// `doc` is the document _after_ `update` was applied because of
			// `new: true`
			let doc = await User.findOneAndUpdate(filter, update, {
				new: true,
			});
			console.log(doc);
			res.json(doc);
		} catch (error) {
			console.log(error);
		}
	} else {
		res.status(422).send("req_method_not_supported");
	}
}
