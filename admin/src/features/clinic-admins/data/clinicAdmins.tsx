import HoverPrefetchLink from "@/shared/components/hover-prefetch/hover-prefetch-link";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import { ClinicAdmins } from "../api/getClinicAdmins";
import DeleteClinicAdminButton from "../components/DeleteClinicAdminButton";

export const clinicAdminsColumns: ColumnDef<ClinicAdmins>[] = [
  {
    id: "a_name",
    header: "ADMIN NAME",
    cell: ({ row }) => {
      const clinicAdmins = row.original;

      return (
        <div>
          <p className="font-medium capitalize">{clinicAdmins.name}</p>
          <p className="text-sm text-gray-700">{clinicAdmins.Email}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "clinic",
    header: "clinic",
    cell: ({ row }) => {
      const clinicAdmins = row.original;

      return (
        <div>
          <p className="font-medium capitalize">{clinicAdmins.clinic.name}</p>
          <p className="text-sm text-gray-700">Phone : {clinicAdmins.clinic.phone}</p>
        </div>
      );
    },
  },

    {
    accessorKey: "address",
    header: "address",
    cell: ({ row }) => {
      const clinicAdmins = row.original;

      return (
        <div>
          <p className="font-medium capitalize">{clinicAdmins.clinic.address}</p>
        </div>
      );
    },
  },


  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => {
      const clinicAdmins = row.original.status;

      return (
        <span
          className={`rounded-full px-4 py-1 font-medium ${
            clinicAdmins === "Active"
              ? "bg-green-400 text-green-900"
              : "bg-red-400 text-red-900"
          }`}
        >
          {clinicAdmins}
        </span>
      );
    },
  },


  {
    id: "actions",
    header: "ACTIONS",
    cell: ({ row }) => {
      const clinicAdmins = row.original;
      return (
        <div className="flex items-center gap-2.5">
          <HoverPrefetchLink
            href={`/dashboard/clinic-admins/${clinicAdmins.id}/update`}
          >
            <button className="rounded-md cursor-pointer">
              <Pencil className="h-6 w-6" />
            </button>
          </HoverPrefetchLink>
         <DeleteClinicAdminButton clinicAdminId={clinicAdmins.id} />
        </div>
      );
    },
  },
];
