import { Clinic } from "@/features/clinics/api/getAllClinics";
import CommunicationDoctor from "./CommunicationDoctor";
import CredentialsDoctor from "./CredentialsDoctor";
import IdentityDoctor from "./IdentityDoctor";
import { Specializations } from "@/features/specializations/api/getAllSpecializations";

interface Props {
  clinics: Clinic[];
  specializations: Specializations[];
}

function FormDoctors({ clinics,specializations }: Props) {
  return (
    <div className="flex flex-col gap-8">
      <IdentityDoctor clinics={clinics} specializations={specializations} />

      <CommunicationDoctor />

      <CredentialsDoctor />
    </div>
  );
}

export default FormDoctors;
