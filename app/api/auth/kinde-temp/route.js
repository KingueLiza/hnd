import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

// This handles all Kinde auth routes (login, register, callback)
export const GET = handleAuth();
export const POST = handleAuth();

// Make sure this route handles all Kinde auth paths
export const dynamic = "force-dynamic"; 