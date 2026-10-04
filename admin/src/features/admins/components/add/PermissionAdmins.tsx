import { CircleCheck, SquareUserRound } from "lucide-react";

function PermissionAdmins() {
  return (
    <div className="p-5 bg-white shadow border-2 border-gray-300 rounded-xl flex flex-col gap-5">
      <div className="text-blue-800 flex gap-2 items-center">
        <SquareUserRound className="w-7 h-7" />
        <span className="font-semibold text-xl">Permission Levels</span>
      </div>
      <p>
        Adding a new administrator grants them full system access including
        financial records, patient data, and user management.
      </p>

      <div className="flex flex-col gap-2.5">
        <div className="flex gap-1.5 items-center py-1.5 px-2 bg-sky-200/40 border border-gray-300 shadow rounded-lg ">
          <CircleCheck className="w-6 h-6 text-green-800" />
          <span>Full access to medical databases</span>
        </div>

        <div className="flex gap-1.5  py-1.5 px-2 bg-sky-200/40 border border-gray-300 shadow rounded-lg ">
          <CircleCheck className="w-6 h-6 text-green-800" />
          <span>Manage billing and enterprise settings</span>
        </div>

        <div className="flex gap-1.5 items-center py-1.5 px-1.5 bg-sky-200/40 border border-gray-300 shadow rounded-lg ">
          <CircleCheck className="w-6 h-6 text-green-800" />
          <span>Audit logs and system monitoring</span>
        </div>
      </div>
    </div>
  );
}

export default PermissionAdmins;
