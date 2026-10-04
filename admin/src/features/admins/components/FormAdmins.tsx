"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, Lock, Mail, User, UserPlus } from "lucide-react";
import {
  addAdmins,
  AddAdminsInput,
  updateAdmins,
  UpdateAdminsInput,
} from "../schema/admins";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { addAdmin, addAdminInput } from "../api/addAdmins";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AdminResponse } from "../api/getAdmin";
import { updateAdmin } from "../api/updateAdmin";

type FormAdminsProps = {
  mode?: "add" | "update";
  adminId?: number;
  admin?: AdminResponse;
};

function FormAdmins({ mode = "add", adminId, admin }: FormAdminsProps) {
  const router = useRouter();
  const isUpdate = mode === "update";

  const schema = isUpdate ? updateAdmins : addAdmins;

  type FormInput = AddAdminsInput | UpdateAdminsInput;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInput>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: isUpdate
      ? {
          name: admin?.data.name ?? "",
          email: admin?.data.email ?? "",
        }
      : {
          name: "",
          email: "",
        },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormInput) => {
      if (isUpdate) {
        if (!adminId) {
          throw new Error("Admin ID is required");
        }

        return updateAdmin(adminId, data as UpdateAdminsInput);
      }

      return addAdmin(data as addAdminInput);
    },

    onSuccess: (response) => {
      console.log(
        isUpdate ? "Admin updated successfully" : "Admin added successfully",
        response,
      );

      const message = isUpdate
        ? "Admin updated successfully"
        : "Admin added successfully";

      toast.success(message);

      reset();
      router.push("/dashboard/admins");
    },
    onError: (error) => {
      console.error(
        isUpdate ? "Failed to update admin" : "Failed to add admin",
        error,
      );

      const message =
        error instanceof Error ? error.message : "Something went wrong";

      toast.error(message);
    },
  });

  const onSubmit = (data: FormInput) => {
    mutate(data);
  };

  return (
    <div className="flex flex-col border-2 border-gray-400 shadow rounded-2xl">
      <div className="flex justify-between p-6 bg-blue-50 rounded-t-2xl border-b-2 border-gray-400">
        <div className="flex flex-col">
          <p className="font-bold text-xl">Admin Configuration</p>
          <span>
            Provide the credentials and details for the new system
            administrator.
          </span>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-300">
          <UserPlus className="h-7 w-7 text-white" />
        </div>
      </div>

      <div className="p-6">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-4 justify-between">
            <div className="w-full">
              <Label htmlFor="email" className="mb-2">
                Full Name
              </Label>

              <div className="relative bg-gray-100 ">
                <User
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  id="name"
                  type="text"
                  placeholder="e.g. Sarah Mitchell"
                  className="h-11 pl-10 border-2 border-gray-200 focus-visible:border-gray-500 focus-visible:ring-0"
                  {...register("name")}
                />
              </div>
              {errors.name && (
                <p className="text-red-800">{errors.name.message}</p>
              )}
            </div>

            <div className="w-full">
              <Label htmlFor="email" className="mb-2">
                Email Address
              </Label>

              <div className="relative bg-gray-100 ">
                <Mail
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  id="email"
                  type="email"
                  placeholder="dr.smith@3ilajak.com"
                  className="h-11 pl-10 border-2 border-gray-200 focus-visible:border-gray-500 focus-visible:ring-0"
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <p className="text-red-800">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="flex gap-4 justify-between">
            <div className="w-full">
              <Label htmlFor="password" className="mb-2">
                Security Password
              </Label>

              <div className="relative bg-gray-100">
                <Lock
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="h-11 pl-10 pr-10 border-2 border-gray-200 focus-visible:border-gray-500 focus-visible:ring-0"
                  {...register("password")}
                />

                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-700"
                >
                  <Eye size={18} />
                </button>
              </div>
              {errors.password && (
                <p className="text-red-800">{errors.password.message}</p>
              )}
            </div>

            {!isUpdate && (
              <div className="w-full">
                <Label htmlFor="password_con" className="mb-2">
                  Confirm password
                </Label>

                <div className="relative bg-gray-100">
                  <Lock
                    size={18}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <Input
                    id="password_con"
                    type="password"
                    placeholder="Confirm password"
                    className="h-11 pl-10 pr-10 border-2 border-gray-200 focus-visible:border-gray-500 focus-visible:ring-0"
                    {...register("password_confirmation")}
                  />

                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-700"
                  >
                    <Eye size={18} />
                  </button>
                </div>
                {errors.password_confirmation && (
                  <p className="text-red-800">
                    {errors.password_confirmation.message}
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="flex gap-2 justify-end border-t-2 border-gray-400 pt-6">
            <Button
              onClick={() => {
                reset();
                router.back();
              }}
              type="button"
              disabled={isSubmitting}
              className="h-11 w-24 text-xg text-gray-600 font-semibold cursor-pointer rounded-lg border border-gray-400"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isPending || isSubmitting}
              className="bg-blue-800 h-11 w-44 font-semibold rounded-lg text-white cursor-pointer"
            >
              {isPending
                ? "Saving..."
                : isUpdate
                  ? "Update Administrator"
                  : "Add Administrator"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormAdmins;
