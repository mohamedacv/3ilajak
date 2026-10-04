"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UsersRound } from "lucide-react";
import { AddDoctorsInput } from "../../schema/doctors";

export default function DemoDoctors() {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<AddDoctorsInput>();

  const gender = watch("gender");

  return (
    <div className="rounded-xl bg-white p-5 shadow">
      <div className="flex items-center gap-2">
        <UsersRound className="h-6 w-6 text-blue-700" />
        <span className="text-xl font-bold">Demographics</span>
      </div>

      <div className="my-8 w-full">
        <Label htmlFor="date_of_birth" className="mb-2">
          DATE OF BIRTH
        </Label>

        <Input
          id="date_of_birth"
          type="date"
          {...register("date_of_birth")}
          className="h-11 border-2 border-gray-200 bg-gray-100 focus-visible:border-gray-500 focus-visible:ring-0"
        />

        {errors.date_of_birth && (
          <p className="mt-1 text-sm text-red-500">
            {errors.date_of_birth.message}
          </p>
        )}
      </div>

      <div className="flex w-full flex-col gap-2">
        <Label htmlFor="gender">Gender</Label>

        <Select
          value={gender}
          onValueChange={(value) =>
            setValue("gender", value as AddDoctorsInput["gender"], {
              shouldValidate: true,
              shouldDirty: true,
            })
          }
        >
          <SelectTrigger
            id="gender"
            className="w-full border border-gray-200 py-5 bg-gray-100 focus-visible:border-gray-500 focus-visible:ring-0"
          >
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>

          <SelectContent
            position="popper"
            side="bottom"
            align="start"
            sideOffset={4}
            className="bg-white"
          >
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
          </SelectContent>
        </Select>

        {errors.gender && (
          <p className="text-sm text-red-500">{errors.gender.message}</p>
        )}
      </div>
    </div>
  );
}
