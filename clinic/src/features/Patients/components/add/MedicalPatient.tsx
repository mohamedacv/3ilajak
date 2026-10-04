import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function MedicalPatient() {
  return (
    <div className="flex flex-col gap-4 ">
      <h1 className="text-2xl font-semibold">Medical Info</h1>

      <div className="flex flex-col gap-8 ">
        <div className="grid gap-1.5">
          <Label
            htmlFor="m_history"
            className="text-md font-semibold uppercase text-gray-500"
          >
            Medical History
          </Label>
          <Textarea
            id="m_history"
            className="bg-gray-50 min-h-25 resize-none"
          />
        </div>

        <div className="grid gap-1.5">
          <Label
            htmlFor="allergies"
            className="text-md font-semibold uppercase text-gray-500"
          >
            Allergies
          </Label>
          <Textarea
            id="allergies"
            className="bg-gray-50 min-h-25 resize-none"
          />
        </div>

        <div className="grid gap-1.5">
          <Label
            htmlFor="chronic"
            className="text-md font-semibold uppercase text-gray-500"
          >
            Chronic Diseases
          </Label>
          <Textarea id="chronic" className="bg-gray-50 min-h-25 resize-none" />
        </div>
      </div>
    </div>
  );
}

export default MedicalPatient;
