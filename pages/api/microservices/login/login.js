import { User } from "../../../../db/models/user";
const { dbConnect } = require("../../../../db/middleware/mongodb");

const bcrypt = require("bcrypt");
import * as jose from "jose";

export default async function login(req, res) {
	await dbConnect().then(console.log("connected"));

	if (req.method === "POST") {
		const { email, password } = req.body;
		if (email && password) {
			try {
				const foundUser = await User.findOne({ email: email }).exec();

				if (!foundUser) return res.status(401).send("Unauthorized"); //Unauthorized
				if (foundUser.status !== "pending") {
					const match = await bcrypt.compare(password, foundUser.password);
					if (match) {
						const accessToken = await new jose.SignJWT({
							UserInfo: {
								email: foundUser.email,
							},
						})
							.setProtectedHeader({ alg: "HS256" })
							.setIssuedAt()
							.setExpirationTime("30d")
							.sign(new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET));

						// Send authorization roles and access token to user
						res.json({ email, accessToken, id: foundUser._id });
					} else {
						res.status(401).send("Wrong Credentials!");
					}
				} else {
					res.send("Pending Approval");
				}
			} catch (err) {
				res.status(401).send(err);
			}
		} else {
			res.status(400).json({ message: "Username and password are required." });
		}
	} else {
		res.status(422).send("req_method_not_supported");
	}
}
