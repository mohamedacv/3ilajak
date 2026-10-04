"use client";

import { Controller, useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import type { AddDoctorsInput } from "../../schema/doctors";

const statuses = [
  {
    value: "active",
    title: "Active",
    description: "Available for immediate scheduling and patient care.",
  },
  {
    value: "on_leave",
    title: "On Leave",
    description: "Temporarily unavailable for bookings.",
  },
  {
    value: "inactive",
    title: "Inactive",
    description: "No longer practicing within this facility.",
  },
] as const;

export default function StatusDoctors() {
  const {
    control,
    formState: { errors },
  } = useFormContext<AddDoctorsInput>();

  return (
    <div className="flex flex-col gap-6 rounded-xl bg-white p-4 shadow">
      <p className="text-xl font-bold">Work Status</p>

      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <RadioGroup
            value={field.value}
            onValueChange={field.onChange}
            className="flex flex-col gap-4"
          >
            {statuses.map((item) => (
              <div
                key={item.value}
                className={`flex items-center  gap-4 rounded-xl border p-4 transition-colors ${
                  field.value === item.value
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                <RadioGroupItem
                  id={item.value}
                  value={item.value}
                />

                <Label
                  htmlFor={item.value}
                  className="flex items-start cursor-pointer flex-col gap-1"
                >
                  <p className="font-semibold">{item.title}</p>

                  <span className="text-sm text-gray-600">
                    {item.description}
                  </span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}
      />

      {errors.status && (
        <p className="text-sm text-red-500">
          {errors.status.message}
        </p>
      )}
    </div>
  );
}