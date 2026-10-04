import { ColumnDef } from "@tanstack/react-table";
import { Eye, EyeClosed, LucideIcon, Pencil } from "lucide-react";

interface Notifications {
  id: number;
  title: string;
  desc: string;
  icon: LucideIcon;
  recipient: string;
  date: string;
  status: "active" | "inactive";
}

export const notificationsColumns: ColumnDef<Notifications>[] = [
  {
    id: "name",
    header: "SUBJECT",
    cell: ({ row }) => {
      const patient = row.original;
      const Icon = patient.icon;
      return (
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200  ">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <p className="font-medium">{patient.title}</p>
            <p className="text-sm text-gray-700">{patient.desc}</p>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "recipient",
    header: "RECIPIENT",
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div>
          <p className="text-gray-700 text-md p-1.5 w-18 text-center border border-gray-400 rounded-lg bg-blue-100/50">{patient.recipient}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "date",
    header: "DATE",
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div>
          <p className="text-gray-700 text-md">{patient.date}</p>
        </div>
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
            status === "active"
              ? "bg-green-400 text-green-900"
              : "bg-red-400 text-red-900"
          }`}
        >
          {status}
        </span>
      );
    },
  },

  {
    id: "actions",
    header: "ACTIONS",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <button className="rounded-md p-2  ">
            <Eye className="h-6 w-6 text-blue-900" />
          </button>
          <button className="rounded-md p-2  ">
            <Pencil className="h-6 w-6" />
          </button>
        </div>
      );
    },
  },
];
export const notifications: Notifications[] = [
  {
    id: 1,
    title: "Quarterly System Maintenance Update",
    desc: "Scheduled downtime for server upgrades on Friday night",
    icon: EyeClosed,
    recipient: "Doctors",
    date: "Oct 21,2023",
    status: "active",
  },
  {
    id: 2,
    title: "Quarterly System Maintenance Update",
    desc: "Scheduled downtime for server upgrades on Friday night",
    icon: EyeClosed,
    recipient: "Doctors",
    date: "Oct 21,2023",
    status: "active",
  },
  {
    id: 3,
    title: "Quarterly System Maintenance Update",
    desc: "Scheduled downtime for server upgrades on Friday night",
    icon: EyeClosed,
    recipient: "Doctors",
    date: "Oct 21,2023",
    status: "active",
  },
  {
    id: 4,
    title: "Quarterly System Maintenance Update",
    desc: "Scheduled downtime for server upgrades on Friday night",
    icon: EyeClosed,
    recipient: "Doctors",
    date: "Oct 21,2023",
    status: "active",
  },
  {
    id: 5,
    title: "Quarterly System Maintenance Update",
    desc: "Scheduled downtime for server upgrades on Friday night",
    icon: EyeClosed,
    recipient: "Doctors",
    date: "Oct 21,2023",
    status: "inactive",
  },
];
