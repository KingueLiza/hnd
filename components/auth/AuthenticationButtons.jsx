"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AuthenticationButtons({ variant = "default", size = "default" }) {
  return (
    <div className="flex items-center gap-4">
      <Link href="/login">
        <Button
          variant={variant === "default" ? "outline" : variant}
          size={size}
        >
          Sign In
        </Button>
      </Link>
      <Link href="/register">
        <Button
          variant={variant === "default" ? "default" : variant}
          size={size}
        >
          Sign Up
        </Button>
      </Link>
    </div>
  );
} 