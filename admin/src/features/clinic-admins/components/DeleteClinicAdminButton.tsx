"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { deleteClinicAdmin } from "../api/deleteClinicAdmin";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

interface DeleteAdminButtonProps {
  clinicAdminId: number;
}

export default function DeleteClinicAdminButton({
  clinicAdminId,
}: DeleteAdminButtonProps) {
  const router = useRouter();

  async function handleDelete() {
    try {
      await deleteClinicAdmin(clinicAdminId);

      toast.success("Clinic Admin deleted successfully");

      router.refresh();
    } catch (error) {
      console.error("Delete clinic admin error:", error);
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          type="button"
          className="cursor-pointer rounded-md text-red-900 transition hover:text-red-700"
          aria-label="Delete clinic"
        >
          <Trash2 className="h-6 w-6" />
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent className="w-[95%]  rounded-xl border border-gray-100 bg-white p-6 shadow-2xl">
        <AlertDialogHeader className="space-y-3">
          <AlertDialogTitle className="text-xl font-semibold text-slate-900">
            Are you sure you want to delete this?
          </AlertDialogTitle>

          <AlertDialogDescription className="text-sm leading-6 text-slate-500">
            This will be permanently deleted, and this action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="mt-6 flex gap-3 sm:justify-end">
          <AlertDialogCancel className="h-10 rounded-lg border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={handleDelete}
            className="h-10 rounded-lg bg-red-600 px-5 text-sm font-medium text-white shadow-sm transition hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
