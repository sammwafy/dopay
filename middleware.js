import * as jose from "jose";
import { NextResponse } from "next/server.js";

export async function middleware(req,res) {
  if (req.nextUrl.pathname.startsWith("/user")) {
    const authorization = req.headers.get("authorization");
    const userID = req.headers.get("userID");

    if (authorization) {
      const token = authorization.split(" ")[1];
      try {
        const { payload: jwtData } = await jose.jwtVerify(
          token,
          new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET)
        );

        NextResponse.next();
      } catch (error) {
        res.status(401).end(JSON.stringify({ error: error.message }));
      }
    } else {
      res.status(401).end(JSON.stringify({ error: "you have to login first !" }));

    }
  }

  if (req.nextUrl.pathname.startsWith("/admin")) {
    const authorization = req.headers.get("authorization");

    if (authorization) {
      const token = authorization.split(" ")[1];
      try {
        const { payload: jwtData } = await jose.jwtVerify(
          token,
          new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET)
        );

        if (jwtData?.UserInfo?.isAdmin) {
          NextResponse.next();
        } else {
          res.status(401).end(JSON.stringify({ error: "you need to be admin to access this" }));
        }
      } catch (error) {
        res.status(401).end(JSON.stringify({ error: error.message }));
      }
    } else {
      res.status(401).end(JSON.stringify({ error: "you have to login first !" }));
    }
  }
}
