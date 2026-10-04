"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import Link from "next/link";
import { useQueryState } from "nuqs";

function TopBar() {
  const [name, setName] = useQueryState("name", {
    defaultValue: "",
    shallow: false,
    throttleMs: 500,
  });
  return (
    <div className="bg-white p-6 w-full rounded-lg shadow flex justify-between">
      <div className="relative w-full max-w-100">
        <Search className="absolute top-2/5 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />

        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Search Patients by name"
          className="pl-10 bg-gray-50 border-gray-200 focus-visible:ring-1"
        />
      </div>

      <Link href="/dashboard/patients/add">
        <Button className="px-4 py-5 bg-blue-900 text-lg text-white flex gap-2 cursor-pointer">
          <Plus />
          <span>Add Patient</span>
        </Button>
      </Link>
    </div>
  );
}

export default TopBar;
