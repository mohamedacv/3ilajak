import HoverPrefetchLink from "@/shared/components/hover-prefetch/hover-prefetch-link";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, Pencil } from "lucide-react";
import { Doctor } from "../api/getAllDoctors";
import Image from "next/image";
import { unknown } from "@/assets/images/image";
import DeleteDoctorButton from "../components/DeleteDoctorButton";

export const doctorsColumns: ColumnDef<Doctor>[] = [
  {
    id: "name",
    header: "DOCTOR",
    cell: ({ row }) => {
      const doctor = row.original;

      return (
        <div className="flex items-center gap-3">
          <Image
            src={doctor.images?.[0]?.image_url || unknown}
            alt={doctor.name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />

          <div>
            <p className="font-medium capitalize">{doctor.name}</p>
            <p className="text-sm text-gray-700">{doctor.email}</p>
            <p className="text-sm text-gray-700">Phone : {doctor.phone}</p>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "age",
    header: "age",
    cell: ({ row }) => {
      const doctor = row.original;

      return (
        <div>
          <p className="text-gray-700 text-lg capitalize">
            {doctor.date_of_birth}
          </p>
        </div>
      );
    },
  },

  {
    accessorKey: "gender",
    header: "gender",
    cell: ({ row }) => {
      const doctor = row.original;

      return (
        <div>
          <p className="text-gray-700 text-lg capitalize">{doctor.gender}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "address",
    header: "address",
    cell: ({ row }) => {
      const doctor = row.original;

      return (
        <div>
          <p className="text-gray-700 text-lg text-center capitalize">{doctor.address}</p>
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
      const doctor = row.original;
      return (
        <div className="flex items-center gap-2.5">
          <HoverPrefetchLink href={`/dashboard/doctors/${doctor.id}`}>
            <button className="rounded-md cursor-pointer  text-blue-800">
              <Eye className="h-6 w-6" />
            </button>
          </HoverPrefetchLink>
          <HoverPrefetchLink href={`/dashboard/doctors/${doctor.id}/update`}>
            <button className="rounded-md cursor-pointer">
              <Pencil className="h-6 w-6" />
            </button>
          </HoverPrefetchLink>
          <DeleteDoctorButton doctorId={doctor.id} />
        </div>
      );
    },
  },
];
