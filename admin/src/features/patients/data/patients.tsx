import { unknown } from "@/assets/images/image";
import HoverPrefetchLink from "@/shared/components/hover-prefetch/hover-prefetch-link";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { Patients } from "../api/getAllPatients";
import DeletePatientButton from "../components/DeletePatientButton";

export const patientColumns: ColumnDef<Patients>[] = [
  {
    id: "profile",
    header: "PROFILE",
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div className="flex items-center gap-3">
          <Image
            src={patient.images?.[0]?.image_url || unknown}
            alt={patient.name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />

          <div>
            <p className="font-medium capitalize">{patient.name}</p>
            <p className="text-sm text-gray-700">{patient.email}</p>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "phone",
    header: "phone",
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div>
          <p className="text-gray-700 text-md">{patient.Phone}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "Gender",
    header: "Gender",
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div>
          <p className="text-gray-700 text-md capitalize">{patient.Gender}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "address",
    header: "address",
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div>
          <p className="text-gray-700 text-md truncate w-40 capitalize">
            {patient.Address}
          </p>
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
      const patient = row.original;
      return (
        <div className="flex items-center gap-2.5">
          <HoverPrefetchLink href={`/dashboard/patients/${patient.id}`}>
            <button className="rounded-md cursor-pointer  text-blue-800">
              <Eye className="h-6 w-6" />
            </button>
          </HoverPrefetchLink>
          <HoverPrefetchLink href={`/dashboard/patients/${patient.id}/update`}>
            <button className="rounded-md cursor-pointer">
              <Pencil className="h-6 w-6" />
            </button>
          </HoverPrefetchLink>
          <DeletePatientButton patientId={patient.id} />
        </div>
      );
    },
  },
];
