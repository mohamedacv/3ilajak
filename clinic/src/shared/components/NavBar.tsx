"use client";
import { Input } from "@/components/ui/input";
import { Search } from "@/assets/icons/icons";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const title =
    pathname === "/" ? "Dashboard" : pathname.split("/").filter(Boolean).pop();
  return (
    <header className="flex h-16 items-center justify-between shadow bg-white px-6 ">
      <h1 className="text-blue-700 text-2xl font-bold capitalize">{title}</h1>

      <div className="relative w-full max-w-md">
        <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />

        <Input
          placeholder="Search"
          className="pl-10  border-gray-200 rounded-2xl focus-visible:ring-1"
        />
      </div>

      <div className="flex items-center gap-3 mr-8 ">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-900 text-sm font-semibold text-white">
          ZH
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-900">
            Zeyad Hatem
          </span>

          <span className="text-xs text-gray-500">Administrator</span>
        </div>
      </div>
    </header>
  );
}
