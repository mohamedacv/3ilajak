import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IdCardLanyard, Mail, Phone } from "lucide-react";
import { AddDoctorsInput } from "../../schema/doctors";
import { useFormContext } from "react-hook-form";

function CommunicationDoctor() {
  const {
    register,
    formState: { errors },
  } = useFormContext<AddDoctorsInput>();

  return (
    <div className="flex flex-col bg-white shadow rounded-2xl p-6">
      <div className="flex gap-1.5 items-center">
        <IdCardLanyard className="w-7 h-7 text-blue-700" />
        <span className="font-bold text-lg">Communication</span>
      </div>
      <div className="py-6">
        <div className="space-y-8">
          <div className="flex gap-4 justify-between">
            <div className="w-full">
              <Label htmlFor="phone" className="mb-2">
                PHONE NUMBER
              </Label>

              <div className="relative bg-gray-100 ">
                <Phone
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  id="phone"
                  type="text"
                  placeholder="+20 2 555 0111"
                  {...register("phone")}
                  className="h-11 pl-10 border-2 border-gray-200 focus-visible:border-gray-500 focus-visible:ring-0"
                />
              </div>
              {errors.phone && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <Label htmlFor="email_com" className="mb-2">
                EMAIL ADDRESS
              </Label>

              <div className="relative bg-gray-100 ">
                <Mail
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  id="email_com"
                  type="email"
                  placeholder="dr.smith@3ilajak.com"
                  {...register("email")}
                  className="h-11 pl-10 border-2 border-gray-200 focus-visible:border-gray-500 focus-visible:ring-0"
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="w-full">
            <Label htmlFor="area" className="mb-2">
              PHYSICAL ADDRESS
            </Label>

            <div className="relative bg-gray-100 ">
              <Textarea
                id="area"
                {...register("address")}
                placeholder="Street name, City, State, ZIP"
                className="h-30 border-2 border-gray-200 focus-visible:border-gray-500 focus-visible:ring-0"
              />
            </div>
          </div>
          {errors.address && (
            <p className="mt-2 text-sm text-red-500">
              {errors.address.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommunicationDoctor;
