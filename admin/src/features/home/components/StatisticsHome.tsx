import { ClipboardList, ClipboardX } from "lucide-react";

function StatisticsHome() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center justify-between rounded-lg border border-gray-300 bg-white p-6 shadow">
        <div className="flex gap-3 items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full  bg-blue-400 text-white">
            <ClipboardList className="h-6 w-6" />
          </div>
          <p className="font-bold uppercase text-xl">New appointments : </p>
        </div>

        <p className="text-3xl font-bold text-gray-600">1,248</p>
      </div>

      <div className="flex items-center justify-between rounded-lg border border-gray-300 bg-white p-6 shadow">
        <div className="flex gap-3 items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-200 text-red-900">
            <ClipboardX className="h-6 w-6" />
          </div>
          <p className="font-bold uppercase text-xl">
            canceled appointments :
          </p>
        </div>

        <p className="text-3xl font-bold text-gray-600">1,248</p>
      </div>
    </div>
  );
}

export default StatisticsHome;
