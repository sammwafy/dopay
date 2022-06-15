import * as jose from "jose";

export default async function verifyToken(req, res) {
	const authorization = req.headers.get("authorization");

	if (authorization) {
		const token = authorization.split(" ")[1];
		try {
			const { payload: jwtData } = await jose.jwtVerify(
				token,
				new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET)
			);
			console.log(jwtData);
		} catch (error) {
			//res.status(401).send(error);
			console.log(error);
		}
	} else {
		//res.status(401).send('you are not logged in!');
		console.log("error");
	}
}
