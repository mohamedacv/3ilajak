"use client";

import { useState } from "react";
import ButtonPatient from "./ButtonPatient";
import StepperPatient from "./StepperPatient";
import PersonalPatient from "./PersonalPatient";
import MedicalPatient from "./MedicalPatient";
import EmergencyPatient from "./EmergencyPatient";
import ReviewPatient from "./ReviewPatient";

function FormAddPatient() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 4) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-8 px-6 py-8 rounded-xl shadow bg-white w-full max-w-170">
        <StepperPatient step={step} />

        {step === 1 && <PersonalPatient />}
        {step === 2 && <MedicalPatient />}
        {step === 3 && <EmergencyPatient />}
        {step === 4 && <ReviewPatient />}

        <ButtonPatient step={step} nextStep={nextStep} prevStep={prevStep} />
      </div>
    </div>
  );
}

export default FormAddPatient;
