"use client";
import { unknown } from "@/assets/images/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";

import { CirclePlus, CircleX, Info } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import {
  addClinic,
  AddClinicInput,
  updateClinic,
  UpdateClinicInput,
} from "../../schema/clinic";
import { toast } from "sonner";
import { addClinics } from "../../api/addClinics";
import { updateClinics } from "../../api/updateClinics";
import { ClinicResponse } from "../../api/getClinic";

interface FormClinicProps {
  mode?: "add" | "update";
  clinicId?: number;
  clinic?: ClinicResponse;
}

function FormClinics({ mode = "add", clinicId, clinic }: FormClinicProps) {
  const router = useRouter();

  const isUpdate = mode === "update";

  const schema = isUpdate ? updateClinic : addClinic;

  type FormInput = AddClinicInput | UpdateClinicInput;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormInput>({
    resolver: zodResolver(schema),

    mode: "onBlur",

    defaultValues: isUpdate
      ? {
          name: clinic?.name ?? "",
          phone: clinic?.phone ?? "",
          address: clinic?.address ?? "",
          max_doctors: clinic?.total_doctors ?? 0,
          // payment_date: clinic?.[0]?.payment_date ?? "",
          status: clinic?.status ?? "active",
        }
      : {
          name: "",
          phone: "",
          address: "",
          max_doctors: 0,
          payment_date: "",
          status: "active",
        },
  });

  const photo = watch("photo");

  const previewUrl =
    photo instanceof File ? URL.createObjectURL(photo) : unknown.src;

  const onSubmit = async (data: FormInput) => {
    try {
      if (isUpdate) {
        if (!clinicId) {
          throw new Error("Clinic ID is required");
        }

        const response = await updateClinics(
          clinicId,
          data as UpdateClinicInput,
        );

        console.log("API Update Success:", response);

        toast.success("Clinic updated successfully");
      } else {
        const response = await addClinics(data as AddClinicInput);

        console.log("API Add Success:", response);

        toast.success("Clinic added successfully");
      }

      reset();

      router.push("/dashboard/clinics");
      router.refresh();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";

      toast.error(message);
    }
  };
  return (
    <div className="py-6">
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12 items-start gap-6">
          <div className="col-span-8 flex flex-col gap-6 bg-white shadow rounded-2xl p-6 border-l-4 border-blue-800">
            <div className="flex gap-1.5 items-center">
              <Info className="w-7 h-7 text-blue-700" />
              <span className="font-bold text-lg">General Information</span>
            </div>
            <div className="flex gap-4 justify-between">
              <div className="w-full">
                <Label htmlFor="name" className="mb-2">
                  CLINIC NAME
                </Label>

                <div className="relative bg-gray-100 ">
                  <Input
                    id="name"
                    type="text"
                    placeholder="e.g. Al-Noor Specialized Medical Center"
                    className="h-11 pl-4 border-2 border-gray-200 focus-visible:border-gray-500 focus-visible:ring-0"
                    {...register("name")}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                <Label htmlFor="phone" className="mb-2 uppercase">
                  phone
                </Label>

                <div className="relative bg-gray-100 ">
                  <Input
                    id="phone"
                    type="text"
                    placeholder="01112079745"
                    className="h-11 pl-4 border-2 border-gray-200 focus-visible:border-gray-500 focus-visible:ring-0"
                    {...register("phone")}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-4 justify-between">
              <div className="w-full">
                <Label htmlFor="address" className="mb-2">
                  ADDRESS
                </Label>

                <div className="relative bg-gray-100 ">
                  <Input
                    id="address"
                    type="text"
                    placeholder="Egypt/mansoura"
                    className="h-11 pl-4 border-2 border-gray-200 focus-visible:border-gray-500 focus-visible:ring-0"
                    {...register("address")}
                  />
                </div>
                {errors.address && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.address.message}
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
                        <SelectItem value="active">
                          <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-green-500" />
                            Active
                          </span>
                        </SelectItem>

                        <SelectItem value="inactive">
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

            <div className="flex gap-4 justify-between">
              <div className="w-full">
                <Label htmlFor="max_num" className="mb-2">
                  MAX NUMBER OF DOCTORS
                </Label>

                <div className="relative bg-gray-100 ">
                  <Input
                    id="max_num"
                    type="text"
                    placeholder="10"
                    className="h-11 pl-4 border-2 border-gray-200 focus-visible:border-gray-500 focus-visible:ring-0"
                    {...register("max_doctors", {
                      valueAsNumber: true,
                    })}
                  />
                </div>
                {errors.max_doctors && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.max_doctors.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                <Label htmlFor="payment_date" className="mb-2 uppercase">
                  payment date
                </Label>

                <Input
                  id="payment_date"
                  type="date"
                  {...register("payment_date")}
                  className="h-11 border-2 border-gray-200 bg-gray-100 focus-visible:border-gray-500 focus-visible:ring-0"
                />
                {errors.payment_date && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.payment_date.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-4 flex flex-col gap-6">
            <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white p-6 shadow">
              <label
                htmlFor="photo"
                className="flex cursor-pointer flex-col items-center gap-4"
              >
                <Image
                  src={previewUrl}
                  alt="Clinic Profile"
                  width={160}
                  height={160}
                  className="h-40 w-40 rounded-xl object-cover shadow"
                />

                <span className="font-medium text-blue-600 hover:text-blue-700">
                  Upload Photo
                </span>
              </label>

              <Input
                id="photo"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0] ?? null;
                  setValue("photo", file, {
                    shouldValidate: true,
                  });
                }}
              />

              {errors.photo?.message && (
                <p className="mt-1 text-sm text-red-500">
                  {String(errors.photo.message)}
                </p>
              )}
            </div>
            <div className="flex flex-col  gap-4 p-6 bg-white shadow rounded-xl">
              <Button
                type="submit"
                className="bg-blue-800 h-11 w-full flex gap-2 font-semibold text-lg rounded-lg text-white cursor-pointer"
              >
                <CirclePlus className="w-7 h-7" />
                <span>
                  {isSubmitting
                    ? "Saving..."
                    : isUpdate
                      ? "Update Clinic"
                      : "Add Clinic"}
                </span>
              </Button>
              <Button
                onClick={() => {
                  reset();
                  router.back();
                }}
                type="button"
                disabled={isSubmitting}
                className="h-11 w-full text-xg text-gray-600 font-semibold cursor-pointer rounded-lg border border-gray-400"
              >
                <CircleX className="w-7 h-7" />
                Cancel and Exit
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormClinics;
