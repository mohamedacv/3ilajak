import StatisticsCard from "@/shared/components/atoms/StatisticsCard";
import {
  CircleCheck,
  ClipboardClock,
  ClipboardList,
  Users,
} from "lucide-react";
import { Doctor } from "../api/getAllDoctors";

function StatisticsDoctors({ doctors }: { doctors: Doctor[] }) {
  return (
    <div className="grid grid-cols-4 gap-3">
      <StatisticsCard
        title="TOTAL DOCTORS"
        desc={doctors.length}
        icon={Users}
        color="bg-gray-300 text-blue-900"
      />

      <StatisticsCard
        title="ON DUTY"
        desc="842"
        icon={CircleCheck}
        color="bg-gray-300 text-green-600"
      />

      <StatisticsCard
        title="ACTIVE CLINICS"
        desc="48"
        icon={ClipboardList}
        color="bg-blue-100 text-green-800"
      />

      <StatisticsCard
        title="PENDING LICENSE"
        desc="12"
        icon={ClipboardClock}
        color="bg-red-100 text-red-900"
      />
    </div>
  );
}

export default StatisticsDoctors;
