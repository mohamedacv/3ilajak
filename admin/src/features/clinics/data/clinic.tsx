import HoverPrefetchLink from "@/shared/components/hover-prefetch/hover-prefetch-link";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, Pencil } from "lucide-react";
import { Clinic } from "../api/getAllClinics";
import Image from "next/image";
import { unknown } from "@/assets/images/image";
import DeleteClinicButton from "../components/DeleteClinicButton";

export const clinicsColumns: ColumnDef<Clinic>[] = [
 
  {
    id: "clinic",
    header: "clinic",
    cell: ({ row }) => {
      const clinic = row.original;

      return (
        <div className="flex items-center gap-3">
          <Image
            src={clinic.images?.[0]?.image_url || unknown}
            alt={clinic.name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />

          <div>
            <p className="font-medium capitalize">{clinic.name}</p>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "phone",
    header: "phone",
    cell: ({ row }) => {
      const clinic = row.original;

      return (
        <div>
          <p className="text-gray-700 text-md">{clinic.phone}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "doctors",
    header: "Doctors",
    cell: ({ row }) => {
      const clinic = row.original;

      return (
        <div>
          <p className="text-gray-700 text-md ">MAX: {clinic.max_doctors}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => {
      const clinic = row.original;

      return (
        <div>
          <p className="text-gray-700 text-md capitalize">{clinic.address}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => {
      const clinic = row.original.status;

      return (
        <span
          className={`rounded-full px-4 py-1 font-medium ${
            clinic === "active"
              ? "bg-green-400 text-green-900"
              : "bg-red-400 text-red-900"
          }`}
        >
          {clinic}
        </span>
      );
    },
  },

  {
    id: "actions",
    header: "ACTIONS",
    cell: ({ row }) => {
      const clinic = row.original;
      return (
        <div className="flex items-center gap-2.5">
          <HoverPrefetchLink href={`/dashboard/clinics/${clinic.id}`}>
            <button className="rounded-md cursor-pointer text-blue-800">
              <Eye className="h-6 w-6" />
            </button>
          </HoverPrefetchLink>
          <HoverPrefetchLink href={`/dashboard/clinics/${clinic.id}/update`}>
            <button className="rounded-md cursor-pointer">
              <Pencil className="h-6 w-6" />
            </button>
          </HoverPrefetchLink>
          <DeleteClinicButton clinicId={clinic.id} />
        </div>
      );
    },
  },
];

// const image = clinic.images?.[0]?.image_url;

// console.log("image",)
