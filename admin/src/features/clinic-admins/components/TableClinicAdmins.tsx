"use client"
import { Input } from "@/components/ui/input";
import DataTable from "@/shared/components/data-table/DataTable";
import { Search } from "lucide-react";
import {  clinicAdminsColumns } from "../data/clinicAdmins";
import { ClinicAdmins } from "../api/getClinicAdmins";
import { useQueryState } from "nuqs";

function TableClinicAdmins({clinicAdmins}:{clinicAdmins:ClinicAdmins[]}) {
   const [name, setName] = useQueryState("name", {
      defaultValue: "",
      shallow: false,
      throttleMs: 500,
    });
  return (
    <div>
      <div className="bg-white p-6 shadow border border-gray-300 rounded-t-xl">
        <div className="relative w-full max-w-100">
          <Search className="absolute top-1/2 left-3 h-5 w-4 -translate-y-1/2 text-gray-900" />

          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Search Clinic Admin  by Admin name"
            className="pl-10 bg-gray-50 border-gray-200 focus-visible:ring-1"
          />
        </div>
      </div>

      <DataTable columns={clinicAdminsColumns} data={clinicAdmins} />

       <div className="flex items-center justify-between border border-gray-300 px-6 py-4 bg-blue-100/50 rounded-b-xl" />
    </div>
  );
}

export default TableClinicAdmins;
