import { Button } from "@/components/ui/button";

function RequestDeactivation() {
  return (
    <div className="p-7 border border-red-500 bg-red-100 rounded-lg flex justify-between items-center">
      <div>
        <p className="text-xl font-semibold text-red-600">Account Management</p>
        <p className="text-red-600">
          Deactivating your account will immediately revoke all system
          privileges.
        </p>
      </div>
      <Button className="px-4 py-5 bg-red-700 text-lg text-white">
        Request Deactivation
      </Button>
    </div>
  );
}

export default RequestDeactivation;
