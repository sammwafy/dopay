import { Accounts } from "../../../db/models/accounts";
const { dbConnect } = require("../../../db/middleware/mongodb");
export default async function totalMoneyInAccounts(req, res) {
  await dbConnect().then(console.log("connected"));
  try {
    const totalBalance =  await Accounts.aggregate([
      { $match: { userID: { $eq: req.body._id } } },
      {
        $group: {
          _id: "total balance of all user accounts",
          total: { $sum: "$balance" }, //return total balance of all user account
        },
      },
    ]);
    res.status(200).json(totalBalance);
  } catch (err) {
    res.status(500).json(err);
  }
}
