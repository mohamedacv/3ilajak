import { LogIn, RotateCcw, UserPlus } from "@/assets/icon/icons";

function RecentActivity() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-5 border-b border-gray-300 flex justify-between">
        <p className="text-xl font-semibold">Recent Activity</p>
      </div>

      <div className="p-5 border-b border-gray-300 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="p-3 bg-blue-300 rounded-full">
            <LogIn className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold">Successful Login</p>
            <p>Browser: Chrome on macOS • IP: 192.168.1.42</p>
          </div>
        </div>

        <p>Just now</p>
      </div>

      <div className="p-5 border-b border-gray-300 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="p-3 bg-blue-300 rounded-full">
            <RotateCcw className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold">System Config Updated</p>
            <p>Modified "Clinic Access Protocols" in Regional Settings.</p>
          </div>
        </div>

        <p>2 hours ago</p>
      </div>

      <div className="p-5 border-b border-gray-300 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="p-3 bg-blue-300 rounded-full">
            <UserPlus className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold">New Admin Approved</p>
            <p>
              Granted access to Dr. Sarah Miller for "Central Cairo Clinic".
            </p>
          </div>
        </div>

        <p>Yesterday</p>
      </div>
    </div>
  );
}

export default RecentActivity;
