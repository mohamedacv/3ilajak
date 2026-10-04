import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

function StatusPatient() {
  return (
    <div className="flex flex-col gap-6 bg-white rounded-xl shadow p-6 border border-gray-500">
      <p className="text-xl font-bold">Account Status</p>

      <div className="flex flex-col gap-4">
        <Label
          htmlFor="active"
          className="flex cursor-pointer items-center gap-4 rounded-xl border border-gray-400 p-4"
        >
          <Checkbox id="active" />

          <div className="flex flex-col gap-1.5">
            <p className="font-semibold">Active</p>
            <span className="text-gray-700">
              Patient is eligible for services
            </span>
          </div>
        </Label>

        <Label
          htmlFor="active_2"
          className="flex cursor-pointer items-center gap-4 rounded-xl border border-gray-400 p-4"
        >
          <Checkbox id="active_2" />

          <div className="flex flex-col gap-1.5">
            <p className="font-semibold">Inactive</p>
            <span className="text-gray-700">Temporary hold on services</span>
          </div>
        </Label>
      </div>
    </div>
  );
}

export default StatusPatient;
