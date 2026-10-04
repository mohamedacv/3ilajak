import { getPatient } from "@/features/patients/api/getPatient";
import PageFormPatient from "@/features/patients/components/PageFormPatient";

interface PageProps {
  params: Promise<{
    patientsId: string;
  }>;
}

async function page({ params }: PageProps) {
  const { patientsId } = await params;

  const id = Number(patientsId);

  const patient = await getPatient(id);
  return (
    <div className="flex flex-col gap-6">
      <PageFormPatient mode="update" patientId={id} patient={patient} />
    </div>
  );
}

export default page;
