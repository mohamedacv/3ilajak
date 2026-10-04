import { ArrowRight, MapPin } from "lucide-react";

function ClinicsCard() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="border rounded-xl p-6 flex flex-col gap-2 shadow border-black">
        <div className="flex flex-col ">
          <h1 className="font-semibold text-lg">Al-Amal Medical Center</h1>
          <div className="flex gap-1 text-gray-600 items-center">
            <MapPin className="w-4 h-4" />
            <span>New Cairo, Sector 1</span>
          </div>
        </div>
        <div className="border border-gray-300/50 "></div>

        <div className="flex justify-around">
          <div className="flex flex-col ">
            <p className="text-gray-700">Admin Assigned</p>
            <span className="font-semibold">Ayman R.</span>
          </div>

          <div className="flex flex-col ">
            <p className="text-gray-700">Total Doctors</p>
            <span className="font-semibold">28 Staff</span>
          </div>
        </div>

        <div className="border border-gray-300/50 "></div>

        <div className="flex justify-between">
          <div className=""></div>

          <div className="flex text-blue-700 gap-1 items-center">
            <span>View Details</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="border rounded-xl p-6 flex flex-col gap-2 shadow border-black">
        <div className="flex flex-col ">
          <h1 className="font-semibold text-lg">Al-Amal Medical Center</h1>
          <div className="flex gap-1 text-gray-600 items-center">
            <MapPin className="w-4 h-4" />
            <span>New Cairo, Sector 1</span>
          </div>
        </div>
        <div className="border border-gray-300/50 "></div>

        <div className="flex justify-around">
          <div className="flex flex-col ">
            <p className="text-gray-700">Admin Assigned</p>
            <span className="font-semibold">Ayman R.</span>
          </div>

          <div className="flex flex-col ">
            <p className="text-gray-700">Total Doctors</p>
            <span className="font-semibold">28 Staff</span>
          </div>
        </div>

        <div className="border border-gray-300/50 "></div>

        <div className="flex justify-between">
          <div className=""></div>

          <div className="flex text-blue-700 gap-1 items-center">
            <span>View Details</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="border rounded-xl p-6 flex flex-col gap-2 shadow border-black">
        <div className="flex flex-col ">
          <h1 className="font-semibold text-lg">Al-Amal Medical Center</h1>
          <div className="flex gap-1 text-gray-600 items-center">
            <MapPin className="w-4 h-4" />
            <span>New Cairo, Sector 1</span>
          </div>
        </div>
        <div className="border border-gray-300/50 "></div>

        <div className="flex justify-around">
          <div className="flex flex-col ">
            <p className="text-gray-700">Admin Assigned</p>
            <span className="font-semibold">Ayman R.</span>
          </div>

          <div className="flex flex-col ">
            <p className="text-gray-700">Total Doctors</p>
            <span className="font-semibold">28 Staff</span>
          </div>
        </div>

        <div className="border border-gray-300/50 "></div>

        <div className="flex justify-between">
          <div className=""></div>

          <div className="flex text-blue-700 gap-1 items-center">
            <span>View Details</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClinicsCard;
