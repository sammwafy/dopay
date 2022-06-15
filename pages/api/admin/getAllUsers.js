import { User } from "../../../db/models/user";
const { dbConnect } = require("../../../db/middleware/mongodb");
export default async function getAllUsers(req, res) {
  await dbConnect().then(console.log("connected"));
  try {
    let users;
    users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
}
