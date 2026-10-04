"use client";
import DataTable from "@/shared/components/data-table/DataTable";
import DataTablePagination from "@/shared/components/data-table/DataTablePagination";
import { appointments, appointmentsColumns } from "../data/appointments";

function TableAppointments() {
  return (
    <div>
      <DataTable columns={appointmentsColumns} data={appointments} />

      <DataTablePagination page={1} totalPages={10} />
    </div>
  );
}

export default TableAppointments;
