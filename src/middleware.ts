import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    console.log(req)
} 

export const config = {
    matcher: [],
};