"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Contact, Eye, Hospital, Lock, Mail, User } from "lucide-react";
import z from "zod";
import { addClinicAdmins, updateClinicAdmins } from "../../schema/clinicAdmins";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Clinic } from "@/features/clinics/api/getAllClinics";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { addClinicAdmin } from "../../api/addClinicAdmin";
import { Input } from "@/components/ui/input";
import { ClinicAdminResponse } from "../../api/getClinicAdmin";
import { updateClinicAdmin } from "../../api/updateClinicAdmin";

export type AddClinicAdminsInput = z.infer<typeof addClinicAdmins>;
export type UpdateClinicAdminsInput = z.infer<typeof updateClinicAdmins>;

type FormClinicAdminsProps = {
  mode?: "add" | "update";
  clinics: Clinic[];
  clinicAdmin?: ClinicAdminResponse;
  clinicAdminId?: number;
};

function FormClinicAdmins({
  mode = "add",
  clinics,
  clinicAdminId,
  clinicAdmin,
}: FormClinicAdminsProps) {
  const router = useRouter();
  const isUpdate = mode === "update";

  const schema = isUpdate ? addClinicAdmins : updateClinicAdmins;

  type FormInput = AddClinicAdminsInput | UpdateClinicAdminsInput;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormInput>({
    resolver: zodResolver(schema),
    mode: "onBlur",

    defaultValues: isUpdate
      ? {
          name: clinicAdmin?.data.name ?? "",
          Email: clinicAdmin?.data.Email ?? "",
          status: clinicAdmin?.data.status ?? "Active",
          clinic_id: clinicAdmin?.data.clinic_id ?? 0,
        }
      : {
          name: "",
          Email: "",
          clinic_id: 0,
          status: "Active",
        },
  });

  const onSubmit = async (data: FormInput) => {
    try {
      if (isUpdate) {
        if (!clinicAdminId) {
          throw new Error("Clinic ID is required");
        }

        const response = await updateClinicAdmin(
          clinicAdminId,
          data as UpdateClinicAdminsInput,
        );

        console.log("API Update Success:", response);

        toast.success("Clinic updated successfully");
      } else {
        const response = await addClinicAdmin(data as AddClinicAdminsInput);

        console.log("API Success:", response);

        toast.success("Clinic Admin added successfully");
      }

      reset();

      router.push("/dashboard/clinic-admins");
      router.refresh();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";

      toast.error(message);

      console.log("error", message);
    }
  };

  return (
    <div className="flex flex-col bg-white shadow rounded-2xl">
      <div className="flex justify-between p-7 border-gray-500 border-b-2">
        <div className="flex gap-2 items-center">
          <Contact className="text-blue-700 w-6 h-6" />
          <span className="font-bold text-xl ">Assignment Details</span>
        </div>
        <div className="py-1 px-2 bg-blue-200 rounded-full text-sm text-blue-800">
          {isUpdate ? "UPDATE ASSIGNMENT" : "NEW ASSIGNMENT"}
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
                <p className="mt-2 text-sm text-red-500">
                  {errors.name.message}
                </p>
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
                  {...register("Email")}
                />
              </div>
              {errors.Email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.Email.message}
                </p>
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
                <p className="mt-2 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <Label htmlFor="status" className="mb-2">
                STATUS
              </Label>

              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full border border-gray-200 py-5 bg-gray-100 focus-visible:border-gray-500 focus-visible:ring-0">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>

                    <SelectContent
                      position="popper"
                      side="bottom"
                      align="start"
                      sideOffset={4}
                      className="bg-white"
                    >
                      <SelectItem value="Active">
                        <span className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-green-500" />
                          Active
                        </span>
                      </SelectItem>

                      <SelectItem value="Inactive">
                        <span className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-red-500" />
                          Inactive
                        </span>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.status && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.status.message}
                </p>
              )}
            </div>
          </div>

          <div className="w-full space-y-0.5">
            <Label htmlFor="clinic" className="text-md">
              Target Clinic Facility
            </Label>

            <p className="text-gray-600">
              Select the medical facility this administrator will be responsible
              for.
            </p>

            <div className="relative">
              <Hospital
                size={18}
                className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-slate-400"
              />

              <Select
                value={watch("clinic_id")?.toString()}
                onValueChange={(value) =>
                  setValue("clinic_id", Number(value), {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
              >
                <SelectTrigger
                  id="clinic"
                  className="h-11 py-5 bg-gray-100 w-full border-2 border-gray-200 pl-10 focus-visible:border-gray-500 focus-visible:ring-0"
                >
                  <SelectValue placeholder="Target Clinic Facility" />
                </SelectTrigger>

                <SelectContent
                  position="popper"
                  side="bottom"
                  align="start"
                  sideOffset={4}
                  className="bg-white"
                >
                  {clinics.map((clinic) => (
                    <SelectItem key={clinic.id} value={clinic.id.toString()}>
                      {clinic.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {errors.clinic_id && (
              <p className="mt-2 text-sm text-red-500">
                {errors.clinic_id.message}
              </p>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="notes" className="text-gray-700">
                Assignment Notes (Optional)
              </Label>
            </div>

            <Textarea
              id="notes"
              className="h-25 bg-gray-100 focus-visible:border-gray-500 focus-visible:ring-0"
              placeholder="Describe scope of responsibility or specific authorization levels..."
              {...register("note")}
            />

            {errors.note && (
              <p className="mt-2 text-sm text-red-500">{errors.note.message}</p>
            )}
          </div>

          <div className="flex gap-2 justify-end border-t-2 border-gray-400 pt-6 mt-5">
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
              disabled={isSubmitting}
              className="bg-blue-800 h-11 w-44 font-semibold rounded-lg text-white cursor-pointer"
            >
              {isSubmitting
                ? "Saving..."
                : isUpdate
                  ? "Update Assignment"
                  : "Confirm Assignment"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormClinicAdmins;
