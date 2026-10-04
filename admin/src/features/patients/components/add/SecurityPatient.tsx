import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, LockKeyhole } from "lucide-react";
import { AddPatientInput } from "../../schema/patient";
import { useFormContext } from "react-hook-form";

function SecurityPatient() {
  const {
    register,

    formState: { errors },
  } = useFormContext<AddPatientInput>();
  return (
    <div className="flex flex-col border-2 border-gray-400 shadow rounded-xl">
      <div className="px-7 py-4 bg-blue-50 rounded-t-xl border-gray-500 border-b-2">
        <div className="flex gap-2 items-center">
          <LockKeyhole className="text-blue-700 w-6 h-6" />
          <span className="font-bold text-xl ">Account Security</span>
        </div>
      </div>

      <div className="p-6">
        <div className="py-6">
          <div className="flex gap-4 justify-between">
            <div className="w-full">
              <Label htmlFor="password" className="mb-2 uppercase">
                Account Password
              </Label>

              <div className="relative bg-gray-100 ">
                <Lock
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  {...register("password")}
                  className="h-11 pl-10 border-2 border-gray-200 focus-visible:border-gray-500 focus-visible:ring-0"
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
    </div>
  );
}

export default SecurityPatient;
