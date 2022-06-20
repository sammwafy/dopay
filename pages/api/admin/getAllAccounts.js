import { Accounts } from "../../../db/models/accounts";
const { dbConnect } = require("../../../db/middleware/mongodb");
export default async function getAllAccounts(req, res) {
  await dbConnect().then(console.log("connected"));
  try {
    let accounts;
    accounts = await Accounts.find();
    res.status(200).json(accounts);
  } catch (err) {
    res.status(500).json(err);
  }
}
