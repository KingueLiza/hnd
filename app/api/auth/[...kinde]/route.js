import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

// This handles all Kinde auth routes (login, register, callback)
export async function GET(request) {
  return handleAuth(request);
}

export async function POST(request) {
  return handleAuth(request);
}

// Remove edge runtime as it might cause issues with auth
// export const runtime = "edge"; 