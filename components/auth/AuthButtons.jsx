import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@/components/ui/button";

export function AuthButtons() {
  const { login, register, logout, user } = useKindeBrowserClient();

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          Welcome, {user.given_name || user.email}
        </span>
        <Button
          variant="outline"
          onClick={() => logout()}
        >
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="outline"
        onClick={() => login()}
      >
        Sign In
      </Button>
      <Button
        onClick={() => register()}
      >
        Sign Up
      </Button>
    </div>
  );
} 