import { Button } from "@/components/ui/button";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface ButtonPatientProps {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
}

function ButtonPatient({ step, nextStep, prevStep }: ButtonPatientProps) {
  const router = useRouter();
  return (
    <div>
      {step === 1 ? (
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => {
              router.back();
            }}
            type="button"
            className="flex gap-1 px-4 py-4 items-center cursor-pointer"
          >
            <span className="text-lg">Cancel</span>
          </Button>

          <Button
            onClick={nextStep}
            className="flex gap-1 bg-blue-800 hover:bg-blue-950 text-white px-4 py-4 items-center cursor-pointer"
          >
            <span className="text-lg">Next</span>
            <ChevronRight className="w-7 h-7" />
          </Button>
        </div>
      ) : step < 4 ? (
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            className="flex gap-1 px-4 py-4 items-center cursor-pointer"
          >
            <ChevronLeft className="w-7 h-7" />
            <span className="text-lg">Back</span>
          </Button>

          <Button
            onClick={nextStep}
            className="flex gap-1 bg-blue-800 hover:bg-blue-950 text-white px-4 py-4 items-center cursor-pointer"
          >
            <span className="text-lg">Next</span>
            <ChevronRight className="w-7 h-7" />
          </Button>
        </div>
      ) : (
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            className="flex gap-1 px-4 py-4 items-center cursor-pointer"
          >
            <ChevronLeft className="w-7 h-7" />
            <span className="text-lg">Back</span>
          </Button>

          <Button className="flex gap-1 bg-green-700 hover:bg-green-950 text-white px-4 py-4 items-center cursor-pointer">
            <Check className="w-7 h-7" />
            <span className="text-lg">Create Patient</span>
          </Button>
        </div>
      )}
    </div>
  );
}

export default ButtonPatient;
