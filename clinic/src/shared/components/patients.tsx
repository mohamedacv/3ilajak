import { unknown } from "@/assets/images/image";
import HoverPrefetchLink from "@/shared/components/hover-prefetch/hover-prefetch-link";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  name: string;
  email: string;
  image: string | StaticImageData;
  patientId: string;
  lastVisit: string;
  status: "active" | "inactive";
}

export const productColumns: ColumnDef<Product>[] = [
  {
    id: "profile",
    header: "PROFILE",
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div className="flex items-center gap-3">
          <Image
            src={patient.image}
            alt={patient.name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />

          <div>
            <p className="font-medium">{patient.name}</p>
            <p className="text-sm text-gray-700">{patient.email}</p>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "patientId",
    header: "PATIENT ID",
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div>
          <p className="text-gray-700 text-md">#PAT-{patient.patientId}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "lastVisit",
    header: "LAST VISIT",
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div>
          <p className="text-gray-700 text-md">{patient.lastVisit}</p>
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
          <button className="rounded-md cursor-pointer  text-red-900">
            <Trash2 className="h-6 w-6" />
          </button>
        </div>
      );
    },
  },
];
export const products: Product[] = [
  {
    id: 1,
    name: "Ahmed Ali",
    email: "ahmed.ali@example.com",
    image: unknown,
    patientId: "882913",
    lastVisit: "2026-07-15",
    status: "active",
  },
  {
    id: 2,
    name: "Sara Mohamed",
    email: "sara.m@example.com",
    image: unknown,
    patientId: "1002",
    lastVisit: "2026-07-12",
    status: "inactive",
  },
  {
    id: 3,
    name: "Omar Hassan",
    email: "omar.h@example.com",
    image: unknown,
    patientId: "1003",
    lastVisit: "2026-07-10",
    status: "active",
  },
  {
    id: 4,
    name: "Mona Ibrahim",
    email: "mona.i@example.com",
    image: unknown,
    patientId: "1004",
    lastVisit: "2026-07-08",
    status: "active",
  },
  {
    id: 5,
    name: "Youssef Adel",
    email: "youssef.a@example.com",
    image: unknown,
    patientId: "1005",
    lastVisit: "2026-07-05",
    status: "inactive",
  },
];
