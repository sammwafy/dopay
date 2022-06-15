import { User } from "../../../db/models/user";
const { dbConnect } = require("../../../db/middleware/mongodb");
export default async function editUserProfile(req, res) {
  await dbConnect().then(console.log("connected"));
  try {
    const updatedUser = await User.findOneAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
}