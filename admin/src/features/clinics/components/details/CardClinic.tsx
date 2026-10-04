import { unknown } from "@/assets/images/image";
import { MapPinIcon, Phone } from "lucide-react";
import Image from "next/image";
import { ClinicResponse } from "../../api/getClinic";

function CardClinic({ clinic }: { clinic: ClinicResponse }) {
  return (
    <div className="flex w-full gap-8 rounded-xl bg-white p-8 shadow">
      <div className="shrink-0">
        <Image
          src={unknown}
          alt="Clinic Profile"
          width={160}
          height={160}
          className="h-40 w-40 rounded-xl object-cover shadow"
        />
      </div>

      <div className="flex flex-1 flex-col gap-5">
        <div className="flex items-center justify-between gap-8">
          <h2 className="text-3xl font-bold text-gray-900">{clinic.name}</h2>

          <span className="rounded-full capitalize border border-green-900 bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-900">
            {clinic.status}
          </span>
        </div>

        <p className="max-w-3xl font-medium leading-6 text-gray-500">
          A premier multi-specialty healthcare facility providing advanced
          diagnostic and therapeutic services in the heart of the city.
        </p>

        <div className="flex items-center justify-between gap-8 pt-2">
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-5 w-5 shrink-0 text-blue-600" />

            <span className="font-medium text-gray-600">{clinic.address}</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 shrink-0 text-blue-600" />

            <span className="font-medium text-gray-600">{clinic.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardClinic;
