import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ContactRound } from "lucide-react";

function StaffingClinic() {
  return (
    <div className="rounded-xl bg-white p-5 shadow flex flex-col gap-9">
      <div className="flex items-center gap-2">
        <ContactRound className="h-6 w-6 text-blue-700" />
        <span className="text-xl font-bold">Access Control & Staffing</span>
      </div>

      <div>
        <p className="text-sm text-gray-600 font-semibold mb-1">
          ASSIGN ADMINS CLINIC
        </p>
        <div className="border rounded-xl border-gray-500 p-2 flex flex-col gap-2">
          <Label
            htmlFor="active"
            className="flex gap-3 items-center bg-sky-100/50 border border-sky-200 p-5 rounded-xl"
          >
            <Checkbox id="active" />
            <div className="p-2 text-white bg-amber-700 rounded-full font-semibold">
              ZH
            </div>
            <span className="font-semibold text-lg">Zeyad Hatem</span>
          </Label>

          <Label
            htmlFor="active"
            className="flex gap-3 items-center hover:bg-sky-100 p-4 rounded-xl"
          >
            <Checkbox id="active" />
            <div className="p-2 text-white bg-amber-700 rounded-full font-semibold">
              ZH
            </div>
            <span className="font-semibold text-lg">Zeyad Hatem</span>
          </Label>
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-600 font-semibold mb-1">
          MEDICAL STAFF (DOCTORS)
        </p>
        <div className="border rounded-xl border-gray-500 px-2 py-7 flex flex-col gap-7">
          <Label htmlFor="active" className="flex gap-3 items-center ">
            <Checkbox id="active" />
            <div className="flex flex-col">
              <p className="font-semibold ">Dr. Zeyad Hatem</p>
              <span className="text-gray-500 text-sm">
                Cardiology • ID: 99283
              </span>
            </div>

            <div className="rounded-full px-4 py-1 font-medium bg-green-400 text-green-900">
              Active
            </div>
          </Label>

          <Label htmlFor="active" className="flex gap-3 items-center">
            <Checkbox id="active" />
            <div className="flex flex-col">
              <p className="font-semibold ">Dr. Zeyad Hatem</p>
              <span className="text-gray-500 text-sm">
                Neurology • ID: 88472
              </span>
            </div>
            <div className="rounded-full px-4 py-1 font-medium bg-green-400 text-green-900">
              Active
            </div>
          </Label>
        </div>
      </div>
    </div>
  );
}

export default StaffingClinic;
