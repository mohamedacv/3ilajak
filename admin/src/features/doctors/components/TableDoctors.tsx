"use client";

import DataTable from "@/shared/components/data-table/DataTable";
import { Search } from "lucide-react";
import { doctorsColumns } from "../data/doctors";
import { Input } from "@/components/ui/input";
import { Doctor } from "../api/getAllDoctors";
import { useQueryState } from "nuqs";

function TableDoctors({ doctors }: { doctors: Doctor[] }) {
  const [name, setName] = useQueryState("name", {
    defaultValue: "",
    shallow: false,
    throttleMs: 500,
  });
  return (
    <div>
      <div className="bg-white p-6 shadow flex justify-between items-center border border-gray-300 rounded-t-xl">
        <h1 className="font-bold text-xl">Registered Professionals</h1>
        <div className="relative w-full max-w-100">
          <Search className="absolute top-1/2 left-3 h-5 w-4 -translate-y-1/2 text-gray-900" />

          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Search Dctors by name"
            className="pl-10 bg-gray-50 border-gray-200 focus-visible:ring-1"
          />
        </div>
      </div>
      <DataTable columns={doctorsColumns} data={doctors} />

      <div className="flex items-center justify-between border border-gray-300 px-6 py-4 bg-blue-100/50 rounded-b-xl" />
    </div>
  );
}

export default TableDoctors;
