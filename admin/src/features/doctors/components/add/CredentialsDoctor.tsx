"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, UserLock } from "lucide-react";
import type { AddDoctorsInput } from "../../schema/doctors";

export default function CredentialsDoctor() {
  const {
    register,
    formState: { errors },
  } = useFormContext<AddDoctorsInput>();

  return (
    <div className="flex flex-col rounded-2xl border-l-4 border-red-800 bg-white p-6 shadow">
      <div className="flex items-center gap-2">
        <UserLock className="h-7 w-7 text-red-700" />
        <span className="text-lg font-bold">Credentials & Access</span>
      </div>

      <div className="py-6">
        <div className="space-y-8">
          <div className="w-full">
            <Label htmlFor="password" className="mb-2">
              PASSWORD
            </Label>

            <div className="relative bg-gray-100">
              <Lock
                size={18}
                className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-slate-400"
              />

              <Input
                id="password"
                type="password"
                placeholder="********"
                {...register("password")}
                className="h-11 border-2 border-gray-200 pl-10 focus-visible:border-gray-500 focus-visible:ring-0"
              />
            </div>

            {errors.password && (
              <p className="mt-2 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
