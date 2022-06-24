import * as jose from "jose";
import { NextResponse, NextApiRequest } from "next/server";

export default async function verifyToken(req) {
  const authorization = req.headers.get("authorization");

  if (authorization) {
    const token = authorization.split(" ")[1];
    try {
      const { payload: jwtData } = await jose.jwtVerify(
        token,
        new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET)
      );

      NextResponse.next();
    } catch (error) {
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
