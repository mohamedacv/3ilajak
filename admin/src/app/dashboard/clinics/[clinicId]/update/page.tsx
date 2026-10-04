import { getClinic } from "@/features/clinics/api/getClinic";
import FormClinics from "@/features/clinics/components/add/FormClinics";


interface PageProps {
  params: Promise<{
    clinicId: string;
  }>;
}

async function page({ params }: PageProps) {
  const { clinicId } = await params;

  const id = Number(clinicId)

  const clinic = await getClinic(id);
  return (
    <div className="flex flex-col gap-6">
      <FormClinics mode="update" clinicId={id} clinic={clinic} />
    </div>
  );
}

export default page;
