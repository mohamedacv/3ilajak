import { ColumnDef } from "@tanstack/react-table";
import { ClipboardList, Eye, Pencil, Trash2 } from "lucide-react";

interface Product {
  id: number;
  name: string;
  phone: string;
  age: number;
  gender: "female" | "male";
  lastVisit: string;
  status: "active" | "inactive";
}

export const productColumns: ColumnDef<Product>[] = [
  {
    id: "name",
    header: "name",
    cell: ({ row }) => {
      const patient = row.original;

      return <p className="font-medium">{patient.name}</p>;
    },
  },

  {
    id: "phone",
    header: "phone",
    cell: ({ row }) => {
      const patient = row.original;

      return <p className="font-medium">{patient.phone}</p>;
    },
  },

  {
    id: "age",
    header: "age",
    cell: ({ row }) => {
      const patient = row.original;

      return <p className="font-medium">{patient.age}</p>;
    },
  },
  {
    id: "gender",
    header: "gender",
    cell: ({ row }) => {
      const patient = row.original;

      return <p className="font-medium">{patient.gender}</p>;
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
          className={`rounded-full px-4 py-1 font-medium capitalize text-md ${
            status === "active"
              ? "bg-green-200 text-green-900 border border-green-900"
              : "bg-red-200 text-red-900 border border-red-900"
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
          <button className="rounded-md cursor-pointer  text-blue-800">
            <Eye className="h-5 w-5" />
          </button>

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
export const products: Product[] = [
  {
    id: 1,
    name: "Ahmed Ali",
    phone: "+20 111 207 9745",
    age: 20,
    gender: "male",
    lastVisit: "2026-07-15",
    status: "active",
  },
  {
    id: 2,
    name: "Sara Mohamed",
    phone: "+20 111 207 9745",
    age: 20,
    gender: "male",
    lastVisit: "2026-07-12",
    status: "inactive",
  },
  {
    id: 3,
    name: "Omar Hassan",
    phone: "+20 111 207 9745",
    age: 20,
    gender: "male",
    lastVisit: "2026-07-10",
    status: "active",
  },
  {
    id: 4,
    name: "Mona Ibrahim",
    phone: "+20 111 207 9745",
    age: 20,
    gender: "male",
    lastVisit: "2026-07-08",
    status: "active",
  },
  {
    id: 5,
    name: "Youssef Adel",
    phone: "+20 111 207 9745",
    age: 20,
    gender: "male",
    lastVisit: "2026-07-05",
    status: "inactive",
  },
];
