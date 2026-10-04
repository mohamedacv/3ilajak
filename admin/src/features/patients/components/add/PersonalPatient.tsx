import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Contact, Rainbow } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import { AddPatientInput } from "../../schema/patient";

function PersonalPatient() {
  const {
    register,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useFormContext<AddPatientInput>();
  return (
    <div className="flex flex-col border-2 border-gray-400 shadow rounded-xl">
      <div className="px-7 py-4 bg-blue-50 rounded-t-xl border-gray-500 border-b-2">
        <div className="flex gap-2 items-center">
          <Contact className="text-blue-700 w-6 h-6" />
          <span className="font-bold text-xl ">Personal Identity</span>
        </div>
      </div>

      <div className="p-6 space-y-8">
        <div className="flex gap-4 justify-between">
          <div className="w-full">
            <Label htmlFor="name" className="mb-2 uppercase">
              Full Name
            </Label>

            <div className="relative bg-gray-100 ">
              <Input
                id="name"
                type="text"
                placeholder="e.g., Abdullah Ahmed"
                {...register("name")}
                className="h-11 pl-5 border-2 border-gray-200 focus-visible:border-gray-500 focus-visible:ring-0"
              />
            </div>
            {errors.name && (
              <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="w-full">
            <Label htmlFor="blood_type" className="mb-2 uppercase">
              Blood Type
            </Label>

            <div className="relative">
              <Rainbow
                size={18}
                className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-slate-400"
              />

              <Select
                value={watch("Blood_Group")}
                onValueChange={(value) =>
                  setValue(
                    "Blood_Group",
                    value as AddPatientInput["Blood_Group"],
                    {
                      shouldValidate: true,
                      shouldDirty: true,
                    },
                  )
                }
              >
                <SelectTrigger
                  id="blood_type"
                  className="h-11 py-5 bg-gray-100 w-full border-2 border-gray-200 pl-10 focus-visible:border-gray-500 focus-visible:ring-0"
                >
                  <SelectValue placeholder="Select Blood Type" />
                </SelectTrigger>
                <SelectContent
                  position="popper"
                  side="bottom"
                  align="start"
                  sideOffset={4}
                  className="bg-white"
                >
                  <SelectItem value="A+">A+</SelectItem>
                  <SelectItem value="A-">A-</SelectItem>
                  <SelectItem value="B+">B+</SelectItem>
                  <SelectItem value="B-">B-</SelectItem>
                  <SelectItem value="AB+">AB+</SelectItem>
                  <SelectItem value="AB-">AB-</SelectItem>
                  <SelectItem value="O+">O+</SelectItem>
                  <SelectItem value="O-">O-</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {errors.Blood_Group && (
              <p className="mt-2 text-sm text-red-500">
                {errors.Blood_Group.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-4 justify-between">
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

          <div className="w-full">
            <Label htmlFor="p_id" className="mb-2 uppercase">
              patient id
            </Label>

            <div className="bg-gray-100 ">
              <Input
                id="p_id"
                type="email"
                placeholder="10-digit number"
                {...register("patient_id")}
                className="h-11 pl-5 border-2 border-gray-200 focus-visible:border-gray-500 focus-visible:ring-0"
              />
            </div>
            {errors.patient_id && (
              <p className="mt-2 text-sm text-red-500">
                {errors.patient_id.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalPatient;
