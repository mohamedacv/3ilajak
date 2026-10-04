import { ColumnDef } from "@tanstack/react-table";
import { Appointment } from "../api/getAllAppointment";
import { formatDate } from "@/shared/components/atoms/formatDate";

export const appointmentColumns: ColumnDef<Appointment>[] = [
  {
    id: "patient",
    header: "patient",
    cell: ({ row }) => {
      const appointment = row.original;

      return (
        <p className="font-semibold capitalize">{appointment.patient.name}</p>
      );
    },
  },

  {
    id: "doctor",
    header: "doctor",
    cell: ({ row }) => {
      const appointment = row.original;

      return (
        <p className="font-semibold capitalize">{appointment.doctor.name}</p>
      );
    },
  },

  {
    id: "clinic",
    header: "clinic",
    cell: ({ row }) => {
      const appointment = row.original;

      return (
        <p className="font-medium capitalize">{appointment.clinic.name}</p>
      );
    },
  },

  {
    accessorKey: "date",
    header: "date",
    cell: ({ row }) => {
      const appointment = row.original;

      return (
        <span className="text-gray-700 text-lg">
          {formatDate(appointment.appointment_date)}
        </span>
      );
    },
  },

  {
    accessorKey: "created_at",
    header: "created at",
    cell: ({ row }) => {
      const appointment = row.original;

      return (
        <span className="text-gray-700 text-lg">
          {formatDate(appointment.created_at)}
        </span>
      );
    },
  },

  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => {
      const status = row.original.status;

      return (
        <span
          className={`rounded-full px-4 py-1 font-medium ${
            status === "Active"
              ? "bg-green-400 text-green-900"
              : "bg-red-400 text-red-900"
          }`}
        >
          {status}
        </span>
      );
    },
  },
];
