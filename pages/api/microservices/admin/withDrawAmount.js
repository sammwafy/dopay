import { Transactions } from "../../../db/models/transactions";
const { dbConnect } = require("../../../db/middleware/mongodb");
export default async function withDrawAmount(req, res) {
  await dbConnect().then(console.log("connected"));
  const date = new Date();
  const lastMonth = new Date(
    date.getFullYear(),
    date.getMonth() - 1,
    date.getDate()
  );
  try {
    const withDraw =  await Transactions.aggregate([
      { $match: { type: { $eq: "withdraw" } , createdAt: { $gte: lastMonth } } },
      {
        $group: {
          _id: "total number of withdraws last month",
          total: { $sum: "$amount" }, //return total number of withdraws
        },
      },
    ]);
    res.status(200).json(withDraw);
  } catch (err) {
    res.status(500).json(err);
  }
}
