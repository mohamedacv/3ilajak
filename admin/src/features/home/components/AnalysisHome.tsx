import AnalysisCard from "@/shared/components/atoms/AnalysisCard";
import { ClipboardClock, ClipboardPlus, Hotel, UserRoundPlus } from "lucide-react";

function AnalysisHome() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <AnalysisCard
        title="NEW PATIENTS"
        desc="124"
        analysis="+4.2%"
        icon={UserRoundPlus}
        color="bg-gray-200 text-gray-800"
      />
      

      <AnalysisCard
        title="NEW DOCTORS"
        desc="12"
        analysis="Healthy"
        icon={ClipboardPlus}
        color="bg-green-200 text-green-800"
      />

      <AnalysisCard
        title="TOTAL CLINICS"
        desc="112"
        analysis="85 Clinics"
        icon={Hotel}
        color="bg-blue-200 text-blue-800"
      />

      <AnalysisCard
        title="TOTAL appointments"
        desc="03"
        analysis="Attention"
        icon={ClipboardClock}
        color="bg-sky-200 text-sky-800"
      />
    </div>
  );
}

export default AnalysisHome;
