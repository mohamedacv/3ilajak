import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IdCard, Mail, Phone } from "lucide-react";
import { AddPatientInput } from "../../schema/patient";
import { useFormContext } from "react-hook-form";

function ContactPatient() {
  const {
    register,
    formState: { errors },
  } = useFormContext<AddPatientInput>();
  return (
    <div className="flex flex-col border-2 border-gray-400 shadow rounded-xl">
      <div className="px-7 py-4 bg-blue-50 rounded-t-xl border-gray-500 border-b-2">
        <div className="flex gap-2 items-center">
          <IdCard className="text-blue-700 w-6 h-6" />
          <span className="font-bold text-xl ">Contact Information</span>
        </div>
      </div>

      <div className="p-6 space-y-8">
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
                {...register("Phone")}
                className="h-11 pl-10 border-2 border-gray-200 focus-visible:border-gray-500 focus-visible:ring-0"
              />
            </div>
            {errors.Phone && (
              <p className="mt-2 text-sm text-red-500">
                {errors.Phone.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <Label htmlFor="email_com" className="mb-2">
              EMAIL
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
            Address
          </Label>

          <div className="relative bg-gray-100 ">
            <Textarea
              id="area"
              placeholder="Street, Building, City, Zip Code"
              {...register("Address")}
              className="border-2 border-gray-200 h-25 focus-visible:border-gray-500 focus-visible:ring-0"
            />
          </div>
          {errors.Address && (
            <p className="mt-2 text-sm text-red-500">
              {errors.Address.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactPatient;
