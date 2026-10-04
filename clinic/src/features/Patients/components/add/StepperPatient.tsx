import { Check } from "lucide-react";

interface StepperPatientProps {
  step: number;
}

const steps = [
  {
    id: 1,
    title: "Personal Info",
  },
  {
    id: 2,
    title: "Medical Info",
  },
  {
    id: 3,
    title: "Emergency Contact",
  },
  {
    id: 4,
    title: "Review & Confirm",
  },
];

function StepperPatient({ step }: StepperPatientProps) {
  return (
    <div className="w-full">
      <div className="flex items-start justify-between">
        {steps.map((item, index) => {
          const completed = step > item.id;
          const current = step === item.id;

          return (
            <div
              key={item.id}
              className={`flex items-center ${
                index !== steps.length - 1 ? "flex-1" : ""
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`
                    flex h-12 w-12 items-center justify-center rounded-full
                    font-semibold text-lg transition-all duration-300
                    ${
                      completed
                        ? "bg-green-700 text-white"
                        : current
                          ? "bg-blue-800 text-white"
                          : "bg-gray-100 text-gray-500 border border-gray-300"
                    }
                  `}
                >
                  {completed ? <Check className="h-6 w-6" /> : item.id}
                </div>

                <span
                  className={`
                    mt-2 text-sm font-medium whitespace-nowrap
                    ${
                      completed
                        ? "text-green-700"
                        : current
                          ? "text-blue-800"
                          : "text-gray-500"
                    }
                  `}
                >
                  {item.title}
                </span>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StepperPatient;
