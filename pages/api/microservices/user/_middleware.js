import * as jose from "jose";

export default async function verifyToken(req, res) {
  const authorization = req.headers.get("authorization");
  const isLogin = req.headers.get("apiend");

  if (authorization) {
    const token = authorization.split(" ")[1];
    try {
      const { payload: jwtData } = await jose.jwtVerify(
        token,
        new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET)
      );
    } catch (error) {
      res.status(401).send(error);
    }
  } else {
    res.status(401).send("you are not logged in!");
  }
}
