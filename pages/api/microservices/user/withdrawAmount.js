const { dbConnect } = require("../../../../db/middleware/mongodb");
import { Accounts } from "../../../../db/models/accounts.js";
import { Transactions } from "../../../../db/models/transactions.js";

export default async function withdrawAmount(req, res) {
  await dbConnect().then(console.log("connected"));
  const token = req.headers["authorization"];
  try {
    const value = Number(req.body.value);
    const parsedToken = JSON.parse(atob(token.split('.')[1]));
    const userid = parsedToken.UserInfo.id
    
    const withdraw = await Accounts.findOneAndUpdate(
      {
        _id: req.body.id,
      },
      [
        {
          $set: {
            balance: {
              $switch: {
                branches: [
                  {
                    case: {
                      $and: [
                        { $eq: ["$status", "verified"] },
                        { $eq: ["$userId", { $toObjectId: userid }] },
                        { $gte: ["$balance", value] },
                      ],
                    },
                    then: {
                      $subtract: ["$balance", value],
                    },
                  },
                ],
              },
            },
          },
        },
      ]
    );
    if (withdraw) {
      const makeTransaction = await Transactions.create({
        type: "withdraw",
        fromAccountId: userid,
        userId :userid,
        amount: value,
        dateIssued: req.body.date,
      });
    }
    res.status(200).end(JSON.stringify({ success: "withdraw is successfull" }));
  } catch (err) {
    if (err.code == 40066) {
      return res.status(500).end(
        JSON.stringify({
          error: "the current balance is lower than the withdraw amount",
        })
      );
    }
    res.status(500).end(JSON.stringify(err));
    console.log(err);
  }
}
