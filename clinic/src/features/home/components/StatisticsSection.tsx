import StatisticsCard from "@/features/home/components/StatisticsCard";
import {
  BadgeDollarSign,
  CheckCircle,
  Sheet,
  UserCheck,
  Users,
  X,
} from "lucide-react";


function StatisticsSection() {
  return (
      <div className="grid grid-cols-3 gap-4">
          <StatisticsCard
            icon={Sheet}
            title="Today's Appointments"
            color="blue"
            percentage="12"
            value={47}
          />

          <StatisticsCard
            icon={CheckCircle}
            title="Completed"
            color="green"
            percentage="8"
            value={31}
          />

          <StatisticsCard
            icon={X}
            title="Cancelled"
            color="red"
            percentage="3"
            value={4}
          />

          <StatisticsCard
            icon={Users}
            title="New Patients"
            color="purple"
            percentage="25"
            value={8}
          />

          <StatisticsCard
            icon={BadgeDollarSign}
            title="Revenue Today"
            color="yellow"
            percentage="15"
            value={4.28}
          />

          <StatisticsCard
            icon={UserCheck}
            title="Active Doctors"
            color="green"
            percentage="0"
            value={12}
          />
        </div>
  )
}

export default StatisticsSection