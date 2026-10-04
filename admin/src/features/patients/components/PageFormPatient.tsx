"use client";
import { Button } from "@/components/ui/button";
import { addPatients } from "@/features/patients/api/addPatients";
import DemoPatient from "@/features/patients/components/add/DemoPatient";
import FormPatient from "@/features/patients/components/FormPatient";
import {
  addPatient,
  AddPatientInput,
  updatePatient,
  UpdatePatientInput,
} from "@/features/patients/schema/patient";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { PatientResponse } from "../api/getPatient";
import { updatePatients } from "../api/updatePatients";

interface FormPatientProps {
  mode?: "add" | "update";
  patientId?: number;
  patient?: PatientResponse;
}

function PageFormPatient({
  mode = "add",
  patientId,
  patient,
}: FormPatientProps) {
  const router = useRouter();

  const isUpdate = mode === "update";

  const schema = isUpdate ? updatePatient : addPatient;

  type FormInput = AddPatientInput | UpdatePatientInput;

  const methods = useForm<FormInput>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: isUpdate
      ? {
          name: patient?.name ?? "",
          Blood_Group: patient?.Blood_Group ?? "A+",
          status: patient?.status ?? "active",
          patient_id: patient?.patient_id ?? "",
          Date_Birth: patient?.Date_Birth ?? "",
          Gender: patient?.Gender ?? "Male",
          Phone: patient?.Phone ?? "",
          email: patient?.email ?? "",
          Address: patient?.Address ?? "",
        }
      : {
          name: "",
          Blood_Group: "A+",
          status: "active",
          patient_id: "",
          Date_Birth: "",
          Gender: "Male",
          Phone: "",
          email: "",
          Address: "",
        },
  });

  const {
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FormInput) => {
    try {
      if (isUpdate) {
        if (!patientId) {
          throw new Error("Patient ID is required");
        }

        const response = await updatePatients(
          patientId,
          data as UpdatePatientInput,
        );

        console.log("API Update Success:", response);

        toast.success("Patient updated successfully");
      } else {
        const response = await addPatients(data as AddPatientInput);

        console.log("API Success:", response);

        toast.success("Patient added successfully");
      }

      reset();

      router.push("/dashboard/patients");
      router.refresh();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";

      toast.error(message);

      console.log("error" , message)
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        <div className="grid grid-cols-12 items-start gap-6">
          <div className="col-span-4 flex flex-col gap-6">
            <DemoPatient />
          </div>
          <div className="col-span-8 flex flex-col gap-6">
            <FormPatient />
          </div>
        </div>

        <div className="flex gap-2 justify-end border-t-2 border-gray-400 pt-6 mt-6">
          <Button
            variant="outline"
            disabled={isSubmitting}
            onClick={() => {
              reset();
              router.back();
            }}
            type="button"
            className="h-11 w-24 text-xg text-gray-600 font-semibold cursor-pointer rounded-lg border border-gray-400"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-800 h-11 w-44 font-semibold rounded-lg text-white cursor-pointer"
          >
            {isSubmitting
              ? "Saving..."
              : isUpdate
                ? "Update Patient"
                : "Add Patient"}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default PageFormPatient;
