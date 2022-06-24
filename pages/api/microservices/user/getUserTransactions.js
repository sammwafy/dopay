import { Transactions } from "../../../../db/models/transactions.js";
import { Accounts } from "../../../db/models/accounts";
const { dbConnect } = require("../../../db/middleware/mongodb");
export default async function getUserTransactions(req, res) {
  await dbConnect().then(console.log("connected"));
  const token = req.headers["authorization"];

  try {
    const parsedToken = JSON.parse(atob(token.split(".")[1]));
    const userid = parsedToken.UserInfo.id;
    const transactions = await Transactions.find({ userId: userid });
    res.status(200).end(JSON.stringify(transactions));
  } catch (err) {
    res.status(500).end(JSON.stringify(err));
  }
}
