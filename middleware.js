import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

// Add authentication to specific routes
export default withAuth({
  publicRoutes: ["/"],
});

// Configure which routes to protect
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
