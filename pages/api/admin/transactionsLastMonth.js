import { Transactions } from "../../../db/models/transactions";
const { dbConnect } = require("../../../db/middleware/mongodb");
export default async function transactionsLastMonth(req, res) {
  await dbConnect().then(console.log("connected"));
  const date = new Date();
  const lastMonth = new Date(
    date.getFullYear(),
    date.getMonth() - 1,
    date.getDate()
  );
  try {
    const transactions = await Transactions.find({createdAt: { $gte: lastMonth }})
    // await Transactions.aggregate([
    //   { $match: { createdAt: { $gte: lastMonth } } },
    //   {
    //     $group: {
    //       _id: "total number of Transactions last month",
    //       total: { $sum: 1 }, //return total number of Transactions last month
    //     },
    //   },
    // ]);
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json(err);
  }
}
