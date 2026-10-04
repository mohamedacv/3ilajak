"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, LogOut, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { logout } from "@/features/login/api/logout";

type Admin = {
  name: string;
  email: string;
};

function AdminProfile() {
  const [admin, setAdmin] = useState<Admin | null>(null);

  useEffect(() => {
    const adminCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("admin="))
      ?.split("=")[1];

    if (adminCookie) {
      try {
        const adminData = JSON.parse(
          decodeURIComponent(adminCookie),
        );

        setAdmin(adminData);
      } catch {
        setAdmin(null);
      }
    }
  }, []);

  const handleLogout = async () => {
    try {
      await logout();

      setAdmin(null);

      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (!admin) {
    return (
      <Link
        href="/login"
        className="text-sm font-semibold text-gray-700 hover:text-blue-900"
      >
        Login
      </Link>
    );
  }

  const initials = admin.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-3 rounded-lg p-1.5 transition-colors hover:bg-gray-100 focus:outline-none"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-900 text-sm font-semibold text-white">
            {initials}
          </div>

          <div className="flex flex-col text-left">
            <span className="text-sm font-semibold capitalize text-gray-900">
              {admin.name}
            </span>

            <span className="text-xs text-gray-500">
              Administrator
            </span>
          </div>

          <ChevronDown className="h-4 w-4 text-gray-500" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-42 bg-white">
        <DropdownMenuItem asChild>
          <Link
            href="/profile"
            className="flex cursor-pointer items-center gap-2"
          >
            <User className="h-5 w-5" />
            Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer text-red-600 focus:text-red-600"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AdminProfile;