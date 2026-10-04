"use client";
import DataTable from "@/shared/components/data-table/DataTable";
import {appointmentColumns } from "../data/appointment";
import { Appointment } from "../api/getAllAppointment";

function AppointmentTable({appointment}:{appointment:Appointment[]}) {
  return (
    <div>
      <DataTable columns={appointmentColumns} data={appointment} />

       <div className="flex items-center justify-between border border-gray-300 px-6 py-4 bg-blue-100/50 rounded-b-xl" />
    </div>
  );
}

export default AppointmentTable;
