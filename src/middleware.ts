import { NextRequest } from "next/server";
import { verifyAuth } from "./lib/auth";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const verifiedToken = token && (await verifyAuth(token));

  if (req.nextUrl.pathname.startsWith("/") && verifiedToken) {
    return;
  }
}

export const config = {
  matcher: [],
};
