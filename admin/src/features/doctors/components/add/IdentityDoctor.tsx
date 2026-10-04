import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ClipboardPlus, Hospital, IdCard, IdCardIcon, IdCardLanyard, Rainbow, User } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { AddDoctorsInput } from "../../schema/doctors";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clinic } from "@/features/clinics/api/getAllClinics";
import { Specializations } from "@/features/specializations/api/getAllSpecializations";

interface Props {
  clinics: Clinic[];
  specializations: Specializations[];
}

function IdentityDoctor({ clinics, specializations }: Props) {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<AddDoctorsInput>();

  return (
    <div className="flex flex-col bg-white shadow rounded-2xl p-6">
      <div className="flex gap-1.5 items-center">
        <IdCard className="w-7 h-7 text-blue-700" />
        <span className="font-bold text-lg">Identity & Profile</span>
      </div>
      <div className="py-6">
        <div className="space-y-8">
          <div className="flex gap-4 justify-between">
            <div className="w-full">
              <Label htmlFor="name" className="mb-2 uppercase">
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
                  placeholder="Dr. Jonathan Smith"
                  {...register("name")}
                  className="h-11 pl-10 border-2 border-gray-200 focus-visible:border-gray-500 focus-visible:ring-0"
                />
              </div>
              {errors.name && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.name.message}
                </p>
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
                  value={watch("blood_type")}
                  onValueChange={(value) =>
                    setValue(
                      "blood_type",
                      value as AddDoctorsInput["blood_type"],
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

              {errors.blood_type && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.blood_type.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-4 justify-between">
            <div className="w-full">
              <Label htmlFor="n_id" className="mb-2">
                NATIONAL ID / PASSPORT
              </Label>

              <div className="relative bg-gray-100 ">
                <IdCardIcon
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  id="n_id"
                  type="text"
                  placeholder="ID-99283-X"
                  {...register("national_id")}
                  className="h-11 pl-10 border-2 border-gray-200 focus-visible:border-gray-500 focus-visible:ring-0"
                />
              </div>
              {errors.national_id && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.national_id.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <Label htmlFor="m_l" className="mb-2">
                MEDICAL LICENSE NUMBER
              </Label>

              <div className="relative bg-gray-100 ">
                <IdCardLanyard
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  id="m_l"
                  type="text"
                  placeholder="MLN-88776655"
                  {...register("medical_license")}
                  className="h-11 pl-10 border-2 border-gray-200 focus-visible:border-gray-500 focus-visible:ring-0"
                />
              </div>
              {errors.medical_license && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.medical_license.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-4 justify-between">
            <div className="w-full">
              <Label htmlFor="clinic_id" className="mb-2 uppercase">
                Clinic
              </Label>

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
                    id="clinic_id"
                    className="h-11 py-5 bg-gray-100 w-full border-2 border-gray-200 pl-10 focus-visible:border-gray-500 focus-visible:ring-0"
                  >
                    <SelectValue placeholder="Select Clinic" />
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

            <div className="w-full">
              <Label htmlFor="specialization_id" className="mb-2 uppercase">
                specialization
              </Label>

              <div className="relative">
                <ClipboardPlus 
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-slate-400"
                />

                <Select
                  value={watch("specialization_id")?.toString()}
                  onValueChange={(value) =>
                    setValue("specialization_id", Number(value), {
                      shouldValidate: true,
                      shouldDirty: true,
                    })
                  }
                >
                  <SelectTrigger
                    id="specialization_id"
                    className="h-11 py-5 bg-gray-100 w-full border-2 border-gray-200 pl-10 focus-visible:border-gray-500 focus-visible:ring-0"
                  >
                    <SelectValue placeholder="Select Specialization" />
                  </SelectTrigger>

                  <SelectContent
                    position="popper"
                    side="bottom"
                    align="start"
                    sideOffset={4}
                    className="bg-white"
                  >
                    {specializations.map((specialization) => (
                      <SelectItem
                        key={specialization.id}
                        value={specialization.id.toString()}
                      >
                        {specialization.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {errors.specialization_id && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.specialization_id.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdentityDoctor;
