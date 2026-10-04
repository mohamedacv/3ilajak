import { Switch } from "@/components/ui/switch";
import { CalendarCheck, Eye, RotateCcwKey, Sparkles } from "lucide-react";

function ActiveWorkflows() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-8 flex flex-col gap-6 shadow p-8 bg-white rounded-xl">
        <div className="flex flex-col gap-0.5">
          <h1 className="font-bold text-xl">Active Automation Workflows</h1>
          <p>
            Manage automated notifications triggered by specific system events.
          </p>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-blue-100/50 p-5 transition hover:border-gray-300 hover:shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <CalendarCheck className="h-6 w-6 text-green-700" />
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900">
                Appointment Reminder (24h before)
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                SMS & Push to Patients
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Active
            </span>

            <Switch
              size="default"
              className="data-[state=checked]:bg-blue-700 data-[state=unchecked]:bg-gray-300"
            />
          </div>
        </div>


        <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-blue-100/50 p-5 transition hover:border-gray-300 hover:shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <RotateCcwKey className="h-6 w-6 text-blue-700" />
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900">
                Admin MFA Alert
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Email to Security Group
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Active
            </span>

            <Switch
              size="default"
              className="data-[state=checked]:bg-blue-700 data-[state=unchecked]:bg-gray-300"
            />
          </div>
        </div>


      </div>

      <div className="col-span-4 flex flex-col gap-6 p-8 shadow bg-white rounded-xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-900 text-white">
          <Sparkles className="h-6 w-6" />
        </div>
        <p>
          Notification engagement has increased by 14% this month. Recommended:
          Morning delivery for clinic updates to improve response time.
        </p>
      </div>
    </div>
  );
}

export default ActiveWorkflows;
