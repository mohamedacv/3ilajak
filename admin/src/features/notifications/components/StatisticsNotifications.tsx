import StatisticsCard from "@/shared/components/atoms/StatisticsCard";
import { CircleAlert, Clock, Eye, Play } from "lucide-react";

function StatisticsNotifications() {
  return (
    <div className="grid grid-cols-4 gap-3">
      <StatisticsCard
        title="TOTAL SENT"
        desc="1,248"
        icon={Play}
        color="bg-gray-300 text-blue-900"
      />

      <StatisticsCard
        title="SCHEDULED"
        desc="24"
        icon={Clock}
        color="bg-green-200 text-green-700"
      />

      <StatisticsCard
        title="OPEN RATE"
        desc="88.4%"
        icon={Eye}
        color="bg-blue-200 text-blue-700"
      />

      <StatisticsCard
        title="FAILED"
        desc="12"
        icon={CircleAlert}
        color="bg-red-100 text-red-900"
      />
    </div>
  );
}

export default StatisticsNotifications;
