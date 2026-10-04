import StatisticsCard from "@/shared/components/atoms/StatisticsCard";
import {
  Eye,
  Stethoscope,
  UserRoundPlus,
  UserStar,
} from "lucide-react";
import Link from "next/link";
import { ClinicResponse } from "../../api/getClinic";

function StatisticsDetailsClinic({ clinic }: { clinic: ClinicResponse }) {
  return (
    <div className="grid grid-cols-4 gap-3">
      <StatisticsCard
        title="ACTIVE ADMINS"
        desc={clinic.active_admins}
        icon={UserStar}
        color="bg-gray-300 text-blue-900"
      />

      <StatisticsCard
        title="TOTAL DOCTORS"
        desc={clinic.total_doctors}
        icon={Stethoscope}
        color="bg-green-200 text-green-700"
      />

      <StatisticsCard
        title="TODAY'S VISITS"
        desc={clinic.todays_visits}
        icon={Eye}
        color="bg-blue-200 text-blue-700"
      />

      <Link href="/dashboard/doctors/add">
        <div className="flex flex-col items-center text-center gap-2 rounded-lg cursor-pointer bg-blue-700 text-white p-6 shadow">
          <UserRoundPlus className="h-8 w-8" />

          <p className="font-semibold ">Add Doctor</p>
        </div>
      </Link>
    </div>
  );
}

export default StatisticsDetailsClinic;
