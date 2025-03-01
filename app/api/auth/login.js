import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
console.log("login route accessed")
export const GET = handleAuth();

export const POST = handleAuth();

export const PATCH = handleAuth();

