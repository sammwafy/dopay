import * as jose from "jose";

import { NextResponse, NextRequest } from "next/server.js";

export async function middleware(NextRequest) {
  if (NextRequest.nextUrl.pathname.startsWith("/user")) {
    const authorization = NextRequest.cookies.get("token");

    if (authorization) {
      const token = authorization
      try {
        const { payload: jwtData } = await jose.jwtVerify(
          token,
          new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET)
        );

        NextResponse.next();
      } catch (error) {
        return NextResponse.redirect(
          new URL(`/login?error=${error}}`, NextRequest.url)
        );
        // return new Response(JSON.stringify({ error: error.message }), {
        //   status: 401,
        // });
      }
    }
    // else {
    //   return NextResponse.redirect(
    //     new URL(`/login?error=you have to login first`, NextRequest.url)
    //   );

    //   // return new Response(
    //   //   JSON.stringify({ error: "you have to login first !" }),
    //   //   {
    //   //     status: 401,
    //   //   }
    //   // );
    // }
  }

  if (NextRequest.nextUrl.pathname.startsWith("/admin")) {
    // NextRequest.headers.forEach((value, key) => console.log("header:", key, 'value:', value));
    const authorization = NextRequest.cookies.get("token");

    if (authorization) {
      const token = authorization;

      try {
        const { payload: jwtData } = await jose.jwtVerify(
          token,
          new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET)
        );

        if (jwtData?.UserInfo?.isAdmin) {
          NextResponse.next();
        }
      } catch (error) {
        return NextResponse.redirect(
          new URL(`/login?error=${error.message}`, NextRequest.url)
        );
        // return new Response(JSON.stringify({ error: error.message }), {
        //   status: 401,
        // });
      }
    } else {
      return NextResponse.redirect(
        new URL(`/login?error=you have to login first`, NextRequest.url)
      );
      // return new Response(
      //   JSON.stringify({ error: "you have to login first !" }),
      //   {
      //     status: 401,
      //   }
      // );
    }
  }
}
