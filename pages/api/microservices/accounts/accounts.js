const { Account } = require("../../../../db/models/account");
const { dbConnect } = require("../../../../db/middleware/mongodb");

export default async function accounts(req, res) {
	await dbConnect().then(console.log("connected"));

	if (req.method === "GET") {
		try {
			const accounts = await Account.find().exec();
			res.json(accounts);
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
			let doc = await Account.findOneAndUpdate(filter, update, {
				new: true,
			});
			res.json(doc);
		} catch (error) {
			console.log(error);
		}
	} else {
		res.status(422).send("req_method_not_supported");
	}
}
