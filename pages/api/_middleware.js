import * as jose from "jose";

export default async function verifyToken(req, res) {
  const authorization = req.headers.get("authorization");
  const apiend = req.headers.get("apiend");
  console.log( "headers",apiend)
  if (apiend === "login" || apiend === "register") {
    console.log("login or register");
  } else {
    // if (authorization) {
    //   const token = authorization.split(" ")[1];
    //   const { payload: jwtData } = await jose.jwtVerify(
    //     token,
    //     new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET)
    //   );

    //   // const token = authHeader;
    //   // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    //   // 	if (err) {
    //   // 		return res.status(403).json("token is not valid!");
    //   // 	}
    //   // });
    // } else {
    //   console.log("error");
    // }
     console.log("no apiend")
  }
}
