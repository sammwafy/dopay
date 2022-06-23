const { dbConnect } = require("../../../../db/middleware/mongodb");
import { TrophyTwoTone } from "@ant-design/icons";
import { Accounts } from "../../../../db/models/accounts.js";
import { Transactions } from "../../../../db/models/transactions.js";

export default async function rechargeAmount(req, res) {
  await dbConnect().then(console.log("connected"));
  console.log(req.body);
  try {
    const value = Number(req.body.value);
    const userid = req.headers["userid"];

    const recharge = await Accounts.findOneAndUpdate(
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
                      $and: [
                        { $eq: ["$status", "verified"] },
                        { $eq: ["$userId", {$toObjectId: userid}] },
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
    console.log(recharge);
    if (recharge) {
      await Transactions.create({
        type: "recharge",
        fromAccountId: "NA",
        toAccountId: recharge._id,
        amount: value,
        dateIssued: req.body.date,
      });
    }
    res.status(200).end(JSON.stringify({ success: "recharge is successfull" }));
  } catch (err) {
    if (err.code == 40066) {
      return res.status(500).end(
        JSON.stringify({
          error: "recharge cannot be performed !",
        })
      );
    }
    res.status(500).end(JSON.stringify(err));
    console.log(err);
  }
}
