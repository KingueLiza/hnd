"use client";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@/components/ui/button";

export function AuthenticationButtons({ variant = "default", size = "default" }) {
  return (
    <div className="flex items-center gap-4">
      <LoginLink redirectUrl="/dashboard">
        <Button
          variant={variant === "default" ? "outline" : variant}
          size={size}
        >
          Sign In
        </Button>
      </LoginLink>
      <RegisterLink redirectUrl="/dashboard">
        <Button
          variant={variant === "default" ? "default" : variant}
          size={size}
        >
          Sign Up
        </Button>
      </RegisterLink>
    </div>
  );
} 