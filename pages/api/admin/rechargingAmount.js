import { Transactions } from "../../../db/models/transactions";
const { dbConnect } = require("../../../db/middleware/mongodb");
export default async function rechargingAmount(req, res) {
  await dbConnect().then(console.log("connected"));
  const date = new Date();
  const lastMonth = new Date(
    date.getFullYear(),
    date.getMonth() - 1,
    date.getDate()
  );
  try {
    const recharging =  await Transactions.aggregate([
      { $match: { type: { $eq: "recharging" } , createdAt: { $gte: lastMonth } } },
      {
        $group: {
          _id: "total number of rechargings last month",
          total: { $sum: "$amount" }, //return total number of recharging
        },
      },
    ]);
    res.status(200).json(recharging);
  } catch (err) {
    res.status(500).json(err);
  }
}
