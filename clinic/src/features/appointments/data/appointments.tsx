import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { ClipboardList, Pencil, Trash2 } from "lucide-react";

interface Appointments {
  id: number;
  patient_name: string;
  doctor_name: string;
  clinic: string;
  date: string;
}

export const appointmentsColumns: ColumnDef<Appointments>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    id: "patient",
    header: "patient",
    cell: ({ row }) => {
      const appointments = row.original;

      return <p className="font-medium text-lg">{appointments.patient_name}</p>;
    },
  },

  {
    id: " doctor",
    header: " doctor",
    cell: ({ row }) => {
      const appointments = row.original;

      return <p className="font-medium text-lg">{appointments.doctor_name}</p>;
    },
  },

  {
    id: "clinic",
    header: "clinic",
    cell: ({ row }) => {
      const appointments = row.original;

      return <p className="font-medium text-lg">{appointments.clinic}</p>;
    },
  },
  {
    id: "date",
    header: "date",
    cell: ({ row }) => {
      const appointments = row.original;

      return <p className="font-medium text-lg">{appointments.date}</p>;
    },
  },

  {
    id: "actions",
    header: "ACTIONS",
    cell: ({ row }) => {
      const appointments = row.original;
      return (
        <div className="flex items-center gap-2.5">
          <button className="rounded-md cursor-pointer">
            <Pencil className="h-5 w-5" />
          </button>

          <button className="rounded-md cursor-pointer  text-amber-400">
            <ClipboardList className="h-5 w-5" />
          </button>
          <button className="rounded-md cursor-pointer  text-red-900">
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      );
    },
  },
];
export const appointments: Appointments[] = [
  {
    id: 1,
    patient_name: "mohamed ashry",
    doctor_name: "zeyad hatem",
    clinic: " General Clinic",
    date: "jun, 29, 2026",
  },
  {
    id: 2,
    patient_name: "mohamed ashry",
    doctor_name: "zeyad hatem",
    clinic: " General Clinic",
    date: "jun, 29, 2026",
  },
  {
    id: 3,
    patient_name: "mohamed ashry",
    doctor_name: "zeyad hatem",
    clinic: " General Clinic",
    date: "jun, 29, 2026",
  },
  {
    id: 4,
    patient_name: "mohamed ashry",
    doctor_name: "zeyad hatem",
    clinic: " General Clinic",
    date: "jun, 29, 2026",
  },
  {
    id: 5,
    patient_name: "mohamed ashry",
    doctor_name: "zeyad hatem",
    clinic: " General Clinic",
    date: "jun, 29, 2026",
  },
];
