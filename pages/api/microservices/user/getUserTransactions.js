import { Transactions } from "../../../db/models/transactions";
import { Accounts } from "../../../db/models/accounts";
const { dbConnect } = require("../../../db/middleware/mongodb");
export default async function getUserTransactions(req, res) {
  await dbConnect().then(console.log("connected"));

  try {
    const userAccounts = await Accounts.find({userId: { $eq: req.body.id }})
    const transactions = await Transactions.find({fromAccountId: { $eq: userAccounts._id }})
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json(err);
  }
}
//// NOT FINISHED YET