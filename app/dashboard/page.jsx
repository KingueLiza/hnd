"use client"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useTheme } from 'next-themes';
import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, Calendar, Clock } from "lucide-react";

function Dashboard() {
  const { user } = useKindeBrowserClient();
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('system');
  }, []);

  const stats = [
    {
      title: "Total Students",
      value: "150",
      icon: Users,
      description: "Active students in the system"
    },
    {
      title: "Total Classes",
      value: "8",
      icon: BookOpen,
      description: "Active classes being tracked"
    },
    {
      title: "Today's Sessions",
      value: "12",
      icon: Calendar,
      description: "Scheduled sessions for today"
    },
    {
      title: "Average Attendance",
      value: "92%",
      icon: Clock,
      description: "Overall attendance rate"
    }
  ];

  return (
    <div className="p-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Welcome back, {user?.given_name || 'Teacher'}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Here's what's happening with your classes today
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {stat.value}
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;