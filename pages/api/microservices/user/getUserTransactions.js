import { Accounts } from "../../../db/models/accounts";
const { dbConnect } = require("../../../db/middleware/mongodb");
export default async function getUserTransactions(req, res) {
  await dbConnect().then(console.log("connected"));

  try {
    const transactions = await Accounts.find({userId:req.body.id }).populate("tranactionsId");
    res.status(200).end(JSON.stringify(transactions));
  } catch (err) {
    res.status(500).end(JSON.stringify(err));
  }
}
