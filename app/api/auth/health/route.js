import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return NextResponse.json({
    apiPath: "/api/auth",
    redirectURL: process.env.KINDE_SITE_URL + "/api/auth/kinde_callback",
    postLoginRedirectURL: process.env.KINDE_POST_LOGIN_REDIRECT_URL,
    issuerURL: process.env.KINDE_ISSUER_URL,
    clientID: process.env.KINDE_CLIENT_ID,
    clientSecret: process.env.KINDE_CLIENT_SECRET ? "Set correctly" : "Not set",
    postLogoutRedirectURL: process.env.KINDE_POST_LOGOUT_REDIRECT_URL,
    logoutRedirectURL: process.env.KINDE_SITE_URL,
    user: user || "Not authenticated"
  });
} 