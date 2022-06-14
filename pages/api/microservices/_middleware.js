import * as jose from "jose";

export default async function verifyToken(req, res) {
	const authorization = req.headers.get("authorization");
	const isLogin = req.headers.get("apiend");
	if (authorization) {
		console.log("here");
		const token = authorization.split(" ")[1];
		const { payload: jwtData } = await jose.jwtVerify(
			token,
			new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET)
		);

		// const token = authHeader;
		// jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		// 	if (err) {
		// 		return res.status(403).json("token is not valid!");
		// 	}
		// });
	} else if (isLogin === "login") {
		return;
	} else {
		res.status(401).send("not authorized");
	}
}
