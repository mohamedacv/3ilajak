import { Info } from "lucide-react";

function SystemAdmins() {
  return (
    <div className="flex flex-col gap-5 p-5 shadow border border-gray-300 rounded-xl bg-sky-200/40 ">
      <p className="font-semibold text-lg">System Statistics</p>

      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <span className="text-gray-700 font-semibold">Active Admins</span>
          <span>12 / 15</span>
        </div>
        <div className="border-3 bg-blue-900 w-full rounded-2xl"></div>
      </div>

      <div className="flex gap-1.5 items-center text-gray-700 ">
        <Info className="w-4 h-4" />
        <span>You can add 3 more administrators.</span>
      </div>
    </div>
  );
}

export default SystemAdmins;
