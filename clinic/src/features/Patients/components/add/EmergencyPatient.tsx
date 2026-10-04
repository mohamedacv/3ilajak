import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function EmergencyPatient() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Emergency Contact</h1>

      <div className="flex flex-col gap-8 ">
        <div className="grid gap-1.5 w-full">
          <Label
            htmlFor="c_name"
            className="text-md font-semibold uppercase text-gray-500"
          >
            Contact Name
          </Label>
          <Input
            id="c_name"
            type="text"
            className="bg-gray-50 h-11 rounded-xl"
          />
        </div>

        <div className="grid gap-1.5 w-full">
          <Label
            htmlFor="relationship"
            className="text-md font-semibold uppercase text-gray-500"
          >
            Relationship
          </Label>
          <Input
            id="relationship"
            type="text"
            className="bg-gray-50 h-11 rounded-xl"
          />
        </div>

        <div className="grid gap-1.5 w-full">
          <Label
            htmlFor="phone_n"
            className="text-md font-semibold uppercase text-gray-500"
          >
            Phone Number
          </Label>
          <Input
            id="phone_n"
            type="text"
            className="bg-gray-50 h-11 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default EmergencyPatient;
