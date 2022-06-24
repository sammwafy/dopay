const { dbConnect } = require("../../../../db/middleware/mongodb");
import { Accounts } from "../../../../db/models/accounts.js";
import { Transactions } from "../../../../db/models/transactions.js";

export default async function transferToAccount(req, res) {
  await dbConnect().then(console.log("connected"));
  console.log(req.body);
  const token = req.headers["authorization"];
  try {
    const value = Number(req.body.value);
    const parsedToken = JSON.parse(atob(token.split('.')[1]));
    const userid = parsedToken.UserInfo.id
    const fromAccount =req.body.fromAccountId;
    const toAccount =req.body.toAccountId;

    const transfer = await Accounts.updateMany(
      {
        userId: userid,
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
                        { $eq: ["$_id", { $toObjectId: fromAccount }] },
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
          $set: {
            balance: {
              $switch: {
                branches: [
                  {
                    case: {
                      $and: [
                        { $eq: ["$status", "verified"] },
                        { $eq: ["$userId", { $toObjectId: userid }] },
                        { $eq: ["$_id", { $toObjectId: toAccount }] },
                      ],
                    },
                    then: {
                      $add: ["$balance", value],
                    },
                  },
                ],
              },
            },
          },
        },
      ]
    );
    
   
      const makeTransaction = await Transactions.create({
        type: "transfer",
        fromAccountId: userid,
        toAccountId: req.body.toAccountId,
        amount: value,
        dateIssued: req.body.date,
      });
      console.log('paid');
    console.log(transfer);
    res.status(200).end(JSON.stringify({ success: "payment is successfull" }));
  } catch (err) {
    // if (err.code == 40066) {
    //   return res.status(500).end(
    //     JSON.stringify({
    //       error: "the current balance is lower than the payment amount",
    //     })
    //   );
    // }
    res.status(500).end(JSON.stringify(err));
    console.log(err);
  }
}
