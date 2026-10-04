import HoverPrefetchLink from "@/shared/components/hover-prefetch/hover-prefetch-link";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import { Admin } from "../api/getAllAdmins";
import { formatDate } from "@/shared/components/atoms/formatDate";
import DeleteAdminButton from "../components/DeleteAdminButton";

export const adminsColumns: ColumnDef<Admin>[] = [
 

  {
    id: "name",
    header: "ADMIN NAME",
    cell: ({ row }) => {
      const admin = row.original;

      const initials = admin.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

      return (
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-900 text-sm font-semibold text-white uppercase">
            {initials}
          </div>
          <div>
            <p className="font-medium text-lg capitalize">{admin.name}</p>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      const admin = row.original;

      return (
        <div>
          <p className="text-gray-700 text-lg">{admin.email}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "created_at",
    header: "CREATED AT",
    cell: ({ row }) => {
      const admin = row.original;

      return (
        <span className="text-gray-700 text-lg">
          {formatDate(admin.created_at)}
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
      const admin = row.original;
      return (
        <div className="flex items-center gap-2.5">
          <HoverPrefetchLink href={`/dashboard/admins/${admin.id}/update`}>
            <button className="rounded-md cursor-pointer">
              <Pencil className="h-6 w-6" />
            </button>
          </HoverPrefetchLink>
          <DeleteAdminButton adminId={admin.id} />
        </div>
      );
    },
  },
];
