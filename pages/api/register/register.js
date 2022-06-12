const { User } = require("../../../db/models/user");
const { dbConnect } = require("../../../db/middleware/mongodb");

const bcrypt = require("bcrypt");
//import * as jose from "jose";
export default async function login(req, res) {
  await dbConnect().then(console.log("connected"));
  const { fullname, email, userPassword } = req.body;
  const saltRounds = 10;
  const password = await bcrypt.hash(userPassword, saltRounds);
  if (req.method === "POST") {
    const newUser = new User({
      fullname,
      email,
      password,
    });
    try {
      const savedUser = await newUser.save();
      res.status(200).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
