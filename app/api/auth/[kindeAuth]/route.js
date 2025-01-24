import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export const GET = async (req) => {
  const authHandler = handleAuth();

  // Call the handler with the request (if required)
  return authHandler(req);
};
