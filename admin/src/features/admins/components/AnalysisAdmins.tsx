import AnalysisCard from "@/shared/components/atoms/AnalysisCard";
import { Hospital, ShieldCheck, UserRoundX, Users } from "lucide-react";
import { Admin } from "../api/getAllAdmins";

interface AnalysisAdminsProps {
  admins: Admin[];
}

function AnalysisAdmins({ admins }: AnalysisAdminsProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <AnalysisCard
        title="TOTAL ADMINS"
        desc={admins.length}
        analysis="+4.2%"
        icon={Users}
        color="bg-gray-200 text-gray-800"
      />

      <AnalysisCard
        title="SYSTEM ADMINS"
        desc="12"
        analysis="Healthy"
        icon={ShieldCheck}
        color="bg-green-200 text-green-800"
      />

      <AnalysisCard
        title="CLINIC ADMINS"
        desc="112"
        analysis="85 Clinics"
        icon={Hospital}
        color="bg-blue-200 text-blue-800"
      />

      <AnalysisCard
        title="SUSPENDED"
        desc="03"
        analysis="Attention"
        icon={UserRoundX}
        color="bg-red-200 text-red-800"
      />
    </div>
  );
}

export default AnalysisAdmins;
