const { dbConnect } = require("../../../db/middleware/mongodb");
import { Transactions } from "../../../db/models/transactions";

export default async function createTransaction(req, res) {
  await dbConnect().then(console.log("connected"));
  try {
    const newTransaction = await Transactions.insertOne({
      fromAccountId: req.body.from,
      toAccountId: req.body.to,
      amount: req.body.amount,
      dateIssued: req.body.date,
    });
    res.status(200).end(JSON.stringify(newTransaction));
  } catch (err) {
    res.status(500).end(JSON.stringify(err));
  }
}
