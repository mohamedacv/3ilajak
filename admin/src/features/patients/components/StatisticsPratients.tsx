import StatisticsCard from "@/shared/components/atoms/StatisticsCard";
import { ChartColumnIncreasing, UserRoundCheck, Users } from "lucide-react";
import { Patients } from "../api/getAllPatients";

function StatisticsPratients({patients}:{patients:Patients[]}) {
  return (
    <div className="grid grid-cols-3 gap-4">
    
      <StatisticsCard
        title="TOTAL PATIENTS"
        desc={patients.length}
        icon={Users}
        color="bg-blue-400"
      />

      <StatisticsCard
        title="NEW THIS MONTH"
        desc="+84"
        icon={UserRoundCheck}
        color="bg-green-400 text-green-900"
      />

      <StatisticsCard
        title="ACTIVE CASES"
        desc="912"
        icon={ChartColumnIncreasing}
        color="bg-blue-800 text-white"
      />
    </div>
  );
}

export default StatisticsPratients;
