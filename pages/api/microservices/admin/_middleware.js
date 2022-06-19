import * as jose from "jose";
import { NextResponse } from "next/server";

export default async function verifyToken(req) {
  const authorization = req.headers.get("authorization");

  if (authorization) {
    const token = authorization.split(" ")[1];
    try {
      const { payload: jwtData } = await jose.jwtVerify(
        token,
        new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET)
      );
      console.log(jwtData);
      if (jwtData?.UserInfo?.isAdmin) {
        NextResponse.next();
      } else {
        throw new Error("you need to be admin to access this");
      }
    } catch (error) {
      console.log("from catch: ", error);

      return new Response(JSON.stringify({ error: error.message }), {
        status: 401,
      });
    }
  } else {
    return new Response(
      JSON.stringify({ error: "you have to login first !" }),
      {
        status: 401,
      }
    );
  }
}
