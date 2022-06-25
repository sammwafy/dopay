import { Transactions } from "../../../../db/models/transactions";
const { dbConnect } = require("../../../../db/middleware/mongodb");
export default async function transferAmount(req, res) {
  await dbConnect().then(console.log("connected"));
  const date = new Date();
  const lastMonth = new Date(
    date.getFullYear(),
    date.getMonth() - 1,
    date.getDate()
  );
  try {
    const transfers =  await Transactions.aggregate([
      { $match: { type: { $eq: "transfer" } , createdAt: { $gte: lastMonth } } },
      {
        $group: {
          _id: "total number of transfers last month",
          total: { $sum: "$amount" }, //return total number of transfers
        },
      },
    ]);
    res.status(200).json(transfers);
  } catch (err) {
    res.status(500).json(err);
  }
}
