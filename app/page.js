"use client"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@/components/ui/button";
import { AuthenticationButtons } from "@/components/auth/AuthenticationButtons";
import Link from "next/link";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";

export default function Home() {
  const { logout, user } = useKindeBrowserClient();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration errors by not rendering user-dependent content until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link href="/" className="text-xl font-semibold">
                Student Attendance Tracker
              </Link>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Track Student Attendance with Ease
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A simple and efficient way to manage student attendance records
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="text-xl font-semibold">
              Student Attendance Tracker
            </Link>
            <div className="flex items-center gap-4">
              {user ? (
                <>
                  <span className="text-sm text-gray-600">
                    Welcome, {user.given_name || user.email}
                  </span>
                  <Link href="/dashboard">
                    <Button variant="outline">Dashboard</Button>
                  </Link>
                  <Button
                    variant="outline"
                    onClick={() => logout()}
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <AuthenticationButtons />
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Track Student Attendance with Ease
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A simple and efficient way to manage student attendance records
          </p>
          {!user && (
            <div className="mt-8 flex justify-center gap-4">
              <RegisterLink>
                <Button size="lg">
                  Get Started
                </Button>
              </RegisterLink>
              <LoginLink>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </LoginLink>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
