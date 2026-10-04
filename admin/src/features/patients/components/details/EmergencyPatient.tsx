import { PatientResponse } from "../../api/getPatient";

function EmergencyPatient({patient}:{patient:PatientResponse}) {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-blue-800 p-6 text-white shadow">
      <p className="text-lg font-bold">
        Emergency Contact
      </p>

      <div className="flex flex-col gap-1">
        <p className="font-medium">
          Marcus Rodriguez (Husband)
        </p>

        <span className="text-sm text-blue-100">
          +971 50 987 6543
        </span>
      </div>
    </div>
  );
}

export default EmergencyPatient;