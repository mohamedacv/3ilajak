import StatisticsCard from "@/shared/components/atoms/StatisticsCard";
import {
  BadgeCheck,
  ClipboardClock,
  Hospital,
  Stethoscope,
} from "lucide-react";
import { Clinic } from "../api/getAllClinics";

function StatisticsClinics({ clinic }: { clinic: Clinic[] }) {
  return (
    <div className="grid grid-cols-4 gap-3">
      <StatisticsCard
        title="TOTAL CLINICS"
        desc={clinic.length}
        icon={Hospital}
        color="bg-gray-300 text-blue-900"
      />

      <StatisticsCard
        title="ACTIVE UNITS"
        desc="22"
        icon={BadgeCheck}
        color="bg-green-200 text-green-700"
      />

      <StatisticsCard
        title="DOCTORS"
        desc="186"
        icon={Stethoscope}
        color="bg-blue-200 text-blue-700"
      />

      <StatisticsCard
        title="PENDING SETUP"
        desc="2"
        icon={ClipboardClock}
        color="bg-red-100 text-red-900"
      />
    </div>
  );
}

export default StatisticsClinics;
