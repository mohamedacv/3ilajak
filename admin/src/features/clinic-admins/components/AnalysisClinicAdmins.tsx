import AnalysisCard from "@/shared/components/atoms/AnalysisCard";
import { CircleCheck, Hospital, TriangleAlert, Users } from "lucide-react";
import { ClinicAdmins } from "../api/getClinicAdmins";

function AnalysisClinicAdmins({clinicAdmins}:{clinicAdmins:ClinicAdmins[]}) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <AnalysisCard
        title="TOTAL CLINIC ADMINS"
        desc={clinicAdmins.length}
        analysis="+12%"
        icon={Users}
        color="bg-gray-200 text-gray-800"
      />

      <AnalysisCard
        title="ASSIGNED CLINICS"
        desc="86"
        analysis="Stable"
        icon={Hospital}
        color="bg-green-200 text-green-800"
      />

      <AnalysisCard
        title="ACTIVE STATUS"
        desc="1,173"
        analysis="94%"
        icon={CircleCheck}
        color="bg-blue-200 text-blue-800"
      />

      <AnalysisCard
        title="PENDING REVIEWS"
        desc="14"
        analysis="3 Urgent"
        icon={TriangleAlert}
        color="bg-red-200 text-red-800"
      />
    </div>
  );
}

export default AnalysisClinicAdmins;
