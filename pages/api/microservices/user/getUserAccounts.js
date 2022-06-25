import { Accounts } from "../../../../db/models/accounts";
const { dbConnect } = require("../../../../db/middleware/mongodb");
export default async function getUserAccounts(req, res) {
	await dbConnect().then(console.log("connected"));
  const token = req.headers["authorization"];
	try {
    const parsedToken = JSON.parse(atob(token.split('.')[1]));
    const userid = parsedToken.UserInfo.id

		const userAccounts = await Accounts.find({ userId: userid }, {userId:0})
			.exec();

    res.status(200).end(JSON.stringify(userAccounts));

	} catch (err) {

		res.status(500).json(err);
	}
}
