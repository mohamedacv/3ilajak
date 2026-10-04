import { unknown } from "@/assets/images/image";
import Image from "next/image";
import { PatientResponse } from "../../api/getPatient";

function CardPatient({ patient }: { patient: PatientResponse }) {
  return (
    <div className="flex flex-col gap-8 rounded-xl bg-white p-6 shadow sm:p-8 lg:flex-row lg:gap-10">
      <div className="flex shrink-0 flex-col items-center gap-5 lg:w-36">
        <div className="relative">
          <Image
            src={unknown}
            alt="Profile"
            width={120}
            height={120}
            className="h-30 w-30 rounded-xl border-4 border-dashed border-gray-200 object-cover p-1"
          />

          <div className="absolute -bottom-2 -right-3 rounded-full capitalize bg-green-600 px-3 py-1 text-xs font-semibold text-white shadow">
            {patient.status}
          </div>
        </div>

        <div className="flex flex-col items-center gap-1 text-center">
          <p className=" font-semibold text-gray-500">
            <span className="text-sm"> BLOOD TYPE : </span>
            <span className="pl-1 font-bold text-red-700">
              {patient.Blood_Group}
            </span>
          </p>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 xl:grid-cols-3">
          <div className="flex min-w-0 flex-col gap-1">
            <p className="text-sm font-semibold text-gray-500">FULL NAME</p>

            <span className="font-medium text-gray-800">{patient.name}</span>
          </div>

          <div className="flex min-w-0 flex-col gap-1">
            <p className="text-sm font-semibold text-gray-500">NATIONAL ID</p>

            <span className="font-medium text-gray-800">
              {patient.national_id}
            </span>
          </div>

          <div className="flex min-w-0 flex-col gap-1">
            <p className="text-sm font-semibold text-gray-500">PATIENT ID</p>

            <span className="font-medium text-gray-800">#PX-{patient.id}</span>
          </div>

          <div className="flex min-w-0 flex-col gap-1">
            <p className="text-sm font-semibold text-gray-500">PHONE</p>

            <span className="font-medium text-gray-800">{patient.Phone}</span>
          </div>

          <div className="flex min-w-0 flex-col gap-1">
            <p className="text-sm font-semibold text-gray-500">EMAIL</p>

            <span className="break-all font-medium text-gray-800">
              {patient.email}
            </span>
          </div>

          <div className="flex min-w-0 flex-col gap-1">
            <p className="text-sm font-semibold text-gray-500">GENDER / DOB</p>

            <span className="font-medium text-gray-800">
              {patient.Gender} • {patient.Date_Birth}
            </span>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-5">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-gray-500">HOME ADDRESS</p>

            <span className="font-medium text-gray-800">{patient.Address}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPatient;
