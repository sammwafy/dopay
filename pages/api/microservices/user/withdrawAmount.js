const { dbConnect } = require("../../../../db/middleware/mongodb");
import { TrophyTwoTone } from "@ant-design/icons";
import { Accounts } from "../../../../db/models/accounts.js";
import { Transactions } from "../../../../db/models/transactions.js";
import CreateTransaction from "../../utils/createTransaction.js";

export default async function withdrawAmount(req, res) {
  await dbConnect().then(console.log("connected"));

  try {
    const value = Number(req.body.value);
    const withdraw = await Accounts.findOneAndUpdate(
      // {
      //   _id: req.body.id,
      // },
      // [
      //   {
      //     $set: {
      //       balance: {
      //         $cond: {
      //           if: {
      //             $gte: ["balance", value],
      //           },
      //           then: {
      //             $subtract: ["$balance", 50],
      //           },
      //           else: "$$REMOVE",
      //         },
      //       },
      //     },
      //   },
      // ]

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
                      $gte: ["$balance", value],
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
        type: 'withdraw',
        fromAccountId: withdraw.userId,
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
