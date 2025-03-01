import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";

export function ProtectedRoute({ children }) {
  const { user, isLoading } = useKindeBrowserClient();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!user) {
    redirect("/api/auth/login");
  }

return <>{children}</>;
} 