import { unknown } from "@/assets/images/image";
import Image from "next/image";

function PhotePatient() {
  return (
    <div className="p-6 bg-white rounded-xl shadow flex flex-col justify-center text-center gap-5">
      <Image
        src={unknown}
        alt="Profile"
        width={160}
        height={160}
        className="mx-auto h-40 w-40 rounded-full object-cover border-4 border-dashed p-1 border-gray-200"
      />

      <div className="flex flex-col gap-2">
        <p className="font-semibold text-xl">Patient Photograph</p>

        <p className="text-gray-500 font-semibold">
          JPG, PNG or GIF. Max size 2MB.
        </p>
      </div>
      <p className="font-semibold text-blue-700">Upload Photo</p>
    </div>
  );
}

export default PhotePatient;
