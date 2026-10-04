"use client";
import DataTable from "@/shared/components/data-table/DataTable";
import { patientColumns } from "../data/patients";
import { Patients } from "../api/getAllPatients";

function TablePatients({patients}:{patients:Patients[]}) {
  return (
    <div>
      <DataTable columns={patientColumns} data={patients} />

      <div className="flex items-center justify-between border border-gray-300 px-6 py-4 bg-blue-100/50 rounded-b-xl" />
    </div>
  );
}

export default TablePatients;
