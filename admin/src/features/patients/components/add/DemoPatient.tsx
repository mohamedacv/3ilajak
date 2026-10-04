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
import { AddPatientInput } from "../../schema/patient";

export default function DemoPatient() {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<AddPatientInput>();

  const gender = watch("Gender");

  return (
    <div className="rounded-xl bg-white p-5 shadow">
      <div className="flex items-center gap-2">
        <UsersRound className="h-6 w-6 text-blue-700" />
        <span className="text-xl font-bold">Demographics</span>
      </div>

      <div className="my-8 w-full">
        <Label htmlFor="Date_Birth" className="mb-2">
          DATE OF BIRTH
        </Label>

        <Input
          id="date_of_birth"
          type="date"
          {...register("Date_Birth")}
          className="h-11 border-2 border-gray-200 bg-gray-100 focus-visible:border-gray-500 focus-visible:ring-0"
        />

        {errors.Date_Birth && (
          <p className="mt-1 text-sm text-red-500">
            {errors.Date_Birth.message}
          </p>
        )}
      </div>

      <div className="flex w-full flex-col gap-2">
        <Label htmlFor="gender">Gender</Label>

        <Select
          value={gender}
          onValueChange={(value) =>
            setValue("Gender", value as AddPatientInput["Gender"], {
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
            <SelectItem value="Male">Male</SelectItem>
            <SelectItem value="Female">Female</SelectItem>
          </SelectContent>
        </Select>

        {errors.Gender && (
          <p className="text-sm text-red-500">{errors.Gender.message}</p>
        )}
      </div>
    </div>
  );
}
