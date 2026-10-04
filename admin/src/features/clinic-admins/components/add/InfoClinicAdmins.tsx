import { Info } from "lucide-react";

function InfoClinicAdmins() {
  return (
    <div className="p-5  shadow border-2 border-gray-600 bg-sky-200/40 rounded-xl flex flex-col gap-5">
      <div className="flex gap-2 items-center">
        <div className="bg-blue-800 rounded-full p-2  font-semibold text-xl text-white">
          <Info className="w-5 h-5" />
        </div>
        <span className="font-bold text-xl">Instructions</span>
      </div>

      <div className="flex gap-2 items-start">
        <div className="bg-blue-800 rounded-full px-3.5 py-1 font-semibold text-xl text-white">
          1
        </div>
        <div className="text-gray-600 ">
          Select an existing
          <span className="font-semibold text-gray-800"> System Admin. </span>
          Only accounts with
        </div>
      </div>

      <div className="flex gap-2 items-start">
        <div className="bg-blue-800 rounded-full px-3 py-1 font-semibold text-xl text-white">
          2
        </div>
        <span className="text-gray-600 ">
          Assign them to a Clinic. Once assigned, they will have administrative
          control over that specific facility's records.
        </span>
      </div>

      <div className="flex gap-2 items-start">
        <div className="bg-blue-800 rounded-full px-3 py-1 font-semibold text-xl text-white">
          3
        </div>
        <span className="text-gray-600 ">
          The new Clinic Admin will receive an email notification with their
          updated access scope immediately.
        </span>
      </div>

      <div className="bg-white w-full text-gray-600 border border-gray-600 rounded-xl p-4  text-center">
        Need to create a new admin profile first?
        <span className="text-blue-600"> Go to Admin Management.</span>
      </div>
    </div>
  );
}

export default InfoClinicAdmins;
